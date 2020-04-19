/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { delay, filter, map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common";
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
    /** @nocollapse */ AngularRouterTracking.ngInjectableDef = i0.defineInjectable({ factory: function AngularRouterTracking_Factory() { return new AngularRouterTracking(i0.inject(i1.Router), i0.inject(i2.Location)); }, token: AngularRouterTracking, providedIn: "root" });
    return AngularRouterTracking;
}());
export { AngularRouterTracking };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AngularRouterTracking.prototype.router;
    /**
     * @type {?}
     * @private
     */
    AngularRouterTracking.prototype.location;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1yb3V0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFydGljczIvIiwic291cmNlcyI6WyJhbmd1bGFyLXJvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7OztBQVdwRDtJQUVFLCtCQUNVLE1BQWMsRUFDZCxRQUFrQjtRQURsQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUN6QixDQUFDOzs7OztJQUVKLDZDQUFhOzs7O0lBQWIsVUFBYyxRQUFRO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUM1QixNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLFlBQVksYUFBYSxFQUExQixDQUEwQixDQUFDLEVBQ3ZDLE1BQU0sQ0FBQyxjQUFNLE9BQUEsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUF2QixDQUF1QixDQUFDLEVBQ3JDLEdBQUcsQ0FBQyxVQUFDLENBQWdCO1lBQ25CLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDdEMsQ0FBQyxDQUFDLEVBQ0YsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUNULENBQUM7SUFDSixDQUFDOzs7OztJQUVELGtEQUFrQjs7OztJQUFsQixVQUFtQixHQUFXO1FBQzVCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQyxDQUFDOztnQkFwQkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnQkFiVixNQUFNO2dCQUZyQixRQUFROzs7Z0NBQWpCO0NBb0NDLEFBckJELElBcUJDO1NBcEJZLHFCQUFxQjs7Ozs7O0lBRTlCLHVDQUFzQjs7Ozs7SUFDdEIseUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgZGVsYXksIGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBSb3V0ZXJsZXNzVHJhY2tpbmcsIFRyYWNrTmF2aWdhdGlvbkVuZCB9IGZyb20gJy4vcm91dGVybGVzcyc7XG5cbi8qKlxuICogVHJhY2sgUm91dGUgY2hhbmdlcyBmb3IgYXBwbGljYXRpb25zIHVzaW5nIEFuZ3VsYXInc1xuICogZGVmYXVsdCByb3V0ZXJcbiAqXG4gKiBAbGluayBodHRwczovL2FuZ3VsYXIuaW8vYXBpL3JvdXRlci9Sb3V0ZXJcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFyUm91dGVyVHJhY2tpbmcgaW1wbGVtZW50cyBSb3V0ZXJsZXNzVHJhY2tpbmcge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLFxuICApIHt9XG5cbiAgdHJhY2tMb2NhdGlvbihzZXR0aW5ncyk6IE9ic2VydmFibGU8VHJhY2tOYXZpZ2F0aW9uRW5kPiB7XG4gICAgcmV0dXJuIHRoaXMucm91dGVyLmV2ZW50cy5waXBlKFxuICAgICAgZmlsdGVyKGUgPT4gZSBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpLFxuICAgICAgZmlsdGVyKCgpID0+ICFzZXR0aW5ncy5kZXZlbG9wZXJNb2RlKSxcbiAgICAgIG1hcCgoZTogTmF2aWdhdGlvbkVuZCkgPT4ge1xuICAgICAgICByZXR1cm4geyB1cmw6IGUudXJsQWZ0ZXJSZWRpcmVjdHMgfTtcbiAgICAgIH0pLFxuICAgICAgZGVsYXkoMCksXG4gICAgKTtcbiAgfVxuXG4gIHByZXBhcmVFeHRlcm5hbFVybCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMubG9jYXRpb24ucHJlcGFyZUV4dGVybmFsVXJsKHVybCk7XG4gIH1cbn1cbiJdfQ==