/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, NavigationError, NavigationStart, Router, } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Angulartics2 } from 'angulartics2';
import * as i0 from "@angular/core";
import * as i1 from "angulartics2";
import * as i2 from "@angular/platform-browser";
import * as i3 from "@angular/router";
var AppInsightsDefaults = /** @class */ (function () {
    function AppInsightsDefaults() {
        this.userId = null;
    }
    return AppInsightsDefaults;
}());
export { AppInsightsDefaults };
if (false) {
    /** @type {?} */
    AppInsightsDefaults.prototype.userId;
}
var Angulartics2AppInsights = /** @class */ (function () {
    function Angulartics2AppInsights(angulartics2, title, router) {
        var _this = this;
        this.angulartics2 = angulartics2;
        this.title = title;
        this.router = router;
        this.loadStartTime = null;
        this.loadTime = null;
        this.metrics = null;
        this.dimensions = null;
        this.measurements = null;
        if (typeof appInsights === 'undefined') {
            console.warn('appInsights not found');
        }
        /** @type {?} */
        var defaults = new AppInsightsDefaults;
        // Set the default settings for this module
        this.angulartics2.settings.appInsights = tslib_1.__assign({}, defaults, this.angulartics2.settings.appInsights);
        this.angulartics2.setUsername
            .subscribe(function (x) { return _this.setUsername(x); });
        this.angulartics2.setUserProperties
            .subscribe(function (x) { return _this.setUserProperties(x); });
    }
    /**
     * @return {?}
     */
    Angulartics2AppInsights.prototype.startTracking = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.angulartics2.pageTrack
            .pipe(this.angulartics2.filterDeveloperMode())
            .subscribe(function (x) { return _this.pageTrack(x.path); });
        this.angulartics2.eventTrack
            .pipe(this.angulartics2.filterDeveloperMode())
            .subscribe(function (x) { return _this.eventTrack(x.action, x.properties); });
        this.angulartics2.exceptionTrack
            .pipe(this.angulartics2.filterDeveloperMode())
            .subscribe(function (x) { return _this.exceptionTrack(x); });
        this.router.events
            .pipe(this.angulartics2.filterDeveloperMode(), filter(function (event) { return event instanceof NavigationStart; }))
            .subscribe(function (event) { return _this.startTimer(); });
        this.router.events
            .pipe(filter(function (event) { return event instanceof NavigationError || event instanceof NavigationEnd; }))
            .subscribe(function (error) { return _this.stopTimer(); });
    };
    /**
     * @return {?}
     */
    Angulartics2AppInsights.prototype.startTimer = /**
     * @return {?}
     */
    function () {
        this.loadStartTime = Date.now();
        this.loadTime = null;
    };
    /**
     * @return {?}
     */
    Angulartics2AppInsights.prototype.stopTimer = /**
     * @return {?}
     */
    function () {
        this.loadTime = Date.now() - this.loadStartTime;
        this.loadStartTime = null;
    };
    /**
     * Page Track in Baidu Analytics
     *
     * @param path - Location 'path'
     *
     * @link https://github.com/Microsoft/ApplicationInsights-JS/blob/master/API-reference.md#trackpageview
     */
    /**
     * Page Track in Baidu Analytics
     *
     * @link https://github.com/Microsoft/ApplicationInsights-JS/blob/master/API-reference.md#trackpageview
     * @param {?} path - Location 'path'
     *
     * @return {?}
     */
    Angulartics2AppInsights.prototype.pageTrack = /**
     * Page Track in Baidu Analytics
     *
     * @link https://github.com/Microsoft/ApplicationInsights-JS/blob/master/API-reference.md#trackpageview
     * @param {?} path - Location 'path'
     *
     * @return {?}
     */
    function (path) {
        appInsights.trackPageView(this.title.getTitle(), path, this.dimensions, this.metrics, this.loadTime);
    };
    /**
     * Log a user action or other occurrence.
     *
     * @param name Name to identify this event in the portal.
     * @param properties Additional data used to filter events and metrics in the portal. Defaults to empty.
     *
     * @link https://github.com/Microsoft/ApplicationInsights-JS/blob/master/API-reference.md#trackevent
     */
    /**
     * Log a user action or other occurrence.
     *
     * @link https://github.com/Microsoft/ApplicationInsights-JS/blob/master/API-reference.md#trackevent
     * @param {?} name Name to identify this event in the portal.
     * @param {?} properties Additional data used to filter events and metrics in the portal. Defaults to empty.
     *
     * @return {?}
     */
    Angulartics2AppInsights.prototype.eventTrack = /**
     * Log a user action or other occurrence.
     *
     * @link https://github.com/Microsoft/ApplicationInsights-JS/blob/master/API-reference.md#trackevent
     * @param {?} name Name to identify this event in the portal.
     * @param {?} properties Additional data used to filter events and metrics in the portal. Defaults to empty.
     *
     * @return {?}
     */
    function (name, properties) {
        appInsights.trackEvent(name, properties, this.measurements);
    };
    /**
     * Exception Track Event in GA
     *
     * @param properties - Comprised of the mandatory fields 'appId' (string), 'appName' (string) and 'appVersion' (string) and
     * optional fields 'fatal' (boolean) and 'description' (string), error
     *
     * @link https://github.com/Microsoft/ApplicationInsights-JS/blob/master/API-reference.md#trackexception
     */
    /**
     * Exception Track Event in GA
     *
     * @link https://github.com/Microsoft/ApplicationInsights-JS/blob/master/API-reference.md#trackexception
     * @param {?} properties - Comprised of the mandatory fields 'appId' (string), 'appName' (string) and 'appVersion' (string) and
     * optional fields 'fatal' (boolean) and 'description' (string), error
     *
     * @return {?}
     */
    Angulartics2AppInsights.prototype.exceptionTrack = /**
     * Exception Track Event in GA
     *
     * @link https://github.com/Microsoft/ApplicationInsights-JS/blob/master/API-reference.md#trackexception
     * @param {?} properties - Comprised of the mandatory fields 'appId' (string), 'appName' (string) and 'appVersion' (string) and
     * optional fields 'fatal' (boolean) and 'description' (string), error
     *
     * @return {?}
     */
    function (properties) {
        /** @type {?} */
        var description = properties.event || properties.description || properties;
        appInsights.trackException(description);
    };
    /**
     *
     * @param userId
     *
     * @link https://github.com/Microsoft/ApplicationInsights-JS/blob/master/API-reference.md#setauthenticatedusercontext
     */
    /**
     *
     * @link https://github.com/Microsoft/ApplicationInsights-JS/blob/master/API-reference.md#setauthenticatedusercontext
     * @param {?} userId
     *
     * @return {?}
     */
    Angulartics2AppInsights.prototype.setUsername = /**
     *
     * @link https://github.com/Microsoft/ApplicationInsights-JS/blob/master/API-reference.md#setauthenticatedusercontext
     * @param {?} userId
     *
     * @return {?}
     */
    function (userId) {
        this.angulartics2.settings.appInsights.userId = userId;
        appInsights.setAuthenticatedUserContext(userId);
    };
    /**
     * @param {?} properties
     * @return {?}
     */
    Angulartics2AppInsights.prototype.setUserProperties = /**
     * @param {?} properties
     * @return {?}
     */
    function (properties) {
        if (properties.userId) {
            this.angulartics2.settings.appInsights.userId = properties.userId;
        }
        if (properties.accountId) {
            appInsights.setAuthenticatedUserContext(this.angulartics2.settings.appInsights.userId, properties.accountId);
        }
        else {
            appInsights.setAuthenticatedUserContext(this.angulartics2.settings.appInsights.userId);
        }
    };
    Angulartics2AppInsights.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    Angulartics2AppInsights.ctorParameters = function () { return [
        { type: Angulartics2 },
        { type: Title },
        { type: Router }
    ]; };
    /** @nocollapse */ Angulartics2AppInsights.ngInjectableDef = i0.defineInjectable({ factory: function Angulartics2AppInsights_Factory() { return new Angulartics2AppInsights(i0.inject(i1.Angulartics2), i0.inject(i2.Title), i0.inject(i3.Router)); }, token: Angulartics2AppInsights, providedIn: "root" });
    return Angulartics2AppInsights;
}());
export { Angulartics2AppInsights };
if (false) {
    /** @type {?} */
    Angulartics2AppInsights.prototype.loadStartTime;
    /** @type {?} */
    Angulartics2AppInsights.prototype.loadTime;
    /** @type {?} */
    Angulartics2AppInsights.prototype.metrics;
    /** @type {?} */
    Angulartics2AppInsights.prototype.dimensions;
    /** @type {?} */
    Angulartics2AppInsights.prototype.measurements;
    /**
     * @type {?}
     * @private
     */
    Angulartics2AppInsights.prototype.angulartics2;
    /**
     * @type {?}
     * @private
     */
    Angulartics2AppInsights.prototype.title;
    /**
     * @type {?}
     * @private
     */
    Angulartics2AppInsights.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwaW5zaWdodHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFydGljczIvYXBwaW5zaWdodHMvIiwic291cmNlcyI6WyJhcHBpbnNpZ2h0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xELE9BQU8sRUFDTCxhQUFhLEVBQ2IsZUFBZSxFQUNmLGVBQWUsRUFDZixNQUFNLEdBQ1AsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEMsT0FBTyxFQUFFLFlBQVksRUFBdUIsTUFBTSxjQUFjLENBQUM7Ozs7O0FBSWpFO0lBQUE7UUFDRSxXQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFBRCwwQkFBQztBQUFELENBQUMsQUFGRCxJQUVDOzs7O0lBREMscUNBQWM7O0FBR2hCO0lBU0UsaUNBQ1UsWUFBMEIsRUFDMUIsS0FBWSxFQUNaLE1BQWM7UUFIeEIsaUJBZ0JDO1FBZlMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUNaLFdBQU0sR0FBTixNQUFNLENBQVE7UUFWeEIsa0JBQWEsR0FBVyxJQUFJLENBQUM7UUFDN0IsYUFBUSxHQUFXLElBQUksQ0FBQztRQUV4QixZQUFPLEdBQStCLElBQUksQ0FBQztRQUMzQyxlQUFVLEdBQStCLElBQUksQ0FBQztRQUM5QyxpQkFBWSxHQUErQixJQUFJLENBQUM7UUFPOUMsSUFBSSxPQUFPLFdBQVcsS0FBSyxXQUFXLEVBQUU7WUFDdEMsT0FBTyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1NBQ3ZDOztZQUVLLFFBQVEsR0FBRyxJQUFJLG1CQUFtQjtRQUN4QywyQ0FBMkM7UUFDM0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxR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LENBQUM7U0FDSDtJQUNILENBQUM7O2dCQS9IRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O2dCQVJ6QixZQUFZO2dCQVRaLEtBQUs7Z0JBS1osTUFBTTs7O2tDQU5SO0NBa0pDLEFBaElELElBZ0lDO1NBL0hZLHVCQUF1Qjs7O0lBQ2xDLGdEQUE2Qjs7SUFDN0IsMkNBQXdCOztJQUV4QiwwQ0FBMkM7O0lBQzNDLDZDQUE4Qzs7SUFDOUMsK0NBQWdEOzs7OztJQUc5QywrQ0FBa0M7Ozs7O0lBQ2xDLHdDQUFvQjs7Ozs7SUFDcEIseUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7XG4gIE5hdmlnYXRpb25FbmQsXG4gIE5hdmlnYXRpb25FcnJvcixcbiAgTmF2aWdhdGlvblN0YXJ0LFxuICBSb3V0ZXIsXG59IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEFuZ3VsYXJ0aWNzMiwgQXBwSW5zaWdodHNTZXR0aW5ncyB9IGZyb20gJ2FuZ3VsYXJ0aWNzMic7XG5cbmRlY2xhcmUgY29uc3QgYXBwSW5zaWdodHM6IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzLklBcHBJbnNpZ2h0cztcblxuZXhwb3J0IGNsYXNzIEFwcEluc2lnaHRzRGVmYXVsdHMgaW1wbGVtZW50cyBBcHBJbnNpZ2h0c1NldHRpbmdzIHtcbiAgdXNlcklkID0gbnVsbDtcbn1cblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFydGljczJBcHBJbnNpZ2h0cyB7XG4gIGxvYWRTdGFydFRpbWU6IG51bWJlciA9IG51bGw7XG4gIGxvYWRUaW1lOiBudW1iZXIgPSBudWxsO1xuXG4gIG1ldHJpY3M6IHsgW25hbWU6IHN0cmluZ106IG51bWJlciB9ID0gbnVsbDtcbiAgZGltZW5zaW9uczogeyBbbmFtZTogc3RyaW5nXTogc3RyaW5nIH0gPSBudWxsO1xuICBtZWFzdXJlbWVudHM6IHsgW25hbWU6IHN0cmluZ106IG51bWJlciB9ID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFuZ3VsYXJ0aWNzMjogQW5ndWxhcnRpY3MyLFxuICAgIHByaXZhdGUgdGl0bGU6IFRpdGxlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICkge1xuICAgIGlmICh0eXBlb2YgYXBwSW5zaWdodHMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ2FwcEluc2lnaHRzIG5vdCBmb3VuZCcpO1xuICAgIH1cblxuICAgIGNvbnN0IGRlZmF1bHRzID0gbmV3IEFwcEluc2lnaHRzRGVmYXVsdHM7XG4gICAgLy8gU2V0IHRoZSBkZWZhdWx0IHNldHRpbmdzIGZvciB0aGlzIG1vZHVsZVxuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmFwcEluc2lnaHRzID0geyAuLi5kZWZhdWx0cywgLi4udGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuYXBwSW5zaWdodHMgfTtcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXRVc2VybmFtZVxuICAgICAgLnN1YnNjcmliZSgoeDogc3RyaW5nKSA9PiB0aGlzLnNldFVzZXJuYW1lKHgpKTtcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXRVc2VyUHJvcGVydGllc1xuICAgICAgLnN1YnNjcmliZSgoeCkgPT4gdGhpcy5zZXRVc2VyUHJvcGVydGllcyh4KSk7XG4gIH1cblxuICBzdGFydFRyYWNraW5nKCk6IHZvaWQge1xuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnBhZ2VUcmFja1xuICAgICAgLnBpcGUodGhpcy5hbmd1bGFydGljczIuZmlsdGVyRGV2ZWxvcGVyTW9kZSgpKVxuICAgICAgLnN1YnNjcmliZSgoeCkgPT4gdGhpcy5wYWdlVHJhY2soeC5wYXRoKSk7XG4gICAgdGhpcy5hbmd1bGFydGljczIuZXZlbnRUcmFja1xuICAgICAgLnBpcGUodGhpcy5hbmd1bGFydGljczIuZmlsdGVyRGV2ZWxvcGVyTW9kZSgpKVxuICAgICAgLnN1YnNjcmliZSgoeCkgPT4gdGhpcy5ldmVudFRyYWNrKHguYWN0aW9uLCB4LnByb3BlcnRpZXMpKTtcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5leGNlcHRpb25UcmFja1xuICAgICAgLnBpcGUodGhpcy5hbmd1bGFydGljczIuZmlsdGVyRGV2ZWxvcGVyTW9kZSgpKVxuICAgICAgLnN1YnNjcmliZSgoeCkgPT4gdGhpcy5leGNlcHRpb25UcmFjayh4KSk7XG4gICAgdGhpcy5yb3V0ZXIuZXZlbnRzXG4gICAgICAucGlwZShcbiAgICAgICAgdGhpcy5hbmd1bGFydGljczIuZmlsdGVyRGV2ZWxvcGVyTW9kZSgpLFxuICAgICAgICBmaWx0ZXIoZXZlbnQgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uU3RhcnQpLFxuICAgIClcbiAgICAgIC5zdWJzY3JpYmUoZXZlbnQgPT4gdGhpcy5zdGFydFRpbWVyKCkpO1xuXG4gICAgdGhpcy5yb3V0ZXIuZXZlbnRzXG4gICAgICAucGlwZShmaWx0ZXIoZXZlbnQgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRXJyb3IgfHwgZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSlcbiAgICAgIC5zdWJzY3JpYmUoZXJyb3IgPT4gdGhpcy5zdG9wVGltZXIoKSk7XG4gIH1cblxuICBzdGFydFRpbWVyKCkge1xuICAgIHRoaXMubG9hZFN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgdGhpcy5sb2FkVGltZSA9IG51bGw7XG4gIH1cblxuICBzdG9wVGltZXIoKSB7XG4gICAgdGhpcy5sb2FkVGltZSA9IERhdGUubm93KCkgLSB0aGlzLmxvYWRTdGFydFRpbWU7XG4gICAgdGhpcy5sb2FkU3RhcnRUaW1lID0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYWdlIFRyYWNrIGluIEJhaWR1IEFuYWx5dGljc1xuICAgKlxuICAgKiBAcGFyYW0gcGF0aCAtIExvY2F0aW9uICdwYXRoJ1xuICAgKlxuICAgKiBAbGluayBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L0FwcGxpY2F0aW9uSW5zaWdodHMtSlMvYmxvYi9tYXN0ZXIvQVBJLXJlZmVyZW5jZS5tZCN0cmFja3BhZ2V2aWV3XG4gICAqL1xuICBwYWdlVHJhY2socGF0aDogc3RyaW5nKSB7XG4gICAgYXBwSW5zaWdodHMudHJhY2tQYWdlVmlldyhcbiAgICAgIHRoaXMudGl0bGUuZ2V0VGl0bGUoKSxcbiAgICAgIHBhdGgsXG4gICAgICB0aGlzLmRpbWVuc2lvbnMsXG4gICAgICB0aGlzLm1ldHJpY3MsXG4gICAgICB0aGlzLmxvYWRUaW1lLFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogTG9nIGEgdXNlciBhY3Rpb24gb3Igb3RoZXIgb2NjdXJyZW5jZS5cbiAgICpcbiAgICogQHBhcmFtIG5hbWUgTmFtZSB0byBpZGVudGlmeSB0aGlzIGV2ZW50IGluIHRoZSBwb3J0YWwuXG4gICAqIEBwYXJhbSBwcm9wZXJ0aWVzIEFkZGl0aW9uYWwgZGF0YSB1c2VkIHRvIGZpbHRlciBldmVudHMgYW5kIG1ldHJpY3MgaW4gdGhlIHBvcnRhbC4gRGVmYXVsdHMgdG8gZW1wdHkuXG4gICAqXG4gICAqIEBsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvQXBwbGljYXRpb25JbnNpZ2h0cy1KUy9ibG9iL21hc3Rlci9BUEktcmVmZXJlbmNlLm1kI3RyYWNrZXZlbnRcbiAgICovXG4gIGV2ZW50VHJhY2sobmFtZTogc3RyaW5nLCBwcm9wZXJ0aWVzOiB7IFtuYW1lOiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIGFwcEluc2lnaHRzLnRyYWNrRXZlbnQobmFtZSwgcHJvcGVydGllcywgdGhpcy5tZWFzdXJlbWVudHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4Y2VwdGlvbiBUcmFjayBFdmVudCBpbiBHQVxuICAgKlxuICAgKiBAcGFyYW0gcHJvcGVydGllcyAtIENvbXByaXNlZCBvZiB0aGUgbWFuZGF0b3J5IGZpZWxkcyAnYXBwSWQnIChzdHJpbmcpLCAnYXBwTmFtZScgKHN0cmluZykgYW5kICdhcHBWZXJzaW9uJyAoc3RyaW5nKSBhbmRcbiAgICogb3B0aW9uYWwgZmllbGRzICdmYXRhbCcgKGJvb2xlYW4pIGFuZCAnZGVzY3JpcHRpb24nIChzdHJpbmcpLCBlcnJvclxuICAgKlxuICAgKiBAbGluayBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L0FwcGxpY2F0aW9uSW5zaWdodHMtSlMvYmxvYi9tYXN0ZXIvQVBJLXJlZmVyZW5jZS5tZCN0cmFja2V4Y2VwdGlvblxuICAgKi9cbiAgZXhjZXB0aW9uVHJhY2socHJvcGVydGllczogYW55KSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBwcm9wZXJ0aWVzLmV2ZW50IHx8IHByb3BlcnRpZXMuZGVzY3JpcHRpb24gfHwgcHJvcGVydGllcztcblxuICAgIGFwcEluc2lnaHRzLnRyYWNrRXhjZXB0aW9uKGRlc2NyaXB0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqXG4gICAqIEBsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvQXBwbGljYXRpb25JbnNpZ2h0cy1KUy9ibG9iL21hc3Rlci9BUEktcmVmZXJlbmNlLm1kI3NldGF1dGhlbnRpY2F0ZWR1c2VyY29udGV4dFxuICAgKi9cbiAgc2V0VXNlcm5hbWUodXNlcklkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXR0aW5ncy5hcHBJbnNpZ2h0cy51c2VySWQgPSB1c2VySWQ7XG4gICAgYXBwSW5zaWdodHMuc2V0QXV0aGVudGljYXRlZFVzZXJDb250ZXh0KHVzZXJJZCk7XG4gIH1cblxuICBzZXRVc2VyUHJvcGVydGllcyhwcm9wZXJ0aWVzOiBQYXJ0aWFsPHsgdXNlcklkOiBzdHJpbmcsIGFjY291bnRJZDogc3RyaW5nIH0+KSB7XG4gICAgaWYgKHByb3BlcnRpZXMudXNlcklkKSB7XG4gICAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXR0aW5ncy5hcHBJbnNpZ2h0cy51c2VySWQgPSBwcm9wZXJ0aWVzLnVzZXJJZDtcbiAgICB9XG4gICAgaWYgKHByb3BlcnRpZXMuYWNjb3VudElkKSB7XG4gICAgICBhcHBJbnNpZ2h0cy5zZXRBdXRoZW50aWNhdGVkVXNlckNvbnRleHQoXG4gICAgICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmFwcEluc2lnaHRzLnVzZXJJZCxcbiAgICAgICAgcHJvcGVydGllcy5hY2NvdW50SWQsXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcHBJbnNpZ2h0cy5zZXRBdXRoZW50aWNhdGVkVXNlckNvbnRleHQoXG4gICAgICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmFwcEluc2lnaHRzLnVzZXJJZCxcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iXX0=