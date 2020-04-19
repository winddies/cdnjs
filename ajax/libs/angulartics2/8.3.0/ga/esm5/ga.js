import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Angulartics2, } from 'angulartics2';
import * as i0 from "@angular/core";
import * as i1 from "angulartics2";
var GoogleAnalyticsDefaults = /** @class */ (function () {
    function GoogleAnalyticsDefaults() {
        this.additionalAccountNames = [];
        this.userId = null;
        this.transport = '';
        this.anonymizeIp = false;
    }
    return GoogleAnalyticsDefaults;
}());
export { GoogleAnalyticsDefaults };
var Angulartics2GoogleAnalytics = /** @class */ (function () {
    function Angulartics2GoogleAnalytics(angulartics2) {
        var _this = this;
        this.angulartics2 = angulartics2;
        this.dimensionsAndMetrics = [];
        var defaults = new GoogleAnalyticsDefaults();
        // Set the default settings for this module
        this.angulartics2.settings.ga = tslib_1.__assign({}, defaults, this.angulartics2.settings.ga);
        this.settings = this.angulartics2.settings.ga;
        this.angulartics2.setUsername.subscribe(function (x) { return _this.setUsername(x); });
        this.angulartics2.setUserProperties.subscribe(function (x) { return _this.setUserProperties(x); });
    }
    Angulartics2GoogleAnalytics.prototype.startTracking = function () {
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
        this.angulartics2.userTimings
            .pipe(this.angulartics2.filterDeveloperMode())
            .subscribe(function (x) { return _this.userTimings(x); });
    };
    Angulartics2GoogleAnalytics.prototype.pageTrack = function (path) {
        var e_1, _a, e_2, _b, e_3, _c, e_4, _d;
        if (typeof _gaq !== 'undefined' && _gaq) {
            _gaq.push(['_trackPageview', path]);
            try {
                for (var _e = tslib_1.__values(this.angulartics2.settings.ga.additionalAccountNames), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var accountName = _f.value;
                    _gaq.push([accountName + '._trackPageview', path]);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_a = _e.return)) _a.call(_e);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        if (typeof ga !== 'undefined' && ga) {
            if (this.angulartics2.settings.ga.userId) {
                ga('set', '&uid', this.angulartics2.settings.ga.userId);
                try {
                    for (var _g = tslib_1.__values(this.angulartics2.settings.ga.additionalAccountNames), _h = _g.next(); !_h.done; _h = _g.next()) {
                        var accountName = _h.value;
                        ga(accountName + '.set', '&uid', this.angulartics2.settings.ga.userId);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_h && !_h.done && (_b = _g.return)) _b.call(_g);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            if (this.angulartics2.settings.ga.anonymizeIp) {
                ga('set', 'anonymizeIp', true);
                try {
                    for (var _j = tslib_1.__values(this.angulartics2.settings.ga.additionalAccountNames), _k = _j.next(); !_k.done; _k = _j.next()) {
                        var accountName = _k.value;
                        ga(accountName + '.set', 'anonymizeIp', true);
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_k && !_k.done && (_c = _j.return)) _c.call(_j);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
            ga('send', 'pageview', path);
            try {
                for (var _l = tslib_1.__values(this.angulartics2.settings.ga.additionalAccountNames), _m = _l.next(); !_m.done; _m = _l.next()) {
                    var accountName = _m.value;
                    ga(accountName + '.send', 'pageview', path);
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_m && !_m.done && (_d = _l.return)) _d.call(_l);
                }
                finally { if (e_4) throw e_4.error; }
            }
        }
    };
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
    Angulartics2GoogleAnalytics.prototype.eventTrack = function (action, properties) {
        var e_5, _a;
        // Google Analytics requires an Event Category
        if (!properties || !properties.category) {
            properties = properties || {};
            properties.category = 'Event';
        }
        // GA requires that eventValue be an integer, see:
        // https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#eventValue
        // https://github.com/luisfarzati/angulartics/issues/81
        if (properties.value) {
            var parsed = parseInt(properties.value, 10);
            properties.value = isNaN(parsed) ? 0 : parsed;
        }
        if (typeof ga !== 'undefined') {
            var eventOptions = tslib_1.__assign({ eventCategory: properties.category, eventAction: action, eventLabel: properties.label, eventValue: properties.value, nonInteraction: properties.noninteraction, page: properties.page || location.hash.substring(1) || location.pathname, userId: this.angulartics2.settings.ga.userId, hitCallback: properties.hitCallback }, this.angulartics2.settings.ga.transport && { transport: this.angulartics2.settings.ga.transport });
            // add custom dimensions and metrics
            this.setDimensionsAndMetrics(properties);
            ga('send', 'event', eventOptions);
            try {
                for (var _b = tslib_1.__values(this.angulartics2.settings.ga.additionalAccountNames), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var accountName = _c.value;
                    ga(accountName + '.send', 'event', eventOptions);
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_5) throw e_5.error; }
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
    };
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
    Angulartics2GoogleAnalytics.prototype.exceptionTrack = function (properties) {
        var e_6, _a;
        if (properties.fatal === undefined) {
            console.log('No "fatal" provided, sending with fatal=true');
            properties.fatal = true;
        }
        properties.exDescription = properties.description;
        var eventOptions = {
            exFatal: properties.fatal,
            exDescription: properties.description,
        };
        ga('send', 'exception', eventOptions);
        try {
            for (var _b = tslib_1.__values(this.angulartics2.settings.ga.additionalAccountNames), _c = _b.next(); !_c.done; _c = _b.next()) {
                var accountName = _c.value;
                ga(accountName + '.send', 'exception', eventOptions);
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_6) throw e_6.error; }
        }
    };
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
    Angulartics2GoogleAnalytics.prototype.userTimings = function (properties) {
        var e_7, _a;
        if (!properties ||
            !properties.timingCategory ||
            !properties.timingVar ||
            !properties.timingValue) {
            console.error('Properties timingCategory, timingVar, and timingValue are required to be set.');
            return;
        }
        if (typeof ga !== 'undefined') {
            ga('send', 'timing', properties);
            try {
                for (var _b = tslib_1.__values(this.angulartics2.settings.ga.additionalAccountNames), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var accountName = _c.value;
                    ga(accountName + '.send', 'timing', properties);
                }
            }
            catch (e_7_1) { e_7 = { error: e_7_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_7) throw e_7.error; }
            }
        }
    };
    Angulartics2GoogleAnalytics.prototype.setUsername = function (userId) {
        this.angulartics2.settings.ga.userId = userId;
        if (typeof ga === 'undefined') {
            return;
        }
        ga('set', 'userId', userId);
    };
    Angulartics2GoogleAnalytics.prototype.setUserProperties = function (properties) {
        this.setDimensionsAndMetrics(properties);
    };
    Angulartics2GoogleAnalytics.prototype.setDimensionsAndMetrics = function (properties) {
        var _this = this;
        if (typeof ga === 'undefined') {
            return;
        }
        // clean previously used dimensions and metrics that will not be overriden
        this.dimensionsAndMetrics.forEach(function (elem) {
            if (!properties.hasOwnProperty(elem)) {
                ga('set', elem, undefined);
                _this.angulartics2.settings.ga.additionalAccountNames.forEach(function (accountName) {
                    ga(accountName + ".set", elem, undefined);
                });
            }
        });
        this.dimensionsAndMetrics = [];
        // add custom dimensions and metrics
        Object.keys(properties).forEach(function (key) {
            if (key.lastIndexOf('dimension', 0) === 0 ||
                key.lastIndexOf('metric', 0) === 0) {
                ga('set', key, properties[key]);
                _this.angulartics2.settings.ga.additionalAccountNames.forEach(function (accountName) {
                    ga(accountName + ".set", key, properties[key]);
                });
                _this.dimensionsAndMetrics.push(key);
            }
        });
    };
    Angulartics2GoogleAnalytics.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function Angulartics2GoogleAnalytics_Factory() { return new Angulartics2GoogleAnalytics(i0.ɵɵinject(i1.Angulartics2)); }, token: Angulartics2GoogleAnalytics, providedIn: "root" });
    Angulartics2GoogleAnalytics = tslib_1.__decorate([
        Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [Angulartics2])
    ], Angulartics2GoogleAnalytics);
    return Angulartics2GoogleAnalytics;
}());
export { Angulartics2GoogleAnalytics };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2EuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFydGljczIvZ2EvIiwic291cmNlcyI6WyJnYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQ0wsWUFBWSxHQUdiLE1BQU0sY0FBYyxDQUFDOzs7QUFPdEI7SUFBQTtRQUNFLDJCQUFzQixHQUFHLEVBQUUsQ0FBQztRQUM1QixXQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2QsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLGdCQUFXLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFBRCw4QkFBQztBQUFELENBQUMsQUFMRCxJQUtDOztBQUdEO0lBSUUscUNBQW9CLFlBQTBCO1FBQTlDLGlCQVVDO1FBVm1CLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBSDlDLHlCQUFvQixHQUFHLEVBQUUsQ0FBQztRQUl4QixJQUFNLFFBQVEsR0FBRyxJQUFJLHVCQUF1QixFQUFFLENBQUM7UUFDL0MsMkNBQTJDO1FBQzNDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEVBQUUsd0JBQ3hCLFFBQVEsRUFDUixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQ2pDLENBQUM7UUFDRixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztRQUM5QyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQyxDQUFTLElBQUssT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFuQixDQUFtQixDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEVBQXpCLENBQXlCLENBQUMs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b0IsR0FBRyxFQUFFLENBQUM7UUFFL0Isb0NBQW9DO1FBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRztZQUNqQyxJQUNFLEdBQUcsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQ3JDLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFDbEM7Z0JBQ0EsRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBRWhDLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQzFELFVBQUMsV0FBbUI7b0JBQ2xCLEVBQUUsQ0FBSSxXQUFXLFNBQU0sRUFBRSxHQUFHLEVBQUUsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pELENBQUMsQ0FDRixDQUFDO2dCQUNGLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDckM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O0lBbk9VLDJCQUEyQjtRQUR2QyxVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7aURBS0MsWUFBWTtPQUpuQywyQkFBMkIsQ0FvT3ZDO3NDQXpQRDtDQXlQQyxBQXBPRCxJQW9PQztTQXBPWSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIEFuZ3VsYXJ0aWNzMixcbiAgR29vZ2xlQW5hbHl0aWNzU2V0dGluZ3MsXG4gIFVzZXJUaW1pbmdzLFxufSBmcm9tICdhbmd1bGFydGljczInO1xuXG5cbmRlY2xhcmUgdmFyIF9nYXE6IEdvb2dsZUFuYWx5dGljc0NvZGU7XG5kZWNsYXJlIHZhciBnYTogVW5pdmVyc2FsQW5hbHl0aWNzLmdhO1xuZGVjbGFyZSB2YXIgbG9jYXRpb246IGFueTtcblxuZXhwb3J0IGNsYXNzIEdvb2dsZUFuYWx5dGljc0RlZmF1bHRzIGltcGxlbWVudHMgR29vZ2xlQW5hbHl0aWNzU2V0dGluZ3Mge1xuICBhZGRpdGlvbmFsQWNjb3VudE5hbWVzID0gW107XG4gIHVzZXJJZCA9IG51bGw7XG4gIHRyYW5zcG9ydCA9ICcnO1xuICBhbm9ueW1pemVJcCA9IGZhbHNlO1xufVxuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJ0aWNzMkdvb2dsZUFuYWx5dGljcyB7XG4gIGRpbWVuc2lvbnNBbmRNZXRyaWNzID0gW107XG4gIHNldHRpbmdzOiBQYXJ0aWFsPEdvb2dsZUFuYWx5dGljc1NldHRpbmdzPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFuZ3VsYXJ0aWNzMjogQW5ndWxhcnRpY3MyKSB7XG4gICAgY29uc3QgZGVmYXVsdHMgPSBuZXcgR29vZ2xlQW5hbHl0aWNzRGVmYXVsdHMoKTtcbiAgICAvLyBTZXQgdGhlIGRlZmF1bHQgc2V0dGluZ3MgZm9yIHRoaXMgbW9kdWxlXG4gICAgdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ2EgPSB7XG4gICAgICAuLi5kZWZhdWx0cyxcbiAgICAgIC4uLnRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmdhLFxuICAgIH07XG4gICAgdGhpcy5zZXR0aW5ncyA9IHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmdhO1xuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldFVzZXJuYW1lLnN1YnNjcmliZSgoeDogc3RyaW5nKSA9PiB0aGlzLnNldFVzZXJuYW1lKHgpKTtcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXRVc2VyUHJvcGVydGllcy5zdWJzY3JpYmUoeCA9PiB0aGlzLnNldFVzZXJQcm9wZXJ0aWVzKHgpKTtcbiAgfVxuXG4gIHN0YXJ0VHJhY2tpbmcoKTogdm9pZCB7XG4gICAgdGhpcy5hbmd1bGFydGljczIucGFnZVRyYWNrXG4gICAgICAucGlwZSh0aGlzLmFuZ3VsYXJ0aWNzMi5maWx0ZXJEZXZlbG9wZXJNb2RlKCkpXG4gICAgICAuc3Vic2NyaWJlKHggPT4gdGhpcy5wYWdlVHJhY2soeC5wYXRoKSk7XG4gICAgdGhpcy5hbmd1bGFydGljczIuZXZlbnRUcmFja1xuICAgICAgLnBpcGUodGhpcy5hbmd1bGFydGljczIuZmlsdGVyRGV2ZWxvcGVyTW9kZSgpKVxuICAgICAgLnN1YnNjcmliZSh4ID0+IHRoaXMuZXZlbnRUcmFjayh4LmFjdGlvbiwgeC5wcm9wZXJ0aWVzKSk7XG4gICAgdGhpcy5hbmd1bGFydGljczIuZXhjZXB0aW9uVHJhY2tcbiAgICAgIC5waXBlKHRoaXMuYW5ndWxhcnRpY3MyLmZpbHRlckRldmVsb3Blck1vZGUoKSlcbiAgICAgIC5zdWJzY3JpYmUoeCA9PiB0aGlzLmV4Y2VwdGlvblRyYWNrKHgpKTtcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi51c2VyVGltaW5nc1xuICAgICAgLnBpcGUodGhpcy5hbmd1bGFydGljczIuZmlsdGVyRGV2ZWxvcGVyTW9kZSgpKVxuICAgICAgLnN1YnNjcmliZSh4ID0+IHRoaXMudXNlclRpbWluZ3MoeCkpO1xuICB9XG5cbiAgcGFnZVRyYWNrKHBhdGg6IHN0cmluZykge1xuICAgIGlmICh0eXBlb2YgX2dhcSAhPT0gJ3VuZGVmaW5lZCcgJiYgX2dhcSkge1xuICAgICAgX2dhcS5wdXNoKFsnX3RyYWNrUGFnZXZpZXcnLCBwYXRoXSk7XG4gICAgICBmb3IgKGNvbnN0IGFjY291bnROYW1lIG9mIHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmdhLmFkZGl0aW9uYWxBY2NvdW50TmFtZXMpIHtcbiAgICAgICAgX2dhcS5wdXNoKFthY2NvdW50TmFtZSArICcuX3RyYWNrUGFnZXZpZXcnLCBwYXRoXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZ2EgIT09ICd1bmRlZmluZWQnICYmIGdhKSB7XG4gICAgICBpZiAodGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ2EudXNlcklkKSB7XG4gICAgICAgIGdhKCdzZXQnLCAnJnVpZCcsIHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmdhLnVzZXJJZCk7XG4gICAgICAgIGZvciAoY29uc3QgYWNjb3VudE5hbWUgb2YgdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ2EuYWRkaXRpb25hbEFjY291bnROYW1lcykge1xuICAgICAgICAgIGdhKGFjY291bnROYW1lICsgJy5zZXQnLCAnJnVpZCcsIHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmdhLnVzZXJJZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmFuZ3VsYXJ0aWNzMi5zZXR0aW5ncy5nYS5hbm9ueW1pemVJcCkge1xuICAgICAgICBnYSgnc2V0JywgJ2Fub255bWl6ZUlwJywgdHJ1ZSk7XG4gICAgICAgIGZvciAoY29uc3QgYWNjb3VudE5hbWUgb2YgdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ2EuYWRkaXRpb25hbEFjY291bnROYW1lcykge1xuICAgICAgICAgIGdhKGFjY291bnROYW1lICsgJy5zZXQnLCAnYW5vbnltaXplSXAnLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZ2EoJ3NlbmQnLCAncGFnZXZpZXcnLCBwYXRoKTtcbiAgICAgIGZvciAoY29uc3QgYWNjb3VudE5hbWUgb2YgdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ2EuYWRkaXRpb25hbEFjY291bnROYW1lcykge1xuICAgICAgICBnYShhY2NvdW50TmFtZSArICcuc2VuZCcsICdwYWdldmlldycsIHBhdGgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFjayBFdmVudCBpbiBHQVxuICAgKlxuICAgKiBAcGFyYW0gYWN0aW9uIEFzc29jaWF0ZWQgd2l0aCB0aGUgZXZlbnRcbiAgICogQHBhcmFtIHByb3BlcnRpZXMgQ29tcHJpc2VkIG9mOlxuICAgKiAgLSBjYXRlZ29yeSAoc3RyaW5nKSBhbmQgb3B0aW9uYWxcbiAgICogIC0gbGFiZWwgKHN0cmluZylcbiAgICogIC0gdmFsdWUgKGludGVnZXIpXG4gICAqICAtIG5vbmludGVyYWN0aW9uIChib29sZWFuKVxuICAgKlxuICAgKiBAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vZ2Fqcy9ldmVudFRyYWNrZXJHdWlkZSNTZXR0aW5nVXBFdmVudFRyYWNraW5nXG4gICAqIEBsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9hbmFseXRpY3Nqcy9ldmVudHNcbiAgICovXG4gIGV2ZW50VHJhY2soYWN0aW9uOiBzdHJpbmcsIHByb3BlcnRpZXM6IGFueSkge1xuICAgIC8vIEdvb2dsZSBBbmFseXRpY3MgcmVxdWlyZXMgYW4gRXZlbnQgQ2F0ZWdvcnlcbiAgICBpZiAoIXByb3BlcnRpZXMgfHwgIXByb3BlcnRpZXMuY2F0ZWdvcnkpIHtcbiAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzIHx8IHt9O1xuICAgICAgcHJvcGVydGllcy5jYXRlZ29yeSA9ICdFdmVudCc7XG4gICAgfVxuICAgIC8vIEdBIHJlcXVpcmVzIHRoYXQgZXZlbnRWYWx1ZSBiZSBhbiBpbnRlZ2VyLCBzZWU6XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL2FuYWx5dGljc2pzL2ZpZWxkLXJlZmVyZW5jZSNldmVudFZhbHVlXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2x1aXNmYXJ6YXRpL2FuZ3VsYXJ0aWNzL2lzc3Vlcy84MVxuICAgIGlmIChwcm9wZXJ0aWVzLnZhbHVlKSB7XG4gICAgICBjb25zdCBwYXJzZWQgPSBwYXJzZUludChwcm9wZXJ0aWVzLnZhbHVlLCAxMCk7XG4gICAgICBwcm9wZXJ0aWVzLnZhbHVlID0gaXNOYU4ocGFyc2VkKSA/IDAgOiBwYXJzZWQ7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBnYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnN0IGV2ZW50T3B0aW9ucyA9IHtcbiAgICAgICAgZXZlbnRDYXRlZ29yeTogcHJvcGVydGllcy5jYXRlZ29yeSxcbiAgICAgICAgZXZlbnRBY3Rpb246IGFjdGlvbixcbiAgICAgICAgZXZlbnRMYWJlbDogcHJvcGVydGllcy5sYWJlbCxcbiAgICAgICAgZXZlbnRWYWx1ZTogcHJvcGVydGllcy52YWx1ZSxcbiAgICAgICAgbm9uSW50ZXJhY3Rpb246IHByb3BlcnRpZXMubm9uaW50ZXJhY3Rpb24sXG4gICAgICAgIHBhZ2U6IHByb3BlcnRpZXMucGFnZSB8fCBsb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKSB8fCBsb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgICAgdXNlcklkOiB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXR0aW5ncy5nYS51c2VySWQsXG4gICAgICAgIGhpdENhbGxiYWNrOiBwcm9wZXJ0aWVzLmhpdENhbGxiYWNrLFxuICAgICAgICAuLi4gdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ2EudHJhbnNwb3J0ICYmIHsgdHJhbnNwb3J0OiB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXR0aW5ncy5nYS50cmFuc3BvcnQgfVxuICAgICAgfTtcblxuICAgICAgLy8gYWRkIGN1c3RvbSBkaW1lbnNpb25zIGFuZCBtZXRyaWNzXG4gICAgICB0aGlzLnNldERpbWVuc2lvbnNBbmRNZXRyaWNzKHByb3BlcnRpZXMpO1xuXG4gICAgICBnYSgnc2VuZCcsICdldmVudCcsIGV2ZW50T3B0aW9ucyk7XG5cbiAgICAgIGZvciAoY29uc3QgYWNjb3VudE5hbWUgb2YgdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ2EuYWRkaXRpb25hbEFjY291bnROYW1lcykge1xuICAgICAgICBnYShhY2NvdW50TmFtZSArICcuc2VuZCcsICdldmVudCcsIGV2ZW50T3B0aW9ucyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgX2dhcSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIF9nYXEucHVzaChbXG4gICAgICAgICdfdHJhY2tFdmVudCcsXG4gICAgICAgIHByb3BlcnRpZXMuY2F0ZWdvcnksXG4gICAgICAgIGFjdGlvbixcbiAgICAgICAgcHJvcGVydGllcy5sYWJlbCxcbiAgICAgICAgcHJvcGVydGllcy52YWx1ZSxcbiAgICAgICAgcHJvcGVydGllcy5ub25pbnRlcmFjdGlvbixcbiAgICAgIF0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFeGNlcHRpb24gVHJhY2sgRXZlbnQgaW4gR0FcbiAgICpcbiAgICogQHBhcmFtIHByb3BlcnRpZXMgQ29tcHJpc2VkIG9mIHRoZSBvcHRpb25hbCBmaWVsZHM6XG4gICAqICAtIGZhdGFsIChzdHJpbmcpXG4gICAqICAtIGRlc2NyaXB0aW9uIChzdHJpbmcpXG4gICAqXG4gICAqIEBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vYW5hbHl0aWNzanMvZXhjZXB0aW9uc1xuICAgKlxuICAgKiBAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vYW5hbHl0aWNzanMvZXZlbnRzXG4gICAqL1xuICBleGNlcHRpb25UcmFjayhwcm9wZXJ0aWVzOiBhbnkpIHtcbiAgICBpZiAocHJvcGVydGllcy5mYXRhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zb2xlLmxvZygnTm8gXCJmYXRhbFwiIHByb3ZpZGVkLCBzZW5kaW5nIHdpdGggZmF0YWw9dHJ1ZScpO1xuICAgICAgcHJvcGVydGllcy5mYXRhbCA9IHRydWU7XG4gICAgfVxuXG4gICAgcHJvcGVydGllcy5leERlc2NyaXB0aW9uID0gcHJvcGVydGllcy5kZXNjcmlwdGlvbjtcblxuICAgIGNvbnN0IGV2ZW50T3B0aW9ucyA9IHtcbiAgICAgIGV4RmF0YWw6IHByb3BlcnRpZXMuZmF0YWwsXG4gICAgICBleERlc2NyaXB0aW9uOiBwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uLFxuICAgIH07XG5cbiAgICBnYSgnc2VuZCcsICdleGNlcHRpb24nLCBldmVudE9wdGlvbnMpO1xuICAgIGZvciAoY29uc3QgYWNjb3VudE5hbWUgb2YgdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ2EuYWRkaXRpb25hbEFjY291bnROYW1lcykge1xuICAgICAgZ2EoYWNjb3VudE5hbWUgKyAnLnNlbmQnLCAnZXhjZXB0aW9uJywgZXZlbnRPcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXNlciBUaW1pbmdzIEV2ZW50IGluIEdBXG4gICAqXG4gICAqIEBwYXJhbSBwcm9wZXJ0aWVzIENvbXByaXNlZCBvZiB0aGUgbWFuZGF0b3J5IGZpZWxkczpcbiAgICogIC0gdGltaW5nQ2F0ZWdvcnkgKHN0cmluZylcbiAgICogIC0gdGltaW5nVmFyIChzdHJpbmcpXG4gICAqICAtIHRpbWluZ1ZhbHVlIChudW1iZXIpXG4gICAqIFByb3BlcnRpZXMgY2FuIGFsc28gaGF2ZSB0aGUgb3B0aW9uYWwgZmllbGRzOlxuICAgKiAgLSB0aW1pbmdMYWJlbCAoc3RyaW5nKVxuICAgKlxuICAgKiBAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vYW5hbHl0aWNzanMvdXNlci10aW1pbmdzXG4gICAqL1xuICB1c2VyVGltaW5ncyhwcm9wZXJ0aWVzOiBVc2VyVGltaW5ncykge1xuICAgIGlmIChcbiAgICAgICFwcm9wZXJ0aWVzIHx8XG4gICAgICAhcHJvcGVydGllcy50aW1pbmdDYXRlZ29yeSB8fFxuICAgICAgIXByb3BlcnRpZXMudGltaW5nVmFyIHx8XG4gICAgICAhcHJvcGVydGllcy50aW1pbmdWYWx1ZVxuICAgICkge1xuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgJ1Byb3BlcnRpZXMgdGltaW5nQ2F0ZWdvcnksIHRpbWluZ1ZhciwgYW5kIHRpbWluZ1ZhbHVlIGFyZSByZXF1aXJlZCB0byBiZSBzZXQuJyxcbiAgICAgICk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBnYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGdhKCdzZW5kJywgJ3RpbWluZycsIHByb3BlcnRpZXMpO1xuICAgICAgZm9yIChjb25zdCBhY2NvdW50TmFtZSBvZiB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXR0aW5ncy5nYS5hZGRpdGlvbmFsQWNjb3VudE5hbWVzKSB7XG4gICAgICAgIGdhKGFjY291bnROYW1lICsgJy5zZW5kJywgJ3RpbWluZycsIHByb3BlcnRpZXMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldFVzZXJuYW1lKHVzZXJJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ2EudXNlcklkID0gdXNlcklkO1xuICAgIGlmICh0eXBlb2YgZ2EgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGdhKCdzZXQnLCAndXNlcklkJywgdXNlcklkKTtcbiAgfVxuXG4gIHNldFVzZXJQcm9wZXJ0aWVzKHByb3BlcnRpZXM6IGFueSkge1xuICAgIHRoaXMuc2V0RGltZW5zaW9uc0FuZE1ldHJpY3MocHJvcGVydGllcyk7XG4gIH1cblxuICBwcml2YXRlIHNldERpbWVuc2lvbnNBbmRNZXRyaWNzKHByb3BlcnRpZXM6IGFueSkge1xuICAgIGlmICh0eXBlb2YgZ2EgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGNsZWFuIHByZXZpb3VzbHkgdXNlZCBkaW1lbnNpb25zIGFuZCBtZXRyaWNzIHRoYXQgd2lsbCBub3QgYmUgb3ZlcnJpZGVuXG4gICAgdGhpcy5kaW1lbnNpb25zQW5kTWV0cmljcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgaWYgKCFwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KGVsZW0pKSB7XG4gICAgICAgIGdhKCdzZXQnLCBlbGVtLCB1bmRlZmluZWQpO1xuXG4gICAgICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmdhLmFkZGl0aW9uYWxBY2NvdW50TmFtZXMuZm9yRWFjaChcbiAgICAgICAgICAoYWNjb3VudE5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgZ2EoYCR7YWNjb3VudE5hbWV9LnNldGAsIGVsZW0sIHVuZGVmaW5lZCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmRpbWVuc2lvbnNBbmRNZXRyaWNzID0gW107XG5cbiAgICAvLyBhZGQgY3VzdG9tIGRpbWVuc2lvbnMgYW5kIG1ldHJpY3NcbiAgICBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGtleS5sYXN0SW5kZXhPZignZGltZW5zaW9uJywgMCkgPT09IDAgfHxcbiAgICAgICAga2V5Lmxhc3RJbmRleE9mKCdtZXRyaWMnLCAwKSA9PT0gMFxuICAgICAgKSB7XG4gICAgICAgIGdhKCdzZXQnLCBrZXksIHByb3BlcnRpZXNba2V5XSk7XG5cbiAgICAgICAgdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ2EuYWRkaXRpb25hbEFjY291bnROYW1lcy5mb3JFYWNoKFxuICAgICAgICAgIChhY2NvdW50TmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBnYShgJHthY2NvdW50TmFtZX0uc2V0YCwga2V5LCBwcm9wZXJ0aWVzW2tleV0pO1xuICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuZGltZW5zaW9uc0FuZE1ldHJpY3MucHVzaChrZXkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=