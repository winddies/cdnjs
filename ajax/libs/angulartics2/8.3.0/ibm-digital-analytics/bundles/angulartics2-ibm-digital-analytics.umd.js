(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('angulartics2')) :
    typeof define === 'function' && define.amd ? define('angulartics2/ibm-digital-analytics', ['exports', '@angular/core', 'angulartics2'], factory) :
    (global = global || self, factory((global.angulartics2 = global.angulartics2 || {}, global.angulartics2['ibm-digital-analytics'] = {}), global.ng.core, global.angulartics2));
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

    var Angulartics2IBMDigitalAnalytics = /** @class */ (function () {
        function Angulartics2IBMDigitalAnalytics(angulartics2) {
            this.angulartics2 = angulartics2;
            if (typeof window['cmCreatePageviewTag'] !== 'function') {
                console.warn('Angulartics 2 IBM Digital Analytics Plugin: eluminate.js is not loaded');
            }
        }
        Angulartics2IBMDigitalAnalytics.prototype.startTracking = function () {
            var _this = this;
            this.angulartics2.pageTrack
                .pipe(this.angulartics2.filterDeveloperMode())
                .subscribe(function (x) { return _this.pageTrack(x.path); });
            this.angulartics2.eventTrack
                .pipe(this.angulartics2.filterDeveloperMode())
                .subscribe(function (x) { return _this.eventTrack(x.action, x.properties); });
        };
        /**
         * Track Page in IBM Digital Analytics
         *
         * @param path location
         *
         * @link https://www.ibm.com/support/knowledgecenter/SSPG9M/Implementation/impl_pageviewtag.html
         */
        Angulartics2IBMDigitalAnalytics.prototype.pageTrack = function (path) {
            var cmCreatePageviewTag = window['cmCreatePageviewTag'];
            cmCreatePageviewTag(path, null, null, null);
        };
        /**
         * Track an event in IBM Digital Analytics
         *
         * @param action A string corresponding to the type of event that needs to be tracked.
         * @param properties The properties that need to be logged with the event.
         */
        Angulartics2IBMDigitalAnalytics.prototype.eventTrack = function (action, properties) {
            if (properties === void 0) { properties = {}; }
            var cmDisplayShops = window['cmDisplayShops'];
            switch (action) {
                /**
                 * @description The Product View tag captures information about vdigitalDataiews of product detail pages.
                 *  The Product View tag should be called on the lowest level detail page for products, which is typically
                 *  the Product Details page. You can view example Product View tags below.
                 *
                 * @link https://www.ibm.com/support/knowledgecenter/SSPG9M/Implementation/impl_prodviewtag.html
                 */
                case 'cmCreateProductviewTag':
                    var cmCreateProductviewTag = window['cmCreateProductviewTag'];
                    cmCreateProductviewTag(properties.productId, properties.productName, properties.categoryId, properties.attrbute, properties.virtualCategory);
                    break;
                /**
                 * @description The Shop Action 5 tag captures data about selected products and which products are present in a shopping cart,
                 *  if any, when the cart is viewed.
                 *
                 * @link https://www.ibm.com/support/knowledgecenter/SSPG9M/Implementation/impl_shopact5tag.html
                 */
                case 'cmCreateShopAction5Tag':
                    var cmCreateShopAction5Tag = window['cmCreateShopAction5Tag'];
                    cmCreateShopAction5Tag(properties.productId, properties.productName, properties.quantity, properties.unitPrice, properties.categoryId, properties.attrbute, properties.extraFields, properties.virtualCategory);
                    cmDisplayShops();
                    break;
                /**
                 * @description The Shop Action 9 tag captures data about what products were purchased by a customer.
                 *  Like the Shop Action 5 tag, one tag should be sent for each product line item purchased. These tags should be sent
                 *  on the receipt or other completion page confirming a successful order.
                 *
                 * @link https://www.ibm.com/support/knowledgecenter/SSPG9M/Implementation/impl_shopact9tag.html
                 */
                case 'cmCreateShopAction9Tag':
                    var cmCreateShopAction9Tag = window['cmCreateShopAction9Tag'];
                    cmCreateShopAction9Tag(properties.productId, properties.productName, properties.quantity, properties.unitPrice, properties.registrationId, properties.orderId, properties.orderSubtotal, properties.categoryId, properties.attrbute, properties.extraFields);
                    cmDisplayShops();
                    break;
                /**
                 * @description The Order tag captures order header information such as Registration ID, order ID, order subtotal,
                 *  and shipping and handling. The Order tag should be sent on the receipt page confirming order completion.
                 *
                 * @link https://www.ibm.com/support/knowledgecenter/SSPG9M/Implementation/impl_ordertag.html
                 */
                case 'cmCreateOrderTag':
                    var cmCreateOrderTag = window['cmCreateOrderTag'];
                    cmCreateOrderTag(properties.orderId, properties.orderSubtotal, properties.orderShipping, properties.registrationId, properties.registrantCity, properties.registrantState, properties.registrantPostalCode, properties.attrbute, properties.extraFields);
                    break;
                /**
                 * @description The Registration tag creates a Lifetime Visitor Experience Profile (LIVE Profile) by associating a single
                 *  common Registration ID with the IBM® Digital Analytics permanent cookie set in every browser visiting the tagged site.
                 *
                 * @link https://www.ibm.com/support/knowledgecenter/SSPG9M/Implementation/impl_registrationtag.html
                 */
                case 'cmCreateRegistrationTag':
                    var cmCreateRegistrationTag = window['cmCreateRegistrationTag'];
                    cmCreateRegistrationTag(properties.registrationId, properties.registrantEmail, properties.registrantCity, properties.registrantState, properties.registrantPostalCode, properties.registrantCountry, properties.attrbute);
                    break;
                /**
                 * @description The Element tag is used to track intra-page content in IBM® Digital Analytics. Data collected by
                 *  the Element tag is used to populate values in the Element Categories and Top Viewed Elements reports.
                 *
                 * @link https://www.ibm.com/support/knowledgecenter/SSPG9M/Implementation/impl_elementtag.html
                 */
                case 'cmCreateElementTag':
                    var cmCreateElementTag = window['cmCreateElementTag'];
                    cmCreateElementTag(properties.elementId, properties.elementCategory, properties.attrbute);
                    break;
                /**
                 * @description The Conversion Event tag is employed for tracking of general non-commerce conversion events.
                 * The Conversion Event tag is used to populate values in the Conversion Events Reports and to create Key Segments.
                 * This tag and the reports it populates enable analysis of a wide variety of site activities.
                 *
                 * @link https://www.ibm.com/support/knowledgecenter/SSPG9M/Implementation/impl_conversioneventtag.html
                 */
                case 'cmCreateConversionEventTag':
                    var cmCreateConversionEventTag = window['cmCreateConversionEventTag'];
                    cmCreateConversionEventTag(properties.eventId, properties.actionType, properties.eventCategoryId, properties.points, properties.attrbute, properties.extraFields);
                    break;
                default:
                    console.warn('Unsupported Event Action');
            }
        };
        Angulartics2IBMDigitalAnalytics.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function Angulartics2IBMDigitalAnalytics_Factory() { return new Angulartics2IBMDigitalAnalytics(core.ɵɵinject(angulartics2.Angulartics2)); }, token: Angulartics2IBMDigitalAnalytics, providedIn: "root" });
        Angulartics2IBMDigitalAnalytics = __decorate([
            core.Injectable({ providedIn: 'root' }),
            __metadata("design:paramtypes", [angulartics2.Angulartics2])
        ], Angulartics2IBMDigitalAnalytics);
        return Angulartics2IBMDigitalAnalytics;
    }());

    exports.Angulartics2IBMDigitalAnalytics = Angulartics2IBMDigitalAnalytics;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=angulartics2-ibm-digital-analytics.umd.js.map
