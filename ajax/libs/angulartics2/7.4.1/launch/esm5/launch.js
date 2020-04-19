/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Angulartics2 } from 'angulartics2';
import * as i0 from "@angular/core";
import * as i1 from "angulartics2";
var Angulartics2LaunchByAdobe = /** @class */ (function () {
    function Angulartics2LaunchByAdobe(angulartics2) {
        var _this = this;
        this.angulartics2 = angulartics2;
        this.payload = {};
        if ('undefined' === typeof _satellite) {
            console.warn('Launch not found!');
        }
        this.angulartics2.setUsername
            .subscribe(function (x) { return _this.setUsername(x); });
        this.angulartics2.setUserProperties
            .subscribe(function (x) { return _this.setUserProperties(x); });
    }
    /**
     * @param {?} userId
     * @return {?}
     */
    Angulartics2LaunchByAdobe.prototype.setUsername = /**
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        if ('undefined' !== typeof userId && userId) {
            this.payload.userId = userId;
        }
    };
    /**
     * @param {?} properties
     * @return {?}
     */
    Angulartics2LaunchByAdobe.prototype.setUserProperties = /**
     * @param {?} properties
     * @return {?}
     */
    function (properties) {
        if ('undefined' !== typeof properties && properties) {
            this.payload.properties = properties;
        }
    };
    /**
     * @return {?}
     */
    Angulartics2LaunchByAdobe.prototype.startTracking = /**
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
    Angulartics2LaunchByAdobe.prototype.pageTrack = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        this.payload = this.payload || {};
        this.payload.path = path;
        if ('undefined' !== typeof _satellite && _satellite) {
            _satellite.track('pageTrack', this.payload);
        }
    };
    /**
     * @param action associated with the event
     * @param properties associated with the event
     */
    /**
     * @param {?} action associated with the event
     * @param {?} properties associated with the event
     * @return {?}
     */
    Angulartics2LaunchByAdobe.prototype.eventTrack = /**
     * @param {?} action associated with the event
     * @param {?} properties associated with the event
     * @return {?}
     */
    function (action, properties) {
        properties = properties || {};
        // add properties to payload
        this.payload.action = action;
        this.payload.eventProperties = properties;
        if ('undefined' !== typeof _satellite && _satellite) {
            _satellite.track('eventTrack', this.payload);
        }
    };
    Angulartics2LaunchByAdobe.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    Angulartics2LaunchByAdobe.ctorParameters = function () { return [
        { type: Angulartics2 }
    ]; };
    /** @nocollapse */ Angulartics2LaunchByAdobe.ngInjectableDef = i0.defineInjectable({ factory: function Angulartics2LaunchByAdobe_Factory() { return new Angulartics2LaunchByAdobe(i0.inject(i1.Angulartics2)); }, token: Angulartics2LaunchByAdobe, providedIn: "root" });
    return Angulartics2LaunchByAdobe;
}());
export { Angulartics2LaunchByAdobe };
if (false) {
    /** @type {?} */
    Angulartics2LaunchByAdobe.prototype.payload;
    /**
     * @type {?}
     * @protected
     */
    Angulartics2LaunchByAdobe.prototype.angulartics2;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF1bmNoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhcnRpY3MyL2xhdW5jaC8iLCJzb3VyY2VzIjpbImxhdW5jaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7QUFJNUM7SUFHRSxtQ0FDWSxZQUEwQjtRQUR0QyxpQkFVQztRQVRXLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBRnRDLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFJaEIsSUFBSSxXQUFXLEtBQUssT0FBTyxVQUFVLEVBQUU7WUFDckMsT0FBTyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1NBQ25DO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXO2FBQzFCLFNBQVMsQ0FBQyxVQUFDLENBQVMsSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQW5CLENBQW1CLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQjthQUNoQyxTQUFTLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxLQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7OztJQUVELCtDQUFXOzs7O0lBQVgsVUFBWSxNQUF3QjtRQUNsQyxJQUFJLFdBQVcsS0FBSyxPQUFPLE1BQU0sSUFBSSxNQUFNLEVBQUU7WUFDM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQzlCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxxREFBaUI7Ozs7SUFBakIsVUFBa0IsVUFBZTtRQUMvQixJQUFJLFdBQVcsS0FBSyxPQUFPLFVBQVUsSUFBSSxVQUFVLEVBQUU7WUFDbkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQzs7OztJQUVELGlEQUFhOzs7SUFBYjtRQUFBLGlCQU9DO1FBTkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTO2FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixFQUFFLENBQUM7YUFDN0MsU0FBUyxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQXRCLENBQXNCLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVU7YUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLEVBQUUsQ0FBQzthQUM3QyxTQUFTLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUF2QyxDQUF1QyxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7Ozs7SUFFRCw2Q0FBUzs7OztJQUFULFVBQVUsSUFBWTtRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUV6QixJQUFJLFdBQVcsS0FBSyxPQUFPLFVBQVUsSUFBSSxVQUFVLEVBQUU7WUFDbkQsVUFBVSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzdDO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gsOENBQVU7Ozs7O0lBQVYsVUFBVyxNQUFjLEVBQUUsVUFBZTtRQUN4QyxVQUFVLEdBQUcsVUFBVSxJQUFJLEVBQUUsQ0FBQztRQUU5Qiw0QkFBNEI7UUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxHQUFHLFVBQVUsQ0FBQztRQUUxQyxJQUFJLFdBQVcsS0FBSyxPQUFPLFVBQVUsSUFBSSxVQUFVLEVBQUU7WUFDbkQsVUFBVSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzlDO0lBQ0gsQ0FBQzs7Z0JBM0RGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0JBSnpCLFlBQVk7OztvQ0FGckI7Q0FrRUMsQUE1REQsSUE0REM7U0EzRFkseUJBQXlCOzs7SUFDcEMsNENBQWtCOzs7OztJQUVoQixpREFBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFuZ3VsYXJ0aWNzMiB9IGZyb20gJ2FuZ3VsYXJ0aWNzMic7XG5cbmRlY2xhcmUgY29uc3QgX3NhdGVsbGl0ZTogYW55O1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJ0aWNzMkxhdW5jaEJ5QWRvYmUge1xuICBwYXlsb2FkOiBhbnkgPSB7fTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGFuZ3VsYXJ0aWNzMjogQW5ndWxhcnRpY3MyLFxuICApIHtcbiAgICBpZiAoJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiBfc2F0ZWxsaXRlKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0xhdW5jaCBub3QgZm91bmQhJyk7XG4gICAgfVxuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldFVzZXJuYW1lXG4gICAgICAuc3Vic2NyaWJlKCh4OiBzdHJpbmcpID0+IHRoaXMuc2V0VXNlcm5hbWUoeCkpO1xuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldFVzZXJQcm9wZXJ0aWVzXG4gICAgICAuc3Vic2NyaWJlKCh4KSA9PiB0aGlzLnNldFVzZXJQcm9wZXJ0aWVzKHgpKTtcbiAgfVxuXG4gIHNldFVzZXJuYW1lKHVzZXJJZDogc3RyaW5nIHwgYm9vbGVhbikge1xuICAgIGlmICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mIHVzZXJJZCAmJiB1c2VySWQpIHtcbiAgICAgIHRoaXMucGF5bG9hZC51c2VySWQgPSB1c2VySWQ7XG4gICAgfVxuICB9XG5cbiAgc2V0VXNlclByb3BlcnRpZXMocHJvcGVydGllczogYW55KSB7XG4gICAgaWYgKCd1bmRlZmluZWQnICE9PSB0eXBlb2YgcHJvcGVydGllcyAmJiBwcm9wZXJ0aWVzKSB7XG4gICAgICB0aGlzLnBheWxvYWQucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gICAgfVxuICB9XG5cbiAgc3RhcnRUcmFja2luZygpIHtcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5wYWdlVHJhY2tcbiAgICAgIC5waXBlKHRoaXMuYW5ndWxhcnRpY3MyLmZpbHRlckRldmVsb3Blck1vZGUoKSlcbiAgICAgIC5zdWJzY3JpYmUoKHgpID0+IHRoaXMucGFnZVRyYWNrKHgucGF0aCkpO1xuICAgIHRoaXMuYW5ndWxhcnRpY3MyLmV2ZW50VHJhY2tcbiAgICAgIC5waXBlKHRoaXMuYW5ndWxhcnRpY3MyLmZpbHRlckRldmVsb3Blck1vZGUoKSlcbiAgICAgIC5zdWJzY3JpYmUoKHgpID0+IHRoaXMuZXZlbnRUcmFjayh4LmFjdGlvbiwgeC5wcm9wZXJ0aWVzKSk7XG4gIH1cblxuICBwYWdlVHJhY2socGF0aDogc3RyaW5nKSB7XG4gICAgdGhpcy5wYXlsb2FkID0gdGhpcy5wYXlsb2FkIHx8IHt9O1xuICAgIHRoaXMucGF5bG9hZC5wYXRoID0gcGF0aDtcblxuICAgIGlmICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mIF9zYXRlbGxpdGUgJiYgX3NhdGVsbGl0ZSkge1xuICAgICAgX3NhdGVsbGl0ZS50cmFjaygncGFnZVRyYWNrJywgdGhpcy5wYXlsb2FkKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIGFjdGlvbiBhc3NvY2lhdGVkIHdpdGggdGhlIGV2ZW50XG4gICAqIEBwYXJhbSBwcm9wZXJ0aWVzIGFzc29jaWF0ZWQgd2l0aCB0aGUgZXZlbnRcbiAgICovXG4gIGV2ZW50VHJhY2soYWN0aW9uOiBzdHJpbmcsIHByb3BlcnRpZXM6IGFueSkge1xuICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzIHx8IHt9O1xuXG4gICAgLy8gYWRkIHByb3BlcnRpZXMgdG8gcGF5bG9hZFxuICAgIHRoaXMucGF5bG9hZC5hY3Rpb24gPSBhY3Rpb247XG4gICAgdGhpcy5wYXlsb2FkLmV2ZW50UHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG5cbiAgICBpZiAoJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBfc2F0ZWxsaXRlICYmIF9zYXRlbGxpdGUpIHtcbiAgICAgIF9zYXRlbGxpdGUudHJhY2soJ2V2ZW50VHJhY2snLCB0aGlzLnBheWxvYWQpO1xuICAgIH1cbiAgfVxufVxuIl19