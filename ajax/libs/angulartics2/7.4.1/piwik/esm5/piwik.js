/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Angulartics2 } from 'angulartics2';
import * as i0 from "@angular/core";
import * as i1 from "angulartics2";
var Angulartics2Piwik = /** @class */ (function () {
    function Angulartics2Piwik(angulartics2) {
        var _this = this;
        this.angulartics2 = angulartics2;
        if (typeof (_paq) === 'undefined') {
            console.warn('Piwik not found');
        }
        this.angulartics2.setUsername
            .subscribe(function (x) { return _this.setUsername(x); });
        this.angulartics2.setUserProperties
            .subscribe(function (x) { return _this.setUserProperties(x); });
    }
    /**
     * @return {?}
     */
    Angulartics2Piwik.prototype.startTracking = /**
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
     * @param {?=} location
     * @return {?}
     */
    Angulartics2Piwik.prototype.pageTrack = /**
     * @param {?} path
     * @param {?=} location
     * @return {?}
     */
    function (path, location) {
        try {
            _paq.push(['setDocumentTitle', window.document.title]);
            _paq.push(['setCustomUrl', path]);
            _paq.push(['trackPageView']);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Track a basic event in Piwik, or send an ecommerce event.
     *
     * @param action A string corresponding to the type of event that needs to be tracked.
     * @param properties The properties that need to be logged with the event.
     */
    /**
     * Track a basic event in Piwik, or send an ecommerce event.
     *
     * @param {?} action A string corresponding to the type of event that needs to be tracked.
     * @param {?=} properties The properties that need to be logged with the event.
     * @return {?}
     */
    Angulartics2Piwik.prototype.eventTrack = /**
     * Track a basic event in Piwik, or send an ecommerce event.
     *
     * @param {?} action A string corresponding to the type of event that needs to be tracked.
     * @param {?=} properties The properties that need to be logged with the event.
     * @return {?}
     */
    function (action, properties) {
        if (properties === void 0) { properties = {}; }
        /** @type {?} */
        var params = [];
        switch (action) {
            /**
             * @description Sets the current page view as a product or category page view. When you call
             * setEcommerceView it must be followed by a call to trackPageView to record the product or
             * category page view.
             *
             * @link https://piwik.org/docs/ecommerce-analytics/#tracking-product-page-views-category-page-views-optional
             * @link https://developer.piwik.org/api-reference/tracking-javascript#ecommerce
             *
             * @property productSKU (required) SKU: Product unique identifier
             * @property productName (optional) Product name
             * @property categoryName (optional) Product category, or array of up to 5 categories
             * @property price (optional) Product Price as displayed on the page
             */
            case 'setEcommerceView':
                params = ['setEcommerceView',
                    properties.productSKU,
                    properties.productName,
                    properties.categoryName,
                    properties.price,
                ];
                break;
            /**
             * @description Adds a product into the ecommerce order. Must be called for each product in
             * the order.
             *
             * @link https://piwik.org/docs/ecommerce-analytics/#tracking-ecommerce-orders-items-purchased-required
             * @link https://developer.piwik.org/api-reference/tracking-javascript#ecommerce
             *
             * @property productSKU (required) SKU: Product unique identifier
             * @property productName (optional) Product name
             * @property categoryName (optional) Product category, or array of up to 5 categories
             * @property price (recommended) Product price
             * @property quantity (optional, default to 1) Product quantity
             */
            case 'addEcommerceItem':
                params = [
                    'addEcommerceItem',
                    properties.productSKU,
                    properties.productName,
                    properties.productCategory,
                    properties.price,
                    properties.quantity,
                ];
                break;
            /**
             * @description Tracks a shopping cart. Call this javascript function every time a user is
             * adding, updating or deleting a product from the cart.
             *
             * @link https://piwik.org/docs/ecommerce-analytics/#tracking-add-to-cart-items-added-to-the-cart-optional
             * @link https://developer.piwik.org/api-reference/tracking-javascript#ecommerce
             *
             * @property grandTotal (required) Cart amount
             */
            case 'trackEcommerceCartUpdate':
                params = ['trackEcommerceCartUpdate', properties.grandTotal];
                break;
            /**
             * @description Tracks an Ecommerce order, including any ecommerce item previously added to
             * the order. orderId and grandTotal (ie. revenue) are required parameters.
             *
             * @link https://piwik.org/docs/ecommerce-analytics/#tracking-ecommerce-orders-items-purchased-required
             * @link https://developer.piwik.org/api-reference/tracking-javascript#ecommerce
             *
             * @property orderId (required) Unique Order ID
             * @property grandTotal (required) Order Revenue grand total (includes tax, shipping, and subtracted discount)
             * @property subTotal (optional) Order sub total (excludes shipping)
             * @property tax (optional) Tax amount
             * @property shipping (optional) Shipping amount
             * @property discount (optional) Discount offered (set to false for unspecified parameter)
             */
            case 'trackEcommerceOrder':
                params = [
                    'trackEcommerceOrder',
                    properties.orderId,
                    properties.grandTotal,
                    properties.subTotal,
                    properties.tax,
                    properties.shipping,
                    properties.discount,
                ];
                break;
            /**
             * @description Tracks an Ecommerce goal
             *
             * @link https://piwik.org/docs/tracking-goals-web-analytics/
             * @link https://developer.piwik.org/guides/tracking-javascript-guide#manually-trigger-goal-conversions
             *
             * @property goalId (required) Unique Goal ID
             * @property value (optional) passed to goal tracking
             */
            case 'trackGoal':
                params = [
                    'trackGoal',
                    properties.goalId,
                    properties.value,
                ];
                break;
            /**
             * @description Tracks a site search
             *
             * @link https://piwik.org/docs/site-search/
             * @link https://developer.piwik.org/guides/tracking-javascript-guide#internal-search-tracking
             *
             * @property keyword (required) Keyword searched for
             * @property category (optional) Search category
             * @property searchCount (optional) Number of results
             */
            case 'trackSiteSearch':
                params = [
                    'trackSiteSearch',
                    properties.keyword,
                    properties.category,
                    properties.searchCount,
                ];
                break;
            /**
             * @description Logs an event with an event category (Videos, Music, Games...), an event
             * action (Play, Pause, Duration, Add Playlist, Downloaded, Clicked...), and an optional
             * event name and optional numeric value.
             *
             * @link https://piwik.org/docs/event-tracking/
             * @link https://developer.piwik.org/api-reference/tracking-javascript#using-the-tracker-object
             *
             * @property category
             * @property action
             * @property name (optional, recommended)
             * @property value (optional)
             */
            default:
                // PAQ requires that eventValue be an integer, see: http://piwik.org/docs/event-tracking
                if (properties.value) {
                    /** @type {?} */
                    var parsed = parseInt(properties.value, 10);
                    properties.value = isNaN(parsed) ? 0 : parsed;
                }
                params = [
                    'trackEvent',
                    properties.category,
                    action,
                    properties.name || properties.label,
                    properties.value,
                ];
        }
        try {
            _paq.push(params);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * @param {?} userId
     * @return {?}
     */
    Angulartics2Piwik.prototype.setUsername = /**
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        try {
            _paq.push(['setUserId', userId]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Sets custom dimensions if at least one property has the key "dimension<n>",
     * e.g. dimension10. If there are custom dimensions, any other property is ignored.
     *
     * If there are no custom dimensions in the given properties object, the properties
     * object is saved as a custom variable.
     *
     * If in doubt, prefer custom dimensions.
     * @link https://piwik.org/docs/custom-variables/
     */
    /**
     * Sets custom dimensions if at least one property has the key "dimension<n>",
     * e.g. dimension10. If there are custom dimensions, any other property is ignored.
     *
     * If there are no custom dimensions in the given properties object, the properties
     * object is saved as a custom variable.
     *
     * If in doubt, prefer custom dimensions.
     * @link https://piwik.org/docs/custom-variables/
     * @param {?} properties
     * @return {?}
     */
    Angulartics2Piwik.prototype.setUserProperties = /**
     * Sets custom dimensions if at least one property has the key "dimension<n>",
     * e.g. dimension10. If there are custom dimensions, any other property is ignored.
     *
     * If there are no custom dimensions in the given properties object, the properties
     * object is saved as a custom variable.
     *
     * If in doubt, prefer custom dimensions.
     * @link https://piwik.org/docs/custom-variables/
     * @param {?} properties
     * @return {?}
     */
    function (properties) {
        /** @type {?} */
        var dimensions = this.setCustomDimensions(properties);
        try {
            if (dimensions.length === 0) {
                _paq.push(['setCustomVariable', properties]);
            }
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * @private
     * @param {?} properties
     * @return {?}
     */
    Angulartics2Piwik.prototype.setCustomDimensions = /**
     * @private
     * @param {?} properties
     * @return {?}
     */
    function (properties) {
        /** @type {?} */
        var dimensionRegex = /dimension[1-9]\d*/;
        /** @type {?} */
        var dimensions = Object.keys(properties)
            .filter(function (key) { return dimensionRegex.exec(key); });
        dimensions.forEach(function (dimension) {
            /** @type {?} */
            var number = Number(dimension.substr(9));
            _paq.push(['setCustomDimension', number, properties[dimension]]);
        });
        return dimensions;
    };
    Angulartics2Piwik.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    Angulartics2Piwik.ctorParameters = function () { return [
        { type: Angulartics2 }
    ]; };
    /** @nocollapse */ Angulartics2Piwik.ngInjectableDef = i0.defineInjectable({ factory: function Angulartics2Piwik_Factory() { return new Angulartics2Piwik(i0.inject(i1.Angulartics2)); }, token: Angulartics2Piwik, providedIn: "root" });
    return Angulartics2Piwik;
}());
export { Angulartics2Piwik };
if (false) {
    /**
     * @type {?}
     * @private
     */
    Angulartics2Piwik.prototype.angulartics2;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGl3aWsuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFydGljczIvcGl3aWsvIiwic291cmNlcyI6WyJwaXdpay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7QUFJNUM7SUFHRSwyQkFBb0IsWUFBMEI7UUFBOUMsaUJBUUM7UUFSbUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDNUMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssV0FBVyxFQUFFO1lBQ2pDLE9BQU8sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUNqQztRQUNELElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVzthQUMxQixTQUFTLENBQUMsVUFBQyxDQUFTLElBQUssT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFuQixDQUFtQixDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUI7YUFDaEMsU0FBUyxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsS0FBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxFQUF6QixDQUF5QixDQUFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUVELHlDQUFhOzs7SUFBYjtRQUFBLGlCQU9DO1FBTkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTO2FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixFQUFFLENBQUM7YUFDN0MsU0FBUyxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQXRCLENBQXNCLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVU7YUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1C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Q1Q7U0FDRjtJQUNILENBQUM7Ozs7OztJQUVPLCtDQUFtQjs7Ozs7SUFBM0IsVUFBNEIsVUFBZTs7WUFDbkMsY0FBYyxHQUFXLG1CQUFtQjs7WUFDNUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2FBQ3ZDLE1BQU0sQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQXhCLENBQXdCLENBQUM7UUFDMUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFBLFNBQVM7O2dCQUNwQixNQUFNLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25FLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQzs7Z0JBblBGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0JBSnpCLFlBQVk7Ozs0QkFGckI7Q0EwUEMsQUFwUEQsSUFvUEM7U0FuUFksaUJBQWlCOzs7Ozs7SUFFaEIseUNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBbmd1bGFydGljczIgfSBmcm9tICdhbmd1bGFydGljczInO1xuXG5kZWNsYXJlIHZhciBfcGFxOiBhbnk7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQW5ndWxhcnRpY3MyUGl3aWsge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYW5ndWxhcnRpY3MyOiBBbmd1bGFydGljczIpIHtcbiAgICBpZiAodHlwZW9mIChfcGFxKSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUud2FybignUGl3aWsgbm90IGZvdW5kJyk7XG4gICAgfVxuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldFVzZXJuYW1lXG4gICAgICAuc3Vic2NyaWJlKCh4OiBzdHJpbmcpID0+IHRoaXMuc2V0VXNlcm5hbWUoeCkpO1xuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldFVzZXJQcm9wZXJ0aWVzXG4gICAgICAuc3Vic2NyaWJlKCh4KSA9PiB0aGlzLnNldFVzZXJQcm9wZXJ0aWVzKHgpKTtcbiAgfVxuXG4gIHN0YXJ0VHJhY2tpbmcoKTogdm9pZCB7XG4gICAgdGhpcy5hbmd1bGFydGljczIucGFnZVRyYWNrXG4gICAgICAucGlwZSh0aGlzLmFuZ3VsYXJ0aWNzMi5maWx0ZXJEZXZlbG9wZXJNb2RlKCkpXG4gICAgICAuc3Vic2NyaWJlKCh4KSA9PiB0aGlzLnBhZ2VUcmFjayh4LnBhdGgpKTtcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5ldmVudFRyYWNrXG4gICAgICAucGlwZSh0aGlzLmFuZ3VsYXJ0aWNzMi5maWx0ZXJEZXZlbG9wZXJNb2RlKCkpXG4gICAgICAuc3Vic2NyaWJlKCh4KSA9PiB0aGlzLmV2ZW50VHJhY2soeC5hY3Rpb24sIHgucHJvcGVydGllcykpO1xuICB9XG5cbiAgcGFnZVRyYWNrKHBhdGg6IHN0cmluZywgbG9jYXRpb24/OiBhbnkpIHtcbiAgICB0cnkge1xuICAgICAgX3BhcS5wdXNoKFsnc2V0RG9jdW1lbnRUaXRsZScsIHdpbmRvdy5kb2N1bWVudC50aXRsZV0pO1xuICAgICAgX3BhcS5wdXNoKFsnc2V0Q3VzdG9tVXJsJywgcGF0aF0pO1xuICAgICAgX3BhcS5wdXNoKFsndHJhY2tQYWdlVmlldyddKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRyYWNrIGEgYmFzaWMgZXZlbnQgaW4gUGl3aWssIG9yIHNlbmQgYW4gZWNvbW1lcmNlIGV2ZW50LlxuICAgKlxuICAgKiBAcGFyYW0gYWN0aW9uIEEgc3RyaW5nIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHR5cGUgb2YgZXZlbnQgdGhhdCBuZWVkcyB0byBiZSB0cmFja2VkLlxuICAgKiBAcGFyYW0gcHJvcGVydGllcyBUaGUgcHJvcGVydGllcyB0aGF0IG5lZWQgdG8gYmUgbG9nZ2VkIHdpdGggdGhlIGV2ZW50LlxuICAgKi9cbiAgZXZlbnRUcmFjayhhY3Rpb246IHN0cmluZywgcHJvcGVydGllczogYW55ID0ge30pIHtcbiAgICBsZXQgcGFyYW1zID0gW107XG4gICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgIC8qKlxuICAgICAgICogQGRlc2NyaXB0aW9uIFNldHMgdGhlIGN1cnJlbnQgcGFnZSB2aWV3IGFzIGEgcHJvZHVjdCBvciBjYXRlZ29yeSBwYWdlIHZpZXcuIFdoZW4geW91IGNhbGxcbiAgICAgICAqIHNldEVjb21tZXJjZVZpZXcgaXQgbXVzdCBiZSBmb2xsb3dlZCBieSBhIGNhbGwgdG8gdHJhY2tQYWdlVmlldyB0byByZWNvcmQgdGhlIHByb2R1Y3Qgb3JcbiAgICAgICAqIGNhdGVnb3J5IHBhZ2Ugdmlldy5cbiAgICAgICAqXG4gICAgICAgKiBAbGluayBodHRwczovL3Bpd2lrLm9yZy9kb2NzL2Vjb21tZXJjZS1hbmFseXRpY3MvI3RyYWNraW5nLXByb2R1Y3QtcGFnZS12aWV3cy1jYXRlZ29yeS1wYWdlLXZpZXdzLW9wdGlvbmFsXG4gICAgICAgKiBAbGluayBodHRwczovL2RldmVsb3Blci5waXdpay5vcmcvYXBpLXJlZmVyZW5jZS90cmFja2luZy1qYXZhc2NyaXB0I2Vjb21tZXJjZVxuICAgICAgICpcbiAgICAgICAqIEBwcm9wZXJ0eSBwcm9kdWN0U0tVIChyZXF1aXJlZCkgU0tVOiBQcm9kdWN0IHVuaXF1ZSBpZGVudGlmaWVyXG4gICAgICAgKiBAcHJvcGVydHkgcHJvZHVjdE5hbWUgKG9wdGlvbmFsKSBQcm9kdWN0IG5hbWVcbiAgICAgICAqIEBwcm9wZXJ0eSBjYXRlZ29yeU5hbWUgKG9wdGlvbmFsKSBQcm9kdWN0IGNhdGVnb3J5LCBvciBhcnJheSBvZiB1cCB0byA1IGNhdGVnb3JpZXNcbiAgICAgICAqIEBwcm9wZXJ0eSBwcmljZSAob3B0aW9uYWwpIFByb2R1Y3QgUHJpY2UgYXMgZGlzcGxheWVkIG9uIHRoZSBwYWdlXG4gICAgICAgKi9cbiAgICAgIGNhc2UgJ3NldEVjb21tZXJjZVZpZXcnOlxuICAgICAgICBwYXJhbXMgPSBbJ3NldEVjb21tZXJjZVZpZXcnLFxuICAgICAgICAgIHByb3BlcnRpZXMucHJvZHVjdFNLVSxcbiAgICAgICAgICBwcm9wZXJ0aWVzLnByb2R1Y3ROYW1lLFxuICAgICAgICAgIHByb3BlcnRpZXMuY2F0ZWdvcnlOYW1lLFxuICAgICAgICAgIHByb3BlcnRpZXMucHJpY2UsXG4gICAgICAgIF07XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvKipcbiAgICAgICAqIEBkZXNjcmlwdGlvbiBBZGRzIGEgcHJvZHVjdCBpbnRvIHRoZSBlY29tbWVyY2Ugb3JkZXIuIE11c3QgYmUgY2FsbGVkIGZvciBlYWNoIHByb2R1Y3QgaW5cbiAgICAgICAqIHRoZSBvcmRlci5cbiAgICAgICAqXG4gICAgICAgKiBAbGluayBodHRwczovL3Bpd2lrLm9yZy9kb2NzL2Vjb21tZXJjZS1hbmFseXRpY3MvI3RyYWNraW5nLWVjb21tZXJjZS1vcmRlcnMtaXRlbXMtcHVyY2hhc2VkLXJlcXVpcmVkXG4gICAgICAgKiBAbGluayBodHRwczovL2RldmVsb3Blci5waXdpay5vcmcvYXBpLXJlZmVyZW5jZS90cmFja2luZy1qYXZhc2NyaXB0I2Vjb21tZXJjZVxuICAgICAgICpcbiAgICAgICAqIEBwcm9wZXJ0eSBwcm9kdWN0U0tVIChyZXF1aXJlZCkgU0tVOiBQcm9kdWN0IHVuaXF1ZSBpZGVudGlmaWVyXG4gICAgICAgKiBAcHJvcGVydHkgcHJvZHVjdE5hbWUgKG9wdGlvbmFsKSBQcm9kdWN0IG5hbWVcbiAgICAgICAqIEBwcm9wZXJ0eSBjYXRlZ29yeU5hbWUgKG9wdGlvbmFsKSBQcm9kdWN0IGNhdGVnb3J5LCBvciBhcnJheSBvZiB1cCB0byA1IGNhdGVnb3JpZXNcbiAgICAgICAqIEBwcm9wZXJ0eSBwcmljZSAocmVjb21tZW5kZWQpIFByb2R1Y3QgcHJpY2VcbiAgICAgICAqIEBwcm9wZXJ0eSBxdWFudGl0eSAob3B0aW9uYWwsIGRlZmF1bHQgdG8gMSkgUHJvZHVjdCBxdWFudGl0eVxuICAgICAgICovXG4gICAgICBjYXNlICdhZGRFY29tbWVyY2VJdGVtJzpcbiAgICAgICAgcGFyYW1zID0gW1xuICAgICAgICAgICdhZGRFY29tbWVyY2VJdGVtJyxcbiAgICAgICAgICBwcm9wZXJ0aWVzLnByb2R1Y3RTS1UsXG4gICAgICAgICAgcHJvcGVydGllcy5wcm9kdWN0TmFtZSxcbiAgICAgICAgICBwcm9wZXJ0aWVzLnByb2R1Y3RDYXRlZ29yeSxcbiAgICAgICAgICBwcm9wZXJ0aWVzLnByaWNlLFxuICAgICAgICAgIHByb3BlcnRpZXMucXVhbnRpdHksXG4gICAgICAgIF07XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvKipcbiAgICAgICAqIEBkZXNjcmlwdGlvbiBUcmFja3MgYSBzaG9wcGluZyBjYXJ0LiBDYWxsIHRoaXMgamF2YXNjcmlwdCBmdW5jdGlvbiBldmVyeSB0aW1lIGEgdXNlciBpc1xuICAgICAgICogYWRkaW5nLCB1cGRhdGluZyBvciBkZWxldGluZyBhIHByb2R1Y3QgZnJvbSB0aGUgY2FydC5cbiAgICAgICAqXG4gICAgICAgKiBAbGluayBodHRwczovL3Bpd2lrLm9yZy9kb2NzL2Vjb21tZXJjZS1hbmFseXRpY3MvI3RyYWNraW5nLWFkZC10by1jYXJ0LWl0ZW1zLWFkZGVkLXRvLXRoZS1jYXJ0LW9wdGlvbmFsXG4gICAgICAgKiBAbGluayBodHRwczovL2RldmVsb3Blci5waXdpay5vcmcvYXBpLXJlZmVyZW5jZS90cmFja2luZy1qYXZhc2NyaXB0I2Vjb21tZXJjZVxuICAgICAgICpcbiAgICAgICAqIEBwcm9wZXJ0eSBncmFuZFRvdGFsIChyZXF1aXJlZCkgQ2FydCBhbW91bnRcbiAgICAgICAqL1xuICAgICAgY2FzZSAndHJhY2tFY29tbWVyY2VDYXJ0VXBkYXRlJzpcbiAgICAgICAgcGFyYW1zID0gWyd0cmFja0Vjb21tZXJjZUNhcnRVcGRhdGUnLCBwcm9wZXJ0aWVzLmdyYW5kVG90YWxdO1xuICAgICAgICBicmVhaztcblxuICAgICAgLyoqXG4gICAgICAgKiBAZGVzY3JpcHRpb24gVHJhY2tzIGFuIEVjb21tZXJjZSBvcmRlciwgaW5jbHVkaW5nIGFueSBlY29tbWVyY2UgaXRlbSBwcmV2aW91c2x5IGFkZGVkIHRvXG4gICAgICAgKiB0aGUgb3JkZXIuIG9yZGVySWQgYW5kIGdyYW5kVG90YWwgKGllLiByZXZlbnVlKSBhcmUgcmVxdWlyZWQgcGFyYW1ldGVycy5cbiAgICAgICAqXG4gICAgICAgKiBAbGluayBodHRwczovL3Bpd2lrLm9yZy9kb2NzL2Vjb21tZXJjZS1hbmFseXRpY3MvI3RyYWNraW5nLWVjb21tZXJjZS1vcmRlcnMtaXRlbXMtcHVyY2hhc2VkLXJlcXVpcmVkXG4gICAgICAgKiBAbGluayBodHRwczovL2RldmVsb3Blci5waXdpay5vcmcvYXBpLXJlZmVyZW5jZS90cmFja2luZy1qYXZhc2NyaXB0I2Vjb21tZXJjZVxuICAgICAgICpcbiAgICAgICAqIEBwcm9wZXJ0eSBvcmRlcklkIChyZXF1aXJlZCkgVW5pcXVlIE9yZGVyIElEXG4gICAgICAgKiBAcHJvcGVydHkgZ3JhbmRUb3RhbCAocmVxdWlyZWQpIE9yZGVyIFJldmVudWUgZ3JhbmQgdG90YWwgKGluY2x1ZGVzIHRheCwgc2hpcHBpbmcsIGFuZCBzdWJ0cmFjdGVkIGRpc2NvdW50KVxuICAgICAgICogQHByb3BlcnR5IHN1YlRvdGFsIChvcHRpb25hbCkgT3JkZXIgc3ViIHRvdGFsIChleGNsdWRlcyBzaGlwcGluZylcbiAgICAgICAqIEBwcm9wZXJ0eSB0YXggKG9wdGlvbmFsKSBUYXggYW1vdW50XG4gICAgICAgKiBAcHJvcGVydHkgc2hpcHBpbmcgKG9wdGlvbmFsKSBTaGlwcGluZyBhbW91bnRcbiAgICAgICAqIEBwcm9wZXJ0eSBkaXNjb3VudCAob3B0aW9uYWwpIERpc2NvdW50IG9mZmVyZWQgKHNldCB0byBmYWxzZSBmb3IgdW5zcGVjaWZpZWQgcGFyYW1ldGVyKVxuICAgICAgICovXG4gICAgICBjYXNlICd0cmFja0Vjb21tZXJjZU9yZGVyJzpcbiAgICAgICAgcGFyYW1zID0gW1xuICAgICAgICAgICd0cmFja0Vjb21tZXJjZU9yZGVyJyxcbiAgICAgICAgICBwcm9wZXJ0aWVzLm9yZGVySWQsXG4gICAgICAgICAgcHJvcGVydGllcy5ncmFuZFRvdGFsLFxuICAgICAgICAgIHByb3BlcnRpZXMuc3ViVG90YWwsXG4gICAgICAgICAgcHJvcGVydGllcy50YXgsXG4gICAgICAgICAgcHJvcGVydGllcy5zaGlwcGluZyxcbiAgICAgICAgICBwcm9wZXJ0aWVzLmRpc2NvdW50LFxuICAgICAgICBdO1xuICAgICAgICBicmVhaztcblxuICAgICAgLyoqXG4gICAgICAgKiBAZGVzY3JpcHRpb24gVHJhY2tzIGFuIEVjb21tZXJjZSBnb2FsXG4gICAgICAgKlxuICAgICAgICogQGxpbmsgaHR0cHM6Ly9waXdpay5vcmcvZG9jcy90cmFja2luZy1nb2Fscy13ZWItYW5hbHl0aWNzL1xuICAgICAgICogQGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIucGl3aWsub3JnL2d1aWRlcy90cmFja2luZy1qYXZhc2NyaXB0LWd1aWRlI21hbnVhbGx5LXRyaWdnZXItZ29hbC1jb252ZXJzaW9uc1xuICAgICAgICpcbiAgICAgICAqIEBwcm9wZXJ0eSBnb2FsSWQgKHJlcXVpcmVkKSBVbmlxdWUgR29hbCBJRFxuICAgICAgICogQHByb3BlcnR5IHZhbHVlIChvcHRpb25hbCkgcGFzc2VkIHRvIGdvYWwgdHJhY2tpbmdcbiAgICAgICAqL1xuICAgICAgY2FzZSAndHJhY2tHb2FsJzpcbiAgICAgICAgcGFyYW1zID0gW1xuICAgICAgICAgICd0cmFja0dvYWwnLFxuICAgICAgICAgIHByb3BlcnRpZXMuZ29hbElkLFxuICAgICAgICAgIHByb3BlcnRpZXMudmFsdWUsXG4gICAgICAgIF07XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvKipcbiAgICAgICAqIEBkZXNjcmlwdGlvbiBUcmFja3MgYSBzaXRlIHNlYXJjaFxuICAgICAgICpcbiAgICAgICAqIEBsaW5rIGh0dHBzOi8vcGl3aWsub3JnL2RvY3Mvc2l0ZS1zZWFyY2gvXG4gICAgICAgKiBAbGluayBodHRwczovL2RldmVsb3Blci5waXdpay5vcmcvZ3VpZGVzL3RyYWNraW5nLWphdmFzY3JpcHQtZ3VpZGUjaW50ZXJuYWwtc2VhcmNoLXRyYWNraW5nXG4gICAgICAgKlxuICAgICAgICogQHByb3BlcnR5IGtleXdvcmQgKHJlcXVpcmVkKSBLZXl3b3JkIHNlYXJjaGVkIGZvclxuICAgICAgICogQHByb3BlcnR5IGNhdGVnb3J5IChvcHRpb25hbCkgU2VhcmNoIGNhdGVnb3J5XG4gICAgICAgKiBAcHJvcGVydHkgc2VhcmNoQ291bnQgKG9wdGlvbmFsKSBOdW1iZXIgb2YgcmVzdWx0c1xuICAgICAgICovXG4gICAgICBjYXNlICd0cmFja1NpdGVTZWFyY2gnOlxuICAgICAgICBwYXJhbXMgPSBbXG4gICAgICAgICAgJ3RyYWNrU2l0ZVNlYXJjaCcsXG4gICAgICAgICAgcHJvcGVydGllcy5rZXl3b3JkLFxuICAgICAgICAgIHByb3BlcnRpZXMuY2F0ZWdvcnksXG4gICAgICAgICAgcHJvcGVydGllcy5zZWFyY2hDb3VudCxcbiAgICAgICAgXTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8qKlxuICAgICAgICogQGRlc2NyaXB0aW9uIExvZ3MgYW4gZXZlbnQgd2l0aCBhbiBldmVudCBjYXRlZ29yeSAoVmlkZW9zLCBNdXNpYywgR2FtZXMuLi4pLCBhbiBldmVudFxuICAgICAgICogYWN0aW9uIChQbGF5LCBQYXVzZSwgRHVyYXRpb24sIEFkZCBQbGF5bGlzdCwgRG93bmxvYWRlZCwgQ2xpY2tlZC4uLiksIGFuZCBhbiBvcHRpb25hbFxuICAgICAgICogZXZlbnQgbmFtZSBhbmQgb3B0aW9uYWwgbnVtZXJpYyB2YWx1ZS5cbiAgICAgICAqXG4gICAgICAgKiBAbGluayBodHRwczovL3Bpd2lrLm9yZy9kb2NzL2V2ZW50LXRyYWNraW5nL1xuICAgICAgICogQGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIucGl3aWsub3JnL2FwaS1yZWZlcmVuY2UvdHJhY2tpbmctamF2YXNjcmlwdCN1c2luZy10aGUtdHJhY2tlci1vYmplY3RcbiAgICAgICAqXG4gICAgICAgKiBAcHJvcGVydHkgY2F0ZWdvcnlcbiAgICAgICAqIEBwcm9wZXJ0eSBhY3Rpb25cbiAgICAgICAqIEBwcm9wZXJ0eSBuYW1lIChvcHRpb25hbCwgcmVjb21tZW5kZWQpXG4gICAgICAgKiBAcHJvcGVydHkgdmFsdWUgKG9wdGlvbmFsKVxuICAgICAgICovXG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvLyBQQVEgcmVxdWlyZXMgdGhhdCBldmVudFZhbHVlIGJlIGFuIGludGVnZXIsIHNlZTogaHR0cDovL3Bpd2lrLm9yZy9kb2NzL2V2ZW50LXRyYWNraW5nXG4gICAgICAgIGlmIChwcm9wZXJ0aWVzLnZhbHVlKSB7XG4gICAgICAgICAgY29uc3QgcGFyc2VkID0gcGFyc2VJbnQocHJvcGVydGllcy52YWx1ZSwgMTApO1xuICAgICAgICAgIHByb3BlcnRpZXMudmFsdWUgPSBpc05hTihwYXJzZWQpID8gMCA6IHBhcnNlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcmFtcyA9IFtcbiAgICAgICAgICAndHJhY2tFdmVudCcsXG4gICAgICAgICAgcHJvcGVydGllcy5jYXRlZ29yeSxcbiAgICAgICAgICBhY3Rpb24sXG4gICAgICAgICAgcHJvcGVydGllcy5uYW1lIHx8IHByb3BlcnRpZXMubGFiZWwsIC8vIENoYW5nZWQgaW4gZmF2b3VyIG9mIFBpd2lrIGRvY3VtZW50YXRpb24uIEFkZGVkIGZhbGxiYWNrIHNvIGl0J3MgYmFja3dhcmRzIGNvbXBhdGlibGUuXG4gICAgICAgICAgcHJvcGVydGllcy52YWx1ZSxcbiAgICAgICAgXTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIF9wYXEucHVzaChwYXJhbXMpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRVc2VybmFtZSh1c2VySWQ6IHN0cmluZyB8IGJvb2xlYW4pIHtcbiAgICB0cnkge1xuICAgICAgX3BhcS5wdXNoKFsnc2V0VXNlcklkJywgdXNlcklkXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGN1c3RvbSBkaW1lbnNpb25zIGlmIGF0IGxlYXN0IG9uZSBwcm9wZXJ0eSBoYXMgdGhlIGtleSBcImRpbWVuc2lvbjxuPlwiLFxuICAgKiBlLmcuIGRpbWVuc2lvbjEwLiBJZiB0aGVyZSBhcmUgY3VzdG9tIGRpbWVuc2lvbnMsIGFueSBvdGhlciBwcm9wZXJ0eSBpcyBpZ25vcmVkLlxuICAgKlxuICAgKiBJZiB0aGVyZSBhcmUgbm8gY3VzdG9tIGRpbWVuc2lvbnMgaW4gdGhlIGdpdmVuIHByb3BlcnRpZXMgb2JqZWN0LCB0aGUgcHJvcGVydGllc1xuICAgKiBvYmplY3QgaXMgc2F2ZWQgYXMgYSBjdXN0b20gdmFyaWFibGUuXG4gICAqXG4gICAqIElmIGluIGRvdWJ0LCBwcmVmZXIgY3VzdG9tIGRpbWVuc2lvbnMuXG4gICAqIEBsaW5rIGh0dHBzOi8vcGl3aWsub3JnL2RvY3MvY3VzdG9tLXZhcmlhYmxlcy9cbiAgICovXG4gIHNldFVzZXJQcm9wZXJ0aWVzKHByb3BlcnRpZXM6IGFueSkge1xuICAgIGNvbnN0IGRpbWVuc2lvbnMgPSB0aGlzLnNldEN1c3RvbURpbWVuc2lvbnMocHJvcGVydGllcyk7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChkaW1lbnNpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBfcGFxLnB1c2goWydzZXRDdXN0b21WYXJpYWJsZScsIHByb3BlcnRpZXNdKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRDdXN0b21EaW1lbnNpb25zKHByb3BlcnRpZXM6IGFueSk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBkaW1lbnNpb25SZWdleDogUmVnRXhwID0gL2RpbWVuc2lvblsxLTldXFxkKi87XG4gICAgY29uc3QgZGltZW5zaW9ucyA9IE9iamVjdC5rZXlzKHByb3BlcnRpZXMpXG4gICAgICAuZmlsdGVyKGtleSA9PiBkaW1lbnNpb25SZWdleC5leGVjKGtleSkpO1xuICAgIGRpbWVuc2lvbnMuZm9yRWFjaChkaW1lbnNpb24gPT4ge1xuICAgICAgY29uc3QgbnVtYmVyID0gTnVtYmVyKGRpbWVuc2lvbi5zdWJzdHIoOSkpO1xuICAgICAgX3BhcS5wdXNoKFsnc2V0Q3VzdG9tRGltZW5zaW9uJywgbnVtYmVyLCBwcm9wZXJ0aWVzW2RpbWVuc2lvbl1dKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZGltZW5zaW9ucztcbiAgfVxufVxuIl19