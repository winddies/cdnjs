(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@angular/common'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('angulartics2', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', '@angular/common', '@angular/router'], factory) :
    (global = global || self, factory(global.angulartics2 = {}, global.ng.core, global.rxjs, global.rxjs.operators, global.ng.common, global.ng.router));
}(this, function (exports, core, rxjs, operators, common, router) { 'use strict';

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

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
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

    var ANGULARTICS2_TOKEN = new core.InjectionToken('ANGULARTICS2');

    var RouterlessTracking = /** @class */ (function () {
        function RouterlessTracking() {
        }
        RouterlessTracking.prototype.trackLocation = function (settings) {
            return new rxjs.BehaviorSubject({ url: '/' });
        };
        RouterlessTracking.prototype.prepareExternalUrl = function (url) {
            return url;
        };
        return RouterlessTracking;
    }());

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
        Angulartics2.prototype.filterDeveloperMode = function () {
            var _this = this;
            return operators.filter(function (value, index) { return !_this.settings.developerMode; });
        };
        Angulartics2.prototype.trackUrlChange = function (url) {
            if (this.settings.pageTracking.autoTrackVirtualPages && !this.matchesExcludedRoute(url)) {
                var clearedUrl = this.clearUrl(url);
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
        Angulartics2.prototype.matchesExcludedRoute = function (url) {
            var e_1, _a;
            try {
                for (var _b = __values(this.settings.pageTracking.excludedRoutes), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var excludedRoute = _c.value;
                    var matchesRegex = excludedRoute instanceof RegExp && excludedRoute.test(url);
                    if (matchesRegex || url.indexOf(excludedRoute) !== -1) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        };
        /**
         * Removes id's from tracked route.
         *  EX: `/project/12981/feature` becomes `/project/feature`
         *
         * @param url current page path
         */
        Angulartics2.prototype.clearUrl = function (url) {
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
        Angulartics2.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function Angulartics2_Factory() { return new Angulartics2(core.ɵɵinject(RouterlessTracking), core.ɵɵinject(ANGULARTICS2_TOKEN)); }, token: Angulartics2, providedIn: "root" });
        Angulartics2 = __decorate([
            core.Injectable({ providedIn: 'root' }),
            __param(1, core.Inject(ANGULARTICS2_TOKEN)),
            __metadata("design:paramtypes", [RouterlessTracking, Object])
        ], Angulartics2);
        return Angulartics2;
    }());

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
        AngularRouterTracking.prototype.trackLocation = function (settings) {
            return this.router.events.pipe(operators.filter(function (e) { return e instanceof router.NavigationEnd; }), operators.filter(function () { return !settings.developerMode; }), operators.map(function (e) {
                return { url: e.urlAfterRedirects };
            }), operators.delay(0));
        };
        AngularRouterTracking.prototype.prepareExternalUrl = function (url) {
            return this.location.prepareExternalUrl(url);
        };
        AngularRouterTracking.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function AngularRouterTracking_Factory() { return new AngularRouterTracking(core.ɵɵinject(router.Router), core.ɵɵinject(common.Location)); }, token: AngularRouterTracking, providedIn: "root" });
        AngularRouterTracking = __decorate([
            core.Injectable({ providedIn: 'root' }),
            __metadata("design:paramtypes", [router.Router,
                common.Location])
        ], AngularRouterTracking);
        return AngularRouterTracking;
    }());

    var Angulartics2On = /** @class */ (function () {
        function Angulartics2On(elRef, angulartics2, renderer) {
            this.elRef = elRef;
            this.angulartics2 = angulartics2;
            this.renderer = renderer;
            this.angularticsProperties = {};
        }
        Angulartics2On.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.renderer.listen(this.elRef.nativeElement, this.angulartics2On || 'click', function (event) { return _this.eventTrack(event); });
        };
        Angulartics2On.prototype.eventTrack = function (event) {
            var action = this.angularticsAction; // || this.inferEventName();
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
        __decorate([
            core.Input('angulartics2On'),
            __metadata("design:type", String)
        ], Angulartics2On.prototype, "angulartics2On", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], Angulartics2On.prototype, "angularticsAction", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], Angulartics2On.prototype, "angularticsCategory", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], Angulartics2On.prototype, "angularticsLabel", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], Angulartics2On.prototype, "angularticsValue", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], Angulartics2On.prototype, "angularticsProperties", void 0);
        Angulartics2On = __decorate([
            core.Directive({ selector: '[angulartics2On]' }),
            __metadata("design:paramtypes", [core.ElementRef,
                Angulartics2,
                core.Renderer2])
        ], Angulartics2On);
        return Angulartics2On;
    }());
    var Angulartics2OnModule = /** @class */ (function () {
        function Angulartics2OnModule() {
        }
        Angulartics2OnModule = __decorate([
            core.NgModule({
                declarations: [Angulartics2On],
                exports: [Angulartics2On],
            })
        ], Angulartics2OnModule);
        return Angulartics2OnModule;
    }());

    var Angulartics2Module = /** @class */ (function () {
        function Angulartics2Module() {
        }
        Angulartics2Module_1 = Angulartics2Module;
        Angulartics2Module.forRoot = function (settings) {
            if (settings === void 0) { settings = {}; }
            return {
                ngModule: Angulartics2Module_1,
                providers: [
                    { provide: ANGULARTICS2_TOKEN, useValue: { settings: settings } },
                    { provide: RouterlessTracking, useClass: AngularRouterTracking },
                    Angulartics2,
                ],
            };
        };
        var Angulartics2Module_1;
        Angulartics2Module = Angulartics2Module_1 = __decorate([
            core.NgModule({
                imports: [Angulartics2OnModule],
                exports: [Angulartics2On],
            })
        ], Angulartics2Module);
        return Angulartics2Module;
    }());

    exports.ANGULARTICS2_TOKEN = ANGULARTICS2_TOKEN;
    exports.AngularRouterTracking = AngularRouterTracking;
    exports.Angulartics2 = Angulartics2;
    exports.Angulartics2Module = Angulartics2Module;
    exports.Angulartics2On = Angulartics2On;
    exports.Angulartics2OnModule = Angulartics2OnModule;
    exports.DefaultConfig = DefaultConfig;
    exports.RouterlessTracking = RouterlessTracking;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=angulartics2.umd.js.map
