/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
if (false) {
    /** @type {?} */
    GoogleAnalyticsDefaults.prototype.additionalAccountNames;
    /** @type {?} */
    GoogleAnalyticsDefaults.prototype.userId;
    /** @type {?} */
    GoogleAnalyticsDefaults.prototype.transport;
    /** @type {?} */
    GoogleAnalyticsDefaults.prototype.anonymizeIp;
}
var Angulartics2GoogleAnalytics = /** @class */ (function () {
    function Angulartics2GoogleAnalytics(angulartics2) {
        var _this = this;
        this.angulartics2 = angulartics2;
        this.dimensionsAndMetrics = [];
        /** @type {?} */
        var defaults = new GoogleAnalyticsDefaults();
        // Set the default settings for this module
        this.angulartics2.settings.ga = tslib_1.__assign({}, defaults, this.angulartics2.settings.ga);
        this.settings = this.angulartics2.settings.ga;
        this.angulartics2.setUsername.subscribe(function (x) { return _this.setUsername(x); });
        this.angulartics2.setUserProperties.subscribe(function (x) { return _this.setUserProperties(x); });
    }
    /**
     * @return {?}
     */
    Angulartics2GoogleAnalytics.prototype.startTracking = /**
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
        this.angulartics2.userTimings
            .pipe(this.angulartics2.filterDeveloperMode())
            .subscribe(function (x) { return _this.userTimings(x); });
    };
    /**
     * @param {?} path
     * @return {?}
     */
    Angulartics2GoogleAnalytics.prototype.pageTrack = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
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
    /**
     * Track Event in GA
     *
     * @link https://developers.google.com/analytics/devguides/collection/gajs/eventTrackerGuide#SettingUpEventTracking / https://developers.google.com/analytics/devguides/collection/analyticsjs/events
     * @param {?} action Associated with the event
     * @param {?} properties Comprised of:
     *  - category (string) and optional
     *  - label (string)
     *  - value (integer)
     *  - noninteraction (boolean)
     *
     * @return {?}
     */
    Angulartics2GoogleAnalytics.prototype.eventTrack = /**
     * Track Event in GA
     *
     * @link https://developers.google.com/analytics/devguides/collection/gajs/eventTrackerGuide#SettingUpEventTracking / https://developers.google.com/analytics/devguides/collection/analyticsjs/events
     * @param {?} action Associated with the event
     * @param {?} properties Comprised of:
     *  - category (string) and optional
     *  - label (string)
     *  - value (integer)
     *  - noninteraction (boolean)
     *
     * @return {?}
     */
    function (action, properties) {
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
            /** @type {?} */
            var parsed = parseInt(properties.value, 10);
            properties.value = isNaN(parsed) ? 0 : parsed;
        }
        if (typeof ga !== 'undefined') {
            /** @type {?} */
            var eventOptions = {
                eventCategory: properties.category,
                eventAction: action,
                eventLabel: properties.label,
                eventValue: properties.value,
                nonInteraction: properties.noninteraction,
                page: properties.page || location.hash.substring(1) || location.pathname,
                userId: this.angulartics2.settings.ga.userId,
                hitCallback: properties.hitCallback,
            };
            // add custom dimensions and metrics
            this.setDimensionsAndMetrics(properties);
            if (this.angulartics2.settings.ga.transport) {
                ga('send', 'event', eventOptions, {
                    transport: this.angulartics2.settings.ga.transport,
                });
            }
            else {
                ga('send', 'event', eventOptions);
            }
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
    /**
     * Exception Track Event in GA
     *
     * \@https://developers.google.com/analytics/devguides/collection/analyticsjs/exceptions
     *
     * @link https://developers.google.com/analytics/devguides/collection/analyticsjs/events
     * @param {?} properties Comprised of the optional fields:
     *  - fatal (string)
     *  - description (string)
     *
     * @return {?}
     */
    Angulartics2GoogleAnalytics.prototype.exceptionTrack = /**
     * Exception Track Event in GA
     *
     * \@https://developers.google.com/analytics/devguides/collection/analyticsjs/exceptions
     *
     * @link https://developers.google.com/analytics/devguides/collection/analyticsjs/events
     * @param {?} properties Comprised of the optional fields:
     *  - fatal (string)
     *  - description (string)
     *
     * @return {?}
     */
    function (properties) {
        var e_6, _a;
        if (properties.fatal === undefined) {
            console.log('No "fatal" provided, sending with fatal=true');
            properties.fatal = true;
        }
        properties.exDescription = properties.description;
        /** @type {?} */
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
     * @name userTimings
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
    /**
     * User Timings Event in GA
     * \@name userTimings
     *
     * @link https://developers.google.com/analytics/devguides/collection/analyticsjs/user-timings
     * @param {?} properties Comprised of the mandatory fields:
     *  - timingCategory (string)
     *  - timingVar (string)
     *  - timingValue (number)
     * Properties can also have the optional fields:
     *  - timingLabel (string)
     *
     * @return {?}
     */
    Angulartics2GoogleAnalytics.prototype.userTimings = /**
     * User Timings Event in GA
     * \@name userTimings
     *
     * @link https://developers.google.com/analytics/devguides/collection/analyticsjs/user-timings
     * @param {?} properties Comprised of the mandatory fields:
     *  - timingCategory (string)
     *  - timingVar (string)
     *  - timingValue (number)
     * Properties can also have the optional fields:
     *  - timingLabel (string)
     *
     * @return {?}
     */
    function (properties) {
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
    /**
     * @param {?} userId
     * @return {?}
     */
    Angulartics2GoogleAnalytics.prototype.setUsername = /**
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        this.angulartics2.settings.ga.userId = userId;
        if (typeof ga === 'undefined') {
            return;
        }
        ga('set', 'userId', userId);
    };
    /**
     * @param {?} properties
     * @return {?}
     */
    Angulartics2GoogleAnalytics.prototype.setUserProperties = /**
     * @param {?} properties
     * @return {?}
     */
    function (properties) {
        this.setDimensionsAndMetrics(properties);
    };
    /**
     * @private
     * @param {?} properties
     * @return {?}
     */
    Angulartics2GoogleAnalytics.prototype.setDimensionsAndMetrics = /**
     * @private
     * @param {?} properties
     * @return {?}
     */
    function (properties) {
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
    Angulartics2GoogleAnalytics.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    Angulartics2GoogleAnalytics.ctorParameters = function () { return [
        { type: Angulartics2 }
    ]; };
    /** @nocollapse */ Angulartics2GoogleAnalytics.ngInjectableDef = i0.defineInjectable({ factory: function Angulartics2GoogleAnalytics_Factory() { return new Angulartics2GoogleAnalytics(i0.inject(i1.Angulartics2)); }, token: Angulartics2GoogleAnalytics, providedIn: "root" });
    return Angulartics2GoogleAnalytics;
}());
export { Angulartics2GoogleAnalytics };
if (false) {
    /** @type {?} */
    Angulartics2GoogleAnalytics.prototype.dimensionsAndMetrics;
    /** @type {?} */
    Angulartics2GoogleAnalytics.prototype.settings;
    /**
     * @type {?}
     * @private
     */
    Angulartics2GoogleAnalytics.prototype.angulartics2;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2EuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFydGljczIvZ2EvIiwic291cmNlcyI6WyJnYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUNMLFlBQVksR0FHYixNQUFNLGNBQWMsQ0FBQzs7O0FBT3RCO0lBQUE7UUFDRSwyQkFBc0IsR0FBRyxFQUFFLENBQUM7UUFDNUIsV0FBTSxHQUFHLElBQUksQ0FBQztRQUNkLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixnQkFBVyxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBQUQsOEJBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQzs7OztJQUpDLHlEQUE0Qjs7SUFDNUIseUNBQWM7O0lBQ2QsNENBQWU7O0lBQ2YsOENBQW9COztBQUd0QjtJQUtFLHFDQUFvQixZQUEwQjtRQUE5QyxpQkFVQztRQVZtQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUg5Qyx5QkFBb0IsR0FBRyxFQUFFLENBQUM7O1lBSWxCLFFBQVEsR0FBRyxJQUFJLHVCQUF1QixFQUFFO1FBQzlDLDJDQUEyQztRQUMzQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxFQUFFLHdCQUN4QixRQUFRLEVBQ1IsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUNqQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQUMsQ0FBUyxJQUFLLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBbkIsQ0FBbUIsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEs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Ozs7OztJQUUvQixtREFBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIEFuZ3VsYXJ0aWNzMixcbiAgR29vZ2xlQW5hbHl0aWNzU2V0dGluZ3MsXG4gIFVzZXJUaW1pbmdzLFxufSBmcm9tICdhbmd1bGFydGljczInO1xuXG5cbmRlY2xhcmUgdmFyIF9nYXE6IEdvb2dsZUFuYWx5dGljc0NvZGU7XG5kZWNsYXJlIHZhciBnYTogVW5pdmVyc2FsQW5hbHl0aWNzLmdhO1xuZGVjbGFyZSB2YXIgbG9jYXRpb246IGFueTtcblxuZXhwb3J0IGNsYXNzIEdvb2dsZUFuYWx5dGljc0RlZmF1bHRzIGltcGxlbWVudHMgR29vZ2xlQW5hbHl0aWNzU2V0dGluZ3Mge1xuICBhZGRpdGlvbmFsQWNjb3VudE5hbWVzID0gW107XG4gIHVzZXJJZCA9IG51bGw7XG4gIHRyYW5zcG9ydCA9ICcnO1xuICBhbm9ueW1pemVJcCA9IGZhbHNlO1xufVxuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJ0aWNzMkdvb2dsZUFuYWx5dGljcyB7XG4gIGRpbWVuc2lvbnNBbmRNZXRyaWNzID0gW107XG4gIHNldHRpbmdzOiBQYXJ0aWFsPEdvb2dsZUFuYWx5dGljc1NldHRpbmdzPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFuZ3VsYXJ0aWNzMjogQW5ndWxhcnRpY3MyKSB7XG4gICAgY29uc3QgZGVmYXVsdHMgPSBuZXcgR29vZ2xlQW5hbHl0aWNzRGVmYXVsdHMoKTtcbiAgICAvLyBTZXQgdGhlIGRlZmF1bHQgc2V0dGluZ3MgZm9yIHRoaXMgbW9kdWxlXG4gICAgdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ2EgPSB7XG4gICAgICAuLi5kZWZhdWx0cyxcbiAgICAgIC4uLnRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmdhLFxuICAgIH07XG4gICAgdGhpcy5zZXR0aW5ncyA9IHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmdhO1xuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldFVzZXJuYW1lLnN1YnNjcmliZSgoeDogc3RyaW5nKSA9PiB0aGlzLnNldFVzZXJuYW1lKHgpKTtcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXRVc2VyUHJvcGVydGllcy5zdWJzY3JpYmUoeCA9PiB0aGlzLnNldFVzZXJQcm9wZXJ0aWVzKHgpKTtcbiAgfVxuXG4gIHN0YXJ0VHJhY2tpbmcoKTogdm9pZCB7XG4gICAgdGhpcy5hbmd1bGFydGljczIucGFnZVRyYWNrXG4gICAgICAucGlwZSh0aGlzLmFuZ3VsYXJ0aWNzMi5maWx0ZXJEZXZlbG9wZXJNb2RlKCkpXG4gICAgICAuc3Vic2NyaWJlKHggPT4gdGhpcy5wYWdlVHJhY2soeC5wYXRoKSk7XG4gICAgdGhpcy5hbmd1bGFydGljczIuZXZlbnRUcmFja1xuICAgICAgLnBpcGUodGhpcy5hbmd1bGFydGljczIuZmlsdGVyRGV2ZWxvcGVyTW9kZSgpKVxuICAgICAgLnN1YnNjcmliZSh4ID0+IHRoaXMuZXZlbnRUcmFjayh4LmFjdGlvbiwgeC5wcm9wZXJ0aWVzKSk7XG4gICAgdGhpcy5hbmd1bGFydGljczIuZXhjZXB0aW9uVHJhY2tcbiAgICAgIC5waXBlKHRoaXMuYW5ndWxhcnRpY3MyLmZpbHRlckRldmVsb3Blck1vZGUoKSlcbiAgICAgIC5zdWJzY3JpYmUoeCA9PiB0aGlzLmV4Y2VwdGlvblRyYWNrKHgpKTtcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi51c2VyVGltaW5nc1xuICAgICAgLnBpcGUodGhpcy5hbmd1bGFydGljczIuZmlsdGVyRGV2ZWxvcGVyTW9kZSgpKVxuICAgICAgLnN1YnNjcmliZSh4ID0+IHRoaXMudXNlclRpbWluZ3MoeCkpO1xuICB9XG5cbiAgcGFnZVRyYWNrKHBhdGg6IHN0cmluZykge1xuICAgIGlmICh0eXBlb2YgX2dhcSAhPT0gJ3VuZGVmaW5lZCcgJiYgX2dhcSkge1xuICAgICAgX2dhcS5wdXNoKFsnX3RyYWNrUGFnZXZpZXcnLCBwYXRoXSk7XG4gICAgICBmb3IgKGNvbnN0IGFjY291bnROYW1lIG9mIHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmdhLmFkZGl0aW9uYWxBY2NvdW50TmFtZXMpIHtcbiAgICAgICAgX2dhcS5wdXNoKFthY2NvdW50TmFtZSArICcuX3RyYWNrUGFnZXZpZXcnLCBwYXRoXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZ2EgIT09ICd1bmRlZmluZWQnICYmIGdhKSB7XG4gICAgICBpZiAodGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ2EudXNlcklkKSB7XG4gICAgICAgIGdhKCdzZXQnLCAnJnVpZCcsIHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmdhLnVzZXJJZCk7XG4gICAgICAgIGZvciAoY29uc3QgYWNjb3VudE5hbWUgb2YgdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ2EuYWRkaXRpb25hbEFjY291bnROYW1lcykge1xuICAgICAgICAgIGdhKGFjY291bnROYW1lICsgJy5zZXQnLCAnJnVpZCcsIHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmdhLnVzZXJJZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmFuZ3VsYXJ0aWNzMi5zZXR0aW5ncy5nYS5hbm9ueW1pemVJcCkge1xuICAgICAgICBnYSgnc2V0JywgJ2Fub255bWl6ZUlwJywgdHJ1ZSk7XG4gICAgICAgIGZvciAoY29uc3QgYWNjb3VudE5hbWUgb2YgdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ2EuYWRkaXRpb25hbEFjY291bnROYW1lcykge1xuICAgICAgICAgIGdhKGFjY291bnROYW1lICsgJy5zZXQnLCAnYW5vbnltaXplSXAnLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZ2EoJ3NlbmQnLCAncGFnZXZpZXcnLCBwYXRoKTtcbiAgICAgIGZvciAoY29uc3QgYWNjb3VudE5hbWUgb2YgdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ2EuYWRkaXRpb25hbEFjY291bnROYW1lcykge1xuICAgICAgICBnYShhY2NvdW50TmFtZSArICcuc2VuZCcsICdwYWdldmlldycsIHBhdGgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFjayBFdmVudCBpbiBHQVxuICAgKlxuICAgKiBAcGFyYW0gYWN0aW9uIEFzc29jaWF0ZWQgd2l0aCB0aGUgZXZlbnRcbiAgICogQHBhcmFtIHByb3BlcnRpZXMgQ29tcHJpc2VkIG9mOlxuICAgKiAgLSBjYXRlZ29yeSAoc3RyaW5nKSBhbmQgb3B0aW9uYWxcbiAgICogIC0gbGFiZWwgKHN0cmluZylcbiAgICogIC0gdmFsdWUgKGludGVnZXIpXG4gICAqICAtIG5vbmludGVyYWN0aW9uIChib29sZWFuKVxuICAgKlxuICAgKiBAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vZ2Fqcy9ldmVudFRyYWNrZXJHdWlkZSNTZXR0aW5nVXBFdmVudFRyYWNraW5nXG4gICAqIEBsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9hbmFseXRpY3Nqcy9ldmVudHNcbiAgICovXG4gIGV2ZW50VHJhY2soYWN0aW9uOiBzdHJpbmcsIHByb3BlcnRpZXM6IGFueSkge1xuICAgIC8vIEdvb2dsZSBBbmFseXRpY3MgcmVxdWlyZXMgYW4gRXZlbnQgQ2F0ZWdvcnlcbiAgICBpZiAoIXByb3BlcnRpZXMgfHwgIXByb3BlcnRpZXMuY2F0ZWdvcnkpIHtcbiAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzIHx8IHt9O1xuICAgICAgcHJvcGVydGllcy5jYXRlZ29yeSA9ICdFdmVudCc7XG4gICAgfVxuICAgIC8vIEdBIHJlcXVpcmVzIHRoYXQgZXZlbnRWYWx1ZSBiZSBhbiBpbnRlZ2VyLCBzZWU6XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL2FuYWx5dGljc2pzL2ZpZWxkLXJlZmVyZW5jZSNldmVudFZhbHVlXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2x1aXNmYXJ6YXRpL2FuZ3VsYXJ0aWNzL2lzc3Vlcy84MVxuICAgIGlmIChwcm9wZXJ0aWVzLnZhbHVlKSB7XG4gICAgICBjb25zdCBwYXJzZWQgPSBwYXJzZUludChwcm9wZXJ0aWVzLnZhbHVlLCAxMCk7XG4gICAgICBwcm9wZXJ0aWVzLnZhbHVlID0gaXNOYU4ocGFyc2VkKSA/IDAgOiBwYXJzZWQ7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBnYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnN0IGV2ZW50T3B0aW9ucyA9IHtcbiAgICAgICAgZXZlbnRDYXRlZ29yeTogcHJvcGVydGllcy5jYXRlZ29yeSxcbiAgICAgICAgZXZlbnRBY3Rpb246IGFjdGlvbixcbiAgICAgICAgZXZlbnRMYWJlbDogcHJvcGVydGllcy5sYWJlbCxcbiAgICAgICAgZXZlbnRWYWx1ZTogcHJvcGVydGllcy52YWx1ZSxcbiAgICAgICAgbm9uSW50ZXJhY3Rpb246IHByb3BlcnRpZXMubm9uaW50ZXJhY3Rpb24sXG4gICAgICAgIHBhZ2U6IHByb3BlcnRpZXMucGFnZSB8fCBsb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKSB8fCBsb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgICAgdXNlcklkOiB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXR0aW5ncy5nYS51c2VySWQsXG4gICAgICAgIGhpdENhbGxiYWNrOiBwcm9wZXJ0aWVzLmhpdENhbGxiYWNrLFxuICAgICAgfTtcblxuICAgICAgLy8gYWRkIGN1c3RvbSBkaW1lbnNpb25zIGFuZCBtZXRyaWNzXG4gICAgICB0aGlzLnNldERpbWVuc2lvbnNBbmRNZXRyaWNzKHByb3BlcnRpZXMpO1xuICAgICAgaWYgKHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmdhLnRyYW5zcG9ydCkge1xuICAgICAgICBnYSgnc2VuZCcsICdldmVudCcsIGV2ZW50T3B0aW9ucywge1xuICAgICAgICAgIHRyYW5zcG9ydDogdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ2EudHJhbnNwb3J0LFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdhKCdzZW5kJywgJ2V2ZW50JywgZXZlbnRPcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgZm9yIChjb25zdCBhY2NvdW50TmFtZSBvZiB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXR0aW5ncy5nYS5hZGRpdGlvbmFsQWNjb3VudE5hbWVzKSB7XG4gICAgICAgIGdhKGFjY291bnROYW1lICsgJy5zZW5kJywgJ2V2ZW50JywgZXZlbnRPcHRpb25zKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBfZ2FxICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgX2dhcS5wdXNoKFtcbiAgICAgICAgJ190cmFja0V2ZW50JyxcbiAgICAgICAgcHJvcGVydGllcy5jYXRlZ29yeSxcbiAgICAgICAgYWN0aW9uLFxuICAgICAgICBwcm9wZXJ0aWVzLmxhYmVsLFxuICAgICAgICBwcm9wZXJ0aWVzLnZhbHVlLFxuICAgICAgICBwcm9wZXJ0aWVzLm5vbmludGVyYWN0aW9uLFxuICAgICAgXSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEV4Y2VwdGlvbiBUcmFjayBFdmVudCBpbiBHQVxuICAgKlxuICAgKiBAcGFyYW0gcHJvcGVydGllcyBDb21wcmlzZWQgb2YgdGhlIG9wdGlvbmFsIGZpZWxkczpcbiAgICogIC0gZmF0YWwgKHN0cmluZylcbiAgICogIC0gZGVzY3JpcHRpb24gKHN0cmluZylcbiAgICpcbiAgICogQGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9hbmFseXRpY3Nqcy9leGNlcHRpb25zXG4gICAqXG4gICAqIEBsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9hbmFseXRpY3Nqcy9ldmVudHNcbiAgICovXG4gIGV4Y2VwdGlvblRyYWNrKHByb3BlcnRpZXM6IGFueSkge1xuICAgIGlmIChwcm9wZXJ0aWVzLmZhdGFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdObyBcImZhdGFsXCIgcHJvdmlkZWQsIHNlbmRpbmcgd2l0aCBmYXRhbD10cnVlJyk7XG4gICAgICBwcm9wZXJ0aWVzLmZhdGFsID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcm9wZXJ0aWVzLmV4RGVzY3JpcHRpb24gPSBwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uO1xuXG4gICAgY29uc3QgZXZlbnRPcHRpb25zID0ge1xuICAgICAgZXhGYXRhbDogcHJvcGVydGllcy5mYXRhbCxcbiAgICAgIGV4RGVzY3JpcHRpb246IHByb3BlcnRpZXMuZGVzY3JpcHRpb24sXG4gICAgfTtcblxuICAgIGdhKCdzZW5kJywgJ2V4Y2VwdGlvbicsIGV2ZW50T3B0aW9ucyk7XG4gICAgZm9yIChjb25zdCBhY2NvdW50TmFtZSBvZiB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXR0aW5ncy5nYS5hZGRpdGlvbmFsQWNjb3VudE5hbWVzKSB7XG4gICAgICBnYShhY2NvdW50TmFtZSArICcuc2VuZCcsICdleGNlcHRpb24nLCBldmVudE9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVc2VyIFRpbWluZ3MgRXZlbnQgaW4gR0FcbiAgICogQG5hbWUgdXNlclRpbWluZ3NcbiAgICpcbiAgICogQHBhcmFtIHByb3BlcnRpZXMgQ29tcHJpc2VkIG9mIHRoZSBtYW5kYXRvcnkgZmllbGRzOlxuICAgKiAgLSB0aW1pbmdDYXRlZ29yeSAoc3RyaW5nKVxuICAgKiAgLSB0aW1pbmdWYXIgKHN0cmluZylcbiAgICogIC0gdGltaW5nVmFsdWUgKG51bWJlcilcbiAgICogUHJvcGVydGllcyBjYW4gYWxzbyBoYXZlIHRoZSBvcHRpb25hbCBmaWVsZHM6XG4gICAqICAtIHRpbWluZ0xhYmVsIChzdHJpbmcpXG4gICAqXG4gICAqIEBsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9hbmFseXRpY3Nqcy91c2VyLXRpbWluZ3NcbiAgICovXG4gIHVzZXJUaW1pbmdzKHByb3BlcnRpZXM6IFVzZXJUaW1pbmdzKSB7XG4gICAgaWYgKFxuICAgICAgIXByb3BlcnRpZXMgfHxcbiAgICAgICFwcm9wZXJ0aWVzLnRpbWluZ0NhdGVnb3J5IHx8XG4gICAgICAhcHJvcGVydGllcy50aW1pbmdWYXIgfHxcbiAgICAgICFwcm9wZXJ0aWVzLnRpbWluZ1ZhbHVlXG4gICAgKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAnUHJvcGVydGllcyB0aW1pbmdDYXRlZ29yeSwgdGltaW5nVmFyLCBhbmQgdGltaW5nVmFsdWUgYXJlIHJlcXVpcmVkIHRvIGJlIHNldC4nLFxuICAgICAgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGdhICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgZ2EoJ3NlbmQnLCAndGltaW5nJywgcHJvcGVydGllcyk7XG4gICAgICBmb3IgKGNvbnN0IGFjY291bnROYW1lIG9mIHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmdhLmFkZGl0aW9uYWxBY2NvdW50TmFtZXMpIHtcbiAgICAgICAgZ2EoYWNjb3VudE5hbWUgKyAnLnNlbmQnLCAndGltaW5nJywgcHJvcGVydGllcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0VXNlcm5hbWUodXNlcklkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXR0aW5ncy5nYS51c2VySWQgPSB1c2VySWQ7XG4gICAgaWYgKHR5cGVvZiBnYSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZ2EoJ3NldCcsICd1c2VySWQnLCB1c2VySWQpO1xuICB9XG5cbiAgc2V0VXNlclByb3BlcnRpZXMocHJvcGVydGllczogYW55KSB7XG4gICAgdGhpcy5zZXREaW1lbnNpb25zQW5kTWV0cmljcyhwcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0RGltZW5zaW9uc0FuZE1ldHJpY3MocHJvcGVydGllczogYW55KSB7XG4gICAgaWYgKHR5cGVvZiBnYSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gY2xlYW4gcHJldmlvdXNseSB1c2VkIGRpbWVuc2lvbnMgYW5kIG1ldHJpY3MgdGhhdCB3aWxsIG5vdCBiZSBvdmVycmlkZW5cbiAgICB0aGlzLmRpbWVuc2lvbnNBbmRNZXRyaWNzLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICBpZiAoIXByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoZWxlbSkpIHtcbiAgICAgICAgZ2EoJ3NldCcsIGVsZW0sIHVuZGVmaW5lZCk7XG5cbiAgICAgICAgdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ2EuYWRkaXRpb25hbEFjY291bnROYW1lcy5mb3JFYWNoKFxuICAgICAgICAgIChhY2NvdW50TmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBnYShgJHthY2NvdW50TmFtZX0uc2V0YCwgZWxlbSwgdW5kZWZpbmVkKTtcbiAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuZGltZW5zaW9uc0FuZE1ldHJpY3MgPSBbXTtcblxuICAgIC8vIGFkZCBjdXN0b20gZGltZW5zaW9ucyBhbmQgbWV0cmljc1xuICAgIE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAga2V5Lmxhc3RJbmRleE9mKCdkaW1lbnNpb24nLCAwKSA9PT0gMCB8fFxuICAgICAgICBrZXkubGFzdEluZGV4T2YoJ21ldHJpYycsIDApID09PSAwXG4gICAgICApIHtcbiAgICAgICAgZ2EoJ3NldCcsIGtleSwgcHJvcGVydGllc1trZXldKTtcblxuICAgICAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXR0aW5ncy5nYS5hZGRpdGlvbmFsQWNjb3VudE5hbWVzLmZvckVhY2goXG4gICAgICAgICAgKGFjY291bnROYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGdhKGAke2FjY291bnROYW1lfS5zZXRgLCBrZXksIHByb3BlcnRpZXNba2V5XSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zQW5kTWV0cmljcy5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==