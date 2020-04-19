/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function GoogleAnalyticsSettings() { }
if (false) {
    /**
     * array of additional account names (only works for analyticsjs)
     * @type {?}
     */
    GoogleAnalyticsSettings.prototype.additionalAccountNames;
    /** @type {?} */
    GoogleAnalyticsSettings.prototype.userId;
    /**
     * see https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#transport
     * @type {?}
     */
    GoogleAnalyticsSettings.prototype.transport;
    /** @type {?} */
    GoogleAnalyticsSettings.prototype.anonymizeIp;
}
/**
 * @record
 */
export function AppInsightsSettings() { }
if (false) {
    /** @type {?} */
    AppInsightsSettings.prototype.userId;
}
/**
 * @record
 */
export function GoogleTagManagerSettings() { }
if (false) {
    /** @type {?} */
    GoogleTagManagerSettings.prototype.userId;
}
/**
 * @record
 */
export function GoogleGlobalSiteTagSettings() { }
if (false) {
    /** @type {?} */
    GoogleGlobalSiteTagSettings.prototype.trackingIds;
    /** @type {?|undefined} */
    GoogleGlobalSiteTagSettings.prototype.userId;
    /** @type {?|undefined} */
    GoogleGlobalSiteTagSettings.prototype.anonymizeIp;
    /** @type {?|undefined} */
    GoogleGlobalSiteTagSettings.prototype.customMap;
}
/**
 * @record
 */
export function PageTrackingSettings() { }
if (false) {
    /** @type {?} */
    PageTrackingSettings.prototype.autoTrackVirtualPages;
    /** @type {?} */
    PageTrackingSettings.prototype.basePath;
    /** @type {?} */
    PageTrackingSettings.prototype.excludedRoutes;
    /**
     * drop ids from url `/sections/123/pages/456` -> `/sections/pages`
     * @type {?}
     */
    PageTrackingSettings.prototype.clearIds;
    /**
     * drop contents of url after hash marker `/callback#authcode=1234` -> `/callback`
     * @type {?}
     */
    PageTrackingSettings.prototype.clearHash;
    /**
     * drop query params from url `/sections/123/pages?param=456&param2=789` -> `/sections/123/pages`
     * @type {?}
     */
    PageTrackingSettings.prototype.clearQueryParams;
    /**
     * used with clearIds, define the matcher to clear url parts
     * @type {?}
     */
    PageTrackingSettings.prototype.idsRegExp;
}
/**
 * @record
 */
export function Angulartics2Settings() { }
if (false) {
    /** @type {?} */
    Angulartics2Settings.prototype.pageTracking;
    /**
     * Disable page tracking
     * @type {?}
     */
    Angulartics2Settings.prototype.developerMode;
    /** @type {?} */
    Angulartics2Settings.prototype.ga;
    /** @type {?} */
    Angulartics2Settings.prototype.appInsights;
    /** @type {?} */
    Angulartics2Settings.prototype.gtm;
    /** @type {?} */
    Angulartics2Settings.prototype.gst;
}
var DefaultConfig = /** @class */ (function () {
    function DefaultConfig() {
        this.pageTracking = {
            autoTrackVirtualPages: true,
            basePath: '',
            excludedRoutes: [],
            clearIds: false,
            clearHash: false,
            clearQueryParams: false,
            idsRegExp: /^\d+$|^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/,
        };
        this.developerMode = false;
        this.ga = {};
        this.appInsights = {};
        this.gtm = {};
        this.gst = {};
    }
    return DefaultConfig;
}());
export { DefaultConfig };
if (false) {
    /** @type {?} */
    DefaultConfig.prototype.pageTracking;
    /** @type {?} */
    DefaultConfig.prototype.developerMode;
    /** @type {?} */
    DefaultConfig.prototype.ga;
    /** @type {?} */
    DefaultConfig.prototype.appInsights;
    /** @type {?} */
    DefaultConfig.prototype.gtm;
    /** @type {?} */
    DefaultConfig.prototype.gst;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcnRpY3MyLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXJ0aWNzMi8iLCJzb3VyY2VzIjpbImFuZ3VsYXJ0aWNzMi1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLDZDQU9DOzs7Ozs7SUFMQyx5REFBaUM7O0lBQ2pDLHlDQUFZOzs7OztJQUVaLDRDQUFrQjs7SUFDbEIsOENBQXFCOzs7OztBQUd2Qix5Q0FFQzs7O0lBREMscUNBQWU7Ozs7O0FBR2pCLDhDQUVDOzs7SUFEQywwQ0FBWTs7Ozs7QUFHZCxpREFLQzs7O0lBSkMsa0RBQWlCOztJQUNqQiw2Q0FBYTs7SUFDYixrREFBc0I7O0lBQ3RCLGdEQUFzQzs7Ozs7QUFHeEMsMENBWUM7OztJQVhDLHFEQUErQjs7SUFDL0Isd0NBQWlCOztJQUNqQiw4Q0FBb0M7Ozs7O0lBRXBDLHdDQUFrQjs7Ozs7SUFFbEIseUNBQW1COzs7OztJQUVuQixnREFBMEI7Ozs7O0lBRTFCLHlDQUFrQjs7Ozs7QUFHcEIsMENBUUM7OztJQVBDLDRDQUE0Qzs7Ozs7SUFFNUMsNkNBQXVCOztJQUN2QixrQ0FBcUM7O0lBQ3JDLDJDQUEwQzs7SUFDMUMsbUNBQXVDOztJQUN2QyxtQ0FBMEM7O0FBRzVDO0lBQUE7UUFDRSxpQkFBWSxHQUFHO1lBQ2IscUJBQXFCLEVBQUUsSUFBSTtZQUMzQixRQUFRLEVBQUUsRUFBRTtZQUNaLGNBQWMsRUFBRSxFQUFFO1lBQ2xCLFFBQVEsRUFBRSxLQUFLO1lBQ2YsU0FBUyxFQUFFLEtBQUs7WUFDaEIsZ0JBQWdCLEVBQUUsS0FBSztZQUN2QixTQUFTLEVBQUUscUZBQXFGO1NBQ2pHLENBQUM7UUFDRixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixPQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ1IsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsUUFBRyxHQUFHLEVBQUUsQ0FBQztRQUNULFFBQUcsR0FBRyxFQUFFLENBQUM7SUFDWCxDQUFDO0lBQUQsb0JBQUM7QUFBRCxDQUFDLEFBZkQsSUFlQzs7OztJQWRDLHFDQVFFOztJQUNGLHNDQUFzQjs7SUFDdEIsMkJBQVE7O0lBQ1Isb0NBQWlCOztJQUNqQiw0QkFBUzs7SUFDVCw0QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgR29vZ2xlQW5hbHl0aWNzU2V0dGluZ3Mge1xuICAvKiogYXJyYXkgb2YgYWRkaXRpb25hbCBhY2NvdW50IG5hbWVzIChvbmx5IHdvcmtzIGZvciBhbmFseXRpY3NqcykgKi9cbiAgYWRkaXRpb25hbEFjY291bnROYW1lczogc3RyaW5nW107XG4gIHVzZXJJZDogYW55O1xuICAvKiogc2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9hbmFseXRpY3Nqcy9maWVsZC1yZWZlcmVuY2UjdHJhbnNwb3J0ICovXG4gIHRyYW5zcG9ydDogc3RyaW5nO1xuICBhbm9ueW1pemVJcDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBJbnNpZ2h0c1NldHRpbmdzIHtcbiAgdXNlcklkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR29vZ2xlVGFnTWFuYWdlclNldHRpbmdzIHtcbiAgdXNlcklkOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR29vZ2xlR2xvYmFsU2l0ZVRhZ1NldHRpbmdzIHtcbiAgdHJhY2tpbmdJZHM6IGFueTtcbiAgdXNlcklkPzogYW55O1xuICBhbm9ueW1pemVJcD86IGJvb2xlYW47XG4gIGN1c3RvbU1hcD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFnZVRyYWNraW5nU2V0dGluZ3Mge1xuICBhdXRvVHJhY2tWaXJ0dWFsUGFnZXM6IGJvb2xlYW47XG4gIGJhc2VQYXRoOiBzdHJpbmc7XG4gIGV4Y2x1ZGVkUm91dGVzOiAoc3RyaW5nIHwgUmVnRXhwKVtdO1xuICAvKiogZHJvcCBpZHMgZnJvbSB1cmwgYC9zZWN0aW9ucy8xMjMvcGFnZXMvNDU2YCAtPiBgL3NlY3Rpb25zL3BhZ2VzYCAqL1xuICBjbGVhcklkczogYm9vbGVhbjtcbiAgLyoqIGRyb3AgY29udGVudHMgb2YgdXJsIGFmdGVyIGhhc2ggbWFya2VyIGAvY2FsbGJhY2sjYXV0aGNvZGU9MTIzNGAgLT4gYC9jYWxsYmFja2AgKi9cbiAgY2xlYXJIYXNoOiBib29sZWFuO1xuICAvKiogZHJvcCBxdWVyeSBwYXJhbXMgZnJvbSB1cmwgYC9zZWN0aW9ucy8xMjMvcGFnZXM/cGFyYW09NDU2JnBhcmFtMj03ODlgIC0+IGAvc2VjdGlvbnMvMTIzL3BhZ2VzYCAqL1xuICBjbGVhclF1ZXJ5UGFyYW1zOiBib29sZWFuO1xuICAvKiogdXNlZCB3aXRoIGNsZWFySWRzLCBkZWZpbmUgdGhlIG1hdGNoZXIgdG8gY2xlYXIgdXJsIHBhcnRzICovXG4gIGlkc1JlZ0V4cDogUmVnRXhwO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFuZ3VsYXJ0aWNzMlNldHRpbmdzIHtcbiAgcGFnZVRyYWNraW5nOiBQYXJ0aWFsPFBhZ2VUcmFja2luZ1NldHRpbmdzPjtcbiAgLyoqIERpc2FibGUgcGFnZSB0cmFja2luZyAqL1xuICBkZXZlbG9wZXJNb2RlOiBib29sZWFuO1xuICBnYTogUGFydGlhbDxHb29nbGVBbmFseXRpY3NTZXR0aW5ncz47XG4gIGFwcEluc2lnaHRzOiBQYXJ0aWFsPEFwcEluc2lnaHRzU2V0dGluZ3M+O1xuICBndG06IFBhcnRpYWw8R29vZ2xlVGFnTWFuYWdlclNldHRpbmdzPjtcbiAgZ3N0OiBQYXJ0aWFsPEdvb2dsZUdsb2JhbFNpdGVUYWdTZXR0aW5ncz47XG59XG5cbmV4cG9ydCBjbGFzcyBEZWZhdWx0Q29uZmlnIGltcGxlbWVudHMgQW5ndWxhcnRpY3MyU2V0dGluZ3Mge1xuICBwYWdlVHJhY2tpbmcgPSB7XG4gICAgYXV0b1RyYWNrVmlydHVhbFBhZ2VzOiB0cnVlLFxuICAgIGJhc2VQYXRoOiAnJyxcbiAgICBleGNsdWRlZFJvdXRlczogW10sXG4gICAgY2xlYXJJZHM6IGZhbHNlLFxuICAgIGNsZWFySGFzaDogZmFsc2UsXG4gICAgY2xlYXJRdWVyeVBhcmFtczogZmFsc2UsXG4gICAgaWRzUmVnRXhwOiAvXlxcZCskfF5bMC05YS1mQS1GXXs4fS1bMC05YS1mQS1GXXs0fS1bMC05YS1mQS1GXXs0fS1bMC05YS1mQS1GXXs0fS1bMC05YS1mQS1GXXsxMn0kLyxcbiAgfTtcbiAgZGV2ZWxvcGVyTW9kZSA9IGZhbHNlO1xuICBnYSA9IHt9O1xuICBhcHBJbnNpZ2h0cyA9IHt9O1xuICBndG0gPSB7fTtcbiAgZ3N0ID0ge307XG59XG4iXX0=