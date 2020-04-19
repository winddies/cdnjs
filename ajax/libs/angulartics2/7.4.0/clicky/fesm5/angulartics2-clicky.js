import { Injectable, defineInjectable, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Angulartics2 } from 'angulartics2';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Angulartics2Clicky = /** @class */ (function () {
    function Angulartics2Clicky(angulartics2, titleService) {
        this.angulartics2 = angulartics2;
        this.titleService = titleService;
        if (typeof clicky === 'undefined') {
            console.warn('Angulartics 2 Clicky Plugin: clicky global not found');
        }
    }
    /**
     * @return {?}
     */
    Angulartics2Clicky.prototype.startTracking = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.angulartics2.pageTrack
            .pipe(this.angulartics2.filterDeveloperMode())
            .subscribe(function (x) { return _this.pageTrack(x.path); });
        this.angulartics2.eventTrack
            .pipe(this.angulartics2.filterDeveloperMode())
            .subscribe(function (x) { return _this.eventOrGoalTrack(x.action, x.properties); });
    };
    /**
     * Track Page in Clicky
     *
     * @param path location
     *
     * @link https://clicky.com/help/custom/manual#log
     */
    /**
     * Track Page in Clicky
     *
     * @link https://clicky.com/help/custom/manual#log
     * @param {?} path location
     *
     * @return {?}
     */
    Angulartics2Clicky.prototype.pageTrack = /**
     * Track Page in Clicky
     *
     * @link https://clicky.com/help/custom/manual#log
     * @param {?} path location
     *
     * @return {?}
     */
    function (path) {
        /** @type {?} */
        var title = this.titleService.getTitle();
        clicky.log(path, title, 'pageview');
    };
    /**
     * Track Event Or Goal in Clicky
     *
     * @param action Action name
     * @param properties Definition of 'properties.goal' determines goal vs event tracking
     *
     * @link https://clicky.com/help/custom/manual#log
     * @link https://clicky.com/help/custom/manual#goal
     */
    /**
     * Track Event Or Goal in Clicky
     *
     * @link https://clicky.com/help/custom/manual#log / https://clicky.com/help/custom/manual#goal
     * @param {?} action Action name
     * @param {?} properties Definition of 'properties.goal' determines goal vs event tracking
     *
     * @return {?}
     */
    Angulartics2Clicky.prototype.eventOrGoalTrack = /**
     * Track Event Or Goal in Clicky
     *
     * @link https://clicky.com/help/custom/manual#log / https://clicky.com/help/custom/manual#goal
     * @param {?} action Action name
     * @param {?} properties Definition of 'properties.goal' determines goal vs event tracking
     *
     * @return {?}
     */
    function (action, properties) {
        if (typeof properties.goal === 'undefined') {
            /** @type {?} */
            var title = properties.title || null;
            /** @type {?} */
            var type = properties.type != null ? this.validateType(properties.type) : null;
            clicky.log(action, title, type);
        }
        else {
            /** @type {?} */
            var goalId = properties.goal;
            /** @type {?} */
            var revenue = properties.revenue;
            clicky.goal(goalId, revenue, !!properties.noQueue);
        }
    };
    /**
     * @private
     * @param {?} type
     * @return {?}
     */
    Angulartics2Clicky.prototype.validateType = /**
     * @private
     * @param {?} type
     * @return {?}
     */
    function (type) {
        /** @type {?} */
        var EventType = ['pageview', 'click', 'download', 'outbound'];
        return EventType.indexOf(type) > -1 ? type : 'pageview';
    };
    Angulartics2Clicky.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    Angulartics2Clicky.ctorParameters = function () { return [
        { type: Angulartics2 },
        { type: Title }
    ]; };
    /** @nocollapse */ Angulartics2Clicky.ngInjectableDef = defineInjectable({ factory: function Angulartics2Clicky_Factory() { return new Angulartics2Clicky(inject(Angulartics2), inject(Title)); }, token: Angulartics2Clicky, providedIn: "root" });
    return Angulartics2Clicky;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { Angulartics2Clicky };

//# sourceMappingURL=angulartics2-clicky.js.map