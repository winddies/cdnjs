(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('angulartics2')) :
    typeof define === 'function' && define.amd ? define('angulartics2/splunk', ['exports', '@angular/core', 'angulartics2'], factory) :
    (factory((global.angulartics2 = global.angulartics2 || {}, global.angulartics2.splunk = {}),global.ng.core,global.angulartics2));
}(this, (function (exports,i0,i1) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Angulartics2Splunk = /** @class */ (function () {
        function Angulartics2Splunk(angulartics2) {
            this.angulartics2 = angulartics2;
            if (typeof (sp) === 'undefined') {
                console.warn('Splunk not found');
            }
        }
        /**
         * @return {?}
         */
        Angulartics2Splunk.prototype.startTracking = /**
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
        Angulartics2Splunk.prototype.pageTrack = /**
         * @param {?} path
         * @return {?}
         */
            function (path) {
                try {
                    sp.pageview(path);
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
        Angulartics2Splunk.prototype.eventTrack = /**
         * @param {?} action
         * @param {?} properties
         * @return {?}
         */
            function (action, properties) {
                try {
                    sp.track(action, properties);
                }
                catch (e) {
                    if (!(e instanceof ReferenceError)) {
                        throw e;
                    }
                }
            };
        Angulartics2Splunk.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        Angulartics2Splunk.ctorParameters = function () {
            return [
                { type: i1.Angulartics2 }
            ];
        };
        /** @nocollapse */ Angulartics2Splunk.ngInjectableDef = i0.defineInjectable({ factory: function Angulartics2Splunk_Factory() { return new Angulartics2Splunk(i0.inject(i1.Angulartics2)); }, token: Angulartics2Splunk, providedIn: "root" });
        return Angulartics2Splunk;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.Angulartics2Splunk = Angulartics2Splunk;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=angulartics2-splunk.umd.js.map