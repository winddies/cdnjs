/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { DefaultConfig } from './angulartics2-config';
import { ANGULARTICS2_TOKEN } from './angulartics2-token';
import { RouterlessTracking } from './routerless';
import * as i0 from "@angular/core";
import * as i1 from "./routerless";
import * as i2 from "./angulartics2-token";
export class Angulartics2 {
    /**
     * @param {?} tracker
     * @param {?} setup
     */
    constructor(tracker, setup) {
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
        const defaultConfig = new DefaultConfig();
        this.settings = Object.assign({}, defaultConfig, setup.settings);
        this.settings.pageTracking = Object.assign({}, defaultConfig.pageTracking, setup.settings.pageTracking);
        this.tracker
            .trackLocation(this.settings)
            .subscribe((event) => this.trackUrlChange(event.url));
    }
    /**
     * filters all events when developer mode is true
     * @template T
     * @return {?}
     */
    filterDeveloperMode() {
        return filter((value, index) => !this.settings.developerMode);
    }
    /**
     * @protected
     * @param {?} url
     * @return {?}
     */
    trackUrlChange(url) {
        if (this.settings.pageTracking.autoTrackVirtualPages && !this.matchesExcludedRoute(url)) {
            /** @type {?} */
            const clearedUrl = this.clearUrl(url);
            /** @type {?} */
            let path;
            if (this.settings.pageTracking.basePath.length) {
                path = this.settings.pageTracking.basePath + clearedUrl;
            }
            else {
                path = this.tracker.prepareExternalUrl(clearedUrl);
            }
            this.pageTrack.next({ path });
        }
    }
    /**
     * Use string literals or regular expressions to exclude routes
     * from automatic pageview tracking.
     *
     * @protected
     * @param {?} url location
     * @return {?}
     */
    matchesExcludedRoute(url) {
        for (const excludedRoute of this.settings.pageTracking.excludedRoutes) {
            /** @type {?} */
            const matchesRegex = excludedRoute instanceof RegExp && excludedRoute.test(url);
            if (matchesRegex || url.indexOf((/** @type {?} */ (excludedRoute))) !== -1) {
                return true;
            }
        }
        return false;
    }
    /**
     * Removes id's from tracked route.
     *  EX: `/project/12981/feature` becomes `/project/feature`
     *
     * @protected
     * @param {?} url current page path
     * @return {?}
     */
    clearUrl(url) {
        if (this.settings.pageTracking.clearIds || this.settings.pageTracking.clearQueryParams ||
            this.settings.pageTracking.clearHash) {
            return url
                .split('/')
                .map(part => this.settings.pageTracking.clearQueryParams ? part.split('?')[0] : part)
                .map(part => this.settings.pageTracking.clearHash ? part.split('#')[0] : part)
                .filter(part => !this.settings.pageTracking.clearIds || !part.match(this.settings.pageTracking.idsRegExp))
                .join('/');
        }
        return url;
    }
}
Angulartics2.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
Angulartics2.ctorParameters = () => [
    { type: RouterlessTracking },
    { type: undefined, decorators: [{ type: Inject, args: [ANGULARTICS2_TOKEN,] }] }
];
/** @nocollapse */ Angulartics2.ngInjectableDef = i0.defineInjectable({ factory: function Angulartics2_Factory() { return new Angulartics2(i0.inject(i1.RouterlessTracking), i0.inject(i2.ANGULARTICS2_TOKEN)); }, token: Angulartics2, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcnRpY3MyLWNvcmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFydGljczIvIiwic291cmNlcyI6WyJhbmd1bGFydGljczItY29yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUE0QixhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhDLE9BQU8sRUFBd0IsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFNUUsT0FBTyxFQUFxQixrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzdFLE9BQU8sRUFBRSxrQkFBa0IsRUFBc0IsTUFBTSxjQUFjLENBQUM7Ozs7QUFHdEUsTUFBTSxPQUFPLFlBQVk7Ozs7O0lBY3ZCLFlBQ1UsT0FBMkIsRUFDUCxLQUF3QjtRQUQ1QyxZQUFPLEdBQVAsT0FBTyxDQUFvQjtRQVpyQyxjQUFTLEdBQUcsSUFBSSxhQUFhLENBQXFCLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELGVBQVUsR0FBRyxJQUFJLGFBQWEsQ0FBc0IsRUFBRSxDQUFDLENBQUM7UUFDeEQsbUJBQWMsR0FBRyxJQUFJLGFBQWEsQ0FBTSxFQUFFLENBQUMsQ0FBQztRQUM1QyxhQUFRLEdBQUcsSUFBSSxhQUFhLENBQVMsRUFBRSxDQUFDLENBQUM7UUFDekMsZ0JBQVcsR0FBRyxJQUFJLGFBQWEsQ0FBdUMsRUFBRSxDQUFDLENBQUM7UUFDMUUsc0JBQWlCLEdBQUcsSUFBSSxhQUFhLENBQU0sRUFBRSxDQUFDLENBQUM7UUFDL0MsMEJBQXFCLEdBQUcsSUFBSSxhQUFhLENBQU0sRUFBRSxDQUFDLENBQUM7UUFDbkQsdUJBQWtCLEdBQUcsSUFBSSxhQUFhLENBQU0sRUFBRSxDQUFDLENBQUM7UUFDaEQsMkJBQXNCLEdBQUcsSUFBSSxhQUFhLENB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Q0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7aUJBQzdFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDekcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7OztZQW5GRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBRnpCLGtCQUFrQjs0Q0FtQnRCLE1BQU0sU0FBQyxrQkFBa0I7Ozs7O0lBZjVCLGdDQUErQjs7SUFFL0IsaUNBQXNEOztJQUN0RCxrQ0FBd0Q7O0lBQ3hELHNDQUE0Qzs7SUFDNUMsZ0NBQXlDOztJQUN6QyxtQ0FBMEU7O0lBQzFFLHlDQUErQzs7SUFDL0MsNkNBQW1EOztJQUNuRCwwQ0FBZ0Q7O0lBQ2hELDhDQUFvRDs7SUFDcEQsbUNBQWlEOzs7OztJQUcvQywrQkFBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTW9ub1R5cGVPcGVyYXRvckZ1bmN0aW9uLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEFuZ3VsYXJ0aWNzMlNldHRpbmdzLCBEZWZhdWx0Q29uZmlnIH0gZnJvbSAnLi9hbmd1bGFydGljczItY29uZmlnJztcbmltcG9ydCB7IEV2ZW50VHJhY2ssIFBhZ2VUcmFjaywgVXNlclRpbWluZ3MgfSBmcm9tICcuL2FuZ3VsYXJ0aWNzMi1pbnRlcmZhY2VzJztcbmltcG9ydCB7IEFuZ3VsYXJ0aWNzMlRva2VuLCBBTkdVTEFSVElDUzJfVE9LRU4gfSBmcm9tICcuL2FuZ3VsYXJ0aWNzMi10b2tlbic7XG5pbXBvcnQgeyBSb3V0ZXJsZXNzVHJhY2tpbmcsIFRyYWNrTmF2aWdhdGlvbkVuZCB9IGZyb20gJy4vcm91dGVybGVzcyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQW5ndWxhcnRpY3MyIHtcbiAgc2V0dGluZ3M6IEFuZ3VsYXJ0aWNzMlNldHRpbmdzO1xuXG4gIHBhZ2VUcmFjayA9IG5ldyBSZXBsYXlTdWJqZWN0PFBhcnRpYWw8UGFnZVRyYWNrPj4oMTApO1xuICBldmVudFRyYWNrID0gbmV3IFJlcGxheVN1YmplY3Q8UGFydGlhbDxFdmVudFRyYWNrPj4oMTApO1xuICBleGNlcHRpb25UcmFjayA9IG5ldyBSZXBsYXlTdWJqZWN0PGFueT4oMTApO1xuICBzZXRBbGlhcyA9IG5ldyBSZXBsYXlTdWJqZWN0PHN0cmluZz4oMTApO1xuICBzZXRVc2VybmFtZSA9IG5ldyBSZXBsYXlTdWJqZWN0PHsgdXNlcklkOiBzdHJpbmcgfCBudW1iZXIgfSB8IHN0cmluZz4oMTApO1xuICBzZXRVc2VyUHJvcGVydGllcyA9IG5ldyBSZXBsYXlTdWJqZWN0PGFueT4oMTApO1xuICBzZXRVc2VyUHJvcGVydGllc09uY2UgPSBuZXcgUmVwbGF5U3ViamVjdDxhbnk+KDEwKTtcbiAgc2V0U3VwZXJQcm9wZXJ0aWVzID0gbmV3IFJlcGxheVN1YmplY3Q8YW55PigxMCk7XG4gIHNldFN1cGVyUHJvcGVydGllc09uY2UgPSBuZXcgUmVwbGF5U3ViamVjdDxhbnk+KDEwKTtcbiAgdXNlclRpbWluZ3MgPSBuZXcgUmVwbGF5U3ViamVjdDxVc2VyVGltaW5ncz4oMTApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdHJhY2tlcjogUm91dGVybGVzc1RyYWNraW5nLFxuICAgIEBJbmplY3QoQU5HVUxBUlRJQ1MyX1RPS0VOKSBzZXR1cDogQW5ndWxhcnRpY3MyVG9rZW4sXG4gICkge1xuICAgIGNvbnN0IGRlZmF1bHRDb25maWcgPSBuZXcgRGVmYXVsdENvbmZpZygpO1xuICAgIHRoaXMuc2V0dGluZ3MgPSB7IC4uLmRlZmF1bHRDb25maWcsIC4uLnNldHVwLnNldHRpbmdzIH07XG4gICAgdGhpcy5zZXR0aW5ncy5wYWdlVHJhY2tpbmcgPSB7XG4gICAgICAuLi5kZWZhdWx0Q29uZmlnLnBhZ2VUcmFja2luZyxcbiAgICAgIC4uLnNldHVwLnNldHRpbmdzLnBhZ2VUcmFja2luZyxcbiAgICB9O1xuICAgIHRoaXMudHJhY2tlclxuICAgICAgLnRyYWNrTG9jYXRpb24odGhpcy5zZXR0aW5ncylcbiAgICAgIC5zdWJzY3JpYmUoKGV2ZW50OiBUcmFja05hdmlnYXRpb25FbmQpID0+XG4gICAgICAgIHRoaXMudHJhY2tVcmxDaGFuZ2UoZXZlbnQudXJsKSxcbiAgICAgICk7XG4gIH1cblxuICAvKiogZmlsdGVycyBhbGwgZXZlbnRzIHdoZW4gZGV2ZWxvcGVyIG1vZGUgaXMgdHJ1ZSAqL1xuICBmaWx0ZXJEZXZlbG9wZXJNb2RlPFQ+KCk6IE1vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbjxUPiB7XG4gICAgcmV0dXJuIGZpbHRlcigodmFsdWUsIGluZGV4KSA9PiAhdGhpcy5zZXR0aW5ncy5kZXZlbG9wZXJNb2RlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB0cmFja1VybENoYW5nZSh1cmw6IHN0cmluZykge1xuICAgIGlmICh0aGlzLnNldHRpbmdzLnBhZ2VUcmFja2luZy5hdXRvVHJhY2tWaXJ0dWFsUGFnZXMgJiYgIXRoaXMubWF0Y2hlc0V4Y2x1ZGVkUm91dGUodXJsKSkge1xuICAgICAgY29uc3QgY2xlYXJlZFVybCA9IHRoaXMuY2xlYXJVcmwodXJsKTtcbiAgICAgIGxldCBwYXRoOiBzdHJpbmc7XG4gICAgICBpZiAodGhpcy5zZXR0aW5ncy5wYWdlVHJhY2tpbmcuYmFzZVBhdGgubGVuZ3RoKSB7XG4gICAgICAgIHBhdGggPSB0aGlzLnNldHRpbmdzLnBhZ2VUcmFja2luZy5iYXNlUGF0aCArIGNsZWFyZWRVcmw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXRoID0gdGhpcy50cmFja2VyLnByZXBhcmVFeHRlcm5hbFVybChjbGVhcmVkVXJsKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucGFnZVRyYWNrLm5leHQoeyBwYXRoIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVc2Ugc3RyaW5nIGxpdGVyYWxzIG9yIHJlZ3VsYXIgZXhwcmVzc2lvbnMgdG8gZXhjbHVkZSByb3V0ZXNcbiAgICogZnJvbSBhdXRvbWF0aWMgcGFnZXZpZXcgdHJhY2tpbmcuXG4gICAqXG4gICAqIEBwYXJhbSB1cmwgbG9jYXRpb25cbiAgICovXG4gIHByb3RlY3RlZCBtYXRjaGVzRXhjbHVkZWRSb3V0ZSh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGZvciAoY29uc3QgZXhjbHVkZWRSb3V0ZSBvZiB0aGlzLnNldHRpbmdzLnBhZ2VUcmFja2luZy5leGNsdWRlZFJvdXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlc1JlZ2V4ID0gZXhjbHVkZWRSb3V0ZSBpbnN0YW5jZW9mIFJlZ0V4cCAmJiBleGNsdWRlZFJvdXRlLnRlc3QodXJsKTtcbiAgICAgIGlmIChtYXRjaGVzUmVnZXggfHwgdXJsLmluZGV4T2YoPHN0cmluZz5leGNsdWRlZFJvdXRlKSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGlkJ3MgZnJvbSB0cmFja2VkIHJvdXRlLlxuICAgKiAgRVg6IGAvcHJvamVjdC8xMjk4MS9mZWF0dXJlYCBiZWNvbWVzIGAvcHJvamVjdC9mZWF0dXJlYFxuICAgKlxuICAgKiBAcGFyYW0gdXJsIGN1cnJlbnQgcGFnZSBwYXRoXG4gICAqL1xuICBwcm90ZWN0ZWQgY2xlYXJVcmwodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLnNldHRpbmdzLnBhZ2VUcmFja2luZy5jbGVhcklkcyB8fCB0aGlzLnNldHRpbmdzLnBhZ2VUcmFja2luZy5jbGVhclF1ZXJ5UGFyYW1zIHx8XG4gICAgICB0aGlzLnNldHRpbmdzLnBhZ2VUcmFja2luZy5jbGVhckhhc2gpIHtcbiAgICAgIHJldHVybiB1cmxcbiAgICAgICAgLnNwbGl0KCcvJylcbiAgICAgICAgLm1hcChwYXJ0ID0+IHRoaXMuc2V0dGluZ3MucGFnZVRyYWNraW5nLmNsZWFyUXVlcnlQYXJhbXMgPyBwYXJ0LnNwbGl0KCc/JylbMF0gOiBwYXJ0KVxuICAgICAgICAubWFwKHBhcnQgPT4gdGhpcy5zZXR0aW5ncy5wYWdlVHJhY2tpbmcuY2xlYXJIYXNoID8gcGFydC5zcGxpdCgnIycpWzBdIDogcGFydClcbiAgICAgICAgLmZpbHRlcihwYXJ0ID0+ICF0aGlzLnNldHRpbmdzLnBhZ2VUcmFja2luZy5jbGVhcklkcyB8fCAhcGFydC5tYXRjaCh0aGlzLnNldHRpbmdzLnBhZ2VUcmFja2luZy5pZHNSZWdFeHApKVxuICAgICAgICAuam9pbignLycpO1xuICAgIH1cbiAgICByZXR1cm4gdXJsO1xuICB9XG59XG4iXX0=