(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser'), require('angulartics2')) :
    typeof define === 'function' && define.amd ? define('angulartics2/clicky', ['exports', '@angular/core', '@angular/platform-browser', 'angulartics2'], factory) :
    (global = global || self, factory((global.angulartics2 = global.angulartics2 || {}, global.angulartics2.clicky = {}), global.ng.core, global.ng.platformBrowser, global.angulartics2));
}(this, function (exports, core, platformBrowser, angulartics2) { 'use strict';

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

    var Angulartics2Clicky = /** @class */ (function () {
        function Angulartics2Clicky(angulartics2, titleService) {
            this.angulartics2 = angulartics2;
            this.titleService = titleService;
            if (typeof clicky === 'undefined') {
                console.warn('Angulartics 2 Clicky Plugin: clicky global not found');
            }
        }
        Angulartics2Clicky.prototype.startTracking = function () {
            var _this = this;
            this.angulartics2.pageTrack
                .pipe(this.angulartics2.filterDeveloperMode())
                .subscribe(function (x) { return _this.pageTrack(x.path); });
            this.angulartics2.eventTrack
                .pipe(this.angulartics2.filterDeveloperMode())
                .subscribe(function (x) { return _this.eventOrGoalTrack(x.action, x.properties); });
        };
        /**
         * Track Page in Clicky
         *
         * @param path location
         *
         * @link https://clicky.com/help/custom/manual#log
         */
        Angulartics2Clicky.prototype.pageTrack = function (path) {
            var title = this.titleService.getTitle();
            clicky.log(path, title, 'pageview');
        };
        /**
         * Track Event Or Goal in Clicky
         *
         * @param action Action name
         * @param properties Definition of 'properties.goal' determines goal vs event tracking
         *
         * @link https://clicky.com/help/custom/manual#log
         * @link https://clicky.com/help/custom/manual#goal
         */
        Angulartics2Clicky.prototype.eventOrGoalTrack = function (action, properties) {
            if (typeof properties.goal === 'undefined') {
                var title = properties.title || null;
                var type = properties.type != null ? this.validateType(properties.type) : null;
                clicky.log(action, title, type);
            }
            else {
                var goalId = properties.goal;
                var revenue = properties.revenue;
                clicky.goal(goalId, revenue, !!properties.noQueue);
            }
        };
        Angulartics2Clicky.prototype.validateType = function (type) {
            var EventType = ['pageview', 'click', 'download', 'outbound'];
            return EventType.indexOf(type) > -1 ? type : 'pageview';
        };
        Angulartics2Clicky.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function Angulartics2Clicky_Factory() { return new Angulartics2Clicky(core.ɵɵinject(angulartics2.Angulartics2), core.ɵɵinject(platformBrowser.Title)); }, token: Angulartics2Clicky, providedIn: "root" });
        Angulartics2Clicky = __decorate([
            core.Injectable({ providedIn: 'root' }),
            __metadata("design:paramtypes", [angulartics2.Angulartics2,
                platformBrowser.Title])
        ], Angulartics2Clicky);
        return Angulartics2Clicky;
    }());

    exports.Angulartics2Clicky = Angulartics2Clicky;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=angulartics2-clicky.umd.js.map
