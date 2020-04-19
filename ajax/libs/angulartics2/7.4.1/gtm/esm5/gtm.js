/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Angulartics2 } from 'angulartics2';
import * as i0 from "@angular/core";
import * as i1 from "angulartics2";
var GoogleTagManagerDefaults = /** @class */ (function () {
    function GoogleTagManagerDefaults() {
        this.userId = null;
    }
    return GoogleTagManagerDefaults;
}());
export { GoogleTagManagerDefaults };
if (false) {
    /** @type {?} */
    GoogleTagManagerDefaults.prototype.userId;
}
var Angulartics2GoogleTagManager = /** @class */ (function () {
    function Angulartics2GoogleTagManager(angulartics2) {
        var _this = this;
        this.angulartics2 = angulartics2;
        // The dataLayer needs to be initialized
        if (typeof dataLayer !== 'undefined' && dataLayer) {
            dataLayer = ((/** @type {?} */ (window))).dataLayer = ((/** @type {?} */ (window))).dataLayer || [];
        }
        /** @type {?} */
        var defaults = new GoogleTagManagerDefaults;
        // Set the default settings for this module
        this.angulartics2.settings.gtm = tslib_1.__assign({}, defaults, this.angulartics2.settings.gtm);
        this.angulartics2.setUsername
            .subscribe(function (x) { return _this.setUsername(x); });
    }
    /**
     * @return {?}
     */
    Angulartics2GoogleTagManager.prototype.startTracking = /**
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
        this.angulartics2.exceptionTrack
            .pipe(this.angulartics2.filterDeveloperMode())
            .subscribe(function (x) { return _this.exceptionTrack(x); });
    };
    /**
     * @param {?} path
     * @return {?}
     */
    Angulartics2GoogleTagManager.prototype.pageTrack = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        this.pushLayer({
            'event': 'Page View',
            'content-name': path,
            'userId': this.angulartics2.settings.gtm.userId
        });
    };
    /**
     * Send Data Layer
     *
     * @layer data layer object
     */
    /**
     * Send Data Layer
     *
     * \@layer data layer object
     * @param {?} layer
     * @return {?}
     */
    Angulartics2GoogleTagManager.prototype.pushLayer = /**
     * Send Data Layer
     *
     * \@layer data layer object
     * @param {?} layer
     * @return {?}
     */
    function (layer) {
        if (typeof dataLayer !== 'undefined' && dataLayer) {
            dataLayer.push(layer);
        }
    };
    /**
     * Send interactions to the dataLayer, i.e. for event tracking in Google Analytics
     *
     * @param action associated with the event
     */
    /**
     * Send interactions to the dataLayer, i.e. for event tracking in Google Analytics
     *
     * @param {?} action associated with the event
     * @param {?} properties
     * @return {?}
     */
    Angulartics2GoogleTagManager.prototype.eventTrack = /**
     * Send interactions to the dataLayer, i.e. for event tracking in Google Analytics
     *
     * @param {?} action associated with the event
     * @param {?} properties
     * @return {?}
     */
    function (action, properties) {
        // TODO: make interface
        //  @param {string} properties.category
        //  @param {string} [properties.label]
        //  @param {number} [properties.value]
        //  @param {boolean} [properties.noninteraction]
        // Set a default GTM category
        properties = properties || {};
        this.pushLayer(tslib_1.__assign({ event: properties.event || 'interaction', target: properties.category || 'Event', action: action, label: properties.label, value: properties.value, interactionType: properties.noninteraction, userId: this.angulartics2.settings.gtm.userId }, properties.gtmCustom));
    };
    /**
     * Exception Track Event in GTM
     *
     */
    /**
     * Exception Track Event in GTM
     *
     * @param {?} properties
     * @return {?}
     */
    Angulartics2GoogleTagManager.prototype.exceptionTrack = /**
     * Exception Track Event in GTM
     *
     * @param {?} properties
     * @return {?}
     */
    function (properties) {
        // TODO: make interface
        //  @param {Object} properties
        //  @param {string} properties.appId
        //  @param {string} properties.appName
        //  @param {string} properties.appVersion
        //  @param {string} [properties.description]
        //  @param {boolean} [properties.fatal]
        if (!properties || !properties.appId || !properties.appName || !properties.appVersion) {
            console.error('Must be setted appId, appName and appVersion.');
            return;
        }
        if (properties.fatal === undefined) {
            console.log('No "fatal" provided, sending with fatal=true');
            properties.exFatal = true;
        }
        properties.exDescription = properties.event ? properties.event.stack : properties.description;
        this.eventTrack("Exception thrown for " + properties.appName + " <" + properties.appId + "@" + properties.appVersion + ">", {
            'category': 'Exception',
            'label': properties.exDescription
        });
    };
    /**
     * Set userId for use with Universal Analytics User ID feature
     *
     * @param userId used to identify user cross-device in Google Analytics
     */
    /**
     * Set userId for use with Universal Analytics User ID feature
     *
     * @param {?} userId used to identify user cross-device in Google Analytics
     * @return {?}
     */
    Angulartics2GoogleTagManager.prototype.setUsername = /**
     * Set userId for use with Universal Analytics User ID feature
     *
     * @param {?} userId used to identify user cross-device in Google Analytics
     * @return {?}
     */
    function (userId) {
        this.angulartics2.settings.gtm.userId = userId;
    };
    Angulartics2GoogleTagManager.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    Angulartics2GoogleTagManager.ctorParameters = function () { return [
        { type: Angulartics2 }
    ]; };
    /** @nocollapse */ Angulartics2GoogleTagManager.ngInjectableDef = i0.defineInjectable({ factory: function Angulartics2GoogleTagManager_Factory() { return new Angulartics2GoogleTagManager(i0.inject(i1.Angulartics2)); }, token: Angulartics2GoogleTagManager, providedIn: "root" });
    return Angulartics2GoogleTagManager;
}());
export { Angulartics2GoogleTagManager };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    Angulartics2GoogleTagManager.prototype.angulartics2;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3RtLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhcnRpY3MyL2d0bS8iLCJzb3VyY2VzIjpbImd0bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFlBQVksRUFBNEIsTUFBTSxjQUFjLENBQUM7OztBQUl0RTtJQUFBO1FBQ0UsV0FBTSxHQUFHLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQUQsK0JBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7OztJQURDLDBDQUFjOztBQUdoQjtJQUdFLHNDQUNZLFlBQTBCO1FBRHRDLGlCQVlDO1FBWFcsaUJBQVksR0FBWixZQUFZLENBQWM7UUFFcEMsd0NBQXdDO1FBQ3hDLElBQUksT0FBTyxTQUFTLEtBQUssV0FBVyxJQUFJLFNBQVMsRUFBRTtZQUNqRCxTQUFTLEdBQUcsQ0FBQyxtQkFBSyxNQUFNLEVBQUEsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLG1CQUFLLE1BQU0sRUFBQSxDQUFDLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQztTQUNyRTs7WUFDSyxRQUFRLEdBQUcsSUFBSSx3QkFBd0I7UUFDN0MsMkNBQTJDO1FBQzNDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsd0JBQVEsUUFBUSxFQUFLLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBRSxDQUFDO1FBQ3BGLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVzthQUMxQixTQUFTLENBQUMsVUFBQyxDQUFTLElBQUssT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFuQixDQUFtQixDQUFDLENBQUM7SUFDbkQsQ0FBQzs7OztJQUVELG9EQUFhOzs7SUFBYjtRQUFBLGlCQVVDO1FBVEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTO2FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLG1C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Q0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7UUFFOUYsSUFBSSxDQUFDLFVBQVUsQ0FBQywwQkFBd0IsVUFBVSxDQUFDLE9BQU8sVUFBSyxVQUFVLENBQUMsS0FBSyxTQUFJLFVBQVUsQ0FBQyxVQUFVLE1BQUcsRUFBRTtZQUMzRyxVQUFVLEVBQUUsV0FBVztZQUN2QixPQUFPLEVBQUUsVUFBVSxDQUFDLGFBQWE7U0FDbEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7Ozs7Ozs7SUFDSCxrREFBVzs7Ozs7O0lBQVgsVUFBWSxNQUFjO1FBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ2pELENBQUM7O2dCQS9HRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O2dCQVJ6QixZQUFZOzs7dUNBRnJCO0NBMEhDLEFBaEhELElBZ0hDO1NBL0dZLDRCQUE0Qjs7Ozs7O0lBR3JDLG9EQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQW5ndWxhcnRpY3MyLCBHb29nbGVUYWdNYW5hZ2VyU2V0dGluZ3MgfSBmcm9tICdhbmd1bGFydGljczInO1xuXG5kZWNsYXJlIHZhciBkYXRhTGF5ZXI6IGFueTtcblxuZXhwb3J0IGNsYXNzIEdvb2dsZVRhZ01hbmFnZXJEZWZhdWx0cyBpbXBsZW1lbnRzIEdvb2dsZVRhZ01hbmFnZXJTZXR0aW5ncyB7XG4gIHVzZXJJZCA9IG51bGw7XG59XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQW5ndWxhcnRpY3MyR29vZ2xlVGFnTWFuYWdlciB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGFuZ3VsYXJ0aWNzMjogQW5ndWxhcnRpY3MyLFxuICApIHtcbiAgICAvLyBUaGUgZGF0YUxheWVyIG5lZWRzIHRvIGJlIGluaXRpYWxpemVkXG4gICAgaWYgKHR5cGVvZiBkYXRhTGF5ZXIgIT09ICd1bmRlZmluZWQnICYmIGRhdGFMYXllcikge1xuICAgICAgZGF0YUxheWVyID0gKDxhbnk+d2luZG93KS5kYXRhTGF5ZXIgPSAoPGFueT53aW5kb3cpLmRhdGFMYXllciB8fCBbXTtcbiAgICB9XG4gICAgY29uc3QgZGVmYXVsdHMgPSBuZXcgR29vZ2xlVGFnTWFuYWdlckRlZmF1bHRzO1xuICAgIC8vIFNldCB0aGUgZGVmYXVsdCBzZXR0aW5ncyBmb3IgdGhpcyBtb2R1bGVcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXR0aW5ncy5ndG0gPSB7IC4uLmRlZmF1bHRzLCAuLi50aGlzLmFuZ3VsYXJ0aWNzMi5zZXR0aW5ncy5ndG0gfTtcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXRVc2VybmFtZVxuICAgICAgLnN1YnNjcmliZSgoeDogc3RyaW5nKSA9PiB0aGlzLnNldFVzZXJuYW1lKHgpKTtcbiAgfVxuXG4gIHN0YXJ0VHJhY2tpbmcoKSB7XG4gICAgdGhpcy5hbmd1bGFydGljczIucGFnZVRyYWNrXG4gICAgICAucGlwZSh0aGlzLmFuZ3VsYXJ0aWNzMi5maWx0ZXJEZXZlbG9wZXJNb2RlKCkpXG4gICAgICAuc3Vic2NyaWJlKCh4KSA9PiB0aGlzLnBhZ2VUcmFjayh4LnBhdGgpKTtcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5ldmVudFRyYWNrXG4gICAgICAucGlwZSh0aGlzLmFuZ3VsYXJ0aWNzMi5maWx0ZXJEZXZlbG9wZXJNb2RlKCkpXG4gICAgICAuc3Vic2NyaWJlKCh4KSA9PiB0aGlzLmV2ZW50VHJhY2soeC5hY3Rpb24sIHgucHJvcGVydGllcykpO1xuICAgIHRoaXMuYW5ndWxhcnRpY3MyLmV4Y2VwdGlvblRyYWNrXG4gICAgICAucGlwZSh0aGlzLmFuZ3VsYXJ0aWNzMi5maWx0ZXJEZXZlbG9wZXJNb2RlKCkpXG4gICAgICAuc3Vic2NyaWJlKCh4OiBhbnkpID0+IHRoaXMuZXhjZXB0aW9uVHJhY2soeCkpO1xuICB9XG5cbiAgcGFnZVRyYWNrKHBhdGg6IHN0cmluZykge1xuICAgIHRoaXMucHVzaExheWVyKHtcbiAgICAgICdldmVudCc6ICdQYWdlIFZpZXcnLFxuICAgICAgJ2NvbnRlbnQtbmFtZSc6IHBhdGgsXG4gICAgICAndXNlcklkJzogdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ3RtLnVzZXJJZFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgRGF0YSBMYXllclxuICAgKlxuICAgKiBAbGF5ZXIgZGF0YSBsYXllciBvYmplY3RcbiAgICovXG4gIHB1c2hMYXllcihsYXllcjogYW55KSB7XG4gICAgaWYgKHR5cGVvZiBkYXRhTGF5ZXIgIT09ICd1bmRlZmluZWQnICYmIGRhdGFMYXllcikge1xuICAgICAgZGF0YUxheWVyLnB1c2gobGF5ZXIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIGludGVyYWN0aW9ucyB0byB0aGUgZGF0YUxheWVyLCBpLmUuIGZvciBldmVudCB0cmFja2luZyBpbiBHb29nbGUgQW5hbHl0aWNzXG4gICAqXG4gICAqIEBwYXJhbSBhY3Rpb24gYXNzb2NpYXRlZCB3aXRoIHRoZSBldmVudFxuICAgKi9cbiAgZXZlbnRUcmFjayhhY3Rpb246IHN0cmluZywgcHJvcGVydGllczogYW55KSB7XG4gICAgLy8gVE9ETzogbWFrZSBpbnRlcmZhY2VcbiAgICAvLyAgQHBhcmFtIHtzdHJpbmd9IHByb3BlcnRpZXMuY2F0ZWdvcnlcbiAgICAvLyAgQHBhcmFtIHtzdHJpbmd9IFtwcm9wZXJ0aWVzLmxhYmVsXVxuICAgIC8vICBAcGFyYW0ge251bWJlcn0gW3Byb3BlcnRpZXMudmFsdWVdXG4gICAgLy8gIEBwYXJhbSB7Ym9vbGVhbn0gW3Byb3BlcnRpZXMubm9uaW50ZXJhY3Rpb25dXG4gICAgLy8gU2V0IGEgZGVmYXVsdCBHVE0gY2F0ZWdvcnlcbiAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllcyB8fCB7fTtcblxuICAgIHRoaXMucHVzaExheWVyKHtcbiAgICAgIGV2ZW50OiBwcm9wZXJ0aWVzLmV2ZW50IHx8ICdpbnRlcmFjdGlvbicsXG4gICAgICB0YXJnZXQ6IHByb3BlcnRpZXMuY2F0ZWdvcnkgfHwgJ0V2ZW50JyxcbiAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgbGFiZWw6IHByb3BlcnRpZXMubGFiZWwsXG4gICAgICB2YWx1ZTogcHJvcGVydGllcy52YWx1ZSxcbiAgICAgIGludGVyYWN0aW9uVHlwZTogcHJvcGVydGllcy5ub25pbnRlcmFjdGlvbixcbiAgICAgIHVzZXJJZDogdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ3RtLnVzZXJJZCxcbiAgICAgIC4uLnByb3BlcnRpZXMuZ3RtQ3VzdG9tXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRXhjZXB0aW9uIFRyYWNrIEV2ZW50IGluIEdUTVxuICAgKlxuICAgKi9cbiAgZXhjZXB0aW9uVHJhY2socHJvcGVydGllczogYW55KSB7XG4gICAgLy8gVE9ETzogbWFrZSBpbnRlcmZhY2VcbiAgICAvLyAgQHBhcmFtIHtPYmplY3R9IHByb3BlcnRpZXNcbiAgICAvLyAgQHBhcmFtIHtzdHJpbmd9IHByb3BlcnRpZXMuYXBwSWRcbiAgICAvLyAgQHBhcmFtIHtzdHJpbmd9IHByb3BlcnRpZXMuYXBwTmFtZVxuICAgIC8vICBAcGFyYW0ge3N0cmluZ30gcHJvcGVydGllcy5hcHBWZXJzaW9uXG4gICAgLy8gIEBwYXJhbSB7c3RyaW5nfSBbcHJvcGVydGllcy5kZXNjcmlwdGlvbl1cbiAgICAvLyAgQHBhcmFtIHtib29sZWFufSBbcHJvcGVydGllcy5mYXRhbF1cbiAgICBpZiAoISBwcm9wZXJ0aWVzIHx8ICEgcHJvcGVydGllcy5hcHBJZCB8fCAhIHByb3BlcnRpZXMuYXBwTmFtZSB8fCAhIHByb3BlcnRpZXMuYXBwVmVyc2lvbikge1xuICAgICAgY29uc29sZS5lcnJvcignTXVzdCBiZSBzZXR0ZWQgYXBwSWQsIGFwcE5hbWUgYW5kIGFwcFZlcnNpb24uJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BlcnRpZXMuZmF0YWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc29sZS5sb2coJ05vIFwiZmF0YWxcIiBwcm92aWRlZCwgc2VuZGluZyB3aXRoIGZhdGFsPXRydWUnKTtcbiAgICAgIHByb3BlcnRpZXMuZXhGYXRhbCA9IHRydWU7XG4gICAgfVxuXG4gICAgcHJvcGVydGllcy5leERlc2NyaXB0aW9uID0gcHJvcGVydGllcy5ldmVudCA/IHByb3BlcnRpZXMuZXZlbnQuc3RhY2sgOiBwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uO1xuXG4gICAgdGhpcy5ldmVudFRyYWNrKGBFeGNlcHRpb24gdGhyb3duIGZvciAke3Byb3BlcnRpZXMuYXBwTmFtZX0gPCR7cHJvcGVydGllcy5hcHBJZH1AJHtwcm9wZXJ0aWVzLmFwcFZlcnNpb259PmAsIHtcbiAgICAgICdjYXRlZ29yeSc6ICdFeGNlcHRpb24nLFxuICAgICAgJ2xhYmVsJzogcHJvcGVydGllcy5leERlc2NyaXB0aW9uXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHVzZXJJZCBmb3IgdXNlIHdpdGggVW5pdmVyc2FsIEFuYWx5dGljcyBVc2VyIElEIGZlYXR1cmVcbiAgICpcbiAgICogQHBhcmFtIHVzZXJJZCB1c2VkIHRvIGlkZW50aWZ5IHVzZXIgY3Jvc3MtZGV2aWNlIGluIEdvb2dsZSBBbmFseXRpY3NcbiAgICovXG4gIHNldFVzZXJuYW1lKHVzZXJJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ3RtLnVzZXJJZCA9IHVzZXJJZDtcbiAgfVxufVxuIl19