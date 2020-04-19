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
var Angulartics2AdobeAnalytics = /** @class */ (function () {
    function Angulartics2AdobeAnalytics(angulartics2, location) {
        var _this = this;
        this.angulartics2 = angulartics2;
        this.location = location;
        this.angulartics2.setUserProperties
            .subscribe(function (x) { return _this.setUserProperties(x); });
    }
    /**
     * @return {?}
     */
    Angulartics2AdobeAnalytics.prototype.startTracking = /**
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
     * @return {?}
     */
    Angulartics2AdobeAnalytics.prototype.pageTrack = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        if (typeof s !== 'undefined' && s) {
            s.clearVars();
            s.t({ pageName: path });
        }
    };
    /**
     * Track Event in Adobe Analytics
     *
     * @param action associated with the event
     * @param properties action detials
     *
     * @link https://marketing.adobe.com/resources/help/en_US/sc/implement/js_implementation.html
     */
    /**
     * Track Event in Adobe Analytics
     *
     * @link https://marketing.adobe.com/resources/help/en_US/sc/implement/js_implementation.html
     * @param {?} action associated with the event
     * @param {?} properties action detials
     *
     * @return {?}
     */
    Angulartics2AdobeAnalytics.prototype.eventTrack = /**
     * Track Event in Adobe Analytics
     *
     * @link https://marketing.adobe.com/resources/help/en_US/sc/implement/js_implementation.html
     * @param {?} action associated with the event
     * @param {?} properties action detials
     *
     * @return {?}
     */
    function (action, properties) {
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
                var linkName = (properties['linkName']) ? properties['linkName'] : action;
                // note that 'this' should refer the link element, but we can't get that in this function. example:
                // <a href="http://anothersite.com" onclick="s.tl(this,'e','AnotherSite',null)">
                // if disableDelay property is passed, use that to turn off/on the 500ms delay; otherwise, it uses this
                /** @type {?} */
                var disableDelay = !!properties['disableDelay'] ? true : this;
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
    };
    /**
     * @private
     * @return {?}
     */
    Angulartics2AdobeAnalytics.prototype.setPageName = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var path = this.location.path(true);
        /** @type {?} */
        var hashNdx = path.indexOf('#');
        if (hashNdx > 0 && hashNdx < path.length) {
            s.pageName = path.substring(hashNdx + 1);
        }
        else {
            s.pageName = path;
        }
    };
    /**
     * @param {?} properties
     * @return {?}
     */
    Angulartics2AdobeAnalytics.prototype.setUserProperties = /**
     * @param {?} properties
     * @return {?}
     */
    function (properties) {
        if (typeof s !== 'undefined' && s) {
            if (typeof properties === 'object') {
                for (var key in properties) {
                    if (properties.hasOwnProperty(key)) {
                        s[key] = properties[key];
                    }
                }
            }
        }
    };
    Angulartics2AdobeAnalytics.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    Angulartics2AdobeAnalytics.ctorParameters = function () { return [
        { type: Angulartics2 },
        { type: Location }
    ]; };
    /** @nocollapse */ Angulartics2AdobeAnalytics.ngInjectableDef = i0.defineInjectable({ factory: function Angulartics2AdobeAnalytics_Factory() { return new Angulartics2AdobeAnalytics(i0.inject(i1.Angulartics2), i0.inject(i2.Location)); }, token: Angulartics2AdobeAnalytics, providedIn: "root" });
    return Angulartics2AdobeAnalytics;
}());
export { Angulartics2AdobeAnalytics };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRvYmVhbmFseXRpY3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFydGljczIvYWRvYmVhbmFseXRpY3MvIiwic291cmNlcyI6WyJhZG9iZWFuYWx5dGljcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztBQUk1QztJQUdFLG9DQUNVLFlBQTBCLEVBQzFCLFFBQWtCO1FBRjVCLGlCQU1DO1FBTFMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUUxQixJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQjthQUNoQyxTQUFTLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxLQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7O0lBRUQsa0RBQWE7OztJQUFiO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7YUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLEVBQUUsQ0FBQzthQUM3QyxTQUFTLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVTthQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO2FBQzdDLFNBQVMsQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFD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QztxQkFDMUI7aUJBQ0Y7YUFDRjtTQUNGO0lBQ0gsQ0FBQzs7Z0JBN0ZGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0JBSnpCLFlBQVk7Z0JBSFosUUFBUTs7O3FDQUFqQjtDQXFHQyxBQTlGRCxJQThGQztTQTdGWSwwQkFBMEI7Ozs7OztJQUduQyxrREFBa0M7Ozs7O0lBQ2xDLDhDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQW5ndWxhcnRpY3MyIH0gZnJvbSAnYW5ndWxhcnRpY3MyJztcblxuZGVjbGFyZSBjb25zdCBzOiBhbnk7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQW5ndWxhcnRpY3MyQWRvYmVBbmFseXRpY3Mge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYW5ndWxhcnRpY3MyOiBBbmd1bGFydGljczIsXG4gICAgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sXG4gICkge1xuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldFVzZXJQcm9wZXJ0aWVzXG4gICAgICAuc3Vic2NyaWJlKCh4KSA9PiB0aGlzLnNldFVzZXJQcm9wZXJ0aWVzKHgpKTtcbiAgfVxuXG4gIHN0YXJ0VHJhY2tpbmcoKTogdm9pZCB7XG4gICAgdGhpcy5hbmd1bGFydGljczIucGFnZVRyYWNrXG4gICAgICAucGlwZSh0aGlzLmFuZ3VsYXJ0aWNzMi5maWx0ZXJEZXZlbG9wZXJNb2RlKCkpXG4gICAgICAuc3Vic2NyaWJlKCh4KSA9PiB0aGlzLnBhZ2VUcmFjayh4LnBhdGgpKTtcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5ldmVudFRyYWNrXG4gICAgICAucGlwZSh0aGlzLmFuZ3VsYXJ0aWNzMi5maWx0ZXJEZXZlbG9wZXJNb2RlKCkpXG4gICAgICAuc3Vic2NyaWJlKCh4KSA9PiB0aGlzLmV2ZW50VHJhY2soeC5hY3Rpb24sIHgucHJvcGVydGllcykpO1xuICB9XG5cbiAgcGFnZVRyYWNrKHBhdGg6IHN0cmluZykge1xuICAgIGlmICh0eXBlb2YgcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcykge1xuICAgICAgcy5jbGVhclZhcnMoKTtcbiAgICAgIHMudCh7cGFnZU5hbWU6IHBhdGh9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHJhY2sgRXZlbnQgaW4gQWRvYmUgQW5hbHl0aWNzXG4gICAqXG4gICAqIEBwYXJhbSBhY3Rpb24gYXNzb2NpYXRlZCB3aXRoIHRoZSBldmVudFxuICAgKiBAcGFyYW0gcHJvcGVydGllcyBhY3Rpb24gZGV0aWFsc1xuICAgKlxuICAgKiBAbGluayBodHRwczovL21hcmtldGluZy5hZG9iZS5jb20vcmVzb3VyY2VzL2hlbHAvZW5fVVMvc2MvaW1wbGVtZW50L2pzX2ltcGxlbWVudGF0aW9uLmh0bWxcbiAgICovXG4gIGV2ZW50VHJhY2soYWN0aW9uOiBzdHJpbmcsIHByb3BlcnRpZXM6IGFueSkge1xuICAgIC8vIFRPRE86IG1ha2UgaW50ZXJmYWNlXG4gICAgLy8gQHByb3BlcnR5IHtzdHJpbmd9IHByb3BlcnRpZXMuY2F0ZWdvcnlcbiAgICAvLyBAcHJvcGVydHkge3N0cmluZ30gcHJvcGVydGllcy5sYWJlbFxuICAgIC8vIEBwcm9wZXJ0eSB7bnVtYmVyfSBwcm9wZXJ0aWVzLnZhbHVlXG4gICAgLy8gQHByb3BlcnR5IHtib29sZWFufSBwcm9wZXJ0aWVzLm5vbmludGVyYWN0aW9uXG4gICAgaWYgKCFwcm9wZXJ0aWVzKSB7XG4gICAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllcyB8fCB7fTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHMgIT09ICd1bmRlZmluZWQnICYmIHMpIHtcbiAgICAgIGlmICh0eXBlb2YgcHJvcGVydGllcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGhpcy5zZXRVc2VyUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgICAgIH1cbiAgICAgIGlmIChhY3Rpb24pIHtcbiAgICAgICAgLy8gaWYgbGlua05hbWUgcHJvcGVydHkgaXMgcGFzc2VkLCB1c2UgdGhhdDsgb3RoZXJ3aXNlLCB0aGUgYWN0aW9uIGlzIHRoZSBsaW5rTmFtZVxuICAgICAgICBjb25zdCBsaW5rTmFtZSA9IChwcm9wZXJ0aWVzWydsaW5rTmFtZSddKSA/IHByb3BlcnRpZXNbJ2xpbmtOYW1lJ10gOiBhY3Rpb247XG4gICAgICAgIC8vIG5vdGUgdGhhdCAndGhpcycgc2hvdWxkIHJlZmVyIHRoZSBsaW5rIGVsZW1lbnQsIGJ1dCB3ZSBjYW4ndCBnZXQgdGhhdCBpbiB0aGlzIGZ1bmN0aW9uLiBleGFtcGxlOlxuICAgICAgICAvLyA8YSBocmVmPVwiaHR0cDovL2Fub3RoZXJzaXRlLmNvbVwiIG9uY2xpY2s9XCJzLnRsKHRoaXMsJ2UnLCdBbm90aGVyU2l0ZScsbnVsbClcIj5cbiAgICAgICAgLy8gaWYgZGlzYWJsZURlbGF5IHByb3BlcnR5IGlzIHBhc3NlZCwgdXNlIHRoYXQgdG8gdHVybiBvZmYvb24gdGhlIDUwMG1zIGRlbGF5OyBvdGhlcndpc2UsIGl0IHVzZXMgdGhpc1xuICAgICAgICBjb25zdCBkaXNhYmxlRGVsYXkgPSAhIXByb3BlcnRpZXNbJ2Rpc2FibGVEZWxheSddID8gdHJ1ZSA6IHRoaXM7XG4gICAgICAgIC8vIGlmIGFjdGlvbiBwcm9wZXJ0eSBpcyBwYXNzZWQsIHVzZSB0aGF0OyBvdGhlcndpc2UsIHRoZSBhY3Rpb24gcmVtYWlucyB1bmNoYW5nZWRcbiAgICAgICAgaWYgKHByb3BlcnRpZXNbJ2FjdGlvbiddKSB7XG4gICAgICAgICAgYWN0aW9uID0gcHJvcGVydGllc1snYWN0aW9uJ107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRQYWdlTmFtZSgpO1xuXG4gICAgICAgIGlmIChhY3Rpb24udG9VcHBlckNhc2UoKSA9PT0gJ0RPV05MT0FEJykge1xuICAgICAgICAgIHMudGwoZGlzYWJsZURlbGF5LCAnZCcsIGxpbmtOYW1lKTtcbiAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24udG9VcHBlckNhc2UoKSA9PT0gJ0VYSVQnKSB7XG4gICAgICAgICAgcy50bChkaXNhYmxlRGVsYXksICdlJywgbGlua05hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHMudGwoZGlzYWJsZURlbGF5LCAnbycsIGxpbmtOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0UGFnZU5hbWUoKSB7XG4gICAgY29uc3QgcGF0aCA9IHRoaXMubG9jYXRpb24ucGF0aCh0cnVlKTtcbiAgICBjb25zdCBoYXNoTmR4ID0gcGF0aC5pbmRleE9mKCcjJyk7XG4gICAgaWYgKGhhc2hOZHggPiAwICYmIGhhc2hOZHggPCBwYXRoLmxlbmd0aCkge1xuICAgICAgcy5wYWdlTmFtZSA9IHBhdGguc3Vic3RyaW5nKGhhc2hOZHggKyAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcy5wYWdlTmFtZSA9IHBhdGg7XG4gICAgfVxuICB9XG5cbiAgc2V0VXNlclByb3BlcnRpZXMocHJvcGVydGllczogYW55KSB7XG4gICAgaWYgKHR5cGVvZiBzICE9PSAndW5kZWZpbmVkJyAmJiBzKSB7XG4gICAgICBpZiAodHlwZW9mIHByb3BlcnRpZXMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHByb3BlcnRpZXMpIHtcbiAgICAgICAgICBpZiAocHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBzW2tleV0gPSBwcm9wZXJ0aWVzW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=