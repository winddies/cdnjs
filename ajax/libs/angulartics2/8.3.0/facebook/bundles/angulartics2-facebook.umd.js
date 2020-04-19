(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('angulartics2')) :
    typeof define === 'function' && define.amd ? define('angulartics2/facebook', ['exports', '@angular/core', 'angulartics2'], factory) :
    (global = global || self, factory((global.angulartics2 = global.angulartics2 || {}, global.angulartics2.facebook = {}), global.ng.core, global.angulartics2));
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

    var facebookEventList = [
        'ViewContent',
        'Search',
        'AddToCart',
        'AddToWishlist',
        'InitiateCheckout',
        'AddPaymentInfo',
        'Purchase',
        'Lead',
        'CompleteRegistration',
    ];
    var Angulartics2Facebook = /** @class */ (function () {
        function Angulartics2Facebook(angulartics2) {
            this.angulartics2 = angulartics2;
        }
        Angulartics2Facebook.prototype.startTracking = function () {
            var _this = this;
            this.angulartics2.eventTrack
                .pipe(this.angulartics2.filterDeveloperMode())
                .subscribe(function (x) { return _this.eventTrack(x.action, x.properties); });
        };
        /**
         * Send interactions to the Pixel, i.e. for event tracking in Pixel
         *
         * @param action action associated with the event
         */
        Angulartics2Facebook.prototype.eventTrack = function (action, properties) {
            if (properties === void 0) { properties = {}; }
            if (typeof fbq === 'undefined') {
                return;
            }
            if (facebookEventList.indexOf(action) === -1) {
                return fbq('trackCustom', action, properties);
            }
            return fbq('track', action, properties);
        };
        Angulartics2Facebook.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function Angulartics2Facebook_Factory() { return new Angulartics2Facebook(core.ɵɵinject(angulartics2.Angulartics2)); }, token: Angulartics2Facebook, providedIn: "root" });
        Angulartics2Facebook = __decorate([
            core.Injectable({ providedIn: 'root' }),
            __metadata("design:paramtypes", [angulartics2.Angulartics2])
        ], Angulartics2Facebook);
        return Angulartics2Facebook;
    }());

    exports.Angulartics2Facebook = Angulartics2Facebook;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=angulartics2-facebook.umd.js.map
