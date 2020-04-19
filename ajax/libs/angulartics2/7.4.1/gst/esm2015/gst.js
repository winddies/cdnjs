/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Angulartics2 } from 'angulartics2';
import * as i0 from "@angular/core";
import * as i1 from "angulartics2";
export class GoogleGlobalSiteTagDefaults {
    constructor() {
        this.trackingIds = [];
        if (typeof ga !== 'undefined' && ga) {
            // See: https://developers.google.com/analytics/devguides/collection/analyticsjs/ga-object-methods-reference
            ga(() => {
                ga.getAll().forEach((tracker) => {
                    /** @type {?} */
                    const id = tracker.get('trackingId');
                    // If set both in forRoot and HTML page, we want to avoid duplicates
                    if (id !== undefined && this.trackingIds.indexOf(id) === -1) {
                        this.trackingIds.push(id);
                    }
                });
            });
        }
    }
}
if (false) {
    /** @type {?} */
    GoogleGlobalSiteTagDefaults.prototype.trackingIds;
}
export class Angulartics2GoogleGlobalSiteTag {
    /**
     * @param {?} angulartics2
     */
    constructor(angulartics2) {
        this.angulartics2 = angulartics2;
        this.dimensionsAndMetrics = {};
        /** @type {?} */
        const defaults = new GoogleGlobalSiteTagDefaults;
        // Set the default settings for this module
        this.angulartics2.settings.gst = Object.assign({}, defaults, this.angulartics2.settings.gst);
    }
    /**
     * @return {?}
     */
    startTracking() {
        this.angulartics2.pageTrack
            .pipe(this.angulartics2.filterDeveloperMode())
            .subscribe((x) => this.pageTrack(x.path));
        this.angulartics2.eventTrack
            .pipe(this.angulartics2.filterDeveloperMode())
            .subscribe((x) => this.eventTrack(x.action, x.properties));
        this.angulartics2.exceptionTrack
            .pipe(this.angulartics2.filterDeveloperMode())
            .subscribe((x) => this.exceptionTrack(x));
        this.angulartics2.userTimings
            .pipe(this.angulartics2.filterDeveloperMode())
            .subscribe(x => this.userTimings(this.convertTimings(x)));
        this.angulartics2.setUsername
            .pipe(this.angulartics2.filterDeveloperMode())
            .subscribe((x) => this.setUsername(x));
        this.angulartics2.setUserProperties
            .pipe(this.angulartics2.filterDeveloperMode())
            .subscribe((x) => this.setUserProperties(x));
    }
    /**
     * Manually track page view, see:
     *
     * https://developers.google.com/analytics/devguides/collection/gtagjs/single-page-applications#tracking_virtual_pageviews
     *
     * @param {?} path relative url
     * @return {?}
     */
    pageTrack(path) {
        if (typeof gtag !== 'undefined' && gtag) {
            /** @type {?} */
            const params = Object.assign({ page_path: path, page_location: window.location.protocol + '//' + window.location.host + path }, this.dimensionsAndMetrics);
            // Custom map must be reset with all config to stay valid.
            if (this.angulartics2.settings.gst.customMap) {
                params.custom_map = this.angulartics2.settings.gst.customMap;
            }
            if (this.angulartics2.settings.gst.userId) {
                params.user_id = this.angulartics2.settings.gst.userId;
            }
            if (this.angulartics2.settings.gst.anonymizeIp) {
                params.anonymize_ip = this.angulartics2.settings.gst.anonymizeIp;
            }
            for (const id of this.angulartics2.settings.gst.trackingIds) {
                gtag('config', id, params);
            }
        }
    }
    /**
     * Send interactions to gtag, i.e. for event tracking in Google Analytics. See:
     *
     * https://developers.google.com/analytics/devguides/collection/gtagjs/events
     *
     * @param {?} action associated with the event
     * @param {?=} properties
     * @return {?}
     */
    eventTrack(action, properties = {}) {
        this.eventTrackInternal(action, Object.assign({ event_category: properties.category || 'interaction', event_label: properties.label, value: properties.value, non_interaction: properties.noninteraction }, properties.gstCustom));
    }
    /**
     * Exception Track Event in GST. See:
     *
     * https://developers.google.com/analytics/devguides/collection/gtagjs/exceptions
     *
     * @param {?} properties
     * @return {?}
     */
    exceptionTrack(properties) {
        // TODO: make interface
        //  @param {Object} properties
        //  @param {string} [properties.description]
        //  @param {boolean} [properties.fatal]
        if (properties.fatal === undefined) {
            console.log('No "fatal" provided, sending with fatal=true');
            properties.fatal = true;
        }
        properties.exDescription = properties.event ? properties.event.stack : properties.description;
        this.eventTrack('exception', {
            gstCustom: Object.assign({ 'description': properties.exDescription, 'fatal': properties.fatal }, properties.gstCustom)
        });
    }
    /**
     * User Timings Event in GST.
     * \@name userTimings
     *
     * @link https://developers.google.com/analytics/devguides/collection/gtagjs/user-timings
     * @param {?} properties Comprised of the mandatory fields:
     *  - name (string)
     *  - value (number - integer)
     * Properties can also have the optional fields:
     *  - category (string)
     *  - label (string)
     *
     * @return {?}
     */
    userTimings(properties) {
        if (!properties) {
            console.error('User timings - "properties" parameter is required to be set.');
            return;
        }
        this.eventTrackInternal('timing_complete', {
            name: properties.name,
            value: properties.value,
            event_category: properties.category,
            event_label: properties.label
        });
    }
    /**
     * @private
     * @param {?} properties
     * @return {?}
     */
    convertTimings(properties) {
        return {
            name: properties.timingVar,
            value: properties.timingValue,
            category: properties.timingCategory,
            label: properties.timingLabel
        };
    }
    /**
     * @param {?} userId
     * @return {?}
     */
    setUsername(userId) {
        this.angulartics2.settings.gst.userId = userId;
        if (typeof gtag !== 'undefined' && gtag) {
            gtag('set', { 'user_id': typeof userId === 'string' || !userId ? userId : userId.userId });
        }
    }
    /**
     * @param {?} properties
     * @return {?}
     */
    setUserProperties(properties) {
        this.setDimensionsAndMetrics(properties);
    }
    /**
     * @private
     * @param {?} properties
     * @return {?}
     */
    setDimensionsAndMetrics(properties) {
        // We want the dimensions and metrics to accumulate, so we merge with previous value
        this.dimensionsAndMetrics = Object.assign({}, this.dimensionsAndMetrics, properties);
        // Remove properties that are null or undefined
        Object.keys(this.dimensionsAndMetrics).forEach(key => {
            /** @type {?} */
            const val = this.dimensionsAndMetrics[key];
            if (val === undefined || val === null) {
                delete this.dimensionsAndMetrics[key];
            }
        });
        if (typeof gtag !== 'undefined' && gtag) {
            gtag('set', this.dimensionsAndMetrics);
        }
    }
    /**
     * @private
     * @param {?} action
     * @param {?=} properties
     * @return {?}
     */
    eventTrackInternal(action, properties = {}) {
        this.cleanProperties(properties);
        if (typeof gtag !== 'undefined' && gtag) {
            gtag('event', action, properties);
        }
    }
    /**
     * @private
     * @param {?} properties
     * @return {?}
     */
    cleanProperties(properties) {
        // GA requires that eventValue be an non-negative integer, see:
        // https://developers.google.com/analytics/devguides/collection/gtagjs/events
        if (properties.value) {
            /** @type {?} */
            const parsed = parseInt(properties.value, 10);
            properties.value = isNaN(parsed) ? 0 : parsed;
        }
    }
}
Angulartics2GoogleGlobalSiteTag.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
Angulartics2GoogleGlobalSiteTag.ctorParameters = () => [
    { type: Angulartics2 }
];
/** @nocollapse */ Angulartics2GoogleGlobalSiteTag.ngInjectableDef = i0.defineInjectable({ factory: function Angulartics2GoogleGlobalSiteTag_Factory() { return new Angulartics2GoogleGlobalSiteTag(i0.inject(i1.Angulartics2)); }, token: Angulartics2GoogleGlobalSiteTag, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    Angulartics2GoogleGlobalSiteTag.prototype.dimensionsAndMetrics;
    /**
     * @type {?}
     * @protected
     */
    Angulartics2GoogleGlobalSiteTag.prototype.angulartics2;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3N0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhcnRpY3MyL2dzdC8iLCJzb3VyY2VzIjpbImdzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsWUFBWSxFQUE0QyxNQUFNLGNBQWMsQ0FBQzs7O0FBTXRGLE1BQU0sT0FBTywyQkFBMkI7SUFHdEM7UUFGQSxnQkFBVyxHQUFhLEVBQUUsQ0FBQztRQUd6QixJQUFJLE9BQU8sRUFBRSxLQUFLLFdBQVcsSUFBSSxFQUFFLEVBQUU7WUFDbkMsNEdBQTRHO1lBQzVHLEVBQUUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ04sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQVksRUFBRSxFQUFFOzswQkFDN0IsRUFBRSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDO29CQUNwQyxvRUFBb0U7b0JBQ3BFLElBQUksRUFBRSxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTt3QkFDM0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7cUJBQzNCO2dCQUNILENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Q0FDRjs7O0lBaEJDLGtEQUEyQjs7QUFtQjdCLE1BQU0sT0FBTywrQkFBK0I7Ozs7SUFHMUMsWUFBc0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFGeEMseUJBQW9CLEdBQTJCLEVBQUUsQ0FBQzs7Y0FHbEQsUUFBUSxHQUFHLElBQUksMkJBQTJCO1FBQ2hELDJDQUEyQztRQUMzQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLHFCQUFRLFFBQVEsRUFBSyxJQUFJLENBQUMs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VSxFQUFFLE1BQU0sRUFBRTs7OztZQXpCekIsWUFBWTs7Ozs7Ozs7SUEyQm5CLCtEQUEwRDs7Ozs7SUFFOUMsdURBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBbmd1bGFydGljczIsIEdvb2dsZUdsb2JhbFNpdGVUYWdTZXR0aW5ncywgVXNlclRpbWluZ3MgfSBmcm9tICdhbmd1bGFydGljczInO1xuaW1wb3J0IHsgRXZlbnRHc3QsIFVzZXJUaW1pbmdzR3N0IH0gZnJvbSAnLi9nc3QtaW50ZXJmYWNlcyc7XG5cbmRlY2xhcmUgdmFyIGd0YWc6IGFueTtcbmRlY2xhcmUgdmFyIGdhOiBhbnk7XG5cbmV4cG9ydCBjbGFzcyBHb29nbGVHbG9iYWxTaXRlVGFnRGVmYXVsdHMgaW1wbGVtZW50cyBHb29nbGVHbG9iYWxTaXRlVGFnU2V0dGluZ3Mge1xuICB0cmFja2luZ0lkczogc3RyaW5nW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAodHlwZW9mIGdhICE9PSAndW5kZWZpbmVkJyAmJiBnYSkge1xuICAgICAgLy8gU2VlOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vYW5hbHl0aWNzanMvZ2Etb2JqZWN0LW1ldGhvZHMtcmVmZXJlbmNlXG4gICAgICBnYSgoKSA9PiB7XG4gICAgICAgIGdhLmdldEFsbCgpLmZvckVhY2goKHRyYWNrZXI6IGFueSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGlkID0gdHJhY2tlci5nZXQoJ3RyYWNraW5nSWQnKTtcbiAgICAgICAgICAvLyBJZiBzZXQgYm90aCBpbiBmb3JSb290IGFuZCBIVE1MIHBhZ2UsIHdlIHdhbnQgdG8gYXZvaWQgZHVwbGljYXRlc1xuICAgICAgICAgIGlmIChpZCAhPT0gdW5kZWZpbmVkICYmIHRoaXMudHJhY2tpbmdJZHMuaW5kZXhPZihpZCkgPT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnRyYWNraW5nSWRzLnB1c2goaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFydGljczJHb29nbGVHbG9iYWxTaXRlVGFnIHtcbiAgcHJpdmF0ZSBkaW1lbnNpb25zQW5kTWV0cmljczogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhbmd1bGFydGljczI6IEFuZ3VsYXJ0aWNzMikge1xuICAgIGNvbnN0IGRlZmF1bHRzID0gbmV3IEdvb2dsZUdsb2JhbFNpdGVUYWdEZWZhdWx0cztcbiAgICAvLyBTZXQgdGhlIGRlZmF1bHQgc2V0dGluZ3MgZm9yIHRoaXMgbW9kdWxlXG4gICAgdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ3N0ID0geyAuLi5kZWZhdWx0cywgLi4udGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ3N0IH07XG4gIH1cblxuICBzdGFydFRyYWNraW5nKCk6IHZvaWQge1xuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnBhZ2VUcmFja1xuICAgICAgLnBpcGUodGhpcy5hbmd1bGFydGljczIuZmlsdGVyRGV2ZWxvcGVyTW9kZSgpKVxuICAgICAgLnN1YnNjcmliZSgoeCkgPT4gdGhpcy5wYWdlVHJhY2soeC5wYXRoKSk7XG4gICAgdGhpcy5hbmd1bGFydGljczIuZXZlbnRUcmFja1xuICAgICAgLnBpcGUodGhpcy5hbmd1bGFydGljczIuZmlsdGVyRGV2ZWxvcGVyTW9kZSgpKVxuICAgICAgLnN1YnNjcmliZSgoeCkgPT4gdGhpcy5ldmVudFRyYWNrKHguYWN0aW9uLCB4LnByb3BlcnRpZXMpKTtcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5leGNlcHRpb25UcmFja1xuICAgICAgLnBpcGUodGhpcy5hbmd1bGFydGljczIuZmlsdGVyRGV2ZWxvcGVyTW9kZSgpKVxuICAgICAgLnN1YnNjcmliZSgoeDogYW55KSA9PiB0aGlzLmV4Y2VwdGlvblRyYWNrKHgpKTtcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi51c2VyVGltaW5nc1xuICAgICAgLnBpcGUodGhpcy5hbmd1bGFydGljczIuZmlsdGVyRGV2ZWxvcGVyTW9kZSgpKVxuICAgICAgLnN1YnNjcmliZSh4ID0+IHRoaXMudXNlclRpbWluZ3ModGhpcy5jb252ZXJ0VGltaW5ncyh4KSkpO1xuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldFVzZXJuYW1lXG4gICAgICAucGlwZSh0aGlzLmFuZ3VsYXJ0aWNzMi5maWx0ZXJEZXZlbG9wZXJNb2RlKCkpXG4gICAgICAuc3Vic2NyaWJlKCh4OiBzdHJpbmcpID0+IHRoaXMuc2V0VXNlcm5hbWUoeCkpO1xuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldFVzZXJQcm9wZXJ0aWVzXG4gICAgICAucGlwZSh0aGlzLmFuZ3VsYXJ0aWNzMi5maWx0ZXJEZXZlbG9wZXJNb2RlKCkpXG4gICAgICAuc3Vic2NyaWJlKCh4OiBhbnkpID0+IHRoaXMuc2V0VXNlclByb3BlcnRpZXMoeCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1hbnVhbGx5IHRyYWNrIHBhZ2Ugdmlldywgc2VlOlxuICAgKlxuICAgKiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vZ3RhZ2pzL3NpbmdsZS1wYWdlLWFwcGxpY2F0aW9ucyN0cmFja2luZ192aXJ0dWFsX3BhZ2V2aWV3c1xuICAgKlxuICAgKiBAcGFyYW0gcGF0aCByZWxhdGl2ZSB1cmxcbiAgICovXG4gIHBhZ2VUcmFjayhwYXRoOiBzdHJpbmcpIHtcbiAgICBpZiAodHlwZW9mIGd0YWcgIT09ICd1bmRlZmluZWQnICYmIGd0YWcpIHtcbiAgICAgIGNvbnN0IHBhcmFtczogYW55ID0ge1xuICAgICAgICBwYWdlX3BhdGg6IHBhdGgsXG4gICAgICAgIHBhZ2VfbG9jYXRpb246IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyB3aW5kb3cubG9jYXRpb24uaG9zdCArIHBhdGgsXG4gICAgICAgIC4uLnRoaXMuZGltZW5zaW9uc0FuZE1ldHJpY3NcbiAgICAgIH07XG5cbiAgICAgIC8vIEN1c3RvbSBtYXAgbXVzdCBiZSByZXNldCB3aXRoIGFsbCBjb25maWcgdG8gc3RheSB2YWxpZC5cblxuICAgICAgaWYgKHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmdzdC5jdXN0b21NYXApIHtcbiAgICAgICAgcGFyYW1zLmN1c3RvbV9tYXAgPSB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXR0aW5ncy5nc3QuY3VzdG9tTWFwO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmdzdC51c2VySWQpIHtcbiAgICAgICAgcGFyYW1zLnVzZXJfaWQgPSB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXR0aW5ncy5nc3QudXNlcklkO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmdzdC5hbm9ueW1pemVJcCkge1xuICAgICAgICBwYXJhbXMuYW5vbnltaXplX2lwID0gdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ3N0LmFub255bWl6ZUlwO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGNvbnN0IGlkIG9mIHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmdzdC50cmFja2luZ0lkcykge1xuICAgICAgICBndGFnKCdjb25maWcnLCBpZCwgcGFyYW1zKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBpbnRlcmFjdGlvbnMgdG8gZ3RhZywgaS5lLiBmb3IgZXZlbnQgdHJhY2tpbmcgaW4gR29vZ2xlIEFuYWx5dGljcy4gU2VlOlxuICAgKlxuICAgKiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vZ3RhZ2pzL2V2ZW50c1xuICAgKlxuICAgKiBAcGFyYW0gYWN0aW9uIGFzc29jaWF0ZWQgd2l0aCB0aGUgZXZlbnRcbiAgICovXG4gIGV2ZW50VHJhY2soYWN0aW9uOiBzdHJpbmcsIHByb3BlcnRpZXM6IFBhcnRpYWw8RXZlbnRHc3Q+ID0ge30pIHtcbiAgICB0aGlzLmV2ZW50VHJhY2tJbnRlcm5hbChhY3Rpb24sIHtcbiAgICAgIGV2ZW50X2NhdGVnb3J5OiBwcm9wZXJ0aWVzLmNhdGVnb3J5IHx8ICdpbnRlcmFjdGlvbicsXG4gICAgICBldmVudF9sYWJlbDogcHJvcGVydGllcy5sYWJlbCxcbiAgICAgIHZhbHVlOiBwcm9wZXJ0aWVzLnZhbHVlLFxuICAgICAgbm9uX2ludGVyYWN0aW9uOiBwcm9wZXJ0aWVzLm5vbmludGVyYWN0aW9uLFxuICAgICAgLi4ucHJvcGVydGllcy5nc3RDdXN0b21cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeGNlcHRpb24gVHJhY2sgRXZlbnQgaW4gR1NULiBTZWU6XG4gICAqXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9ndGFnanMvZXhjZXB0aW9uc1xuICAgKlxuICAgKi9cbiAgZXhjZXB0aW9uVHJhY2socHJvcGVydGllczogYW55KSB7XG4gICAgLy8gVE9ETzogbWFrZSBpbnRlcmZhY2VcbiAgICAvLyAgQHBhcmFtIHtPYmplY3R9IHByb3BlcnRpZXNcbiAgICAvLyAgQHBhcmFtIHtzdHJpbmd9IFtwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uXVxuICAgIC8vICBAcGFyYW0ge2Jvb2xlYW59IFtwcm9wZXJ0aWVzLmZhdGFsXVxuICAgIGlmIChwcm9wZXJ0aWVzLmZhdGFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdObyBcImZhdGFsXCIgcHJvdmlkZWQsIHNlbmRpbmcgd2l0aCBmYXRhbD10cnVlJyk7XG4gICAgICBwcm9wZXJ0aWVzLmZhdGFsID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcm9wZXJ0aWVzLmV4RGVzY3JpcHRpb24gPSBwcm9wZXJ0aWVzLmV2ZW50ID8gcHJvcGVydGllcy5ldmVudC5zdGFjayA6IHByb3BlcnRpZXMuZGVzY3JpcHRpb247XG5cbiAgICB0aGlzLmV2ZW50VHJhY2soJ2V4Y2VwdGlvbicsIHtcbiAgICAgIGdzdEN1c3RvbToge1xuICAgICAgICAnZGVzY3JpcHRpb24nOiBwcm9wZXJ0aWVzLmV4RGVzY3JpcHRpb24sXG4gICAgICAgICdmYXRhbCc6IHByb3BlcnRpZXMuZmF0YWwsXG4gICAgICAgIC4uLnByb3BlcnRpZXMuZ3N0Q3VzdG9tXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVXNlciBUaW1pbmdzIEV2ZW50IGluIEdTVC5cbiAgICogQG5hbWUgdXNlclRpbWluZ3NcbiAgICpcbiAgICogQHBhcmFtIHByb3BlcnRpZXMgQ29tcHJpc2VkIG9mIHRoZSBtYW5kYXRvcnkgZmllbGRzOlxuICAgKiAgLSBuYW1lIChzdHJpbmcpXG4gICAqICAtIHZhbHVlIChudW1iZXIgLSBpbnRlZ2VyKVxuICAgKiBQcm9wZXJ0aWVzIGNhbiBhbHNvIGhhdmUgdGhlIG9wdGlvbmFsIGZpZWxkczpcbiAgICogIC0gY2F0ZWdvcnkgKHN0cmluZylcbiAgICogIC0gbGFiZWwgKHN0cmluZylcbiAgICpcbiAgICogQGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL2d0YWdqcy91c2VyLXRpbWluZ3NcbiAgICovXG4gIHVzZXJUaW1pbmdzKHByb3BlcnRpZXM6IFVzZXJUaW1pbmdzR3N0KSB7XG4gICAgaWYgKCFwcm9wZXJ0aWVzKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdVc2VyIHRpbWluZ3MgLSBcInByb3BlcnRpZXNcIiBwYXJhbWV0ZXIgaXMgcmVxdWlyZWQgdG8gYmUgc2V0LicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZXZlbnRUcmFja0ludGVybmFsKCd0aW1pbmdfY29tcGxldGUnLCB7XG4gICAgICBuYW1lOiBwcm9wZXJ0aWVzLm5hbWUsXG4gICAgICB2YWx1ZTogcHJvcGVydGllcy52YWx1ZSxcbiAgICAgIGV2ZW50X2NhdGVnb3J5OiBwcm9wZXJ0aWVzLmNhdGVnb3J5LFxuICAgICAgZXZlbnRfbGFiZWw6IHByb3BlcnRpZXMubGFiZWxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydFRpbWluZ3MocHJvcGVydGllczogVXNlclRpbWluZ3MpOiBVc2VyVGltaW5nc0dzdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHByb3BlcnRpZXMudGltaW5nVmFyLFxuICAgICAgdmFsdWU6IHByb3BlcnRpZXMudGltaW5nVmFsdWUsXG4gICAgICBjYXRlZ29yeTogcHJvcGVydGllcy50aW1pbmdDYXRlZ29yeSxcbiAgICAgIGxhYmVsOiBwcm9wZXJ0aWVzLnRpbWluZ0xhYmVsXG4gICAgfTtcbiAgfVxuXG4gIHNldFVzZXJuYW1lKHVzZXJJZDogc3RyaW5nIHwgeyB1c2VySWQ6IHN0cmluZyB8IG51bWJlciB9KSB7XG4gICAgdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ3N0LnVzZXJJZCA9IHVzZXJJZDtcbiAgICBpZiAodHlwZW9mIGd0YWcgIT09ICd1bmRlZmluZWQnICYmIGd0YWcpIHtcbiAgICAgIGd0YWcoJ3NldCcsIHsgJ3VzZXJfaWQnOiB0eXBlb2YgdXNlcklkID09PSAnc3RyaW5nJyB8fCAhdXNlcklkID8gdXNlcklkIDogdXNlcklkLnVzZXJJZCB9KTtcbiAgICB9XG4gIH1cblxuICBzZXRVc2VyUHJvcGVydGllcyhwcm9wZXJ0aWVzOiBhbnkpIHtcbiAgICB0aGlzLnNldERpbWVuc2lvbnNBbmRNZXRyaWNzKHByb3BlcnRpZXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXREaW1lbnNpb25zQW5kTWV0cmljcyhwcm9wZXJ0aWVzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgLy8gV2Ugd2FudCB0aGUgZGltZW5zaW9ucyBhbmQgbWV0cmljcyB0byBhY2N1bXVsYXRlLCBzbyB3ZSBtZXJnZSB3aXRoIHByZXZpb3VzIHZhbHVlXG4gICAgdGhpcy5kaW1lbnNpb25zQW5kTWV0cmljcyA9IHtcbiAgICAgIC4uLnRoaXMuZGltZW5zaW9uc0FuZE1ldHJpY3MsXG4gICAgICAuLi5wcm9wZXJ0aWVzXG4gICAgfTtcblxuICAgIC8vIFJlbW92ZSBwcm9wZXJ0aWVzIHRoYXQgYXJlIG51bGwgb3IgdW5kZWZpbmVkXG4gICAgT2JqZWN0LmtleXModGhpcy5kaW1lbnNpb25zQW5kTWV0cmljcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gdGhpcy5kaW1lbnNpb25zQW5kTWV0cmljc1trZXldO1xuICAgICAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkIHx8IHZhbCA9PT0gbnVsbCkge1xuICAgICAgICBkZWxldGUgdGhpcy5kaW1lbnNpb25zQW5kTWV0cmljc1trZXldO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHR5cGVvZiBndGFnICE9PSAndW5kZWZpbmVkJyAmJiBndGFnKSB7XG4gICAgICBndGFnKCdzZXQnLCB0aGlzLmRpbWVuc2lvbnNBbmRNZXRyaWNzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGV2ZW50VHJhY2tJbnRlcm5hbChhY3Rpb246IHN0cmluZywgcHJvcGVydGllczogYW55ID0ge30pIHtcbiAgICB0aGlzLmNsZWFuUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgICBpZiAodHlwZW9mIGd0YWcgIT09ICd1bmRlZmluZWQnICYmIGd0YWcpIHtcbiAgICAgIGd0YWcoJ2V2ZW50JywgYWN0aW9uLCBwcm9wZXJ0aWVzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNsZWFuUHJvcGVydGllcyhwcm9wZXJ0aWVzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9KTogdm9pZCB7XG4gICAgLy8gR0EgcmVxdWlyZXMgdGhhdCBldmVudFZhbHVlIGJlIGFuIG5vbi1uZWdhdGl2ZSBpbnRlZ2VyLCBzZWU6XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL2d0YWdqcy9ldmVudHNcbiAgICBpZiAocHJvcGVydGllcy52YWx1ZSkge1xuICAgICAgY29uc3QgcGFyc2VkID0gcGFyc2VJbnQocHJvcGVydGllcy52YWx1ZSwgMTApO1xuICAgICAgcHJvcGVydGllcy52YWx1ZSA9IGlzTmFOKHBhcnNlZCkgPyAwIDogcGFyc2VkO1xuICAgIH1cbiAgfVxufVxuIl19