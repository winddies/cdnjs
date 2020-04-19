import { __assign } from 'tslib';
import { Injectable, defineInjectable, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Angulartics2 } from 'angulartics2';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AppInsightsDefaults = /** @class */ (function () {
    function AppInsightsDefaults() {
        this.userId = null;
    }
    return AppInsightsDefaults;
}());
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
        this.angulartics2.settings.appInsights = __assign({}, defaults, this.angulartics2.settings.appInsights);
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
    /** @nocollapse */ Angulartics2AppInsights.ngInjectableDef = defineInjectable({ factory: function Angulartics2AppInsights_Factory() { return new Angulartics2AppInsights(inject(Angulartics2), inject(Title), inject(Router)); }, token: Angulartics2AppInsights, providedIn: "root" });
    return Angulartics2AppInsights;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AppInsightsDefaults, Angulartics2AppInsights };

//# sourceMappingURL=angulartics2-appinsights.js.map