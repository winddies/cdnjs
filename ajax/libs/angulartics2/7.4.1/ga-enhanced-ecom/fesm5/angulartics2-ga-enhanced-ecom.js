import { Injectable, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Angulartics2GoogleAnalyticsEnhancedEcommerce = /** @class */ (function () {
    function Angulartics2GoogleAnalyticsEnhancedEcommerce() {
    }
    /**
     * Add impression in GA enhanced ecommerce tracking
     * @link https://developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce#measuring-activities
     */
    /**
     * Add impression in GA enhanced ecommerce tracking
     * @link https://developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce#measuring-activities
     * @param {?} properties
     * @return {?}
     */
    Angulartics2GoogleAnalyticsEnhancedEcommerce.prototype.ecAddImpression = /**
     * Add impression in GA enhanced ecommerce tracking
     * @link https://developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce#measuring-activities
     * @param {?} properties
     * @return {?}
     */
    function (properties) {
        ga('ec:addImpression', properties);
    };
    /**
     * Add product in GA enhanced ecommerce tracking
     * @link https://developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce
     */
    /**
     * Add product in GA enhanced ecommerce tracking
     * @link https://developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce
     * @param {?} product
     * @return {?}
     */
    Angulartics2GoogleAnalyticsEnhancedEcommerce.prototype.ecAddProduct = /**
     * Add product in GA enhanced ecommerce tracking
     * @link https://developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce
     * @param {?} product
     * @return {?}
     */
    function (product) {
        ga('ec:addProduct', product);
    };
    /**
     * Set action in GA enhanced ecommerce tracking
     * @link https://developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce
     */
    /**
     * Set action in GA enhanced ecommerce tracking
     * @link https://developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce
     * @param {?} action
     * @param {?} properties
     * @return {?}
     */
    Angulartics2GoogleAnalyticsEnhancedEcommerce.prototype.ecSetAction = /**
     * Set action in GA enhanced ecommerce tracking
     * @link https://developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce
     * @param {?} action
     * @param {?} properties
     * @return {?}
     */
    function (action, properties) {
        ga('ec:setAction', action, properties);
    };
    Angulartics2GoogleAnalyticsEnhancedEcommerce.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ Angulartics2GoogleAnalyticsEnhancedEcommerce.ngInjectableDef = defineInjectable({ factory: function Angulartics2GoogleAnalyticsEnhancedEcommerce_Factory() { return new Angulartics2GoogleAnalyticsEnhancedEcommerce(); }, token: Angulartics2GoogleAnalyticsEnhancedEcommerce, providedIn: "root" });
    return Angulartics2GoogleAnalyticsEnhancedEcommerce;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { Angulartics2GoogleAnalyticsEnhancedEcommerce };

//# sourceMappingURL=angulartics2-ga-enhanced-ecom.js.map