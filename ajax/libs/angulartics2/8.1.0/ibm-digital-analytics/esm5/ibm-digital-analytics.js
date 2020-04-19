import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Angulartics2 } from 'angulartics2';
import * as i0 from "@angular/core";
import * as i1 from "angulartics2";
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
    Angulartics2IBMDigitalAnalytics.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function Angulartics2IBMDigitalAnalytics_Factory() { return new Angulartics2IBMDigitalAnalytics(i0.ɵɵinject(i1.Angulartics2)); }, token: Angulartics2IBMDigitalAnalytics, providedIn: "root" });
    Angulartics2IBMDigitalAnalytics = tslib_1.__decorate([
        Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [Angulartics2])
    ], Angulartics2IBMDigitalAnalytics);
    return Angulartics2IBMDigitalAnalytics;
}());
export { Angulartics2IBMDigitalAnalytics };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWJtLWRpZ2l0YWwtYW5hbHl0aWNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhcnRpY3MyL2libS1kaWdpdGFsLWFuYWx5dGljcy8iLCJzb3VyY2VzIjpbImlibS1kaWdpdGFsLWFuYWx5dGljcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7QUFHNUM7SUFDRSx5Q0FBb0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDNUMsSUFBSSxPQUFPLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLFVBQVUsRUFBRTtZQUN2RCxPQUFPLENBQUMsSUFBSSxDQUNWLHdFQUF3RSxDQUN6RSxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBRUQsdURBQWEsR0FBYjtRQUFBLGlCQU9DO1FBTkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTO2FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixFQUFFLENBQUM7YUFDN0MsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQXRCLENBQXNCLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVU7YUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLEVBQUUsQ0FBQzthQUM3QyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUF2QyxDQUF1QyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILG1EQUFTLEdBQVQsVUFBVSxJQUFZO1FBQ3BCLElBQU0sbUJBQW1CLEdBQUcsTUFB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aEIsVUFBVSxDQUFDLFNBQVMsRUFDcEIsVUFBVSxDQUFDLGVBQWUsRUFDMUIsVUFBVSxDQUFDLFFBQVEsQ0FDcEIsQ0FBQztnQkFFRixNQUFNO1lBRVI7Ozs7OztlQU1HO1lBQ0gsS0FBSyw0QkFBNEI7Z0JBQy9CLElBQU0sMEJBQTBCLEdBQUcsTUFBTSxDQUFDLDRCQUE0QixDQUFDLENBQUM7Z0JBQ3hFLDBCQUEwQixDQUN4QixVQUFVLENBQUMsT0FBTyxFQUNsQixVQUFVLENBQUMsVUFBVSxFQUNyQixVQUFVLENBQUMsZUFBZSxFQUMxQixVQUFVLENBQUMsTUFBTSxFQUNqQixVQUFVLENBQUMsUUFBUSxFQUNuQixVQUFVLENBQUMsV0FBVyxDQUN2QixDQUFDO2dCQUVGLE1BQU07WUFFUjtnQkFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUM7U0FDNUM7SUFDSCxDQUFDOztJQTVMVSwrQkFBK0I7UUFEM0MsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO2lEQUVDLFlBQVk7T0FEbkMsK0JBQStCLENBNkwzQzswQ0FqTUQ7Q0FpTUMsQUE3TEQsSUE2TEM7U0E3TFksK0JBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBbmd1bGFydGljczIgfSBmcm9tICdhbmd1bGFydGljczInO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJ0aWNzMklCTURpZ2l0YWxBbmFseXRpY3Mge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYW5ndWxhcnRpY3MyOiBBbmd1bGFydGljczIpIHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93WydjbUNyZWF0ZVBhZ2V2aWV3VGFnJ10gIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgICdBbmd1bGFydGljcyAyIElCTSBEaWdpdGFsIEFuYWx5dGljcyBQbHVnaW46IGVsdW1pbmF0ZS5qcyBpcyBub3QgbG9hZGVkJyxcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXJ0VHJhY2tpbmcoKTogdm9pZCB7XHJcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5wYWdlVHJhY2tcclxuICAgICAgLnBpcGUodGhpcy5hbmd1bGFydGljczIuZmlsdGVyRGV2ZWxvcGVyTW9kZSgpKVxyXG4gICAgICAuc3Vic2NyaWJlKHggPT4gdGhpcy5wYWdlVHJhY2soeC5wYXRoKSk7XHJcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5ldmVudFRyYWNrXHJcbiAgICAgIC5waXBlKHRoaXMuYW5ndWxhcnRpY3MyLmZpbHRlckRldmVsb3Blck1vZGUoKSlcclxuICAgICAgLnN1YnNjcmliZSh4ID0+IHRoaXMuZXZlbnRUcmFjayh4LmFjdGlvbiwgeC5wcm9wZXJ0aWVzKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUcmFjayBQYWdlIGluIElCTSBEaWdpdGFsIEFuYWx5dGljc1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHBhdGggbG9jYXRpb25cclxuICAgKlxyXG4gICAqIEBsaW5rIGh0dHBzOi8vd3d3LmlibS5jb20vc3VwcG9ydC9rbm93bGVkZ2VjZW50ZXIvU1NQRzlNL0ltcGxlbWVudGF0aW9uL2ltcGxfcGFnZXZpZXd0YWcuaHRtbFxyXG4gICAqL1xyXG4gIHBhZ2VUcmFjayhwYXRoOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGNtQ3JlYXRlUGFnZXZpZXdUYWcgPSB3aW5kb3dbJ2NtQ3JlYXRlUGFnZXZpZXdUYWcnXTtcclxuICAgIGNtQ3JlYXRlUGFnZXZpZXdUYWcocGF0aCwgbnVsbCwgbnVsbCwgbnVsbCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUcmFjayBhbiBldmVudCBpbiBJQk0gRGlnaXRhbCBBbmFseXRpY3NcclxuICAgKlxyXG4gICAqIEBwYXJhbSBhY3Rpb24gQSBzdHJpbmcgY29ycmVzcG9uZGluZyB0byB0aGUgdHlwZSBvZiBldmVudCB0aGF0IG5lZWRzIHRvIGJlIHRyYWNrZWQuXHJcbiAgICogQHBhcmFtIHByb3BlcnRpZXMgVGhlIHByb3BlcnRpZXMgdGhhdCBuZWVkIHRvIGJlIGxvZ2dlZCB3aXRoIHRoZSBldmVudC5cclxuICAgKi9cclxuICBldmVudFRyYWNrKGFjdGlvbjogc3RyaW5nLCBwcm9wZXJ0aWVzOiBhbnkgPSB7fSkge1xyXG4gICAgY29uc3QgY21EaXNwbGF5U2hvcHMgPSB3aW5kb3dbJ2NtRGlzcGxheVNob3BzJ107XHJcbiAgICBzd2l0Y2ggKGFjdGlvbikge1xyXG4gICAgICAvKipcclxuICAgICAgICogQGRlc2NyaXB0aW9uIFRoZSBQcm9kdWN0IFZpZXcgdGFnIGNhcHR1cmVzIGluZm9ybWF0aW9uIGFib3V0IHZkaWdpdGFsRGF0YWlld3Mgb2YgcHJvZHVjdCBkZXRhaWwgcGFnZXMuXHJcbiAgICAgICAqICBUaGUgUHJvZHVjdCBWaWV3IHRhZyBzaG91bGQgYmUgY2FsbGVkIG9uIHRoZSBsb3dlc3QgbGV2ZWwgZGV0YWlsIHBhZ2UgZm9yIHByb2R1Y3RzLCB3aGljaCBpcyB0eXBpY2FsbHlcclxuICAgICAgICogIHRoZSBQcm9kdWN0IERldGFpbHMgcGFnZS4gWW91IGNhbiB2aWV3IGV4YW1wbGUgUHJvZHVjdCBWaWV3IHRhZ3MgYmVsb3cuXHJcbiAgICAgICAqXHJcbiAgICAgICAqIEBsaW5rIGh0dHBzOi8vd3d3LmlibS5jb20vc3VwcG9ydC9rbm93bGVkZ2VjZW50ZXIvU1NQRzlNL0ltcGxlbWVudGF0aW9uL2ltcGxfcHJvZHZpZXd0YWcuaHRtbFxyXG4gICAgICAgKi9cclxuICAgICAgY2FzZSAnY21DcmVhdGVQcm9kdWN0dmlld1RhZyc6XHJcbiAgICAgICAgY29uc3QgY21DcmVhdGVQcm9kdWN0dmlld1RhZyA9IHdpbmRvd1snY21DcmVhdGVQcm9kdWN0dmlld1RhZyddO1xyXG4gICAgICAgIGNtQ3JlYXRlUHJvZHVjdHZpZXdUYWcoXHJcbiAgICAgICAgICBwcm9wZXJ0aWVzLnByb2R1Y3RJZCxcclxuICAgICAgICAgIHByb3BlcnRpZXMucHJvZHVjdE5hbWUsXHJcbiAgICAgICAgICBwcm9wZXJ0aWVzLmNhdGVnb3J5SWQsXHJcbiAgICAgICAgICBwcm9wZXJ0aWVzLmF0dHJidXRlLFxyXG4gICAgICAgICAgcHJvcGVydGllcy52aXJ0dWFsQ2F0ZWdvcnksXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogQGRlc2NyaXB0aW9uIFRoZSBTaG9wIEFjdGlvbiA1IHRhZyBjYXB0dXJlcyBkYXRhIGFib3V0IHNlbGVjdGVkIHByb2R1Y3RzIGFuZCB3aGljaCBwcm9kdWN0cyBhcmUgcHJlc2VudCBpbiBhIHNob3BwaW5nIGNhcnQsXHJcbiAgICAgICAqICBpZiBhbnksIHdoZW4gdGhlIGNhcnQgaXMgdmlld2VkLlxyXG4gICAgICAgKlxyXG4gICAgICAgKiBAbGluayBodHRwczovL3d3dy5pYm0uY29tL3N1cHBvcnQva25vd2xlZGdlY2VudGVyL1NTUEc5TS9JbXBsZW1lbnRhdGlvbi9pbXBsX3Nob3BhY3Q1dGFnLmh0bWxcclxuICAgICAgICovXHJcbiAgICAgIGNhc2UgJ2NtQ3JlYXRlU2hvcEFjdGlvbjVUYWcnOlxyXG4gICAgICAgIGNvbnN0IGNtQ3JlYXRlU2hvcEFjdGlvbjVUYWcgPSB3aW5kb3dbJ2NtQ3JlYXRlU2hvcEFjdGlvbjVUYWcnXTtcclxuICAgICAgICBjbUNyZWF0ZVNob3BBY3Rpb241VGFnKFxyXG4gICAgICAgICAgcHJvcGVydGllcy5wcm9kdWN0SWQsXHJcbiAgICAgICAgICBwcm9wZXJ0aWVzLnByb2R1Y3ROYW1lLFxyXG4gICAgICAgICAgcHJvcGVydGllcy5xdWFudGl0eSxcclxuICAgICAgICAgIHByb3BlcnRpZXMudW5pdFByaWNlLFxyXG4gICAgICAgICAgcHJvcGVydGllcy5jYXRlZ29yeUlkLFxyXG4gICAgICAgICAgcHJvcGVydGllcy5hdHRyYnV0ZSxcclxuICAgICAgICAgIHByb3BlcnRpZXMuZXh0cmFGaWVsZHMsXHJcbiAgICAgICAgICBwcm9wZXJ0aWVzLnZpcnR1YWxDYXRlZ29yeSxcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjbURpc3BsYXlTaG9wcygpO1xyXG5cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBAZGVzY3JpcHRpb24gVGhlIFNob3AgQWN0aW9uIDkgdGFnIGNhcHR1cmVzIGRhdGEgYWJvdXQgd2hhdCBwcm9kdWN0cyB3ZXJlIHB1cmNoYXNlZCBieSBhIGN1c3RvbWVyLlxyXG4gICAgICAgKiAgTGlrZSB0aGUgU2hvcCBBY3Rpb24gNSB0YWcsIG9uZSB0YWcgc2hvdWxkIGJlIHNlbnQgZm9yIGVhY2ggcHJvZHVjdCBsaW5lIGl0ZW0gcHVyY2hhc2VkLiBUaGVzZSB0YWdzIHNob3VsZCBiZSBzZW50XHJcbiAgICAgICAqICBvbiB0aGUgcmVjZWlwdCBvciBvdGhlciBjb21wbGV0aW9uIHBhZ2UgY29uZmlybWluZyBhIHN1Y2Nlc3NmdWwgb3JkZXIuXHJcbiAgICAgICAqXHJcbiAgICAgICAqIEBsaW5rIGh0dHBzOi8vd3d3LmlibS5jb20vc3VwcG9ydC9rbm93bGVkZ2VjZW50ZXIvU1NQRzlNL0ltcGxlbWVudGF0aW9uL2ltcGxfc2hvcGFjdDl0YWcuaHRtbFxyXG4gICAgICAgKi9cclxuICAgICAgY2FzZSAnY21DcmVhdGVTaG9wQWN0aW9uOVRhZyc6XHJcbiAgICAgICAgY29uc3QgY21DcmVhdGVTaG9wQWN0aW9uOVRhZyA9IHdpbmRvd1snY21DcmVhdGVTaG9wQWN0aW9uOVRhZyddO1xyXG4gICAgICAgIGNtQ3JlYXRlU2hvcEFjdGlvbjlUYWcoXHJcbiAgICAgICAgICBwcm9wZXJ0aWVzLnByb2R1Y3RJZCxcclxuICAgICAgICAgIHByb3BlcnRpZXMucHJvZHVjdE5hbWUsXHJcbiAgICAgICAgICBwcm9wZXJ0aWVzLnF1YW50aXR5LFxyXG4gICAgICAgICAgcHJvcGVydGllcy51bml0UHJpY2UsXHJcbiAgICAgICAgICBwcm9wZXJ0aWVzLnJlZ2lzdHJhdGlvbklkLFxyXG4gICAgICAgICAgcHJvcGVydGllcy5vcmRlcklkLFxyXG4gICAgICAgICAgcHJvcGVydGllcy5vcmRlclN1YnRvdGFsLFxyXG4gICAgICAgICAgcHJvcGVydGllcy5jYXRlZ29yeUlkLFxyXG4gICAgICAgICAgcHJvcGVydGllcy5hdHRyYnV0ZSxcclxuICAgICAgICAgIHByb3BlcnRpZXMuZXh0cmFGaWVsZHMsXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY21EaXNwbGF5U2hvcHMoKTtcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogQGRlc2NyaXB0aW9uIFRoZSBPcmRlciB0YWcgY2FwdHVyZXMgb3JkZXIgaGVhZGVyIGluZm9ybWF0aW9uIHN1Y2ggYXMgUmVnaXN0cmF0aW9uIElELCBvcmRlciBJRCwgb3JkZXIgc3VidG90YWwsXHJcbiAgICAgICAqICBhbmQgc2hpcHBpbmcgYW5kIGhhbmRsaW5nLiBUaGUgT3JkZXIgdGFnIHNob3VsZCBiZSBzZW50IG9uIHRoZSByZWNlaXB0IHBhZ2UgY29uZmlybWluZyBvcmRlciBjb21wbGV0aW9uLlxyXG4gICAgICAgKlxyXG4gICAgICAgKiBAbGluayBodHRwczovL3d3dy5pYm0uY29tL3N1cHBvcnQva25vd2xlZGdlY2VudGVyL1NTUEc5TS9JbXBsZW1lbnRhdGlvbi9pbXBsX29yZGVydGFnLmh0bWxcclxuICAgICAgICovXHJcbiAgICAgIGNhc2UgJ2NtQ3JlYXRlT3JkZXJUYWcnOlxyXG4gICAgICAgIGNvbnN0IGNtQ3JlYXRlT3JkZXJUYWcgPSB3aW5kb3dbJ2NtQ3JlYXRlT3JkZXJUYWcnXTtcclxuICAgICAgICBjbUNyZWF0ZU9yZGVyVGFnKFxyXG4gICAgICAgICAgcHJvcGVydGllcy5vcmRlcklkLFxyXG4gICAgICAgICAgcHJvcGVydGllcy5vcmRlclN1YnRvdGFsLFxyXG4gICAgICAgICAgcHJvcGVydGllcy5vcmRlclNoaXBwaW5nLFxyXG4gICAgICAgICAgcHJvcGVydGllcy5yZWdpc3RyYXRpb25JZCxcclxuICAgICAgICAgIHByb3BlcnRpZXMucmVnaXN0cmFudENpdHksXHJcbiAgICAgICAgICBwcm9wZXJ0aWVzLnJlZ2lzdHJhbnRTdGF0ZSxcclxuICAgICAgICAgIHByb3BlcnRpZXMucmVnaXN0cmFudFBvc3RhbENvZGUsXHJcbiAgICAgICAgICBwcm9wZXJ0aWVzLmF0dHJidXRlLFxyXG4gICAgICAgICAgcHJvcGVydGllcy5leHRyYUZpZWxkcyxcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBAZGVzY3JpcHRpb24gVGhlIFJlZ2lzdHJhdGlvbiB0YWcgY3JlYXRlcyBhIExpZmV0aW1lIFZpc2l0b3IgRXhwZXJpZW5jZSBQcm9maWxlIChMSVZFIFByb2ZpbGUpIGJ5IGFzc29jaWF0aW5nIGEgc2luZ2xlXHJcbiAgICAgICAqICBjb21tb24gUmVnaXN0cmF0aW9uIElEIHdpdGggdGhlIElCTcKuIERpZ2l0YWwgQW5hbHl0aWNzIHBlcm1hbmVudCBjb29raWUgc2V0IGluIGV2ZXJ5IGJyb3dzZXIgdmlzaXRpbmcgdGhlIHRhZ2dlZCBzaXRlLlxyXG4gICAgICAgKlxyXG4gICAgICAgKiBAbGluayBodHRwczovL3d3dy5pYm0uY29tL3N1cHBvcnQva25vd2xlZGdlY2VudGVyL1NTUEc5TS9JbXBsZW1lbnRhdGlvbi9pbXBsX3JlZ2lzdHJhdGlvbnRhZy5odG1sXHJcbiAgICAgICAqL1xyXG4gICAgICBjYXNlICdjbUNyZWF0ZVJlZ2lzdHJhdGlvblRhZyc6XHJcbiAgICAgICAgY29uc3QgY21DcmVhdGVSZWdpc3RyYXRpb25UYWcgPSB3aW5kb3dbJ2NtQ3JlYXRlUmVnaXN0cmF0aW9uVGFnJ107XHJcbiAgICAgICAgY21DcmVhdGVSZWdpc3RyYXRpb25UYWcoXHJcbiAgICAgICAgICBwcm9wZXJ0aWVzLnJlZ2lzdHJhdGlvbklkLFxyXG4gICAgICAgICAgcHJvcGVydGllcy5yZWdpc3RyYW50RW1haWwsXHJcbiAgICAgICAgICBwcm9wZXJ0aWVzLnJlZ2lzdHJhbnRDaXR5LFxyXG4gICAgICAgICAgcHJvcGVydGllcy5yZWdpc3RyYW50U3RhdGUsXHJcbiAgICAgICAgICBwcm9wZXJ0aWVzLnJlZ2lzdHJhbnRQb3N0YWxDb2RlLFxyXG4gICAgICAgICAgcHJvcGVydGllcy5yZWdpc3RyYW50Q291bnRyeSxcclxuICAgICAgICAgIHByb3BlcnRpZXMuYXR0cmJ1dGUsXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogQGRlc2NyaXB0aW9uIFRoZSBFbGVtZW50IHRhZyBpcyB1c2VkIHRvIHRyYWNrIGludHJhLXBhZ2UgY29udGVudCBpbiBJQk3CriBEaWdpdGFsIEFuYWx5dGljcy4gRGF0YSBjb2xsZWN0ZWQgYnlcclxuICAgICAgICogIHRoZSBFbGVtZW50IHRhZyBpcyB1c2VkIHRvIHBvcHVsYXRlIHZhbHVlcyBpbiB0aGUgRWxlbWVudCBDYXRlZ29yaWVzIGFuZCBUb3AgVmlld2VkIEVsZW1lbnRzIHJlcG9ydHMuXHJcbiAgICAgICAqXHJcbiAgICAgICAqIEBsaW5rIGh0dHBzOi8vd3d3LmlibS5jb20vc3VwcG9ydC9rbm93bGVkZ2VjZW50ZXIvU1NQRzlNL0ltcGxlbWVudGF0aW9uL2ltcGxfZWxlbWVudHRhZy5odG1sXHJcbiAgICAgICAqL1xyXG4gICAgICBjYXNlICdjbUNyZWF0ZUVsZW1lbnRUYWcnOlxyXG4gICAgICAgIGNvbnN0IGNtQ3JlYXRlRWxlbWVudFRhZyA9IHdpbmRvd1snY21DcmVhdGVFbGVtZW50VGFnJ107XHJcbiAgICAgICAgY21DcmVhdGVFbGVtZW50VGFnKFxyXG4gICAgICAgICAgcHJvcGVydGllcy5lbGVtZW50SWQsXHJcbiAgICAgICAgICBwcm9wZXJ0aWVzLmVsZW1lbnRDYXRlZ29yeSxcclxuICAgICAgICAgIHByb3BlcnRpZXMuYXR0cmJ1dGUsXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogQGRlc2NyaXB0aW9uIFRoZSBDb252ZXJzaW9uIEV2ZW50IHRhZyBpcyBlbXBsb3llZCBmb3IgdHJhY2tpbmcgb2YgZ2VuZXJhbCBub24tY29tbWVyY2UgY29udmVyc2lvbiBldmVudHMuXHJcbiAgICAgICAqIFRoZSBDb252ZXJzaW9uIEV2ZW50IHRhZyBpcyB1c2VkIHRvIHBvcHVsYXRlIHZhbHVlcyBpbiB0aGUgQ29udmVyc2lvbiBFdmVudHMgUmVwb3J0cyBhbmQgdG8gY3JlYXRlIEtleSBTZWdtZW50cy5cclxuICAgICAgICogVGhpcyB0YWcgYW5kIHRoZSByZXBvcnRzIGl0IHBvcHVsYXRlcyBlbmFibGUgYW5hbHlzaXMgb2YgYSB3aWRlIHZhcmlldHkgb2Ygc2l0ZSBhY3Rpdml0aWVzLlxyXG4gICAgICAgKlxyXG4gICAgICAgKiBAbGluayBodHRwczovL3d3dy5pYm0uY29tL3N1cHBvcnQva25vd2xlZGdlY2VudGVyL1NTUEc5TS9JbXBsZW1lbnRhdGlvbi9pbXBsX2NvbnZlcnNpb25ldmVudHRhZy5odG1sXHJcbiAgICAgICAqL1xyXG4gICAgICBjYXNlICdjbUNyZWF0ZUNvbnZlcnNpb25FdmVudFRhZyc6XHJcbiAgICAgICAgY29uc3QgY21DcmVhdGVDb252ZXJzaW9uRXZlbnRUYWcgPSB3aW5kb3dbJ2NtQ3JlYXRlQ29udmVyc2lvbkV2ZW50VGFnJ107XHJcbiAgICAgICAgY21DcmVhdGVDb252ZXJzaW9uRXZlbnRUYWcoXHJcbiAgICAgICAgICBwcm9wZXJ0aWVzLmV2ZW50SWQsXHJcbiAgICAgICAgICBwcm9wZXJ0aWVzLmFjdGlvblR5cGUsXHJcbiAgICAgICAgICBwcm9wZXJ0aWVzLmV2ZW50Q2F0ZWdvcnlJZCxcclxuICAgICAgICAgIHByb3BlcnRpZXMucG9pbnRzLFxyXG4gICAgICAgICAgcHJvcGVydGllcy5hdHRyYnV0ZSxcclxuICAgICAgICAgIHByb3BlcnRpZXMuZXh0cmFGaWVsZHMsXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGNvbnNvbGUud2FybignVW5zdXBwb3J0ZWQgRXZlbnQgQWN0aW9uJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==