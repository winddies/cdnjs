/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Angulartics2 } from 'angulartics2';
import * as i0 from "@angular/core";
import * as i1 from "angulartics2";
var Angulartics2Kissmetrics = /** @class */ (function () {
    function Angulartics2Kissmetrics(angulartics2) {
        var _this = this;
        this.angulartics2 = angulartics2;
        if (typeof (_kmq) === 'undefined') {
            _kmq = [];
        }
        this.angulartics2.setUsername
            .subscribe(function (x) { return _this.setUsername(x); });
        this.angulartics2.setUserProperties
            .subscribe(function (x) { return _this.setUserProperties(x); });
    }
    /**
     * @return {?}
     */
    Angulartics2Kissmetrics.prototype.startTracking = /**
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
    Angulartics2Kissmetrics.prototype.pageTrack = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        _kmq.push(['record', 'Pageview', { 'Page': path }]);
    };
    /**
     * @param {?} action
     * @param {?} properties
     * @return {?}
     */
    Angulartics2Kissmetrics.prototype.eventTrack = /**
     * @param {?} action
     * @param {?} properties
     * @return {?}
     */
    function (action, properties) {
        _kmq.push(['record', action, properties]);
    };
    /**
     * @param {?} userId
     * @return {?}
     */
    Angulartics2Kissmetrics.prototype.setUsername = /**
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        _kmq.push(['identify', userId]);
    };
    /**
     * @param {?} properties
     * @return {?}
     */
    Angulartics2Kissmetrics.prototype.setUserProperties = /**
     * @param {?} properties
     * @return {?}
     */
    function (properties) {
        _kmq.push(['set', properties]);
    };
    Angulartics2Kissmetrics.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    Angulartics2Kissmetrics.ctorParameters = function () { return [
        { type: Angulartics2 }
    ]; };
    /** @nocollapse */ Angulartics2Kissmetrics.ngInjectableDef = i0.defineInjectable({ factory: function Angulartics2Kissmetrics_Factory() { return new Angulartics2Kissmetrics(i0.inject(i1.Angulartics2)); }, token: Angulartics2Kissmetrics, providedIn: "root" });
    return Angulartics2Kissmetrics;
}());
export { Angulartics2Kissmetrics };
if (false) {
    /**
     * @type {?}
     * @private
     */
    Angulartics2Kissmetrics.prototype.angulartics2;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2lzc21ldHJpY3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFydGljczIva2lzc21ldHJpY3MvIiwic291cmNlcyI6WyJraXNzbWV0cmljcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7QUFJNUM7SUFHRSxpQ0FDVSxZQUEwQjtRQURwQyxpQkFVQztRQVRTLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBRWxDLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLFdBQVcsRUFBRTtZQUNqQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1NBQ1g7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVc7YUFDMUIsU0FBUyxDQUFDLFVBQUMsQ0FBUyxJQUFLLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBbkIsQ0FBbUIsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCO2FBQ2hDLFNBQVMsQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7SUFFRCwrQ0FBYTs7O0lBQWI7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzthQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO2FBQzdDLFNBQVMsQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUF0QixDQUFzQixDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVO2FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixFQUFFLENBQUM7YUFDN0MsU0FBUyxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBdkMsQ0FBdUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7Ozs7O0lBRUQsMkNBQVM7Ozs7SUFBVCxVQUFVLElBQVk7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7OztJQUVELDRDQUFVOzs7OztJQUFWLFVBQVcsTUFBYyxFQUFFLFVBQWU7UUFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7OztJQUVELDZDQUFXOzs7O0lBQVgsVUFBWSxNQUFjO1FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUVELG1EQUFpQjs7OztJQUFqQixVQUFrQixVQUFlO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUNqQyxDQUFDOztnQkF0Q0YsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnQkFKekIsWUFBWTs7O2tDQUZyQjtDQTZDQyxBQXZDRCxJQXVDQztTQXRDWSx1QkFBdUI7Ozs7OztJQUdoQywrQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFuZ3VsYXJ0aWNzMiB9IGZyb20gJ2FuZ3VsYXJ0aWNzMic7XG5cbmRlY2xhcmUgdmFyIF9rbXE6IGFueTtcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFydGljczJLaXNzbWV0cmljcyB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhbmd1bGFydGljczI6IEFuZ3VsYXJ0aWNzMlxuICApIHtcbiAgICBpZiAodHlwZW9mIChfa21xKSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIF9rbXEgPSBbXTtcbiAgICB9XG4gICAgdGhpcy5hbmd1bGFydGljczIuc2V0VXNlcm5hbWVcbiAgICAgIC5zdWJzY3JpYmUoKHg6IHN0cmluZykgPT4gdGhpcy5zZXRVc2VybmFtZSh4KSk7XG4gICAgdGhpcy5hbmd1bGFydGljczIuc2V0VXNlclByb3BlcnRpZXNcbiAgICAgIC5zdWJzY3JpYmUoKHgpID0+IHRoaXMuc2V0VXNlclByb3BlcnRpZXMoeCkpO1xuICB9XG5cbiAgc3RhcnRUcmFja2luZygpOiB2b2lkIHtcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5wYWdlVHJhY2tcbiAgICAgIC5waXBlKHRoaXMuYW5ndWxhcnRpY3MyLmZpbHRlckRldmVsb3Blck1vZGUoKSlcbiAgICAgIC5zdWJzY3JpYmUoKHgpID0+IHRoaXMucGFnZVRyYWNrKHgucGF0aCkpO1xuICAgIHRoaXMuYW5ndWxhcnRpY3MyLmV2ZW50VHJhY2tcbiAgICAgIC5waXBlKHRoaXMuYW5ndWxhcnRpY3MyLmZpbHRlckRldmVsb3Blck1vZGUoKSlcbiAgICAgIC5zdWJzY3JpYmUoKHgpID0+IHRoaXMuZXZlbnRUcmFjayh4LmFjdGlvbiwgeC5wcm9wZXJ0aWVzKSk7XG4gIH1cblxuICBwYWdlVHJhY2socGF0aDogc3RyaW5nKSB7XG4gICAgX2ttcS5wdXNoKFsncmVjb3JkJywgJ1BhZ2V2aWV3JywgeyAnUGFnZSc6IHBhdGggfV0pO1xuICB9XG5cbiAgZXZlbnRUcmFjayhhY3Rpb246IHN0cmluZywgcHJvcGVydGllczogYW55KSB7XG4gICAgX2ttcS5wdXNoKFsncmVjb3JkJywgYWN0aW9uLCBwcm9wZXJ0aWVzXSk7XG4gIH1cblxuICBzZXRVc2VybmFtZSh1c2VySWQ6IHN0cmluZykge1xuICAgIF9rbXEucHVzaChbJ2lkZW50aWZ5JywgdXNlcklkXSk7XG4gIH1cblxuICBzZXRVc2VyUHJvcGVydGllcyhwcm9wZXJ0aWVzOiBhbnkpIHtcbiAgICBfa21xLnB1c2goWydzZXQnLCBwcm9wZXJ0aWVzXSk7XG4gIH1cbn1cbiJdfQ==