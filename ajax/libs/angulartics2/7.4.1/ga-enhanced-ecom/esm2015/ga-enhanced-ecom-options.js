/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Product and Promotion Actions
 *
 * Actions specify how to interpret product and promotion data that you send to Google Analytics.
 */
/**
 * Impression Data
 *
 * Represents information about a product that has been viewed. It is
 * referred to as an impressionFieldObject and contains the following values.
 *
 * @link https://developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce#impression-data
 * @record
 */
export function GaEnhancedEcomImpressionFieldObject() { }
if (false) {
    /**
     * The product ID or SKU (e.g. P67890). *Either this field or name must be set.
     * @type {?}
     */
    GaEnhancedEcomImpressionFieldObject.prototype.id;
    /**
     * The name of the product (e.g. Android T-Shirt). *Either this field or id must be set.
     * @type {?}
     */
    GaEnhancedEcomImpressionFieldObject.prototype.name;
    /**
     * The list or collection to which the product belongs (e.g. Search Results)
     * @type {?}
     */
    GaEnhancedEcomImpressionFieldObject.prototype.list;
    /**
     * The brand associated with the product (e.g. Google).
     * @type {?}
     */
    GaEnhancedEcomImpressionFieldObject.prototype.brand;
    /**
     * The category to which the product belongs (e.g. Apparel).
     * Use / as a delimiter to specify up to 5-levels of hierarchy (e.g. Apparel/Men/T-Shirts)
     * @type {?}
     */
    GaEnhancedEcomImpressionFieldObject.prototype.category;
    /**
     * The variant of the product (e.g. Black).
     * @type {?}
     */
    GaEnhancedEcomImpressionFieldObject.prototype.variant;
    /**
     * The product's position in a list or collection (e.g. 2)
     * @type {?}
     */
    GaEnhancedEcomImpressionFieldObject.prototype.position;
    /**
     * The price of a product (e.g. 29.20)
     * @type {?}
     */
    GaEnhancedEcomImpressionFieldObject.prototype.price;
}
/**
 * Product Data
 *
 * Product data represents individual products that were viewed, added
 * to the shopping cart, etc. It is referred to as a productFieldObject
 * and contains the following values.
 *
 * @link https://developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce#product-data
 * @record
 */
export function GaEnhancedEcomProductFieldObject() { }
if (false) {
    /**
     * The product ID or SKU (e.g. P67890). *Either this field or name must be set.
     * @type {?}
     */
    GaEnhancedEcomProductFieldObject.prototype.id;
    /**
     * The name of the product (e.g. Android T-Shirt). *Either this field or id must be set.
     * @type {?}
     */
    GaEnhancedEcomProductFieldObject.prototype.name;
    /**
     * The brand associated with the product (e.g. Google).
     * @type {?}
     */
    GaEnhancedEcomProductFieldObject.prototype.brand;
    /**
     * The category to which the product belongs (e.g. Apparel).
     * Use / as a delimiter to specify up to 5-levels of hierarchy (e.g. Apparel/Men/T-Shirts).
     * @type {?}
     */
    GaEnhancedEcomProductFieldObject.prototype.category;
    /**
     * The variant of the product (e.g. Black).
     * @type {?}
     */
    GaEnhancedEcomProductFieldObject.prototype.variant;
    /**
     * The price of a product (e.g. 29.20).
     * @type {?}
     */
    GaEnhancedEcomProductFieldObject.prototype.price;
    /**
     * The quantity of a product (e.g. 2).
     * @type {?}
     */
    GaEnhancedEcomProductFieldObject.prototype.quantity;
    /**
     * The coupon code associated with a product (e.g. SUMMER_SALE13).
     * @type {?}
     */
    GaEnhancedEcomProductFieldObject.prototype.coupon;
    /**
     * The product's position in a list or collection (e.g. 2).
     * @type {?}
     */
    GaEnhancedEcomProductFieldObject.prototype.position;
}
/**
 * Promotion Data
 *
 * Represents information about a promotion that has been viewed.
 * It is referred to a promoFieldObject and contains the following values.
 *
 * @link https://developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce#promotion-data
 * @record
 */
export function GaEnhancedEcomPromoFieldObject() { }
if (false) {
    /**
     * The promotion ID (e.g. PROMO_1234). *Either this field or name must be set.
     * @type {?}
     */
    GaEnhancedEcomPromoFieldObject.prototype.id;
    /**
     * The name of the promotion (e.g. Summer Sale). *Either this field or id must be set.
     * @type {?}
     */
    GaEnhancedEcomPromoFieldObject.prototype.name;
    /**
     * The creative associated with the promotion (e.g. summer_banner2).
     * @type {?}
     */
    GaEnhancedEcomPromoFieldObject.prototype.creative;
    /**
     * The position of the creative (e.g. banner_slot_1).
     * @type {?}
     */
    GaEnhancedEcomPromoFieldObject.prototype.position;
}
/**
 * Action Data
 *
 * Represents information about an ecommerce related action
 * that has taken place. It is referred to as an actionFieldObject
 * and contains the following values.
 *
 * @link https://developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce#action-data
 * @record
 */
export function GaEnhancedEcomActionFieldObject() { }
if (false) {
    /**
     * The transaction ID (e.g. T1234). *Required if the action type is purchase or refund.
     * @type {?}
     */
    GaEnhancedEcomActionFieldObject.prototype.id;
    /**
     * The store or affiliation from which this transaction occurred (e.g. Google Store).
     * @type {?}
     */
    GaEnhancedEcomActionFieldObject.prototype.affiliation;
    /**
     * Specifies the total revenue or grand total associated with the transaction (e.g. 11.99).
     * This value may include shipping, tax costs, or other adjustments to total revenue that
     * you want to include as part of your revenue calculations. Note: if revenue is not set,
     * its value will be automatically calculated using the product quantity and price fields
     * of all products in the same hit.
     * @type {?}
     */
    GaEnhancedEcomActionFieldObject.prototype.revenue;
    /**
     * The total tax associated with the transaction.
     * @type {?}
     */
    GaEnhancedEcomActionFieldObject.prototype.tax;
    /**
     * The shipping cost associated with the transaction.
     * @type {?}
     */
    GaEnhancedEcomActionFieldObject.prototype.shipping;
    /**
     * The transaction coupon redeemed with the transaction.
     * @type {?}
     */
    GaEnhancedEcomActionFieldObject.prototype.coupon;
    /**
     * The list that the associated products belong to. Optional.
     * @type {?}
     */
    GaEnhancedEcomActionFieldObject.prototype.list;
    /**
     * A number representing a step in the checkout process. Optional on checkout actions.
     * @type {?}
     */
    GaEnhancedEcomActionFieldObject.prototype.step;
    /**
     * Additional field for checkout and checkout_option actions that can describe
     * option information on the checkout page, like selected payment method.
     * @type {?}
     */
    GaEnhancedEcomActionFieldObject.prototype.option;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2EtZW5oYW5jZWQtZWNvbS1vcHRpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhcnRpY3MyL2dhLWVuaGFuY2VkLWVjb20vIiwic291cmNlcyI6WyJnYS1lbmhhbmNlZC1lY29tLW9wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBLHlEQW9CQzs7Ozs7O0lBbEJDLGlEQUFXOzs7OztJQUVYLG1EQUFhOzs7OztJQUViLG1EQUFhOzs7OztJQUViLG9EQUFjOzs7Ozs7SUFLZCx1REFBaUI7Ozs7O0lBRWpCLHNEQUFnQjs7Ozs7SUFFaEIsdURBQWlCOzs7OztJQUVqQixvREFBYzs7Ozs7Ozs7Ozs7O0FBWWhCLHNEQXNCQzs7Ozs7O0lBcEJDLDhDQUFXOzs7OztJQUVYLGdEQUFhOzs7OztJQUViLGlEQUFjOzs7Ozs7SUFLZCxvREFBaUI7Ozs7O0lBRWpCLG1EQUFnQjs7Ozs7SUFFaEIsaURBQWM7Ozs7O0lBRWQsb0RBQWlCOzs7OztJQUVqQixrREFBZTs7Ozs7SUFFZixvREFBaUI7Ozs7Ozs7Ozs7O0FBV25CLG9EQVNDOzs7Ozs7SUFQQyw0Q0FBVzs7Ozs7SUFFWCw4Q0FBYTs7Ozs7SUFFYixrREFBaUI7Ozs7O0lBRWpCLGtEQUFpQjs7Ozs7Ozs7Ozs7O0FBWW5CLHFEQTRCQzs7Ozs7O0lBMUJDLDZDQUFXOzs7OztJQUVYLHNEQUFvQjs7Ozs7Ozs7O0lBUXBCLGtEQUFnQjs7Ozs7SUFFaEIsOENBQVk7Ozs7O0lBRVosbURBQWlCOzs7OztJQUVqQixpREFBZTs7Ozs7SUFFZiwrQ0FBYTs7Ozs7SUFFYiwrQ0FBYTs7Ozs7O0lBS2IsaURBQWUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFByb2R1Y3QgYW5kIFByb21vdGlvbiBBY3Rpb25zXG4gKlxuICogQWN0aW9ucyBzcGVjaWZ5IGhvdyB0byBpbnRlcnByZXQgcHJvZHVjdCBhbmQgcHJvbW90aW9uIGRhdGEgdGhhdCB5b3Ugc2VuZCB0byBHb29nbGUgQW5hbHl0aWNzLlxuICovXG5cbmV4cG9ydCB0eXBlIEdhRW5oYW5jZWRFY29tQWN0aW9uID1cbiAgfCAnY2xpY2snIC8vIEEgY2xpY2sgb24gYSBwcm9kdWN0IG9yIHByb2R1Y3QgbGluayBmb3Igb25lIG9yIG1vcmUgcHJvZHVjdHMuXG4gIHwgJ2RldGFpbCcgLy8gQSB2aWV3IG9mIHByb2R1Y3QgZGV0YWlscy5cbiAgfCAnYWRkJyAvLyBBZGRpbmcgb25lIG9yIG1vcmUgcHJvZHVjdHMgdG8gYSBzaG9wcGluZyBjYXJ0LlxuICB8ICdyZW1vdmUnIC8vIFJlbW92ZSBvbmUgb3IgbW9yZSBwcm9kdWN0cyBmcm9tIGEgc2hvcHBpbmcgY2FydC5cbiAgfCAnY2hlY2tvdXQnIC8vIEluaXRpYXRpbmcgdGhlIGNoZWNrb3V0IHByb2Nlc3MgZm9yIG9uZSBvciBtb3JlIHByb2R1Y3RzLlxuICB8ICdjaGVja291dF9vcHRpb24nIC8vIFNlbmRpbmcgdGhlIG9wdGlvbiB2YWx1ZSBmb3IgYSBnaXZlbiBjaGVja291dCBzdGVwLlxuICB8ICdwdXJjaGFzZScgLy8gVGhlIHNhbGUgb2Ygb25lIG9yIG1vcmUgcHJvZHVjdHMuXG4gIHwgJ3JlZnVuZCcgLy8gVGhlIHJlZnVuZCBvZiBvbmUgb3IgbW9yZSBwcm9kdWN0cy5cbiAgfCAncHJvbW9fY2xpY2snOyAvLyBBIGNsaWNrIG9uIGFuIGludGVybmFsIHByb21vdGlvbi5cblxuLyoqXG4gKiBJbXByZXNzaW9uIERhdGFcbiAqXG4gKiBSZXByZXNlbnRzIGluZm9ybWF0aW9uIGFib3V0IGEgcHJvZHVjdCB0aGF0IGhhcyBiZWVuIHZpZXdlZC4gSXQgaXNcbiAqIHJlZmVycmVkIHRvIGFzIGFuIGltcHJlc3Npb25GaWVsZE9iamVjdCBhbmQgY29udGFpbnMgdGhlIGZvbGxvd2luZyB2YWx1ZXMuXG4gKlxuICogQGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL2FuYWx5dGljc2pzL2VuaGFuY2VkLWVjb21tZXJjZSNpbXByZXNzaW9uLWRhdGFcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBHYUVuaGFuY2VkRWNvbUltcHJlc3Npb25GaWVsZE9iamVjdCB7XG4gIC8qKiBUaGUgcHJvZHVjdCBJRCBvciBTS1UgKGUuZy4gUDY3ODkwKS4gKkVpdGhlciB0aGlzIGZpZWxkIG9yIG5hbWUgbXVzdCBiZSBzZXQuICovXG4gIGlkOiBzdHJpbmc7XG4gIC8qKiBUaGUgbmFtZSBvZiB0aGUgcHJvZHVjdCAoZS5nLiBBbmRyb2lkIFQtU2hpcnQpLiAqRWl0aGVyIHRoaXMgZmllbGQgb3IgaWQgbXVzdCBiZSBzZXQuICovXG4gIG5hbWU6IHN0cmluZztcbiAgLyoqIFRoZSBsaXN0IG9yIGNvbGxlY3Rpb24gdG8gd2hpY2ggdGhlIHByb2R1Y3QgYmVsb25ncyAoZS5nLiBTZWFyY2ggUmVzdWx0cykgKi9cbiAgbGlzdDogc3RyaW5nO1xuICAvKiogVGhlIGJyYW5kIGFzc29jaWF0ZWQgd2l0aCB0aGUgcHJvZHVjdCAoZS5nLiBHb29nbGUpLiAqL1xuICBicmFuZDogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIGNhdGVnb3J5IHRvIHdoaWNoIHRoZSBwcm9kdWN0IGJlbG9uZ3MgKGUuZy4gQXBwYXJlbCkuXG4gICAqIFVzZSAvIGFzIGEgZGVsaW1pdGVyIHRvIHNwZWNpZnkgdXAgdG8gNS1sZXZlbHMgb2YgaGllcmFyY2h5IChlLmcuIEFwcGFyZWwvTWVuL1QtU2hpcnRzKVxuICAgKi9cbiAgY2F0ZWdvcnk6IHN0cmluZztcbiAgLyoqIFRoZSB2YXJpYW50IG9mIHRoZSBwcm9kdWN0IChlLmcuIEJsYWNrKS4gKi9cbiAgdmFyaWFudDogc3RyaW5nO1xuICAvKiogVGhlIHByb2R1Y3QncyBwb3NpdGlvbiBpbiBhIGxpc3Qgb3IgY29sbGVjdGlvbiAoZS5nLiAyKSAqL1xuICBwb3NpdGlvbjogbnVtYmVyO1xuICAvKiogVGhlIHByaWNlIG9mIGEgcHJvZHVjdCAoZS5nLiAyOS4yMCkgKi9cbiAgcHJpY2U6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBQcm9kdWN0IERhdGFcbiAqXG4gKiBQcm9kdWN0IGRhdGEgcmVwcmVzZW50cyBpbmRpdmlkdWFsIHByb2R1Y3RzIHRoYXQgd2VyZSB2aWV3ZWQsIGFkZGVkXG4gKiB0byB0aGUgc2hvcHBpbmcgY2FydCwgZXRjLiBJdCBpcyByZWZlcnJlZCB0byBhcyBhIHByb2R1Y3RGaWVsZE9iamVjdFxuICogYW5kIGNvbnRhaW5zIHRoZSBmb2xsb3dpbmcgdmFsdWVzLlxuICpcbiAqIEBsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9hbmFseXRpY3Nqcy9lbmhhbmNlZC1lY29tbWVyY2UjcHJvZHVjdC1kYXRhXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgR2FFbmhhbmNlZEVjb21Qcm9kdWN0RmllbGRPYmplY3Qge1xuICAvKiogVGhlIHByb2R1Y3QgSUQgb3IgU0tVIChlLmcuIFA2Nzg5MCkuICpFaXRoZXIgdGhpcyBmaWVsZCBvciBuYW1lIG11c3QgYmUgc2V0LiAqL1xuICBpZDogc3RyaW5nO1xuICAvKiogVGhlIG5hbWUgb2YgdGhlIHByb2R1Y3QgKGUuZy4gQW5kcm9pZCBULVNoaXJ0KS4gKkVpdGhlciB0aGlzIGZpZWxkIG9yIGlkIG11c3QgYmUgc2V0LiAqL1xuICBuYW1lOiBzdHJpbmc7XG4gIC8qKiBUaGUgYnJhbmQgYXNzb2NpYXRlZCB3aXRoIHRoZSBwcm9kdWN0IChlLmcuIEdvb2dsZSkuICovXG4gIGJyYW5kOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgY2F0ZWdvcnkgdG8gd2hpY2ggdGhlIHByb2R1Y3QgYmVsb25ncyAoZS5nLiBBcHBhcmVsKS5cbiAgICogVXNlIC8gYXMgYSBkZWxpbWl0ZXIgdG8gc3BlY2lmeSB1cCB0byA1LWxldmVscyBvZiBoaWVyYXJjaHkgKGUuZy4gQXBwYXJlbC9NZW4vVC1TaGlydHMpLlxuICAgKi9cbiAgY2F0ZWdvcnk6IHN0cmluZztcbiAgLyoqIFRoZSB2YXJpYW50IG9mIHRoZSBwcm9kdWN0IChlLmcuIEJsYWNrKS4gKi9cbiAgdmFyaWFudDogc3RyaW5nO1xuICAvKiogVGhlIHByaWNlIG9mIGEgcHJvZHVjdCAoZS5nLiAyOS4yMCkuICovXG4gIHByaWNlOiBudW1iZXI7XG4gIC8qKiBUaGUgcXVhbnRpdHkgb2YgYSBwcm9kdWN0IChlLmcuIDIpLiAqL1xuICBxdWFudGl0eTogbnVtYmVyO1xuICAvKiogVGhlIGNvdXBvbiBjb2RlIGFzc29jaWF0ZWQgd2l0aCBhIHByb2R1Y3QgKGUuZy4gU1VNTUVSX1NBTEUxMykuICovXG4gIGNvdXBvbjogc3RyaW5nO1xuICAvKiogVGhlIHByb2R1Y3QncyBwb3NpdGlvbiBpbiBhIGxpc3Qgb3IgY29sbGVjdGlvbiAoZS5nLiAyKS4gKi9cbiAgcG9zaXRpb246IG51bWJlcjtcbn1cblxuLyoqXG4gKiBQcm9tb3Rpb24gRGF0YVxuICpcbiAqIFJlcHJlc2VudHMgaW5mb3JtYXRpb24gYWJvdXQgYSBwcm9tb3Rpb24gdGhhdCBoYXMgYmVlbiB2aWV3ZWQuXG4gKiBJdCBpcyByZWZlcnJlZCB0byBhIHByb21vRmllbGRPYmplY3QgYW5kIGNvbnRhaW5zIHRoZSBmb2xsb3dpbmcgdmFsdWVzLlxuICpcbiAqIEBsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9hbmFseXRpY3Nqcy9lbmhhbmNlZC1lY29tbWVyY2UjcHJvbW90aW9uLWRhdGFcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBHYUVuaGFuY2VkRWNvbVByb21vRmllbGRPYmplY3Qge1xuICAvKiogVGhlIHByb21vdGlvbiBJRCAoZS5nLiBQUk9NT18xMjM0KS4gKkVpdGhlciB0aGlzIGZpZWxkIG9yIG5hbWUgbXVzdCBiZSBzZXQuICovXG4gIGlkOiBzdHJpbmc7XG4gIC8qKiBUaGUgbmFtZSBvZiB0aGUgcHJvbW90aW9uIChlLmcuIFN1bW1lciBTYWxlKS4gKkVpdGhlciB0aGlzIGZpZWxkIG9yIGlkIG11c3QgYmUgc2V0LiAqL1xuICBuYW1lOiBzdHJpbmc7XG4gIC8qKiBUaGUgY3JlYXRpdmUgYXNzb2NpYXRlZCB3aXRoIHRoZSBwcm9tb3Rpb24gKGUuZy4gc3VtbWVyX2Jhbm5lcjIpLiAqL1xuICBjcmVhdGl2ZTogc3RyaW5nO1xuICAvKiogVGhlIHBvc2l0aW9uIG9mIHRoZSBjcmVhdGl2ZSAoZS5nLiBiYW5uZXJfc2xvdF8xKS4gKi9cbiAgcG9zaXRpb246IHN0cmluZztcbn1cblxuLyoqXG4gKiBBY3Rpb24gRGF0YVxuICpcbiAqIFJlcHJlc2VudHMgaW5mb3JtYXRpb24gYWJvdXQgYW4gZWNvbW1lcmNlIHJlbGF0ZWQgYWN0aW9uXG4gKiB0aGF0IGhhcyB0YWtlbiBwbGFjZS4gSXQgaXMgcmVmZXJyZWQgdG8gYXMgYW4gYWN0aW9uRmllbGRPYmplY3RcbiAqIGFuZCBjb250YWlucyB0aGUgZm9sbG93aW5nIHZhbHVlcy5cbiAqXG4gKiBAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vYW5hbHl0aWNzanMvZW5oYW5jZWQtZWNvbW1lcmNlI2FjdGlvbi1kYXRhXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgR2FFbmhhbmNlZEVjb21BY3Rpb25GaWVsZE9iamVjdCB7XG4gIC8qKiBUaGUgdHJhbnNhY3Rpb24gSUQgKGUuZy4gVDEyMzQpLiAqUmVxdWlyZWQgaWYgdGhlIGFjdGlvbiB0eXBlIGlzIHB1cmNoYXNlIG9yIHJlZnVuZC4gKi9cbiAgaWQ6IHN0cmluZztcbiAgLyoqIFRoZSBzdG9yZSBvciBhZmZpbGlhdGlvbiBmcm9tIHdoaWNoIHRoaXMgdHJhbnNhY3Rpb24gb2NjdXJyZWQgKGUuZy4gR29vZ2xlIFN0b3JlKS4gKi9cbiAgYWZmaWxpYXRpb246IHN0cmluZztcbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgdG90YWwgcmV2ZW51ZSBvciBncmFuZCB0b3RhbCBhc3NvY2lhdGVkIHdpdGggdGhlIHRyYW5zYWN0aW9uIChlLmcuIDExLjk5KS5cbiAgICogVGhpcyB2YWx1ZSBtYXkgaW5jbHVkZSBzaGlwcGluZywgdGF4IGNvc3RzLCBvciBvdGhlciBhZGp1c3RtZW50cyB0byB0b3RhbCByZXZlbnVlIHRoYXRcbiAgICogeW91IHdhbnQgdG8gaW5jbHVkZSBhcyBwYXJ0IG9mIHlvdXIgcmV2ZW51ZSBjYWxjdWxhdGlvbnMuIE5vdGU6IGlmIHJldmVudWUgaXMgbm90IHNldCxcbiAgICogaXRzIHZhbHVlIHdpbGwgYmUgYXV0b21hdGljYWxseSBjYWxjdWxhdGVkIHVzaW5nIHRoZSBwcm9kdWN0IHF1YW50aXR5IGFuZCBwcmljZSBmaWVsZHNcbiAgICogb2YgYWxsIHByb2R1Y3RzIGluIHRoZSBzYW1lIGhpdC5cbiAgICovXG4gIHJldmVudWU6IG51bWJlcjtcbiAgLyoqIFRoZSB0b3RhbCB0YXggYXNzb2NpYXRlZCB3aXRoIHRoZSB0cmFuc2FjdGlvbi4gKi9cbiAgdGF4OiBudW1iZXI7XG4gIC8qKiBUaGUgc2hpcHBpbmcgY29zdCBhc3NvY2lhdGVkIHdpdGggdGhlIHRyYW5zYWN0aW9uLiAqL1xuICBzaGlwcGluZzogbnVtYmVyO1xuICAvKiogVGhlIHRyYW5zYWN0aW9uIGNvdXBvbiByZWRlZW1lZCB3aXRoIHRoZSB0cmFuc2FjdGlvbi4gKi9cbiAgY291cG9uOiBzdHJpbmc7XG4gIC8qKiBUaGUgbGlzdCB0aGF0IHRoZSBhc3NvY2lhdGVkIHByb2R1Y3RzIGJlbG9uZyB0by4gT3B0aW9uYWwuICovXG4gIGxpc3Q6IHN0cmluZztcbiAgLyoqIEEgbnVtYmVyIHJlcHJlc2VudGluZyBhIHN0ZXAgaW4gdGhlIGNoZWNrb3V0IHByb2Nlc3MuIE9wdGlvbmFsIG9uIGNoZWNrb3V0IGFjdGlvbnMuICovXG4gIHN0ZXA6IG51bWJlcjtcbiAgLyoqXG4gICAqIEFkZGl0aW9uYWwgZmllbGQgZm9yIGNoZWNrb3V0IGFuZCBjaGVja291dF9vcHRpb24gYWN0aW9ucyB0aGF0IGNhbiBkZXNjcmliZVxuICAgKiBvcHRpb24gaW5mb3JtYXRpb24gb24gdGhlIGNoZWNrb3V0IHBhZ2UsIGxpa2Ugc2VsZWN0ZWQgcGF5bWVudCBtZXRob2QuXG4gICAqL1xuICBvcHRpb246IHN0cmluZztcbn1cbiJdfQ==