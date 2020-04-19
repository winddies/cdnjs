import * as tslib_1 from "tslib";
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
    AngularRouterTracking.prototype.trackLocation = function (settings) {
        return this.router.events.pipe(filter(function (e) { return e instanceof NavigationEnd; }), filter(function () { return !settings.developerMode; }), map(function (e) {
            return { url: e.urlAfterRedirects };
        }), delay(0));
    };
    AngularRouterTracking.prototype.prepareExternalUrl = function (url) {
        return this.location.prepareExternalUrl(url);
    };
    AngularRouterTracking.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AngularRouterTracking_Factory() { return new AngularRouterTracking(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i2.Location)); }, token: AngularRouterTracking, providedIn: "root" });
    AngularRouterTracking = tslib_1.__decorate([
        Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [Router,
            Location])
    ], AngularRouterTracking);
    return AngularRouterTracking;
}());
export { AngularRouterTracking };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1yb3V0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFydGljczIvIiwic291cmNlcyI6WyJhbmd1bGFyLXJvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUtwRDs7Ozs7R0FLRztBQUVIO0lBQ0UsK0JBQ1UsTUFBYyxFQUNkLFFBQWtCO1FBRGxCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQ3pCLENBQUM7SUFFSiw2Q0FBYSxHQUFiLFVBQWMsUUFBUTtRQUNwQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDNUIsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxZQUFZLGFBQWEsRUFBMUIsQ0FBMEIsQ0FBQyxFQUN2QyxNQUFNLENBQUMsY0FBTSxPQUFBLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBdkIsQ0FBdUIsQ0FBQyxFQUNyQyxHQUFHLENBQUMsVUFBQyxDQUFnQjtZQUNuQixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxFQUNGLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FDVCxDQUFDO0lBQ0osQ0FBQztJQUVELGtEQUFrQixHQUFsQixVQUFtQixHQUFXO1FBQzVCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQyxDQUFDOztJQW5CVSxxQkFBcUI7UUFEakMsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO2lEQUdmLE1BQU07WUFDSixRQUFRO09BSGpCLHFCQUFxQixDQW9CakM7Z0NBcENEO0NBb0NDLEFBcEJELElBb0JDO1NBcEJZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IGRlbGF5LCBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUm91dGVybGVzc1RyYWNraW5nLCBUcmFja05hdmlnYXRpb25FbmQgfSBmcm9tICcuL3JvdXRlcmxlc3MnO1xuXG4vKipcbiAqIFRyYWNrIFJvdXRlIGNoYW5nZXMgZm9yIGFwcGxpY2F0aW9ucyB1c2luZyBBbmd1bGFyJ3NcbiAqIGRlZmF1bHQgcm91dGVyXG4gKlxuICogQGxpbmsgaHR0cHM6Ly9hbmd1bGFyLmlvL2FwaS9yb3V0ZXIvUm91dGVyXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQW5ndWxhclJvdXRlclRyYWNraW5nIGltcGxlbWVudHMgUm91dGVybGVzc1RyYWNraW5nIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbixcbiAgKSB7fVxuXG4gIHRyYWNrTG9jYXRpb24oc2V0dGluZ3MpOiBPYnNlcnZhYmxlPFRyYWNrTmF2aWdhdGlvbkVuZD4ge1xuICAgIHJldHVybiB0aGlzLnJvdXRlci5ldmVudHMucGlwZShcbiAgICAgIGZpbHRlcihlID0+IGUgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSxcbiAgICAgIGZpbHRlcigoKSA9PiAhc2V0dGluZ3MuZGV2ZWxvcGVyTW9kZSksXG4gICAgICBtYXAoKGU6IE5hdmlnYXRpb25FbmQpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgdXJsOiBlLnVybEFmdGVyUmVkaXJlY3RzIH07XG4gICAgICB9KSxcbiAgICAgIGRlbGF5KDApLFxuICAgICk7XG4gIH1cblxuICBwcmVwYXJlRXh0ZXJuYWxVcmwodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmxvY2F0aW9uLnByZXBhcmVFeHRlcm5hbFVybCh1cmwpO1xuICB9XG59XG4iXX0=