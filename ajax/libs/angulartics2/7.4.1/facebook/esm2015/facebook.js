/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Angulartics2 } from 'angulartics2';
import * as i0 from "@angular/core";
import * as i1 from "angulartics2";
/** @type {?} */
const facebookEventList = [
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
export class Angulartics2Facebook {
    /**
     * @param {?} angulartics2
     */
    constructor(angulartics2) {
        this.angulartics2 = angulartics2;
    }
    /**
     * @return {?}
     */
    startTracking() {
        this.angulartics2.eventTrack
            .pipe(this.angulartics2.filterDeveloperMode())
            .subscribe(x => this.eventTrack(x.action, x.properties));
    }
    /**
     * Send interactions to the Pixel, i.e. for event tracking in Pixel
     *
     * @param {?} action action associated with the event
     * @param {?=} properties
     * @return {?}
     */
    eventTrack(action, properties = {}) {
        if (typeof fbq === 'undefined') {
            return;
        }
        if (facebookEventList.indexOf(action) === -1) {
            return fbq('trackCustom', action, properties);
        }
        return fbq('track', action, properties);
    }
}
Angulartics2Facebook.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
Angulartics2Facebook.ctorParameters = () => [
    { type: Angulartics2 }
];
/** @nocollapse */ Angulartics2Facebook.ngInjectableDef = i0.defineInjectable({ factory: function Angulartics2Facebook_Factory() { return new Angulartics2Facebook(i0.inject(i1.Angulartics2)); }, token: Angulartics2Facebook, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    Angulartics2Facebook.prototype.angulartics2;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZWJvb2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFydGljczIvZmFjZWJvb2svIiwic291cmNlcyI6WyJmYWNlYm9vay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7O01BSXRDLGlCQUFpQixHQUFHO0lBQ3hCLGFBQWE7SUFDYixRQUFRO0lBQ1IsV0FBVztJQUNYLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixNQUFNO0lBQ04sc0JBQXNCO0NBQ3ZCO0FBR0QsTUFBTSxPQUFPLG9CQUFvQjs7OztJQUMvQixZQUFvQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUFJLENBQUM7Ozs7SUFFbkQsYUFBYTtRQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVTthQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO2FBQzdDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7Ozs7OztJQU9ELFVBQVUsQ0FBQyxNQUFjLEVBQUUsYUFBa0IsRUFBRTtRQUM3QyxJQUFJLE9BQU8sR0FBRyxLQUFLLFdBQVcsRUFBRTtZQUM5QixPQUFPO1NBQ1I7UUFDRCxJQUFJLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUM1QyxPQUFPLEdBQUcsQ0FBQyxhQUFhLEVBQUUsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQy9DO1FBQ0QsT0FBTyxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7WUF2QkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztZQWhCekIsWUFBWTs7Ozs7Ozs7SUFrQlAsNENBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBbmd1bGFydGljczIgfSBmcm9tICdhbmd1bGFydGljczInO1xuXG5kZWNsYXJlIGNvbnN0IGZicTogZmFjZWJvb2suUGl4ZWwuRXZlbnQ7XG5cbmNvbnN0IGZhY2Vib29rRXZlbnRMaXN0ID0gW1xuICAnVmlld0NvbnRlbnQnLFxuICAnU2VhcmNoJyxcbiAgJ0FkZFRvQ2FydCcsXG4gICdBZGRUb1dpc2hsaXN0JyxcbiAgJ0luaXRpYXRlQ2hlY2tvdXQnLFxuICAnQWRkUGF5bWVudEluZm8nLFxuICAnUHVyY2hhc2UnLFxuICAnTGVhZCcsXG4gICdDb21wbGV0ZVJlZ2lzdHJhdGlvbicsXG5dO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJ0aWNzMkZhY2Vib29rIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhbmd1bGFydGljczI6IEFuZ3VsYXJ0aWNzMikgeyB9XG5cbiAgc3RhcnRUcmFja2luZygpOiB2b2lkIHtcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5ldmVudFRyYWNrXG4gICAgICAucGlwZSh0aGlzLmFuZ3VsYXJ0aWNzMi5maWx0ZXJEZXZlbG9wZXJNb2RlKCkpXG4gICAgICAuc3Vic2NyaWJlKHggPT4gdGhpcy5ldmVudFRyYWNrKHguYWN0aW9uLCB4LnByb3BlcnRpZXMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIGludGVyYWN0aW9ucyB0byB0aGUgUGl4ZWwsIGkuZS4gZm9yIGV2ZW50IHRyYWNraW5nIGluIFBpeGVsXG4gICAqXG4gICAqIEBwYXJhbSBhY3Rpb24gYWN0aW9uIGFzc29jaWF0ZWQgd2l0aCB0aGUgZXZlbnRcbiAgICovXG4gIGV2ZW50VHJhY2soYWN0aW9uOiBzdHJpbmcsIHByb3BlcnRpZXM6IGFueSA9IHt9KSB7XG4gICAgaWYgKHR5cGVvZiBmYnEgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChmYWNlYm9va0V2ZW50TGlzdC5pbmRleE9mKGFjdGlvbikgPT09IC0xKSB7XG4gICAgICByZXR1cm4gZmJxKCd0cmFja0N1c3RvbScsIGFjdGlvbiwgcHJvcGVydGllcyk7XG4gICAgfVxuICAgIHJldHVybiBmYnEoJ3RyYWNrJywgYWN0aW9uLCBwcm9wZXJ0aWVzKTtcbiAgfVxufVxuIl19