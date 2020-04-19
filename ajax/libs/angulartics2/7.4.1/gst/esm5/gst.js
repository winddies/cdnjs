/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Angulartics2 } from 'angulartics2';
import * as i0 from "@angular/core";
import * as i1 from "angulartics2";
var GoogleGlobalSiteTagDefaults = /** @class */ (function () {
    function GoogleGlobalSiteTagDefaults() {
        var _this = this;
        this.trackingIds = [];
        if (typeof ga !== 'undefined' && ga) {
            // See: https://developers.google.com/analytics/devguides/collection/analyticsjs/ga-object-methods-reference
            ga(function () {
                ga.getAll().forEach(function (tracker) {
                    /** @type {?} */
                    var id = tracker.get('trackingId');
                    // If set both in forRoot and HTML page, we want to avoid duplicates
                    if (id !== undefined && _this.trackingIds.indexOf(id) === -1) {
                        _this.trackingIds.push(id);
                    }
                });
            });
        }
    }
    return GoogleGlobalSiteTagDefaults;
}());
export { GoogleGlobalSiteTagDefaults };
if (false) {
    /** @type {?} */
    GoogleGlobalSiteTagDefaults.prototype.trackingIds;
}
var Angulartics2GoogleGlobalSiteTag = /** @class */ (function () {
    function Angulartics2GoogleGlobalSiteTag(angulartics2) {
        this.angulartics2 = angulartics2;
        this.dimensionsAndMetrics = {};
        /** @type {?} */
        var defaults = new GoogleGlobalSiteTagDefaults;
        // Set the default settings for this module
        this.angulartics2.settings.gst = tslib_1.__assign({}, defaults, this.angulartics2.settings.gst);
    }
    /**
     * @return {?}
     */
    Angulartics2GoogleGlobalSiteTag.prototype.startTracking = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.angulartics2.pageTrack
            .pipe(this.angulartics2.filterDeveloperMode())
            .subscribe(function (x) { return _this.pageTrack(x.path); });
        this.angulartics2.eventTrack
            .pipe(this.angulartics2.filterDeveloperMode())
            .subscribe(function (x) { return _this.eventTrack(x.action, x.properties); });
        this.angulartics2.exceptionTrack
            .pipe(this.angulartics2.filterDeveloperMode())
            .subscribe(function (x) { return _this.exceptionTrack(x); });
        this.angulartics2.userTimings
            .pipe(this.angulartics2.filterDeveloperMode())
            .subscribe(function (x) { return _this.userTimings(_this.convertTimings(x)); });
        this.angulartics2.setUsername
            .pipe(this.angulartics2.filterDeveloperMode())
            .subscribe(function (x) { return _this.setUsername(x); });
        this.angulartics2.setUserProperties
            .pipe(this.angulartics2.filterDeveloperMode())
            .subscribe(function (x) { return _this.setUserProperties(x); });
    };
    /**
     * Manually track page view, see:
     *
     * https://developers.google.com/analytics/devguides/collection/gtagjs/single-page-applications#tracking_virtual_pageviews
     *
     * @param path relative url
     */
    /**
     * Manually track page view, see:
     *
     * https://developers.google.com/analytics/devguides/collection/gtagjs/single-page-applications#tracking_virtual_pageviews
     *
     * @param {?} path relative url
     * @return {?}
     */
    Angulartics2GoogleGlobalSiteTag.prototype.pageTrack = /**
     * Manually track page view, see:
     *
     * https://developers.google.com/analytics/devguides/collection/gtagjs/single-page-applications#tracking_virtual_pageviews
     *
     * @param {?} path relative url
     * @return {?}
     */
    function (path) {
        var e_1, _a;
        if (typeof gtag !== 'undefined' && gtag) {
            /** @type {?} */
            var params = tslib_1.__assign({ page_path: path, page_location: window.location.protocol + '//' + window.location.host + path }, this.dimensionsAndMetrics);
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
            try {
                for (var _b = tslib_1.__values(this.angulartics2.settings.gst.trackingIds), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var id = _c.value;
                    gtag('config', id, params);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    };
    /**
     * Send interactions to gtag, i.e. for event tracking in Google Analytics. See:
     *
     * https://developers.google.com/analytics/devguides/collection/gtagjs/events
     *
     * @param action associated with the event
     */
    /**
     * Send interactions to gtag, i.e. for event tracking in Google Analytics. See:
     *
     * https://developers.google.com/analytics/devguides/collection/gtagjs/events
     *
     * @param {?} action associated with the event
     * @param {?=} properties
     * @return {?}
     */
    Angulartics2GoogleGlobalSiteTag.prototype.eventTrack = /**
     * Send interactions to gtag, i.e. for event tracking in Google Analytics. See:
     *
     * https://developers.google.com/analytics/devguides/collection/gtagjs/events
     *
     * @param {?} action associated with the event
     * @param {?=} properties
     * @return {?}
     */
    function (action, properties) {
        if (properties === void 0) { properties = {}; }
        this.eventTrackInternal(action, tslib_1.__assign({ event_category: properties.category || 'interaction', event_label: properties.label, value: properties.value, non_interaction: properties.noninteraction }, properties.gstCustom));
    };
    /**
     * Exception Track Event in GST. See:
     *
     * https://developers.google.com/analytics/devguides/collection/gtagjs/exceptions
     *
     */
    /**
     * Exception Track Event in GST. See:
     *
     * https://developers.google.com/analytics/devguides/collection/gtagjs/exceptions
     *
     * @param {?} properties
     * @return {?}
     */
    Angulartics2GoogleGlobalSiteTag.prototype.exceptionTrack = /**
     * Exception Track Event in GST. See:
     *
     * https://developers.google.com/analytics/devguides/collection/gtagjs/exceptions
     *
     * @param {?} properties
     * @return {?}
     */
    function (properties) {
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
            gstCustom: tslib_1.__assign({ 'description': properties.exDescription, 'fatal': properties.fatal }, properties.gstCustom)
        });
    };
    /**
     * User Timings Event in GST.
     * @name userTimings
     *
     * @param properties Comprised of the mandatory fields:
     *  - name (string)
     *  - value (number - integer)
     * Properties can also have the optional fields:
     *  - category (string)
     *  - label (string)
     *
     * @link https://developers.google.com/analytics/devguides/collection/gtagjs/user-timings
     */
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
    Angulartics2GoogleGlobalSiteTag.prototype.userTimings = /**
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
    function (properties) {
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
    };
    /**
     * @private
     * @param {?} properties
     * @return {?}
     */
    Angulartics2GoogleGlobalSiteTag.prototype.convertTimings = /**
     * @private
     * @param {?} properties
     * @return {?}
     */
    function (properties) {
        return {
            name: properties.timingVar,
            value: properties.timingValue,
            category: properties.timingCategory,
            label: properties.timingLabel
        };
    };
    /**
     * @param {?} userId
     * @return {?}
     */
    Angulartics2GoogleGlobalSiteTag.prototype.setUsername = /**
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        this.angulartics2.settings.gst.userId = userId;
        if (typeof gtag !== 'undefined' && gtag) {
            gtag('set', { 'user_id': typeof userId === 'string' || !userId ? userId : userId.userId });
        }
    };
    /**
     * @param {?} properties
     * @return {?}
     */
    Angulartics2GoogleGlobalSiteTag.prototype.setUserProperties = /**
     * @param {?} properties
     * @return {?}
     */
    function (properties) {
        this.setDimensionsAndMetrics(properties);
    };
    /**
     * @private
     * @param {?} properties
     * @return {?}
     */
    Angulartics2GoogleGlobalSiteTag.prototype.setDimensionsAndMetrics = /**
     * @private
     * @param {?} properties
     * @return {?}
     */
    function (properties) {
        var _this = this;
        // We want the dimensions and metrics to accumulate, so we merge with previous value
        this.dimensionsAndMetrics = tslib_1.__assign({}, this.dimensionsAndMetrics, properties);
        // Remove properties that are null or undefined
        Object.keys(this.dimensionsAndMetrics).forEach(function (key) {
            /** @type {?} */
            var val = _this.dimensionsAndMetrics[key];
            if (val === undefined || val === null) {
                delete _this.dimensionsAndMetrics[key];
            }
        });
        if (typeof gtag !== 'undefined' && gtag) {
            gtag('set', this.dimensionsAndMetrics);
        }
    };
    /**
     * @private
     * @param {?} action
     * @param {?=} properties
     * @return {?}
     */
    Angulartics2GoogleGlobalSiteTag.prototype.eventTrackInternal = /**
     * @private
     * @param {?} action
     * @param {?=} properties
     * @return {?}
     */
    function (action, properties) {
        if (properties === void 0) { properties = {}; }
        this.cleanProperties(properties);
        if (typeof gtag !== 'undefined' && gtag) {
            gtag('event', action, properties);
        }
    };
    /**
     * @private
     * @param {?} properties
     * @return {?}
     */
    Angulartics2GoogleGlobalSiteTag.prototype.cleanProperties = /**
     * @private
     * @param {?} properties
     * @return {?}
     */
    function (properties) {
        // GA requires that eventValue be an non-negative integer, see:
        // https://developers.google.com/analytics/devguides/collection/gtagjs/events
        if (properties.value) {
            /** @type {?} */
            var parsed = parseInt(properties.value, 10);
            properties.value = isNaN(parsed) ? 0 : parsed;
        }
    };
    Angulartics2GoogleGlobalSiteTag.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    Angulartics2GoogleGlobalSiteTag.ctorParameters = function () { return [
        { type: Angulartics2 }
    ]; };
    /** @nocollapse */ Angulartics2GoogleGlobalSiteTag.ngInjectableDef = i0.defineInjectable({ factory: function Angulartics2GoogleGlobalSiteTag_Factory() { return new Angulartics2GoogleGlobalSiteTag(i0.inject(i1.Angulartics2)); }, token: Angulartics2GoogleGlobalSiteTag, providedIn: "root" });
    return Angulartics2GoogleGlobalSiteTag;
}());
export { Angulartics2GoogleGlobalSiteTag };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3N0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhcnRpY3MyL2dzdC8iLCJzb3VyY2VzIjpbImdzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFlBQVksRUFBNEMsTUFBTSxjQUFjLENBQUM7OztBQU10RjtJQUdFO1FBQUEsaUJBYUM7UUFmRCxnQkFBVyxHQUFhLEVBQUUsQ0FBQztRQUd6QixJQUFJLE9BQU8sRUFBRSxLQUFLLFdBQVcsSUFBSSxFQUFFLEVBQUU7WUFDbkMsNEdBQTRHO1lBQzVHLEVBQUUsQ0FBQztnQkFDRCxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBWTs7d0JBQ3pCLEVBQUUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQztvQkFDcEMsb0VBQW9FO29CQUNwRSxJQUFJLEVBQUUsS0FBSyxTQUFTLElBQUksS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7d0JBQzNELEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3FCQUMzQjtnQkFDSCxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBQ0gsa0NBQUM7QUFBRCxDQUFDLEFBakJELElBaUJDOzs7O0lBaEJDLGtEQUEyQjs7QUFrQjdCO0lBSUUseUNBQXNCLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBRnhDLHlCQUFvQixHQUEyQixFQUFFLENBQUM7O1lBR2xELFFBQVEsR0FBRyxJQUFJLDJCQUEyQjtRQUNoRCwyQ0FBMkM7UUFDM0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyx3QkFBUSxRQUFRLEVBQUssSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENB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LEVBQUUsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQ25DO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8seURBQWU7Ozs7O0lBQXZCLFVBQXdCLFVBQWtDO1FBQ3hELCtEQUErRDtRQUMvRCw2RUFBNkU7UUFDN0UsSUFBSSxVQUFVLENBQUMsS0FBSyxFQUFFOztnQkFDZCxNQUFNLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDO1lBQzdDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztTQUMvQztJQUNILENBQUM7O2dCQTdMRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O2dCQXpCekIsWUFBWTs7OzBDQUZyQjtDQXlOQyxBQTlMRCxJQThMQztTQTdMWSwrQkFBK0I7Ozs7OztJQUMxQywrREFBMEQ7Ozs7O0lBRTlDLHVEQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQW5ndWxhcnRpY3MyLCBHb29nbGVHbG9iYWxTaXRlVGFnU2V0dGluZ3MsIFVzZXJUaW1pbmdzIH0gZnJvbSAnYW5ndWxhcnRpY3MyJztcbmltcG9ydCB7IEV2ZW50R3N0LCBVc2VyVGltaW5nc0dzdCB9IGZyb20gJy4vZ3N0LWludGVyZmFjZXMnO1xuXG5kZWNsYXJlIHZhciBndGFnOiBhbnk7XG5kZWNsYXJlIHZhciBnYTogYW55O1xuXG5leHBvcnQgY2xhc3MgR29vZ2xlR2xvYmFsU2l0ZVRhZ0RlZmF1bHRzIGltcGxlbWVudHMgR29vZ2xlR2xvYmFsU2l0ZVRhZ1NldHRpbmdzIHtcbiAgdHJhY2tpbmdJZHM6IHN0cmluZ1tdID0gW107XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYgKHR5cGVvZiBnYSAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2EpIHtcbiAgICAgIC8vIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL2FuYWx5dGljc2pzL2dhLW9iamVjdC1tZXRob2RzLXJlZmVyZW5jZVxuICAgICAgZ2EoKCkgPT4ge1xuICAgICAgICBnYS5nZXRBbGwoKS5mb3JFYWNoKCh0cmFja2VyOiBhbnkpID0+IHtcbiAgICAgICAgICBjb25zdCBpZCA9IHRyYWNrZXIuZ2V0KCd0cmFja2luZ0lkJyk7XG4gICAgICAgICAgLy8gSWYgc2V0IGJvdGggaW4gZm9yUm9vdCBhbmQgSFRNTCBwYWdlLCB3ZSB3YW50IHRvIGF2b2lkIGR1cGxpY2F0ZXNcbiAgICAgICAgICBpZiAoaWQgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnRyYWNraW5nSWRzLmluZGV4T2YoaWQpID09PSAtMSkge1xuICAgICAgICAgICAgdGhpcy50cmFja2luZ0lkcy5wdXNoKGlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQW5ndWxhcnRpY3MyR29vZ2xlR2xvYmFsU2l0ZVRhZyB7XG4gIHByaXZhdGUgZGltZW5zaW9uc0FuZE1ldHJpY3M6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYW5ndWxhcnRpY3MyOiBBbmd1bGFydGljczIpIHtcbiAgICBjb25zdCBkZWZhdWx0cyA9IG5ldyBHb29nbGVHbG9iYWxTaXRlVGFnRGVmYXVsdHM7XG4gICAgLy8gU2V0IHRoZSBkZWZhdWx0IHNldHRpbmdzIGZvciB0aGlzIG1vZHVsZVxuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmdzdCA9IHsgLi4uZGVmYXVsdHMsIC4uLnRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmdzdCB9O1xuICB9XG5cbiAgc3RhcnRUcmFja2luZygpOiB2b2lkIHtcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5wYWdlVHJhY2tcbiAgICAgIC5waXBlKHRoaXMuYW5ndWxhcnRpY3MyLmZpbHRlckRldmVsb3Blck1vZGUoKSlcbiAgICAgIC5zdWJzY3JpYmUoKHgpID0+IHRoaXMucGFnZVRyYWNrKHgucGF0aCkpO1xuICAgIHRoaXMuYW5ndWxhcnRpY3MyLmV2ZW50VHJhY2tcbiAgICAgIC5waXBlKHRoaXMuYW5ndWxhcnRpY3MyLmZpbHRlckRldmVsb3Blck1vZGUoKSlcbiAgICAgIC5zdWJzY3JpYmUoKHgpID0+IHRoaXMuZXZlbnRUcmFjayh4LmFjdGlvbiwgeC5wcm9wZXJ0aWVzKSk7XG4gICAgdGhpcy5hbmd1bGFydGljczIuZXhjZXB0aW9uVHJhY2tcbiAgICAgIC5waXBlKHRoaXMuYW5ndWxhcnRpY3MyLmZpbHRlckRldmVsb3Blck1vZGUoKSlcbiAgICAgIC5zdWJzY3JpYmUoKHg6IGFueSkgPT4gdGhpcy5leGNlcHRpb25UcmFjayh4KSk7XG4gICAgdGhpcy5hbmd1bGFydGljczIudXNlclRpbWluZ3NcbiAgICAgIC5waXBlKHRoaXMuYW5ndWxhcnRpY3MyLmZpbHRlckRldmVsb3Blck1vZGUoKSlcbiAgICAgIC5zdWJzY3JpYmUoeCA9PiB0aGlzLnVzZXJUaW1pbmdzKHRoaXMuY29udmVydFRpbWluZ3MoeCkpKTtcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXRVc2VybmFtZVxuICAgICAgLnBpcGUodGhpcy5hbmd1bGFydGljczIuZmlsdGVyRGV2ZWxvcGVyTW9kZSgpKVxuICAgICAgLnN1YnNjcmliZSgoeDogc3RyaW5nKSA9PiB0aGlzLnNldFVzZXJuYW1lKHgpKTtcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXRVc2VyUHJvcGVydGllc1xuICAgICAgLnBpcGUodGhpcy5hbmd1bGFydGljczIuZmlsdGVyRGV2ZWxvcGVyTW9kZSgpKVxuICAgICAgLnN1YnNjcmliZSgoeDogYW55KSA9PiB0aGlzLnNldFVzZXJQcm9wZXJ0aWVzKHgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYW51YWxseSB0cmFjayBwYWdlIHZpZXcsIHNlZTpcbiAgICpcbiAgICogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL2d0YWdqcy9zaW5nbGUtcGFnZS1hcHBsaWNhdGlvbnMjdHJhY2tpbmdfdmlydHVhbF9wYWdldmlld3NcbiAgICpcbiAgICogQHBhcmFtIHBhdGggcmVsYXRpdmUgdXJsXG4gICAqL1xuICBwYWdlVHJhY2socGF0aDogc3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiBndGFnICE9PSAndW5kZWZpbmVkJyAmJiBndGFnKSB7XG4gICAgICBjb25zdCBwYXJhbXM6IGFueSA9IHtcbiAgICAgICAgcGFnZV9wYXRoOiBwYXRoLFxuICAgICAgICBwYWdlX2xvY2F0aW9uOiB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgd2luZG93LmxvY2F0aW9uLmhvc3QgKyBwYXRoLFxuICAgICAgICAuLi50aGlzLmRpbWVuc2lvbnNBbmRNZXRyaWNzXG4gICAgICB9O1xuXG4gICAgICAvLyBDdXN0b20gbWFwIG11c3QgYmUgcmVzZXQgd2l0aCBhbGwgY29uZmlnIHRvIHN0YXkgdmFsaWQuXG5cbiAgICAgIGlmICh0aGlzLmFuZ3VsYXJ0aWNzMi5zZXR0aW5ncy5nc3QuY3VzdG9tTWFwKSB7XG4gICAgICAgIHBhcmFtcy5jdXN0b21fbWFwID0gdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ3N0LmN1c3RvbU1hcDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmFuZ3VsYXJ0aWNzMi5zZXR0aW5ncy5nc3QudXNlcklkKSB7XG4gICAgICAgIHBhcmFtcy51c2VyX2lkID0gdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ3N0LnVzZXJJZDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmFuZ3VsYXJ0aWNzMi5zZXR0aW5ncy5nc3QuYW5vbnltaXplSXApIHtcbiAgICAgICAgcGFyYW1zLmFub255bWl6ZV9pcCA9IHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmdzdC5hbm9ueW1pemVJcDtcbiAgICAgIH1cblxuICAgICAgZm9yIChjb25zdCBpZCBvZiB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXR0aW5ncy5nc3QudHJhY2tpbmdJZHMpIHtcbiAgICAgICAgZ3RhZygnY29uZmlnJywgaWQsIHBhcmFtcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgaW50ZXJhY3Rpb25zIHRvIGd0YWcsIGkuZS4gZm9yIGV2ZW50IHRyYWNraW5nIGluIEdvb2dsZSBBbmFseXRpY3MuIFNlZTpcbiAgICpcbiAgICogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL2d0YWdqcy9ldmVudHNcbiAgICpcbiAgICogQHBhcmFtIGFjdGlvbiBhc3NvY2lhdGVkIHdpdGggdGhlIGV2ZW50XG4gICAqL1xuICBldmVudFRyYWNrKGFjdGlvbjogc3RyaW5nLCBwcm9wZXJ0aWVzOiBQYXJ0aWFsPEV2ZW50R3N0PiA9IHt9KSB7XG4gICAgdGhpcy5ldmVudFRyYWNrSW50ZXJuYWwoYWN0aW9uLCB7XG4gICAgICBldmVudF9jYXRlZ29yeTogcHJvcGVydGllcy5jYXRlZ29yeSB8fCAnaW50ZXJhY3Rpb24nLFxuICAgICAgZXZlbnRfbGFiZWw6IHByb3BlcnRpZXMubGFiZWwsXG4gICAgICB2YWx1ZTogcHJvcGVydGllcy52YWx1ZSxcbiAgICAgIG5vbl9pbnRlcmFjdGlvbjogcHJvcGVydGllcy5ub25pbnRlcmFjdGlvbixcbiAgICAgIC4uLnByb3BlcnRpZXMuZ3N0Q3VzdG9tXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRXhjZXB0aW9uIFRyYWNrIEV2ZW50IGluIEdTVC4gU2VlOlxuICAgKlxuICAgKiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vZ3RhZ2pzL2V4Y2VwdGlvbnNcbiAgICpcbiAgICovXG4gIGV4Y2VwdGlvblRyYWNrKHByb3BlcnRpZXM6IGFueSkge1xuICAgIC8vIFRPRE86IG1ha2UgaW50ZXJmYWNlXG4gICAgLy8gIEBwYXJhbSB7T2JqZWN0fSBwcm9wZXJ0aWVzXG4gICAgLy8gIEBwYXJhbSB7c3RyaW5nfSBbcHJvcGVydGllcy5kZXNjcmlwdGlvbl1cbiAgICAvLyAgQHBhcmFtIHtib29sZWFufSBbcHJvcGVydGllcy5mYXRhbF1cbiAgICBpZiAocHJvcGVydGllcy5mYXRhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zb2xlLmxvZygnTm8gXCJmYXRhbFwiIHByb3ZpZGVkLCBzZW5kaW5nIHdpdGggZmF0YWw9dHJ1ZScpO1xuICAgICAgcHJvcGVydGllcy5mYXRhbCA9IHRydWU7XG4gICAgfVxuXG4gICAgcHJvcGVydGllcy5leERlc2NyaXB0aW9uID0gcHJvcGVydGllcy5ldmVudCA/IHByb3BlcnRpZXMuZXZlbnQuc3RhY2sgOiBwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uO1xuXG4gICAgdGhpcy5ldmVudFRyYWNrKCdleGNlcHRpb24nLCB7XG4gICAgICBnc3RDdXN0b206IHtcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogcHJvcGVydGllcy5leERlc2NyaXB0aW9uLFxuICAgICAgICAnZmF0YWwnOiBwcm9wZXJ0aWVzLmZhdGFsLFxuICAgICAgICAuLi5wcm9wZXJ0aWVzLmdzdEN1c3RvbVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZXIgVGltaW5ncyBFdmVudCBpbiBHU1QuXG4gICAqIEBuYW1lIHVzZXJUaW1pbmdzXG4gICAqXG4gICAqIEBwYXJhbSBwcm9wZXJ0aWVzIENvbXByaXNlZCBvZiB0aGUgbWFuZGF0b3J5IGZpZWxkczpcbiAgICogIC0gbmFtZSAoc3RyaW5nKVxuICAgKiAgLSB2YWx1ZSAobnVtYmVyIC0gaW50ZWdlcilcbiAgICogUHJvcGVydGllcyBjYW4gYWxzbyBoYXZlIHRoZSBvcHRpb25hbCBmaWVsZHM6XG4gICAqICAtIGNhdGVnb3J5IChzdHJpbmcpXG4gICAqICAtIGxhYmVsIChzdHJpbmcpXG4gICAqXG4gICAqIEBsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9ndGFnanMvdXNlci10aW1pbmdzXG4gICAqL1xuICB1c2VyVGltaW5ncyhwcm9wZXJ0aWVzOiBVc2VyVGltaW5nc0dzdCkge1xuICAgIGlmICghcHJvcGVydGllcykge1xuICAgICAgY29uc29sZS5lcnJvcignVXNlciB0aW1pbmdzIC0gXCJwcm9wZXJ0aWVzXCIgcGFyYW1ldGVyIGlzIHJlcXVpcmVkIHRvIGJlIHNldC4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmV2ZW50VHJhY2tJbnRlcm5hbCgndGltaW5nX2NvbXBsZXRlJywge1xuICAgICAgbmFtZTogcHJvcGVydGllcy5uYW1lLFxuICAgICAgdmFsdWU6IHByb3BlcnRpZXMudmFsdWUsXG4gICAgICBldmVudF9jYXRlZ29yeTogcHJvcGVydGllcy5jYXRlZ29yeSxcbiAgICAgIGV2ZW50X2xhYmVsOiBwcm9wZXJ0aWVzLmxhYmVsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRUaW1pbmdzKHByb3BlcnRpZXM6IFVzZXJUaW1pbmdzKTogVXNlclRpbWluZ3NHc3Qge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBwcm9wZXJ0aWVzLnRpbWluZ1ZhcixcbiAgICAgIHZhbHVlOiBwcm9wZXJ0aWVzLnRpbWluZ1ZhbHVlLFxuICAgICAgY2F0ZWdvcnk6IHByb3BlcnRpZXMudGltaW5nQ2F0ZWdvcnksXG4gICAgICBsYWJlbDogcHJvcGVydGllcy50aW1pbmdMYWJlbFxuICAgIH07XG4gIH1cblxuICBzZXRVc2VybmFtZSh1c2VySWQ6IHN0cmluZyB8IHsgdXNlcklkOiBzdHJpbmcgfCBudW1iZXIgfSkge1xuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmdzdC51c2VySWQgPSB1c2VySWQ7XG4gICAgaWYgKHR5cGVvZiBndGFnICE9PSAndW5kZWZpbmVkJyAmJiBndGFnKSB7XG4gICAgICBndGFnKCdzZXQnLCB7ICd1c2VyX2lkJzogdHlwZW9mIHVzZXJJZCA9PT0gJ3N0cmluZycgfHwgIXVzZXJJZCA/IHVzZXJJZCA6IHVzZXJJZC51c2VySWQgfSk7XG4gICAgfVxuICB9XG5cbiAgc2V0VXNlclByb3BlcnRpZXMocHJvcGVydGllczogYW55KSB7XG4gICAgdGhpcy5zZXREaW1lbnNpb25zQW5kTWV0cmljcyhwcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0RGltZW5zaW9uc0FuZE1ldHJpY3MocHJvcGVydGllczogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIC8vIFdlIHdhbnQgdGhlIGRpbWVuc2lvbnMgYW5kIG1ldHJpY3MgdG8gYWNjdW11bGF0ZSwgc28gd2UgbWVyZ2Ugd2l0aCBwcmV2aW91cyB2YWx1ZVxuICAgIHRoaXMuZGltZW5zaW9uc0FuZE1ldHJpY3MgPSB7XG4gICAgICAuLi50aGlzLmRpbWVuc2lvbnNBbmRNZXRyaWNzLFxuICAgICAgLi4ucHJvcGVydGllc1xuICAgIH07XG5cbiAgICAvLyBSZW1vdmUgcHJvcGVydGllcyB0aGF0IGFyZSBudWxsIG9yIHVuZGVmaW5lZFxuICAgIE9iamVjdC5rZXlzKHRoaXMuZGltZW5zaW9uc0FuZE1ldHJpY3MpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IHRoaXMuZGltZW5zaW9uc0FuZE1ldHJpY3Nba2V5XTtcbiAgICAgIGlmICh2YWwgPT09IHVuZGVmaW5lZCB8fCB2YWwgPT09IG51bGwpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuZGltZW5zaW9uc0FuZE1ldHJpY3Nba2V5XTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0eXBlb2YgZ3RhZyAhPT0gJ3VuZGVmaW5lZCcgJiYgZ3RhZykge1xuICAgICAgZ3RhZygnc2V0JywgdGhpcy5kaW1lbnNpb25zQW5kTWV0cmljcyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBldmVudFRyYWNrSW50ZXJuYWwoYWN0aW9uOiBzdHJpbmcsIHByb3BlcnRpZXM6IGFueSA9IHt9KSB7XG4gICAgdGhpcy5jbGVhblByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gICAgaWYgKHR5cGVvZiBndGFnICE9PSAndW5kZWZpbmVkJyAmJiBndGFnKSB7XG4gICAgICBndGFnKCdldmVudCcsIGFjdGlvbiwgcHJvcGVydGllcyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbGVhblByb3BlcnRpZXMocHJvcGVydGllczogeyBba2V5OiBzdHJpbmddOiBhbnkgfSk6IHZvaWQge1xuICAgIC8vIEdBIHJlcXVpcmVzIHRoYXQgZXZlbnRWYWx1ZSBiZSBhbiBub24tbmVnYXRpdmUgaW50ZWdlciwgc2VlOlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9ndGFnanMvZXZlbnRzXG4gICAgaWYgKHByb3BlcnRpZXMudmFsdWUpIHtcbiAgICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlSW50KHByb3BlcnRpZXMudmFsdWUsIDEwKTtcbiAgICAgIHByb3BlcnRpZXMudmFsdWUgPSBpc05hTihwYXJzZWQpID8gMCA6IHBhcnNlZDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==