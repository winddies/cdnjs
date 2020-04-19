import { Angulartics2, Angulartics2OnModule, ANGULARTICS2_TOKEN, RouterlessTracking } from 'angulartics2';
import { Injectable, NgModule, defineInjectable, inject } from '@angular/core';
import { TransitionService } from '@uirouter/core';
import { Subject } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Track Route changes for applications using UI-Router
 *
 * @link https://ui-router.github.io/ng2/docs/latest/
 *
 * referenced: https://github.com/ui-router/sample-app-angular/blob/9adb533b85c0f0fccef23968489cca0a5ec84654/src/app/util/ga.ts
 */
var UIRouterTracking = /** @class */ (function () {
    function UIRouterTracking(transitionService) {
        this.transitionService = transitionService;
    }
    /**
     * @param {?} trans
     * @return {?}
     */
    UIRouterTracking.prototype.path = /**
     * @param {?} trans
     * @return {?}
     */
    function (trans) {
        return trans.$to().url.format(trans.params());
    };
    /**
     * @param {?} settings
     * @return {?}
     */
    UIRouterTracking.prototype.trackLocation = /**
     * @param {?} settings
     * @return {?}
     */
    function (settings) {
        var _this = this;
        /** @type {?} */
        var subject = new Subject();
        this.transitionService.onSuccess({}, function (trans) {
            return subject.next({ url: _this.path(trans) });
        }, {
            priority: -10000,
        });
        return subject;
    };
    /**
     * @param {?} url
     * @return {?}
     */
    UIRouterTracking.prototype.prepareExternalUrl = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return url;
    };
    UIRouterTracking.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    UIRouterTracking.ctorParameters = function () { return [
        { type: TransitionService }
    ]; };
    /** @nocollapse */ UIRouterTracking.ngInjectableDef = defineInjectable({ factory: function UIRouterTracking_Factory() { return new UIRouterTracking(inject(TransitionService)); }, token: UIRouterTracking, providedIn: "root" });
    return UIRouterTracking;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Angulartics2UirouterModule = /** @class */ (function () {
    function Angulartics2UirouterModule() {
    }
    /**
     * @param {?=} settings
     * @return {?}
     */
    Angulartics2UirouterModule.forRoot = /**
     * @param {?=} settings
     * @return {?}
     */
    function (settings) {
        if (settings === void 0) { settings = {}; }
        return {
            ngModule: Angulartics2UirouterModule,
            providers: [
                { provide: ANGULARTICS2_TOKEN, useValue: { settings: settings } },
                { provide: RouterlessTracking, useClass: UIRouterTracking },
                Angulartics2,
            ],
        };
    };
    Angulartics2UirouterModule.decorators = [
        { type: NgModule, args: [{
                    imports: [Angulartics2OnModule],
                },] }
    ];
    return Angulartics2UirouterModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { Angulartics2UirouterModule, UIRouterTracking };

//# sourceMappingURL=angulartics2-uiroutermodule.js.map