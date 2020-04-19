import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input, NgModule, Renderer2, } from '@angular/core';
import { Angulartics2 } from './angulartics2-core';
var Angulartics2On = /** @class */ (function () {
    function Angulartics2On(elRef, angulartics2, renderer) {
        this.elRef = elRef;
        this.angulartics2 = angulartics2;
        this.renderer = renderer;
        this.angularticsProperties = {};
    }
    Angulartics2On.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.renderer.listen(this.elRef.nativeElement, this.angulartics2On || 'click', function (event) { return _this.eventTrack(event); });
    };
    Angulartics2On.prototype.eventTrack = function (event) {
        var action = this.angularticsAction; // || this.inferEventName();
        var properties = tslib_1.__assign({}, this.angularticsProperties, { eventType: event.type });
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
            action: action,
            properties: properties,
        });
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
    return Angulartics2On;
}());
export { Angulartics2On };
var Angulartics2OnModule = /** @class */ (function () {
    function Angulartics2OnModule() {
    }
    Angulartics2OnModule = tslib_1.__decorate([
        NgModule({
            declarations: [Angulartics2On],
            exports: [Angulartics2On],
        })
    ], Angulartics2OnModule);
    return Angulartics2OnModule;
}());
export { Angulartics2OnModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcnRpY3MyT24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFydGljczIvIiwic291cmNlcyI6WyJhbmd1bGFydGljczJPbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLFFBQVEsRUFDUixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBR25EO0lBU0Usd0JBQ1UsS0FBaUIsRUFDakIsWUFBMEIsRUFDMUIsUUFBbUI7UUFGbkIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBTHBCLDBCQUFxQixHQUFRLEVBQUUsQ0FBQztJQU1yQyxDQUFDO0lBRUwsMkNBQWtCLEdBQWxCO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQ3hCLElBQUksQ0FBQyxjQUFjLElBQUksT0FBTyxFQUM5QixVQUFDLEtBQVksSUFBSyxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQXRCLENBQXNCLENBQ3pDLENBQUM7SUFDSixDQUFDO0lBRUQsbUNBQVUsR0FBVixVQUFXLEtBQVk7UUFDckIsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsNEJBQTRCO1FBQ25FLElBQU0sVUFBVSx3QkFDWCxJQUFJLENBQUMscUJBQXFCLElBQzdCLFNBQVMsRUFBRSxLQUFLLENBQUMsSUFBSSxHQUN0QixDQUFDO1FBRUYsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDNUIsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUM7U0FDaEQ7UUFDRCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN6QixVQUFVLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztTQUMxQztRQUNELElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLFVBQVUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1NBQzFDO1FBRUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1lBQ2hDLE1BQU0sUUFBQTtZQUNOLFVBQVUsWUFBQTtTQUNYLENBQUMsQ0FBQztJQUNMLENBQUM7SUExQ3dCO1FBQXhCLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQzs7MERBQXdCO0lBQ3ZDO1FBQVIsS0FBSyxFQUFFOzs2REFBMkI7SUFDMUI7UUFBUixLQUFLLEVBQUU7OytEQUE2QjtJQUM1QjtRQUFSLEtBQUssRUFBRTs7NERBQTBCO0lBQ3pCO1FBQVIsS0FBSyxFQUFFOzs0REFBMEI7SUFDekI7UUFBUixLQUFLLEVBQUU7O2lFQUFpQztJQVA5QixjQUFjO1FBRDFCLFNBQVMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxDQUFDO2lEQVd6QixVQUFVO1lBQ0gsWUFBWTtZQUNoQixTQUFTO09BWmxCLGNBQWMsQ0F1RDFCO0lBQUQscUJBQUM7Q0FBQSxBQXZERCxJQXVEQztTQXZEWSxjQUFjO0FBNkQzQjtJQUFBO0lBQW1DLENBQUM7SUFBdkIsb0JBQW9CO1FBSmhDLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRSxDQUFDLGNBQWMsQ0FBQztZQUM5QixPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUM7U0FDMUIsQ0FBQztPQUNXLG9CQUFvQixDQUFHO0lBQUQsMkJBQUM7Q0FBQSxBQUFwQyxJQUFvQztTQUF2QixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBOZ01vZHVsZSxcbiAgUmVuZGVyZXIyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFuZ3VsYXJ0aWNzMiB9IGZyb20gJy4vYW5ndWxhcnRpY3MyLWNvcmUnO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbYW5ndWxhcnRpY3MyT25dJyB9KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJ0aWNzMk9uIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcbiAgQElucHV0KCdhbmd1bGFydGljczJPbicpIGFuZ3VsYXJ0aWNzMk9uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGFuZ3VsYXJ0aWNzQWN0aW9uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGFuZ3VsYXJ0aWNzQ2F0ZWdvcnk6IHN0cmluZztcbiAgQElucHV0KCkgYW5ndWxhcnRpY3NMYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBhbmd1bGFydGljc1ZhbHVlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGFuZ3VsYXJ0aWNzUHJvcGVydGllczogYW55ID0ge307XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGFuZ3VsYXJ0aWNzMjogQW5ndWxhcnRpY3MyLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHsgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihcbiAgICAgIHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMuYW5ndWxhcnRpY3MyT24gfHwgJ2NsaWNrJyxcbiAgICAgIChldmVudDogRXZlbnQpID0+IHRoaXMuZXZlbnRUcmFjayhldmVudCksXG4gICAgKTtcbiAgfVxuXG4gIGV2ZW50VHJhY2soZXZlbnQ6IEV2ZW50KSB7XG4gICAgY29uc3QgYWN0aW9uID0gdGhpcy5hbmd1bGFydGljc0FjdGlvbjsgLy8gfHwgdGhpcy5pbmZlckV2ZW50TmFtZSgpO1xuICAgIGNvbnN0IHByb3BlcnRpZXM6IGFueSA9IHtcbiAgICAgIC4uLnRoaXMuYW5ndWxhcnRpY3NQcm9wZXJ0aWVzLFxuICAgICAgZXZlbnRUeXBlOiBldmVudC50eXBlLFxuICAgIH07XG5cbiAgICBpZiAodGhpcy5hbmd1bGFydGljc0NhdGVnb3J5KSB7XG4gICAgICBwcm9wZXJ0aWVzLmNhdGVnb3J5ID0gdGhpcy5hbmd1bGFydGljc0NhdGVnb3J5O1xuICAgIH1cbiAgICBpZiAodGhpcy5hbmd1bGFydGljc0xhYmVsKSB7XG4gICAgICBwcm9wZXJ0aWVzLmxhYmVsID0gdGhpcy5hbmd1bGFydGljc0xhYmVsO1xuICAgIH1cbiAgICBpZiAodGhpcy5hbmd1bGFydGljc1ZhbHVlKSB7XG4gICAgICBwcm9wZXJ0aWVzLnZhbHVlID0gdGhpcy5hbmd1bGFydGljc1ZhbHVlO1xuICAgIH1cblxuICAgIHRoaXMuYW5ndWxhcnRpY3MyLmV2ZW50VHJhY2submV4dCh7XG4gICAgICBhY3Rpb24sXG4gICAgICBwcm9wZXJ0aWVzLFxuICAgIH0pO1xuICB9XG5cbiAgLypwcml2YXRlIGlzQ29tbWFuZCgpIHtcbiAgICByZXR1cm4gWydhOicsICdidXR0b246JywgJ2J1dHRvbjpidXR0b24nLCAnYnV0dG9uOnN1Ym1pdCcsICdpbnB1dDpidXR0b24nLCAnaW5wdXQ6c3VibWl0J10uaW5kZXhPZihcbiAgICAgIGdldERPTSgpLnRhZ05hbWUodGhpcy5lbCkudG9Mb3dlckNhc2UoKSArICc6JyArIChnZXRET00oKS50eXBlKHRoaXMuZWwpIHx8ICcnKSkgPj0gMDtcbiAgfVxuXG4gIHByaXZhdGUgaW5mZXJFdmVudE5hbWUoKSB7XG4gICAgaWYgKHRoaXMuaXNDb21tYW5kKCkpIHJldHVybiBnZXRET00oKS5nZXRUZXh0KHRoaXMuZWwpIHx8IGdldERPTSgpLmdldFZhbHVlKHRoaXMuZWwpO1xuICAgIHJldHVybiBnZXRET00oKS5nZXRQcm9wZXJ0eSh0aGlzLmVsLCAnaWQnKSB8fCBnZXRET00oKS5nZXRQcm9wZXJ0eSh0aGlzLmVsLCAnbmFtZScpIHx8IGdldERPTSgpLnRhZ05hbWUodGhpcy5lbCk7XG4gIH0qL1xufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtBbmd1bGFydGljczJPbl0sXG4gIGV4cG9ydHM6IFtBbmd1bGFydGljczJPbl0sXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJ0aWNzMk9uTW9kdWxlIHt9XG4iXX0=