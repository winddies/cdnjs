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
var Angulartics2Clicky = /** @class */ (function () {
    function Angulartics2Clicky(angulartics2, titleService) {
        this.angulartics2 = angulartics2;
        this.titleService = titleService;
        if (typeof clicky === 'undefined') {
            console.warn('Angulartics 2 Clicky Plugin: clicky global not found');
        }
    }
    /**
     * @return {?}
     */
    Angulartics2Clicky.prototype.startTracking = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.angulartics2.pageTrack
            .pipe(this.angulartics2.filterDeveloperMode())
            .subscribe(function (x) { return _this.pageTrack(x.path); });
        this.angulartics2.eventTrack
            .pipe(this.angulartics2.filterDeveloperMode())
            .subscribe(function (x) { return _this.eventOrGoalTrack(x.action, x.properties); });
    };
    /**
     * Track Page in Clicky
     *
     * @param path location
     *
     * @link https://clicky.com/help/custom/manual#log
     */
    /**
     * Track Page in Clicky
     *
     * @link https://clicky.com/help/custom/manual#log
     * @param {?} path location
     *
     * @return {?}
     */
    Angulartics2Clicky.prototype.pageTrack = /**
     * Track Page in Clicky
     *
     * @link https://clicky.com/help/custom/manual#log
     * @param {?} path location
     *
     * @return {?}
     */
    function (path) {
        /** @type {?} */
        var title = this.titleService.getTitle();
        clicky.log(path, title, 'pageview');
    };
    /**
     * Track Event Or Goal in Clicky
     *
     * @param action Action name
     * @param properties Definition of 'properties.goal' determines goal vs event tracking
     *
     * @link https://clicky.com/help/custom/manual#log
     * @link https://clicky.com/help/custom/manual#goal
     */
    /**
     * Track Event Or Goal in Clicky
     *
     * @link https://clicky.com/help/custom/manual#log / https://clicky.com/help/custom/manual#goal
     * @param {?} action Action name
     * @param {?} properties Definition of 'properties.goal' determines goal vs event tracking
     *
     * @return {?}
     */
    Angulartics2Clicky.prototype.eventOrGoalTrack = /**
     * Track Event Or Goal in Clicky
     *
     * @link https://clicky.com/help/custom/manual#log / https://clicky.com/help/custom/manual#goal
     * @param {?} action Action name
     * @param {?} properties Definition of 'properties.goal' determines goal vs event tracking
     *
     * @return {?}
     */
    function (action, properties) {
        if (typeof properties.goal === 'undefined') {
            /** @type {?} */
            var title = properties.title || null;
            /** @type {?} */
            var type = properties.type != null ? this.validateType(properties.type) : null;
            clicky.log(action, title, type);
        }
        else {
            /** @type {?} */
            var goalId = properties.goal;
            /** @type {?} */
            var revenue = properties.revenue;
            clicky.goal(goalId, revenue, !!properties.noQueue);
        }
    };
    /**
     * @private
     * @param {?} type
     * @return {?}
     */
    Angulartics2Clicky.prototype.validateType = /**
     * @private
     * @param {?} type
     * @return {?}
     */
    function (type) {
        /** @type {?} */
        var EventType = ['pageview', 'click', 'download', 'outbound'];
        return EventType.indexOf(type) > -1 ? type : 'pageview';
    };
    Angulartics2Clicky.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    Angulartics2Clicky.ctorParameters = function () { return [
        { type: Angulartics2 },
        { type: Title }
    ]; };
    /** @nocollapse */ Angulartics2Clicky.ngInjectableDef = i0.defineInjectable({ factory: function Angulartics2Clicky_Factory() { return new Angulartics2Clicky(i0.inject(i1.Angulartics2), i0.inject(i2.Title)); }, token: Angulartics2Clicky, providedIn: "root" });
    return Angulartics2Clicky;
}());
export { Angulartics2Clicky };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2t5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhcnRpY3MyL2NsaWNreS8iLCJzb3VyY2VzIjpbImNsaWNreS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztBQUs1QztJQUVFLDRCQUNVLFlBQTBCLEVBQzFCLFlBQW1CO1FBRG5CLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGlCQUFZLEdBQVosWUFBWSxDQUFPO1FBRTNCLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO1lBQ2pDLE9BQU8sQ0FBQyxJQUFJLENBQUMsc0RBQXNELENBQUMsQ0FBQztTQUN0RTtJQUNILENBQUM7Ozs7SUFFRCwwQ0FBYTs7O0lBQWI7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzthQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO2FBQzdDLFNBQVMsQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUF0QixDQUFzQixDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVO2FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixFQUFFLENBQUM7YUFDN0MsU0FBUyxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUE3QyxDQUE2QyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVEOzs7Ozs7T0FNRzs7Ozs7Ozs7O0lBQ0gsc0NBQVM7Ozs7Ozs7O0lBQVQsVUFBVSxJQUFZOztZQUNkLEtBQUssR0FBVyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRTtRQUNsRCxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVEOzs7Ozs7OztPQVFHOzs7Ozs7Ozs7O0lBQ0gsNkNBQWdCOzs7Ozs7Ozs7SUFBaEIsVUFBaUIsTUFBYyxFQUFFLFVBQXFDO1FBQ3BFLElBQUksT0FBTyxVQUFVLENBQUMsSUFBSSxLQUFLLFdBQVcsRUFBRTs7Z0JBQ3BDLEtBQUssR0FBVyxVQUFVLENBQUMsS0FBSyxJQUFJLElBQUk7O2dCQUN4QyxJQUFJLEdBQVcsVUFBVSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQ3hGLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNqQzthQUFNOztnQkFDQyxNQUFNLEdBQVcsVUFBVSxDQUFDLElBQUk7O2dCQUNoQyxPQUFPLEdBQVcsVUFBVSxDQUFDLE9BQU87WUFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDcEQ7SUFDSCxDQUFDOzs7Ozs7SUFFTyx5Q0FBWTs7Ozs7SUFBcEIsVUFBcUIsSUFBWTs7WUFDekIsU0FBUyxHQUFHLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDO1FBQy9ELE9BQU8sU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDMUQsQ0FBQzs7Z0JBeERGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0JBTHpCLFlBQVk7Z0JBRlosS0FBSzs7OzZCQURkO0NBaUVDLEFBekRELElBeURDO1NBeERZLGtCQUFrQjs7Ozs7O0lBRTNCLDBDQUFrQzs7Ozs7SUFDbEMsMENBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0IHsgQW5ndWxhcnRpY3MyIH0gZnJvbSAnYW5ndWxhcnRpY3MyJztcbmltcG9ydCB7IENsaWNreVByb3BlcnRpZXMgfSBmcm9tICcuL2NsaWNreS5pbnRlcmZhY2VzJztcblxuZGVjbGFyZSB2YXIgY2xpY2t5OiBhbnk7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQW5ndWxhcnRpY3MyQ2xpY2t5IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhbmd1bGFydGljczI6IEFuZ3VsYXJ0aWNzMixcbiAgICBwcml2YXRlIHRpdGxlU2VydmljZTogVGl0bGUsXG4gICkge1xuICAgIGlmICh0eXBlb2YgY2xpY2t5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS53YXJuKCdBbmd1bGFydGljcyAyIENsaWNreSBQbHVnaW46IGNsaWNreSBnbG9iYWwgbm90IGZvdW5kJyk7XG4gICAgfVxuICB9XG5cbiAgc3RhcnRUcmFja2luZygpOiB2b2lkIHtcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5wYWdlVHJhY2tcbiAgICAgIC5waXBlKHRoaXMuYW5ndWxhcnRpY3MyLmZpbHRlckRldmVsb3Blck1vZGUoKSlcbiAgICAgIC5zdWJzY3JpYmUoKHgpID0+IHRoaXMucGFnZVRyYWNrKHgucGF0aCkpO1xuICAgIHRoaXMuYW5ndWxhcnRpY3MyLmV2ZW50VHJhY2tcbiAgICAgIC5waXBlKHRoaXMuYW5ndWxhcnRpY3MyLmZpbHRlckRldmVsb3Blck1vZGUoKSlcbiAgICAgIC5zdWJzY3JpYmUoKHgpID0+IHRoaXMuZXZlbnRPckdvYWxUcmFjayh4LmFjdGlvbiwgeC5wcm9wZXJ0aWVzKSk7XG4gIH1cblxuICAvKipcbiAgICogVHJhY2sgUGFnZSBpbiBDbGlja3lcbiAgICpcbiAgICogQHBhcmFtIHBhdGggbG9jYXRpb25cbiAgICpcbiAgICogQGxpbmsgaHR0cHM6Ly9jbGlja3kuY29tL2hlbHAvY3VzdG9tL21hbnVhbCNsb2dcbiAgICovXG4gIHBhZ2VUcmFjayhwYXRoOiBzdHJpbmcpIHtcbiAgICBjb25zdCB0aXRsZTogc3RyaW5nID0gdGhpcy50aXRsZVNlcnZpY2UuZ2V0VGl0bGUoKTtcbiAgICBjbGlja3kubG9nKHBhdGgsIHRpdGxlLCAncGFnZXZpZXcnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFjayBFdmVudCBPciBHb2FsIGluIENsaWNreVxuICAgKlxuICAgKiBAcGFyYW0gYWN0aW9uIEFjdGlvbiBuYW1lXG4gICAqIEBwYXJhbSBwcm9wZXJ0aWVzIERlZmluaXRpb24gb2YgJ3Byb3BlcnRpZXMuZ29hbCcgZGV0ZXJtaW5lcyBnb2FsIHZzIGV2ZW50IHRyYWNraW5nXG4gICAqXG4gICAqIEBsaW5rIGh0dHBzOi8vY2xpY2t5LmNvbS9oZWxwL2N1c3RvbS9tYW51YWwjbG9nXG4gICAqIEBsaW5rIGh0dHBzOi8vY2xpY2t5LmNvbS9oZWxwL2N1c3RvbS9tYW51YWwjZ29hbFxuICAgKi9cbiAgZXZlbnRPckdvYWxUcmFjayhhY3Rpb246IHN0cmluZywgcHJvcGVydGllczogUGFydGlhbDxDbGlja3lQcm9wZXJ0aWVzPikge1xuICAgIGlmICh0eXBlb2YgcHJvcGVydGllcy5nb2FsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc3QgdGl0bGU6IHN0cmluZyA9IHByb3BlcnRpZXMudGl0bGUgfHwgbnVsbDtcbiAgICAgIGNvbnN0IHR5cGU6IHN0cmluZyA9IHByb3BlcnRpZXMudHlwZSAhPSBudWxsID8gdGhpcy52YWxpZGF0ZVR5cGUocHJvcGVydGllcy50eXBlKSA6IG51bGw7XG4gICAgICBjbGlja3kubG9nKGFjdGlvbiwgdGl0bGUsIHR5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBnb2FsSWQ6IHN0cmluZyA9IHByb3BlcnRpZXMuZ29hbDtcbiAgICAgIGNvbnN0IHJldmVudWU6IG51bWJlciA9IHByb3BlcnRpZXMucmV2ZW51ZTtcbiAgICAgIGNsaWNreS5nb2FsKGdvYWxJZCwgcmV2ZW51ZSwgISFwcm9wZXJ0aWVzLm5vUXVldWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdmFsaWRhdGVUeXBlKHR5cGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgRXZlbnRUeXBlID0gWydwYWdldmlldycsICdjbGljaycsICdkb3dubG9hZCcsICdvdXRib3VuZCddO1xuICAgIHJldHVybiBFdmVudFR5cGUuaW5kZXhPZih0eXBlKSA+IC0xID8gdHlwZSA6ICdwYWdldmlldyc7XG4gIH1cbn1cbiJdfQ==