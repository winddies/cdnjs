(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('angulartics2')) :
    typeof define === 'function' && define.amd ? define('angulartics2/mixpanel', ['exports', '@angular/core', 'angulartics2'], factory) :
    (factory((global.angulartics2 = global.angulartics2 || {}, global.angulartics2.mixpanel = {}),global.ng.core,global.angulartics2));
}(this, (function (exports,i0,i1) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Angulartics2Mixpanel = /** @class */ (function () {
        function Angulartics2Mixpanel(angulartics2) {
            var _this = this;
            this.angulartics2 = angulartics2;
            this.angulartics2.setUsername
                .subscribe(function (x) { return _this.setUsername(x); });
            this.angulartics2.setUserProperties
                .subscribe(function (x) { return _this.setUserProperties(x); });
            this.angulartics2.setUserPropertiesOnce
                .subscribe(function (x) { return _this.setUserPropertiesOnce(x); });
            this.angulartics2.setSuperProperties
                .subscribe(function (x) { return _this.setSuperProperties(x); });
            this.angulartics2.setSuperPropertiesOnce
                .subscribe(function (x) { return _this.setSuperPropertiesOnce(x); });
            this.angulartics2.setAlias
                .subscribe(function (x) { return _this.setAlias(x); });
        }
        /**
         * @return {?}
         */
        Angulartics2Mixpanel.prototype.startTracking = /**
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
        Angulartics2Mixpanel.prototype.pageTrack = /**
         * @param {?} path
         * @return {?}
         */
            function (path) {
                try {
                    mixpanel.track('Page Viewed', { page: path });
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
        Angulartics2Mixpanel.prototype.eventTrack = /**
         * @param {?} action
         * @param {?} properties
         * @return {?}
         */
            function (action, properties) {
                try {
                    mixpanel.track(action, properties);
                }
                catch (e) {
                    if (!(e instanceof ReferenceError)) {
                        throw e;
                    }
                }
            };
        /**
         * @param {?} userId
         * @return {?}
         */
        Angulartics2Mixpanel.prototype.setUsername = /**
         * @param {?} userId
         * @return {?}
         */
            function (userId) {
                try {
                    mixpanel.identify(userId);
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
        Angulartics2Mixpanel.prototype.setUserProperties = /**
         * @param {?} properties
         * @return {?}
         */
            function (properties) {
                try {
                    mixpanel.people.set(properties);
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
        Angulartics2Mixpanel.prototype.setUserPropertiesOnce = /**
         * @param {?} properties
         * @return {?}
         */
            function (properties) {
                try {
                    mixpanel.people.set_once(properties);
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
        Angulartics2Mixpanel.prototype.setSuperProperties = /**
         * @param {?} properties
         * @return {?}
         */
            function (properties) {
                try {
                    mixpanel.register(properties);
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
        Angulartics2Mixpanel.prototype.setSuperPropertiesOnce = /**
         * @param {?} properties
         * @return {?}
         */
            function (properties) {
                try {
                    mixpanel.register_once(properties);
                }
                catch (e) {
                    if (!(e instanceof ReferenceError)) {
                        throw e;
                    }
                }
            };
        /**
         * @param {?} alias
         * @return {?}
         */
        Angulartics2Mixpanel.prototype.setAlias = /**
         * @param {?} alias
         * @return {?}
         */
            function (alias) {
                try {
                    mixpanel.alias(alias);
                }
                catch (e) {
                    if (!(e instanceof ReferenceError)) {
                        throw e;
                    }
                }
            };
        Angulartics2Mixpanel.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        Angulartics2Mixpanel.ctorParameters = function () {
            return [
                { type: i1.Angulartics2 }
            ];
        };
        /** @nocollapse */ Angulartics2Mixpanel.ngInjectableDef = i0.defineInjectable({ factory: function Angulartics2Mixpanel_Factory() { return new Angulartics2Mixpanel(i0.inject(i1.Angulartics2)); }, token: Angulartics2Mixpanel, providedIn: "root" });
        return Angulartics2Mixpanel;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.Angulartics2Mixpanel = Angulartics2Mixpanel;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=angulartics2-mixpanel.umd.js.map