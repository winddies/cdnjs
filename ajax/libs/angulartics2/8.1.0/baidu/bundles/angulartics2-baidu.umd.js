(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('angulartics2')) :
    typeof define === 'function' && define.amd ? define('angulartics2/baidu', ['exports', '@angular/core', 'angulartics2'], factory) :
    (global = global || self, factory((global.angulartics2 = global.angulartics2 || {}, global.angulartics2.baidu = {}), global.ng.core, global.angulartics2));
}(this, function (exports, core, angulartics2) { 'use strict';

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
        Angulartics2BaiduAnalytics.prototype.startTracking = function () {
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
        Angulartics2BaiduAnalytics.prototype.pageTrack = function (path) {
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
        Angulartics2BaiduAnalytics.prototype.eventTrack = function (action, properties) {
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
        Angulartics2BaiduAnalytics.prototype.setUsername = function (userId) {
            // set default custom variables name to 'identity' and 'value'
            _hmt.push(['_setCustomVar', 1, 'identity', userId]);
        };
        Angulartics2BaiduAnalytics.prototype.setUserProperties = function (properties) {
            _hmt.push(['_setCustomVar', 2, 'user', JSON.stringify(properties)]);
        };
        Angulartics2BaiduAnalytics.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function Angulartics2BaiduAnalytics_Factory() { return new Angulartics2BaiduAnalytics(core.ɵɵinject(angulartics2.Angulartics2)); }, token: Angulartics2BaiduAnalytics, providedIn: "root" });
        Angulartics2BaiduAnalytics = __decorate([
            core.Injectable({ providedIn: 'root' }),
            __metadata("design:paramtypes", [angulartics2.Angulartics2])
        ], Angulartics2BaiduAnalytics);
        return Angulartics2BaiduAnalytics;
    }());

    exports.Angulartics2BaiduAnalytics = Angulartics2BaiduAnalytics;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=angulartics2-baidu.umd.js.map
