import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Angulartics2 } from 'angulartics2';
import * as i0 from "@angular/core";
import * as i1 from "angulartics2";
let Angulartics2Piwik = class Angulartics2Piwik {
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
    startTracking() {
        this.angulartics2.pageTrack
            .pipe(this.angulartics2.filterDeveloperMode())
            .subscribe((x) => this.pageTrack(x.path));
        this.angulartics2.eventTrack
            .pipe(this.angulartics2.filterDeveloperMode())
            .subscribe((x) => this.eventTrack(x.action, x.properties));
    }
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
     * @param action A string corresponding to the type of event that needs to be tracked.
     * @param properties The properties that need to be logged with the event.
     */
    eventTrack(action, properties = {}) {
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
     */
    setUserProperties(properties) {
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
    setCustomDimensions(properties) {
        const dimensionRegex = /dimension[1-9]\d*/;
        const dimensions = Object.keys(properties)
            .filter(key => dimensionRegex.exec(key));
        dimensions.forEach(dimension => {
            const number = Number(dimension.substr(9));
            _paq.push(['setCustomDimension', number, properties[dimension]]);
        });
        return dimensions;
    }
};
Angulartics2Piwik.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function Angulartics2Piwik_Factory() { return new Angulartics2Piwik(i0.ɵɵinject(i1.Angulartics2)); }, token: Angulartics2Piwik, providedIn: "root" });
Angulartics2Piwik = tslib_1.__decorate([
    Injectable({ providedIn: 'root' }),
    tslib_1.__metadata("design:paramtypes", [Angulartics2])
], Angulartics2Piwik);
export { Angulartics2Piwik };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGl3aWsuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFydGljczIvcGl3aWsvIiwic291cmNlcyI6WyJwaXdpay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7QUFLNUMsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFFNUIsWUFBb0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDNUMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssV0FBVyxFQUFFO1lBQ2pDLE9BQU8sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUNqQztRQUNELElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVzthQUMxQixTQUFTLENBQUMsQ0FBQyxDQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQjthQUNoQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTO2FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixFQUFFLENBQUM7YUFDN0MsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVTthQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO2FBQzdDLFNBQVMsQ0FBQyxD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QUMsSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUN2QyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDM0MsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUM3QixNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRSxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7Q0FDRixDQUFBOztBQW5QWSxpQkFBaUI7SUFEN0IsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDOzZDQUdDLFlBQVk7R0FGbkMsaUJBQWlCLENBbVA3QjtTQW5QWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFuZ3VsYXJ0aWNzMiB9IGZyb20gJ2FuZ3VsYXJ0aWNzMic7XG5cbmRlY2xhcmUgdmFyIF9wYXE6IGFueTtcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFydGljczJQaXdpayB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhbmd1bGFydGljczI6IEFuZ3VsYXJ0aWNzMikge1xuICAgIGlmICh0eXBlb2YgKF9wYXEpID09PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS53YXJuKCdQaXdpayBub3QgZm91bmQnKTtcbiAgICB9XG4gICAgdGhpcy5hbmd1bGFydGljczIuc2V0VXNlcm5hbWVcbiAgICAgIC5zdWJzY3JpYmUoKHg6IHN0cmluZykgPT4gdGhpcy5zZXRVc2VybmFtZSh4KSk7XG4gICAgdGhpcy5hbmd1bGFydGljczIuc2V0VXNlclByb3BlcnRpZXNcbiAgICAgIC5zdWJzY3JpYmUoKHgpID0+IHRoaXMuc2V0VXNlclByb3BlcnRpZXMoeCkpO1xuICB9XG5cbiAgc3RhcnRUcmFja2luZygpOiB2b2lkIHtcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5wYWdlVHJhY2tcbiAgICAgIC5waXBlKHRoaXMuYW5ndWxhcnRpY3MyLmZpbHRlckRldmVsb3Blck1vZGUoKSlcbiAgICAgIC5zdWJzY3JpYmUoKHgpID0+IHRoaXMucGFnZVRyYWNrKHgucGF0aCkpO1xuICAgIHRoaXMuYW5ndWxhcnRpY3MyLmV2ZW50VHJhY2tcbiAgICAgIC5waXBlKHRoaXMuYW5ndWxhcnRpY3MyLmZpbHRlckRldmVsb3Blck1vZGUoKSlcbiAgICAgIC5zdWJzY3JpYmUoKHgpID0+IHRoaXMuZXZlbnRUcmFjayh4LmFjdGlvbiwgeC5wcm9wZXJ0aWVzKSk7XG4gIH1cblxuICBwYWdlVHJhY2socGF0aDogc3RyaW5nLCBsb2NhdGlvbj86IGFueSkge1xuICAgIHRyeSB7XG4gICAgICBfcGFxLnB1c2goWydzZXREb2N1bWVudFRpdGxlJywgd2luZG93LmRvY3VtZW50LnRpdGxlXSk7XG4gICAgICBfcGFxLnB1c2goWydzZXRDdXN0b21VcmwnLCBwYXRoXSk7XG4gICAgICBfcGFxLnB1c2goWyd0cmFja1BhZ2VWaWV3J10pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHJhY2sgYSBiYXNpYyBldmVudCBpbiBQaXdpaywgb3Igc2VuZCBhbiBlY29tbWVyY2UgZXZlbnQuXG4gICAqXG4gICAqIEBwYXJhbSBhY3Rpb24gQSBzdHJpbmcgY29ycmVzcG9uZGluZyB0byB0aGUgdHlwZSBvZiBldmVudCB0aGF0IG5lZWRzIHRvIGJlIHRyYWNrZWQuXG4gICAqIEBwYXJhbSBwcm9wZXJ0aWVzIFRoZSBwcm9wZXJ0aWVzIHRoYXQgbmVlZCB0byBiZSBsb2dnZWQgd2l0aCB0aGUgZXZlbnQuXG4gICAqL1xuICBldmVudFRyYWNrKGFjdGlvbjogc3RyaW5nLCBwcm9wZXJ0aWVzOiBhbnkgPSB7fSkge1xuICAgIGxldCBwYXJhbXMgPSBbXTtcbiAgICBzd2l0Y2ggKGFjdGlvbikge1xuICAgICAgLyoqXG4gICAgICAgKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgY3VycmVudCBwYWdlIHZpZXcgYXMgYSBwcm9kdWN0IG9yIGNhdGVnb3J5IHBhZ2Ugdmlldy4gV2hlbiB5b3UgY2FsbFxuICAgICAgICogc2V0RWNvbW1lcmNlVmlldyBpdCBtdXN0IGJlIGZvbGxvd2VkIGJ5IGEgY2FsbCB0byB0cmFja1BhZ2VWaWV3IHRvIHJlY29yZCB0aGUgcHJvZHVjdCBvclxuICAgICAgICogY2F0ZWdvcnkgcGFnZSB2aWV3LlxuICAgICAgICpcbiAgICAgICAqIEBsaW5rIGh0dHBzOi8vcGl3aWsub3JnL2RvY3MvZWNvbW1lcmNlLWFuYWx5dGljcy8jdHJhY2tpbmctcHJvZHVjdC1wYWdlLXZpZXdzLWNhdGVnb3J5LXBhZ2Utdmlld3Mtb3B0aW9uYWxcbiAgICAgICAqIEBsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLnBpd2lrLm9yZy9hcGktcmVmZXJlbmNlL3RyYWNraW5nLWphdmFzY3JpcHQjZWNvbW1lcmNlXG4gICAgICAgKlxuICAgICAgICogQHByb3BlcnR5IHByb2R1Y3RTS1UgKHJlcXVpcmVkKSBTS1U6IFByb2R1Y3QgdW5pcXVlIGlkZW50aWZpZXJcbiAgICAgICAqIEBwcm9wZXJ0eSBwcm9kdWN0TmFtZSAob3B0aW9uYWwpIFByb2R1Y3QgbmFtZVxuICAgICAgICogQHByb3BlcnR5IGNhdGVnb3J5TmFtZSAob3B0aW9uYWwpIFByb2R1Y3QgY2F0ZWdvcnksIG9yIGFycmF5IG9mIHVwIHRvIDUgY2F0ZWdvcmllc1xuICAgICAgICogQHByb3BlcnR5IHByaWNlIChvcHRpb25hbCkgUHJvZHVjdCBQcmljZSBhcyBkaXNwbGF5ZWQgb24gdGhlIHBhZ2VcbiAgICAgICAqL1xuICAgICAgY2FzZSAnc2V0RWNvbW1lcmNlVmlldyc6XG4gICAgICAgIHBhcmFtcyA9IFsnc2V0RWNvbW1lcmNlVmlldycsXG4gICAgICAgICAgcHJvcGVydGllcy5wcm9kdWN0U0tVLFxuICAgICAgICAgIHByb3BlcnRpZXMucHJvZHVjdE5hbWUsXG4gICAgICAgICAgcHJvcGVydGllcy5jYXRlZ29yeU5hbWUsXG4gICAgICAgICAgcHJvcGVydGllcy5wcmljZSxcbiAgICAgICAgXTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8qKlxuICAgICAgICogQGRlc2NyaXB0aW9uIEFkZHMgYSBwcm9kdWN0IGludG8gdGhlIGVjb21tZXJjZSBvcmRlci4gTXVzdCBiZSBjYWxsZWQgZm9yIGVhY2ggcHJvZHVjdCBpblxuICAgICAgICogdGhlIG9yZGVyLlxuICAgICAgICpcbiAgICAgICAqIEBsaW5rIGh0dHBzOi8vcGl3aWsub3JnL2RvY3MvZWNvbW1lcmNlLWFuYWx5dGljcy8jdHJhY2tpbmctZWNvbW1lcmNlLW9yZGVycy1pdGVtcy1wdXJjaGFzZWQtcmVxdWlyZWRcbiAgICAgICAqIEBsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLnBpd2lrLm9yZy9hcGktcmVmZXJlbmNlL3RyYWNraW5nLWphdmFzY3JpcHQjZWNvbW1lcmNlXG4gICAgICAgKlxuICAgICAgICogQHByb3BlcnR5IHByb2R1Y3RTS1UgKHJlcXVpcmVkKSBTS1U6IFByb2R1Y3QgdW5pcXVlIGlkZW50aWZpZXJcbiAgICAgICAqIEBwcm9wZXJ0eSBwcm9kdWN0TmFtZSAob3B0aW9uYWwpIFByb2R1Y3QgbmFtZVxuICAgICAgICogQHByb3BlcnR5IGNhdGVnb3J5TmFtZSAob3B0aW9uYWwpIFByb2R1Y3QgY2F0ZWdvcnksIG9yIGFycmF5IG9mIHVwIHRvIDUgY2F0ZWdvcmllc1xuICAgICAgICogQHByb3BlcnR5IHByaWNlIChyZWNvbW1lbmRlZCkgUHJvZHVjdCBwcmljZVxuICAgICAgICogQHByb3BlcnR5IHF1YW50aXR5IChvcHRpb25hbCwgZGVmYXVsdCB0byAxKSBQcm9kdWN0IHF1YW50aXR5XG4gICAgICAgKi9cbiAgICAgIGNhc2UgJ2FkZEVjb21tZXJjZUl0ZW0nOlxuICAgICAgICBwYXJhbXMgPSBbXG4gICAgICAgICAgJ2FkZEVjb21tZXJjZUl0ZW0nLFxuICAgICAgICAgIHByb3BlcnRpZXMucHJvZHVjdFNLVSxcbiAgICAgICAgICBwcm9wZXJ0aWVzLnByb2R1Y3ROYW1lLFxuICAgICAgICAgIHByb3BlcnRpZXMucHJvZHVjdENhdGVnb3J5LFxuICAgICAgICAgIHByb3BlcnRpZXMucHJpY2UsXG4gICAgICAgICAgcHJvcGVydGllcy5xdWFudGl0eSxcbiAgICAgICAgXTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8qKlxuICAgICAgICogQGRlc2NyaXB0aW9uIFRyYWNrcyBhIHNob3BwaW5nIGNhcnQuIENhbGwgdGhpcyBqYXZhc2NyaXB0IGZ1bmN0aW9uIGV2ZXJ5IHRpbWUgYSB1c2VyIGlzXG4gICAgICAgKiBhZGRpbmcsIHVwZGF0aW5nIG9yIGRlbGV0aW5nIGEgcHJvZHVjdCBmcm9tIHRoZSBjYXJ0LlxuICAgICAgICpcbiAgICAgICAqIEBsaW5rIGh0dHBzOi8vcGl3aWsub3JnL2RvY3MvZWNvbW1lcmNlLWFuYWx5dGljcy8jdHJhY2tpbmctYWRkLXRvLWNhcnQtaXRlbXMtYWRkZWQtdG8tdGhlLWNhcnQtb3B0aW9uYWxcbiAgICAgICAqIEBsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLnBpd2lrLm9yZy9hcGktcmVmZXJlbmNlL3RyYWNraW5nLWphdmFzY3JpcHQjZWNvbW1lcmNlXG4gICAgICAgKlxuICAgICAgICogQHByb3BlcnR5IGdyYW5kVG90YWwgKHJlcXVpcmVkKSBDYXJ0IGFtb3VudFxuICAgICAgICovXG4gICAgICBjYXNlICd0cmFja0Vjb21tZXJjZUNhcnRVcGRhdGUnOlxuICAgICAgICBwYXJhbXMgPSBbJ3RyYWNrRWNvbW1lcmNlQ2FydFVwZGF0ZScsIHByb3BlcnRpZXMuZ3JhbmRUb3RhbF07XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvKipcbiAgICAgICAqIEBkZXNjcmlwdGlvbiBUcmFja3MgYW4gRWNvbW1lcmNlIG9yZGVyLCBpbmNsdWRpbmcgYW55IGVjb21tZXJjZSBpdGVtIHByZXZpb3VzbHkgYWRkZWQgdG9cbiAgICAgICAqIHRoZSBvcmRlci4gb3JkZXJJZCBhbmQgZ3JhbmRUb3RhbCAoaWUuIHJldmVudWUpIGFyZSByZXF1aXJlZCBwYXJhbWV0ZXJzLlxuICAgICAgICpcbiAgICAgICAqIEBsaW5rIGh0dHBzOi8vcGl3aWsub3JnL2RvY3MvZWNvbW1lcmNlLWFuYWx5dGljcy8jdHJhY2tpbmctZWNvbW1lcmNlLW9yZGVycy1pdGVtcy1wdXJjaGFzZWQtcmVxdWlyZWRcbiAgICAgICAqIEBsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLnBpd2lrLm9yZy9hcGktcmVmZXJlbmNlL3RyYWNraW5nLWphdmFzY3JpcHQjZWNvbW1lcmNlXG4gICAgICAgKlxuICAgICAgICogQHByb3BlcnR5IG9yZGVySWQgKHJlcXVpcmVkKSBVbmlxdWUgT3JkZXIgSURcbiAgICAgICAqIEBwcm9wZXJ0eSBncmFuZFRvdGFsIChyZXF1aXJlZCkgT3JkZXIgUmV2ZW51ZSBncmFuZCB0b3RhbCAoaW5jbHVkZXMgdGF4LCBzaGlwcGluZywgYW5kIHN1YnRyYWN0ZWQgZGlzY291bnQpXG4gICAgICAgKiBAcHJvcGVydHkgc3ViVG90YWwgKG9wdGlvbmFsKSBPcmRlciBzdWIgdG90YWwgKGV4Y2x1ZGVzIHNoaXBwaW5nKVxuICAgICAgICogQHByb3BlcnR5IHRheCAob3B0aW9uYWwpIFRheCBhbW91bnRcbiAgICAgICAqIEBwcm9wZXJ0eSBzaGlwcGluZyAob3B0aW9uYWwpIFNoaXBwaW5nIGFtb3VudFxuICAgICAgICogQHByb3BlcnR5IGRpc2NvdW50IChvcHRpb25hbCkgRGlzY291bnQgb2ZmZXJlZCAoc2V0IHRvIGZhbHNlIGZvciB1bnNwZWNpZmllZCBwYXJhbWV0ZXIpXG4gICAgICAgKi9cbiAgICAgIGNhc2UgJ3RyYWNrRWNvbW1lcmNlT3JkZXInOlxuICAgICAgICBwYXJhbXMgPSBbXG4gICAgICAgICAgJ3RyYWNrRWNvbW1lcmNlT3JkZXInLFxuICAgICAgICAgIHByb3BlcnRpZXMub3JkZXJJZCxcbiAgICAgICAgICBwcm9wZXJ0aWVzLmdyYW5kVG90YWwsXG4gICAgICAgICAgcHJvcGVydGllcy5zdWJUb3RhbCxcbiAgICAgICAgICBwcm9wZXJ0aWVzLnRheCxcbiAgICAgICAgICBwcm9wZXJ0aWVzLnNoaXBwaW5nLFxuICAgICAgICAgIHByb3BlcnRpZXMuZGlzY291bnQsXG4gICAgICAgIF07XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvKipcbiAgICAgICAqIEBkZXNjcmlwdGlvbiBUcmFja3MgYW4gRWNvbW1lcmNlIGdvYWxcbiAgICAgICAqXG4gICAgICAgKiBAbGluayBodHRwczovL3Bpd2lrLm9yZy9kb2NzL3RyYWNraW5nLWdvYWxzLXdlYi1hbmFseXRpY3MvXG4gICAgICAgKiBAbGluayBodHRwczovL2RldmVsb3Blci5waXdpay5vcmcvZ3VpZGVzL3RyYWNraW5nLWphdmFzY3JpcHQtZ3VpZGUjbWFudWFsbHktdHJpZ2dlci1nb2FsLWNvbnZlcnNpb25zXG4gICAgICAgKlxuICAgICAgICogQHByb3BlcnR5IGdvYWxJZCAocmVxdWlyZWQpIFVuaXF1ZSBHb2FsIElEXG4gICAgICAgKiBAcHJvcGVydHkgdmFsdWUgKG9wdGlvbmFsKSBwYXNzZWQgdG8gZ29hbCB0cmFja2luZ1xuICAgICAgICovXG4gICAgICBjYXNlICd0cmFja0dvYWwnOlxuICAgICAgICBwYXJhbXMgPSBbXG4gICAgICAgICAgJ3RyYWNrR29hbCcsXG4gICAgICAgICAgcHJvcGVydGllcy5nb2FsSWQsXG4gICAgICAgICAgcHJvcGVydGllcy52YWx1ZSxcbiAgICAgICAgXTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8qKlxuICAgICAgICogQGRlc2NyaXB0aW9uIFRyYWNrcyBhIHNpdGUgc2VhcmNoXG4gICAgICAgKlxuICAgICAgICogQGxpbmsgaHR0cHM6Ly9waXdpay5vcmcvZG9jcy9zaXRlLXNlYXJjaC9cbiAgICAgICAqIEBsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLnBpd2lrLm9yZy9ndWlkZXMvdHJhY2tpbmctamF2YXNjcmlwdC1ndWlkZSNpbnRlcm5hbC1zZWFyY2gtdHJhY2tpbmdcbiAgICAgICAqXG4gICAgICAgKiBAcHJvcGVydHkga2V5d29yZCAocmVxdWlyZWQpIEtleXdvcmQgc2VhcmNoZWQgZm9yXG4gICAgICAgKiBAcHJvcGVydHkgY2F0ZWdvcnkgKG9wdGlvbmFsKSBTZWFyY2ggY2F0ZWdvcnlcbiAgICAgICAqIEBwcm9wZXJ0eSBzZWFyY2hDb3VudCAob3B0aW9uYWwpIE51bWJlciBvZiByZXN1bHRzXG4gICAgICAgKi9cbiAgICAgIGNhc2UgJ3RyYWNrU2l0ZVNlYXJjaCc6XG4gICAgICAgIHBhcmFtcyA9IFtcbiAgICAgICAgICAndHJhY2tTaXRlU2VhcmNoJyxcbiAgICAgICAgICBwcm9wZXJ0aWVzLmtleXdvcmQsXG4gICAgICAgICAgcHJvcGVydGllcy5jYXRlZ29yeSxcbiAgICAgICAgICBwcm9wZXJ0aWVzLnNlYXJjaENvdW50LFxuICAgICAgICBdO1xuICAgICAgICBicmVhaztcblxuICAgICAgLyoqXG4gICAgICAgKiBAZGVzY3JpcHRpb24gTG9ncyBhbiBldmVudCB3aXRoIGFuIGV2ZW50IGNhdGVnb3J5IChWaWRlb3MsIE11c2ljLCBHYW1lcy4uLiksIGFuIGV2ZW50XG4gICAgICAgKiBhY3Rpb24gKFBsYXksIFBhdXNlLCBEdXJhdGlvbiwgQWRkIFBsYXlsaXN0LCBEb3dubG9hZGVkLCBDbGlja2VkLi4uKSwgYW5kIGFuIG9wdGlvbmFsXG4gICAgICAgKiBldmVudCBuYW1lIGFuZCBvcHRpb25hbCBudW1lcmljIHZhbHVlLlxuICAgICAgICpcbiAgICAgICAqIEBsaW5rIGh0dHBzOi8vcGl3aWsub3JnL2RvY3MvZXZlbnQtdHJhY2tpbmcvXG4gICAgICAgKiBAbGluayBodHRwczovL2RldmVsb3Blci5waXdpay5vcmcvYXBpLXJlZmVyZW5jZS90cmFja2luZy1qYXZhc2NyaXB0I3VzaW5nLXRoZS10cmFja2VyLW9iamVjdFxuICAgICAgICpcbiAgICAgICAqIEBwcm9wZXJ0eSBjYXRlZ29yeVxuICAgICAgICogQHByb3BlcnR5IGFjdGlvblxuICAgICAgICogQHByb3BlcnR5IG5hbWUgKG9wdGlvbmFsLCByZWNvbW1lbmRlZClcbiAgICAgICAqIEBwcm9wZXJ0eSB2YWx1ZSAob3B0aW9uYWwpXG4gICAgICAgKi9cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vIFBBUSByZXF1aXJlcyB0aGF0IGV2ZW50VmFsdWUgYmUgYW4gaW50ZWdlciwgc2VlOiBodHRwOi8vcGl3aWsub3JnL2RvY3MvZXZlbnQtdHJhY2tpbmdcbiAgICAgICAgaWYgKHByb3BlcnRpZXMudmFsdWUpIHtcbiAgICAgICAgICBjb25zdCBwYXJzZWQgPSBwYXJzZUludChwcm9wZXJ0aWVzLnZhbHVlLCAxMCk7XG4gICAgICAgICAgcHJvcGVydGllcy52YWx1ZSA9IGlzTmFOKHBhcnNlZCkgPyAwIDogcGFyc2VkO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFyYW1zID0gW1xuICAgICAgICAgICd0cmFja0V2ZW50JyxcbiAgICAgICAgICBwcm9wZXJ0aWVzLmNhdGVnb3J5LFxuICAgICAgICAgIGFjdGlvbixcbiAgICAgICAgICBwcm9wZXJ0aWVzLm5hbWUgfHwgcHJvcGVydGllcy5sYWJlbCwgLy8gQ2hhbmdlZCBpbiBmYXZvdXIgb2YgUGl3aWsgZG9jdW1lbnRhdGlvbi4gQWRkZWQgZmFsbGJhY2sgc28gaXQncyBiYWNrd2FyZHMgY29tcGF0aWJsZS5cbiAgICAgICAgICBwcm9wZXJ0aWVzLnZhbHVlLFxuICAgICAgICBdO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgX3BhcS5wdXNoKHBhcmFtcyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldFVzZXJuYW1lKHVzZXJJZDogc3RyaW5nIHwgYm9vbGVhbikge1xuICAgIHRyeSB7XG4gICAgICBfcGFxLnB1c2goWydzZXRVc2VySWQnLCB1c2VySWRdKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgY3VzdG9tIGRpbWVuc2lvbnMgaWYgYXQgbGVhc3Qgb25lIHByb3BlcnR5IGhhcyB0aGUga2V5IFwiZGltZW5zaW9uPG4+XCIsXG4gICAqIGUuZy4gZGltZW5zaW9uMTAuIElmIHRoZXJlIGFyZSBjdXN0b20gZGltZW5zaW9ucywgYW55IG90aGVyIHByb3BlcnR5IGlzIGlnbm9yZWQuXG4gICAqXG4gICAqIElmIHRoZXJlIGFyZSBubyBjdXN0b20gZGltZW5zaW9ucyBpbiB0aGUgZ2l2ZW4gcHJvcGVydGllcyBvYmplY3QsIHRoZSBwcm9wZXJ0aWVzXG4gICAqIG9iamVjdCBpcyBzYXZlZCBhcyBhIGN1c3RvbSB2YXJpYWJsZS5cbiAgICpcbiAgICogSWYgaW4gZG91YnQsIHByZWZlciBjdXN0b20gZGltZW5zaW9ucy5cbiAgICogQGxpbmsgaHR0cHM6Ly9waXdpay5vcmcvZG9jcy9jdXN0b20tdmFyaWFibGVzL1xuICAgKi9cbiAgc2V0VXNlclByb3BlcnRpZXMocHJvcGVydGllczogYW55KSB7XG4gICAgY29uc3QgZGltZW5zaW9ucyA9IHRoaXMuc2V0Q3VzdG9tRGltZW5zaW9ucyhwcm9wZXJ0aWVzKTtcbiAgICB0cnkge1xuICAgICAgaWYgKGRpbWVuc2lvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIF9wYXEucHVzaChbJ3NldEN1c3RvbVZhcmlhYmxlJywgcHJvcGVydGllc10pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldEN1c3RvbURpbWVuc2lvbnMocHJvcGVydGllczogYW55KTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGRpbWVuc2lvblJlZ2V4OiBSZWdFeHAgPSAvZGltZW5zaW9uWzEtOV1cXGQqLztcbiAgICBjb25zdCBkaW1lbnNpb25zID0gT2JqZWN0LmtleXMocHJvcGVydGllcylcbiAgICAgIC5maWx0ZXIoa2V5ID0+IGRpbWVuc2lvblJlZ2V4LmV4ZWMoa2V5KSk7XG4gICAgZGltZW5zaW9ucy5mb3JFYWNoKGRpbWVuc2lvbiA9PiB7XG4gICAgICBjb25zdCBudW1iZXIgPSBOdW1iZXIoZGltZW5zaW9uLnN1YnN0cig5KSk7XG4gICAgICBfcGFxLnB1c2goWydzZXRDdXN0b21EaW1lbnNpb24nLCBudW1iZXIsIHByb3BlcnRpZXNbZGltZW5zaW9uXV0pO1xuICAgIH0pO1xuICAgIHJldHVybiBkaW1lbnNpb25zO1xuICB9XG59XG4iXX0=