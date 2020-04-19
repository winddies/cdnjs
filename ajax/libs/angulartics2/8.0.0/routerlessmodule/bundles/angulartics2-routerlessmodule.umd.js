(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('angulartics2')) :
    typeof define === 'function' && define.amd ? define('angulartics2/routerlessmodule', ['exports', '@angular/core', 'angulartics2'], factory) :
    (global = global || self, factory((global.angulartics2 = global.angulartics2 || {}, global.angulartics2.routerlessmodule = {}), global.ng.core, global.angulartics2));
}(this, function (exports, core, angulartics2) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    var Angulartics2RouterlessModule = /** @class */ (function () {
        function Angulartics2RouterlessModule() {
        }
        Angulartics2RouterlessModule_1 = Angulartics2RouterlessModule;
        Angulartics2RouterlessModule.forRoot = function (settings) {
            if (settings === void 0) { settings = {}; }
            return {
                ngModule: Angulartics2RouterlessModule_1,
                providers: [
                    { provide: angulartics2.ANGULARTICS2_TOKEN, useValue: { settings: settings } },
                    angulartics2.RouterlessTracking,
                    angulartics2.Angulartics2,
                ],
            };
        };
        var Angulartics2RouterlessModule_1;
        Angulartics2RouterlessModule = Angulartics2RouterlessModule_1 = __decorate([
            core.NgModule({
                imports: [angulartics2.Angulartics2OnModule],
            })
        ], Angulartics2RouterlessModule);
        return Angulartics2RouterlessModule;
    }());

    exports.Angulartics2RouterlessModule = Angulartics2RouterlessModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=angulartics2-routerlessmodule.umd.js.map
