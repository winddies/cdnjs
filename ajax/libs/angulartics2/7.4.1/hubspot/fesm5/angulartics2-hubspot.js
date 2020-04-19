import { Injectable, defineInjectable, inject } from '@angular/core';
import { Angulartics2 } from 'angulartics2';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Angulartics2Hubspot = /** @class */ (function () {
    function Angulartics2Hubspot(angulartics2) {
        var _this = this;
        this.angulartics2 = angulartics2;
        this.angulartics2.setUserProperties
            .subscribe(function (x) { return _this.setUserProperties(x); });
    }
    /**
     * @return {?}
     */
    Angulartics2Hubspot.prototype.startTracking = /**
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
    };
    /**
     * @param {?} path
     * @return {?}
     */
    Angulartics2Hubspot.prototype.pageTrack = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        if (typeof _hsq !== 'undefined') {
            _hsq.push(['setPath', path]);
            _hsq.push(['trackPageView']);
        }
    };
    /**
     * @param {?} action
     * @param {?} properties
     * @return {?}
     */
    Angulartics2Hubspot.prototype.eventTrack = /**
     * @param {?} action
     * @param {?} properties
     * @return {?}
     */
    function (action, properties) {
        if (typeof _hsq !== 'undefined') {
            _hsq.push(['trackEvent', properties]);
        }
    };
    /**
     * @param {?} properties
     * @return {?}
     */
    Angulartics2Hubspot.prototype.setUserProperties = /**
     * @param {?} properties
     * @return {?}
     */
    function (properties) {
        if (typeof _hsq !== 'undefined') {
            _hsq.push(['identify', properties]);
        }
    };
    Angulartics2Hubspot.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    Angulartics2Hubspot.ctorParameters = function () { return [
        { type: Angulartics2 }
    ]; };
    /** @nocollapse */ Angulartics2Hubspot.ngInjectableDef = defineInjectable({ factory: function Angulartics2Hubspot_Factory() { return new Angulartics2Hubspot(inject(Angulartics2)); }, token: Angulartics2Hubspot, providedIn: "root" });
    return Angulartics2Hubspot;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { Angulartics2Hubspot };

//# sourceMappingURL=angulartics2-hubspot.js.map