import { __assign } from 'tslib';
import { Injectable, defineInjectable, inject } from '@angular/core';
import { Angulartics2 } from 'angulartics2';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GoogleTagManagerDefaults = /** @class */ (function () {
    function GoogleTagManagerDefaults() {
        this.userId = null;
    }
    return GoogleTagManagerDefaults;
}());
var Angulartics2GoogleTagManager = /** @class */ (function () {
    function Angulartics2GoogleTagManager(angulartics2) {
        var _this = this;
        this.angulartics2 = angulartics2;
        // The dataLayer needs to be initialized
        if (typeof dataLayer !== 'undefined' && dataLayer) {
            dataLayer = ((/** @type {?} */ (window))).dataLayer = ((/** @type {?} */ (window))).dataLayer || [];
        }
        /** @type {?} */
        var defaults = new GoogleTagManagerDefaults;
        // Set the default settings for this module
        this.angulartics2.settings.gtm = __assign({}, defaults, this.angulartics2.settings.gtm);
        this.angulartics2.setUsername
            .subscribe(function (x) { return _this.setUsername(x); });
    }
    /**
     * @return {?}
     */
    Angulartics2GoogleTagManager.prototype.startTracking = /**
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
    };
    /**
     * @param {?} path
     * @return {?}
     */
    Angulartics2GoogleTagManager.prototype.pageTrack = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        this.pushLayer({
            'event': 'Page View',
            'content-name': path,
            'userId': this.angulartics2.settings.gtm.userId
        });
    };
    /**
     * Send Data Layer
     *
     * @layer data layer object
     */
    /**
     * Send Data Layer
     *
     * \@layer data layer object
     * @param {?} layer
     * @return {?}
     */
    Angulartics2GoogleTagManager.prototype.pushLayer = /**
     * Send Data Layer
     *
     * \@layer data layer object
     * @param {?} layer
     * @return {?}
     */
    function (layer) {
        if (typeof dataLayer !== 'undefined' && dataLayer) {
            dataLayer.push(layer);
        }
    };
    /**
     * Send interactions to the dataLayer, i.e. for event tracking in Google Analytics
     *
     * @param action associated with the event
     */
    /**
     * Send interactions to the dataLayer, i.e. for event tracking in Google Analytics
     *
     * @param {?} action associated with the event
     * @param {?} properties
     * @return {?}
     */
    Angulartics2GoogleTagManager.prototype.eventTrack = /**
     * Send interactions to the dataLayer, i.e. for event tracking in Google Analytics
     *
     * @param {?} action associated with the event
     * @param {?} properties
     * @return {?}
     */
    function (action, properties) {
        // TODO: make interface
        //  @param {string} properties.category
        //  @param {string} [properties.label]
        //  @param {number} [properties.value]
        //  @param {boolean} [properties.noninteraction]
        // Set a default GTM category
        properties = properties || {};
        this.pushLayer(__assign({ event: properties.event || 'interaction', target: properties.category || 'Event', action: action, label: properties.label, value: properties.value, interactionType: properties.noninteraction, userId: this.angulartics2.settings.gtm.userId }, properties.gtmCustom));
    };
    /**
     * Exception Track Event in GTM
     *
     */
    /**
     * Exception Track Event in GTM
     *
     * @param {?} properties
     * @return {?}
     */
    Angulartics2GoogleTagManager.prototype.exceptionTrack = /**
     * Exception Track Event in GTM
     *
     * @param {?} properties
     * @return {?}
     */
    function (properties) {
        // TODO: make interface
        //  @param {Object} properties
        //  @param {string} properties.appId
        //  @param {string} properties.appName
        //  @param {string} properties.appVersion
        //  @param {string} [properties.description]
        //  @param {boolean} [properties.fatal]
        if (!properties || !properties.appId || !properties.appName || !properties.appVersion) {
            console.error('Must be setted appId, appName and appVersion.');
            return;
        }
        if (properties.fatal === undefined) {
            console.log('No "fatal" provided, sending with fatal=true');
            properties.exFatal = true;
        }
        properties.exDescription = properties.event ? properties.event.stack : properties.description;
        this.eventTrack("Exception thrown for " + properties.appName + " <" + properties.appId + "@" + properties.appVersion + ">", {
            'category': 'Exception',
            'label': properties.exDescription
        });
    };
    /**
     * Set userId for use with Universal Analytics User ID feature
     *
     * @param userId used to identify user cross-device in Google Analytics
     */
    /**
     * Set userId for use with Universal Analytics User ID feature
     *
     * @param {?} userId used to identify user cross-device in Google Analytics
     * @return {?}
     */
    Angulartics2GoogleTagManager.prototype.setUsername = /**
     * Set userId for use with Universal Analytics User ID feature
     *
     * @param {?} userId used to identify user cross-device in Google Analytics
     * @return {?}
     */
    function (userId) {
        this.angulartics2.settings.gtm.userId = userId;
    };
    Angulartics2GoogleTagManager.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    Angulartics2GoogleTagManager.ctorParameters = function () { return [
        { type: Angulartics2 }
    ]; };
    /** @nocollapse */ Angulartics2GoogleTagManager.ngInjectableDef = defineInjectable({ factory: function Angulartics2GoogleTagManager_Factory() { return new Angulartics2GoogleTagManager(inject(Angulartics2)); }, token: Angulartics2GoogleTagManager, providedIn: "root" });
    return Angulartics2GoogleTagManager;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { GoogleTagManagerDefaults, Angulartics2GoogleTagManager };

//# sourceMappingURL=angulartics2-gtm.js.map