/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    /**
     * @return {?}
     */
    Angulartics2On.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.renderer.listen(this.elRef.nativeElement, this.angulartics2On || 'click', function (event) { return _this.eventTrack(event); });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    Angulartics2On.prototype.eventTrack = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var action = this.angularticsAction;
        // || this.inferEventName();
        /** @type {?} */
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
    Angulartics2On.decorators = [
        { type: Directive, args: [{ selector: '[angulartics2On]' },] }
    ];
    /** @nocollapse */
    Angulartics2On.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Angulartics2 },
        { type: Renderer2 }
    ]; };
    Angulartics2On.propDecorators = {
        angulartics2On: [{ type: Input, args: ['angulartics2On',] }],
        angularticsAction: [{ type: Input }],
        angularticsCategory: [{ type: Input }],
        angularticsLabel: [{ type: Input }],
        angularticsValue: [{ type: Input }],
        angularticsProperties: [{ type: Input }]
    };
    return Angulartics2On;
}());
export { Angulartics2On };
if (false) {
    /** @type {?} */
    Angulartics2On.prototype.angulartics2On;
    /** @type {?} */
    Angulartics2On.prototype.angularticsAction;
    /** @type {?} */
    Angulartics2On.prototype.angularticsCategory;
    /** @type {?} */
    Angulartics2On.prototype.angularticsLabel;
    /** @type {?} */
    Angulartics2On.prototype.angularticsValue;
    /** @type {?} */
    Angulartics2On.prototype.angularticsProperties;
    /**
     * @type {?}
     * @private
     */
    Angulartics2On.prototype.elRef;
    /**
     * @type {?}
     * @private
     */
    Angulartics2On.prototype.angulartics2;
    /**
     * @type {?}
     * @private
     */
    Angulartics2On.prototype.renderer;
}
var Angulartics2OnModule = /** @class */ (function () {
    function Angulartics2OnModule() {
    }
    Angulartics2OnModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [Angulartics2On],
                    exports: [Angulartics2On],
                },] }
    ];
    return Angulartics2OnModule;
}());
export { Angulartics2OnModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcnRpY3MyT24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFydGljczIvIiwic291cmNlcyI6WyJhbmd1bGFydGljczJPbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxRQUFRLEVBQ1IsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVuRDtJQVVFLHdCQUNVLEtBQWlCLEVBQ2pCLFlBQTBCLEVBQzFCLFFBQW1CO1FBRm5CLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUxwQiwwQkFBcUIsR0FBUSxFQUFFLENBQUM7SUFNckMsQ0FBQzs7OztJQUVMLDJDQUFrQjs7O0lBQWxCO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQ3hCLElBQUksQ0FBQyxjQUFjLElBQUksT0FBTyxFQUM5QixVQUFDLEtBQVksSUFBSyxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQXRCLENBQXNCLENBQ3pDLENBQUM7SUFDSixDQUFDOzs7OztJQUVELG1DQUFVOzs7O0lBQVYsVUFBVyxLQUFZOztZQUNmLE1BQU0sR0FBRyxJQUFJLENBQUMsaUJBQWlCOzs7WUFDL0IsVUFBVSx3QkFDWCxJQUFJLENBQUMscUJBQXFCLElBQzdCLFNBQVMsRUFBRSxLQUFLLENBQUMsSUFBSSxHQUN0QjtRQUVELElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFO1lBQzVCLFVBQVUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1NBQ2hEO1FBQ0QsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDekIsVUFBVSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7U0FDMUM7UUFDRCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN6QixVQUFVLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztTQUMxQztRQUVELElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztZQUNoQyxNQUFNLFFBQUE7WUFDTixVQUFVLFlBQUE7U0FDWCxDQUFDLENBQUM7SUFDTCxDQUFDOztnQkE3Q0YsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFFOzs7O2dCQVB6QyxVQUFVO2dCQUtILFlBQVk7Z0JBRm5CLFNBQVM7OztpQ0FPUixLQUFLLFNBQUMsZ0JBQWdCO29DQUN0QixLQUFLO3NDQUNMLEtBQUs7bUNBQ0wsS0FBSzttQ0FDTCxLQUFLO3dDQUNMLEtBQUs7O0lBZ0RSLHFCQUFDO0NBQUEsQUF4REQsSUF3REM7U0F2RFksY0FBYzs7O0lBRXpCLHdDQUFnRDs7SUFDaEQsMkNBQW1DOztJQUNuQyw2Q0FBcUM7O0lBQ3JDLDBDQUFrQzs7SUFDbEMsMENBQWtDOztJQUNsQywrQ0FBeUM7Ozs7O0lBR3ZDLCtCQUF5Qjs7Ozs7SUFDekIsc0NBQWtDOzs7OztJQUNsQyxrQ0FBMkI7O0FBNkMvQjtJQUFBO0lBSW1DLENBQUM7O2dCQUpuQyxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsY0FBYyxDQUFDO29CQUM5QixPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUM7aUJBQzFCOztJQUNrQywyQkFBQztDQUFBLEFBSnBDLElBSW9DO1NBQXZCLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE5nTW9kdWxlLFxuICBSZW5kZXJlcjIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5ndWxhcnRpY3MyIH0gZnJvbSAnLi9hbmd1bGFydGljczItY29yZSc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1thbmd1bGFydGljczJPbl0nIH0pXG5leHBvcnQgY2xhc3MgQW5ndWxhcnRpY3MyT24gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxuICBASW5wdXQoJ2FuZ3VsYXJ0aWNzMk9uJykgYW5ndWxhcnRpY3MyT246IHN0cmluZztcbiAgQElucHV0KCkgYW5ndWxhcnRpY3NBY3Rpb246IHN0cmluZztcbiAgQElucHV0KCkgYW5ndWxhcnRpY3NDYXRlZ29yeTogc3RyaW5nO1xuICBASW5wdXQoKSBhbmd1bGFydGljc0xhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGFuZ3VsYXJ0aWNzVmFsdWU6IHN0cmluZztcbiAgQElucHV0KCkgYW5ndWxhcnRpY3NQcm9wZXJ0aWVzOiBhbnkgPSB7fTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgYW5ndWxhcnRpY3MyOiBBbmd1bGFydGljczIsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkgeyB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKFxuICAgICAgdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgdGhpcy5hbmd1bGFydGljczJPbiB8fCAnY2xpY2snLFxuICAgICAgKGV2ZW50OiBFdmVudCkgPT4gdGhpcy5ldmVudFRyYWNrKGV2ZW50KSxcbiAgICApO1xuICB9XG5cbiAgZXZlbnRUcmFjayhldmVudDogRXZlbnQpIHtcbiAgICBjb25zdCBhY3Rpb24gPSB0aGlzLmFuZ3VsYXJ0aWNzQWN0aW9uOyAvLyB8fCB0aGlzLmluZmVyRXZlbnROYW1lKCk7XG4gICAgY29uc3QgcHJvcGVydGllczogYW55ID0ge1xuICAgICAgLi4udGhpcy5hbmd1bGFydGljc1Byb3BlcnRpZXMsXG4gICAgICBldmVudFR5cGU6IGV2ZW50LnR5cGUsXG4gICAgfTtcblxuICAgIGlmICh0aGlzLmFuZ3VsYXJ0aWNzQ2F0ZWdvcnkpIHtcbiAgICAgIHByb3BlcnRpZXMuY2F0ZWdvcnkgPSB0aGlzLmFuZ3VsYXJ0aWNzQ2F0ZWdvcnk7XG4gICAgfVxuICAgIGlmICh0aGlzLmFuZ3VsYXJ0aWNzTGFiZWwpIHtcbiAgICAgIHByb3BlcnRpZXMubGFiZWwgPSB0aGlzLmFuZ3VsYXJ0aWNzTGFiZWw7XG4gICAgfVxuICAgIGlmICh0aGlzLmFuZ3VsYXJ0aWNzVmFsdWUpIHtcbiAgICAgIHByb3BlcnRpZXMudmFsdWUgPSB0aGlzLmFuZ3VsYXJ0aWNzVmFsdWU7XG4gICAgfVxuXG4gICAgdGhpcy5hbmd1bGFydGljczIuZXZlbnRUcmFjay5uZXh0KHtcbiAgICAgIGFjdGlvbixcbiAgICAgIHByb3BlcnRpZXMsXG4gICAgfSk7XG4gIH1cblxuICAvKnByaXZhdGUgaXNDb21tYW5kKCkge1xuICAgIHJldHVybiBbJ2E6JywgJ2J1dHRvbjonLCAnYnV0dG9uOmJ1dHRvbicsICdidXR0b246c3VibWl0JywgJ2lucHV0OmJ1dHRvbicsICdpbnB1dDpzdWJtaXQnXS5pbmRleE9mKFxuICAgICAgZ2V0RE9NKCkudGFnTmFtZSh0aGlzLmVsKS50b0xvd2VyQ2FzZSgpICsgJzonICsgKGdldERPTSgpLnR5cGUodGhpcy5lbCkgfHwgJycpKSA+PSAwO1xuICB9XG5cbiAgcHJpdmF0ZSBpbmZlckV2ZW50TmFtZSgpIHtcbiAgICBpZiAodGhpcy5pc0NvbW1hbmQoKSkgcmV0dXJuIGdldERPTSgpLmdldFRleHQodGhpcy5lbCkgfHwgZ2V0RE9NKCkuZ2V0VmFsdWUodGhpcy5lbCk7XG4gICAgcmV0dXJuIGdldERPTSgpLmdldFByb3BlcnR5KHRoaXMuZWwsICdpZCcpIHx8IGdldERPTSgpLmdldFByb3BlcnR5KHRoaXMuZWwsICduYW1lJykgfHwgZ2V0RE9NKCkudGFnTmFtZSh0aGlzLmVsKTtcbiAgfSovXG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0FuZ3VsYXJ0aWNzMk9uXSxcbiAgZXhwb3J0czogW0FuZ3VsYXJ0aWNzMk9uXSxcbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhcnRpY3MyT25Nb2R1bGUge31cbiJdfQ==