/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { Angulartics2, Angulartics2OnModule, ANGULARTICS2_TOKEN, RouterlessTracking, } from 'angulartics2';
var Angulartics2RouterlessModule = /** @class */ (function () {
    function Angulartics2RouterlessModule() {
    }
    /**
     * @param {?=} settings
     * @return {?}
     */
    Angulartics2RouterlessModule.forRoot = /**
     * @param {?=} settings
     * @return {?}
     */
    function (settings) {
        if (settings === void 0) { settings = {}; }
        return {
            ngModule: Angulartics2RouterlessModule,
            providers: [
                { provide: ANGULARTICS2_TOKEN, useValue: { settings: settings } },
                RouterlessTracking,
                Angulartics2,
            ],
        };
    };
    Angulartics2RouterlessModule.decorators = [
        { type: NgModule, args: [{
                    imports: [Angulartics2OnModule],
                },] }
    ];
    return Angulartics2RouterlessModule;
}());
export { Angulartics2RouterlessModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVybGVzcy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFydGljczIvcm91dGVybGVzc21vZHVsZS8iLCJzb3VyY2VzIjpbInJvdXRlcmxlc3MubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQ0wsWUFBWSxFQUNaLG9CQUFvQixFQUVwQixrQkFBa0IsRUFDbEIsa0JBQWtCLEdBQ25CLE1BQU0sY0FBYyxDQUFDO0FBRXRCO0lBQUE7SUFnQkEsQ0FBQzs7Ozs7SUFaUSxvQ0FBTzs7OztJQUFkLFVBQ0UsUUFBNEM7UUFBNUMseUJBQUEsRUFBQSxhQUE0QztRQUU1QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLDRCQUE0QjtZQUN0QyxTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLEVBQUUsUUFBUSxVQUFBLEVBQUUsRUFBRTtnQkFDdkQsa0JBQWtCO2dCQUNsQixZQUFZO2FBQ2I7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBZkYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO2lCQUNoQzs7SUFjRCxtQ0FBQztDQUFBLEFBaEJELElBZ0JDO1NBYlksNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgQW5ndWxhcnRpY3MyLFxuICBBbmd1bGFydGljczJPbk1vZHVsZSxcbiAgQW5ndWxhcnRpY3MyU2V0dGluZ3MsXG4gIEFOR1VMQVJUSUNTMl9UT0tFTixcbiAgUm91dGVybGVzc1RyYWNraW5nLFxufSBmcm9tICdhbmd1bGFydGljczInO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQW5ndWxhcnRpY3MyT25Nb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFydGljczJSb3V0ZXJsZXNzTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoXG4gICAgc2V0dGluZ3M6IFBhcnRpYWw8QW5ndWxhcnRpY3MyU2V0dGluZ3M+ID0ge30sXG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQW5ndWxhcnRpY3MyUm91dGVybGVzc01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IEFOR1VMQVJUSUNTMl9UT0tFTiwgdXNlVmFsdWU6IHsgc2V0dGluZ3MgfSB9LFxuICAgICAgICBSb3V0ZXJsZXNzVHJhY2tpbmcsXG4gICAgICAgIEFuZ3VsYXJ0aWNzMixcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19