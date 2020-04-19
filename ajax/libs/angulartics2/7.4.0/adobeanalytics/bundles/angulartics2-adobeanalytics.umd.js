(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('angulartics2')) :
    typeof define === 'function' && define.amd ? define('angulartics2/adobeanalytics', ['exports', '@angular/common', '@angular/core', 'angulartics2'], factory) :
    (factory((global.angulartics2 = global.angulartics2 || {}, global.angulartics2.adobeanalytics = {}),global.ng.common,global.ng.core,global.angulartics2));
}(this, (function (exports,i2,i0,i1) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Angulartics2AdobeAnalytics = /** @class */ (function () {
        function Angulartics2AdobeAnalytics(angulartics2, location) {
            var _this = this;
            this.angulartics2 = angulartics2;
            this.location = location;
            this.angulartics2.setUserProperties
                .subscribe(function (x) { return _this.setUserProperties(x); });
        }
        /**
         * @return {?}
         */
        Angulartics2AdobeAnalytics.prototype.startTracking = /**
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
        Angulartics2AdobeAnalytics.prototype.pageTrack = /**
         * @param {?} path
         * @return {?}
         */
            function (path) {
                if (typeof s !== 'undefined' && s) {
                    s.clearVars();
                    s.t({ pageName: path });
                }
            };
        /**
         * Track Event in Adobe Analytics
         *
         * @param action associated with the event
         * @param properties action detials
         *
         * @link https://marketing.adobe.com/resources/help/en_US/sc/implement/js_implementation.html
         */
        /**
         * Track Event in Adobe Analytics
         *
         * @link https://marketing.adobe.com/resources/help/en_US/sc/implement/js_implementation.html
         * @param {?} action associated with the event
         * @param {?} properties action detials
         *
         * @return {?}
         */
        Angulartics2AdobeAnalytics.prototype.eventTrack = /**
         * Track Event in Adobe Analytics
         *
         * @link https://marketing.adobe.com/resources/help/en_US/sc/implement/js_implementation.html
         * @param {?} action associated with the event
         * @param {?} properties action detials
         *
         * @return {?}
         */
            function (action, properties) {
                // TODO: make interface
                // @property {string} properties.category
                // @property {string} properties.label
                // @property {number} properties.value
                // @property {boolean} properties.noninteraction
                if (!properties) {
                    properties = properties || {};
                }
                if (typeof s !== 'undefined' && s) {
                    if (typeof properties === 'object') {
                        this.setUserProperties(properties);
                    }
                    if (action) {
                        // if linkName property is passed, use that; otherwise, the action is the linkName
                        /** @type {?} */
                        var linkName = (properties['linkName']) ? properties['linkName'] : action;
                        // note that 'this' should refer the link element, but we can't get that in this function. example:
                        // <a href="http://anothersite.com" onclick="s.tl(this,'e','AnotherSite',null)">
                        // if disableDelay property is passed, use that to turn off/on the 500ms delay; otherwise, it uses this
                        /** @type {?} */
                        var disableDelay = !!properties['disableDelay'] ? true : this;
                        // if action property is passed, use that; otherwise, the action remains unchanged
                        if (properties['action']) {
                            action = properties['action'];
                        }
                        this.setPageName();
                        if (action.toUpperCase() === 'DOWNLOAD') {
                            s.tl(disableDelay, 'd', linkName);
                        }
                        else if (action.toUpperCase() === 'EXIT') {
                            s.tl(disableDelay, 'e', linkName);
                        }
                        else {
                            s.tl(disableDelay, 'o', linkName);
                        }
                    }
                }
            };
        /**
         * @private
         * @return {?}
         */
        Angulartics2AdobeAnalytics.prototype.setPageName = /**
         * @private
         * @return {?}
         */
            function () {
                /** @type {?} */
                var path = this.location.path(true);
                /** @type {?} */
                var hashNdx = path.indexOf('#');
                if (hashNdx > 0 && hashNdx < path.length) {
                    s.pageName = path.substring(hashNdx + 1);
                }
                else {
                    s.pageName = path;
                }
            };
        /**
         * @param {?} properties
         * @return {?}
         */
        Angulartics2AdobeAnalytics.prototype.setUserProperties = /**
         * @param {?} properties
         * @return {?}
         */
            function (properties) {
                if (typeof s !== 'undefined' && s) {
                    if (typeof properties === 'object') {
                        for (var key in properties) {
                            if (properties.hasOwnProperty(key)) {
                                s[key] = properties[key];
                            }
                        }
                    }
                }
            };
        Angulartics2AdobeAnalytics.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        Angulartics2AdobeAnalytics.ctorParameters = function () {
            return [
                { type: i1.Angulartics2 },
                { type: i2.Location }
            ];
        };
        /** @nocollapse */ Angulartics2AdobeAnalytics.ngInjectableDef = i0.defineInjectable({ factory: function Angulartics2AdobeAnalytics_Factory() { return new Angulartics2AdobeAnalytics(i0.inject(i1.Angulartics2), i0.inject(i2.Location)); }, token: Angulartics2AdobeAnalytics, providedIn: "root" });
        return Angulartics2AdobeAnalytics;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.Angulartics2AdobeAnalytics = Angulartics2AdobeAnalytics;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=angulartics2-adobeanalytics.umd.js.map