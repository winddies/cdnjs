(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('angulartics2/ga-enhanced-ecom', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global.angulartics2 = global.angulartics2 || {}, global.angulartics2['ga-enhanced-ecom'] = {}), global.ng.core));
}(this, function (exports, core) { 'use strict';

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

    var Angulartics2GoogleAnalyticsEnhancedEcommerce = /** @class */ (function () {
        function Angulartics2GoogleAnalyticsEnhancedEcommerce() {
        }
        /**
         * Add impression in GA enhanced ecommerce tracking
         * @link https://developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce#measuring-activities
         */
        Angulartics2GoogleAnalyticsEnhancedEcommerce.prototype.ecAddImpression = function (properties) {
            ga('ec:addImpression', properties);
        };
        /**
         * Add product in GA enhanced ecommerce tracking
         * @link https://developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce
         */
        Angulartics2GoogleAnalyticsEnhancedEcommerce.prototype.ecAddProduct = function (product) {
            ga('ec:addProduct', product);
        };
        /**
         * Set action in GA enhanced ecommerce tracking
         * @link https://developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce
         */
        Angulartics2GoogleAnalyticsEnhancedEcommerce.prototype.ecSetAction = function (action, properties) {
            ga('ec:setAction', action, properties);
        };
        Angulartics2GoogleAnalyticsEnhancedEcommerce.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function Angulartics2GoogleAnalyticsEnhancedEcommerce_Factory() { return new Angulartics2GoogleAnalyticsEnhancedEcommerce(); }, token: Angulartics2GoogleAnalyticsEnhancedEcommerce, providedIn: "root" });
        Angulartics2GoogleAnalyticsEnhancedEcommerce = __decorate([
            core.Injectable({ providedIn: 'root' })
        ], Angulartics2GoogleAnalyticsEnhancedEcommerce);
        return Angulartics2GoogleAnalyticsEnhancedEcommerce;
    }());

    exports.Angulartics2GoogleAnalyticsEnhancedEcommerce = Angulartics2GoogleAnalyticsEnhancedEcommerce;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=angulartics2-ga-enhanced-ecom.umd.js.map
