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
export class DefaultConfig {
    constructor() {
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
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcnRpY3MyLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXJ0aWNzMi8iLCJzb3VyY2VzIjpbImFuZ3VsYXJ0aWNzMi1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLDZDQU9DOzs7Ozs7SUFMQyx5REFBaUM7O0lBQ2pDLHlDQUFZOzs7OztJQUVaLDRDQUFrQjs7SUFDbEIsOENBQXFCOzs7OztBQUd2Qix5Q0FFQzs7O0lBREMscUNBQWU7Ozs7O0FBR2pCLDhDQUVDOzs7SUFEQywwQ0FBWTs7Ozs7QUFHZCxpREFLQzs7O0lBSkMsa0RBQWlCOztJQUNqQiw2Q0FBYTs7SUFDYixrREFBc0I7O0lBQ3RCLGdEQUFzQzs7Ozs7QUFHeEMsMENBWUM7OztJQVhDLHFEQUErQjs7SUFDL0Isd0NBQWlCOztJQUNqQiw4Q0FBb0M7Ozs7O0lBRXBDLHdDQUFrQjs7Ozs7SUFFbEIseUNBQW1COzs7OztJQUVuQixnREFBMEI7Ozs7O0lBRTFCLHlDQUFrQjs7Ozs7QUFHcEIsMENBUUM7OztJQVBDLDRDQUE0Qzs7Ozs7SUFFNUMsNkNBQXVCOztJQUN2QixrQ0FBcUM7O0lBQ3JDLDJDQUEwQzs7SUFDMUMsbUNBQXVDOztJQUN2QyxtQ0FBMEM7O0FBRzVDLE1BQU0sT0FBTyxhQUFhO0lBQTFCO1FBQ0UsaUJBQVksR0FBRztZQUNiLHFCQUFxQixFQUFFLElBQUk7WUFDM0IsUUFBUSxFQUFFLEVBQUU7WUFDWixjQUFjLEVBQUUsRUFBRTtZQUNsQixRQUFRLEVBQUUsS0FBSztZQUNmLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLGdCQUFnQixFQUFFLEtBQUs7WUFDdkIsU0FBUyxFQUFFLHFGQUFxRjtTQUNqRyxDQUFDO1FBQ0Ysa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsT0FBRSxHQUFHLEVBQUUsQ0FBQztRQUNSLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLFFBQUcsR0FBRyxFQUFFLENBQUM7UUFDVCxRQUFHLEdBQUcsRUFBRSxDQUFDO0lBQ1gsQ0FBQztDQUFBOzs7SUFkQyxxQ0FRRTs7SUFDRixzQ0FBc0I7O0lBQ3RCLDJCQUFROztJQUNSLG9DQUFpQjs7SUFDakIsNEJBQVM7O0lBQ1QsNEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIEdvb2dsZUFuYWx5dGljc1NldHRpbmdzIHtcbiAgLyoqIGFycmF5IG9mIGFkZGl0aW9uYWwgYWNjb3VudCBuYW1lcyAob25seSB3b3JrcyBmb3IgYW5hbHl0aWNzanMpICovXG4gIGFkZGl0aW9uYWxBY2NvdW50TmFtZXM6IHN0cmluZ1tdO1xuICB1c2VySWQ6IGFueTtcbiAgLyoqIHNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vYW5hbHl0aWNzanMvZmllbGQtcmVmZXJlbmNlI3RyYW5zcG9ydCAqL1xuICB0cmFuc3BvcnQ6IHN0cmluZztcbiAgYW5vbnltaXplSXA6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwSW5zaWdodHNTZXR0aW5ncyB7XG4gIHVzZXJJZDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdvb2dsZVRhZ01hbmFnZXJTZXR0aW5ncyB7XG4gIHVzZXJJZDogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdvb2dsZUdsb2JhbFNpdGVUYWdTZXR0aW5ncyB7XG4gIHRyYWNraW5nSWRzOiBhbnk7XG4gIHVzZXJJZD86IGFueTtcbiAgYW5vbnltaXplSXA/OiBib29sZWFuO1xuICBjdXN0b21NYXA/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2VUcmFja2luZ1NldHRpbmdzIHtcbiAgYXV0b1RyYWNrVmlydHVhbFBhZ2VzOiBib29sZWFuO1xuICBiYXNlUGF0aDogc3RyaW5nO1xuICBleGNsdWRlZFJvdXRlczogKHN0cmluZyB8IFJlZ0V4cClbXTtcbiAgLyoqIGRyb3AgaWRzIGZyb20gdXJsIGAvc2VjdGlvbnMvMTIzL3BhZ2VzLzQ1NmAgLT4gYC9zZWN0aW9ucy9wYWdlc2AgKi9cbiAgY2xlYXJJZHM6IGJvb2xlYW47XG4gIC8qKiBkcm9wIGNvbnRlbnRzIG9mIHVybCBhZnRlciBoYXNoIG1hcmtlciBgL2NhbGxiYWNrI2F1dGhjb2RlPTEyMzRgIC0+IGAvY2FsbGJhY2tgICovXG4gIGNsZWFySGFzaDogYm9vbGVhbjtcbiAgLyoqIGRyb3AgcXVlcnkgcGFyYW1zIGZyb20gdXJsIGAvc2VjdGlvbnMvMTIzL3BhZ2VzP3BhcmFtPTQ1NiZwYXJhbTI9Nzg5YCAtPiBgL3NlY3Rpb25zLzEyMy9wYWdlc2AgKi9cbiAgY2xlYXJRdWVyeVBhcmFtczogYm9vbGVhbjtcbiAgLyoqIHVzZWQgd2l0aCBjbGVhcklkcywgZGVmaW5lIHRoZSBtYXRjaGVyIHRvIGNsZWFyIHVybCBwYXJ0cyAqL1xuICBpZHNSZWdFeHA6IFJlZ0V4cDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBbmd1bGFydGljczJTZXR0aW5ncyB7XG4gIHBhZ2VUcmFja2luZzogUGFydGlhbDxQYWdlVHJhY2tpbmdTZXR0aW5ncz47XG4gIC8qKiBEaXNhYmxlIHBhZ2UgdHJhY2tpbmcgKi9cbiAgZGV2ZWxvcGVyTW9kZTogYm9vbGVhbjtcbiAgZ2E6IFBhcnRpYWw8R29vZ2xlQW5hbHl0aWNzU2V0dGluZ3M+O1xuICBhcHBJbnNpZ2h0czogUGFydGlhbDxBcHBJbnNpZ2h0c1NldHRpbmdzPjtcbiAgZ3RtOiBQYXJ0aWFsPEdvb2dsZVRhZ01hbmFnZXJTZXR0aW5ncz47XG4gIGdzdDogUGFydGlhbDxHb29nbGVHbG9iYWxTaXRlVGFnU2V0dGluZ3M+O1xufVxuXG5leHBvcnQgY2xhc3MgRGVmYXVsdENvbmZpZyBpbXBsZW1lbnRzIEFuZ3VsYXJ0aWNzMlNldHRpbmdzIHtcbiAgcGFnZVRyYWNraW5nID0ge1xuICAgIGF1dG9UcmFja1ZpcnR1YWxQYWdlczogdHJ1ZSxcbiAgICBiYXNlUGF0aDogJycsXG4gICAgZXhjbHVkZWRSb3V0ZXM6IFtdLFxuICAgIGNsZWFySWRzOiBmYWxzZSxcbiAgICBjbGVhckhhc2g6IGZhbHNlLFxuICAgIGNsZWFyUXVlcnlQYXJhbXM6IGZhbHNlLFxuICAgIGlkc1JlZ0V4cDogL15cXGQrJHxeWzAtOWEtZkEtRl17OH0tWzAtOWEtZkEtRl17NH0tWzAtOWEtZkEtRl17NH0tWzAtOWEtZkEtRl17NH0tWzAtOWEtZkEtRl17MTJ9JC8sXG4gIH07XG4gIGRldmVsb3Blck1vZGUgPSBmYWxzZTtcbiAgZ2EgPSB7fTtcbiAgYXBwSW5zaWdodHMgPSB7fTtcbiAgZ3RtID0ge307XG4gIGdzdCA9IHt9O1xufVxuIl19