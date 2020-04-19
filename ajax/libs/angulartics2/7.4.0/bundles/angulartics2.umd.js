(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('@angular/common'), require('@angular/router'), require('rxjs/operators'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('angulartics2', ['exports', 'rxjs', '@angular/common', '@angular/router', 'rxjs/operators', '@angular/core'], factory) :
    (factory((global.angulartics2 = {}),global.rxjs,global.ng.common,global.ng.router,global.rxjs.operators,global.ng.core));
}(this, (function (exports,rxjs,i2,i1,operators,i0) { 'use strict';

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
    var DefaultConfig = /** @class */ (function () {
        function DefaultConfig() {
            this.pageTracking = {
                autoTrackVirtualPages: true,
                basePath: '',
                excludedRoutes: [],
                clearIds: false,
                clearHash: false,
                clearQueryParams: false,
                idsRegExp: /^\d+$|^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/,
            };
            this.developerMode = false;
            this.ga = {};
            this.appInsights = {};
            this.gtm = {};
            this.gst = {};
        }
        return DefaultConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var ANGULARTICS2_TOKEN = new i0.InjectionToken('ANGULARTICS2');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RouterlessTracking = /** @class */ (function () {
        function RouterlessTracking() {
        }
        /**
         * @param {?} settings
         * @return {?}
         */
        RouterlessTracking.prototype.trackLocation = /**
         * @param {?} settings
         * @return {?}
         */
            function (settings) {
                return new rxjs.BehaviorSubject({ url: '/' });
            };
        /**
         * @param {?} url
         * @return {?}
         */
        RouterlessTracking.prototype.prepareExternalUrl = /**
         * @param {?} url
         * @return {?}
         */
            function (url) {
                return url;
            };
        return RouterlessTracking;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Angulartics2 = /** @class */ (function () {
        function Angulartics2(tracker, setup) {
            var _this = this;
            this.tracker = tracker;
            this.pageTrack = new rxjs.ReplaySubject(10);
            this.eventTrack = new rxjs.ReplaySubject(10);
            this.exceptionTrack = new rxjs.ReplaySubject(10);
            this.setAlias = new rxjs.ReplaySubject(10);
            this.setUsername = new rxjs.ReplaySubject(10);
            this.setUserProperties = new rxjs.ReplaySubject(10);
            this.setUserPropertiesOnce = new rxjs.ReplaySubject(10);
            this.setSuperProperties = new rxjs.ReplaySubject(10);
            this.setSuperPropertiesOnce = new rxjs.ReplaySubject(10);
            this.userTimings = new rxjs.ReplaySubject(10);
            /** @type {?} */
            var defaultConfig = new DefaultConfig();
            this.settings = __assign({}, defaultConfig, setup.settings);
            this.settings.pageTracking = __assign({}, defaultConfig.pageTracking, setup.settings.pageTracking);
            this.tracker
                .trackLocation(this.settings)
                .subscribe(function (event) {
                return _this.trackUrlChange(event.url);
            });
        }
        /** filters all events when developer mode is true */
        /**
         * filters all events when developer mode is true
         * @template T
         * @return {?}
         */
        Angulartics2.prototype.filterDeveloperMode = /**
         * filters all events when developer mode is true
         * @template T
         * @return {?}
         */
            function () {
                var _this = this;
                return operators.filter(function (value, index) { return !_this.settings.developerMode; });
            };
        /**
         * @protected
         * @param {?} url
         * @return {?}
         */
        Angulartics2.prototype.trackUrlChange = /**
         * @protected
         * @param {?} url
         * @return {?}
         */
            function (url) {
                if (this.settings.pageTracking.autoTrackVirtualPages && !this.matchesExcludedRoute(url)) {
                    /** @type {?} */
                    var clearedUrl = this.clearUrl(url);
                    /** @type {?} */
                    var path = void 0;
                    if (this.settings.pageTracking.basePath.length) {
                        path = this.settings.pageTracking.basePath + clearedUrl;
                    }
                    else {
                        path = this.tracker.prepareExternalUrl(clearedUrl);
                    }
                    this.pageTrack.next({ path: path });
                }
            };
        /**
         * Use string literals or regular expressions to exclude routes
         * from automatic pageview tracking.
         *
         * @param url location
         */
        /**
         * Use string literals or regular expressions to exclude routes
         * from automatic pageview tracking.
         *
         * @protected
         * @param {?} url location
         * @return {?}
         */
        Angulartics2.prototype.matchesExcludedRoute = /**
         * Use string literals or regular expressions to exclude routes
         * from automatic pageview tracking.
         *
         * @protected
         * @param {?} url location
         * @return {?}
         */
            function (url) {
                var e_1, _a;
                try {
                    for (var _b = __values(this.settings.pageTracking.excludedRoutes), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var excludedRoute = _c.value;
                        /** @type {?} */
                        var matchesRegex = excludedRoute instanceof RegExp && excludedRoute.test(url);
                        if (matchesRegex || url.indexOf(( /** @type {?} */(excludedRoute))) !== -1) {
                            return true;
                        }
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
                return false;
            };
        /**
         * Removes id's from tracked route.
         *  EX: `/project/12981/feature` becomes `/project/feature`
         *
         * @param url current page path
         */
        /**
         * Removes id's from tracked route.
         *  EX: `/project/12981/feature` becomes `/project/feature`
         *
         * @protected
         * @param {?} url current page path
         * @return {?}
         */
        Angulartics2.prototype.clearUrl = /**
         * Removes id's from tracked route.
         *  EX: `/project/12981/feature` becomes `/project/feature`
         *
         * @protected
         * @param {?} url current page path
         * @return {?}
         */
            function (url) {
                var _this = this;
                if (this.settings.pageTracking.clearIds || this.settings.pageTracking.clearQueryParams ||
                    this.settings.pageTracking.clearHash) {
                    return url
                        .split('/')
                        .map(function (part) { return _this.settings.pageTracking.clearQueryParams ? part.split('?')[0] : part; })
                        .map(function (part) { return _this.settings.pageTracking.clearHash ? part.split('#')[0] : part; })
                        .filter(function (part) { return !_this.settings.pageTracking.clearIds || !part.match(_this.settings.pageTracking.idsRegExp); })
                        .join('/');
                }
                return url;
            };
        Angulartics2.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        Angulartics2.ctorParameters = function () {
            return [
                { type: RouterlessTracking },
                { type: undefined, decorators: [{ type: i0.Inject, args: [ANGULARTICS2_TOKEN,] }] }
            ];
        };
        /** @nocollapse */ Angulartics2.ngInjectableDef = i0.defineInjectable({ factory: function Angulartics2_Factory() { return new Angulartics2(i0.inject(RouterlessTracking), i0.inject(ANGULARTICS2_TOKEN)); }, token: Angulartics2, providedIn: "root" });
        return Angulartics2;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Track Route changes for applications using Angular's
     * default router
     *
     * @link https://angular.io/api/router/Router
     */
    var AngularRouterTracking = /** @class */ (function () {
        function AngularRouterTracking(router, location) {
            this.router = router;
            this.location = location;
        }
        /**
         * @param {?} settings
         * @return {?}
         */
        AngularRouterTracking.prototype.trackLocation = /**
         * @param {?} settings
         * @return {?}
         */
            function (settings) {
                return this.router.events.pipe(operators.filter(function (e) { return e instanceof i1.NavigationEnd; }), operators.filter(function () { return !settings.developerMode; }), operators.map(function (e) {
                    return { url: e.urlAfterRedirects };
                }), operators.delay(0));
            };
        /**
         * @param {?} url
         * @return {?}
         */
        AngularRouterTracking.prototype.prepareExternalUrl = /**
         * @param {?} url
         * @return {?}
         */
            function (url) {
                return this.location.prepareExternalUrl(url);
            };
        AngularRouterTracking.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        AngularRouterTracking.ctorParameters = function () {
            return [
                { type: i1.Router },
                { type: i2.Location }
            ];
        };
        /** @nocollapse */ AngularRouterTracking.ngInjectableDef = i0.defineInjectable({ factory: function AngularRouterTracking_Factory() { return new AngularRouterTracking(i0.inject(i1.Router), i0.inject(i2.Location)); }, token: AngularRouterTracking, providedIn: "root" });
        return AngularRouterTracking;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Angulartics2On = /** @class */ (function () {
        function Angulartics2On(elRef, angulartics2, renderer) {
            this.elRef = elRef;
            this.angulartics2 = angulartics2;
            this.renderer = renderer;
            this.angularticsProperties = {};
        }
        /**
         * @return {?}
         */
        Angulartics2On.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.renderer.listen(this.elRef.nativeElement, this.angulartics2On || 'click', function (event) { return _this.eventTrack(event); });
            };
        /**
         * @param {?} event
         * @return {?}
         */
        Angulartics2On.prototype.eventTrack = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                /** @type {?} */
                var action = this.angularticsAction;
                // || this.inferEventName();
                /** @type {?} */
                var properties = __assign({}, this.angularticsProperties, { eventType: event.type });
                if (this.angularticsCategory) {
                    properties.category = this.angularticsCategory;
                }
                if (this.angularticsLabel) {
                    properties.label = this.angularticsLabel;
                }
                if (this.angularticsValue) {
                    properties.value = this.angularticsValue;
                }
                this.angulartics2.eventTrack.next({
                    action: action,
                    properties: properties,
                });
            };
        Angulartics2On.decorators = [
            { type: i0.Directive, args: [{ selector: '[angulartics2On]' },] }
        ];
        /** @nocollapse */
        Angulartics2On.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: Angulartics2 },
                { type: i0.Renderer2 }
            ];
        };
        Angulartics2On.propDecorators = {
            angulartics2On: [{ type: i0.Input, args: ['angulartics2On',] }],
            angularticsAction: [{ type: i0.Input }],
            angularticsCategory: [{ type: i0.Input }],
            angularticsLabel: [{ type: i0.Input }],
            angularticsValue: [{ type: i0.Input }],
            angularticsProperties: [{ type: i0.Input }]
        };
        return Angulartics2On;
    }());
    var Angulartics2OnModule = /** @class */ (function () {
        function Angulartics2OnModule() {
        }
        Angulartics2OnModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [Angulartics2On],
                        exports: [Angulartics2On],
                    },] }
        ];
        return Angulartics2OnModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Angulartics2Module = /** @class */ (function () {
        function Angulartics2Module() {
        }
        /**
         * @param {?=} settings
         * @return {?}
         */
        Angulartics2Module.forRoot = /**
         * @param {?=} settings
         * @return {?}
         */
            function (settings) {
                if (settings === void 0) {
                    settings = {};
                }
                return {
                    ngModule: Angulartics2Module,
                    providers: [
                        { provide: ANGULARTICS2_TOKEN, useValue: { settings: settings } },
                        { provide: RouterlessTracking, useClass: AngularRouterTracking },
                        Angulartics2,
                    ],
                };
            };
        Angulartics2Module.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [Angulartics2OnModule],
                        exports: [Angulartics2On],
                    },] }
        ];
        return Angulartics2Module;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.Angulartics2 = Angulartics2;
    exports.Angulartics2Module = Angulartics2Module;
    exports.ANGULARTICS2_TOKEN = ANGULARTICS2_TOKEN;
    exports.Angulartics2On = Angulartics2On;
    exports.Angulartics2OnModule = Angulartics2OnModule;
    exports.RouterlessTracking = RouterlessTracking;
    exports.AngularRouterTracking = AngularRouterTracking;
    exports.DefaultConfig = DefaultConfig;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=angulartics2.umd.js.map