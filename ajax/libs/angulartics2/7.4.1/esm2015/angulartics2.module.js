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
export class Angulartics2Module {
    /**
     * @param {?=} settings
     * @return {?}
     */
    static forRoot(settings = {}) {
        return {
            ngModule: Angulartics2Module,
            providers: [
                { provide: ANGULARTICS2_TOKEN, useValue: { settings } },
                { provide: RouterlessTracking, useClass: AngularRouterTracking },
                Angulartics2,
            ],
        };
    }
}
Angulartics2Module.decorators = [
    { type: NgModule, args: [{
                imports: [Angulartics2OnModule],
                exports: [Angulartics2On],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcnRpY3MyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXJ0aWNzMi8iLCJzb3VyY2VzIjpbImFuZ3VsYXJ0aWNzMi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRXpELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBTWxELE1BQU0sT0FBTyxrQkFBa0I7Ozs7O0lBQzdCLE1BQU0sQ0FBQyxPQUFPLENBQ1osV0FBMEMsRUFBRTtRQUU1QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUU7Z0JBQ3ZELEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxxQkFBcUIsRUFBRTtnQkFDaEUsWUFBWTthQUNiO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQWhCRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7Z0JBQy9CLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQzthQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFuZ3VsYXJSb3V0ZXJUcmFja2luZyB9IGZyb20gJy4vYW5ndWxhci1yb3V0ZXInO1xuaW1wb3J0IHsgQW5ndWxhcnRpY3MyU2V0dGluZ3MgfSBmcm9tICcuL2FuZ3VsYXJ0aWNzMi1jb25maWcnO1xuaW1wb3J0IHsgQW5ndWxhcnRpY3MyIH0gZnJvbSAnLi9hbmd1bGFydGljczItY29yZSc7XG5pbXBvcnQgeyBBTkdVTEFSVElDUzJfVE9LRU4gfSBmcm9tICcuL2FuZ3VsYXJ0aWNzMi10b2tlbic7XG5pbXBvcnQgeyBBbmd1bGFydGljczJPbiwgQW5ndWxhcnRpY3MyT25Nb2R1bGUgfSBmcm9tICcuL2FuZ3VsYXJ0aWNzMk9uJztcbmltcG9ydCB7IFJvdXRlcmxlc3NUcmFja2luZyB9IGZyb20gJy4vcm91dGVybGVzcyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtBbmd1bGFydGljczJPbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtBbmd1bGFydGljczJPbl0sXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJ0aWNzMk1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KFxuICAgIHNldHRpbmdzOiBQYXJ0aWFsPEFuZ3VsYXJ0aWNzMlNldHRpbmdzPiA9IHt9LFxuICApOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEFuZ3VsYXJ0aWNzMk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IEFOR1VMQVJUSUNTMl9UT0tFTiwgdXNlVmFsdWU6IHsgc2V0dGluZ3MgfSB9LFxuICAgICAgICB7IHByb3ZpZGU6IFJvdXRlcmxlc3NUcmFja2luZywgdXNlQ2xhc3M6IEFuZ3VsYXJSb3V0ZXJUcmFja2luZyB9LFxuICAgICAgICBBbmd1bGFydGljczIsXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==