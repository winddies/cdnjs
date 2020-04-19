import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { TransitionService } from '@uirouter/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@uirouter/core";
/**
 * Track Route changes for applications using UI-Router
 *
 * @link https://ui-router.github.io/ng2/docs/latest/
 *
 * referenced: https://github.com/ui-router/sample-app-angular/blob/9adb533b85c0f0fccef23968489cca0a5ec84654/src/app/util/ga.ts
 */
let UIRouterTracking = class UIRouterTracking {
    constructor(transitionService) {
        this.transitionService = transitionService;
    }
    path(trans) {
        return trans.$to().url.format(trans.params());
    }
    trackLocation(settings) {
        const subject = new Subject();
        this.transitionService.onSuccess({}, trans => {
            return subject.next({ url: this.path(trans) });
        }, {
            priority: -10000,
        });
        return subject;
    }
    prepareExternalUrl(url) {
        return url;
    }
};
UIRouterTracking.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function UIRouterTracking_Factory() { return new UIRouterTracking(i0.ɵɵinject(i1.TransitionService)); }, token: UIRouterTracking, providedIn: "root" });
UIRouterTracking = tslib_1.__decorate([
    Injectable({ providedIn: 'root' }),
    tslib_1.__metadata("design:paramtypes", [TransitionService])
], UIRouterTracking);
export { UIRouterTracking };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWlyb3V0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFydGljczIvdWlyb3V0ZXJtb2R1bGUvIiwic291cmNlcyI6WyJ1aXJvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUvRCxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7QUFJM0M7Ozs7OztHQU1HO0FBRUgsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUFDM0IsWUFBb0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFBRyxDQUFDO0lBRTVELElBQUksQ0FBQyxLQUFpQjtRQUNwQixPQUFPLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxhQUFhLENBQUMsUUFBUTtRQUNwQixNQUFNLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBc0IsQ0FBQztRQUNsRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUM5QixFQUFFLEVBQ0YsS0FBSyxDQUFDLEVBQUU7WUFDTixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDakQsQ0FBQyxFQUNEO1lBQ0UsUUFBUSxFQUFFLENBQUMsS0FBSztTQUNqQixDQUNGLENBQUM7UUFDRixPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsa0JBQWtCLENBQUMsR0FBVztRQUM1QixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Q0FDRixDQUFBOztBQXhCWSxnQkFBZ0I7SUFENUIsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDOzZDQUVNLGlCQUFpQjtHQUQ3QyxnQkFBZ0IsQ0F3QjVCO1NBeEJZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyYW5zaXRpb24sIFRyYW5zaXRpb25TZXJ2aWNlIH0gZnJvbSAnQHVpcm91dGVyL2NvcmUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFJvdXRlcmxlc3NUcmFja2luZywgVHJhY2tOYXZpZ2F0aW9uRW5kIH0gZnJvbSAnYW5ndWxhcnRpY3MyJztcblxuLyoqXG4gKiBUcmFjayBSb3V0ZSBjaGFuZ2VzIGZvciBhcHBsaWNhdGlvbnMgdXNpbmcgVUktUm91dGVyXG4gKlxuICogQGxpbmsgaHR0cHM6Ly91aS1yb3V0ZXIuZ2l0aHViLmlvL25nMi9kb2NzL2xhdGVzdC9cbiAqXG4gKiByZWZlcmVuY2VkOiBodHRwczovL2dpdGh1Yi5jb20vdWktcm91dGVyL3NhbXBsZS1hcHAtYW5ndWxhci9ibG9iLzlhZGI1MzNiODVjMGYwZmNjZWYyMzk2ODQ4OWNjYTBhNWVjODQ2NTQvc3JjL2FwcC91dGlsL2dhLnRzXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgVUlSb3V0ZXJUcmFja2luZyBpbXBsZW1lbnRzIFJvdXRlcmxlc3NUcmFja2luZyB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNpdGlvblNlcnZpY2U6IFRyYW5zaXRpb25TZXJ2aWNlKSB7fVxuXG4gIHBhdGgodHJhbnM6IFRyYW5zaXRpb24pIHtcbiAgICByZXR1cm4gdHJhbnMuJHRvKCkudXJsLmZvcm1hdCh0cmFucy5wYXJhbXMoKSk7XG4gIH1cblxuICB0cmFja0xvY2F0aW9uKHNldHRpbmdzKTogT2JzZXJ2YWJsZTxUcmFja05hdmlnYXRpb25FbmQ+IHtcbiAgICBjb25zdCBzdWJqZWN0ID0gbmV3IFN1YmplY3Q8VHJhY2tOYXZpZ2F0aW9uRW5kPigpO1xuICAgIHRoaXMudHJhbnNpdGlvblNlcnZpY2Uub25TdWNjZXNzKFxuICAgICAge30sXG4gICAgICB0cmFucyA9PiB7XG4gICAgICAgIHJldHVybiBzdWJqZWN0Lm5leHQoeyB1cmw6IHRoaXMucGF0aCh0cmFucykgfSk7XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwcmlvcml0eTogLTEwMDAwLFxuICAgICAgfSxcbiAgICApO1xuICAgIHJldHVybiBzdWJqZWN0O1xuICB9XG5cbiAgcHJlcGFyZUV4dGVybmFsVXJsKHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG59XG4iXX0=