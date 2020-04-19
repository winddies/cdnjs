/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { TransitionService } from '@uirouter/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@uirouter/core";
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
    /** @nocollapse */ UIRouterTracking.ngInjectableDef = i0.defineInjectable({ factory: function UIRouterTracking_Factory() { return new UIRouterTracking(i0.inject(i1.TransitionService)); }, token: UIRouterTracking, providedIn: "root" });
    return UIRouterTracking;
}());
export { UIRouterTracking };
if (false) {
    /**
     * @type {?}
     * @private
     */
    UIRouterTracking.prototype.transitionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWlyb3V0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFydGljczIvdWlyb3V0ZXJtb2R1bGUvIiwic291cmNlcyI6WyJ1aXJvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUvRCxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7Ozs7Ozs7O0FBVzNDO0lBRUUsMEJBQW9CLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQUcsQ0FBQzs7Ozs7SUFFNUQsK0JBQUk7Ozs7SUFBSixVQUFLLEtBQWlCO1FBQ3BCLE9BQU8sS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7Ozs7SUFFRCx3Q0FBYTs7OztJQUFiLFVBQWMsUUFBUTtRQUF0QixpQkFZQzs7WUFYTyxPQUFPLEdBQUcsSUFBSSxPQUFPLEVBQXNCO1FBQ2pELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQzlCLEVBQUUsRUFDRixVQUFBLEtBQUs7WUFDSCxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDakQsQ0FBQyxFQUNEO1lBQ0UsUUFBUSxFQUFFLENBQUMsS0FBSztTQUNqQixDQUNGLENBQUM7UUFDRixPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOzs7OztJQUVELDZDQUFrQjs7OztJQUFsQixVQUFtQixHQUFXO1FBQzVCLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7Z0JBeEJGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0JBYmIsaUJBQWlCOzs7MkJBRHRDO0NBdUNDLEFBekJELElBeUJDO1NBeEJZLGdCQUFnQjs7Ozs7O0lBQ2YsNkNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNpdGlvbiwgVHJhbnNpdGlvblNlcnZpY2UgfSBmcm9tICdAdWlyb3V0ZXIvY29yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgUm91dGVybGVzc1RyYWNraW5nLCBUcmFja05hdmlnYXRpb25FbmQgfSBmcm9tICdhbmd1bGFydGljczInO1xuXG4vKipcbiAqIFRyYWNrIFJvdXRlIGNoYW5nZXMgZm9yIGFwcGxpY2F0aW9ucyB1c2luZyBVSS1Sb3V0ZXJcbiAqXG4gKiBAbGluayBodHRwczovL3VpLXJvdXRlci5naXRodWIuaW8vbmcyL2RvY3MvbGF0ZXN0L1xuICpcbiAqIHJlZmVyZW5jZWQ6IGh0dHBzOi8vZ2l0aHViLmNvbS91aS1yb3V0ZXIvc2FtcGxlLWFwcC1hbmd1bGFyL2Jsb2IvOWFkYjUzM2I4NWMwZjBmY2NlZjIzOTY4NDg5Y2NhMGE1ZWM4NDY1NC9zcmMvYXBwL3V0aWwvZ2EudHNcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBVSVJvdXRlclRyYWNraW5nIGltcGxlbWVudHMgUm91dGVybGVzc1RyYWNraW5nIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2l0aW9uU2VydmljZTogVHJhbnNpdGlvblNlcnZpY2UpIHt9XG5cbiAgcGF0aCh0cmFuczogVHJhbnNpdGlvbikge1xuICAgIHJldHVybiB0cmFucy4kdG8oKS51cmwuZm9ybWF0KHRyYW5zLnBhcmFtcygpKTtcbiAgfVxuXG4gIHRyYWNrTG9jYXRpb24oc2V0dGluZ3MpOiBPYnNlcnZhYmxlPFRyYWNrTmF2aWdhdGlvbkVuZD4ge1xuICAgIGNvbnN0IHN1YmplY3QgPSBuZXcgU3ViamVjdDxUcmFja05hdmlnYXRpb25FbmQ+KCk7XG4gICAgdGhpcy50cmFuc2l0aW9uU2VydmljZS5vblN1Y2Nlc3MoXG4gICAgICB7fSxcbiAgICAgIHRyYW5zID0+IHtcbiAgICAgICAgcmV0dXJuIHN1YmplY3QubmV4dCh7IHVybDogdGhpcy5wYXRoKHRyYW5zKSB9KTtcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHByaW9yaXR5OiAtMTAwMDAsXG4gICAgICB9LFxuICAgICk7XG4gICAgcmV0dXJuIHN1YmplY3Q7XG4gIH1cblxuICBwcmVwYXJlRXh0ZXJuYWxVcmwodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbn1cbiJdfQ==