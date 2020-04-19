(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('angulartics2')) :
    typeof define === 'function' && define.amd ? define('angulartics2/baidu', ['exports', '@angular/core', 'angulartics2'], factory) :
    (factory((global.angulartics2 = global.angulartics2 || {}, global.angulartics2.baidu = {}),global.ng.core,global.angulartics2));
}(this, (function (exports,i0,i1) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Angulartics2BaiduAnalytics = /** @class */ (function () {
        function Angulartics2BaiduAnalytics(angulartics2) {
            var _this = this;
            this.angulartics2 = angulartics2;
            if (typeof _hmt === 'undefined') {
                _hmt = [];
            }
            else {
                _hmt.push(['_setAutoPageview', false]);
            }
            this.angulartics2.setUsername
                .subscribe(function (x) { return _this.setUsername(x); });
            this.angulartics2.setUserProperties
                .subscribe(function (x) { return _this.setUserProperties(x); });
        }
        /**
         * @return {?}
         */
        Angulartics2BaiduAnalytics.prototype.startTracking = /**
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
         * Page Track in Baidu Analytics
         *
         * @param path Required url 'path'
         *
         * @link http://tongji.baidu.com/open/api/more?p=ref_trackPageview
         */
        /**
         * Page Track in Baidu Analytics
         *
         * @link http://tongji.baidu.com/open/api/more?p=ref_trackPageview
         * @param {?} path Required url 'path'
         *
         * @return {?}
         */
        Angulartics2BaiduAnalytics.prototype.pageTrack = /**
         * Page Track in Baidu Analytics
         *
         * @link http://tongji.baidu.com/open/api/more?p=ref_trackPageview
         * @param {?} path Required url 'path'
         *
         * @return {?}
         */
            function (path) {
                if (typeof _hmt !== 'undefined' && _hmt) {
                    _hmt.push(['_trackPageview', path]);
                }
            };
        /**
         * Track Event in Baidu Analytics
         *
         * @param action Name associated with the event
         * @param properties Comprised of:
         *  - 'category' (string)
         *  - 'opt_label' (string)
         *  - 'opt_value' (string)
         *
         * @link http://tongji.baidu.com/open/api/more?p=ref_trackEvent
         */
        /**
         * Track Event in Baidu Analytics
         *
         * @link http://tongji.baidu.com/open/api/more?p=ref_trackEvent
         * @param {?} action Name associated with the event
         * @param {?} properties Comprised of:
         *  - 'category' (string)
         *  - 'opt_label' (string)
         *  - 'opt_value' (string)
         *
         * @return {?}
         */
        Angulartics2BaiduAnalytics.prototype.eventTrack = /**
         * Track Event in Baidu Analytics
         *
         * @link http://tongji.baidu.com/open/api/more?p=ref_trackEvent
         * @param {?} action Name associated with the event
         * @param {?} properties Comprised of:
         *  - 'category' (string)
         *  - 'opt_label' (string)
         *  - 'opt_value' (string)
         *
         * @return {?}
         */
            function (action, properties) {
                // baidu analytics requires category
                if (!properties || !properties.category) {
                    properties = properties || {};
                    properties.category = 'Event';
                    properties.opt_label = 'default';
                    properties.opt_value = 'default';
                }
                if (typeof _hmt !== 'undefined' && _hmt) {
                    _hmt.push([
                        '_trackEvent',
                        properties.category,
                        action,
                        properties.opt_label,
                        properties.opt_value,
                    ]);
                }
            };
        /**
         * @param {?} userId
         * @return {?}
         */
        Angulartics2BaiduAnalytics.prototype.setUsername = /**
         * @param {?} userId
         * @return {?}
         */
            function (userId) {
                // set default custom variables name to 'identity' and 'value'
                _hmt.push(['_setCustomVar', 1, 'identity', userId]);
            };
        /**
         * @param {?} properties
         * @return {?}
         */
        Angulartics2BaiduAnalytics.prototype.setUserProperties = /**
         * @param {?} properties
         * @return {?}
         */
            function (properties) {
                _hmt.push(['_setCustomVar', 2, 'user', JSON.stringify(properties)]);
            };
        Angulartics2BaiduAnalytics.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        Angulartics2BaiduAnalytics.ctorParameters = function () {
            return [
                { type: i1.Angulartics2 }
            ];
        };
        /** @nocollapse */ Angulartics2BaiduAnalytics.ngInjectableDef = i0.defineInjectable({ factory: function Angulartics2BaiduAnalytics_Factory() { return new Angulartics2BaiduAnalytics(i0.inject(i1.Angulartics2)); }, token: Angulartics2BaiduAnalytics, providedIn: "root" });
        return Angulartics2BaiduAnalytics;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.Angulartics2BaiduAnalytics = Angulartics2BaiduAnalytics;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=angulartics2-baidu.umd.js.map