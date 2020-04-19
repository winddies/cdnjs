/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BehaviorSubject } from 'rxjs';
/**
 * @record
 */
export function TrackNavigationEnd() { }
if (false) {
    /** @type {?} */
    TrackNavigationEnd.prototype.url;
}
var RouterlessTracking = /** @class */ (function () {
    function RouterlessTracking() {
    }
    /**
     * @param {?} settings
     * @return {?}
     */
    RouterlessTracking.prototype.trackLocation = /**
     * @param {?} settings
     * @return {?}
     */
    function (settings) {
        return new BehaviorSubject({ url: '/' });
    };
    /**
     * @param {?} url
     * @return {?}
     */
    RouterlessTracking.prototype.prepareExternalUrl = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return url;
    };
    return RouterlessTracking;
}());
export { RouterlessTracking };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVybGVzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXJ0aWNzMi8iLCJzb3VyY2VzIjpbInJvdXRlcmxlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQWUsTUFBTSxNQUFNLENBQUM7Ozs7QUFJcEQsd0NBRUM7OztJQURDLGlDQUFZOztBQUdkO0lBQUE7SUFPQSxDQUFDOzs7OztJQU5DLDBDQUFhOzs7O0lBQWIsVUFBYyxRQUE4QjtRQUMxQyxPQUFPLElBQUksZUFBZSxDQUFxQixFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQy9ELENBQUM7Ozs7O0lBQ0QsK0NBQWtCOzs7O0lBQWxCLFVBQW1CLEdBQVc7UUFDNUIsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQW5ndWxhcnRpY3MyU2V0dGluZ3MgfSBmcm9tICcuL2FuZ3VsYXJ0aWNzMi1jb25maWcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrTmF2aWdhdGlvbkVuZCB7XG4gIHVybDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgUm91dGVybGVzc1RyYWNraW5nIHtcbiAgdHJhY2tMb2NhdGlvbihzZXR0aW5nczogQW5ndWxhcnRpY3MyU2V0dGluZ3MpOiBPYnNlcnZhYmxlPFRyYWNrTmF2aWdhdGlvbkVuZD4ge1xuICAgIHJldHVybiBuZXcgQmVoYXZpb3JTdWJqZWN0PFRyYWNrTmF2aWdhdGlvbkVuZD4oeyB1cmw6ICcvJyB9KTtcbiAgfVxuICBwcmVwYXJlRXh0ZXJuYWxVcmwodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbn1cbiJdfQ==