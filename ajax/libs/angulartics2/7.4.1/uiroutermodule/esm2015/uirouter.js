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
export class UIRouterTracking {
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
/** @nocollapse */ UIRouterTracking.ngInjectableDef = i0.defineInjectable({ factory: function UIRouterTracking_Factory() { return new UIRouterTracking(i0.inject(i1.TransitionService)); }, token: UIRouterTracking, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    UIRouterTracking.prototype.transitionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWlyb3V0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFydGljczIvdWlyb3V0ZXJtb2R1bGUvIiwic291cmNlcyI6WyJ1aXJvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUvRCxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7Ozs7Ozs7O0FBWTNDLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFDM0IsWUFBb0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFBRyxDQUFDOzs7OztJQUU1RCxJQUFJLENBQUMsS0FBaUI7UUFDcEIsT0FBTyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxRQUFROztjQUNkLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBc0I7UUFDakQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FDOUIsRUFBRSxFQUNGLEtBQUssQ0FBQyxFQUFFO1lBQ04sT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2pELENBQUMsRUFDRDtZQUNFLFFBQVEsRUFBRSxDQUFDLEtBQUs7U0FDakIsQ0FDRixDQUFDO1FBQ0YsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7Ozs7SUFFRCxrQkFBa0IsQ0FBQyxHQUFXO1FBQzVCLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7O1lBeEJGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUFiYixpQkFBaUI7Ozs7Ozs7O0lBZXhCLDZDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyYW5zaXRpb24sIFRyYW5zaXRpb25TZXJ2aWNlIH0gZnJvbSAnQHVpcm91dGVyL2NvcmUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFJvdXRlcmxlc3NUcmFja2luZywgVHJhY2tOYXZpZ2F0aW9uRW5kIH0gZnJvbSAnYW5ndWxhcnRpY3MyJztcblxuLyoqXG4gKiBUcmFjayBSb3V0ZSBjaGFuZ2VzIGZvciBhcHBsaWNhdGlvbnMgdXNpbmcgVUktUm91dGVyXG4gKlxuICogQGxpbmsgaHR0cHM6Ly91aS1yb3V0ZXIuZ2l0aHViLmlvL25nMi9kb2NzL2xhdGVzdC9cbiAqXG4gKiByZWZlcmVuY2VkOiBodHRwczovL2dpdGh1Yi5jb20vdWktcm91dGVyL3NhbXBsZS1hcHAtYW5ndWxhci9ibG9iLzlhZGI1MzNiODVjMGYwZmNjZWYyMzk2ODQ4OWNjYTBhNWVjODQ2NTQvc3JjL2FwcC91dGlsL2dhLnRzXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgVUlSb3V0ZXJUcmFja2luZyBpbXBsZW1lbnRzIFJvdXRlcmxlc3NUcmFja2luZyB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNpdGlvblNlcnZpY2U6IFRyYW5zaXRpb25TZXJ2aWNlKSB7fVxuXG4gIHBhdGgodHJhbnM6IFRyYW5zaXRpb24pIHtcbiAgICByZXR1cm4gdHJhbnMuJHRvKCkudXJsLmZvcm1hdCh0cmFucy5wYXJhbXMoKSk7XG4gIH1cblxuICB0cmFja0xvY2F0aW9uKHNldHRpbmdzKTogT2JzZXJ2YWJsZTxUcmFja05hdmlnYXRpb25FbmQ+IHtcbiAgICBjb25zdCBzdWJqZWN0ID0gbmV3IFN1YmplY3Q8VHJhY2tOYXZpZ2F0aW9uRW5kPigpO1xuICAgIHRoaXMudHJhbnNpdGlvblNlcnZpY2Uub25TdWNjZXNzKFxuICAgICAge30sXG4gICAgICB0cmFucyA9PiB7XG4gICAgICAgIHJldHVybiBzdWJqZWN0Lm5leHQoeyB1cmw6IHRoaXMucGF0aCh0cmFucykgfSk7XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwcmlvcml0eTogLTEwMDAwLFxuICAgICAgfSxcbiAgICApO1xuICAgIHJldHVybiBzdWJqZWN0O1xuICB9XG5cbiAgcHJlcGFyZUV4dGVybmFsVXJsKHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG59XG4iXX0=