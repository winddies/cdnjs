/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { DefaultConfig } from './angulartics2-config';
import { ANGULARTICS2_TOKEN } from './angulartics2-token';
import { RouterlessTracking } from './routerless';
import * as i0 from "@angular/core";
import * as i1 from "./routerless";
import * as i2 from "./angulartics2-token";
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
        this.settings = tslib_1.__assign({}, defaultConfig, setup.settings);
        this.settings.pageTracking = tslib_1.__assign({}, defaultConfig.pageTracking, setup.settings.pageTracking);
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
            for (var _b = tslib_1.__values(this.settings.pageTracking.excludedRoutes), _c = _b.next(); !_c.done; _c = _b.next()) {
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
    /** @nocollapse */ Angulartics2.ngInjectableDef = i0.defineInjectable({ factory: function Angulartics2_Factory() { return new Angulartics2(i0.inject(i1.RouterlessTracking), i0.inject(i2.ANGULARTICS2_TOKEN)); }, token: Angulartics2, providedIn: "root" });
    return Angulartics2;
}());
export { Angulartics2 };
if (false) {
    /** @type {?} */
    Angulartics2.prototype.settings;
    /** @type {?} */
    Angulartics2.prototype.pageTrack;
    /** @type {?} */
    Angulartics2.prototype.eventTrack;
    /** @type {?} */
    Angulartics2.prototype.exceptionTrack;
    /** @type {?} */
    Angulartics2.prototype.setAlias;
    /** @type {?} */
    Angulartics2.prototype.setUsername;
    /** @type {?} */
    Angulartics2.prototype.setUserProperties;
    /** @type {?} */
    Angulartics2.prototype.setUserPropertiesOnce;
    /** @type {?} */
    Angulartics2.prototype.setSuperProperties;
    /** @type {?} */
    Angulartics2.prototype.setSuperPropertiesOnce;
    /** @type {?} */
    Angulartics2.prototype.userTimings;
    /**
     * @type {?}
     * @private
     */
    Angulartics2.prototype.tracker;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcnRpY3MyLWNvcmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFydGljczIvIiwic291cmNlcyI6WyJhbmd1bGFydGljczItY29yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBNEIsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QyxPQUFPLEVBQXdCLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTVFLE9BQU8sRUFBcUIsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM3RSxPQUFPLEVBQUUsa0JBQWtCLEVBQXNCLE1BQU0sY0FBYyxDQUFDOzs7O0FBRXRFO0lBZUUsc0JBQ1UsT0FBMkIsRUFDUCxLQUF3QjtRQUZ0RCxpQkFlQztRQWRTLFlBQU8sR0FBUCxPQUFPLENBQW9CO1FBWnJDLGNBQVMsR0FBRyxJQUFJLGFBQWEsQ0FBcUIsRUFBRSxDQUFDLENBQUM7UUFDdEQsZUFBVSxHQUFHLElBQUksYUFBYSxDQUFzQixFQUFFLENBQUMsQ0FBQztRQUN4RCxtQkFBYyxHQUFHLElBQUksYUFBYSxDQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLGFBQVEsR0FBRyxJQUFJLGFBQWEsQ0FBUyxFQUFFLENBQUMsQ0FBQztRQUN6QyxnQkFBVyxHQUFHLElBQUksYUFBYSxDQUF1QyxFQUFFLENBQUMsQ0FBQztRQUMxRSxzQkFBaUIsR0FBRyxJQUFJLGFBQWEsQ0FBTSxFQUFFLENBQUMsQ0FBQztRQUMvQywwQkFBcUIsR0FBRyxJQUFJLGFBQWEsQ0FBTSxFQUFFLENBQUMsQ0FBQztRQUNuRCx1QkFBa0IsR0FBRyxJQUFJLGFBQWEsQ0FBTSxFQUFFLENBQUMsQ0FBQztRQUNoRCwyQkFBc0IsR0FBRyxJQUFJLGFBQWEsQ0FBTSxFQUFF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LEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQXZFLENBQXVFLENBQUM7aUJBQ3BGLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFoRSxDQUFnRSxDQUFDO2lCQUM3RSxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEVBQXpGLENBQXlGLENBQUM7aUJBQ3pHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNkO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOztnQkFuRkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnQkFGekIsa0JBQWtCO2dEQW1CdEIsTUFBTSxTQUFDLGtCQUFrQjs7O3VCQTNCOUI7Q0E4RkMsQUFwRkQsSUFvRkM7U0FuRlksWUFBWTs7O0lBQ3ZCLGdDQUErQjs7SUFFL0IsaUNBQXNEOztJQUN0RCxrQ0FBd0Q7O0lBQ3hELHNDQUE0Qzs7SUFDNUMsZ0NBQXlDOztJQUN6QyxtQ0FBMEU7O0lBQzFFLHlDQUErQzs7SUFDL0MsNkNBQW1EOztJQUNuRCwwQ0FBZ0Q7O0lBQ2hELDhDQUFvRDs7SUFDcEQsbUNBQWlEOzs7OztJQUcvQywrQkFBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTW9ub1R5cGVPcGVyYXRvckZ1bmN0aW9uLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEFuZ3VsYXJ0aWNzMlNldHRpbmdzLCBEZWZhdWx0Q29uZmlnIH0gZnJvbSAnLi9hbmd1bGFydGljczItY29uZmlnJztcbmltcG9ydCB7IEV2ZW50VHJhY2ssIFBhZ2VUcmFjaywgVXNlclRpbWluZ3MgfSBmcm9tICcuL2FuZ3VsYXJ0aWNzMi1pbnRlcmZhY2VzJztcbmltcG9ydCB7IEFuZ3VsYXJ0aWNzMlRva2VuLCBBTkdVTEFSVElDUzJfVE9LRU4gfSBmcm9tICcuL2FuZ3VsYXJ0aWNzMi10b2tlbic7XG5pbXBvcnQgeyBSb3V0ZXJsZXNzVHJhY2tpbmcsIFRyYWNrTmF2aWdhdGlvbkVuZCB9IGZyb20gJy4vcm91dGVybGVzcyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQW5ndWxhcnRpY3MyIHtcbiAgc2V0dGluZ3M6IEFuZ3VsYXJ0aWNzMlNldHRpbmdzO1xuXG4gIHBhZ2VUcmFjayA9IG5ldyBSZXBsYXlTdWJqZWN0PFBhcnRpYWw8UGFnZVRyYWNrPj4oMTApO1xuICBldmVudFRyYWNrID0gbmV3IFJlcGxheVN1YmplY3Q8UGFydGlhbDxFdmVudFRyYWNrPj4oMTApO1xuICBleGNlcHRpb25UcmFjayA9IG5ldyBSZXBsYXlTdWJqZWN0PGFueT4oMTApO1xuICBzZXRBbGlhcyA9IG5ldyBSZXBsYXlTdWJqZWN0PHN0cmluZz4oMTApO1xuICBzZXRVc2VybmFtZSA9IG5ldyBSZXBsYXlTdWJqZWN0PHsgdXNlcklkOiBzdHJpbmcgfCBudW1iZXIgfSB8IHN0cmluZz4oMTApO1xuICBzZXRVc2VyUHJvcGVydGllcyA9IG5ldyBSZXBsYXlTdWJqZWN0PGFueT4oMTApO1xuICBzZXRVc2VyUHJvcGVydGllc09uY2UgPSBuZXcgUmVwbGF5U3ViamVjdDxhbnk+KDEwKTtcbiAgc2V0U3VwZXJQcm9wZXJ0aWVzID0gbmV3IFJlcGxheVN1YmplY3Q8YW55PigxMCk7XG4gIHNldFN1cGVyUHJvcGVydGllc09uY2UgPSBuZXcgUmVwbGF5U3ViamVjdDxhbnk+KDEwKTtcbiAgdXNlclRpbWluZ3MgPSBuZXcgUmVwbGF5U3ViamVjdDxVc2VyVGltaW5ncz4oMTApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdHJhY2tlcjogUm91dGVybGVzc1RyYWNraW5nLFxuICAgIEBJbmplY3QoQU5HVUxBUlRJQ1MyX1RPS0VOKSBzZXR1cDogQW5ndWxhcnRpY3MyVG9rZW4sXG4gICkge1xuICAgIGNvbnN0IGRlZmF1bHRDb25maWcgPSBuZXcgRGVmYXVsdENvbmZpZygpO1xuICAgIHRoaXMuc2V0dGluZ3MgPSB7IC4uLmRlZmF1bHRDb25maWcsIC4uLnNldHVwLnNldHRpbmdzIH07XG4gICAgdGhpcy5zZXR0aW5ncy5wYWdlVHJhY2tpbmcgPSB7XG4gICAgICAuLi5kZWZhdWx0Q29uZmlnLnBhZ2VUcmFja2luZyxcbiAgICAgIC4uLnNldHVwLnNldHRpbmdzLnBhZ2VUcmFja2luZyxcbiAgICB9O1xuICAgIHRoaXMudHJhY2tlclxuICAgICAgLnRyYWNrTG9jYXRpb24odGhpcy5zZXR0aW5ncylcbiAgICAgIC5zdWJzY3JpYmUoKGV2ZW50OiBUcmFja05hdmlnYXRpb25FbmQpID0+XG4gICAgICAgIHRoaXMudHJhY2tVcmxDaGFuZ2UoZXZlbnQudXJsKSxcbiAgICAgICk7XG4gIH1cblxuICAvKiogZmlsdGVycyBhbGwgZXZlbnRzIHdoZW4gZGV2ZWxvcGVyIG1vZGUgaXMgdHJ1ZSAqL1xuICBmaWx0ZXJEZXZlbG9wZXJNb2RlPFQ+KCk6IE1vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbjxUPiB7XG4gICAgcmV0dXJuIGZpbHRlcigodmFsdWUsIGluZGV4KSA9PiAhdGhpcy5zZXR0aW5ncy5kZXZlbG9wZXJNb2RlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB0cmFja1VybENoYW5nZSh1cmw6IHN0cmluZykge1xuICAgIGlmICh0aGlzLnNldHRpbmdzLnBhZ2VUcmFja2luZy5hdXRvVHJhY2tWaXJ0dWFsUGFnZXMgJiYgIXRoaXMubWF0Y2hlc0V4Y2x1ZGVkUm91dGUodXJsKSkge1xuICAgICAgY29uc3QgY2xlYXJlZFVybCA9IHRoaXMuY2xlYXJVcmwodXJsKTtcbiAgICAgIGxldCBwYXRoOiBzdHJpbmc7XG4gICAgICBpZiAodGhpcy5zZXR0aW5ncy5wYWdlVHJhY2tpbmcuYmFzZVBhdGgubGVuZ3RoKSB7XG4gICAgICAgIHBhdGggPSB0aGlzLnNldHRpbmdzLnBhZ2VUcmFja2luZy5iYXNlUGF0aCArIGNsZWFyZWRVcmw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXRoID0gdGhpcy50cmFja2VyLnByZXBhcmVFeHRlcm5hbFVybChjbGVhcmVkVXJsKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucGFnZVRyYWNrLm5leHQoeyBwYXRoIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVc2Ugc3RyaW5nIGxpdGVyYWxzIG9yIHJlZ3VsYXIgZXhwcmVzc2lvbnMgdG8gZXhjbHVkZSByb3V0ZXNcbiAgICogZnJvbSBhdXRvbWF0aWMgcGFnZXZpZXcgdHJhY2tpbmcuXG4gICAqXG4gICAqIEBwYXJhbSB1cmwgbG9jYXRpb25cbiAgICovXG4gIHByb3RlY3RlZCBtYXRjaGVzRXhjbHVkZWRSb3V0ZSh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGZvciAoY29uc3QgZXhjbHVkZWRSb3V0ZSBvZiB0aGlzLnNldHRpbmdzLnBhZ2VUcmFja2luZy5leGNsdWRlZFJvdXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlc1JlZ2V4ID0gZXhjbHVkZWRSb3V0ZSBpbnN0YW5jZW9mIFJlZ0V4cCAmJiBleGNsdWRlZFJvdXRlLnRlc3QodXJsKTtcbiAgICAgIGlmIChtYXRjaGVzUmVnZXggfHwgdXJsLmluZGV4T2YoPHN0cmluZz5leGNsdWRlZFJvdXRlKSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGlkJ3MgZnJvbSB0cmFja2VkIHJvdXRlLlxuICAgKiAgRVg6IGAvcHJvamVjdC8xMjk4MS9mZWF0dXJlYCBiZWNvbWVzIGAvcHJvamVjdC9mZWF0dXJlYFxuICAgKlxuICAgKiBAcGFyYW0gdXJsIGN1cnJlbnQgcGFnZSBwYXRoXG4gICAqL1xuICBwcm90ZWN0ZWQgY2xlYXJVcmwodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLnNldHRpbmdzLnBhZ2VUcmFja2luZy5jbGVhcklkcyB8fCB0aGlzLnNldHRpbmdzLnBhZ2VUcmFja2luZy5jbGVhclF1ZXJ5UGFyYW1zIHx8XG4gICAgICB0aGlzLnNldHRpbmdzLnBhZ2VUcmFja2luZy5jbGVhckhhc2gpIHtcbiAgICAgIHJldHVybiB1cmxcbiAgICAgICAgLnNwbGl0KCcvJylcbiAgICAgICAgLm1hcChwYXJ0ID0+IHRoaXMuc2V0dGluZ3MucGFnZVRyYWNraW5nLmNsZWFyUXVlcnlQYXJhbXMgPyBwYXJ0LnNwbGl0KCc/JylbMF0gOiBwYXJ0KVxuICAgICAgICAubWFwKHBhcnQgPT4gdGhpcy5zZXR0aW5ncy5wYWdlVHJhY2tpbmcuY2xlYXJIYXNoID8gcGFydC5zcGxpdCgnIycpWzBdIDogcGFydClcbiAgICAgICAgLmZpbHRlcihwYXJ0ID0+ICF0aGlzLnNldHRpbmdzLnBhZ2VUcmFja2luZy5jbGVhcklkcyB8fCAhcGFydC5tYXRjaCh0aGlzLnNldHRpbmdzLnBhZ2VUcmFja2luZy5pZHNSZWdFeHApKVxuICAgICAgICAuam9pbignLycpO1xuICAgIH1cbiAgICByZXR1cm4gdXJsO1xuICB9XG59XG4iXX0=