(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('angulartics2')) :
    typeof define === 'function' && define.amd ? define('angulartics2/launch', ['exports', '@angular/core', 'angulartics2'], factory) :
    (factory((global.angulartics2 = global.angulartics2 || {}, global.angulartics2.launch = {}),global.ng.core,global.angulartics2));
}(this, (function (exports,i0,i1) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Angulartics2LaunchByAdobe = /** @class */ (function () {
        function Angulartics2LaunchByAdobe(angulartics2) {
            var _this = this;
            this.angulartics2 = angulartics2;
            this.payload = {};
            if ('undefined' === typeof _satellite) {
                console.warn('Launch not found!');
            }
            this.angulartics2.setUsername
                .subscribe(function (x) { return _this.setUsername(x); });
            this.angulartics2.setUserProperties
                .subscribe(function (x) { return _this.setUserProperties(x); });
        }
        /**
         * @param {?} userId
         * @return {?}
         */
        Angulartics2LaunchByAdobe.prototype.setUsername = /**
         * @param {?} userId
         * @return {?}
         */
            function (userId) {
                if ('undefined' !== typeof userId && userId) {
                    this.payload.userId = userId;
                }
            };
        /**
         * @param {?} properties
         * @return {?}
         */
        Angulartics2LaunchByAdobe.prototype.setUserProperties = /**
         * @param {?} properties
         * @return {?}
         */
            function (properties) {
                if ('undefined' !== typeof properties && properties) {
                    this.payload.properties = properties;
                }
            };
        /**
         * @return {?}
         */
        Angulartics2LaunchByAdobe.prototype.startTracking = /**
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
        Angulartics2LaunchByAdobe.prototype.pageTrack = /**
         * @param {?} path
         * @return {?}
         */
            function (path) {
                this.payload = this.payload || {};
                this.payload.path = path;
                if ('undefined' !== typeof _satellite && _satellite) {
                    _satellite.track('pageTrack', this.payload);
                }
            };
        /**
         * @param action associated with the event
         * @param properties associated with the event
         */
        /**
         * @param {?} action associated with the event
         * @param {?} properties associated with the event
         * @return {?}
         */
        Angulartics2LaunchByAdobe.prototype.eventTrack = /**
         * @param {?} action associated with the event
         * @param {?} properties associated with the event
         * @return {?}
         */
            function (action, properties) {
                properties = properties || {};
                // add properties to payload
                this.payload.action = action;
                this.payload.eventProperties = properties;
                if ('undefined' !== typeof _satellite && _satellite) {
                    _satellite.track('eventTrack', this.payload);
                }
            };
        Angulartics2LaunchByAdobe.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        Angulartics2LaunchByAdobe.ctorParameters = function () {
            return [
                { type: i1.Angulartics2 }
            ];
        };
        /** @nocollapse */ Angulartics2LaunchByAdobe.ngInjectableDef = i0.defineInjectable({ factory: function Angulartics2LaunchByAdobe_Factory() { return new Angulartics2LaunchByAdobe(i0.inject(i1.Angulartics2)); }, token: Angulartics2LaunchByAdobe, providedIn: "root" });
        return Angulartics2LaunchByAdobe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.Angulartics2LaunchByAdobe = Angulartics2LaunchByAdobe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=angulartics2-launch.umd.js.map