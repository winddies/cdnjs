/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { Angulartics2, Angulartics2OnModule, ANGULARTICS2_TOKEN, RouterlessTracking, } from 'angulartics2';
export class Angulartics2RouterlessModule {
    /**
     * @param {?=} settings
     * @return {?}
     */
    static forRoot(settings = {}) {
        return {
            ngModule: Angulartics2RouterlessModule,
            providers: [
                { provide: ANGULARTICS2_TOKEN, useValue: { settings } },
                RouterlessTracking,
                Angulartics2,
            ],
        };
    }
}
Angulartics2RouterlessModule.decorators = [
    { type: NgModule, args: [{
                imports: [Angulartics2OnModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVybGVzcy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFydGljczIvcm91dGVybGVzc21vZHVsZS8iLCJzb3VyY2VzIjpbInJvdXRlcmxlc3MubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQ0wsWUFBWSxFQUNaLG9CQUFvQixFQUVwQixrQkFBa0IsRUFDbEIsa0JBQWtCLEdBQ25CLE1BQU0sY0FBYyxDQUFDO0FBS3RCLE1BQU0sT0FBTyw0QkFBNEI7Ozs7O0lBQ3ZDLE1BQU0sQ0FBQyxPQUFPLENBQ1osV0FBMEMsRUFBRTtRQUU1QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLDRCQUE0QjtZQUN0QyxTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUU7Z0JBQ3ZELGtCQUFrQjtnQkFDbEIsWUFBWTthQUNiO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQWZGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQzthQUNoQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIEFuZ3VsYXJ0aWNzMixcbiAgQW5ndWxhcnRpY3MyT25Nb2R1bGUsXG4gIEFuZ3VsYXJ0aWNzMlNldHRpbmdzLFxuICBBTkdVTEFSVElDUzJfVE9LRU4sXG4gIFJvdXRlcmxlc3NUcmFja2luZyxcbn0gZnJvbSAnYW5ndWxhcnRpY3MyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0FuZ3VsYXJ0aWNzMk9uTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhcnRpY3MyUm91dGVybGVzc01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KFxuICAgIHNldHRpbmdzOiBQYXJ0aWFsPEFuZ3VsYXJ0aWNzMlNldHRpbmdzPiA9IHt9LFxuICApOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEFuZ3VsYXJ0aWNzMlJvdXRlcmxlc3NNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBBTkdVTEFSVElDUzJfVE9LRU4sIHVzZVZhbHVlOiB7IHNldHRpbmdzIH0gfSxcbiAgICAgICAgUm91dGVybGVzc1RyYWNraW5nLFxuICAgICAgICBBbmd1bGFydGljczIsXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==