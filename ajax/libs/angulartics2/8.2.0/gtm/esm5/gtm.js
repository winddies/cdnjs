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
var Angulartics2GoogleTagManager = /** @class */ (function () {
    function Angulartics2GoogleTagManager(angulartics2) {
        var _this = this;
        this.angulartics2 = angulartics2;
        // The dataLayer needs to be initialized
        if (typeof dataLayer !== 'undefined' && dataLayer) {
            dataLayer = window.dataLayer = window.dataLayer || [];
        }
        var defaults = new GoogleTagManagerDefaults();
        // Set the default settings for this module
        this.angulartics2.settings.gtm = tslib_1.__assign({}, defaults, this.angulartics2.settings.gtm);
        this.angulartics2.setUsername
            .subscribe(function (x) { return _this.setUsername(x); });
    }
    Angulartics2GoogleTagManager.prototype.startTracking = function () {
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
    Angulartics2GoogleTagManager.prototype.pageTrack = function (path) {
        this.pushLayer({
            event: 'Page View',
            'content-name': path,
            userId: this.angulartics2.settings.gtm.userId
        });
    };
    /**
     * Send Data Layer
     *
     * @layer data layer object
     */
    Angulartics2GoogleTagManager.prototype.pushLayer = function (layer) {
        if (typeof dataLayer !== 'undefined' && dataLayer) {
            dataLayer.push(layer);
        }
    };
    /**
     * Send interactions to the dataLayer, i.e. for event tracking in Google Analytics
     *
     * @param action associated with the event
     */
    Angulartics2GoogleTagManager.prototype.eventTrack = function (action, properties) {
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
    Angulartics2GoogleTagManager.prototype.exceptionTrack = function (properties) {
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
            category: 'Exception',
            label: properties.exDescription,
        });
    };
    /**
     * Set userId for use with Universal Analytics User ID feature
     *
     * @param userId used to identify user cross-device in Google Analytics
     */
    Angulartics2GoogleTagManager.prototype.setUsername = function (userId) {
        this.angulartics2.settings.gtm.userId = userId;
    };
    Angulartics2GoogleTagManager.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function Angulartics2GoogleTagManager_Factory() { return new Angulartics2GoogleTagManager(i0.ɵɵinject(i1.Angulartics2)); }, token: Angulartics2GoogleTagManager, providedIn: "root" });
    Angulartics2GoogleTagManager = tslib_1.__decorate([
        Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [Angulartics2])
    ], Angulartics2GoogleTagManager);
    return Angulartics2GoogleTagManager;
}());
export { Angulartics2GoogleTagManager };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3RtLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhcnRpY3MyL2d0bS8iLCJzb3VyY2VzIjpbImd0bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsWUFBWSxFQUE0QixNQUFNLGNBQWMsQ0FBQzs7O0FBSXRFO0lBQUE7UUFDRSxXQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFBRCwrQkFBQztBQUFELENBQUMsQUFGRCxJQUVDOztBQUdEO0lBRUUsc0NBQ1ksWUFBMEI7UUFEdEMsaUJBWUM7UUFYVyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUVwQyx3Q0FBd0M7UUFDeEMsSUFBSSxPQUFPLFNBQVMsS0FBSyxXQUFXLElBQUksU0FBUyxFQUFFO1lBQ2pELFNBQVMsR0FBSSxNQUFjLENBQUMsU0FBUyxHQUFJLE1BQWMsQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDO1NBQ3pFO1FBQ0QsSUFBTSxRQUFRLEdBQUcsSUFBSSx3QkFBd0IsRUFBRSxDQUFDO1FBQ2hELDJDQUEyQztRQUMzQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLHdCQUFRLFFBQVEsRUFBSyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUUsQ0FBQztRQUNwRixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVc7YUFDMUIsU0FBUyxDQUFDLFVBQUMsQ0FBUyxJQUFLLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBbkIsQ0FBbUIsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxvREFBYSxHQUFiO1FBQUEsaUJBVUM7UUFUQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7YUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLEVBQUUsQ0FBQzthQUM3QyxTQUFTLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxL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MEJBQXdCLFVBQVUsQ0FBQyxPQUFPLFVBQUssVUFBVSxDQUFDLEtBQUssU0FBSSxVQUFVLENBQUMsVUFBVSxNQUFHLEVBQUU7WUFDM0csUUFBUSxFQUFFLFdBQVc7WUFDckIsS0FBSyxFQUFFLFVBQVUsQ0FBQyxhQUFhO1NBQ2hDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsa0RBQVcsR0FBWCxVQUFZLE1BQWM7UUFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDakQsQ0FBQzs7SUE5R1UsNEJBQTRCO1FBRHhDLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztpREFJUCxZQUFZO09BSDNCLDRCQUE0QixDQStHeEM7dUNBMUhEO0NBMEhDLEFBL0dELElBK0dDO1NBL0dZLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQW5ndWxhcnRpY3MyLCBHb29nbGVUYWdNYW5hZ2VyU2V0dGluZ3MgfSBmcm9tICdhbmd1bGFydGljczInO1xuXG5kZWNsYXJlIHZhciBkYXRhTGF5ZXI6IGFueTtcblxuZXhwb3J0IGNsYXNzIEdvb2dsZVRhZ01hbmFnZXJEZWZhdWx0cyBpbXBsZW1lbnRzIEdvb2dsZVRhZ01hbmFnZXJTZXR0aW5ncyB7XG4gIHVzZXJJZCA9IG51bGw7XG59XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQW5ndWxhcnRpY3MyR29vZ2xlVGFnTWFuYWdlciB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGFuZ3VsYXJ0aWNzMjogQW5ndWxhcnRpY3MyLFxuICApIHtcbiAgICAvLyBUaGUgZGF0YUxheWVyIG5lZWRzIHRvIGJlIGluaXRpYWxpemVkXG4gICAgaWYgKHR5cGVvZiBkYXRhTGF5ZXIgIT09ICd1bmRlZmluZWQnICYmIGRhdGFMYXllcikge1xuICAgICAgZGF0YUxheWVyID0gKHdpbmRvdyBhcyBhbnkpLmRhdGFMYXllciA9ICh3aW5kb3cgYXMgYW55KS5kYXRhTGF5ZXIgfHwgW107XG4gICAgfVxuICAgIGNvbnN0IGRlZmF1bHRzID0gbmV3IEdvb2dsZVRhZ01hbmFnZXJEZWZhdWx0cygpO1xuICAgIC8vIFNldCB0aGUgZGVmYXVsdCBzZXR0aW5ncyBmb3IgdGhpcyBtb2R1bGVcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXR0aW5ncy5ndG0gPSB7IC4uLmRlZmF1bHRzLCAuLi50aGlzLmFuZ3VsYXJ0aWNzMi5zZXR0aW5ncy5ndG0gfTtcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXRVc2VybmFtZVxuICAgICAgLnN1YnNjcmliZSgoeDogc3RyaW5nKSA9PiB0aGlzLnNldFVzZXJuYW1lKHgpKTtcbiAgfVxuXG4gIHN0YXJ0VHJhY2tpbmcoKSB7XG4gICAgdGhpcy5hbmd1bGFydGljczIucGFnZVRyYWNrXG4gICAgICAucGlwZSh0aGlzLmFuZ3VsYXJ0aWNzMi5maWx0ZXJEZXZlbG9wZXJNb2RlKCkpXG4gICAgICAuc3Vic2NyaWJlKCh4KSA9PiB0aGlzLnBhZ2VUcmFjayh4LnBhdGgpKTtcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5ldmVudFRyYWNrXG4gICAgICAucGlwZSh0aGlzLmFuZ3VsYXJ0aWNzMi5maWx0ZXJEZXZlbG9wZXJNb2RlKCkpXG4gICAgICAuc3Vic2NyaWJlKCh4KSA9PiB0aGlzLmV2ZW50VHJhY2soeC5hY3Rpb24sIHgucHJvcGVydGllcykpO1xuICAgIHRoaXMuYW5ndWxhcnRpY3MyLmV4Y2VwdGlvblRyYWNrXG4gICAgICAucGlwZSh0aGlzLmFuZ3VsYXJ0aWNzMi5maWx0ZXJEZXZlbG9wZXJNb2RlKCkpXG4gICAgICAuc3Vic2NyaWJlKCh4OiBhbnkpID0+IHRoaXMuZXhjZXB0aW9uVHJhY2soeCkpO1xuICB9XG5cbiAgcGFnZVRyYWNrKHBhdGg6IHN0cmluZykge1xuICAgIHRoaXMucHVzaExheWVyKHtcbiAgICAgIGV2ZW50OiAnUGFnZSBWaWV3JyxcbiAgICAgICdjb250ZW50LW5hbWUnOiBwYXRoLFxuICAgICAgdXNlcklkOiB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXR0aW5ncy5ndG0udXNlcklkXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBEYXRhIExheWVyXG4gICAqXG4gICAqIEBsYXllciBkYXRhIGxheWVyIG9iamVjdFxuICAgKi9cbiAgcHVzaExheWVyKGxheWVyOiBhbnkpIHtcbiAgICBpZiAodHlwZW9mIGRhdGFMYXllciAhPT0gJ3VuZGVmaW5lZCcgJiYgZGF0YUxheWVyKSB7XG4gICAgICBkYXRhTGF5ZXIucHVzaChsYXllcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgaW50ZXJhY3Rpb25zIHRvIHRoZSBkYXRhTGF5ZXIsIGkuZS4gZm9yIGV2ZW50IHRyYWNraW5nIGluIEdvb2dsZSBBbmFseXRpY3NcbiAgICpcbiAgICogQHBhcmFtIGFjdGlvbiBhc3NvY2lhdGVkIHdpdGggdGhlIGV2ZW50XG4gICAqL1xuICBldmVudFRyYWNrKGFjdGlvbjogc3RyaW5nLCBwcm9wZXJ0aWVzOiBhbnkpIHtcbiAgICAvLyBUT0RPOiBtYWtlIGludGVyZmFjZVxuICAgIC8vICBAcGFyYW0ge3N0cmluZ30gcHJvcGVydGllcy5jYXRlZ29yeVxuICAgIC8vICBAcGFyYW0ge3N0cmluZ30gW3Byb3BlcnRpZXMubGFiZWxdXG4gICAgLy8gIEBwYXJhbSB7bnVtYmVyfSBbcHJvcGVydGllcy52YWx1ZV1cbiAgICAvLyAgQHBhcmFtIHtib29sZWFufSBbcHJvcGVydGllcy5ub25pbnRlcmFjdGlvbl1cbiAgICAvLyBTZXQgYSBkZWZhdWx0IEdUTSBjYXRlZ29yeVxuICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzIHx8IHt9O1xuXG4gICAgdGhpcy5wdXNoTGF5ZXIoe1xuICAgICAgZXZlbnQ6IHByb3BlcnRpZXMuZXZlbnQgfHwgJ2ludGVyYWN0aW9uJyxcbiAgICAgIHRhcmdldDogcHJvcGVydGllcy5jYXRlZ29yeSB8fCAnRXZlbnQnLFxuICAgICAgYWN0aW9uLFxuICAgICAgbGFiZWw6IHByb3BlcnRpZXMubGFiZWwsXG4gICAgICB2YWx1ZTogcHJvcGVydGllcy52YWx1ZSxcbiAgICAgIGludGVyYWN0aW9uVHlwZTogcHJvcGVydGllcy5ub25pbnRlcmFjdGlvbixcbiAgICAgIHVzZXJJZDogdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ3RtLnVzZXJJZCxcbiAgICAgIC4uLnByb3BlcnRpZXMuZ3RtQ3VzdG9tXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRXhjZXB0aW9uIFRyYWNrIEV2ZW50IGluIEdUTVxuICAgKlxuICAgKi9cbiAgZXhjZXB0aW9uVHJhY2socHJvcGVydGllczogYW55KSB7XG4gICAgLy8gVE9ETzogbWFrZSBpbnRlcmZhY2VcbiAgICAvLyAgQHBhcmFtIHtPYmplY3R9IHByb3BlcnRpZXNcbiAgICAvLyAgQHBhcmFtIHtzdHJpbmd9IHByb3BlcnRpZXMuYXBwSWRcbiAgICAvLyAgQHBhcmFtIHtzdHJpbmd9IHByb3BlcnRpZXMuYXBwTmFtZVxuICAgIC8vICBAcGFyYW0ge3N0cmluZ30gcHJvcGVydGllcy5hcHBWZXJzaW9uXG4gICAgLy8gIEBwYXJhbSB7c3RyaW5nfSBbcHJvcGVydGllcy5kZXNjcmlwdGlvbl1cbiAgICAvLyAgQHBhcmFtIHtib29sZWFufSBbcHJvcGVydGllcy5mYXRhbF1cbiAgICBpZiAoISBwcm9wZXJ0aWVzIHx8ICEgcHJvcGVydGllcy5hcHBJZCB8fCAhIHByb3BlcnRpZXMuYXBwTmFtZSB8fCAhIHByb3BlcnRpZXMuYXBwVmVyc2lvbikge1xuICAgICAgY29uc29sZS5lcnJvcignTXVzdCBiZSBzZXR0ZWQgYXBwSWQsIGFwcE5hbWUgYW5kIGFwcFZlcnNpb24uJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BlcnRpZXMuZmF0YWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc29sZS5sb2coJ05vIFwiZmF0YWxcIiBwcm92aWRlZCwgc2VuZGluZyB3aXRoIGZhdGFsPXRydWUnKTtcbiAgICAgIHByb3BlcnRpZXMuZXhGYXRhbCA9IHRydWU7XG4gICAgfVxuXG4gICAgcHJvcGVydGllcy5leERlc2NyaXB0aW9uID0gcHJvcGVydGllcy5ldmVudCA/IHByb3BlcnRpZXMuZXZlbnQuc3RhY2sgOiBwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uO1xuXG4gICAgdGhpcy5ldmVudFRyYWNrKGBFeGNlcHRpb24gdGhyb3duIGZvciAke3Byb3BlcnRpZXMuYXBwTmFtZX0gPCR7cHJvcGVydGllcy5hcHBJZH1AJHtwcm9wZXJ0aWVzLmFwcFZlcnNpb259PmAsIHtcbiAgICAgIGNhdGVnb3J5OiAnRXhjZXB0aW9uJyxcbiAgICAgIGxhYmVsOiBwcm9wZXJ0aWVzLmV4RGVzY3JpcHRpb24sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHVzZXJJZCBmb3IgdXNlIHdpdGggVW5pdmVyc2FsIEFuYWx5dGljcyBVc2VyIElEIGZlYXR1cmVcbiAgICpcbiAgICogQHBhcmFtIHVzZXJJZCB1c2VkIHRvIGlkZW50aWZ5IHVzZXIgY3Jvc3MtZGV2aWNlIGluIEdvb2dsZSBBbmFseXRpY3NcbiAgICovXG4gIHNldFVzZXJuYW1lKHVzZXJJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ3RtLnVzZXJJZCA9IHVzZXJJZDtcbiAgfVxufVxuIl19