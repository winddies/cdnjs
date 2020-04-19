/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Angulartics2 } from 'angulartics2';
import * as i0 from "@angular/core";
import * as i1 from "angulartics2";
export class Angulartics2Piwik {
    /**
     * @param {?} angulartics2
     */
    constructor(angulartics2) {
        this.angulartics2 = angulartics2;
        if (typeof (_paq) === 'undefined') {
            console.warn('Piwik not found');
        }
        this.angulartics2.setUsername
            .subscribe((x) => this.setUsername(x));
        this.angulartics2.setUserProperties
            .subscribe((x) => this.setUserProperties(x));
    }
    /**
     * @return {?}
     */
    startTracking() {
        this.angulartics2.pageTrack
            .pipe(this.angulartics2.filterDeveloperMode())
            .subscribe((x) => this.pageTrack(x.path));
        this.angulartics2.eventTrack
            .pipe(this.angulartics2.filterDeveloperMode())
            .subscribe((x) => this.eventTrack(x.action, x.properties));
    }
    /**
     * @param {?} path
     * @param {?=} location
     * @return {?}
     */
    pageTrack(path, location) {
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
    }
    /**
     * Track a basic event in Piwik, or send an ecommerce event.
     *
     * @param {?} action A string corresponding to the type of event that needs to be tracked.
     * @param {?=} properties The properties that need to be logged with the event.
     * @return {?}
     */
    eventTrack(action, properties = {}) {
        /** @type {?} */
        let params = [];
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
                    const parsed = parseInt(properties.value, 10);
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
    }
    /**
     * @param {?} userId
     * @return {?}
     */
    setUsername(userId) {
        try {
            _paq.push(['setUserId', userId]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
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
    setUserProperties(properties) {
        /** @type {?} */
        const dimensions = this.setCustomDimensions(properties);
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
    }
    /**
     * @private
     * @param {?} properties
     * @return {?}
     */
    setCustomDimensions(properties) {
        /** @type {?} */
        const dimensionRegex = /dimension[1-9]\d*/;
        /** @type {?} */
        const dimensions = Object.keys(properties)
            .filter(key => dimensionRegex.exec(key));
        dimensions.forEach(dimension => {
            /** @type {?} */
            const number = Number(dimension.substr(9));
            _paq.push(['setCustomDimension', number, properties[dimension]]);
        });
        return dimensions;
    }
}
Angulartics2Piwik.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
Angulartics2Piwik.ctorParameters = () => [
    { type: Angulartics2 }
];
/** @nocollapse */ Angulartics2Piwik.ngInjectableDef = i0.defineInjectable({ factory: function Angulartics2Piwik_Factory() { return new Angulartics2Piwik(i0.inject(i1.Angulartics2)); }, token: Angulartics2Piwik, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    Angulartics2Piwik.prototype.angulartics2;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGl3aWsuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFydGljczIvcGl3aWsvIiwic291cmNlcyI6WyJwaXdpay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7QUFLNUMsTUFBTSxPQUFPLGlCQUFpQjs7OztJQUU1QixZQUFvQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUM1QyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxXQUFXLEVBQUU7WUFDakMsT0FBTyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXO2FBQzFCLFNBQVMsQ0FBQyxDQUFDLENBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCO2FBQ2hDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7YUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLEVBQUUsQ0FBQzthQUM3QyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVO2FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixFQUFFLENBQUM7YUFDN0MsU0FBUyxDQUFDLENBQUMs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QUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7O2tCQUN2QixNQUFNLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25FLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQzs7O1lBblBGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUFKekIsWUFBWTs7Ozs7Ozs7SUFPUCx5Q0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFuZ3VsYXJ0aWNzMiB9IGZyb20gJ2FuZ3VsYXJ0aWNzMic7XG5cbmRlY2xhcmUgdmFyIF9wYXE6IGFueTtcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFydGljczJQaXdpayB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhbmd1bGFydGljczI6IEFuZ3VsYXJ0aWNzMikge1xuICAgIGlmICh0eXBlb2YgKF9wYXEpID09PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS53YXJuKCdQaXdpayBub3QgZm91bmQnKTtcbiAgICB9XG4gICAgdGhpcy5hbmd1bGFydGljczIuc2V0VXNlcm5hbWVcbiAgICAgIC5zdWJzY3JpYmUoKHg6IHN0cmluZykgPT4gdGhpcy5zZXRVc2VybmFtZSh4KSk7XG4gICAgdGhpcy5hbmd1bGFydGljczIuc2V0VXNlclByb3BlcnRpZXNcbiAgICAgIC5zdWJzY3JpYmUoKHgpID0+IHRoaXMuc2V0VXNlclByb3BlcnRpZXMoeCkpO1xuICB9XG5cbiAgc3RhcnRUcmFja2luZygpOiB2b2lkIHtcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5wYWdlVHJhY2tcbiAgICAgIC5waXBlKHRoaXMuYW5ndWxhcnRpY3MyLmZpbHRlckRldmVsb3Blck1vZGUoKSlcbiAgICAgIC5zdWJzY3JpYmUoKHgpID0+IHRoaXMucGFnZVRyYWNrKHgucGF0aCkpO1xuICAgIHRoaXMuYW5ndWxhcnRpY3MyLmV2ZW50VHJhY2tcbiAgICAgIC5waXBlKHRoaXMuYW5ndWxhcnRpY3MyLmZpbHRlckRldmVsb3Blck1vZGUoKSlcbiAgICAgIC5zdWJzY3JpYmUoKHgpID0+IHRoaXMuZXZlbnRUcmFjayh4LmFjdGlvbiwgeC5wcm9wZXJ0aWVzKSk7XG4gIH1cblxuICBwYWdlVHJhY2socGF0aDogc3RyaW5nLCBsb2NhdGlvbj86IGFueSkge1xuICAgIHRyeSB7XG4gICAgICBfcGFxLnB1c2goWydzZXREb2N1bWVudFRpdGxlJywgd2luZG93LmRvY3VtZW50LnRpdGxlXSk7XG4gICAgICBfcGFxLnB1c2goWydzZXRDdXN0b21VcmwnLCBwYXRoXSk7XG4gICAgICBfcGFxLnB1c2goWyd0cmFja1BhZ2VWaWV3J10pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHJhY2sgYSBiYXNpYyBldmVudCBpbiBQaXdpaywgb3Igc2VuZCBhbiBlY29tbWVyY2UgZXZlbnQuXG4gICAqXG4gICAqIEBwYXJhbSBhY3Rpb24gQSBzdHJpbmcgY29ycmVzcG9uZGluZyB0byB0aGUgdHlwZSBvZiBldmVudCB0aGF0IG5lZWRzIHRvIGJlIHRyYWNrZWQuXG4gICAqIEBwYXJhbSBwcm9wZXJ0aWVzIFRoZSBwcm9wZXJ0aWVzIHRoYXQgbmVlZCB0byBiZSBsb2dnZWQgd2l0aCB0aGUgZXZlbnQuXG4gICAqL1xuICBldmVudFRyYWNrKGFjdGlvbjogc3RyaW5nLCBwcm9wZXJ0aWVzOiBhbnkgPSB7fSkge1xuICAgIGxldCBwYXJhbXMgPSBbXTtcbiAgICBzd2l0Y2ggKGFjdGlvbikge1xuICAgICAgLyoqXG4gICAgICAgKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgY3VycmVudCBwYWdlIHZpZXcgYXMgYSBwcm9kdWN0IG9yIGNhdGVnb3J5IHBhZ2Ugdmlldy4gV2hlbiB5b3UgY2FsbFxuICAgICAgICogc2V0RWNvbW1lcmNlVmlldyBpdCBtdXN0IGJlIGZvbGxvd2VkIGJ5IGEgY2FsbCB0byB0cmFja1BhZ2VWaWV3IHRvIHJlY29yZCB0aGUgcHJvZHVjdCBvclxuICAgICAgICogY2F0ZWdvcnkgcGFnZSB2aWV3LlxuICAgICAgICpcbiAgICAgICAqIEBsaW5rIGh0dHBzOi8vcGl3aWsub3JnL2RvY3MvZWNvbW1lcmNlLWFuYWx5dGljcy8jdHJhY2tpbmctcHJvZHVjdC1wYWdlLXZpZXdzLWNhdGVnb3J5LXBhZ2Utdmlld3Mtb3B0aW9uYWxcbiAgICAgICAqIEBsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLnBpd2lrLm9yZy9hcGktcmVmZXJlbmNlL3RyYWNraW5nLWphdmFzY3JpcHQjZWNvbW1lcmNlXG4gICAgICAgKlxuICAgICAgICogQHByb3BlcnR5IHByb2R1Y3RTS1UgKHJlcXVpcmVkKSBTS1U6IFByb2R1Y3QgdW5pcXVlIGlkZW50aWZpZXJcbiAgICAgICAqIEBwcm9wZXJ0eSBwcm9kdWN0TmFtZSAob3B0aW9uYWwpIFByb2R1Y3QgbmFtZVxuICAgICAgICogQHByb3BlcnR5IGNhdGVnb3J5TmFtZSAob3B0aW9uYWwpIFByb2R1Y3QgY2F0ZWdvcnksIG9yIGFycmF5IG9mIHVwIHRvIDUgY2F0ZWdvcmllc1xuICAgICAgICogQHByb3BlcnR5IHByaWNlIChvcHRpb25hbCkgUHJvZHVjdCBQcmljZSBhcyBkaXNwbGF5ZWQgb24gdGhlIHBhZ2VcbiAgICAgICAqL1xuICAgICAgY2FzZSAnc2V0RWNvbW1lcmNlVmlldyc6XG4gICAgICAgIHBhcmFtcyA9IFsnc2V0RWNvbW1lcmNlVmlldycsXG4gICAgICAgICAgcHJvcGVydGllcy5wcm9kdWN0U0tVLFxuICAgICAgICAgIHByb3BlcnRpZXMucHJvZHVjdE5hbWUsXG4gICAgICAgICAgcHJvcGVydGllcy5jYXRlZ29yeU5hbWUsXG4gICAgICAgICAgcHJvcGVydGllcy5wcmljZSxcbiAgICAgICAgXTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8qKlxuICAgICAgICogQGRlc2NyaXB0aW9uIEFkZHMgYSBwcm9kdWN0IGludG8gdGhlIGVjb21tZXJjZSBvcmRlci4gTXVzdCBiZSBjYWxsZWQgZm9yIGVhY2ggcHJvZHVjdCBpblxuICAgICAgICogdGhlIG9yZGVyLlxuICAgICAgICpcbiAgICAgICAqIEBsaW5rIGh0dHBzOi8vcGl3aWsub3JnL2RvY3MvZWNvbW1lcmNlLWFuYWx5dGljcy8jdHJhY2tpbmctZWNvbW1lcmNlLW9yZGVycy1pdGVtcy1wdXJjaGFzZWQtcmVxdWlyZWRcbiAgICAgICAqIEBsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLnBpd2lrLm9yZy9hcGktcmVmZXJlbmNlL3RyYWNraW5nLWphdmFzY3JpcHQjZWNvbW1lcmNlXG4gICAgICAgKlxuICAgICAgICogQHByb3BlcnR5IHByb2R1Y3RTS1UgKHJlcXVpcmVkKSBTS1U6IFByb2R1Y3QgdW5pcXVlIGlkZW50aWZpZXJcbiAgICAgICAqIEBwcm9wZXJ0eSBwcm9kdWN0TmFtZSAob3B0aW9uYWwpIFByb2R1Y3QgbmFtZVxuICAgICAgICogQHByb3BlcnR5IGNhdGVnb3J5TmFtZSAob3B0aW9uYWwpIFByb2R1Y3QgY2F0ZWdvcnksIG9yIGFycmF5IG9mIHVwIHRvIDUgY2F0ZWdvcmllc1xuICAgICAgICogQHByb3BlcnR5IHByaWNlIChyZWNvbW1lbmRlZCkgUHJvZHVjdCBwcmljZVxuICAgICAgICogQHByb3BlcnR5IHF1YW50aXR5IChvcHRpb25hbCwgZGVmYXVsdCB0byAxKSBQcm9kdWN0IHF1YW50aXR5XG4gICAgICAgKi9cbiAgICAgIGNhc2UgJ2FkZEVjb21tZXJjZUl0ZW0nOlxuICAgICAgICBwYXJhbXMgPSBbXG4gICAgICAgICAgJ2FkZEVjb21tZXJjZUl0ZW0nLFxuICAgICAgICAgIHByb3BlcnRpZXMucHJvZHVjdFNLVSxcbiAgICAgICAgICBwcm9wZXJ0aWVzLnByb2R1Y3ROYW1lLFxuICAgICAgICAgIHByb3BlcnRpZXMucHJvZHVjdENhdGVnb3J5LFxuICAgICAgICAgIHByb3BlcnRpZXMucHJpY2UsXG4gICAgICAgICAgcHJvcGVydGllcy5xdWFudGl0eSxcbiAgICAgICAgXTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8qKlxuICAgICAgICogQGRlc2NyaXB0aW9uIFRyYWNrcyBhIHNob3BwaW5nIGNhcnQuIENhbGwgdGhpcyBqYXZhc2NyaXB0IGZ1bmN0aW9uIGV2ZXJ5IHRpbWUgYSB1c2VyIGlzXG4gICAgICAgKiBhZGRpbmcsIHVwZGF0aW5nIG9yIGRlbGV0aW5nIGEgcHJvZHVjdCBmcm9tIHRoZSBjYXJ0LlxuICAgICAgICpcbiAgICAgICAqIEBsaW5rIGh0dHBzOi8vcGl3aWsub3JnL2RvY3MvZWNvbW1lcmNlLWFuYWx5dGljcy8jdHJhY2tpbmctYWRkLXRvLWNhcnQtaXRlbXMtYWRkZWQtdG8tdGhlLWNhcnQtb3B0aW9uYWxcbiAgICAgICAqIEBsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLnBpd2lrLm9yZy9hcGktcmVmZXJlbmNlL3RyYWNraW5nLWphdmFzY3JpcHQjZWNvbW1lcmNlXG4gICAgICAgKlxuICAgICAgICogQHByb3BlcnR5IGdyYW5kVG90YWwgKHJlcXVpcmVkKSBDYXJ0IGFtb3VudFxuICAgICAgICovXG4gICAgICBjYXNlICd0cmFja0Vjb21tZXJjZUNhcnRVcGRhdGUnOlxuICAgICAgICBwYXJhbXMgPSBbJ3RyYWNrRWNvbW1lcmNlQ2FydFVwZGF0ZScsIHByb3BlcnRpZXMuZ3JhbmRUb3RhbF07XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvKipcbiAgICAgICAqIEBkZXNjcmlwdGlvbiBUcmFja3MgYW4gRWNvbW1lcmNlIG9yZGVyLCBpbmNsdWRpbmcgYW55IGVjb21tZXJjZSBpdGVtIHByZXZpb3VzbHkgYWRkZWQgdG9cbiAgICAgICAqIHRoZSBvcmRlci4gb3JkZXJJZCBhbmQgZ3JhbmRUb3RhbCAoaWUuIHJldmVudWUpIGFyZSByZXF1aXJlZCBwYXJhbWV0ZXJzLlxuICAgICAgICpcbiAgICAgICAqIEBsaW5rIGh0dHBzOi8vcGl3aWsub3JnL2RvY3MvZWNvbW1lcmNlLWFuYWx5dGljcy8jdHJhY2tpbmctZWNvbW1lcmNlLW9yZGVycy1pdGVtcy1wdXJjaGFzZWQtcmVxdWlyZWRcbiAgICAgICAqIEBsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLnBpd2lrLm9yZy9hcGktcmVmZXJlbmNlL3RyYWNraW5nLWphdmFzY3JpcHQjZWNvbW1lcmNlXG4gICAgICAgKlxuICAgICAgICogQHByb3BlcnR5IG9yZGVySWQgKHJlcXVpcmVkKSBVbmlxdWUgT3JkZXIgSURcbiAgICAgICAqIEBwcm9wZXJ0eSBncmFuZFRvdGFsIChyZXF1aXJlZCkgT3JkZXIgUmV2ZW51ZSBncmFuZCB0b3RhbCAoaW5jbHVkZXMgdGF4LCBzaGlwcGluZywgYW5kIHN1YnRyYWN0ZWQgZGlzY291bnQpXG4gICAgICAgKiBAcHJvcGVydHkgc3ViVG90YWwgKG9wdGlvbmFsKSBPcmRlciBzdWIgdG90YWwgKGV4Y2x1ZGVzIHNoaXBwaW5nKVxuICAgICAgICogQHByb3BlcnR5IHRheCAob3B0aW9uYWwpIFRheCBhbW91bnRcbiAgICAgICAqIEBwcm9wZXJ0eSBzaGlwcGluZyAob3B0aW9uYWwpIFNoaXBwaW5nIGFtb3VudFxuICAgICAgICogQHByb3BlcnR5IGRpc2NvdW50IChvcHRpb25hbCkgRGlzY291bnQgb2ZmZXJlZCAoc2V0IHRvIGZhbHNlIGZvciB1bnNwZWNpZmllZCBwYXJhbWV0ZXIpXG4gICAgICAgKi9cbiAgICAgIGNhc2UgJ3RyYWNrRWNvbW1lcmNlT3JkZXInOlxuICAgICAgICBwYXJhbXMgPSBbXG4gICAgICAgICAgJ3RyYWNrRWNvbW1lcmNlT3JkZXInLFxuICAgICAgICAgIHByb3BlcnRpZXMub3JkZXJJZCxcbiAgICAgICAgICBwcm9wZXJ0aWVzLmdyYW5kVG90YWwsXG4gICAgICAgICAgcHJvcGVydGllcy5zdWJUb3RhbCxcbiAgICAgICAgICBwcm9wZXJ0aWVzLnRheCxcbiAgICAgICAgICBwcm9wZXJ0aWVzLnNoaXBwaW5nLFxuICAgICAgICAgIHByb3BlcnRpZXMuZGlzY291bnQsXG4gICAgICAgIF07XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvKipcbiAgICAgICAqIEBkZXNjcmlwdGlvbiBUcmFja3MgYW4gRWNvbW1lcmNlIGdvYWxcbiAgICAgICAqXG4gICAgICAgKiBAbGluayBodHRwczovL3Bpd2lrLm9yZy9kb2NzL3RyYWNraW5nLWdvYWxzLXdlYi1hbmFseXRpY3MvXG4gICAgICAgKiBAbGluayBodHRwczovL2RldmVsb3Blci5waXdpay5vcmcvZ3VpZGVzL3RyYWNraW5nLWphdmFzY3JpcHQtZ3VpZGUjbWFudWFsbHktdHJpZ2dlci1nb2FsLWNvbnZlcnNpb25zXG4gICAgICAgKlxuICAgICAgICogQHByb3BlcnR5IGdvYWxJZCAocmVxdWlyZWQpIFVuaXF1ZSBHb2FsIElEXG4gICAgICAgKiBAcHJvcGVydHkgdmFsdWUgKG9wdGlvbmFsKSBwYXNzZWQgdG8gZ29hbCB0cmFja2luZ1xuICAgICAgICovXG4gICAgICBjYXNlICd0cmFja0dvYWwnOlxuICAgICAgICBwYXJhbXMgPSBbXG4gICAgICAgICAgJ3RyYWNrR29hbCcsXG4gICAgICAgICAgcHJvcGVydGllcy5nb2FsSWQsXG4gICAgICAgICAgcHJvcGVydGllcy52YWx1ZSxcbiAgICAgICAgXTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8qKlxuICAgICAgICogQGRlc2NyaXB0aW9uIFRyYWNrcyBhIHNpdGUgc2VhcmNoXG4gICAgICAgKlxuICAgICAgICogQGxpbmsgaHR0cHM6Ly9waXdpay5vcmcvZG9jcy9zaXRlLXNlYXJjaC9cbiAgICAgICAqIEBsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLnBpd2lrLm9yZy9ndWlkZXMvdHJhY2tpbmctamF2YXNjcmlwdC1ndWlkZSNpbnRlcm5hbC1zZWFyY2gtdHJhY2tpbmdcbiAgICAgICAqXG4gICAgICAgKiBAcHJvcGVydHkga2V5d29yZCAocmVxdWlyZWQpIEtleXdvcmQgc2VhcmNoZWQgZm9yXG4gICAgICAgKiBAcHJvcGVydHkgY2F0ZWdvcnkgKG9wdGlvbmFsKSBTZWFyY2ggY2F0ZWdvcnlcbiAgICAgICAqIEBwcm9wZXJ0eSBzZWFyY2hDb3VudCAob3B0aW9uYWwpIE51bWJlciBvZiByZXN1bHRzXG4gICAgICAgKi9cbiAgICAgIGNhc2UgJ3RyYWNrU2l0ZVNlYXJjaCc6XG4gICAgICAgIHBhcmFtcyA9IFtcbiAgICAgICAgICAndHJhY2tTaXRlU2VhcmNoJyxcbiAgICAgICAgICBwcm9wZXJ0aWVzLmtleXdvcmQsXG4gICAgICAgICAgcHJvcGVydGllcy5jYXRlZ29yeSxcbiAgICAgICAgICBwcm9wZXJ0aWVzLnNlYXJjaENvdW50LFxuICAgICAgICBdO1xuICAgICAgICBicmVhaztcblxuICAgICAgLyoqXG4gICAgICAgKiBAZGVzY3JpcHRpb24gTG9ncyBhbiBldmVudCB3aXRoIGFuIGV2ZW50IGNhdGVnb3J5IChWaWRlb3MsIE11c2ljLCBHYW1lcy4uLiksIGFuIGV2ZW50XG4gICAgICAgKiBhY3Rpb24gKFBsYXksIFBhdXNlLCBEdXJhdGlvbiwgQWRkIFBsYXlsaXN0LCBEb3dubG9hZGVkLCBDbGlja2VkLi4uKSwgYW5kIGFuIG9wdGlvbmFsXG4gICAgICAgKiBldmVudCBuYW1lIGFuZCBvcHRpb25hbCBudW1lcmljIHZhbHVlLlxuICAgICAgICpcbiAgICAgICAqIEBsaW5rIGh0dHBzOi8vcGl3aWsub3JnL2RvY3MvZXZlbnQtdHJhY2tpbmcvXG4gICAgICAgKiBAbGluayBodHRwczovL2RldmVsb3Blci5waXdpay5vcmcvYXBpLXJlZmVyZW5jZS90cmFja2luZy1qYXZhc2NyaXB0I3VzaW5nLXRoZS10cmFja2VyLW9iamVjdFxuICAgICAgICpcbiAgICAgICAqIEBwcm9wZXJ0eSBjYXRlZ29yeVxuICAgICAgICogQHByb3BlcnR5IGFjdGlvblxuICAgICAgICogQHByb3BlcnR5IG5hbWUgKG9wdGlvbmFsLCByZWNvbW1lbmRlZClcbiAgICAgICAqIEBwcm9wZXJ0eSB2YWx1ZSAob3B0aW9uYWwpXG4gICAgICAgKi9cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vIFBBUSByZXF1aXJlcyB0aGF0IGV2ZW50VmFsdWUgYmUgYW4gaW50ZWdlciwgc2VlOiBodHRwOi8vcGl3aWsub3JnL2RvY3MvZXZlbnQtdHJhY2tpbmdcbiAgICAgICAgaWYgKHByb3BlcnRpZXMudmFsdWUpIHtcbiAgICAgICAgICBjb25zdCBwYXJzZWQgPSBwYXJzZUludChwcm9wZXJ0aWVzLnZhbHVlLCAxMCk7XG4gICAgICAgICAgcHJvcGVydGllcy52YWx1ZSA9IGlzTmFOKHBhcnNlZCkgPyAwIDogcGFyc2VkO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFyYW1zID0gW1xuICAgICAgICAgICd0cmFja0V2ZW50JyxcbiAgICAgICAgICBwcm9wZXJ0aWVzLmNhdGVnb3J5LFxuICAgICAgICAgIGFjdGlvbixcbiAgICAgICAgICBwcm9wZXJ0aWVzLm5hbWUgfHwgcHJvcGVydGllcy5sYWJlbCwgLy8gQ2hhbmdlZCBpbiBmYXZvdXIgb2YgUGl3aWsgZG9jdW1lbnRhdGlvbi4gQWRkZWQgZmFsbGJhY2sgc28gaXQncyBiYWNrd2FyZHMgY29tcGF0aWJsZS5cbiAgICAgICAgICBwcm9wZXJ0aWVzLnZhbHVlLFxuICAgICAgICBdO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgX3BhcS5wdXNoKHBhcmFtcyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldFVzZXJuYW1lKHVzZXJJZDogc3RyaW5nIHwgYm9vbGVhbikge1xuICAgIHRyeSB7XG4gICAgICBfcGFxLnB1c2goWydzZXRVc2VySWQnLCB1c2VySWRdKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgY3VzdG9tIGRpbWVuc2lvbnMgaWYgYXQgbGVhc3Qgb25lIHByb3BlcnR5IGhhcyB0aGUga2V5IFwiZGltZW5zaW9uPG4+XCIsXG4gICAqIGUuZy4gZGltZW5zaW9uMTAuIElmIHRoZXJlIGFyZSBjdXN0b20gZGltZW5zaW9ucywgYW55IG90aGVyIHByb3BlcnR5IGlzIGlnbm9yZWQuXG4gICAqXG4gICAqIElmIHRoZXJlIGFyZSBubyBjdXN0b20gZGltZW5zaW9ucyBpbiB0aGUgZ2l2ZW4gcHJvcGVydGllcyBvYmplY3QsIHRoZSBwcm9wZXJ0aWVzXG4gICAqIG9iamVjdCBpcyBzYXZlZCBhcyBhIGN1c3RvbSB2YXJpYWJsZS5cbiAgICpcbiAgICogSWYgaW4gZG91YnQsIHByZWZlciBjdXN0b20gZGltZW5zaW9ucy5cbiAgICogQGxpbmsgaHR0cHM6Ly9waXdpay5vcmcvZG9jcy9jdXN0b20tdmFyaWFibGVzL1xuICAgKi9cbiAgc2V0VXNlclByb3BlcnRpZXMocHJvcGVydGllczogYW55KSB7XG4gICAgY29uc3QgZGltZW5zaW9ucyA9IHRoaXMuc2V0Q3VzdG9tRGltZW5zaW9ucyhwcm9wZXJ0aWVzKTtcbiAgICB0cnkge1xuICAgICAgaWYgKGRpbWVuc2lvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIF9wYXEucHVzaChbJ3NldEN1c3RvbVZhcmlhYmxlJywgcHJvcGVydGllc10pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldEN1c3RvbURpbWVuc2lvbnMocHJvcGVydGllczogYW55KTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGRpbWVuc2lvblJlZ2V4OiBSZWdFeHAgPSAvZGltZW5zaW9uWzEtOV1cXGQqLztcbiAgICBjb25zdCBkaW1lbnNpb25zID0gT2JqZWN0LmtleXMocHJvcGVydGllcylcbiAgICAgIC5maWx0ZXIoa2V5ID0+IGRpbWVuc2lvblJlZ2V4LmV4ZWMoa2V5KSk7XG4gICAgZGltZW5zaW9ucy5mb3JFYWNoKGRpbWVuc2lvbiA9PiB7XG4gICAgICBjb25zdCBudW1iZXIgPSBOdW1iZXIoZGltZW5zaW9uLnN1YnN0cig5KSk7XG4gICAgICBfcGFxLnB1c2goWydzZXRDdXN0b21EaW1lbnNpb24nLCBudW1iZXIsIHByb3BlcnRpZXNbZGltZW5zaW9uXV0pO1xuICAgIH0pO1xuICAgIHJldHVybiBkaW1lbnNpb25zO1xuICB9XG59XG4iXX0=