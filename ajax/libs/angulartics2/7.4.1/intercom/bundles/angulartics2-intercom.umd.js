(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('angulartics2')) :
    typeof define === 'function' && define.amd ? define('angulartics2/intercom', ['exports', '@angular/core', 'angulartics2'], factory) :
    (factory((global.angulartics2 = global.angulartics2 || {}, global.angulartics2.intercom = {}),global.ng.core,global.angulartics2));
}(this, (function (exports,i0,i1) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Angulartics2Intercom = /** @class */ (function () {
        function Angulartics2Intercom(angulartics2) {
            var _this = this;
            this.angulartics2 = angulartics2;
            this.angulartics2.setUserProperties
                .subscribe(function (x) { return _this.setUserProperties(x); });
            this.angulartics2.setUserPropertiesOnce
                .subscribe(function (x) { return _this.setUserProperties(x); });
        }
        /**
         * @return {?}
         */
        Angulartics2Intercom.prototype.startTracking = /**
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
        Angulartics2Intercom.prototype.pageTrack = /**
         * @param {?} path
         * @return {?}
         */
            function (path) {
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
            };
        /**
         * @param {?} action
         * @param {?} properties
         * @return {?}
         */
        Angulartics2Intercom.prototype.eventTrack = /**
         * @param {?} action
         * @param {?} properties
         * @return {?}
         */
            function (action, properties) {
                try {
                    Intercom('trackEvent', action, properties);
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
        Angulartics2Intercom.prototype.setUserProperties = /**
         * @param {?} properties
         * @return {?}
         */
            function (properties) {
                try {
                    if (properties.userId && !properties.user_id) {
                        properties.user_id = properties.userId;
                    }
                    Intercom('boot', properties);
                }
                catch (e) {
                    if (!(e instanceof ReferenceError)) {
                        throw e;
                    }
                }
            };
        Angulartics2Intercom.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        Angulartics2Intercom.ctorParameters = function () {
            return [
                { type: i1.Angulartics2 }
            ];
        };
        /** @nocollapse */ Angulartics2Intercom.ngInjectableDef = i0.defineInjectable({ factory: function Angulartics2Intercom_Factory() { return new Angulartics2Intercom(i0.inject(i1.Angulartics2)); }, token: Angulartics2Intercom, providedIn: "root" });
        return Angulartics2Intercom;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.Angulartics2Intercom = Angulartics2Intercom;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=angulartics2-intercom.umd.js.map