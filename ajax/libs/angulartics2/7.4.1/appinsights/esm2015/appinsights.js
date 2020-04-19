/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, NavigationError, NavigationStart, Router, } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Angulartics2 } from 'angulartics2';
import * as i0 from "@angular/core";
import * as i1 from "angulartics2";
import * as i2 from "@angular/platform-browser";
import * as i3 from "@angular/router";
export class AppInsightsDefaults {
    constructor() {
        this.userId = null;
    }
}
if (false) {
    /** @type {?} */
    AppInsightsDefaults.prototype.userId;
}
export class Angulartics2AppInsights {
    /**
     * @param {?} angulartics2
     * @param {?} title
     * @param {?} router
     */
    constructor(angulartics2, title, router) {
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
        const defaults = new AppInsightsDefaults;
        // Set the default settings for this module
        this.angulartics2.settings.appInsights = Object.assign({}, defaults, this.angulartics2.settings.appInsights);
        this.angulartics2.setUsername
            .subscribe((x) => this.setUsername(x));
        this.angulartics2.setUserProperties
            .subscribe((x) => this.setUserProperties(x));
    }
    /**
     * @return {?}
     */
    startTracking() {
        this.angulartics2.pageTrack
            .pipe(this.angulartics2.filterDeveloperMode())
            .subscribe((x) => this.pageTrack(x.path));
        this.angulartics2.eventTrack
            .pipe(this.angulartics2.filterDeveloperMode())
            .subscribe((x) => this.eventTrack(x.action, x.properties));
        this.angulartics2.exceptionTrack
            .pipe(this.angulartics2.filterDeveloperMode())
            .subscribe((x) => this.exceptionTrack(x));
        this.router.events
            .pipe(this.angulartics2.filterDeveloperMode(), filter(event => event instanceof NavigationStart))
            .subscribe(event => this.startTimer());
        this.router.events
            .pipe(filter(event => event instanceof NavigationError || event instanceof NavigationEnd))
            .subscribe(error => this.stopTimer());
    }
    /**
     * @return {?}
     */
    startTimer() {
        this.loadStartTime = Date.now();
        this.loadTime = null;
    }
    /**
     * @return {?}
     */
    stopTimer() {
        this.loadTime = Date.now() - this.loadStartTime;
        this.loadStartTime = null;
    }
    /**
     * Page Track in Baidu Analytics
     *
     * @link https://github.com/Microsoft/ApplicationInsights-JS/blob/master/API-reference.md#trackpageview
     * @param {?} path - Location 'path'
     *
     * @return {?}
     */
    pageTrack(path) {
        appInsights.trackPageView(this.title.getTitle(), path, this.dimensions, this.metrics, this.loadTime);
    }
    /**
     * Log a user action or other occurrence.
     *
     * @link https://github.com/Microsoft/ApplicationInsights-JS/blob/master/API-reference.md#trackevent
     * @param {?} name Name to identify this event in the portal.
     * @param {?} properties Additional data used to filter events and metrics in the portal. Defaults to empty.
     *
     * @return {?}
     */
    eventTrack(name, properties) {
        appInsights.trackEvent(name, properties, this.measurements);
    }
    /**
     * Exception Track Event in GA
     *
     * @link https://github.com/Microsoft/ApplicationInsights-JS/blob/master/API-reference.md#trackexception
     * @param {?} properties - Comprised of the mandatory fields 'appId' (string), 'appName' (string) and 'appVersion' (string) and
     * optional fields 'fatal' (boolean) and 'description' (string), error
     *
     * @return {?}
     */
    exceptionTrack(properties) {
        /** @type {?} */
        const description = properties.event || properties.description || properties;
        appInsights.trackException(description);
    }
    /**
     *
     * @link https://github.com/Microsoft/ApplicationInsights-JS/blob/master/API-reference.md#setauthenticatedusercontext
     * @param {?} userId
     *
     * @return {?}
     */
    setUsername(userId) {
        this.angulartics2.settings.appInsights.userId = userId;
        appInsights.setAuthenticatedUserContext(userId);
    }
    /**
     * @param {?} properties
     * @return {?}
     */
    setUserProperties(properties) {
        if (properties.userId) {
            this.angulartics2.settings.appInsights.userId = properties.userId;
        }
        if (properties.accountId) {
            appInsights.setAuthenticatedUserContext(this.angulartics2.settings.appInsights.userId, properties.accountId);
        }
        else {
            appInsights.setAuthenticatedUserContext(this.angulartics2.settings.appInsights.userId);
        }
    }
}
Angulartics2AppInsights.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
Angulartics2AppInsights.ctorParameters = () => [
    { type: Angulartics2 },
    { type: Title },
    { type: Router }
];
/** @nocollapse */ Angulartics2AppInsights.ngInjectableDef = i0.defineInjectable({ factory: function Angulartics2AppInsights_Factory() { return new Angulartics2AppInsights(i0.inject(i1.Angulartics2), i0.inject(i2.Title), i0.inject(i3.Router)); }, token: Angulartics2AppInsights, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwaW5zaWdodHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFydGljczIvYXBwaW5zaWdodHMvIiwic291cmNlcyI6WyJhcHBpbnNpZ2h0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEQsT0FBTyxFQUNMLGFBQWEsRUFDYixlQUFlLEVBQ2YsZUFBZSxFQUNmLE1BQU0sR0FDUCxNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QyxPQUFPLEVBQUUsWUFBWSxFQUF1QixNQUFNLGNBQWMsQ0FBQzs7Ozs7QUFJakUsTUFBTSxPQUFPLG1CQUFtQjtJQUFoQztRQUNFLFdBQU0sR0FBRyxJQUFJLENBQUM7SUFDaEIsQ0FBQztDQUFBOzs7SUFEQyxxQ0FBYzs7QUFJaEIsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7O0lBUWxDLFlBQ1UsWUFBMEIsRUFDMUIsS0FBWSxFQUNaLE1BQWM7UUFGZCxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQ1osV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVZ4QixrQkFBYSxHQUFXLElBQUksQ0FBQztRQUM3QixhQUFRLEdBQVcsSUFBSSxDQUFDO1FBRXhCLFlBQU8sR0FBK0IsSUFBSSxDQUFDO1FBQzNDLGVBQVUsR0FBK0IsSUFBSSxDQUFDO1FBQzlDLGlCQUFZLEdBQStCLElBQUksQ0FBQztRQU85QyxJQUFJLE9BQU8sV0FBVyxLQUFLLFdBQVcsRUFBRTtZQUN0QyxPQUFPLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUM7U0FDdkM7O2NBRUssUUFBUSxHQUFHLElBQUksbUJBQW1CO1FBQ3hDLDJDQUEyQztRQUMzQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFB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cnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHtcbiAgTmF2aWdhdGlvbkVuZCxcbiAgTmF2aWdhdGlvbkVycm9yLFxuICBOYXZpZ2F0aW9uU3RhcnQsXG4gIFJvdXRlcixcbn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQW5ndWxhcnRpY3MyLCBBcHBJbnNpZ2h0c1NldHRpbmdzIH0gZnJvbSAnYW5ndWxhcnRpY3MyJztcblxuZGVjbGFyZSBjb25zdCBhcHBJbnNpZ2h0czogTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMuSUFwcEluc2lnaHRzO1xuXG5leHBvcnQgY2xhc3MgQXBwSW5zaWdodHNEZWZhdWx0cyBpbXBsZW1lbnRzIEFwcEluc2lnaHRzU2V0dGluZ3Mge1xuICB1c2VySWQgPSBudWxsO1xufVxuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJ0aWNzMkFwcEluc2lnaHRzIHtcbiAgbG9hZFN0YXJ0VGltZTogbnVtYmVyID0gbnVsbDtcbiAgbG9hZFRpbWU6IG51bWJlciA9IG51bGw7XG5cbiAgbWV0cmljczogeyBbbmFtZTogc3RyaW5nXTogbnVtYmVyIH0gPSBudWxsO1xuICBkaW1lbnNpb25zOiB7IFtuYW1lOiBzdHJpbmddOiBzdHJpbmcgfSA9IG51bGw7XG4gIG1lYXN1cmVtZW50czogeyBbbmFtZTogc3RyaW5nXTogbnVtYmVyIH0gPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYW5ndWxhcnRpY3MyOiBBbmd1bGFydGljczIsXG4gICAgcHJpdmF0ZSB0aXRsZTogVGl0bGUsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgKSB7XG4gICAgaWYgKHR5cGVvZiBhcHBJbnNpZ2h0cyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUud2FybignYXBwSW5zaWdodHMgbm90IGZvdW5kJyk7XG4gICAgfVxuXG4gICAgY29uc3QgZGVmYXVsdHMgPSBuZXcgQXBwSW5zaWdodHNEZWZhdWx0cztcbiAgICAvLyBTZXQgdGhlIGRlZmF1bHQgc2V0dGluZ3MgZm9yIHRoaXMgbW9kdWxlXG4gICAgdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuYXBwSW5zaWdodHMgPSB7IC4uLmRlZmF1bHRzLCAuLi50aGlzLmFuZ3VsYXJ0aWNzMi5zZXR0aW5ncy5hcHBJbnNpZ2h0cyB9O1xuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldFVzZXJuYW1lXG4gICAgICAuc3Vic2NyaWJlKCh4OiBzdHJpbmcpID0+IHRoaXMuc2V0VXNlcm5hbWUoeCkpO1xuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldFVzZXJQcm9wZXJ0aWVzXG4gICAgICAuc3Vic2NyaWJlKCh4KSA9PiB0aGlzLnNldFVzZXJQcm9wZXJ0aWVzKHgpKTtcbiAgfVxuXG4gIHN0YXJ0VHJhY2tpbmcoKTogdm9pZCB7XG4gICAgdGhpcy5hbmd1bGFydGljczIucGFnZVRyYWNrXG4gICAgICAucGlwZSh0aGlzLmFuZ3VsYXJ0aWNzMi5maWx0ZXJEZXZlbG9wZXJNb2RlKCkpXG4gICAgICAuc3Vic2NyaWJlKCh4KSA9PiB0aGlzLnBhZ2VUcmFjayh4LnBhdGgpKTtcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5ldmVudFRyYWNrXG4gICAgICAucGlwZSh0aGlzLmFuZ3VsYXJ0aWNzMi5maWx0ZXJEZXZlbG9wZXJNb2RlKCkpXG4gICAgICAuc3Vic2NyaWJlKCh4KSA9PiB0aGlzLmV2ZW50VHJhY2soeC5hY3Rpb24sIHgucHJvcGVydGllcykpO1xuICAgIHRoaXMuYW5ndWxhcnRpY3MyLmV4Y2VwdGlvblRyYWNrXG4gICAgICAucGlwZSh0aGlzLmFuZ3VsYXJ0aWNzMi5maWx0ZXJEZXZlbG9wZXJNb2RlKCkpXG4gICAgICAuc3Vic2NyaWJlKCh4KSA9PiB0aGlzLmV4Y2VwdGlvblRyYWNrKHgpKTtcbiAgICB0aGlzLnJvdXRlci5ldmVudHNcbiAgICAgIC5waXBlKFxuICAgICAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5maWx0ZXJEZXZlbG9wZXJNb2RlKCksXG4gICAgICAgIGZpbHRlcihldmVudCA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydCksXG4gICAgKVxuICAgICAgLnN1YnNjcmliZShldmVudCA9PiB0aGlzLnN0YXJ0VGltZXIoKSk7XG5cbiAgICB0aGlzLnJvdXRlci5ldmVudHNcbiAgICAgIC5waXBlKGZpbHRlcihldmVudCA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FcnJvciB8fCBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpKVxuICAgICAgLnN1YnNjcmliZShlcnJvciA9PiB0aGlzLnN0b3BUaW1lcigpKTtcbiAgfVxuXG4gIHN0YXJ0VGltZXIoKSB7XG4gICAgdGhpcy5sb2FkU3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLmxvYWRUaW1lID0gbnVsbDtcbiAgfVxuXG4gIHN0b3BUaW1lcigpIHtcbiAgICB0aGlzLmxvYWRUaW1lID0gRGF0ZS5ub3coKSAtIHRoaXMubG9hZFN0YXJ0VGltZTtcbiAgICB0aGlzLmxvYWRTdGFydFRpbWUgPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhZ2UgVHJhY2sgaW4gQmFpZHUgQW5hbHl0aWNzXG4gICAqXG4gICAqIEBwYXJhbSBwYXRoIC0gTG9jYXRpb24gJ3BhdGgnXG4gICAqXG4gICAqIEBsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvQXBwbGljYXRpb25JbnNpZ2h0cy1KUy9ibG9iL21hc3Rlci9BUEktcmVmZXJlbmNlLm1kI3RyYWNrcGFnZXZpZXdcbiAgICovXG4gIHBhZ2VUcmFjayhwYXRoOiBzdHJpbmcpIHtcbiAgICBhcHBJbnNpZ2h0cy50cmFja1BhZ2VWaWV3KFxuICAgICAgdGhpcy50aXRsZS5nZXRUaXRsZSgpLFxuICAgICAgcGF0aCxcbiAgICAgIHRoaXMuZGltZW5zaW9ucyxcbiAgICAgIHRoaXMubWV0cmljcyxcbiAgICAgIHRoaXMubG9hZFRpbWUsXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2cgYSB1c2VyIGFjdGlvbiBvciBvdGhlciBvY2N1cnJlbmNlLlxuICAgKlxuICAgKiBAcGFyYW0gbmFtZSBOYW1lIHRvIGlkZW50aWZ5IHRoaXMgZXZlbnQgaW4gdGhlIHBvcnRhbC5cbiAgICogQHBhcmFtIHByb3BlcnRpZXMgQWRkaXRpb25hbCBkYXRhIHVzZWQgdG8gZmlsdGVyIGV2ZW50cyBhbmQgbWV0cmljcyBpbiB0aGUgcG9ydGFsLiBEZWZhdWx0cyB0byBlbXB0eS5cbiAgICpcbiAgICogQGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9BcHBsaWNhdGlvbkluc2lnaHRzLUpTL2Jsb2IvbWFzdGVyL0FQSS1yZWZlcmVuY2UubWQjdHJhY2tldmVudFxuICAgKi9cbiAgZXZlbnRUcmFjayhuYW1lOiBzdHJpbmcsIHByb3BlcnRpZXM6IHsgW25hbWU6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgYXBwSW5zaWdodHMudHJhY2tFdmVudChuYW1lLCBwcm9wZXJ0aWVzLCB0aGlzLm1lYXN1cmVtZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogRXhjZXB0aW9uIFRyYWNrIEV2ZW50IGluIEdBXG4gICAqXG4gICAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gQ29tcHJpc2VkIG9mIHRoZSBtYW5kYXRvcnkgZmllbGRzICdhcHBJZCcgKHN0cmluZyksICdhcHBOYW1lJyAoc3RyaW5nKSBhbmQgJ2FwcFZlcnNpb24nIChzdHJpbmcpIGFuZFxuICAgKiBvcHRpb25hbCBmaWVsZHMgJ2ZhdGFsJyAoYm9vbGVhbikgYW5kICdkZXNjcmlwdGlvbicgKHN0cmluZyksIGVycm9yXG4gICAqXG4gICAqIEBsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvQXBwbGljYXRpb25JbnNpZ2h0cy1KUy9ibG9iL21hc3Rlci9BUEktcmVmZXJlbmNlLm1kI3RyYWNrZXhjZXB0aW9uXG4gICAqL1xuICBleGNlcHRpb25UcmFjayhwcm9wZXJ0aWVzOiBhbnkpIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHByb3BlcnRpZXMuZXZlbnQgfHwgcHJvcGVydGllcy5kZXNjcmlwdGlvbiB8fCBwcm9wZXJ0aWVzO1xuXG4gICAgYXBwSW5zaWdodHMudHJhY2tFeGNlcHRpb24oZGVzY3JpcHRpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICpcbiAgICogQGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9BcHBsaWNhdGlvbkluc2lnaHRzLUpTL2Jsb2IvbWFzdGVyL0FQSS1yZWZlcmVuY2UubWQjc2V0YXV0aGVudGljYXRlZHVzZXJjb250ZXh0XG4gICAqL1xuICBzZXRVc2VybmFtZSh1c2VySWQ6IHN0cmluZykge1xuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmFwcEluc2lnaHRzLnVzZXJJZCA9IHVzZXJJZDtcbiAgICBhcHBJbnNpZ2h0cy5zZXRBdXRoZW50aWNhdGVkVXNlckNvbnRleHQodXNlcklkKTtcbiAgfVxuXG4gIHNldFVzZXJQcm9wZXJ0aWVzKHByb3BlcnRpZXM6IFBhcnRpYWw8eyB1c2VySWQ6IHN0cmluZywgYWNjb3VudElkOiBzdHJpbmcgfT4pIHtcbiAgICBpZiAocHJvcGVydGllcy51c2VySWQpIHtcbiAgICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmFwcEluc2lnaHRzLnVzZXJJZCA9IHByb3BlcnRpZXMudXNlcklkO1xuICAgIH1cbiAgICBpZiAocHJvcGVydGllcy5hY2NvdW50SWQpIHtcbiAgICAgIGFwcEluc2lnaHRzLnNldEF1dGhlbnRpY2F0ZWRVc2VyQ29udGV4dChcbiAgICAgICAgdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuYXBwSW5zaWdodHMudXNlcklkLFxuICAgICAgICBwcm9wZXJ0aWVzLmFjY291bnRJZCxcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwcEluc2lnaHRzLnNldEF1dGhlbnRpY2F0ZWRVc2VyQ29udGV4dChcbiAgICAgICAgdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuYXBwSW5zaWdodHMudXNlcklkLFxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==