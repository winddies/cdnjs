import { Injectable, defineInjectable, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Angulartics2 } from 'angulartics2';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AppInsightsDefaults {
    constructor() {
        this.userId = null;
    }
}
class Angulartics2AppInsights {
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
/** @nocollapse */ Angulartics2AppInsights.ngInjectableDef = defineInjectable({ factory: function Angulartics2AppInsights_Factory() { return new Angulartics2AppInsights(inject(Angulartics2), inject(Title), inject(Router)); }, token: Angulartics2AppInsights, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AppInsightsDefaults, Angulartics2AppInsights };

//# sourceMappingURL=angulartics2-appinsights.js.map