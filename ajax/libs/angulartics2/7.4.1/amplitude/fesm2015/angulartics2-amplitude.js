import { Injectable, defineInjectable, inject } from '@angular/core';
import { Angulartics2 } from 'angulartics2';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Angulartics2Amplitude {
    /**
     * @param {?} angulartics2
     */
    constructor(angulartics2) {
        this.angulartics2 = angulartics2;
        this.angulartics2.setUsername
            .subscribe((x) => this.setUsername(x));
        this.angulartics2.setUserProperties
            .subscribe((x) => this.setUserProperties(x));
        this.angulartics2.setUserPropertiesOnce
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
    }
    /**
     * @param {?} path
     * @return {?}
     */
    pageTrack(path) {
        try {
            this.eventTrack('Pageview', {
                url: path
            });
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * @param {?} action
     * @param {?} properties
     * @return {?}
     */
    eventTrack(action, properties) {
        try {
            amplitude.getInstance().logEvent(action, properties);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * @param {?} userId
     * @return {?}
     */
    setUsername(userId) {
        try {
            amplitude.getInstance().setUserId(userId);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * @param {?} properties
     * @return {?}
     */
    setUserProperties(properties) {
        try {
            amplitude.getInstance().setUserProperties(properties);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
}
Angulartics2Amplitude.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
Angulartics2Amplitude.ctorParameters = () => [
    { type: Angulartics2 }
];
/** @nocollapse */ Angulartics2Amplitude.ngInjectableDef = defineInjectable({ factory: function Angulartics2Amplitude_Factory() { return new Angulartics2Amplitude(inject(Angulartics2)); }, token: Angulartics2Amplitude, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { Angulartics2Amplitude };

//# sourceMappingURL=angulartics2-amplitude.js.map