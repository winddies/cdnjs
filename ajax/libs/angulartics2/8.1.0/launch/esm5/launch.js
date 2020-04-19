import * as tslib_1 from "tslib";
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
    Angulartics2LaunchByAdobe.prototype.setUsername = function (userId) {
        if ('undefined' !== typeof userId && userId) {
            this.payload.userId = userId;
        }
    };
    Angulartics2LaunchByAdobe.prototype.setUserProperties = function (properties) {
        if ('undefined' !== typeof properties && properties) {
            this.payload.properties = properties;
        }
    };
    Angulartics2LaunchByAdobe.prototype.startTracking = function () {
        var _this = this;
        this.angulartics2.pageTrack
            .pipe(this.angulartics2.filterDeveloperMode())
            .subscribe(function (x) { return _this.pageTrack(x.path); });
        this.angulartics2.eventTrack
            .pipe(this.angulartics2.filterDeveloperMode())
            .subscribe(function (x) { return _this.eventTrack(x.action, x.properties); });
    };
    Angulartics2LaunchByAdobe.prototype.pageTrack = function (path) {
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
    Angulartics2LaunchByAdobe.prototype.eventTrack = function (action, properties) {
        properties = properties || {};
        // add properties to payload
        this.payload.action = action;
        this.payload.eventProperties = properties;
        if ('undefined' !== typeof _satellite && _satellite) {
            _satellite.track('eventTrack', this.payload);
        }
    };
    Angulartics2LaunchByAdobe.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function Angulartics2LaunchByAdobe_Factory() { return new Angulartics2LaunchByAdobe(i0.ɵɵinject(i1.Angulartics2)); }, token: Angulartics2LaunchByAdobe, providedIn: "root" });
    Angulartics2LaunchByAdobe = tslib_1.__decorate([
        Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [Angulartics2])
    ], Angulartics2LaunchByAdobe);
    return Angulartics2LaunchByAdobe;
}());
export { Angulartics2LaunchByAdobe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF1bmNoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhcnRpY3MyL2xhdW5jaC8iLCJzb3VyY2VzIjpbImxhdW5jaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7QUFLNUM7SUFFRSxtQ0FDWSxZQUEwQjtRQUR0QyxpQkFVQztRQVRXLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBRnRDLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFJaEIsSUFBSSxXQUFXLEtBQUssT0FBTyxVQUFVLEVBQUU7WUFDckMsT0FBTyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1NBQ25DO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXO2FBQzFCLFNBQVMsQ0FBQyxVQUFDLENBQVMsSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQW5CLENBQW1CLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQjthQUNoQyxTQUFTLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxLQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsK0NBQVcsR0FBWCxVQUFZLE1BQXdCO1FBQ2xDLElBQUksV0FBVyxLQUFLLE9BQU8sTUFBTSxJQUFJLE1BQU0sRUFBRTtZQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7U0FDOUI7SUFDSCxDQUFDO0lBRUQscURBQWlCLEdBQWpCLFVBQWtCLFVBQWU7UUFDL0IsSUFBSSxXQUFXLEtBQUssT0FBTyxVQUFVLElBQUksVUFBVSxFQUFFO1lBQ25ELElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztTQUN0QztJQUNILENBQUM7SUFFRCxpREFBYSxHQUFiO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7YUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLEVBQUUsQ0FBQzthQUM3QyxTQUFTLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVTthQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO2FBQzdDLFNBQVMsQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQXZDLENBQXVDLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsNkNBQVMsR0FBVCxVQUFVLElBQVk7UUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFFekIsSUFBSSxXQUFXLEtBQUssT0FBTyxVQUFVLElBQUksVUFBVSxFQUFFO1lBQ25ELFVBQVUsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM3QztJQUNILENBQUM7SUFFRDs7O09BR0c7SUFDSCw4Q0FBVSxHQUFWLFVBQVcsTUFBYyxFQUFFLFVBQWU7UUFDeEMsVUFBVSxHQUFHLFVBQVUsSUFBSSxFQUFFLENBQUM7UUFFOUIsNEJBQTRCO1FBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsR0FBRyxVQUFVLENBQUM7UUFFMUMsSUFBSSxXQUFXLEtBQUssT0FBTyxVQUFVLElBQUksVUFBVSxFQUFFO1lBQ25ELFVBQVUsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM5QztJQUNILENBQUM7O0lBMURVLHlCQUF5QjtRQURyQyxVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7aURBSVAsWUFBWTtPQUgzQix5QkFBeUIsQ0EyRHJDO29DQWxFRDtDQWtFQyxBQTNERCxJQTJEQztTQTNEWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFuZ3VsYXJ0aWNzMiB9IGZyb20gJ2FuZ3VsYXJ0aWNzMic7XG5cbmRlY2xhcmUgY29uc3QgX3NhdGVsbGl0ZTogYW55O1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJ0aWNzMkxhdW5jaEJ5QWRvYmUge1xuICBwYXlsb2FkOiBhbnkgPSB7fTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGFuZ3VsYXJ0aWNzMjogQW5ndWxhcnRpY3MyLFxuICApIHtcbiAgICBpZiAoJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiBfc2F0ZWxsaXRlKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0xhdW5jaCBub3QgZm91bmQhJyk7XG4gICAgfVxuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldFVzZXJuYW1lXG4gICAgICAuc3Vic2NyaWJlKCh4OiBzdHJpbmcpID0+IHRoaXMuc2V0VXNlcm5hbWUoeCkpO1xuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldFVzZXJQcm9wZXJ0aWVzXG4gICAgICAuc3Vic2NyaWJlKCh4KSA9PiB0aGlzLnNldFVzZXJQcm9wZXJ0aWVzKHgpKTtcbiAgfVxuXG4gIHNldFVzZXJuYW1lKHVzZXJJZDogc3RyaW5nIHwgYm9vbGVhbikge1xuICAgIGlmICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mIHVzZXJJZCAmJiB1c2VySWQpIHtcbiAgICAgIHRoaXMucGF5bG9hZC51c2VySWQgPSB1c2VySWQ7XG4gICAgfVxuICB9XG5cbiAgc2V0VXNlclByb3BlcnRpZXMocHJvcGVydGllczogYW55KSB7XG4gICAgaWYgKCd1bmRlZmluZWQnICE9PSB0eXBlb2YgcHJvcGVydGllcyAmJiBwcm9wZXJ0aWVzKSB7XG4gICAgICB0aGlzLnBheWxvYWQucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gICAgfVxuICB9XG5cbiAgc3RhcnRUcmFja2luZygpIHtcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5wYWdlVHJhY2tcbiAgICAgIC5waXBlKHRoaXMuYW5ndWxhcnRpY3MyLmZpbHRlckRldmVsb3Blck1vZGUoKSlcbiAgICAgIC5zdWJzY3JpYmUoKHgpID0+IHRoaXMucGFnZVRyYWNrKHgucGF0aCkpO1xuICAgIHRoaXMuYW5ndWxhcnRpY3MyLmV2ZW50VHJhY2tcbiAgICAgIC5waXBlKHRoaXMuYW5ndWxhcnRpY3MyLmZpbHRlckRldmVsb3Blck1vZGUoKSlcbiAgICAgIC5zdWJzY3JpYmUoKHgpID0+IHRoaXMuZXZlbnRUcmFjayh4LmFjdGlvbiwgeC5wcm9wZXJ0aWVzKSk7XG4gIH1cblxuICBwYWdlVHJhY2socGF0aDogc3RyaW5nKSB7XG4gICAgdGhpcy5wYXlsb2FkID0gdGhpcy5wYXlsb2FkIHx8IHt9O1xuICAgIHRoaXMucGF5bG9hZC5wYXRoID0gcGF0aDtcblxuICAgIGlmICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mIF9zYXRlbGxpdGUgJiYgX3NhdGVsbGl0ZSkge1xuICAgICAgX3NhdGVsbGl0ZS50cmFjaygncGFnZVRyYWNrJywgdGhpcy5wYXlsb2FkKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIGFjdGlvbiBhc3NvY2lhdGVkIHdpdGggdGhlIGV2ZW50XG4gICAqIEBwYXJhbSBwcm9wZXJ0aWVzIGFzc29jaWF0ZWQgd2l0aCB0aGUgZXZlbnRcbiAgICovXG4gIGV2ZW50VHJhY2soYWN0aW9uOiBzdHJpbmcsIHByb3BlcnRpZXM6IGFueSkge1xuICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzIHx8IHt9O1xuXG4gICAgLy8gYWRkIHByb3BlcnRpZXMgdG8gcGF5bG9hZFxuICAgIHRoaXMucGF5bG9hZC5hY3Rpb24gPSBhY3Rpb247XG4gICAgdGhpcy5wYXlsb2FkLmV2ZW50UHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG5cbiAgICBpZiAoJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBfc2F0ZWxsaXRlICYmIF9zYXRlbGxpdGUpIHtcbiAgICAgIF9zYXRlbGxpdGUudHJhY2soJ2V2ZW50VHJhY2snLCB0aGlzLnBheWxvYWQpO1xuICAgIH1cbiAgfVxufVxuIl19