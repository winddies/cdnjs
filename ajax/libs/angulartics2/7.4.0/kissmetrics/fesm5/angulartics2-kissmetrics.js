import { Injectable, defineInjectable, inject } from '@angular/core';
import { Angulartics2 } from 'angulartics2';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Angulartics2Kissmetrics = /** @class */ (function () {
    function Angulartics2Kissmetrics(angulartics2) {
        var _this = this;
        this.angulartics2 = angulartics2;
        if (typeof (_kmq) === 'undefined') {
            _kmq = [];
        }
        this.angulartics2.setUsername
            .subscribe(function (x) { return _this.setUsername(x); });
        this.angulartics2.setUserProperties
            .subscribe(function (x) { return _this.setUserProperties(x); });
    }
    /**
     * @return {?}
     */
    Angulartics2Kissmetrics.prototype.startTracking = /**
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
    Angulartics2Kissmetrics.prototype.pageTrack = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        _kmq.push(['record', 'Pageview', { 'Page': path }]);
    };
    /**
     * @param {?} action
     * @param {?} properties
     * @return {?}
     */
    Angulartics2Kissmetrics.prototype.eventTrack = /**
     * @param {?} action
     * @param {?} properties
     * @return {?}
     */
    function (action, properties) {
        _kmq.push(['record', action, properties]);
    };
    /**
     * @param {?} userId
     * @return {?}
     */
    Angulartics2Kissmetrics.prototype.setUsername = /**
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        _kmq.push(['identify', userId]);
    };
    /**
     * @param {?} properties
     * @return {?}
     */
    Angulartics2Kissmetrics.prototype.setUserProperties = /**
     * @param {?} properties
     * @return {?}
     */
    function (properties) {
        _kmq.push(['set', properties]);
    };
    Angulartics2Kissmetrics.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    Angulartics2Kissmetrics.ctorParameters = function () { return [
        { type: Angulartics2 }
    ]; };
    /** @nocollapse */ Angulartics2Kissmetrics.ngInjectableDef = defineInjectable({ factory: function Angulartics2Kissmetrics_Factory() { return new Angulartics2Kissmetrics(inject(Angulartics2)); }, token: Angulartics2Kissmetrics, providedIn: "root" });
    return Angulartics2Kissmetrics;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { Angulartics2Kissmetrics };

//# sourceMappingURL=angulartics2-kissmetrics.js.map