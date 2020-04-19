(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser'), require('@angular/router'), require('rxjs/operators'), require('angulartics2')) :
    typeof define === 'function' && define.amd ? define('angulartics2/appinsights', ['exports', '@angular/core', '@angular/platform-browser', '@angular/router', 'rxjs/operators', 'angulartics2'], factory) :
    (factory((global.angulartics2 = global.angulartics2 || {}, global.angulartics2.appinsights = {}),global.ng.core,global.ng.platformBrowser,global.ng.router,global.rxjs.operators,global.angulartics2));
}(this, (function (exports,i0,i2,i3,operators,i1) { 'use strict';

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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AppInsightsDefaults = /** @class */ (function () {
        function AppInsightsDefaults() {
            this.userId = null;
        }
        return AppInsightsDefaults;
    }());
    var Angulartics2AppInsights = /** @class */ (function () {
        function Angulartics2AppInsights(angulartics2, title, router) {
            var _this = this;
            this.angulartics2 = angulartics2;
            this.title = title;
            this.router = router;
            this.loadStartTime = null;
            this.loadTime = null;
            this.metrics = null;
            this.dimensions = null;
            this.measurements = null;
            if (typeof appInsights === 'undefined') {
                console.warn('appInsights not found');
            }
            /** @type {?} */
            var defaults = new AppInsightsDefaults;
            // Set the default settings for this module
            this.angulartics2.settings.appInsights = __assign({}, defaults, this.angulartics2.settings.appInsights);
            this.angulartics2.setUsername
                .subscribe(function (x) { return _this.setUsername(x); });
            this.angulartics2.setUserProperties
                .subscribe(function (x) { return _this.setUserProperties(x); });
        }
        /**
         * @return {?}
         */
        Angulartics2AppInsights.prototype.startTracking = /**
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
                this.router.events
                    .pipe(this.angulartics2.filterDeveloperMode(), operators.filter(function (event) { return event instanceof i3.NavigationStart; }))
                    .subscribe(function (event) { return _this.startTimer(); });
                this.router.events
                    .pipe(operators.filter(function (event) { return event instanceof i3.NavigationError || event instanceof i3.NavigationEnd; }))
                    .subscribe(function (error) { return _this.stopTimer(); });
            };
        /**
         * @return {?}
         */
        Angulartics2AppInsights.prototype.startTimer = /**
         * @return {?}
         */
            function () {
                this.loadStartTime = Date.now();
                this.loadTime = null;
            };
        /**
         * @return {?}
         */
        Angulartics2AppInsights.prototype.stopTimer = /**
         * @return {?}
         */
            function () {
                this.loadTime = Date.now() - this.loadStartTime;
                this.loadStartTime = null;
            };
        /**
         * Page Track in Baidu Analytics
         *
         * @param path - Location 'path'
         *
         * @link https://github.com/Microsoft/ApplicationInsights-JS/blob/master/API-reference.md#trackpageview
         */
        /**
         * Page Track in Baidu Analytics
         *
         * @link https://github.com/Microsoft/ApplicationInsights-JS/blob/master/API-reference.md#trackpageview
         * @param {?} path - Location 'path'
         *
         * @return {?}
         */
        Angulartics2AppInsights.prototype.pageTrack = /**
         * Page Track in Baidu Analytics
         *
         * @link https://github.com/Microsoft/ApplicationInsights-JS/blob/master/API-reference.md#trackpageview
         * @param {?} path - Location 'path'
         *
         * @return {?}
         */
            function (path) {
                appInsights.trackPageView(this.title.getTitle(), path, this.dimensions, this.metrics, this.loadTime);
            };
        /**
         * Log a user action or other occurrence.
         *
         * @param name Name to identify this event in the portal.
         * @param properties Additional data used to filter events and metrics in the portal. Defaults to empty.
         *
         * @link https://github.com/Microsoft/ApplicationInsights-JS/blob/master/API-reference.md#trackevent
         */
        /**
         * Log a user action or other occurrence.
         *
         * @link https://github.com/Microsoft/ApplicationInsights-JS/blob/master/API-reference.md#trackevent
         * @param {?} name Name to identify this event in the portal.
         * @param {?} properties Additional data used to filter events and metrics in the portal. Defaults to empty.
         *
         * @return {?}
         */
        Angulartics2AppInsights.prototype.eventTrack = /**
         * Log a user action or other occurrence.
         *
         * @link https://github.com/Microsoft/ApplicationInsights-JS/blob/master/API-reference.md#trackevent
         * @param {?} name Name to identify this event in the portal.
         * @param {?} properties Additional data used to filter events and metrics in the portal. Defaults to empty.
         *
         * @return {?}
         */
            function (name, properties) {
                appInsights.trackEvent(name, properties, this.measurements);
            };
        /**
         * Exception Track Event in GA
         *
         * @param properties - Comprised of the mandatory fields 'appId' (string), 'appName' (string) and 'appVersion' (string) and
         * optional fields 'fatal' (boolean) and 'description' (string), error
         *
         * @link https://github.com/Microsoft/ApplicationInsights-JS/blob/master/API-reference.md#trackexception
         */
        /**
         * Exception Track Event in GA
         *
         * @link https://github.com/Microsoft/ApplicationInsights-JS/blob/master/API-reference.md#trackexception
         * @param {?} properties - Comprised of the mandatory fields 'appId' (string), 'appName' (string) and 'appVersion' (string) and
         * optional fields 'fatal' (boolean) and 'description' (string), error
         *
         * @return {?}
         */
        Angulartics2AppInsights.prototype.exceptionTrack = /**
         * Exception Track Event in GA
         *
         * @link https://github.com/Microsoft/ApplicationInsights-JS/blob/master/API-reference.md#trackexception
         * @param {?} properties - Comprised of the mandatory fields 'appId' (string), 'appName' (string) and 'appVersion' (string) and
         * optional fields 'fatal' (boolean) and 'description' (string), error
         *
         * @return {?}
         */
            function (properties) {
                /** @type {?} */
                var description = properties.event || properties.description || properties;
                appInsights.trackException(description);
            };
        /**
         *
         * @param userId
         *
         * @link https://github.com/Microsoft/ApplicationInsights-JS/blob/master/API-reference.md#setauthenticatedusercontext
         */
        /**
         *
         * @link https://github.com/Microsoft/ApplicationInsights-JS/blob/master/API-reference.md#setauthenticatedusercontext
         * @param {?} userId
         *
         * @return {?}
         */
        Angulartics2AppInsights.prototype.setUsername = /**
         *
         * @link https://github.com/Microsoft/ApplicationInsights-JS/blob/master/API-reference.md#setauthenticatedusercontext
         * @param {?} userId
         *
         * @return {?}
         */
            function (userId) {
                this.angulartics2.settings.appInsights.userId = userId;
                appInsights.setAuthenticatedUserContext(userId);
            };
        /**
         * @param {?} properties
         * @return {?}
         */
        Angulartics2AppInsights.prototype.setUserProperties = /**
         * @param {?} properties
         * @return {?}
         */
            function (properties) {
                if (properties.userId) {
                    this.angulartics2.settings.appInsights.userId = properties.userId;
                }
                if (properties.accountId) {
                    appInsights.setAuthenticatedUserContext(this.angulartics2.settings.appInsights.userId, properties.accountId);
                }
                else {
                    appInsights.setAuthenticatedUserContext(this.angulartics2.settings.appInsights.userId);
                }
            };
        Angulartics2AppInsights.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        Angulartics2AppInsights.ctorParameters = function () {
            return [
                { type: i1.Angulartics2 },
                { type: i2.Title },
                { type: i3.Router }
            ];
        };
        /** @nocollapse */ Angulartics2AppInsights.ngInjectableDef = i0.defineInjectable({ factory: function Angulartics2AppInsights_Factory() { return new Angulartics2AppInsights(i0.inject(i1.Angulartics2), i0.inject(i2.Title), i0.inject(i3.Router)); }, token: Angulartics2AppInsights, providedIn: "root" });
        return Angulartics2AppInsights;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.AppInsightsDefaults = AppInsightsDefaults;
    exports.Angulartics2AppInsights = Angulartics2AppInsights;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=angulartics2-appinsights.umd.js.map