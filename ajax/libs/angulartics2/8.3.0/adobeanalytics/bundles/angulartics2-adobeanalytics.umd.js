(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('angulartics2')) :
    typeof define === 'function' && define.amd ? define('angulartics2/adobeanalytics', ['exports', '@angular/common', '@angular/core', 'angulartics2'], factory) :
    (global = global || self, factory((global.angulartics2 = global.angulartics2 || {}, global.angulartics2.adobeanalytics = {}), global.ng.common, global.ng.core, global.angulartics2));
}(this, function (exports, common, core, angulartics2) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    var Angulartics2AdobeAnalytics = /** @class */ (function () {
        function Angulartics2AdobeAnalytics(angulartics2, location) {
            var _this = this;
            this.angulartics2 = angulartics2;
            this.location = location;
            this.angulartics2.setUserProperties
                .subscribe(function (x) { return _this.setUserProperties(x); });
        }
        Angulartics2AdobeAnalytics.prototype.startTracking = function () {
            var _this = this;
            this.angulartics2.pageTrack
                .pipe(this.angulartics2.filterDeveloperMode())
                .subscribe(function (x) { return _this.pageTrack(x.path); });
            this.angulartics2.eventTrack
                .pipe(this.angulartics2.filterDeveloperMode())
                .subscribe(function (x) { return _this.eventTrack(x.action, x.properties); });
        };
        Angulartics2AdobeAnalytics.prototype.pageTrack = function (path) {
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
        Angulartics2AdobeAnalytics.prototype.eventTrack = function (action, properties) {
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
                    var linkName = (properties['linkName']) ? properties['linkName'] : action;
                    // note that 'this' should refer the link element, but we can't get that in this function. example:
                    // <a href="http://anothersite.com" onclick="s.tl(this,'e','AnotherSite',null)">
                    // if disableDelay property is passed, use that to turn off/on the 500ms delay; otherwise, it uses this
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
        Angulartics2AdobeAnalytics.prototype.setPageName = function () {
            var path = this.location.path(true);
            var hashNdx = path.indexOf('#');
            if (hashNdx > 0 && hashNdx < path.length) {
                s.pageName = path.substring(hashNdx + 1);
            }
            else {
                s.pageName = path;
            }
        };
        Angulartics2AdobeAnalytics.prototype.setUserProperties = function (properties) {
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
        Angulartics2AdobeAnalytics.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function Angulartics2AdobeAnalytics_Factory() { return new Angulartics2AdobeAnalytics(core.ɵɵinject(angulartics2.Angulartics2), core.ɵɵinject(common.Location)); }, token: Angulartics2AdobeAnalytics, providedIn: "root" });
        Angulartics2AdobeAnalytics = __decorate([
            core.Injectable({ providedIn: 'root' }),
            __metadata("design:paramtypes", [angulartics2.Angulartics2,
                common.Location])
        ], Angulartics2AdobeAnalytics);
        return Angulartics2AdobeAnalytics;
    }());

    exports.Angulartics2AdobeAnalytics = Angulartics2AdobeAnalytics;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=angulartics2-adobeanalytics.umd.js.map
