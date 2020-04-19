import { Injectable, defineInjectable, inject } from '@angular/core';
import { Angulartics2 } from 'angulartics2';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Angulartics2Woopra = /** @class */ (function () {
    function Angulartics2Woopra(angulartics2) {
        var _this = this;
        this.angulartics2 = angulartics2;
        if (typeof (woopra) === 'undefined') {
            console.warn('Woopra not found');
        }
        this.angulartics2.setUserProperties
            .subscribe(function (x) { return _this.setUserProperties(x); });
    }
    /**
     * @return {?}
     */
    Angulartics2Woopra.prototype.startTracking = /**
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
    Angulartics2Woopra.prototype.pageTrack = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        try {
            woopra.track('pv', {
                url: path
            });
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * @param {?} action
     * @param {?} properties
     * @return {?}
     */
    Angulartics2Woopra.prototype.eventTrack = /**
     * @param {?} action
     * @param {?} properties
     * @return {?}
     */
    function (action, properties) {
        try {
            woopra.track(action, properties);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * @param {?} properties
     * @return {?}
     */
    Angulartics2Woopra.prototype.setUserProperties = /**
     * @param {?} properties
     * @return {?}
     */
    function (properties) {
        try {
            if (properties.email) {
                woopra.identify(properties);
            }
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    Angulartics2Woopra.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    Angulartics2Woopra.ctorParameters = function () { return [
        { type: Angulartics2 }
    ]; };
    /** @nocollapse */ Angulartics2Woopra.ngInjectableDef = defineInjectable({ factory: function Angulartics2Woopra_Factory() { return new Angulartics2Woopra(inject(Angulartics2)); }, token: Angulartics2Woopra, providedIn: "root" });
    return Angulartics2Woopra;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { Angulartics2Woopra };

//# sourceMappingURL=angulartics2-woopra.js.map