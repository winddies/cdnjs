/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Angulartics2 } from 'angulartics2';
import * as i0 from "@angular/core";
import * as i1 from "angulartics2";
export class GoogleTagManagerDefaults {
    constructor() {
        this.userId = null;
    }
}
if (false) {
    /** @type {?} */
    GoogleTagManagerDefaults.prototype.userId;
}
export class Angulartics2GoogleTagManager {
    /**
     * @param {?} angulartics2
     */
    constructor(angulartics2) {
        this.angulartics2 = angulartics2;
        // The dataLayer needs to be initialized
        if (typeof dataLayer !== 'undefined' && dataLayer) {
            dataLayer = ((/** @type {?} */ (window))).dataLayer = ((/** @type {?} */ (window))).dataLayer || [];
        }
        /** @type {?} */
        const defaults = new GoogleTagManagerDefaults;
        // Set the default settings for this module
        this.angulartics2.settings.gtm = Object.assign({}, defaults, this.angulartics2.settings.gtm);
        this.angulartics2.setUsername
            .subscribe((x) => this.setUsername(x));
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
        this.angulartics2.exceptionTrack
            .pipe(this.angulartics2.filterDeveloperMode())
            .subscribe((x) => this.exceptionTrack(x));
    }
    /**
     * @param {?} path
     * @return {?}
     */
    pageTrack(path) {
        this.pushLayer({
            'event': 'Page View',
            'content-name': path,
            'userId': this.angulartics2.settings.gtm.userId
        });
    }
    /**
     * Send Data Layer
     *
     * \@layer data layer object
     * @param {?} layer
     * @return {?}
     */
    pushLayer(layer) {
        if (typeof dataLayer !== 'undefined' && dataLayer) {
            dataLayer.push(layer);
        }
    }
    /**
     * Send interactions to the dataLayer, i.e. for event tracking in Google Analytics
     *
     * @param {?} action associated with the event
     * @param {?} properties
     * @return {?}
     */
    eventTrack(action, properties) {
        // TODO: make interface
        //  @param {string} properties.category
        //  @param {string} [properties.label]
        //  @param {number} [properties.value]
        //  @param {boolean} [properties.noninteraction]
        // Set a default GTM category
        properties = properties || {};
        this.pushLayer(Object.assign({ event: properties.event || 'interaction', target: properties.category || 'Event', action: action, label: properties.label, value: properties.value, interactionType: properties.noninteraction, userId: this.angulartics2.settings.gtm.userId }, properties.gtmCustom));
    }
    /**
     * Exception Track Event in GTM
     *
     * @param {?} properties
     * @return {?}
     */
    exceptionTrack(properties) {
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
        this.eventTrack(`Exception thrown for ${properties.appName} <${properties.appId}@${properties.appVersion}>`, {
            'category': 'Exception',
            'label': properties.exDescription
        });
    }
    /**
     * Set userId for use with Universal Analytics User ID feature
     *
     * @param {?} userId used to identify user cross-device in Google Analytics
     * @return {?}
     */
    setUsername(userId) {
        this.angulartics2.settings.gtm.userId = userId;
    }
}
Angulartics2GoogleTagManager.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
Angulartics2GoogleTagManager.ctorParameters = () => [
    { type: Angulartics2 }
];
/** @nocollapse */ Angulartics2GoogleTagManager.ngInjectableDef = i0.defineInjectable({ factory: function Angulartics2GoogleTagManager_Factory() { return new Angulartics2GoogleTagManager(i0.inject(i1.Angulartics2)); }, token: Angulartics2GoogleTagManager, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    Angulartics2GoogleTagManager.prototype.angulartics2;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3RtLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhcnRpY3MyL2d0bS8iLCJzb3VyY2VzIjpbImd0bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsWUFBWSxFQUE0QixNQUFNLGNBQWMsQ0FBQzs7O0FBSXRFLE1BQU0sT0FBTyx3QkFBd0I7SUFBckM7UUFDRSxXQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ2hCLENBQUM7Q0FBQTs7O0lBREMsMENBQWM7O0FBSWhCLE1BQU0sT0FBTyw0QkFBNEI7Ozs7SUFFdkMsWUFDWSxZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUVwQyx3Q0FBd0M7UUFDeEMsSUFBSSxPQUFPLFNBQVMsS0FBSyxXQUFXLElBQUksU0FBUyxFQUFFO1lBQ2pELFNBQVMsR0FBRyxDQUFDLG1CQUFLLE1BQU0sRUFBQSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsbUJBQUssTUFBTSxFQUFBLENBQUMsQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDO1NBQ3JFOztjQUNLLFFBQVEsR0FBRyxJQUFJLHdCQUF3QjtRQUM3QywyQ0FBMkM7UUFDM0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxxQkFBUSxRQUFRLEVBQUssSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFFLENBQUM7UUFDcEYsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXO2FBQzFCLFNBQVMsQ0FBQyxDQUFDLENBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTO2FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixFQUFFLENBQUM7YUFDN0MsU0FBUyxD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QVUsQ0FBQyxLQUFLLElBQUksVUFBVSxDQUFDLFVBQVUsR0FBRyxFQUFFO1lBQzNHLFVBQVUsRUFBRSxXQUFXO1lBQ3ZCLE9BQU8sRUFBRSxVQUFVLENBQUMsYUFBYTtTQUNsQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7O0lBT0QsV0FBVyxDQUFDLE1BQWM7UUFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDakQsQ0FBQzs7O1lBL0dGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUFSekIsWUFBWTs7Ozs7Ozs7SUFZakIsb0RBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBbmd1bGFydGljczIsIEdvb2dsZVRhZ01hbmFnZXJTZXR0aW5ncyB9IGZyb20gJ2FuZ3VsYXJ0aWNzMic7XG5cbmRlY2xhcmUgdmFyIGRhdGFMYXllcjogYW55O1xuXG5leHBvcnQgY2xhc3MgR29vZ2xlVGFnTWFuYWdlckRlZmF1bHRzIGltcGxlbWVudHMgR29vZ2xlVGFnTWFuYWdlclNldHRpbmdzIHtcbiAgdXNlcklkID0gbnVsbDtcbn1cblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFydGljczJHb29nbGVUYWdNYW5hZ2VyIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgYW5ndWxhcnRpY3MyOiBBbmd1bGFydGljczIsXG4gICkge1xuICAgIC8vIFRoZSBkYXRhTGF5ZXIgbmVlZHMgdG8gYmUgaW5pdGlhbGl6ZWRcbiAgICBpZiAodHlwZW9mIGRhdGFMYXllciAhPT0gJ3VuZGVmaW5lZCcgJiYgZGF0YUxheWVyKSB7XG4gICAgICBkYXRhTGF5ZXIgPSAoPGFueT53aW5kb3cpLmRhdGFMYXllciA9ICg8YW55PndpbmRvdykuZGF0YUxheWVyIHx8IFtdO1xuICAgIH1cbiAgICBjb25zdCBkZWZhdWx0cyA9IG5ldyBHb29nbGVUYWdNYW5hZ2VyRGVmYXVsdHM7XG4gICAgLy8gU2V0IHRoZSBkZWZhdWx0IHNldHRpbmdzIGZvciB0aGlzIG1vZHVsZVxuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmd0bSA9IHsgLi4uZGVmYXVsdHMsIC4uLnRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmd0bSB9O1xuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldFVzZXJuYW1lXG4gICAgICAuc3Vic2NyaWJlKCh4OiBzdHJpbmcpID0+IHRoaXMuc2V0VXNlcm5hbWUoeCkpO1xuICB9XG5cbiAgc3RhcnRUcmFja2luZygpIHtcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5wYWdlVHJhY2tcbiAgICAgIC5waXBlKHRoaXMuYW5ndWxhcnRpY3MyLmZpbHRlckRldmVsb3Blck1vZGUoKSlcbiAgICAgIC5zdWJzY3JpYmUoKHgpID0+IHRoaXMucGFnZVRyYWNrKHgucGF0aCkpO1xuICAgIHRoaXMuYW5ndWxhcnRpY3MyLmV2ZW50VHJhY2tcbiAgICAgIC5waXBlKHRoaXMuYW5ndWxhcnRpY3MyLmZpbHRlckRldmVsb3Blck1vZGUoKSlcbiAgICAgIC5zdWJzY3JpYmUoKHgpID0+IHRoaXMuZXZlbnRUcmFjayh4LmFjdGlvbiwgeC5wcm9wZXJ0aWVzKSk7XG4gICAgdGhpcy5hbmd1bGFydGljczIuZXhjZXB0aW9uVHJhY2tcbiAgICAgIC5waXBlKHRoaXMuYW5ndWxhcnRpY3MyLmZpbHRlckRldmVsb3Blck1vZGUoKSlcbiAgICAgIC5zdWJzY3JpYmUoKHg6IGFueSkgPT4gdGhpcy5leGNlcHRpb25UcmFjayh4KSk7XG4gIH1cblxuICBwYWdlVHJhY2socGF0aDogc3RyaW5nKSB7XG4gICAgdGhpcy5wdXNoTGF5ZXIoe1xuICAgICAgJ2V2ZW50JzogJ1BhZ2UgVmlldycsXG4gICAgICAnY29udGVudC1uYW1lJzogcGF0aCxcbiAgICAgICd1c2VySWQnOiB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXR0aW5ncy5ndG0udXNlcklkXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBEYXRhIExheWVyXG4gICAqXG4gICAqIEBsYXllciBkYXRhIGxheWVyIG9iamVjdFxuICAgKi9cbiAgcHVzaExheWVyKGxheWVyOiBhbnkpIHtcbiAgICBpZiAodHlwZW9mIGRhdGFMYXllciAhPT0gJ3VuZGVmaW5lZCcgJiYgZGF0YUxheWVyKSB7XG4gICAgICBkYXRhTGF5ZXIucHVzaChsYXllcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgaW50ZXJhY3Rpb25zIHRvIHRoZSBkYXRhTGF5ZXIsIGkuZS4gZm9yIGV2ZW50IHRyYWNraW5nIGluIEdvb2dsZSBBbmFseXRpY3NcbiAgICpcbiAgICogQHBhcmFtIGFjdGlvbiBhc3NvY2lhdGVkIHdpdGggdGhlIGV2ZW50XG4gICAqL1xuICBldmVudFRyYWNrKGFjdGlvbjogc3RyaW5nLCBwcm9wZXJ0aWVzOiBhbnkpIHtcbiAgICAvLyBUT0RPOiBtYWtlIGludGVyZmFjZVxuICAgIC8vICBAcGFyYW0ge3N0cmluZ30gcHJvcGVydGllcy5jYXRlZ29yeVxuICAgIC8vICBAcGFyYW0ge3N0cmluZ30gW3Byb3BlcnRpZXMubGFiZWxdXG4gICAgLy8gIEBwYXJhbSB7bnVtYmVyfSBbcHJvcGVydGllcy52YWx1ZV1cbiAgICAvLyAgQHBhcmFtIHtib29sZWFufSBbcHJvcGVydGllcy5ub25pbnRlcmFjdGlvbl1cbiAgICAvLyBTZXQgYSBkZWZhdWx0IEdUTSBjYXRlZ29yeVxuICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzIHx8IHt9O1xuXG4gICAgdGhpcy5wdXNoTGF5ZXIoe1xuICAgICAgZXZlbnQ6IHByb3BlcnRpZXMuZXZlbnQgfHwgJ2ludGVyYWN0aW9uJyxcbiAgICAgIHRhcmdldDogcHJvcGVydGllcy5jYXRlZ29yeSB8fCAnRXZlbnQnLFxuICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICBsYWJlbDogcHJvcGVydGllcy5sYWJlbCxcbiAgICAgIHZhbHVlOiBwcm9wZXJ0aWVzLnZhbHVlLFxuICAgICAgaW50ZXJhY3Rpb25UeXBlOiBwcm9wZXJ0aWVzLm5vbmludGVyYWN0aW9uLFxuICAgICAgdXNlcklkOiB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXR0aW5ncy5ndG0udXNlcklkLFxuICAgICAgLi4ucHJvcGVydGllcy5ndG1DdXN0b21cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeGNlcHRpb24gVHJhY2sgRXZlbnQgaW4gR1RNXG4gICAqXG4gICAqL1xuICBleGNlcHRpb25UcmFjayhwcm9wZXJ0aWVzOiBhbnkpIHtcbiAgICAvLyBUT0RPOiBtYWtlIGludGVyZmFjZVxuICAgIC8vICBAcGFyYW0ge09iamVjdH0gcHJvcGVydGllc1xuICAgIC8vICBAcGFyYW0ge3N0cmluZ30gcHJvcGVydGllcy5hcHBJZFxuICAgIC8vICBAcGFyYW0ge3N0cmluZ30gcHJvcGVydGllcy5hcHBOYW1lXG4gICAgLy8gIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0aWVzLmFwcFZlcnNpb25cbiAgICAvLyAgQHBhcmFtIHtzdHJpbmd9IFtwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uXVxuICAgIC8vICBAcGFyYW0ge2Jvb2xlYW59IFtwcm9wZXJ0aWVzLmZhdGFsXVxuICAgIGlmICghIHByb3BlcnRpZXMgfHwgISBwcm9wZXJ0aWVzLmFwcElkIHx8ICEgcHJvcGVydGllcy5hcHBOYW1lIHx8ICEgcHJvcGVydGllcy5hcHBWZXJzaW9uKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdNdXN0IGJlIHNldHRlZCBhcHBJZCwgYXBwTmFtZSBhbmQgYXBwVmVyc2lvbi4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcGVydGllcy5mYXRhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zb2xlLmxvZygnTm8gXCJmYXRhbFwiIHByb3ZpZGVkLCBzZW5kaW5nIHdpdGggZmF0YWw9dHJ1ZScpO1xuICAgICAgcHJvcGVydGllcy5leEZhdGFsID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcm9wZXJ0aWVzLmV4RGVzY3JpcHRpb24gPSBwcm9wZXJ0aWVzLmV2ZW50ID8gcHJvcGVydGllcy5ldmVudC5zdGFjayA6IHByb3BlcnRpZXMuZGVzY3JpcHRpb247XG5cbiAgICB0aGlzLmV2ZW50VHJhY2soYEV4Y2VwdGlvbiB0aHJvd24gZm9yICR7cHJvcGVydGllcy5hcHBOYW1lfSA8JHtwcm9wZXJ0aWVzLmFwcElkfUAke3Byb3BlcnRpZXMuYXBwVmVyc2lvbn0+YCwge1xuICAgICAgJ2NhdGVnb3J5JzogJ0V4Y2VwdGlvbicsXG4gICAgICAnbGFiZWwnOiBwcm9wZXJ0aWVzLmV4RGVzY3JpcHRpb25cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdXNlcklkIGZvciB1c2Ugd2l0aCBVbml2ZXJzYWwgQW5hbHl0aWNzIFVzZXIgSUQgZmVhdHVyZVxuICAgKlxuICAgKiBAcGFyYW0gdXNlcklkIHVzZWQgdG8gaWRlbnRpZnkgdXNlciBjcm9zcy1kZXZpY2UgaW4gR29vZ2xlIEFuYWx5dGljc1xuICAgKi9cbiAgc2V0VXNlcm5hbWUodXNlcklkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXR0aW5ncy5ndG0udXNlcklkID0gdXNlcklkO1xuICB9XG59XG4iXX0=