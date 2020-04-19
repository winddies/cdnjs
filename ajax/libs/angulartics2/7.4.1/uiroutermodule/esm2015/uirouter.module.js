/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { Angulartics2, Angulartics2OnModule, ANGULARTICS2_TOKEN, RouterlessTracking, } from 'angulartics2';
import { UIRouterTracking } from './uirouter';
export class Angulartics2UirouterModule {
    /**
     * @param {?=} settings
     * @return {?}
     */
    static forRoot(settings = {}) {
        return {
            ngModule: Angulartics2UirouterModule,
            providers: [
                { provide: ANGULARTICS2_TOKEN, useValue: { settings } },
                { provide: RouterlessTracking, useClass: UIRouterTracking },
                Angulartics2,
            ],
        };
    }
}
Angulartics2UirouterModule.decorators = [
    { type: NgModule, args: [{
                imports: [Angulartics2OnModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWlyb3V0ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhcnRpY3MyL3Vpcm91dGVybW9kdWxlLyIsInNvdXJjZXMiOlsidWlyb3V0ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQ0wsWUFBWSxFQUNaLG9CQUFvQixFQUVwQixrQkFBa0IsRUFDbEIsa0JBQWtCLEdBQ25CLE1BQU0sY0FBYyxDQUFDO0FBQ3RCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUs5QyxNQUFNLE9BQU8sMEJBQTBCOzs7OztJQUNyQyxNQUFNLENBQUMsT0FBTyxDQUNaLFdBQTBDLEVBQUU7UUFFNUMsT0FBTztZQUNMLFFBQVEsRUFBRSwwQkFBMEI7WUFDcEMsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFO2dCQUN2RCxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUU7Z0JBQzNELFlBQVk7YUFDYjtTQUNGLENBQUM7SUFDSixDQUFDOzs7WUFmRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7YUFDaEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBBbmd1bGFydGljczIsXG4gIEFuZ3VsYXJ0aWNzMk9uTW9kdWxlLFxuICBBbmd1bGFydGljczJTZXR0aW5ncyxcbiAgQU5HVUxBUlRJQ1MyX1RPS0VOLFxuICBSb3V0ZXJsZXNzVHJhY2tpbmcsXG59IGZyb20gJ2FuZ3VsYXJ0aWNzMic7XG5pbXBvcnQgeyBVSVJvdXRlclRyYWNraW5nIH0gZnJvbSAnLi91aXJvdXRlcic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtBbmd1bGFydGljczJPbk1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJ0aWNzMlVpcm91dGVyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoXG4gICAgc2V0dGluZ3M6IFBhcnRpYWw8QW5ndWxhcnRpY3MyU2V0dGluZ3M+ID0ge30sXG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQW5ndWxhcnRpY3MyVWlyb3V0ZXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBBTkdVTEFSVElDUzJfVE9LRU4sIHVzZVZhbHVlOiB7IHNldHRpbmdzIH0gfSxcbiAgICAgICAgeyBwcm92aWRlOiBSb3V0ZXJsZXNzVHJhY2tpbmcsIHVzZUNsYXNzOiBVSVJvdXRlclRyYWNraW5nIH0sXG4gICAgICAgIEFuZ3VsYXJ0aWNzMixcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19