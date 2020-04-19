import { Injectable, defineInjectable, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Angulartics2 } from 'angulartics2';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Angulartics2Clicky {
    /**
     * @param {?} angulartics2
     * @param {?} titleService
     */
    constructor(angulartics2, titleService) {
        this.angulartics2 = angulartics2;
        this.titleService = titleService;
        if (typeof clicky === 'undefined') {
            console.warn('Angulartics 2 Clicky Plugin: clicky global not found');
        }
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
            .subscribe((x) => this.eventOrGoalTrack(x.action, x.properties));
    }
    /**
     * Track Page in Clicky
     *
     * @link https://clicky.com/help/custom/manual#log
     * @param {?} path location
     *
     * @return {?}
     */
    pageTrack(path) {
        /** @type {?} */
        const title = this.titleService.getTitle();
        clicky.log(path, title, 'pageview');
    }
    /**
     * Track Event Or Goal in Clicky
     *
     * @link https://clicky.com/help/custom/manual#log / https://clicky.com/help/custom/manual#goal
     * @param {?} action Action name
     * @param {?} properties Definition of 'properties.goal' determines goal vs event tracking
     *
     * @return {?}
     */
    eventOrGoalTrack(action, properties) {
        if (typeof properties.goal === 'undefined') {
            /** @type {?} */
            const title = properties.title || null;
            /** @type {?} */
            const type = properties.type != null ? this.validateType(properties.type) : null;
            clicky.log(action, title, type);
        }
        else {
            /** @type {?} */
            const goalId = properties.goal;
            /** @type {?} */
            const revenue = properties.revenue;
            clicky.goal(goalId, revenue, !!properties.noQueue);
        }
    }
    /**
     * @private
     * @param {?} type
     * @return {?}
     */
    validateType(type) {
        /** @type {?} */
        const EventType = ['pageview', 'click', 'download', 'outbound'];
        return EventType.indexOf(type) > -1 ? type : 'pageview';
    }
}
Angulartics2Clicky.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
Angulartics2Clicky.ctorParameters = () => [
    { type: Angulartics2 },
    { type: Title }
];
/** @nocollapse */ Angulartics2Clicky.ngInjectableDef = defineInjectable({ factory: function Angulartics2Clicky_Factory() { return new Angulartics2Clicky(inject(Angulartics2), inject(Title)); }, token: Angulartics2Clicky, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { Angulartics2Clicky };

//# sourceMappingURL=angulartics2-clicky.js.map