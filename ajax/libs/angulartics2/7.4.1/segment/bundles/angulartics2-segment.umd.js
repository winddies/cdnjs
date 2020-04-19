(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('angulartics2')) :
    typeof define === 'function' && define.amd ? define('angulartics2/segment', ['exports', '@angular/core', 'angulartics2'], factory) :
    (factory((global.angulartics2 = global.angulartics2 || {}, global.angulartics2.segment = {}),global.ng.core,global.angulartics2));
}(this, (function (exports,i0,i1) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Angulartics2Segment = /** @class */ (function () {
        function Angulartics2Segment(angulartics2) {
            var _this = this;
            this.angulartics2 = angulartics2;
            this.angulartics2.setUserProperties
                .subscribe(function (x) { return _this.setUserProperties(x); });
            this.angulartics2.setUserPropertiesOnce
                .subscribe(function (x) { return _this.setUserProperties(x); });
            this.angulartics2.setAlias
                .subscribe(function (x) { return _this.setAlias(x); });
        }
        /**
         * @return {?}
         */
        Angulartics2Segment.prototype.startTracking = /**
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
         * https://segment.com/docs/libraries/analytics.js/#page
         *
         * analytics.page([category], [name], [properties], [options], [callback]);
         */
        /**
         * https://segment.com/docs/libraries/analytics.js/#page
         *
         * analytics.page([category], [name], [properties], [options], [callback]);
         * @param {?} path
         * @return {?}
         */
        Angulartics2Segment.prototype.pageTrack = /**
         * https://segment.com/docs/libraries/analytics.js/#page
         *
         * analytics.page([category], [name], [properties], [options], [callback]);
         * @param {?} path
         * @return {?}
         */
            function (path) {
                // TODO : Support optional parameters where the parameter order and type changes their meaning
                try {
                    analytics.page(path);
                }
                catch (e) {
                    if (!(e instanceof ReferenceError)) {
                        throw e;
                    }
                }
            };
        /**
         * https://segment.com/docs/libraries/analytics.js/#track
         *
         * analytics.track(event, [properties], [options], [callback]);
         */
        /**
         * https://segment.com/docs/libraries/analytics.js/#track
         *
         * analytics.track(event, [properties], [options], [callback]);
         * @param {?} action
         * @param {?} properties
         * @return {?}
         */
        Angulartics2Segment.prototype.eventTrack = /**
         * https://segment.com/docs/libraries/analytics.js/#track
         *
         * analytics.track(event, [properties], [options], [callback]);
         * @param {?} action
         * @param {?} properties
         * @return {?}
         */
            function (action, properties) {
                try {
                    analytics.track(action, properties);
                }
                catch (e) {
                    if (!(e instanceof ReferenceError)) {
                        throw e;
                    }
                }
            };
        /**
         * https://segment.com/docs/libraries/analytics.js/#identify
         *
         * analytics.identify([userId], [traits], [options], [callback]);
         */
        /**
         * https://segment.com/docs/libraries/analytics.js/#identify
         *
         * analytics.identify([userId], [traits], [options], [callback]);
         * @param {?} properties
         * @return {?}
         */
        Angulartics2Segment.prototype.setUserProperties = /**
         * https://segment.com/docs/libraries/analytics.js/#identify
         *
         * analytics.identify([userId], [traits], [options], [callback]);
         * @param {?} properties
         * @return {?}
         */
            function (properties) {
                try {
                    if (properties.userId) {
                        analytics.identify(properties.userId, properties);
                    }
                    else {
                        analytics.identify(properties);
                    }
                }
                catch (e) {
                    if (!(e instanceof ReferenceError)) {
                        throw e;
                    }
                }
            };
        /**
         * https://segment.com/docs/libraries/analytics.js/#alias
         *
         * analytics.alias(userId, previousId, options, callback);
         */
        /**
         * https://segment.com/docs/libraries/analytics.js/#alias
         *
         * analytics.alias(userId, previousId, options, callback);
         * @param {?} alias
         * @return {?}
         */
        Angulartics2Segment.prototype.setAlias = /**
         * https://segment.com/docs/libraries/analytics.js/#alias
         *
         * analytics.alias(userId, previousId, options, callback);
         * @param {?} alias
         * @return {?}
         */
            function (alias) {
                try {
                    analytics.alias(alias);
                }
                catch (e) {
                    if (!(e instanceof ReferenceError)) {
                        throw e;
                    }
                }
            };
        Angulartics2Segment.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        Angulartics2Segment.ctorParameters = function () {
            return [
                { type: i1.Angulartics2 }
            ];
        };
        /** @nocollapse */ Angulartics2Segment.ngInjectableDef = i0.defineInjectable({ factory: function Angulartics2Segment_Factory() { return new Angulartics2Segment(i0.inject(i1.Angulartics2)); }, token: Angulartics2Segment, providedIn: "root" });
        return Angulartics2Segment;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.Angulartics2Segment = Angulartics2Segment;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=angulartics2-segment.umd.js.map