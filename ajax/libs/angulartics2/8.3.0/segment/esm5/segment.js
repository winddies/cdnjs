import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Angulartics2 } from 'angulartics2';
import * as i0 from "@angular/core";
import * as i1 from "angulartics2";
var Angulartics2Segment = /** @class */ (function () {
    function Angulartics2Segment(angulartics2) {
        var _this = this;
        this.angulartics2 = angulartics2;
        this.angulartics2.setUserProperties
            .subscribe(function (x) { return _this.setUserProperties(x); });
        this.angulartics2.setUserPropertiesOnce
            .subscribe(function (x) { return _this.setUserProperties(x); });
        this.angulartics2.setAlias
            .subscribe(function (x) { return _this.setAlias(x); });
    }
    Angulartics2Segment.prototype.startTracking = function () {
        var _this = this;
        this.angulartics2.pageTrack
            .pipe(this.angulartics2.filterDeveloperMode())
            .subscribe(function (x) { return _this.pageTrack(x.path); });
        this.angulartics2.eventTrack
            .pipe(this.angulartics2.filterDeveloperMode())
            .subscribe(function (x) { return _this.eventTrack(x.action, x.properties); });
    };
    /**
     * https://segment.com/docs/libraries/analytics.js/#page
     *
     * analytics.page([category], [name], [properties], [options], [callback]);
     */
    Angulartics2Segment.prototype.pageTrack = function (path) {
        // TODO : Support optional parameters where the parameter order and type changes their meaning
        try {
            analytics.page(path);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * https://segment.com/docs/libraries/analytics.js/#track
     *
     * analytics.track(event, [properties], [options], [callback]);
     */
    Angulartics2Segment.prototype.eventTrack = function (action, properties) {
        try {
            analytics.track(action, properties);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * https://segment.com/docs/libraries/analytics.js/#identify
     *
     * analytics.identify([userId], [traits], [options], [callback]);
     */
    Angulartics2Segment.prototype.setUserProperties = function (properties) {
        try {
            if (properties.userId) {
                analytics.identify(properties.userId, properties);
            }
            else {
                analytics.identify(properties);
            }
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * https://segment.com/docs/libraries/analytics.js/#alias
     *
     * analytics.alias(userId, previousId, options, callback);
     */
    Angulartics2Segment.prototype.setAlias = function (alias) {
        try {
            analytics.alias(alias);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    Angulartics2Segment.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function Angulartics2Segment_Factory() { return new Angulartics2Segment(i0.ɵɵinject(i1.Angulartics2)); }, token: Angulartics2Segment, providedIn: "root" });
    Angulartics2Segment = tslib_1.__decorate([
        Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [Angulartics2])
    ], Angulartics2Segment);
    return Angulartics2Segment;
}());
export { Angulartics2Segment };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VnbWVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXJ0aWNzMi9zZWdtZW50LyIsInNvdXJjZXMiOlsic2VnbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7QUFLNUM7SUFFRSw2QkFDVSxZQUEwQjtRQURwQyxpQkFTQztRQVJTLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBRWxDLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCO2FBQ2hDLFNBQVMsQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxZQUFZLENBQUMscUJBQXFCO2FBQ3BDLFNBQVMsQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUTthQUN2QixTQUFTLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFoQixDQUFnQixDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELDJDQUFhLEdBQWI7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzthQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO2FBQzdDLFNBQVMsQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUF0QixDQUFzQixDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVO2FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixFQUFFLENBQUM7YUFDN0MsU0FBUyxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBdkMsQ0FBdUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsdUNBQVMsR0FBVCxVQUFVLElBQVk7UUFDcEIsOEZBQThGO1FBQzlGLElBQUk7WUFDRixTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RCO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksY0FBYyxDQUFDLEVBQUU7Z0JBQ2xDLE1BQU0sQ0FBQyxDQUFDO2FBQ1Q7U0FDRjtJQUNILENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsd0NBQVUsR0FBVixVQUFXLE1BQWMsRUFBRSxVQUFlO1FBQ3hDLElBQUk7WUFDRixTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztTQUNyQztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLGNBQWMsQ0FBQyxFQUFFO2dCQUNsQyxNQUFNLENBQUMsQ0FBQzthQUNUO1NBQ0Y7SUFDSCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILCtDQUFpQixHQUFqQixVQUFrQixVQUFlO1FBQy9CLElBQUk7WUFDRixJQUFJLFVBQVUsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3JCLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQzthQUNuRDtpQkFBTTtnQkFDTCxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ2hDO1NBQ0Y7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxjQUFjLENBQUMsRUFBRTtnQkFDbEMsTUFBTSxDQUFDLENBQUM7YUFDVDtTQUNGO0lBQ0gsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxzQ0FBUSxHQUFSLFVBQVMsS0FBVTtRQUNqQixJQUFJO1lBQ0YsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN4QjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLGNBQWMsQ0FBQyxFQUFFO2dCQUNsQyxNQUFNLENBQUMsQ0FBQzthQUNUO1NBQ0Y7SUFDSCxDQUFDOztJQXJGVSxtQkFBbUI7UUFEL0IsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO2lEQUlULFlBQVk7T0FIekIsbUJBQW1CLENBc0YvQjs4QkE3RkQ7Q0E2RkMsQUF0RkQsSUFzRkM7U0F0RlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBbmd1bGFydGljczIgfSBmcm9tICdhbmd1bGFydGljczInO1xuXG5kZWNsYXJlIHZhciBhbmFseXRpY3M6IFNlZ21lbnRBbmFseXRpY3MuQW5hbHl0aWNzSlM7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQW5ndWxhcnRpY3MyU2VnbWVudCB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhbmd1bGFydGljczI6IEFuZ3VsYXJ0aWNzMlxuICApIHtcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXRVc2VyUHJvcGVydGllc1xuICAgICAgLnN1YnNjcmliZSgoeCkgPT4gdGhpcy5zZXRVc2VyUHJvcGVydGllcyh4KSk7XG4gICAgdGhpcy5hbmd1bGFydGljczIuc2V0VXNlclByb3BlcnRpZXNPbmNlXG4gICAgICAuc3Vic2NyaWJlKCh4KSA9PiB0aGlzLnNldFVzZXJQcm9wZXJ0aWVzKHgpKTtcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXRBbGlhc1xuICAgICAgLnN1YnNjcmliZSgoeCkgPT4gdGhpcy5zZXRBbGlhcyh4KSk7XG4gIH1cblxuICBzdGFydFRyYWNraW5nKCk6IHZvaWQge1xuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnBhZ2VUcmFja1xuICAgICAgLnBpcGUodGhpcy5hbmd1bGFydGljczIuZmlsdGVyRGV2ZWxvcGVyTW9kZSgpKVxuICAgICAgLnN1YnNjcmliZSgoeCkgPT4gdGhpcy5wYWdlVHJhY2soeC5wYXRoKSk7XG4gICAgdGhpcy5hbmd1bGFydGljczIuZXZlbnRUcmFja1xuICAgICAgLnBpcGUodGhpcy5hbmd1bGFydGljczIuZmlsdGVyRGV2ZWxvcGVyTW9kZSgpKVxuICAgICAgLnN1YnNjcmliZSgoeCkgPT4gdGhpcy5ldmVudFRyYWNrKHguYWN0aW9uLCB4LnByb3BlcnRpZXMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBodHRwczovL3NlZ21lbnQuY29tL2RvY3MvbGlicmFyaWVzL2FuYWx5dGljcy5qcy8jcGFnZVxuICAgKlxuICAgKiBhbmFseXRpY3MucGFnZShbY2F0ZWdvcnldLCBbbmFtZV0sIFtwcm9wZXJ0aWVzXSwgW29wdGlvbnNdLCBbY2FsbGJhY2tdKTtcbiAgICovXG4gIHBhZ2VUcmFjayhwYXRoOiBzdHJpbmcpIHtcbiAgICAvLyBUT0RPIDogU3VwcG9ydCBvcHRpb25hbCBwYXJhbWV0ZXJzIHdoZXJlIHRoZSBwYXJhbWV0ZXIgb3JkZXIgYW5kIHR5cGUgY2hhbmdlcyB0aGVpciBtZWFuaW5nXG4gICAgdHJ5IHtcbiAgICAgIGFuYWx5dGljcy5wYWdlKHBhdGgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogaHR0cHM6Ly9zZWdtZW50LmNvbS9kb2NzL2xpYnJhcmllcy9hbmFseXRpY3MuanMvI3RyYWNrXG4gICAqXG4gICAqIGFuYWx5dGljcy50cmFjayhldmVudCwgW3Byb3BlcnRpZXNdLCBbb3B0aW9uc10sIFtjYWxsYmFja10pO1xuICAgKi9cbiAgZXZlbnRUcmFjayhhY3Rpb246IHN0cmluZywgcHJvcGVydGllczogYW55KSB7XG4gICAgdHJ5IHtcbiAgICAgIGFuYWx5dGljcy50cmFjayhhY3Rpb24sIHByb3BlcnRpZXMpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogaHR0cHM6Ly9zZWdtZW50LmNvbS9kb2NzL2xpYnJhcmllcy9hbmFseXRpY3MuanMvI2lkZW50aWZ5XG4gICAqXG4gICAqIGFuYWx5dGljcy5pZGVudGlmeShbdXNlcklkXSwgW3RyYWl0c10sIFtvcHRpb25zXSwgW2NhbGxiYWNrXSk7XG4gICAqL1xuICBzZXRVc2VyUHJvcGVydGllcyhwcm9wZXJ0aWVzOiBhbnkpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKHByb3BlcnRpZXMudXNlcklkKSB7XG4gICAgICAgIGFuYWx5dGljcy5pZGVudGlmeShwcm9wZXJ0aWVzLnVzZXJJZCwgcHJvcGVydGllcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbmFseXRpY3MuaWRlbnRpZnkocHJvcGVydGllcyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBodHRwczovL3NlZ21lbnQuY29tL2RvY3MvbGlicmFyaWVzL2FuYWx5dGljcy5qcy8jYWxpYXNcbiAgICpcbiAgICogYW5hbHl0aWNzLmFsaWFzKHVzZXJJZCwgcHJldmlvdXNJZCwgb3B0aW9ucywgY2FsbGJhY2spO1xuICAgKi9cbiAgc2V0QWxpYXMoYWxpYXM6IGFueSkge1xuICAgIHRyeSB7XG4gICAgICBhbmFseXRpY3MuYWxpYXMoYWxpYXMpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==