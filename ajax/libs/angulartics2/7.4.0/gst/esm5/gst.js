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
                    gtag('config', id, tslib_1.__assign({}, params));
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
        var e_2, _a;
        this.angulartics2.settings.gst.userId = userId;
        if (typeof gtag !== 'undefined' && gtag) {
            try {
                for (var _b = tslib_1.__values(this.angulartics2.settings.gst.trackingIds), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var id = _c.value;
                    gtag('set', id, { 'user_id': (typeof userId === 'string' ? userId : userId.userId) });
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
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
        var e_3, _a;
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
            try {
                for (var _b = tslib_1.__values(this.angulartics2.settings.gst.trackingIds), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var id = _c.value;
                    gtag('set', id, this.dimensionsAndMetrics);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
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
    /** @type {?} */
    Angulartics2GoogleGlobalSiteTag.prototype.dimensionsAndMetrics;
    /**
     * @type {?}
     * @protected
     */
    Angulartics2GoogleGlobalSiteTag.prototype.angulartics2;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3N0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhcnRpY3MyL2dzdC8iLCJzb3VyY2VzIjpbImdzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFlBQVksRUFBNEMsTUFBTSxjQUFjLENBQUM7OztBQU10RjtJQUdFO1FBQUEsaUJBYUM7UUFmRCxnQkFBVyxHQUFhLEVBQUUsQ0FBQztRQUd6QixJQUFJLE9BQU8sRUFBRSxLQUFLLFdBQVcsSUFBSSxFQUFFLEVBQUU7WUFDbkMsNEdBQTRHO1lBQzVHLEVBQUUsQ0FBQztnQkFDRCxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBWTs7d0JBQ3pCLEVBQUUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQztvQkFDcEMsb0VBQW9FO29CQUNwRSxJQUFJLEVBQUUsS0FBSyxTQUFTLElBQUksS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7d0JBQzNELEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3FCQUMzQjtnQkFDSCxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBQ0gsa0NBQUM7QUFBRCxDQUFDLEFBakJELElBaUJDOzs7O0lBaEJDLGtEQUEyQjs7QUFrQjdCO0lBSUUseUNBQXNCLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBRmhELHlCQUFvQixHQUEyQixFQUFFLENBQUM7O1lBRzFDLFFBQVEsR0FBRyxJQUFJLDJCQUEyQjtRQUNoRCwyQ0FBMkM7UUFDM0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyx3QkFBUSxRQUFRLEVBQUssSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENB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b0JBQ1gsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7aUJBQzVDOzs7Ozs7Ozs7U0FDRjtJQUNILENBQUM7Ozs7Ozs7SUFFTyw0REFBa0I7Ozs7OztJQUExQixVQUEyQixNQUFjLEVBQUUsVUFBb0I7UUFBcEIsMkJBQUEsRUFBQSxlQUFvQjtRQUM3RCxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pDLElBQUksT0FBTyxJQUFJLEtBQUssV0FBVyxJQUFJLElBQUksRUFBRTtZQUN2QyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztTQUNuQztJQUNILENBQUM7Ozs7OztJQUVPLHlEQUFlOzs7OztJQUF2QixVQUF3QixVQUFrQztRQUN4RCwrREFBK0Q7UUFDL0QsNkVBQTZFO1FBQzdFLElBQUksVUFBVSxDQUFDLEtBQUssRUFBRTs7Z0JBQ2QsTUFBTSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQztZQUM3QyxVQUFVLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7U0FDL0M7SUFDSCxDQUFDOztnQkFqTUYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnQkF6QnpCLFlBQVk7OzswQ0FGckI7Q0E2TkMsQUFsTUQsSUFrTUM7U0FqTVksK0JBQStCOzs7SUFDMUMsK0RBQWtEOzs7OztJQUV0Qyx1REFBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFuZ3VsYXJ0aWNzMiwgR29vZ2xlR2xvYmFsU2l0ZVRhZ1NldHRpbmdzLCBVc2VyVGltaW5ncyB9IGZyb20gJ2FuZ3VsYXJ0aWNzMic7XG5pbXBvcnQgeyBFdmVudEdzdCwgVXNlclRpbWluZ3NHc3QgfSBmcm9tICcuL2dzdC1pbnRlcmZhY2VzJztcblxuZGVjbGFyZSB2YXIgZ3RhZzogYW55O1xuZGVjbGFyZSB2YXIgZ2E6IGFueTtcblxuZXhwb3J0IGNsYXNzIEdvb2dsZUdsb2JhbFNpdGVUYWdEZWZhdWx0cyBpbXBsZW1lbnRzIEdvb2dsZUdsb2JhbFNpdGVUYWdTZXR0aW5ncyB7XG4gIHRyYWNraW5nSWRzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGlmICh0eXBlb2YgZ2EgIT09ICd1bmRlZmluZWQnICYmIGdhKSB7XG4gICAgICAvLyBTZWU6IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9hbmFseXRpY3Nqcy9nYS1vYmplY3QtbWV0aG9kcy1yZWZlcmVuY2VcbiAgICAgIGdhKCgpID0+IHtcbiAgICAgICAgZ2EuZ2V0QWxsKCkuZm9yRWFjaCgodHJhY2tlcjogYW55KSA9PiB7XG4gICAgICAgICAgY29uc3QgaWQgPSB0cmFja2VyLmdldCgndHJhY2tpbmdJZCcpO1xuICAgICAgICAgIC8vIElmIHNldCBib3RoIGluIGZvclJvb3QgYW5kIEhUTUwgcGFnZSwgd2Ugd2FudCB0byBhdm9pZCBkdXBsaWNhdGVzXG4gICAgICAgICAgaWYgKGlkICE9PSB1bmRlZmluZWQgJiYgdGhpcy50cmFja2luZ0lkcy5pbmRleE9mKGlkKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMudHJhY2tpbmdJZHMucHVzaChpZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJ0aWNzMkdvb2dsZUdsb2JhbFNpdGVUYWcge1xuICBkaW1lbnNpb25zQW5kTWV0cmljczogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhbmd1bGFydGljczI6IEFuZ3VsYXJ0aWNzMikge1xuICAgIGNvbnN0IGRlZmF1bHRzID0gbmV3IEdvb2dsZUdsb2JhbFNpdGVUYWdEZWZhdWx0cztcbiAgICAvLyBTZXQgdGhlIGRlZmF1bHQgc2V0dGluZ3MgZm9yIHRoaXMgbW9kdWxlXG4gICAgdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ3N0ID0geyAuLi5kZWZhdWx0cywgLi4udGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ3N0IH07XG4gIH1cblxuICBzdGFydFRyYWNraW5nKCk6IHZvaWQge1xuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnBhZ2VUcmFja1xuICAgICAgLnBpcGUodGhpcy5hbmd1bGFydGljczIuZmlsdGVyRGV2ZWxvcGVyTW9kZSgpKVxuICAgICAgLnN1YnNjcmliZSgoeCkgPT4gdGhpcy5wYWdlVHJhY2soeC5wYXRoKSk7XG4gICAgdGhpcy5hbmd1bGFydGljczIuZXZlbnRUcmFja1xuICAgICAgLnBpcGUodGhpcy5hbmd1bGFydGljczIuZmlsdGVyRGV2ZWxvcGVyTW9kZSgpKVxuICAgICAgLnN1YnNjcmliZSgoeCkgPT4gdGhpcy5ldmVudFRyYWNrKHguYWN0aW9uLCB4LnByb3BlcnRpZXMpKTtcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5leGNlcHRpb25UcmFja1xuICAgICAgLnBpcGUodGhpcy5hbmd1bGFydGljczIuZmlsdGVyRGV2ZWxvcGVyTW9kZSgpKVxuICAgICAgLnN1YnNjcmliZSgoeDogYW55KSA9PiB0aGlzLmV4Y2VwdGlvblRyYWNrKHgpKTtcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi51c2VyVGltaW5nc1xuICAgICAgLnBpcGUodGhpcy5hbmd1bGFydGljczIuZmlsdGVyRGV2ZWxvcGVyTW9kZSgpKVxuICAgICAgLnN1YnNjcmliZSh4ID0+IHRoaXMudXNlclRpbWluZ3ModGhpcy5jb252ZXJ0VGltaW5ncyh4KSkpO1xuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldFVzZXJuYW1lXG4gICAgICAucGlwZSh0aGlzLmFuZ3VsYXJ0aWNzMi5maWx0ZXJEZXZlbG9wZXJNb2RlKCkpXG4gICAgICAuc3Vic2NyaWJlKCh4OiBzdHJpbmcpID0+IHRoaXMuc2V0VXNlcm5hbWUoeCkpO1xuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldFVzZXJQcm9wZXJ0aWVzXG4gICAgICAucGlwZSh0aGlzLmFuZ3VsYXJ0aWNzMi5maWx0ZXJEZXZlbG9wZXJNb2RlKCkpXG4gICAgICAuc3Vic2NyaWJlKCh4OiBhbnkpID0+IHRoaXMuc2V0VXNlclByb3BlcnRpZXMoeCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1hbnVhbGx5IHRyYWNrIHBhZ2Ugdmlldywgc2VlOlxuICAgKlxuICAgKiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vZ3RhZ2pzL3NpbmdsZS1wYWdlLWFwcGxpY2F0aW9ucyN0cmFja2luZ192aXJ0dWFsX3BhZ2V2aWV3c1xuICAgKlxuICAgKiBAcGFyYW0gcGF0aCByZWxhdGl2ZSB1cmxcbiAgICovXG4gIHBhZ2VUcmFjayhwYXRoOiBzdHJpbmcpIHtcbiAgICBpZiAodHlwZW9mIGd0YWcgIT09ICd1bmRlZmluZWQnICYmIGd0YWcpIHtcbiAgICAgIGNvbnN0IHBhcmFtczogYW55ID0ge1xuICAgICAgICBwYWdlX3BhdGg6IHBhdGgsXG4gICAgICAgIHBhZ2VfbG9jYXRpb246IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyB3aW5kb3cubG9jYXRpb24uaG9zdCArIHBhdGgsXG4gICAgICAgIC4uLnRoaXMuZGltZW5zaW9uc0FuZE1ldHJpY3NcbiAgICAgIH07XG5cbiAgICAgIC8vIEN1c3RvbSBtYXAgbXVzdCBiZSByZXNldCB3aXRoIGFsbCBjb25maWcgdG8gc3RheSB2YWxpZC5cblxuICAgICAgaWYgKHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmdzdC5jdXN0b21NYXApIHtcbiAgICAgICAgcGFyYW1zLmN1c3RvbV9tYXAgPSB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXR0aW5ncy5nc3QuY3VzdG9tTWFwO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmdzdC51c2VySWQpIHtcbiAgICAgICAgcGFyYW1zLnVzZXJfaWQgPSB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXR0aW5ncy5nc3QudXNlcklkO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmdzdC5hbm9ueW1pemVJcCkge1xuICAgICAgICBwYXJhbXMuYW5vbnltaXplX2lwID0gdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ3N0LmFub255bWl6ZUlwO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGNvbnN0IGlkIG9mIHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmdzdC50cmFja2luZ0lkcykge1xuICAgICAgICBndGFnKCdjb25maWcnLCBpZCwgeyAuLi5wYXJhbXMgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgaW50ZXJhY3Rpb25zIHRvIGd0YWcsIGkuZS4gZm9yIGV2ZW50IHRyYWNraW5nIGluIEdvb2dsZSBBbmFseXRpY3MuIFNlZTpcbiAgICpcbiAgICogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL2d0YWdqcy9ldmVudHNcbiAgICpcbiAgICogQHBhcmFtIGFjdGlvbiBhc3NvY2lhdGVkIHdpdGggdGhlIGV2ZW50XG4gICAqL1xuICBldmVudFRyYWNrKGFjdGlvbjogc3RyaW5nLCBwcm9wZXJ0aWVzOiBQYXJ0aWFsPEV2ZW50R3N0PiA9IHt9KSB7XG4gICAgdGhpcy5ldmVudFRyYWNrSW50ZXJuYWwoYWN0aW9uLCB7XG4gICAgICBldmVudF9jYXRlZ29yeTogcHJvcGVydGllcy5jYXRlZ29yeSB8fCAnaW50ZXJhY3Rpb24nLFxuICAgICAgZXZlbnRfbGFiZWw6IHByb3BlcnRpZXMubGFiZWwsXG4gICAgICB2YWx1ZTogcHJvcGVydGllcy52YWx1ZSxcbiAgICAgIG5vbl9pbnRlcmFjdGlvbjogcHJvcGVydGllcy5ub25pbnRlcmFjdGlvbixcbiAgICAgIC4uLnByb3BlcnRpZXMuZ3N0Q3VzdG9tXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRXhjZXB0aW9uIFRyYWNrIEV2ZW50IGluIEdTVC4gU2VlOlxuICAgKlxuICAgKiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vZ3RhZ2pzL2V4Y2VwdGlvbnNcbiAgICpcbiAgICovXG4gIGV4Y2VwdGlvblRyYWNrKHByb3BlcnRpZXM6IGFueSkge1xuICAgIC8vIFRPRE86IG1ha2UgaW50ZXJmYWNlXG4gICAgLy8gIEBwYXJhbSB7T2JqZWN0fSBwcm9wZXJ0aWVzXG4gICAgLy8gIEBwYXJhbSB7c3RyaW5nfSBbcHJvcGVydGllcy5kZXNjcmlwdGlvbl1cbiAgICAvLyAgQHBhcmFtIHtib29sZWFufSBbcHJvcGVydGllcy5mYXRhbF1cbiAgICBpZiAocHJvcGVydGllcy5mYXRhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zb2xlLmxvZygnTm8gXCJmYXRhbFwiIHByb3ZpZGVkLCBzZW5kaW5nIHdpdGggZmF0YWw9dHJ1ZScpO1xuICAgICAgcHJvcGVydGllcy5mYXRhbCA9IHRydWU7XG4gICAgfVxuXG4gICAgcHJvcGVydGllcy5leERlc2NyaXB0aW9uID0gcHJvcGVydGllcy5ldmVudCA/IHByb3BlcnRpZXMuZXZlbnQuc3RhY2sgOiBwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uO1xuXG4gICAgdGhpcy5ldmVudFRyYWNrKCdleGNlcHRpb24nLCB7XG4gICAgICBnc3RDdXN0b206IHtcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogcHJvcGVydGllcy5leERlc2NyaXB0aW9uLFxuICAgICAgICAnZmF0YWwnOiBwcm9wZXJ0aWVzLmZhdGFsLFxuICAgICAgICAuLi5wcm9wZXJ0aWVzLmdzdEN1c3RvbVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZXIgVGltaW5ncyBFdmVudCBpbiBHU1QuXG4gICAqIEBuYW1lIHVzZXJUaW1pbmdzXG4gICAqXG4gICAqIEBwYXJhbSBwcm9wZXJ0aWVzIENvbXByaXNlZCBvZiB0aGUgbWFuZGF0b3J5IGZpZWxkczpcbiAgICogIC0gbmFtZSAoc3RyaW5nKVxuICAgKiAgLSB2YWx1ZSAobnVtYmVyIC0gaW50ZWdlcilcbiAgICogUHJvcGVydGllcyBjYW4gYWxzbyBoYXZlIHRoZSBvcHRpb25hbCBmaWVsZHM6XG4gICAqICAtIGNhdGVnb3J5IChzdHJpbmcpXG4gICAqICAtIGxhYmVsIChzdHJpbmcpXG4gICAqXG4gICAqIEBsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9ndGFnanMvdXNlci10aW1pbmdzXG4gICAqL1xuICB1c2VyVGltaW5ncyhwcm9wZXJ0aWVzOiBVc2VyVGltaW5nc0dzdCkge1xuICAgIGlmICghcHJvcGVydGllcykge1xuICAgICAgY29uc29sZS5lcnJvcignVXNlciB0aW1pbmdzIC0gXCJwcm9wZXJ0aWVzXCIgcGFyYW1ldGVyIGlzIHJlcXVpcmVkIHRvIGJlIHNldC4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmV2ZW50VHJhY2tJbnRlcm5hbCgndGltaW5nX2NvbXBsZXRlJywge1xuICAgICAgbmFtZTogcHJvcGVydGllcy5uYW1lLFxuICAgICAgdmFsdWU6IHByb3BlcnRpZXMudmFsdWUsXG4gICAgICBldmVudF9jYXRlZ29yeTogcHJvcGVydGllcy5jYXRlZ29yeSxcbiAgICAgIGV2ZW50X2xhYmVsOiBwcm9wZXJ0aWVzLmxhYmVsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRUaW1pbmdzKHByb3BlcnRpZXM6IFVzZXJUaW1pbmdzKTogVXNlclRpbWluZ3NHc3Qge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBwcm9wZXJ0aWVzLnRpbWluZ1ZhcixcbiAgICAgIHZhbHVlOiBwcm9wZXJ0aWVzLnRpbWluZ1ZhbHVlLFxuICAgICAgY2F0ZWdvcnk6IHByb3BlcnRpZXMudGltaW5nQ2F0ZWdvcnksXG4gICAgICBsYWJlbDogcHJvcGVydGllcy50aW1pbmdMYWJlbFxuICAgIH07XG4gIH1cblxuICBzZXRVc2VybmFtZSh1c2VySWQ6IHN0cmluZyB8IHsgdXNlcklkOiBzdHJpbmcgfCBudW1iZXIgfSkge1xuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmdzdC51c2VySWQgPSB1c2VySWQ7XG4gICAgaWYgKHR5cGVvZiBndGFnICE9PSAndW5kZWZpbmVkJyAmJiBndGFnKSB7XG4gICAgICBmb3IgKGNvbnN0IGlkIG9mIHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmdzdC50cmFja2luZ0lkcykge1xuICAgICAgICBndGFnKCdzZXQnLCBpZCwgeyAndXNlcl9pZCc6ICh0eXBlb2YgdXNlcklkID09PSAnc3RyaW5nJyA/IHVzZXJJZCA6IHVzZXJJZC51c2VySWQpIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldFVzZXJQcm9wZXJ0aWVzKHByb3BlcnRpZXM6IGFueSkge1xuICAgIHRoaXMuc2V0RGltZW5zaW9uc0FuZE1ldHJpY3MocHJvcGVydGllcyk7XG4gIH1cblxuICBwcml2YXRlIHNldERpbWVuc2lvbnNBbmRNZXRyaWNzKHByb3BlcnRpZXM6IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgICAvLyBXZSB3YW50IHRoZSBkaW1lbnNpb25zIGFuZCBtZXRyaWNzIHRvIGFjY3VtdWxhdGUsIHNvIHdlIG1lcmdlIHdpdGggcHJldmlvdXMgdmFsdWVcbiAgICB0aGlzLmRpbWVuc2lvbnNBbmRNZXRyaWNzID0ge1xuICAgICAgLi4udGhpcy5kaW1lbnNpb25zQW5kTWV0cmljcyxcbiAgICAgIC4uLnByb3BlcnRpZXNcbiAgICB9O1xuXG4gICAgLy8gUmVtb3ZlIHByb3BlcnRpZXMgdGhhdCBhcmUgbnVsbCBvciB1bmRlZmluZWRcbiAgICBPYmplY3Qua2V5cyh0aGlzLmRpbWVuc2lvbnNBbmRNZXRyaWNzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSB0aGlzLmRpbWVuc2lvbnNBbmRNZXRyaWNzW2tleV07XG4gICAgICBpZiAodmFsID09PSB1bmRlZmluZWQgfHwgdmFsID09PSBudWxsKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmRpbWVuc2lvbnNBbmRNZXRyaWNzW2tleV07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodHlwZW9mIGd0YWcgIT09ICd1bmRlZmluZWQnICYmIGd0YWcpIHtcbiAgICAgIGZvciAoY29uc3QgaWQgb2YgdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ3N0LnRyYWNraW5nSWRzKSB7XG4gICAgICAgIGd0YWcoJ3NldCcsIGlkLCB0aGlzLmRpbWVuc2lvbnNBbmRNZXRyaWNzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGV2ZW50VHJhY2tJbnRlcm5hbChhY3Rpb246IHN0cmluZywgcHJvcGVydGllczogYW55ID0ge30pIHtcbiAgICB0aGlzLmNsZWFuUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgICBpZiAodHlwZW9mIGd0YWcgIT09ICd1bmRlZmluZWQnICYmIGd0YWcpIHtcbiAgICAgIGd0YWcoJ2V2ZW50JywgYWN0aW9uLCBwcm9wZXJ0aWVzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNsZWFuUHJvcGVydGllcyhwcm9wZXJ0aWVzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9KTogdm9pZCB7XG4gICAgLy8gR0EgcmVxdWlyZXMgdGhhdCBldmVudFZhbHVlIGJlIGFuIG5vbi1uZWdhdGl2ZSBpbnRlZ2VyLCBzZWU6XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL2d0YWdqcy9ldmVudHNcbiAgICBpZiAocHJvcGVydGllcy52YWx1ZSkge1xuICAgICAgY29uc3QgcGFyc2VkID0gcGFyc2VJbnQocHJvcGVydGllcy52YWx1ZSwgMTApO1xuICAgICAgcHJvcGVydGllcy52YWx1ZSA9IGlzTmFOKHBhcnNlZCkgPyAwIDogcGFyc2VkO1xuICAgIH1cbiAgfVxufVxuIl19