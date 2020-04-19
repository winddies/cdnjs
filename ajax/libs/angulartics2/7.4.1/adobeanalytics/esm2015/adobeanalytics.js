/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Angulartics2 } from 'angulartics2';
import * as i0 from "@angular/core";
import * as i1 from "angulartics2";
import * as i2 from "@angular/common";
export class Angulartics2AdobeAnalytics {
    /**
     * @param {?} angulartics2
     * @param {?} location
     */
    constructor(angulartics2, location) {
        this.angulartics2 = angulartics2;
        this.location = location;
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
     * @return {?}
     */
    pageTrack(path) {
        if (typeof s !== 'undefined' && s) {
            s.clearVars();
            s.t({ pageName: path });
        }
    }
    /**
     * Track Event in Adobe Analytics
     *
     * @link https://marketing.adobe.com/resources/help/en_US/sc/implement/js_implementation.html
     * @param {?} action associated with the event
     * @param {?} properties action detials
     *
     * @return {?}
     */
    eventTrack(action, properties) {
        // TODO: make interface
        // @property {string} properties.category
        // @property {string} properties.label
        // @property {number} properties.value
        // @property {boolean} properties.noninteraction
        if (!properties) {
            properties = properties || {};
        }
        if (typeof s !== 'undefined' && s) {
            if (typeof properties === 'object') {
                this.setUserProperties(properties);
            }
            if (action) {
                // if linkName property is passed, use that; otherwise, the action is the linkName
                /** @type {?} */
                const linkName = (properties['linkName']) ? properties['linkName'] : action;
                // note that 'this' should refer the link element, but we can't get that in this function. example:
                // <a href="http://anothersite.com" onclick="s.tl(this,'e','AnotherSite',null)">
                // if disableDelay property is passed, use that to turn off/on the 500ms delay; otherwise, it uses this
                /** @type {?} */
                const disableDelay = !!properties['disableDelay'] ? true : this;
                // if action property is passed, use that; otherwise, the action remains unchanged
                if (properties['action']) {
                    action = properties['action'];
                }
                this.setPageName();
                if (action.toUpperCase() === 'DOWNLOAD') {
                    s.tl(disableDelay, 'd', linkName);
                }
                else if (action.toUpperCase() === 'EXIT') {
                    s.tl(disableDelay, 'e', linkName);
                }
                else {
                    s.tl(disableDelay, 'o', linkName);
                }
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    setPageName() {
        /** @type {?} */
        const path = this.location.path(true);
        /** @type {?} */
        const hashNdx = path.indexOf('#');
        if (hashNdx > 0 && hashNdx < path.length) {
            s.pageName = path.substring(hashNdx + 1);
        }
        else {
            s.pageName = path;
        }
    }
    /**
     * @param {?} properties
     * @return {?}
     */
    setUserProperties(properties) {
        if (typeof s !== 'undefined' && s) {
            if (typeof properties === 'object') {
                for (const key in properties) {
                    if (properties.hasOwnProperty(key)) {
                        s[key] = properties[key];
                    }
                }
            }
        }
    }
}
Angulartics2AdobeAnalytics.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
Angulartics2AdobeAnalytics.ctorParameters = () => [
    { type: Angulartics2 },
    { type: Location }
];
/** @nocollapse */ Angulartics2AdobeAnalytics.ngInjectableDef = i0.defineInjectable({ factory: function Angulartics2AdobeAnalytics_Factory() { return new Angulartics2AdobeAnalytics(i0.inject(i1.Angulartics2), i0.inject(i2.Location)); }, token: Angulartics2AdobeAnalytics, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    Angulartics2AdobeAnalytics.prototype.angulartics2;
    /**
     * @type {?}
     * @private
     */
    Angulartics2AdobeAnalytics.prototype.location;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRvYmVhbmFseXRpY3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFydGljczIvYWRvYmVhbmFseXRpY3MvIiwic291cmNlcyI6WyJhZG9iZWFuYWx5dGljcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztBQUs1QyxNQUFNLE9BQU8sMEJBQTBCOzs7OztJQUVyQyxZQUNVLFlBQTBCLEVBQzFCLFFBQWtCO1FBRGxCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFFMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUI7YUFDaEMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7O0lBRUQsYUFBYTtRQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzthQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO2FBQzdDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVU7YUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLEVBQUUsQ0FBQzthQUM3QyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUMvRCxD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QVk7WUFIWixRQUFROzs7Ozs7OztJQVdiLGtEQUFrQzs7Ozs7SUFDbEMsOENBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBbmd1bGFydGljczIgfSBmcm9tICdhbmd1bGFydGljczInO1xuXG5kZWNsYXJlIGNvbnN0IHM6IGFueTtcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFydGljczJBZG9iZUFuYWx5dGljcyB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhbmd1bGFydGljczI6IEFuZ3VsYXJ0aWNzMixcbiAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbixcbiAgKSB7XG4gICAgdGhpcy5hbmd1bGFydGljczIuc2V0VXNlclByb3BlcnRpZXNcbiAgICAgIC5zdWJzY3JpYmUoKHgpID0+IHRoaXMuc2V0VXNlclByb3BlcnRpZXMoeCkpO1xuICB9XG5cbiAgc3RhcnRUcmFja2luZygpOiB2b2lkIHtcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5wYWdlVHJhY2tcbiAgICAgIC5waXBlKHRoaXMuYW5ndWxhcnRpY3MyLmZpbHRlckRldmVsb3Blck1vZGUoKSlcbiAgICAgIC5zdWJzY3JpYmUoKHgpID0+IHRoaXMucGFnZVRyYWNrKHgucGF0aCkpO1xuICAgIHRoaXMuYW5ndWxhcnRpY3MyLmV2ZW50VHJhY2tcbiAgICAgIC5waXBlKHRoaXMuYW5ndWxhcnRpY3MyLmZpbHRlckRldmVsb3Blck1vZGUoKSlcbiAgICAgIC5zdWJzY3JpYmUoKHgpID0+IHRoaXMuZXZlbnRUcmFjayh4LmFjdGlvbiwgeC5wcm9wZXJ0aWVzKSk7XG4gIH1cblxuICBwYWdlVHJhY2socGF0aDogc3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiBzICE9PSAndW5kZWZpbmVkJyAmJiBzKSB7XG4gICAgICBzLmNsZWFyVmFycygpO1xuICAgICAgcy50KHtwYWdlTmFtZTogcGF0aH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFjayBFdmVudCBpbiBBZG9iZSBBbmFseXRpY3NcbiAgICpcbiAgICogQHBhcmFtIGFjdGlvbiBhc3NvY2lhdGVkIHdpdGggdGhlIGV2ZW50XG4gICAqIEBwYXJhbSBwcm9wZXJ0aWVzIGFjdGlvbiBkZXRpYWxzXG4gICAqXG4gICAqIEBsaW5rIGh0dHBzOi8vbWFya2V0aW5nLmFkb2JlLmNvbS9yZXNvdXJjZXMvaGVscC9lbl9VUy9zYy9pbXBsZW1lbnQvanNfaW1wbGVtZW50YXRpb24uaHRtbFxuICAgKi9cbiAgZXZlbnRUcmFjayhhY3Rpb246IHN0cmluZywgcHJvcGVydGllczogYW55KSB7XG4gICAgLy8gVE9ETzogbWFrZSBpbnRlcmZhY2VcbiAgICAvLyBAcHJvcGVydHkge3N0cmluZ30gcHJvcGVydGllcy5jYXRlZ29yeVxuICAgIC8vIEBwcm9wZXJ0eSB7c3RyaW5nfSBwcm9wZXJ0aWVzLmxhYmVsXG4gICAgLy8gQHByb3BlcnR5IHtudW1iZXJ9IHByb3BlcnRpZXMudmFsdWVcbiAgICAvLyBAcHJvcGVydHkge2Jvb2xlYW59IHByb3BlcnRpZXMubm9uaW50ZXJhY3Rpb25cbiAgICBpZiAoIXByb3BlcnRpZXMpIHtcbiAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzIHx8IHt9O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcykge1xuICAgICAgaWYgKHR5cGVvZiBwcm9wZXJ0aWVzID09PSAnb2JqZWN0Jykge1xuICAgICAgICB0aGlzLnNldFVzZXJQcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuICAgICAgfVxuICAgICAgaWYgKGFjdGlvbikge1xuICAgICAgICAvLyBpZiBsaW5rTmFtZSBwcm9wZXJ0eSBpcyBwYXNzZWQsIHVzZSB0aGF0OyBvdGhlcndpc2UsIHRoZSBhY3Rpb24gaXMgdGhlIGxpbmtOYW1lXG4gICAgICAgIGNvbnN0IGxpbmtOYW1lID0gKHByb3BlcnRpZXNbJ2xpbmtOYW1lJ10pID8gcHJvcGVydGllc1snbGlua05hbWUnXSA6IGFjdGlvbjtcbiAgICAgICAgLy8gbm90ZSB0aGF0ICd0aGlzJyBzaG91bGQgcmVmZXIgdGhlIGxpbmsgZWxlbWVudCwgYnV0IHdlIGNhbid0IGdldCB0aGF0IGluIHRoaXMgZnVuY3Rpb24uIGV4YW1wbGU6XG4gICAgICAgIC8vIDxhIGhyZWY9XCJodHRwOi8vYW5vdGhlcnNpdGUuY29tXCIgb25jbGljaz1cInMudGwodGhpcywnZScsJ0Fub3RoZXJTaXRlJyxudWxsKVwiPlxuICAgICAgICAvLyBpZiBkaXNhYmxlRGVsYXkgcHJvcGVydHkgaXMgcGFzc2VkLCB1c2UgdGhhdCB0byB0dXJuIG9mZi9vbiB0aGUgNTAwbXMgZGVsYXk7IG90aGVyd2lzZSwgaXQgdXNlcyB0aGlzXG4gICAgICAgIGNvbnN0IGRpc2FibGVEZWxheSA9ICEhcHJvcGVydGllc1snZGlzYWJsZURlbGF5J10gPyB0cnVlIDogdGhpcztcbiAgICAgICAgLy8gaWYgYWN0aW9uIHByb3BlcnR5IGlzIHBhc3NlZCwgdXNlIHRoYXQ7IG90aGVyd2lzZSwgdGhlIGFjdGlvbiByZW1haW5zIHVuY2hhbmdlZFxuICAgICAgICBpZiAocHJvcGVydGllc1snYWN0aW9uJ10pIHtcbiAgICAgICAgICBhY3Rpb24gPSBwcm9wZXJ0aWVzWydhY3Rpb24nXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFBhZ2VOYW1lKCk7XG5cbiAgICAgICAgaWYgKGFjdGlvbi50b1VwcGVyQ2FzZSgpID09PSAnRE9XTkxPQUQnKSB7XG4gICAgICAgICAgcy50bChkaXNhYmxlRGVsYXksICdkJywgbGlua05hbWUpO1xuICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbi50b1VwcGVyQ2FzZSgpID09PSAnRVhJVCcpIHtcbiAgICAgICAgICBzLnRsKGRpc2FibGVEZWxheSwgJ2UnLCBsaW5rTmFtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcy50bChkaXNhYmxlRGVsYXksICdvJywgbGlua05hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRQYWdlTmFtZSgpIHtcbiAgICBjb25zdCBwYXRoID0gdGhpcy5sb2NhdGlvbi5wYXRoKHRydWUpO1xuICAgIGNvbnN0IGhhc2hOZHggPSBwYXRoLmluZGV4T2YoJyMnKTtcbiAgICBpZiAoaGFzaE5keCA+IDAgJiYgaGFzaE5keCA8IHBhdGgubGVuZ3RoKSB7XG4gICAgICBzLnBhZ2VOYW1lID0gcGF0aC5zdWJzdHJpbmcoaGFzaE5keCArIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzLnBhZ2VOYW1lID0gcGF0aDtcbiAgICB9XG4gIH1cblxuICBzZXRVc2VyUHJvcGVydGllcyhwcm9wZXJ0aWVzOiBhbnkpIHtcbiAgICBpZiAodHlwZW9mIHMgIT09ICd1bmRlZmluZWQnICYmIHMpIHtcbiAgICAgIGlmICh0eXBlb2YgcHJvcGVydGllcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcHJvcGVydGllcykge1xuICAgICAgICAgIGlmIChwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHNba2V5XSA9IHByb3BlcnRpZXNba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==