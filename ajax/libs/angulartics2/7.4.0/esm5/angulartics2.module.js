/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { AngularRouterTracking } from './angular-router';
import { Angulartics2 } from './angulartics2-core';
import { ANGULARTICS2_TOKEN } from './angulartics2-token';
import { Angulartics2On, Angulartics2OnModule } from './angulartics2On';
import { RouterlessTracking } from './routerless';
var Angulartics2Module = /** @class */ (function () {
    function Angulartics2Module() {
    }
    /**
     * @param {?=} settings
     * @return {?}
     */
    Angulartics2Module.forRoot = /**
     * @param {?=} settings
     * @return {?}
     */
    function (settings) {
        if (settings === void 0) { settings = {}; }
        return {
            ngModule: Angulartics2Module,
            providers: [
                { provide: ANGULARTICS2_TOKEN, useValue: { settings: settings } },
                { provide: RouterlessTracking, useClass: AngularRouterTracking },
                Angulartics2,
            ],
        };
    };
    Angulartics2Module.decorators = [
        { type: NgModule, args: [{
                    imports: [Angulartics2OnModule],
                    exports: [Angulartics2On],
                },] }
    ];
    return Angulartics2Module;
}());
export { Angulartics2Module };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcnRpY3MyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXJ0aWNzMi8iLCJzb3VyY2VzIjpbImFuZ3VsYXJ0aWNzMi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRXpELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRWxEO0lBQUE7SUFpQkEsQ0FBQzs7Ozs7SUFaUSwwQkFBTzs7OztJQUFkLFVBQ0UsUUFBNEM7UUFBNUMseUJBQUEsRUFBQSxhQUE0QztRQUU1QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLEVBQUUsUUFBUSxVQUFBLEVBQUUsRUFBRTtnQkFDdkQsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLHFCQUFxQixFQUFFO2dCQUNoRSxZQUFZO2FBQ2I7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBaEJGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztvQkFDL0IsT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDO2lCQUMxQjs7SUFjRCx5QkFBQztDQUFBLEFBakJELElBaUJDO1NBYlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQW5ndWxhclJvdXRlclRyYWNraW5nIH0gZnJvbSAnLi9hbmd1bGFyLXJvdXRlcic7XG5pbXBvcnQgeyBBbmd1bGFydGljczJTZXR0aW5ncyB9IGZyb20gJy4vYW5ndWxhcnRpY3MyLWNvbmZpZyc7XG5pbXBvcnQgeyBBbmd1bGFydGljczIgfSBmcm9tICcuL2FuZ3VsYXJ0aWNzMi1jb3JlJztcbmltcG9ydCB7IEFOR1VMQVJUSUNTMl9UT0tFTiB9IGZyb20gJy4vYW5ndWxhcnRpY3MyLXRva2VuJztcbmltcG9ydCB7IEFuZ3VsYXJ0aWNzMk9uLCBBbmd1bGFydGljczJPbk1vZHVsZSB9IGZyb20gJy4vYW5ndWxhcnRpY3MyT24nO1xuaW1wb3J0IHsgUm91dGVybGVzc1RyYWNraW5nIH0gZnJvbSAnLi9yb3V0ZXJsZXNzJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0FuZ3VsYXJ0aWNzMk9uTW9kdWxlXSxcbiAgZXhwb3J0czogW0FuZ3VsYXJ0aWNzMk9uXSxcbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhcnRpY3MyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoXG4gICAgc2V0dGluZ3M6IFBhcnRpYWw8QW5ndWxhcnRpY3MyU2V0dGluZ3M+ID0ge30sXG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQW5ndWxhcnRpY3MyTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogQU5HVUxBUlRJQ1MyX1RPS0VOLCB1c2VWYWx1ZTogeyBzZXR0aW5ncyB9IH0sXG4gICAgICAgIHsgcHJvdmlkZTogUm91dGVybGVzc1RyYWNraW5nLCB1c2VDbGFzczogQW5ndWxhclJvdXRlclRyYWNraW5nIH0sXG4gICAgICAgIEFuZ3VsYXJ0aWNzMixcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19