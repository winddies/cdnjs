/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Angulartics2 } from 'angulartics2';
import * as i0 from "@angular/core";
import * as i1 from "angulartics2";
import * as i2 from "@angular/platform-browser";
export class Angulartics2Clicky {
    /**
     * @param {?} angulartics2
     * @param {?} titleService
     */
    constructor(angulartics2, titleService) {
        this.angulartics2 = angulartics2;
        this.titleService = titleService;
        if (typeof clicky === 'undefined') {
            console.warn('Angulartics 2 Clicky Plugin: clicky global not found');
        }
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
            .subscribe((x) => this.eventOrGoalTrack(x.action, x.properties));
    }
    /**
     * Track Page in Clicky
     *
     * @link https://clicky.com/help/custom/manual#log
     * @param {?} path location
     *
     * @return {?}
     */
    pageTrack(path) {
        /** @type {?} */
        const title = this.titleService.getTitle();
        clicky.log(path, title, 'pageview');
    }
    /**
     * Track Event Or Goal in Clicky
     *
     * @link https://clicky.com/help/custom/manual#log / https://clicky.com/help/custom/manual#goal
     * @param {?} action Action name
     * @param {?} properties Definition of 'properties.goal' determines goal vs event tracking
     *
     * @return {?}
     */
    eventOrGoalTrack(action, properties) {
        if (typeof properties.goal === 'undefined') {
            /** @type {?} */
            const title = properties.title || null;
            /** @type {?} */
            const type = properties.type != null ? this.validateType(properties.type) : null;
            clicky.log(action, title, type);
        }
        else {
            /** @type {?} */
            const goalId = properties.goal;
            /** @type {?} */
            const revenue = properties.revenue;
            clicky.goal(goalId, revenue, !!properties.noQueue);
        }
    }
    /**
     * @private
     * @param {?} type
     * @return {?}
     */
    validateType(type) {
        /** @type {?} */
        const EventType = ['pageview', 'click', 'download', 'outbound'];
        return EventType.indexOf(type) > -1 ? type : 'pageview';
    }
}
Angulartics2Clicky.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
Angulartics2Clicky.ctorParameters = () => [
    { type: Angulartics2 },
    { type: Title }
];
/** @nocollapse */ Angulartics2Clicky.ngInjectableDef = i0.defineInjectable({ factory: function Angulartics2Clicky_Factory() { return new Angulartics2Clicky(i0.inject(i1.Angulartics2), i0.inject(i2.Title)); }, token: Angulartics2Clicky, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    Angulartics2Clicky.prototype.angulartics2;
    /**
     * @type {?}
     * @private
     */
    Angulartics2Clicky.prototype.titleService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2t5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhcnRpY3MyL2NsaWNreS8iLCJzb3VyY2VzIjpbImNsaWNreS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztBQU01QyxNQUFNLE9BQU8sa0JBQWtCOzs7OztJQUM3QixZQUNVLFlBQTBCLEVBQzFCLFlBQW1CO1FBRG5CLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGlCQUFZLEdBQVosWUFBWSxDQUFPO1FBRTNCLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO1lBQ2pDLE9BQU8sQ0FBQyxJQUFJLENBQUMsc0RBQXNELENBQUMsQ0FBQztTQUN0RTtJQUNILENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTO2FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixFQUFFLENBQUM7YUFDN0MsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVTthQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO2FBQzdDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQzs7Ozs7Ozs7O0lBU0QsU0FBUyxDQUFDLElBQVk7O2NBQ2QsS0FBSyxHQUFXLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFO1FBQ2xELE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7Ozs7Ozs7O0lBV0QsZ0JBQWdCLENBQUMsTUFBYyxFQUFFLFVBQXFDO1FBQ3BFLElBQUksT0FBTyxVQUFVLENBQUMsSUFBSSxLQUFLLFdBQVcsRUFBRTs7a0JBQ3BDLEtBQUssR0FBVyxVQUFVLENBQUMsS0FBSyxJQUFJLElBQUk7O2tCQUN4QyxJQUFJLEdBQVcsVUFBVSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQ3hGLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNqQzthQUFNOztrQkFDQyxNQUFNLEdBQVcsVUFBVSxDQUFDLElBQUk7O2tCQUNoQyxPQUFPLEdBQVcsVUFBVSxDQUFDLE9BQU87WUFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDcEQ7SUFDSCxDQUFDOzs7Ozs7SUFFTyxZQUFZLENBQUMsSUFBWTs7Y0FDekIsU0FBUyxHQUFHLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDO1FBQy9ELE9BQU8sU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDMUQsQ0FBQzs7O1lBeERGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUFMekIsWUFBWTtZQUZaLEtBQUs7Ozs7Ozs7O0lBVVYsMENBQWtDOzs7OztJQUNsQywwQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5pbXBvcnQgeyBBbmd1bGFydGljczIgfSBmcm9tICdhbmd1bGFydGljczInO1xuaW1wb3J0IHsgQ2xpY2t5UHJvcGVydGllcyB9IGZyb20gJy4vY2xpY2t5LmludGVyZmFjZXMnO1xuXG5kZWNsYXJlIHZhciBjbGlja3k6IGFueTtcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFydGljczJDbGlja3kge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFuZ3VsYXJ0aWNzMjogQW5ndWxhcnRpY3MyLFxuICAgIHByaXZhdGUgdGl0bGVTZXJ2aWNlOiBUaXRsZSxcbiAgKSB7XG4gICAgaWYgKHR5cGVvZiBjbGlja3kgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0FuZ3VsYXJ0aWNzIDIgQ2xpY2t5IFBsdWdpbjogY2xpY2t5IGdsb2JhbCBub3QgZm91bmQnKTtcbiAgICB9XG4gIH1cblxuICBzdGFydFRyYWNraW5nKCk6IHZvaWQge1xuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnBhZ2VUcmFja1xuICAgICAgLnBpcGUodGhpcy5hbmd1bGFydGljczIuZmlsdGVyRGV2ZWxvcGVyTW9kZSgpKVxuICAgICAgLnN1YnNjcmliZSgoeCkgPT4gdGhpcy5wYWdlVHJhY2soeC5wYXRoKSk7XG4gICAgdGhpcy5hbmd1bGFydGljczIuZXZlbnRUcmFja1xuICAgICAgLnBpcGUodGhpcy5hbmd1bGFydGljczIuZmlsdGVyRGV2ZWxvcGVyTW9kZSgpKVxuICAgICAgLnN1YnNjcmliZSgoeCkgPT4gdGhpcy5ldmVudE9yR29hbFRyYWNrKHguYWN0aW9uLCB4LnByb3BlcnRpZXMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFjayBQYWdlIGluIENsaWNreVxuICAgKlxuICAgKiBAcGFyYW0gcGF0aCBsb2NhdGlvblxuICAgKlxuICAgKiBAbGluayBodHRwczovL2NsaWNreS5jb20vaGVscC9jdXN0b20vbWFudWFsI2xvZ1xuICAgKi9cbiAgcGFnZVRyYWNrKHBhdGg6IHN0cmluZykge1xuICAgIGNvbnN0IHRpdGxlOiBzdHJpbmcgPSB0aGlzLnRpdGxlU2VydmljZS5nZXRUaXRsZSgpO1xuICAgIGNsaWNreS5sb2cocGF0aCwgdGl0bGUsICdwYWdldmlldycpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYWNrIEV2ZW50IE9yIEdvYWwgaW4gQ2xpY2t5XG4gICAqXG4gICAqIEBwYXJhbSBhY3Rpb24gQWN0aW9uIG5hbWVcbiAgICogQHBhcmFtIHByb3BlcnRpZXMgRGVmaW5pdGlvbiBvZiAncHJvcGVydGllcy5nb2FsJyBkZXRlcm1pbmVzIGdvYWwgdnMgZXZlbnQgdHJhY2tpbmdcbiAgICpcbiAgICogQGxpbmsgaHR0cHM6Ly9jbGlja3kuY29tL2hlbHAvY3VzdG9tL21hbnVhbCNsb2dcbiAgICogQGxpbmsgaHR0cHM6Ly9jbGlja3kuY29tL2hlbHAvY3VzdG9tL21hbnVhbCNnb2FsXG4gICAqL1xuICBldmVudE9yR29hbFRyYWNrKGFjdGlvbjogc3RyaW5nLCBwcm9wZXJ0aWVzOiBQYXJ0aWFsPENsaWNreVByb3BlcnRpZXM+KSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wZXJ0aWVzLmdvYWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zdCB0aXRsZTogc3RyaW5nID0gcHJvcGVydGllcy50aXRsZSB8fCBudWxsO1xuICAgICAgY29uc3QgdHlwZTogc3RyaW5nID0gcHJvcGVydGllcy50eXBlICE9IG51bGwgPyB0aGlzLnZhbGlkYXRlVHlwZShwcm9wZXJ0aWVzLnR5cGUpIDogbnVsbDtcbiAgICAgIGNsaWNreS5sb2coYWN0aW9uLCB0aXRsZSwgdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGdvYWxJZDogc3RyaW5nID0gcHJvcGVydGllcy5nb2FsO1xuICAgICAgY29uc3QgcmV2ZW51ZTogbnVtYmVyID0gcHJvcGVydGllcy5yZXZlbnVlO1xuICAgICAgY2xpY2t5LmdvYWwoZ29hbElkLCByZXZlbnVlLCAhIXByb3BlcnRpZXMubm9RdWV1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB2YWxpZGF0ZVR5cGUodHlwZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBFdmVudFR5cGUgPSBbJ3BhZ2V2aWV3JywgJ2NsaWNrJywgJ2Rvd25sb2FkJywgJ291dGJvdW5kJ107XG4gICAgcmV0dXJuIEV2ZW50VHlwZS5pbmRleE9mKHR5cGUpID4gLTEgPyB0eXBlIDogJ3BhZ2V2aWV3JztcbiAgfVxufVxuIl19