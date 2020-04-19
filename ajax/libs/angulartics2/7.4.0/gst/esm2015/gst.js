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
                gtag('config', id, Object.assign({}, params));
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
            for (const id of this.angulartics2.settings.gst.trackingIds) {
                gtag('set', id, { 'user_id': (typeof userId === 'string' ? userId : userId.userId) });
            }
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
            for (const id of this.angulartics2.settings.gst.trackingIds) {
                gtag('set', id, this.dimensionsAndMetrics);
            }
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
    /** @type {?} */
    Angulartics2GoogleGlobalSiteTag.prototype.dimensionsAndMetrics;
    /**
     * @type {?}
     * @protected
     */
    Angulartics2GoogleGlobalSiteTag.prototype.angulartics2;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3N0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhcnRpY3MyL2dzdC8iLCJzb3VyY2VzIjpbImdzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsWUFBWSxFQUE0QyxNQUFNLGNBQWMsQ0FBQzs7O0FBTXRGLE1BQU0sT0FBTywyQkFBMkI7SUFHdEM7UUFGQSxnQkFBVyxHQUFhLEVBQUUsQ0FBQztRQUd6QixJQUFJLE9BQU8sRUFBRSxLQUFLLFdBQVcsSUFBSSxFQUFFLEVBQUU7WUFDbkMsNEdBQTRHO1lBQzVHLEVBQUUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ04sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQVksRUFBRSxFQUFFOzswQkFDN0IsRUFBRSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDO29CQUNwQyxvRUFBb0U7b0JBQ3BFLElBQUksRUFBRSxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTt3QkFDM0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7cUJBQzNCO2dCQUNILENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Q0FDRjs7O0lBaEJDLGtEQUEyQjs7QUFtQjdCLE1BQU0sT0FBTywrQkFBK0I7Ozs7SUFHMUMsWUFBc0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFGaEQseUJBQW9CLEdBQTJCLEVBQUUsQ0FBQzs7Y0FHMUMsUUFBUSxHQUFHLElBQUksMkJBQTJCO1FBQ2hELDJDQUEyQztRQUMzQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLHFCQUFRLFFBQVEsRUFBSyxJQUFJLENBQUMs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TSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQztZQUM3QyxVQUFVLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7U0FDL0M7SUFDSCxDQUFDOzs7WUFqTUYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztZQXpCekIsWUFBWTs7Ozs7SUEyQm5CLCtEQUFrRDs7Ozs7SUFFdEMsdURBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBbmd1bGFydGljczIsIEdvb2dsZUdsb2JhbFNpdGVUYWdTZXR0aW5ncywgVXNlclRpbWluZ3MgfSBmcm9tICdhbmd1bGFydGljczInO1xuaW1wb3J0IHsgRXZlbnRHc3QsIFVzZXJUaW1pbmdzR3N0IH0gZnJvbSAnLi9nc3QtaW50ZXJmYWNlcyc7XG5cbmRlY2xhcmUgdmFyIGd0YWc6IGFueTtcbmRlY2xhcmUgdmFyIGdhOiBhbnk7XG5cbmV4cG9ydCBjbGFzcyBHb29nbGVHbG9iYWxTaXRlVGFnRGVmYXVsdHMgaW1wbGVtZW50cyBHb29nbGVHbG9iYWxTaXRlVGFnU2V0dGluZ3Mge1xuICB0cmFja2luZ0lkczogc3RyaW5nW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAodHlwZW9mIGdhICE9PSAndW5kZWZpbmVkJyAmJiBnYSkge1xuICAgICAgLy8gU2VlOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vYW5hbHl0aWNzanMvZ2Etb2JqZWN0LW1ldGhvZHMtcmVmZXJlbmNlXG4gICAgICBnYSgoKSA9PiB7XG4gICAgICAgIGdhLmdldEFsbCgpLmZvckVhY2goKHRyYWNrZXI6IGFueSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGlkID0gdHJhY2tlci5nZXQoJ3RyYWNraW5nSWQnKTtcbiAgICAgICAgICAvLyBJZiBzZXQgYm90aCBpbiBmb3JSb290IGFuZCBIVE1MIHBhZ2UsIHdlIHdhbnQgdG8gYXZvaWQgZHVwbGljYXRlc1xuICAgICAgICAgIGlmIChpZCAhPT0gdW5kZWZpbmVkICYmIHRoaXMudHJhY2tpbmdJZHMuaW5kZXhPZihpZCkgPT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnRyYWNraW5nSWRzLnB1c2goaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFydGljczJHb29nbGVHbG9iYWxTaXRlVGFnIHtcbiAgZGltZW5zaW9uc0FuZE1ldHJpY3M6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYW5ndWxhcnRpY3MyOiBBbmd1bGFydGljczIpIHtcbiAgICBjb25zdCBkZWZhdWx0cyA9IG5ldyBHb29nbGVHbG9iYWxTaXRlVGFnRGVmYXVsdHM7XG4gICAgLy8gU2V0IHRoZSBkZWZhdWx0IHNldHRpbmdzIGZvciB0aGlzIG1vZHVsZVxuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmdzdCA9IHsgLi4uZGVmYXVsdHMsIC4uLnRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmdzdCB9O1xuICB9XG5cbiAgc3RhcnRUcmFja2luZygpOiB2b2lkIHtcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5wYWdlVHJhY2tcbiAgICAgIC5waXBlKHRoaXMuYW5ndWxhcnRpY3MyLmZpbHRlckRldmVsb3Blck1vZGUoKSlcbiAgICAgIC5zdWJzY3JpYmUoKHgpID0+IHRoaXMucGFnZVRyYWNrKHgucGF0aCkpO1xuICAgIHRoaXMuYW5ndWxhcnRpY3MyLmV2ZW50VHJhY2tcbiAgICAgIC5waXBlKHRoaXMuYW5ndWxhcnRpY3MyLmZpbHRlckRldmVsb3Blck1vZGUoKSlcbiAgICAgIC5zdWJzY3JpYmUoKHgpID0+IHRoaXMuZXZlbnRUcmFjayh4LmFjdGlvbiwgeC5wcm9wZXJ0aWVzKSk7XG4gICAgdGhpcy5hbmd1bGFydGljczIuZXhjZXB0aW9uVHJhY2tcbiAgICAgIC5waXBlKHRoaXMuYW5ndWxhcnRpY3MyLmZpbHRlckRldmVsb3Blck1vZGUoKSlcbiAgICAgIC5zdWJzY3JpYmUoKHg6IGFueSkgPT4gdGhpcy5leGNlcHRpb25UcmFjayh4KSk7XG4gICAgdGhpcy5hbmd1bGFydGljczIudXNlclRpbWluZ3NcbiAgICAgIC5waXBlKHRoaXMuYW5ndWxhcnRpY3MyLmZpbHRlckRldmVsb3Blck1vZGUoKSlcbiAgICAgIC5zdWJzY3JpYmUoeCA9PiB0aGlzLnVzZXJUaW1pbmdzKHRoaXMuY29udmVydFRpbWluZ3MoeCkpKTtcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXRVc2VybmFtZVxuICAgICAgLnBpcGUodGhpcy5hbmd1bGFydGljczIuZmlsdGVyRGV2ZWxvcGVyTW9kZSgpKVxuICAgICAgLnN1YnNjcmliZSgoeDogc3RyaW5nKSA9PiB0aGlzLnNldFVzZXJuYW1lKHgpKTtcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXRVc2VyUHJvcGVydGllc1xuICAgICAgLnBpcGUodGhpcy5hbmd1bGFydGljczIuZmlsdGVyRGV2ZWxvcGVyTW9kZSgpKVxuICAgICAgLnN1YnNjcmliZSgoeDogYW55KSA9PiB0aGlzLnNldFVzZXJQcm9wZXJ0aWVzKHgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYW51YWxseSB0cmFjayBwYWdlIHZpZXcsIHNlZTpcbiAgICpcbiAgICogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL2d0YWdqcy9zaW5nbGUtcGFnZS1hcHBsaWNhdGlvbnMjdHJhY2tpbmdfdmlydHVhbF9wYWdldmlld3NcbiAgICpcbiAgICogQHBhcmFtIHBhdGggcmVsYXRpdmUgdXJsXG4gICAqL1xuICBwYWdlVHJhY2socGF0aDogc3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiBndGFnICE9PSAndW5kZWZpbmVkJyAmJiBndGFnKSB7XG4gICAgICBjb25zdCBwYXJhbXM6IGFueSA9IHtcbiAgICAgICAgcGFnZV9wYXRoOiBwYXRoLFxuICAgICAgICBwYWdlX2xvY2F0aW9uOiB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgd2luZG93LmxvY2F0aW9uLmhvc3QgKyBwYXRoLFxuICAgICAgICAuLi50aGlzLmRpbWVuc2lvbnNBbmRNZXRyaWNzXG4gICAgICB9O1xuXG4gICAgICAvLyBDdXN0b20gbWFwIG11c3QgYmUgcmVzZXQgd2l0aCBhbGwgY29uZmlnIHRvIHN0YXkgdmFsaWQuXG5cbiAgICAgIGlmICh0aGlzLmFuZ3VsYXJ0aWNzMi5zZXR0aW5ncy5nc3QuY3VzdG9tTWFwKSB7XG4gICAgICAgIHBhcmFtcy5jdXN0b21fbWFwID0gdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ3N0LmN1c3RvbU1hcDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmFuZ3VsYXJ0aWNzMi5zZXR0aW5ncy5nc3QudXNlcklkKSB7XG4gICAgICAgIHBhcmFtcy51c2VyX2lkID0gdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ3N0LnVzZXJJZDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmFuZ3VsYXJ0aWNzMi5zZXR0aW5ncy5nc3QuYW5vbnltaXplSXApIHtcbiAgICAgICAgcGFyYW1zLmFub255bWl6ZV9pcCA9IHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmdzdC5hbm9ueW1pemVJcDtcbiAgICAgIH1cblxuICAgICAgZm9yIChjb25zdCBpZCBvZiB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXR0aW5ncy5nc3QudHJhY2tpbmdJZHMpIHtcbiAgICAgICAgZ3RhZygnY29uZmlnJywgaWQsIHsgLi4ucGFyYW1zIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIGludGVyYWN0aW9ucyB0byBndGFnLCBpLmUuIGZvciBldmVudCB0cmFja2luZyBpbiBHb29nbGUgQW5hbHl0aWNzLiBTZWU6XG4gICAqXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9ndGFnanMvZXZlbnRzXG4gICAqXG4gICAqIEBwYXJhbSBhY3Rpb24gYXNzb2NpYXRlZCB3aXRoIHRoZSBldmVudFxuICAgKi9cbiAgZXZlbnRUcmFjayhhY3Rpb246IHN0cmluZywgcHJvcGVydGllczogUGFydGlhbDxFdmVudEdzdD4gPSB7fSkge1xuICAgIHRoaXMuZXZlbnRUcmFja0ludGVybmFsKGFjdGlvbiwge1xuICAgICAgZXZlbnRfY2F0ZWdvcnk6IHByb3BlcnRpZXMuY2F0ZWdvcnkgfHwgJ2ludGVyYWN0aW9uJyxcbiAgICAgIGV2ZW50X2xhYmVsOiBwcm9wZXJ0aWVzLmxhYmVsLFxuICAgICAgdmFsdWU6IHByb3BlcnRpZXMudmFsdWUsXG4gICAgICBub25faW50ZXJhY3Rpb246IHByb3BlcnRpZXMubm9uaW50ZXJhY3Rpb24sXG4gICAgICAuLi5wcm9wZXJ0aWVzLmdzdEN1c3RvbVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4Y2VwdGlvbiBUcmFjayBFdmVudCBpbiBHU1QuIFNlZTpcbiAgICpcbiAgICogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL2d0YWdqcy9leGNlcHRpb25zXG4gICAqXG4gICAqL1xuICBleGNlcHRpb25UcmFjayhwcm9wZXJ0aWVzOiBhbnkpIHtcbiAgICAvLyBUT0RPOiBtYWtlIGludGVyZmFjZVxuICAgIC8vICBAcGFyYW0ge09iamVjdH0gcHJvcGVydGllc1xuICAgIC8vICBAcGFyYW0ge3N0cmluZ30gW3Byb3BlcnRpZXMuZGVzY3JpcHRpb25dXG4gICAgLy8gIEBwYXJhbSB7Ym9vbGVhbn0gW3Byb3BlcnRpZXMuZmF0YWxdXG4gICAgaWYgKHByb3BlcnRpZXMuZmF0YWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc29sZS5sb2coJ05vIFwiZmF0YWxcIiBwcm92aWRlZCwgc2VuZGluZyB3aXRoIGZhdGFsPXRydWUnKTtcbiAgICAgIHByb3BlcnRpZXMuZmF0YWwgPSB0cnVlO1xuICAgIH1cblxuICAgIHByb3BlcnRpZXMuZXhEZXNjcmlwdGlvbiA9IHByb3BlcnRpZXMuZXZlbnQgPyBwcm9wZXJ0aWVzLmV2ZW50LnN0YWNrIDogcHJvcGVydGllcy5kZXNjcmlwdGlvbjtcblxuICAgIHRoaXMuZXZlbnRUcmFjaygnZXhjZXB0aW9uJywge1xuICAgICAgZ3N0Q3VzdG9tOiB7XG4gICAgICAgICdkZXNjcmlwdGlvbic6IHByb3BlcnRpZXMuZXhEZXNjcmlwdGlvbixcbiAgICAgICAgJ2ZhdGFsJzogcHJvcGVydGllcy5mYXRhbCxcbiAgICAgICAgLi4ucHJvcGVydGllcy5nc3RDdXN0b21cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2VyIFRpbWluZ3MgRXZlbnQgaW4gR1NULlxuICAgKiBAbmFtZSB1c2VyVGltaW5nc1xuICAgKlxuICAgKiBAcGFyYW0gcHJvcGVydGllcyBDb21wcmlzZWQgb2YgdGhlIG1hbmRhdG9yeSBmaWVsZHM6XG4gICAqICAtIG5hbWUgKHN0cmluZylcbiAgICogIC0gdmFsdWUgKG51bWJlciAtIGludGVnZXIpXG4gICAqIFByb3BlcnRpZXMgY2FuIGFsc28gaGF2ZSB0aGUgb3B0aW9uYWwgZmllbGRzOlxuICAgKiAgLSBjYXRlZ29yeSAoc3RyaW5nKVxuICAgKiAgLSBsYWJlbCAoc3RyaW5nKVxuICAgKlxuICAgKiBAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vZ3RhZ2pzL3VzZXItdGltaW5nc1xuICAgKi9cbiAgdXNlclRpbWluZ3MocHJvcGVydGllczogVXNlclRpbWluZ3NHc3QpIHtcbiAgICBpZiAoIXByb3BlcnRpZXMpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1VzZXIgdGltaW5ncyAtIFwicHJvcGVydGllc1wiIHBhcmFtZXRlciBpcyByZXF1aXJlZCB0byBiZSBzZXQuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5ldmVudFRyYWNrSW50ZXJuYWwoJ3RpbWluZ19jb21wbGV0ZScsIHtcbiAgICAgIG5hbWU6IHByb3BlcnRpZXMubmFtZSxcbiAgICAgIHZhbHVlOiBwcm9wZXJ0aWVzLnZhbHVlLFxuICAgICAgZXZlbnRfY2F0ZWdvcnk6IHByb3BlcnRpZXMuY2F0ZWdvcnksXG4gICAgICBldmVudF9sYWJlbDogcHJvcGVydGllcy5sYWJlbFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0VGltaW5ncyhwcm9wZXJ0aWVzOiBVc2VyVGltaW5ncyk6IFVzZXJUaW1pbmdzR3N0IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogcHJvcGVydGllcy50aW1pbmdWYXIsXG4gICAgICB2YWx1ZTogcHJvcGVydGllcy50aW1pbmdWYWx1ZSxcbiAgICAgIGNhdGVnb3J5OiBwcm9wZXJ0aWVzLnRpbWluZ0NhdGVnb3J5LFxuICAgICAgbGFiZWw6IHByb3BlcnRpZXMudGltaW5nTGFiZWxcbiAgICB9O1xuICB9XG5cbiAgc2V0VXNlcm5hbWUodXNlcklkOiBzdHJpbmcgfCB7IHVzZXJJZDogc3RyaW5nIHwgbnVtYmVyIH0pIHtcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXR0aW5ncy5nc3QudXNlcklkID0gdXNlcklkO1xuICAgIGlmICh0eXBlb2YgZ3RhZyAhPT0gJ3VuZGVmaW5lZCcgJiYgZ3RhZykge1xuICAgICAgZm9yIChjb25zdCBpZCBvZiB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXR0aW5ncy5nc3QudHJhY2tpbmdJZHMpIHtcbiAgICAgICAgZ3RhZygnc2V0JywgaWQsIHsgJ3VzZXJfaWQnOiAodHlwZW9mIHVzZXJJZCA9PT0gJ3N0cmluZycgPyB1c2VySWQgOiB1c2VySWQudXNlcklkKSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRVc2VyUHJvcGVydGllcyhwcm9wZXJ0aWVzOiBhbnkpIHtcbiAgICB0aGlzLnNldERpbWVuc2lvbnNBbmRNZXRyaWNzKHByb3BlcnRpZXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXREaW1lbnNpb25zQW5kTWV0cmljcyhwcm9wZXJ0aWVzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgLy8gV2Ugd2FudCB0aGUgZGltZW5zaW9ucyBhbmQgbWV0cmljcyB0byBhY2N1bXVsYXRlLCBzbyB3ZSBtZXJnZSB3aXRoIHByZXZpb3VzIHZhbHVlXG4gICAgdGhpcy5kaW1lbnNpb25zQW5kTWV0cmljcyA9IHtcbiAgICAgIC4uLnRoaXMuZGltZW5zaW9uc0FuZE1ldHJpY3MsXG4gICAgICAuLi5wcm9wZXJ0aWVzXG4gICAgfTtcblxuICAgIC8vIFJlbW92ZSBwcm9wZXJ0aWVzIHRoYXQgYXJlIG51bGwgb3IgdW5kZWZpbmVkXG4gICAgT2JqZWN0LmtleXModGhpcy5kaW1lbnNpb25zQW5kTWV0cmljcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gdGhpcy5kaW1lbnNpb25zQW5kTWV0cmljc1trZXldO1xuICAgICAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkIHx8IHZhbCA9PT0gbnVsbCkge1xuICAgICAgICBkZWxldGUgdGhpcy5kaW1lbnNpb25zQW5kTWV0cmljc1trZXldO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHR5cGVvZiBndGFnICE9PSAndW5kZWZpbmVkJyAmJiBndGFnKSB7XG4gICAgICBmb3IgKGNvbnN0IGlkIG9mIHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmdzdC50cmFja2luZ0lkcykge1xuICAgICAgICBndGFnKCdzZXQnLCBpZCwgdGhpcy5kaW1lbnNpb25zQW5kTWV0cmljcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBldmVudFRyYWNrSW50ZXJuYWwoYWN0aW9uOiBzdHJpbmcsIHByb3BlcnRpZXM6IGFueSA9IHt9KSB7XG4gICAgdGhpcy5jbGVhblByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gICAgaWYgKHR5cGVvZiBndGFnICE9PSAndW5kZWZpbmVkJyAmJiBndGFnKSB7XG4gICAgICBndGFnKCdldmVudCcsIGFjdGlvbiwgcHJvcGVydGllcyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbGVhblByb3BlcnRpZXMocHJvcGVydGllczogeyBba2V5OiBzdHJpbmddOiBhbnkgfSk6IHZvaWQge1xuICAgIC8vIEdBIHJlcXVpcmVzIHRoYXQgZXZlbnRWYWx1ZSBiZSBhbiBub24tbmVnYXRpdmUgaW50ZWdlciwgc2VlOlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9ndGFnanMvZXZlbnRzXG4gICAgaWYgKHByb3BlcnRpZXMudmFsdWUpIHtcbiAgICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlSW50KHByb3BlcnRpZXMudmFsdWUsIDEwKTtcbiAgICAgIHByb3BlcnRpZXMudmFsdWUgPSBpc05hTihwYXJzZWQpID8gMCA6IHBhcnNlZDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==