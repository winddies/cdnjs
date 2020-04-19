import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Angulartics2, } from 'angulartics2';
import * as i0 from "@angular/core";
import * as i1 from "angulartics2";
export class GoogleAnalyticsDefaults {
    constructor() {
        this.additionalAccountNames = [];
        this.userId = null;
        this.transport = '';
        this.anonymizeIp = false;
    }
}
let Angulartics2GoogleAnalytics = class Angulartics2GoogleAnalytics {
    constructor(angulartics2) {
        this.angulartics2 = angulartics2;
        this.dimensionsAndMetrics = [];
        const defaults = new GoogleAnalyticsDefaults();
        // Set the default settings for this module
        this.angulartics2.settings.ga = Object.assign({}, defaults, this.angulartics2.settings.ga);
        this.settings = this.angulartics2.settings.ga;
        this.angulartics2.setUsername.subscribe((x) => this.setUsername(x));
        this.angulartics2.setUserProperties.subscribe(x => this.setUserProperties(x));
    }
    startTracking() {
        this.angulartics2.pageTrack
            .pipe(this.angulartics2.filterDeveloperMode())
            .subscribe(x => this.pageTrack(x.path));
        this.angulartics2.eventTrack
            .pipe(this.angulartics2.filterDeveloperMode())
            .subscribe(x => this.eventTrack(x.action, x.properties));
        this.angulartics2.exceptionTrack
            .pipe(this.angulartics2.filterDeveloperMode())
            .subscribe(x => this.exceptionTrack(x));
        this.angulartics2.userTimings
            .pipe(this.angulartics2.filterDeveloperMode())
            .subscribe(x => this.userTimings(x));
    }
    pageTrack(path) {
        if (typeof _gaq !== 'undefined' && _gaq) {
            _gaq.push(['_trackPageview', path]);
            for (const accountName of this.angulartics2.settings.ga.additionalAccountNames) {
                _gaq.push([accountName + '._trackPageview', path]);
            }
        }
        if (typeof ga !== 'undefined' && ga) {
            if (this.angulartics2.settings.ga.userId) {
                ga('set', '&uid', this.angulartics2.settings.ga.userId);
                for (const accountName of this.angulartics2.settings.ga.additionalAccountNames) {
                    ga(accountName + '.set', '&uid', this.angulartics2.settings.ga.userId);
                }
            }
            if (this.angulartics2.settings.ga.anonymizeIp) {
                ga('set', 'anonymizeIp', true);
                for (const accountName of this.angulartics2.settings.ga.additionalAccountNames) {
                    ga(accountName + '.set', 'anonymizeIp', true);
                }
            }
            ga('send', 'pageview', path);
            for (const accountName of this.angulartics2.settings.ga.additionalAccountNames) {
                ga(accountName + '.send', 'pageview', path);
            }
        }
    }
    /**
     * Track Event in GA
     *
     * @param action Associated with the event
     * @param properties Comprised of:
     *  - category (string) and optional
     *  - label (string)
     *  - value (integer)
     *  - noninteraction (boolean)
     *
     * @link https://developers.google.com/analytics/devguides/collection/gajs/eventTrackerGuide#SettingUpEventTracking
     * @link https://developers.google.com/analytics/devguides/collection/analyticsjs/events
     */
    eventTrack(action, properties) {
        // Google Analytics requires an Event Category
        if (!properties || !properties.category) {
            properties = properties || {};
            properties.category = 'Event';
        }
        // GA requires that eventValue be an integer, see:
        // https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#eventValue
        // https://github.com/luisfarzati/angulartics/issues/81
        if (properties.value) {
            const parsed = parseInt(properties.value, 10);
            properties.value = isNaN(parsed) ? 0 : parsed;
        }
        if (typeof ga !== 'undefined') {
            const eventOptions = Object.assign({ eventCategory: properties.category, eventAction: action, eventLabel: properties.label, eventValue: properties.value, nonInteraction: properties.noninteraction, page: properties.page || location.hash.substring(1) || location.pathname, userId: this.angulartics2.settings.ga.userId, hitCallback: properties.hitCallback }, this.angulartics2.settings.ga.transport && { transport: this.angulartics2.settings.ga.transport });
            // add custom dimensions and metrics
            this.setDimensionsAndMetrics(properties);
            ga('send', 'event', eventOptions);
            for (const accountName of this.angulartics2.settings.ga.additionalAccountNames) {
                ga(accountName + '.send', 'event', eventOptions);
            }
        }
        else if (typeof _gaq !== 'undefined') {
            _gaq.push([
                '_trackEvent',
                properties.category,
                action,
                properties.label,
                properties.value,
                properties.noninteraction,
            ]);
        }
    }
    /**
     * Exception Track Event in GA
     *
     * @param properties Comprised of the optional fields:
     *  - fatal (string)
     *  - description (string)
     *
     * @https://developers.google.com/analytics/devguides/collection/analyticsjs/exceptions
     *
     * @link https://developers.google.com/analytics/devguides/collection/analyticsjs/events
     */
    exceptionTrack(properties) {
        if (properties.fatal === undefined) {
            console.log('No "fatal" provided, sending with fatal=true');
            properties.fatal = true;
        }
        properties.exDescription = properties.description;
        const eventOptions = {
            exFatal: properties.fatal,
            exDescription: properties.description,
        };
        ga('send', 'exception', eventOptions);
        for (const accountName of this.angulartics2.settings.ga.additionalAccountNames) {
            ga(accountName + '.send', 'exception', eventOptions);
        }
    }
    /**
     * User Timings Event in GA
     *
     * @param properties Comprised of the mandatory fields:
     *  - timingCategory (string)
     *  - timingVar (string)
     *  - timingValue (number)
     * Properties can also have the optional fields:
     *  - timingLabel (string)
     *
     * @link https://developers.google.com/analytics/devguides/collection/analyticsjs/user-timings
     */
    userTimings(properties) {
        if (!properties ||
            !properties.timingCategory ||
            !properties.timingVar ||
            !properties.timingValue) {
            console.error('Properties timingCategory, timingVar, and timingValue are required to be set.');
            return;
        }
        if (typeof ga !== 'undefined') {
            ga('send', 'timing', properties);
            for (const accountName of this.angulartics2.settings.ga.additionalAccountNames) {
                ga(accountName + '.send', 'timing', properties);
            }
        }
    }
    setUsername(userId) {
        this.angulartics2.settings.ga.userId = userId;
        if (typeof ga === 'undefined') {
            return;
        }
        ga('set', 'userId', userId);
    }
    setUserProperties(properties) {
        this.setDimensionsAndMetrics(properties);
    }
    setDimensionsAndMetrics(properties) {
        if (typeof ga === 'undefined') {
            return;
        }
        // clean previously used dimensions and metrics that will not be overriden
        this.dimensionsAndMetrics.forEach(elem => {
            if (!properties.hasOwnProperty(elem)) {
                ga('set', elem, undefined);
                this.angulartics2.settings.ga.additionalAccountNames.forEach((accountName) => {
                    ga(`${accountName}.set`, elem, undefined);
                });
            }
        });
        this.dimensionsAndMetrics = [];
        // add custom dimensions and metrics
        Object.keys(properties).forEach(key => {
            if (key.lastIndexOf('dimension', 0) === 0 ||
                key.lastIndexOf('metric', 0) === 0) {
                ga('set', key, properties[key]);
                this.angulartics2.settings.ga.additionalAccountNames.forEach((accountName) => {
                    ga(`${accountName}.set`, key, properties[key]);
                });
                this.dimensionsAndMetrics.push(key);
            }
        });
    }
};
Angulartics2GoogleAnalytics.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function Angulartics2GoogleAnalytics_Factory() { return new Angulartics2GoogleAnalytics(i0.ɵɵinject(i1.Angulartics2)); }, token: Angulartics2GoogleAnalytics, providedIn: "root" });
Angulartics2GoogleAnalytics = tslib_1.__decorate([
    Injectable({ providedIn: 'root' }),
    tslib_1.__metadata("design:paramtypes", [Angulartics2])
], Angulartics2GoogleAnalytics);
export { Angulartics2GoogleAnalytics };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2EuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFydGljczIvZ2EvIiwic291cmNlcyI6WyJnYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQ0wsWUFBWSxHQUdiLE1BQU0sY0FBYyxDQUFDOzs7QUFPdEIsTUFBTSxPQUFPLHVCQUF1QjtJQUFwQztRQUNFLDJCQUFzQixHQUFHLEVBQUUsQ0FBQztRQUM1QixXQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2QsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLGdCQUFXLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Q0FBQTtBQUdELElBQWEsMkJBQTJCLEdBQXhDLE1BQWEsMkJBQTJCO0lBSXRDLFlBQW9CLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBSDlDLHlCQUFvQixHQUFHLEVBQUUsQ0FBQztRQUl4QixNQUFNLFFBQVEsR0FBRyxJQUFJLHVCQUF1QixFQUFFLENBQUM7UUFDL0MsMkNBQTJDO1FBQzNDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEVBQUUscUJBQ3hCLFFBQVEsRUFDUixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQ2pDLENBQUM7UUFDRixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztRQUM5QyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hG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Q0FBQyxDQUFDLENBQUM7Z0JBQ2pELENBQUMsQ0FDRixDQUFDO2dCQUNGLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDckM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFBOztBQXBPWSwyQkFBMkI7SUFEdkMsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDOzZDQUtDLFlBQVk7R0FKbkMsMkJBQTJCLENBb092QztTQXBPWSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIEFuZ3VsYXJ0aWNzMixcbiAgR29vZ2xlQW5hbHl0aWNzU2V0dGluZ3MsXG4gIFVzZXJUaW1pbmdzLFxufSBmcm9tICdhbmd1bGFydGljczInO1xuXG5cbmRlY2xhcmUgdmFyIF9nYXE6IEdvb2dsZUFuYWx5dGljc0NvZGU7XG5kZWNsYXJlIHZhciBnYTogVW5pdmVyc2FsQW5hbHl0aWNzLmdhO1xuZGVjbGFyZSB2YXIgbG9jYXRpb246IGFueTtcblxuZXhwb3J0IGNsYXNzIEdvb2dsZUFuYWx5dGljc0RlZmF1bHRzIGltcGxlbWVudHMgR29vZ2xlQW5hbHl0aWNzU2V0dGluZ3Mge1xuICBhZGRpdGlvbmFsQWNjb3VudE5hbWVzID0gW107XG4gIHVzZXJJZCA9IG51bGw7XG4gIHRyYW5zcG9ydCA9ICcnO1xuICBhbm9ueW1pemVJcCA9IGZhbHNlO1xufVxuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJ0aWNzMkdvb2dsZUFuYWx5dGljcyB7XG4gIGRpbWVuc2lvbnNBbmRNZXRyaWNzID0gW107XG4gIHNldHRpbmdzOiBQYXJ0aWFsPEdvb2dsZUFuYWx5dGljc1NldHRpbmdzPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFuZ3VsYXJ0aWNzMjogQW5ndWxhcnRpY3MyKSB7XG4gICAgY29uc3QgZGVmYXVsdHMgPSBuZXcgR29vZ2xlQW5hbHl0aWNzRGVmYXVsdHMoKTtcbiAgICAvLyBTZXQgdGhlIGRlZmF1bHQgc2V0dGluZ3MgZm9yIHRoaXMgbW9kdWxlXG4gICAgdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ2EgPSB7XG4gICAgICAuLi5kZWZhdWx0cyxcbiAgICAgIC4uLnRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmdhLFxuICAgIH07XG4gICAgdGhpcy5zZXR0aW5ncyA9IHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmdhO1xuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldFVzZXJuYW1lLnN1YnNjcmliZSgoeDogc3RyaW5nKSA9PiB0aGlzLnNldFVzZXJuYW1lKHgpKTtcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXRVc2VyUHJvcGVydGllcy5zdWJzY3JpYmUoeCA9PiB0aGlzLnNldFVzZXJQcm9wZXJ0aWVzKHgpKTtcbiAgfVxuXG4gIHN0YXJ0VHJhY2tpbmcoKTogdm9pZCB7XG4gICAgdGhpcy5hbmd1bGFydGljczIucGFnZVRyYWNrXG4gICAgICAucGlwZSh0aGlzLmFuZ3VsYXJ0aWNzMi5maWx0ZXJEZXZlbG9wZXJNb2RlKCkpXG4gICAgICAuc3Vic2NyaWJlKHggPT4gdGhpcy5wYWdlVHJhY2soeC5wYXRoKSk7XG4gICAgdGhpcy5hbmd1bGFydGljczIuZXZlbnRUcmFja1xuICAgICAgLnBpcGUodGhpcy5hbmd1bGFydGljczIuZmlsdGVyRGV2ZWxvcGVyTW9kZSgpKVxuICAgICAgLnN1YnNjcmliZSh4ID0+IHRoaXMuZXZlbnRUcmFjayh4LmFjdGlvbiwgeC5wcm9wZXJ0aWVzKSk7XG4gICAgdGhpcy5hbmd1bGFydGljczIuZXhjZXB0aW9uVHJhY2tcbiAgICAgIC5waXBlKHRoaXMuYW5ndWxhcnRpY3MyLmZpbHRlckRldmVsb3Blck1vZGUoKSlcbiAgICAgIC5zdWJzY3JpYmUoeCA9PiB0aGlzLmV4Y2VwdGlvblRyYWNrKHgpKTtcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi51c2VyVGltaW5nc1xuICAgICAgLnBpcGUodGhpcy5hbmd1bGFydGljczIuZmlsdGVyRGV2ZWxvcGVyTW9kZSgpKVxuICAgICAgLnN1YnNjcmliZSh4ID0+IHRoaXMudXNlclRpbWluZ3MoeCkpO1xuICB9XG5cbiAgcGFnZVRyYWNrKHBhdGg6IHN0cmluZykge1xuICAgIGlmICh0eXBlb2YgX2dhcSAhPT0gJ3VuZGVmaW5lZCcgJiYgX2dhcSkge1xuICAgICAgX2dhcS5wdXNoKFsnX3RyYWNrUGFnZXZpZXcnLCBwYXRoXSk7XG4gICAgICBmb3IgKGNvbnN0IGFjY291bnROYW1lIG9mIHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmdhLmFkZGl0aW9uYWxBY2NvdW50TmFtZXMpIHtcbiAgICAgICAgX2dhcS5wdXNoKFthY2NvdW50TmFtZSArICcuX3RyYWNrUGFnZXZpZXcnLCBwYXRoXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZ2EgIT09ICd1bmRlZmluZWQnICYmIGdhKSB7XG4gICAgICBpZiAodGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ2EudXNlcklkKSB7XG4gICAgICAgIGdhKCdzZXQnLCAnJnVpZCcsIHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmdhLnVzZXJJZCk7XG4gICAgICAgIGZvciAoY29uc3QgYWNjb3VudE5hbWUgb2YgdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ2EuYWRkaXRpb25hbEFjY291bnROYW1lcykge1xuICAgICAgICAgIGdhKGFjY291bnROYW1lICsgJy5zZXQnLCAnJnVpZCcsIHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmdhLnVzZXJJZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmFuZ3VsYXJ0aWNzMi5zZXR0aW5ncy5nYS5hbm9ueW1pemVJcCkge1xuICAgICAgICBnYSgnc2V0JywgJ2Fub255bWl6ZUlwJywgdHJ1ZSk7XG4gICAgICAgIGZvciAoY29uc3QgYWNjb3VudE5hbWUgb2YgdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ2EuYWRkaXRpb25hbEFjY291bnROYW1lcykge1xuICAgICAgICAgIGdhKGFjY291bnROYW1lICsgJy5zZXQnLCAnYW5vbnltaXplSXAnLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZ2EoJ3NlbmQnLCAncGFnZXZpZXcnLCBwYXRoKTtcbiAgICAgIGZvciAoY29uc3QgYWNjb3VudE5hbWUgb2YgdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ2EuYWRkaXRpb25hbEFjY291bnROYW1lcykge1xuICAgICAgICBnYShhY2NvdW50TmFtZSArICcuc2VuZCcsICdwYWdldmlldycsIHBhdGgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFjayBFdmVudCBpbiBHQVxuICAgKlxuICAgKiBAcGFyYW0gYWN0aW9uIEFzc29jaWF0ZWQgd2l0aCB0aGUgZXZlbnRcbiAgICogQHBhcmFtIHByb3BlcnRpZXMgQ29tcHJpc2VkIG9mOlxuICAgKiAgLSBjYXRlZ29yeSAoc3RyaW5nKSBhbmQgb3B0aW9uYWxcbiAgICogIC0gbGFiZWwgKHN0cmluZylcbiAgICogIC0gdmFsdWUgKGludGVnZXIpXG4gICAqICAtIG5vbmludGVyYWN0aW9uIChib29sZWFuKVxuICAgKlxuICAgKiBAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vZ2Fqcy9ldmVudFRyYWNrZXJHdWlkZSNTZXR0aW5nVXBFdmVudFRyYWNraW5nXG4gICAqIEBsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9hbmFseXRpY3Nqcy9ldmVudHNcbiAgICovXG4gIGV2ZW50VHJhY2soYWN0aW9uOiBzdHJpbmcsIHByb3BlcnRpZXM6IGFueSkge1xuICAgIC8vIEdvb2dsZSBBbmFseXRpY3MgcmVxdWlyZXMgYW4gRXZlbnQgQ2F0ZWdvcnlcbiAgICBpZiAoIXByb3BlcnRpZXMgfHwgIXByb3BlcnRpZXMuY2F0ZWdvcnkpIHtcbiAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzIHx8IHt9O1xuICAgICAgcHJvcGVydGllcy5jYXRlZ29yeSA9ICdFdmVudCc7XG4gICAgfVxuICAgIC8vIEdBIHJlcXVpcmVzIHRoYXQgZXZlbnRWYWx1ZSBiZSBhbiBpbnRlZ2VyLCBzZWU6XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL2FuYWx5dGljc2pzL2ZpZWxkLXJlZmVyZW5jZSNldmVudFZhbHVlXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2x1aXNmYXJ6YXRpL2FuZ3VsYXJ0aWNzL2lzc3Vlcy84MVxuICAgIGlmIChwcm9wZXJ0aWVzLnZhbHVlKSB7XG4gICAgICBjb25zdCBwYXJzZWQgPSBwYXJzZUludChwcm9wZXJ0aWVzLnZhbHVlLCAxMCk7XG4gICAgICBwcm9wZXJ0aWVzLnZhbHVlID0gaXNOYU4ocGFyc2VkKSA/IDAgOiBwYXJzZWQ7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBnYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnN0IGV2ZW50T3B0aW9ucyA9IHtcbiAgICAgICAgZXZlbnRDYXRlZ29yeTogcHJvcGVydGllcy5jYXRlZ29yeSxcbiAgICAgICAgZXZlbnRBY3Rpb246IGFjdGlvbixcbiAgICAgICAgZXZlbnRMYWJlbDogcHJvcGVydGllcy5sYWJlbCxcbiAgICAgICAgZXZlbnRWYWx1ZTogcHJvcGVydGllcy52YWx1ZSxcbiAgICAgICAgbm9uSW50ZXJhY3Rpb246IHByb3BlcnRpZXMubm9uaW50ZXJhY3Rpb24sXG4gICAgICAgIHBhZ2U6IHByb3BlcnRpZXMucGFnZSB8fCBsb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKSB8fCBsb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgICAgdXNlcklkOiB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXR0aW5ncy5nYS51c2VySWQsXG4gICAgICAgIGhpdENhbGxiYWNrOiBwcm9wZXJ0aWVzLmhpdENhbGxiYWNrLFxuICAgICAgICAuLi4gdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ2EudHJhbnNwb3J0ICYmIHsgdHJhbnNwb3J0OiB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXR0aW5ncy5nYS50cmFuc3BvcnQgfVxuICAgICAgfTtcblxuICAgICAgLy8gYWRkIGN1c3RvbSBkaW1lbnNpb25zIGFuZCBtZXRyaWNzXG4gICAgICB0aGlzLnNldERpbWVuc2lvbnNBbmRNZXRyaWNzKHByb3BlcnRpZXMpO1xuXG4gICAgICBnYSgnc2VuZCcsICdldmVudCcsIGV2ZW50T3B0aW9ucyk7XG5cbiAgICAgIGZvciAoY29uc3QgYWNjb3VudE5hbWUgb2YgdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ2EuYWRkaXRpb25hbEFjY291bnROYW1lcykge1xuICAgICAgICBnYShhY2NvdW50TmFtZSArICcuc2VuZCcsICdldmVudCcsIGV2ZW50T3B0aW9ucyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgX2dhcSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIF9nYXEucHVzaChbXG4gICAgICAgICdfdHJhY2tFdmVudCcsXG4gICAgICAgIHByb3BlcnRpZXMuY2F0ZWdvcnksXG4gICAgICAgIGFjdGlvbixcbiAgICAgICAgcHJvcGVydGllcy5sYWJlbCxcbiAgICAgICAgcHJvcGVydGllcy52YWx1ZSxcbiAgICAgICAgcHJvcGVydGllcy5ub25pbnRlcmFjdGlvbixcbiAgICAgIF0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFeGNlcHRpb24gVHJhY2sgRXZlbnQgaW4gR0FcbiAgICpcbiAgICogQHBhcmFtIHByb3BlcnRpZXMgQ29tcHJpc2VkIG9mIHRoZSBvcHRpb25hbCBmaWVsZHM6XG4gICAqICAtIGZhdGFsIChzdHJpbmcpXG4gICAqICAtIGRlc2NyaXB0aW9uIChzdHJpbmcpXG4gICAqXG4gICAqIEBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vYW5hbHl0aWNzanMvZXhjZXB0aW9uc1xuICAgKlxuICAgKiBAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vYW5hbHl0aWNzanMvZXZlbnRzXG4gICAqL1xuICBleGNlcHRpb25UcmFjayhwcm9wZXJ0aWVzOiBhbnkpIHtcbiAgICBpZiAocHJvcGVydGllcy5mYXRhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zb2xlLmxvZygnTm8gXCJmYXRhbFwiIHByb3ZpZGVkLCBzZW5kaW5nIHdpdGggZmF0YWw9dHJ1ZScpO1xuICAgICAgcHJvcGVydGllcy5mYXRhbCA9IHRydWU7XG4gICAgfVxuXG4gICAgcHJvcGVydGllcy5leERlc2NyaXB0aW9uID0gcHJvcGVydGllcy5kZXNjcmlwdGlvbjtcblxuICAgIGNvbnN0IGV2ZW50T3B0aW9ucyA9IHtcbiAgICAgIGV4RmF0YWw6IHByb3BlcnRpZXMuZmF0YWwsXG4gICAgICBleERlc2NyaXB0aW9uOiBwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uLFxuICAgIH07XG5cbiAgICBnYSgnc2VuZCcsICdleGNlcHRpb24nLCBldmVudE9wdGlvbnMpO1xuICAgIGZvciAoY29uc3QgYWNjb3VudE5hbWUgb2YgdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ2EuYWRkaXRpb25hbEFjY291bnROYW1lcykge1xuICAgICAgZ2EoYWNjb3VudE5hbWUgKyAnLnNlbmQnLCAnZXhjZXB0aW9uJywgZXZlbnRPcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXNlciBUaW1pbmdzIEV2ZW50IGluIEdBXG4gICAqXG4gICAqIEBwYXJhbSBwcm9wZXJ0aWVzIENvbXByaXNlZCBvZiB0aGUgbWFuZGF0b3J5IGZpZWxkczpcbiAgICogIC0gdGltaW5nQ2F0ZWdvcnkgKHN0cmluZylcbiAgICogIC0gdGltaW5nVmFyIChzdHJpbmcpXG4gICAqICAtIHRpbWluZ1ZhbHVlIChudW1iZXIpXG4gICAqIFByb3BlcnRpZXMgY2FuIGFsc28gaGF2ZSB0aGUgb3B0aW9uYWwgZmllbGRzOlxuICAgKiAgLSB0aW1pbmdMYWJlbCAoc3RyaW5nKVxuICAgKlxuICAgKiBAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vYW5hbHl0aWNzanMvdXNlci10aW1pbmdzXG4gICAqL1xuICB1c2VyVGltaW5ncyhwcm9wZXJ0aWVzOiBVc2VyVGltaW5ncykge1xuICAgIGlmIChcbiAgICAgICFwcm9wZXJ0aWVzIHx8XG4gICAgICAhcHJvcGVydGllcy50aW1pbmdDYXRlZ29yeSB8fFxuICAgICAgIXByb3BlcnRpZXMudGltaW5nVmFyIHx8XG4gICAgICAhcHJvcGVydGllcy50aW1pbmdWYWx1ZVxuICAgICkge1xuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgJ1Byb3BlcnRpZXMgdGltaW5nQ2F0ZWdvcnksIHRpbWluZ1ZhciwgYW5kIHRpbWluZ1ZhbHVlIGFyZSByZXF1aXJlZCB0byBiZSBzZXQuJyxcbiAgICAgICk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBnYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGdhKCdzZW5kJywgJ3RpbWluZycsIHByb3BlcnRpZXMpO1xuICAgICAgZm9yIChjb25zdCBhY2NvdW50TmFtZSBvZiB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXR0aW5ncy5nYS5hZGRpdGlvbmFsQWNjb3VudE5hbWVzKSB7XG4gICAgICAgIGdhKGFjY291bnROYW1lICsgJy5zZW5kJywgJ3RpbWluZycsIHByb3BlcnRpZXMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldFVzZXJuYW1lKHVzZXJJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ2EudXNlcklkID0gdXNlcklkO1xuICAgIGlmICh0eXBlb2YgZ2EgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGdhKCdzZXQnLCAndXNlcklkJywgdXNlcklkKTtcbiAgfVxuXG4gIHNldFVzZXJQcm9wZXJ0aWVzKHByb3BlcnRpZXM6IGFueSkge1xuICAgIHRoaXMuc2V0RGltZW5zaW9uc0FuZE1ldHJpY3MocHJvcGVydGllcyk7XG4gIH1cblxuICBwcml2YXRlIHNldERpbWVuc2lvbnNBbmRNZXRyaWNzKHByb3BlcnRpZXM6IGFueSkge1xuICAgIGlmICh0eXBlb2YgZ2EgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGNsZWFuIHByZXZpb3VzbHkgdXNlZCBkaW1lbnNpb25zIGFuZCBtZXRyaWNzIHRoYXQgd2lsbCBub3QgYmUgb3ZlcnJpZGVuXG4gICAgdGhpcy5kaW1lbnNpb25zQW5kTWV0cmljcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgaWYgKCFwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KGVsZW0pKSB7XG4gICAgICAgIGdhKCdzZXQnLCBlbGVtLCB1bmRlZmluZWQpO1xuXG4gICAgICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmdhLmFkZGl0aW9uYWxBY2NvdW50TmFtZXMuZm9yRWFjaChcbiAgICAgICAgICAoYWNjb3VudE5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgZ2EoYCR7YWNjb3VudE5hbWV9LnNldGAsIGVsZW0sIHVuZGVmaW5lZCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmRpbWVuc2lvbnNBbmRNZXRyaWNzID0gW107XG5cbiAgICAvLyBhZGQgY3VzdG9tIGRpbWVuc2lvbnMgYW5kIG1ldHJpY3NcbiAgICBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGtleS5sYXN0SW5kZXhPZignZGltZW5zaW9uJywgMCkgPT09IDAgfHxcbiAgICAgICAga2V5Lmxhc3RJbmRleE9mKCdtZXRyaWMnLCAwKSA9PT0gMFxuICAgICAgKSB7XG4gICAgICAgIGdhKCdzZXQnLCBrZXksIHByb3BlcnRpZXNba2V5XSk7XG5cbiAgICAgICAgdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ2EuYWRkaXRpb25hbEFjY291bnROYW1lcy5mb3JFYWNoKFxuICAgICAgICAgIChhY2NvdW50TmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBnYShgJHthY2NvdW50TmFtZX0uc2V0YCwga2V5LCBwcm9wZXJ0aWVzW2tleV0pO1xuICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuZGltZW5zaW9uc0FuZE1ldHJpY3MucHVzaChrZXkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=