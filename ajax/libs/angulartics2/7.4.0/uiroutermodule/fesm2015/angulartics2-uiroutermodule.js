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
class UIRouterTracking {
    /**
     * @param {?} transitionService
     */
    constructor(transitionService) {
        this.transitionService = transitionService;
    }
    /**
     * @param {?} trans
     * @return {?}
     */
    path(trans) {
        return trans.$to().url.format(trans.params());
    }
    /**
     * @param {?} settings
     * @return {?}
     */
    trackLocation(settings) {
        /** @type {?} */
        const subject = new Subject();
        this.transitionService.onSuccess({}, trans => {
            return subject.next({ url: this.path(trans) });
        }, {
            priority: -10000,
        });
        return subject;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    prepareExternalUrl(url) {
        return url;
    }
}
UIRouterTracking.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
UIRouterTracking.ctorParameters = () => [
    { type: TransitionService }
];
/** @nocollapse */ UIRouterTracking.ngInjectableDef = defineInjectable({ factory: function UIRouterTracking_Factory() { return new UIRouterTracking(inject(TransitionService)); }, token: UIRouterTracking, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Angulartics2UirouterModule {
    /**
     * @param {?=} settings
     * @return {?}
     */
    static forRoot(settings = {}) {
        return {
            ngModule: Angulartics2UirouterModule,
            providers: [
                { provide: ANGULARTICS2_TOKEN, useValue: { settings } },
                { provide: RouterlessTracking, useClass: UIRouterTracking },
                Angulartics2,
            ],
        };
    }
}
Angulartics2UirouterModule.decorators = [
    { type: NgModule, args: [{
                imports: [Angulartics2OnModule],
            },] }
];

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