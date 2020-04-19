(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('angulartics2')) :
    typeof define === 'function' && define.amd ? define('angulartics2/gst', ['exports', '@angular/core', 'angulartics2'], factory) :
    (factory((global.angulartics2 = global.angulartics2 || {}, global.angulartics2.gst = {}),global.ng.core,global.angulartics2));
}(this, (function (exports,i0,i1) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
    var Angulartics2GoogleGlobalSiteTag = /** @class */ (function () {
        function Angulartics2GoogleGlobalSiteTag(angulartics2) {
            this.angulartics2 = angulartics2;
            this.dimensionsAndMetrics = {};
            /** @type {?} */
            var defaults = new GoogleGlobalSiteTagDefaults;
            // Set the default settings for this module
            this.angulartics2.settings.gst = __assign({}, defaults, this.angulartics2.settings.gst);
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
                    var params = __assign({ page_path: path, page_location: window.location.protocol + '//' + window.location.host + path }, this.dimensionsAndMetrics);
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
                        for (var _b = __values(this.angulartics2.settings.gst.trackingIds), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var id = _c.value;
                            gtag('config', id, params);
                        }
                    }
                    catch (e_1_1) {
                        e_1 = { error: e_1_1 };
                    }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return))
                                _a.call(_b);
                        }
                        finally {
                            if (e_1)
                                throw e_1.error;
                        }
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
                if (properties === void 0) {
                    properties = {};
                }
                this.eventTrackInternal(action, __assign({ event_category: properties.category || 'interaction', event_label: properties.label, value: properties.value, non_interaction: properties.noninteraction }, properties.gstCustom));
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
                    gstCustom: __assign({ 'description': properties.exDescription, 'fatal': properties.fatal }, properties.gstCustom)
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
                this.dimensionsAndMetrics = __assign({}, this.dimensionsAndMetrics, properties);
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
                if (properties === void 0) {
                    properties = {};
                }
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
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        Angulartics2GoogleGlobalSiteTag.ctorParameters = function () {
            return [
                { type: i1.Angulartics2 }
            ];
        };
        /** @nocollapse */ Angulartics2GoogleGlobalSiteTag.ngInjectableDef = i0.defineInjectable({ factory: function Angulartics2GoogleGlobalSiteTag_Factory() { return new Angulartics2GoogleGlobalSiteTag(i0.inject(i1.Angulartics2)); }, token: Angulartics2GoogleGlobalSiteTag, providedIn: "root" });
        return Angulartics2GoogleGlobalSiteTag;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.GoogleGlobalSiteTagDefaults = GoogleGlobalSiteTagDefaults;
    exports.Angulartics2GoogleGlobalSiteTag = Angulartics2GoogleGlobalSiteTag;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=angulartics2-gst.umd.js.map