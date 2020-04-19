(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('angulartics2'), require('@angular/core'), require('@uirouter/core'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('angulartics2/uiroutermodule', ['exports', 'angulartics2', '@angular/core', '@uirouter/core', 'rxjs'], factory) :
    (factory((global.angulartics2 = global.angulartics2 || {}, global.angulartics2.uiroutermodule = {}),global.angulartics2,global.ng.core,global.i1,global.rxjs));
}(this, (function (exports,angulartics2,i0,i1,rxjs) { 'use strict';

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
                var subject = new rxjs.Subject();
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
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        UIRouterTracking.ctorParameters = function () {
            return [
                { type: i1.TransitionService }
            ];
        };
        /** @nocollapse */ UIRouterTracking.ngInjectableDef = i0.defineInjectable({ factory: function UIRouterTracking_Factory() { return new UIRouterTracking(i0.inject(i1.TransitionService)); }, token: UIRouterTracking, providedIn: "root" });
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
                if (settings === void 0) {
                    settings = {};
                }
                return {
                    ngModule: Angulartics2UirouterModule,
                    providers: [
                        { provide: angulartics2.ANGULARTICS2_TOKEN, useValue: { settings: settings } },
                        { provide: angulartics2.RouterlessTracking, useClass: UIRouterTracking },
                        angulartics2.Angulartics2,
                    ],
                };
            };
        Angulartics2UirouterModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [angulartics2.Angulartics2OnModule],
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

    exports.Angulartics2UirouterModule = Angulartics2UirouterModule;
    exports.UIRouterTracking = UIRouterTracking;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=angulartics2-uiroutermodule.umd.js.map