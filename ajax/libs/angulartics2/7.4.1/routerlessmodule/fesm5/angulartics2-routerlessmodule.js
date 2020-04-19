import { NgModule } from '@angular/core';
import { Angulartics2, Angulartics2OnModule, ANGULARTICS2_TOKEN, RouterlessTracking } from 'angulartics2';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { Angulartics2RouterlessModule };

//# sourceMappingURL=angulartics2-routerlessmodule.js.map