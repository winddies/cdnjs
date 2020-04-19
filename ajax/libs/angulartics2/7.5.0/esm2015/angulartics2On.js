import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input, NgModule, Renderer2, } from '@angular/core';
import { Angulartics2 } from './angulartics2-core';
let Angulartics2On = class Angulartics2On {
    constructor(elRef, angulartics2, renderer) {
        this.elRef = elRef;
        this.angulartics2 = angulartics2;
        this.renderer = renderer;
        this.angularticsProperties = {};
    }
    ngAfterContentInit() {
        this.renderer.listen(this.elRef.nativeElement, this.angulartics2On || 'click', (event) => this.eventTrack(event));
    }
    eventTrack(event) {
        const action = this.angularticsAction; // || this.inferEventName();
        const properties = Object.assign({}, this.angularticsProperties, { eventType: event.type });
        if (this.angularticsCategory) {
            properties.category = this.angularticsCategory;
        }
        if (this.angularticsLabel) {
            properties.label = this.angularticsLabel;
        }
        if (this.angularticsValue) {
            properties.value = this.angularticsValue;
        }
        this.angulartics2.eventTrack.next({
            action,
            properties,
        });
    }
};
tslib_1.__decorate([
    Input('angulartics2On'),
    tslib_1.__metadata("design:type", String)
], Angulartics2On.prototype, "angulartics2On", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], Angulartics2On.prototype, "angularticsAction", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], Angulartics2On.prototype, "angularticsCategory", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], Angulartics2On.prototype, "angularticsLabel", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], Angulartics2On.prototype, "angularticsValue", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], Angulartics2On.prototype, "angularticsProperties", void 0);
Angulartics2On = tslib_1.__decorate([
    Directive({ selector: '[angulartics2On]' }),
    tslib_1.__metadata("design:paramtypes", [ElementRef,
        Angulartics2,
        Renderer2])
], Angulartics2On);
export { Angulartics2On };
let Angulartics2OnModule = class Angulartics2OnModule {
};
Angulartics2OnModule = tslib_1.__decorate([
    NgModule({
        declarations: [Angulartics2On],
        exports: [Angulartics2On],
    })
], Angulartics2OnModule);
export { Angulartics2OnModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcnRpY3MyT24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFydGljczIvIiwic291cmNlcyI6WyJhbmd1bGFydGljczJPbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLFFBQVEsRUFDUixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBR25ELElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUFTekIsWUFDVSxLQUFpQixFQUNqQixZQUEwQixFQUMxQixRQUFtQjtRQUZuQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFMcEIsMEJBQXFCLEdBQVEsRUFBRSxDQUFDO0lBTXJDLENBQUM7SUFFTCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUN4QixJQUFJLENBQUMsY0FBYyxJQUFJLE9BQU8sRUFDOUIsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQ3pDLENBQUM7SUFDSixDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQVk7UUFDckIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsNEJBQTRCO1FBQ25FLE1BQU0sVUFBVSxxQkFDWCxJQUFJLENBQUMscUJBQXFCLElBQzdCLFNBQVMsRUFBRSxLQUFLLENBQUMsSUFBSSxHQUN0QixDQUFDO1FBRUYsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDNUIsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUM7U0FDaEQ7UUFDRCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN6QixVQUFVLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztTQUMxQztRQUNELElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLFVBQVUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1NBQzFDO1FBRUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1lBQ2hDLE1BQU07WUFDTixVQUFVO1NBQ1gsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQVdGLENBQUE7QUFyRDBCO0lBQXhCLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQzs7c0RBQXdCO0FBQ3ZDO0lBQVIsS0FBSyxFQUFFOzt5REFBMkI7QUFDMUI7SUFBUixLQUFLLEVBQUU7OzJEQUE2QjtBQUM1QjtJQUFSLEtBQUssRUFBRTs7d0RBQTBCO0FBQ3pCO0lBQVIsS0FBSyxFQUFFOzt3REFBMEI7QUFDekI7SUFBUixLQUFLLEVBQUU7OzZEQUFpQztBQVA5QixjQUFjO0lBRDFCLFNBQVMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxDQUFDOzZDQVd6QixVQUFVO1FBQ0gsWUFBWTtRQUNoQixTQUFTO0dBWmxCLGNBQWMsQ0F1RDFCO1NBdkRZLGNBQWM7QUE2RDNCLElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0NBQUcsQ0FBQTtBQUF2QixvQkFBb0I7SUFKaEMsUUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFLENBQUMsY0FBYyxDQUFDO1FBQzlCLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQztLQUMxQixDQUFDO0dBQ1csb0JBQW9CLENBQUc7U0FBdkIsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgTmdNb2R1bGUsXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbmd1bGFydGljczIgfSBmcm9tICcuL2FuZ3VsYXJ0aWNzMi1jb3JlJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2FuZ3VsYXJ0aWNzMk9uXScgfSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFydGljczJPbiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXG4gIEBJbnB1dCgnYW5ndWxhcnRpY3MyT24nKSBhbmd1bGFydGljczJPbjogc3RyaW5nO1xuICBASW5wdXQoKSBhbmd1bGFydGljc0FjdGlvbjogc3RyaW5nO1xuICBASW5wdXQoKSBhbmd1bGFydGljc0NhdGVnb3J5OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGFuZ3VsYXJ0aWNzTGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgYW5ndWxhcnRpY3NWYWx1ZTogc3RyaW5nO1xuICBASW5wdXQoKSBhbmd1bGFydGljc1Byb3BlcnRpZXM6IGFueSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBhbmd1bGFydGljczI6IEFuZ3VsYXJ0aWNzMixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7IH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oXG4gICAgICB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLmFuZ3VsYXJ0aWNzMk9uIHx8ICdjbGljaycsXG4gICAgICAoZXZlbnQ6IEV2ZW50KSA9PiB0aGlzLmV2ZW50VHJhY2soZXZlbnQpLFxuICAgICk7XG4gIH1cblxuICBldmVudFRyYWNrKGV2ZW50OiBFdmVudCkge1xuICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMuYW5ndWxhcnRpY3NBY3Rpb247IC8vIHx8IHRoaXMuaW5mZXJFdmVudE5hbWUoKTtcbiAgICBjb25zdCBwcm9wZXJ0aWVzOiBhbnkgPSB7XG4gICAgICAuLi50aGlzLmFuZ3VsYXJ0aWNzUHJvcGVydGllcyxcbiAgICAgIGV2ZW50VHlwZTogZXZlbnQudHlwZSxcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuYW5ndWxhcnRpY3NDYXRlZ29yeSkge1xuICAgICAgcHJvcGVydGllcy5jYXRlZ29yeSA9IHRoaXMuYW5ndWxhcnRpY3NDYXRlZ29yeTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYW5ndWxhcnRpY3NMYWJlbCkge1xuICAgICAgcHJvcGVydGllcy5sYWJlbCA9IHRoaXMuYW5ndWxhcnRpY3NMYWJlbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuYW5ndWxhcnRpY3NWYWx1ZSkge1xuICAgICAgcHJvcGVydGllcy52YWx1ZSA9IHRoaXMuYW5ndWxhcnRpY3NWYWx1ZTtcbiAgICB9XG5cbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5ldmVudFRyYWNrLm5leHQoe1xuICAgICAgYWN0aW9uLFxuICAgICAgcHJvcGVydGllcyxcbiAgICB9KTtcbiAgfVxuXG4gIC8qcHJpdmF0ZSBpc0NvbW1hbmQoKSB7XG4gICAgcmV0dXJuIFsnYTonLCAnYnV0dG9uOicsICdidXR0b246YnV0dG9uJywgJ2J1dHRvbjpzdWJtaXQnLCAnaW5wdXQ6YnV0dG9uJywgJ2lucHV0OnN1Ym1pdCddLmluZGV4T2YoXG4gICAgICBnZXRET00oKS50YWdOYW1lKHRoaXMuZWwpLnRvTG93ZXJDYXNlKCkgKyAnOicgKyAoZ2V0RE9NKCkudHlwZSh0aGlzLmVsKSB8fCAnJykpID49IDA7XG4gIH1cblxuICBwcml2YXRlIGluZmVyRXZlbnROYW1lKCkge1xuICAgIGlmICh0aGlzLmlzQ29tbWFuZCgpKSByZXR1cm4gZ2V0RE9NKCkuZ2V0VGV4dCh0aGlzLmVsKSB8fCBnZXRET00oKS5nZXRWYWx1ZSh0aGlzLmVsKTtcbiAgICByZXR1cm4gZ2V0RE9NKCkuZ2V0UHJvcGVydHkodGhpcy5lbCwgJ2lkJykgfHwgZ2V0RE9NKCkuZ2V0UHJvcGVydHkodGhpcy5lbCwgJ25hbWUnKSB8fCBnZXRET00oKS50YWdOYW1lKHRoaXMuZWwpO1xuICB9Ki9cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQW5ndWxhcnRpY3MyT25dLFxuICBleHBvcnRzOiBbQW5ndWxhcnRpY3MyT25dLFxufSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFydGljczJPbk1vZHVsZSB7fVxuIl19