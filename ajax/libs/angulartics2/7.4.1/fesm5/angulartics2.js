import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { Location } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { filter, delay, map } from 'rxjs/operators';
import { __assign, __values } from 'tslib';
import { InjectionToken, Inject, Injectable, NgModule, defineInjectable, inject, Directive, ElementRef, Renderer2, Input } from '@angular/core';

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
var ANGULARTICS2_TOKEN = new InjectionToken('ANGULARTICS2');

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
        return new BehaviorSubject({ url: '/' });
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
        this.pageTrack = new ReplaySubject(10);
        this.eventTrack = new ReplaySubject(10);
        this.exceptionTrack = new ReplaySubject(10);
        this.setAlias = new ReplaySubject(10);
        this.setUsername = new ReplaySubject(10);
        this.setUserProperties = new ReplaySubject(10);
        this.setUserPropertiesOnce = new ReplaySubject(10);
        this.setSuperProperties = new ReplaySubject(10);
        this.setSuperPropertiesOnce = new ReplaySubject(10);
        this.userTimings = new ReplaySubject(10);
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
        return filter(function (value, index) { return !_this.settings.developerMode; });
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
                if (matchesRegex || url.indexOf((/** @type {?} */ (excludedRoute))) !== -1) {
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
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    Angulartics2.ctorParameters = function () { return [
        { type: RouterlessTracking },
        { type: undefined, decorators: [{ type: Inject, args: [ANGULARTICS2_TOKEN,] }] }
    ]; };
    /** @nocollapse */ Angulartics2.ngInjectableDef = defineInjectable({ factory: function Angulartics2_Factory() { return new Angulartics2(inject(RouterlessTracking), inject(ANGULARTICS2_TOKEN)); }, token: Angulartics2, providedIn: "root" });
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
        return this.router.events.pipe(filter(function (e) { return e instanceof NavigationEnd; }), filter(function () { return !settings.developerMode; }), map(function (e) {
            return { url: e.urlAfterRedirects };
        }), delay(0));
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
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    AngularRouterTracking.ctorParameters = function () { return [
        { type: Router },
        { type: Location }
    ]; };
    /** @nocollapse */ AngularRouterTracking.ngInjectableDef = defineInjectable({ factory: function AngularRouterTracking_Factory() { return new AngularRouterTracking(inject(Router), inject(Location)); }, token: AngularRouterTracking, providedIn: "root" });
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
        { type: Directive, args: [{ selector: '[angulartics2On]' },] }
    ];
    /** @nocollapse */
    Angulartics2On.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Angulartics2 },
        { type: Renderer2 }
    ]; };
    Angulartics2On.propDecorators = {
        angulartics2On: [{ type: Input, args: ['angulartics2On',] }],
        angularticsAction: [{ type: Input }],
        angularticsCategory: [{ type: Input }],
        angularticsLabel: [{ type: Input }],
        angularticsValue: [{ type: Input }],
        angularticsProperties: [{ type: Input }]
    };
    return Angulartics2On;
}());
var Angulartics2OnModule = /** @class */ (function () {
    function Angulartics2OnModule() {
    }
    Angulartics2OnModule.decorators = [
        { type: NgModule, args: [{
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
        if (settings === void 0) { settings = {}; }
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
        { type: NgModule, args: [{
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { Angulartics2, Angulartics2Module, ANGULARTICS2_TOKEN, Angulartics2On, Angulartics2OnModule, RouterlessTracking, AngularRouterTracking, DefaultConfig };

//# sourceMappingURL=angulartics2.js.map