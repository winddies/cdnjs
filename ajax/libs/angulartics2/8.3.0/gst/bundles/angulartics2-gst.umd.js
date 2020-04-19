(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('angulartics2')) :
    typeof define === 'function' && define.amd ? define('angulartics2/gst', ['exports', '@angular/core', 'angulartics2'], factory) :
    (global = global || self, factory((global.angulartics2 = global.angulartics2 || {}, global.angulartics2.gst = {}), global.ng.core, global.angulartics2));
}(this, function (exports, core, angulartics2) { 'use strict';

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

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    var GoogleGlobalSiteTagDefaults = /** @class */ (function () {
        function GoogleGlobalSiteTagDefaults() {
            var _this = this;
            this.trackingIds = [];
            if (typeof ga !== 'undefined' && ga) {
                // See: https://developers.google.com/analytics/devguides/collection/analyticsjs/ga-object-methods-reference
                ga(function () {
                    ga.getAll().forEach(function (tracker) {
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
            var defaults = new GoogleGlobalSiteTagDefaults();
            // Set the default settings for this module
            this.angulartics2.settings.gst = __assign({}, defaults, this.angulartics2.settings.gst);
        }
        Angulartics2GoogleGlobalSiteTag.prototype.startTracking = function () {
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
        Angulartics2GoogleGlobalSiteTag.prototype.pageTrack = function (path) {
            var e_1, _a;
            if (typeof gtag !== 'undefined' && gtag) {
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
        Angulartics2GoogleGlobalSiteTag.prototype.eventTrack = function (action, properties) {
            if (properties === void 0) { properties = {}; }
            this.eventTrackInternal(action, __assign({ event_category: properties.category || 'interaction', event_label: properties.label, value: properties.value, non_interaction: properties.noninteraction }, properties.gstCustom));
        };
        /**
         * Exception Track Event in GST. See:
         *
         * https://developers.google.com/analytics/devguides/collection/gtagjs/exceptions
         *
         */
        Angulartics2GoogleGlobalSiteTag.prototype.exceptionTrack = function (properties) {
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
                gstCustom: __assign({ description: properties.exDescription, fatal: properties.fatal }, properties.gstCustom)
            });
        };
        /**
         * User Timings Event in GST.
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
        Angulartics2GoogleGlobalSiteTag.prototype.userTimings = function (properties) {
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
        Angulartics2GoogleGlobalSiteTag.prototype.convertTimings = function (properties) {
            return {
                name: properties.timingVar,
                value: properties.timingValue,
                category: properties.timingCategory,
                label: properties.timingLabel
            };
        };
        Angulartics2GoogleGlobalSiteTag.prototype.setUsername = function (userId) {
            this.angulartics2.settings.gst.userId = userId;
            if (typeof gtag !== 'undefined' && gtag) {
                gtag('set', { user_id: typeof userId === 'string' || !userId ? userId : userId.userId });
            }
        };
        Angulartics2GoogleGlobalSiteTag.prototype.setUserProperties = function (properties) {
            this.setDimensionsAndMetrics(properties);
        };
        Angulartics2GoogleGlobalSiteTag.prototype.setDimensionsAndMetrics = function (properties) {
            var _this = this;
            // We want the dimensions and metrics to accumulate, so we merge with previous value
            this.dimensionsAndMetrics = __assign({}, this.dimensionsAndMetrics, properties);
            // Remove properties that are null or undefined
            Object.keys(this.dimensionsAndMetrics).forEach(function (key) {
                var val = _this.dimensionsAndMetrics[key];
                if (val === undefined || val === null) {
                    delete _this.dimensionsAndMetrics[key];
                }
            });
            if (typeof gtag !== 'undefined' && gtag) {
                gtag('set', this.dimensionsAndMetrics);
            }
        };
        Angulartics2GoogleGlobalSiteTag.prototype.eventTrackInternal = function (action, properties) {
            if (properties === void 0) { properties = {}; }
            this.cleanProperties(properties);
            if (typeof gtag !== 'undefined' && gtag) {
                gtag('event', action, properties);
            }
        };
        Angulartics2GoogleGlobalSiteTag.prototype.cleanProperties = function (properties) {
            // GA requires that eventValue be an non-negative integer, see:
            // https://developers.google.com/analytics/devguides/collection/gtagjs/events
            if (properties.value) {
                var parsed = parseInt(properties.value, 10);
                properties.value = isNaN(parsed) ? 0 : parsed;
            }
        };
        Angulartics2GoogleGlobalSiteTag.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function Angulartics2GoogleGlobalSiteTag_Factory() { return new Angulartics2GoogleGlobalSiteTag(core.ɵɵinject(angulartics2.Angulartics2)); }, token: Angulartics2GoogleGlobalSiteTag, providedIn: "root" });
        Angulartics2GoogleGlobalSiteTag = __decorate([
            core.Injectable({ providedIn: 'root' }),
            __metadata("design:paramtypes", [angulartics2.Angulartics2])
        ], Angulartics2GoogleGlobalSiteTag);
        return Angulartics2GoogleGlobalSiteTag;
    }());

    exports.Angulartics2GoogleGlobalSiteTag = Angulartics2GoogleGlobalSiteTag;
    exports.GoogleGlobalSiteTagDefaults = GoogleGlobalSiteTagDefaults;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=angulartics2-gst.umd.js.map
