import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Angulartics2 } from 'angulartics2';
import * as i0 from "@angular/core";
import * as i1 from "angulartics2";
export class GoogleTagManagerDefaults {
    constructor() {
        this.userId = null;
    }
}
let Angulartics2GoogleTagManager = class Angulartics2GoogleTagManager {
    constructor(angulartics2) {
        this.angulartics2 = angulartics2;
        // The dataLayer needs to be initialized
        if (typeof dataLayer !== 'undefined' && dataLayer) {
            dataLayer = window.dataLayer = window.dataLayer || [];
        }
        const defaults = new GoogleTagManagerDefaults();
        // Set the default settings for this module
        this.angulartics2.settings.gtm = Object.assign({}, defaults, this.angulartics2.settings.gtm);
        this.angulartics2.setUsername
            .subscribe((x) => this.setUsername(x));
    }
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
    pageTrack(path) {
        this.pushLayer({
            event: 'Page View',
            'content-name': path,
            userId: this.angulartics2.settings.gtm.userId
        });
    }
    /**
     * Send Data Layer
     *
     * @layer data layer object
     */
    pushLayer(layer) {
        if (typeof dataLayer !== 'undefined' && dataLayer) {
            dataLayer.push(layer);
        }
    }
    /**
     * Send interactions to the dataLayer, i.e. for event tracking in Google Analytics
     *
     * @param action associated with the event
     */
    eventTrack(action, properties) {
        // TODO: make interface
        //  @param {string} properties.category
        //  @param {string} [properties.label]
        //  @param {number} [properties.value]
        //  @param {boolean} [properties.noninteraction]
        // Set a default GTM category
        properties = properties || {};
        this.pushLayer(Object.assign({ event: properties.event || 'interaction', target: properties.category || 'Event', action, label: properties.label, value: properties.value, interactionType: properties.noninteraction, userId: this.angulartics2.settings.gtm.userId }, properties.gtmCustom));
    }
    /**
     * Exception Track Event in GTM
     *
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
            category: 'Exception',
            label: properties.exDescription,
        });
    }
    /**
     * Set userId for use with Universal Analytics User ID feature
     *
     * @param userId used to identify user cross-device in Google Analytics
     */
    setUsername(userId) {
        this.angulartics2.settings.gtm.userId = userId;
    }
};
Angulartics2GoogleTagManager.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function Angulartics2GoogleTagManager_Factory() { return new Angulartics2GoogleTagManager(i0.ɵɵinject(i1.Angulartics2)); }, token: Angulartics2GoogleTagManager, providedIn: "root" });
Angulartics2GoogleTagManager = tslib_1.__decorate([
    Injectable({ providedIn: 'root' }),
    tslib_1.__metadata("design:paramtypes", [Angulartics2])
], Angulartics2GoogleTagManager);
export { Angulartics2GoogleTagManager };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3RtLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhcnRpY3MyL2d0bS8iLCJzb3VyY2VzIjpbImd0bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsWUFBWSxFQUE0QixNQUFNLGNBQWMsQ0FBQzs7O0FBSXRFLE1BQU0sT0FBTyx3QkFBd0I7SUFBckM7UUFDRSxXQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ2hCLENBQUM7Q0FBQTtBQUdELElBQWEsNEJBQTRCLEdBQXpDLE1BQWEsNEJBQTRCO0lBRXZDLFlBQ1ksWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFFcEMsd0NBQXdDO1FBQ3hDLElBQUksT0FBTyxTQUFTLEtBQUssV0FBVyxJQUFJLFNBQVMsRUFBRTtZQUNqRCxTQUFTLEdBQUksTUFBYyxDQUFDLFNBQVMsR0FBSSxNQUFjLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQztTQUN6RTtRQUNELE1BQU0sUUFBUSxHQUFHLElBQUksd0JBQXdCLEVBQUUsQ0FBQztRQUNoRCwyQ0FBMkM7UUFDM0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxxQkFBUSxRQUFRLEVBQUssSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFFLENBQUM7UUFDcEYsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXO2FBQzFCLFNBQVMsQ0FBQyxDQUFDLENBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTO2FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixFQUFFLENBQUM7YUFDN0MsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMs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QUcsRUFBRTtZQUMzRyxRQUFRLEVBQUUsV0FBVztZQUNyQixLQUFLLEVBQUUsVUFBVSxDQUFDLGFBQWE7U0FDaEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxXQUFXLENBQUMsTUFBYztRQUN4QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUNqRCxDQUFDO0NBQ0YsQ0FBQTs7QUEvR1ksNEJBQTRCO0lBRHhDLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQzs2Q0FJUCxZQUFZO0dBSDNCLDRCQUE0QixDQStHeEM7U0EvR1ksNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBbmd1bGFydGljczIsIEdvb2dsZVRhZ01hbmFnZXJTZXR0aW5ncyB9IGZyb20gJ2FuZ3VsYXJ0aWNzMic7XG5cbmRlY2xhcmUgdmFyIGRhdGFMYXllcjogYW55O1xuXG5leHBvcnQgY2xhc3MgR29vZ2xlVGFnTWFuYWdlckRlZmF1bHRzIGltcGxlbWVudHMgR29vZ2xlVGFnTWFuYWdlclNldHRpbmdzIHtcbiAgdXNlcklkID0gbnVsbDtcbn1cblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFydGljczJHb29nbGVUYWdNYW5hZ2VyIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgYW5ndWxhcnRpY3MyOiBBbmd1bGFydGljczIsXG4gICkge1xuICAgIC8vIFRoZSBkYXRhTGF5ZXIgbmVlZHMgdG8gYmUgaW5pdGlhbGl6ZWRcbiAgICBpZiAodHlwZW9mIGRhdGFMYXllciAhPT0gJ3VuZGVmaW5lZCcgJiYgZGF0YUxheWVyKSB7XG4gICAgICBkYXRhTGF5ZXIgPSAod2luZG93IGFzIGFueSkuZGF0YUxheWVyID0gKHdpbmRvdyBhcyBhbnkpLmRhdGFMYXllciB8fCBbXTtcbiAgICB9XG4gICAgY29uc3QgZGVmYXVsdHMgPSBuZXcgR29vZ2xlVGFnTWFuYWdlckRlZmF1bHRzKCk7XG4gICAgLy8gU2V0IHRoZSBkZWZhdWx0IHNldHRpbmdzIGZvciB0aGlzIG1vZHVsZVxuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmd0bSA9IHsgLi4uZGVmYXVsdHMsIC4uLnRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmd0bSB9O1xuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldFVzZXJuYW1lXG4gICAgICAuc3Vic2NyaWJlKCh4OiBzdHJpbmcpID0+IHRoaXMuc2V0VXNlcm5hbWUoeCkpO1xuICB9XG5cbiAgc3RhcnRUcmFja2luZygpIHtcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5wYWdlVHJhY2tcbiAgICAgIC5waXBlKHRoaXMuYW5ndWxhcnRpY3MyLmZpbHRlckRldmVsb3Blck1vZGUoKSlcbiAgICAgIC5zdWJzY3JpYmUoKHgpID0+IHRoaXMucGFnZVRyYWNrKHgucGF0aCkpO1xuICAgIHRoaXMuYW5ndWxhcnRpY3MyLmV2ZW50VHJhY2tcbiAgICAgIC5waXBlKHRoaXMuYW5ndWxhcnRpY3MyLmZpbHRlckRldmVsb3Blck1vZGUoKSlcbiAgICAgIC5zdWJzY3JpYmUoKHgpID0+IHRoaXMuZXZlbnRUcmFjayh4LmFjdGlvbiwgeC5wcm9wZXJ0aWVzKSk7XG4gICAgdGhpcy5hbmd1bGFydGljczIuZXhjZXB0aW9uVHJhY2tcbiAgICAgIC5waXBlKHRoaXMuYW5ndWxhcnRpY3MyLmZpbHRlckRldmVsb3Blck1vZGUoKSlcbiAgICAgIC5zdWJzY3JpYmUoKHg6IGFueSkgPT4gdGhpcy5leGNlcHRpb25UcmFjayh4KSk7XG4gIH1cblxuICBwYWdlVHJhY2socGF0aDogc3RyaW5nKSB7XG4gICAgdGhpcy5wdXNoTGF5ZXIoe1xuICAgICAgZXZlbnQ6ICdQYWdlIFZpZXcnLFxuICAgICAgJ2NvbnRlbnQtbmFtZSc6IHBhdGgsXG4gICAgICB1c2VySWQ6IHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmd0bS51c2VySWRcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIERhdGEgTGF5ZXJcbiAgICpcbiAgICogQGxheWVyIGRhdGEgbGF5ZXIgb2JqZWN0XG4gICAqL1xuICBwdXNoTGF5ZXIobGF5ZXI6IGFueSkge1xuICAgIGlmICh0eXBlb2YgZGF0YUxheWVyICE9PSAndW5kZWZpbmVkJyAmJiBkYXRhTGF5ZXIpIHtcbiAgICAgIGRhdGFMYXllci5wdXNoKGxheWVyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBpbnRlcmFjdGlvbnMgdG8gdGhlIGRhdGFMYXllciwgaS5lLiBmb3IgZXZlbnQgdHJhY2tpbmcgaW4gR29vZ2xlIEFuYWx5dGljc1xuICAgKlxuICAgKiBAcGFyYW0gYWN0aW9uIGFzc29jaWF0ZWQgd2l0aCB0aGUgZXZlbnRcbiAgICovXG4gIGV2ZW50VHJhY2soYWN0aW9uOiBzdHJpbmcsIHByb3BlcnRpZXM6IGFueSkge1xuICAgIC8vIFRPRE86IG1ha2UgaW50ZXJmYWNlXG4gICAgLy8gIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0aWVzLmNhdGVnb3J5XG4gICAgLy8gIEBwYXJhbSB7c3RyaW5nfSBbcHJvcGVydGllcy5sYWJlbF1cbiAgICAvLyAgQHBhcmFtIHtudW1iZXJ9IFtwcm9wZXJ0aWVzLnZhbHVlXVxuICAgIC8vICBAcGFyYW0ge2Jvb2xlYW59IFtwcm9wZXJ0aWVzLm5vbmludGVyYWN0aW9uXVxuICAgIC8vIFNldCBhIGRlZmF1bHQgR1RNIGNhdGVnb3J5XG4gICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXMgfHwge307XG5cbiAgICB0aGlzLnB1c2hMYXllcih7XG4gICAgICBldmVudDogcHJvcGVydGllcy5ldmVudCB8fCAnaW50ZXJhY3Rpb24nLFxuICAgICAgdGFyZ2V0OiBwcm9wZXJ0aWVzLmNhdGVnb3J5IHx8ICdFdmVudCcsXG4gICAgICBhY3Rpb24sXG4gICAgICBsYWJlbDogcHJvcGVydGllcy5sYWJlbCxcbiAgICAgIHZhbHVlOiBwcm9wZXJ0aWVzLnZhbHVlLFxuICAgICAgaW50ZXJhY3Rpb25UeXBlOiBwcm9wZXJ0aWVzLm5vbmludGVyYWN0aW9uLFxuICAgICAgdXNlcklkOiB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXR0aW5ncy5ndG0udXNlcklkLFxuICAgICAgLi4ucHJvcGVydGllcy5ndG1DdXN0b21cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeGNlcHRpb24gVHJhY2sgRXZlbnQgaW4gR1RNXG4gICAqXG4gICAqL1xuICBleGNlcHRpb25UcmFjayhwcm9wZXJ0aWVzOiBhbnkpIHtcbiAgICAvLyBUT0RPOiBtYWtlIGludGVyZmFjZVxuICAgIC8vICBAcGFyYW0ge09iamVjdH0gcHJvcGVydGllc1xuICAgIC8vICBAcGFyYW0ge3N0cmluZ30gcHJvcGVydGllcy5hcHBJZFxuICAgIC8vICBAcGFyYW0ge3N0cmluZ30gcHJvcGVydGllcy5hcHBOYW1lXG4gICAgLy8gIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0aWVzLmFwcFZlcnNpb25cbiAgICAvLyAgQHBhcmFtIHtzdHJpbmd9IFtwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uXVxuICAgIC8vICBAcGFyYW0ge2Jvb2xlYW59IFtwcm9wZXJ0aWVzLmZhdGFsXVxuICAgIGlmICghIHByb3BlcnRpZXMgfHwgISBwcm9wZXJ0aWVzLmFwcElkIHx8ICEgcHJvcGVydGllcy5hcHBOYW1lIHx8ICEgcHJvcGVydGllcy5hcHBWZXJzaW9uKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdNdXN0IGJlIHNldHRlZCBhcHBJZCwgYXBwTmFtZSBhbmQgYXBwVmVyc2lvbi4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcGVydGllcy5mYXRhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zb2xlLmxvZygnTm8gXCJmYXRhbFwiIHByb3ZpZGVkLCBzZW5kaW5nIHdpdGggZmF0YWw9dHJ1ZScpO1xuICAgICAgcHJvcGVydGllcy5leEZhdGFsID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcm9wZXJ0aWVzLmV4RGVzY3JpcHRpb24gPSBwcm9wZXJ0aWVzLmV2ZW50ID8gcHJvcGVydGllcy5ldmVudC5zdGFjayA6IHByb3BlcnRpZXMuZGVzY3JpcHRpb247XG5cbiAgICB0aGlzLmV2ZW50VHJhY2soYEV4Y2VwdGlvbiB0aHJvd24gZm9yICR7cHJvcGVydGllcy5hcHBOYW1lfSA8JHtwcm9wZXJ0aWVzLmFwcElkfUAke3Byb3BlcnRpZXMuYXBwVmVyc2lvbn0+YCwge1xuICAgICAgY2F0ZWdvcnk6ICdFeGNlcHRpb24nLFxuICAgICAgbGFiZWw6IHByb3BlcnRpZXMuZXhEZXNjcmlwdGlvbixcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdXNlcklkIGZvciB1c2Ugd2l0aCBVbml2ZXJzYWwgQW5hbHl0aWNzIFVzZXIgSUQgZmVhdHVyZVxuICAgKlxuICAgKiBAcGFyYW0gdXNlcklkIHVzZWQgdG8gaWRlbnRpZnkgdXNlciBjcm9zcy1kZXZpY2UgaW4gR29vZ2xlIEFuYWx5dGljc1xuICAgKi9cbiAgc2V0VXNlcm5hbWUodXNlcklkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXR0aW5ncy5ndG0udXNlcklkID0gdXNlcklkO1xuICB9XG59XG4iXX0=