(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('angulartics2'), require('@uirouter/core'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('angulartics2/uiroutermodule', ['exports', '@angular/core', 'angulartics2', '@uirouter/core', 'rxjs'], factory) :
    (global = global || self, factory((global.angulartics2 = global.angulartics2 || {}, global.angulartics2.uiroutermodule = {}), global.ng.core, global.angulartics2, global.core$1, global.rxjs));
}(this, function (exports, core, angulartics2, core$1, rxjs) { 'use strict';

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

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    /**
     * Track Route changes for applications using UI-Router
     *
     * @link https://ui-router.github.io/ng2/docs/latest/
     *
     * referenced: https://github.com/ui-router/sample-app-angular/blob/9adb533b85c0f0fccef23968489cca0a5ec84654/src/app/util/ga.ts
     */
    var UIRouterTracking = /** @class */ (function () {
        function UIRouterTracking(transitionService) {
            this.transitionService = transitionService;
        }
        UIRouterTracking.prototype.path = function (trans) {
            return trans.$to().url.format(trans.params());
        };
        UIRouterTracking.prototype.trackLocation = function (settings) {
            var _this = this;
            var subject = new rxjs.Subject();
            this.transitionService.onSuccess({}, function (trans) {
                return subject.next({ url: _this.path(trans) });
            }, {
                priority: -10000,
            });
            return subject;
        };
        UIRouterTracking.prototype.prepareExternalUrl = function (url) {
            return url;
        };
        UIRouterTracking.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function UIRouterTracking_Factory() { return new UIRouterTracking(core.ɵɵinject(core$1.TransitionService)); }, token: UIRouterTracking, providedIn: "root" });
        UIRouterTracking = __decorate([
            core.Injectable({ providedIn: 'root' }),
            __metadata("design:paramtypes", [core$1.TransitionService])
        ], UIRouterTracking);
        return UIRouterTracking;
    }());

    var Angulartics2UirouterModule = /** @class */ (function () {
        function Angulartics2UirouterModule() {
        }
        Angulartics2UirouterModule_1 = Angulartics2UirouterModule;
        Angulartics2UirouterModule.forRoot = function (settings) {
            if (settings === void 0) { settings = {}; }
            return {
                ngModule: Angulartics2UirouterModule_1,
                providers: [
                    { provide: angulartics2.ANGULARTICS2_TOKEN, useValue: { settings: settings } },
                    { provide: angulartics2.RouterlessTracking, useClass: UIRouterTracking },
                    angulartics2.Angulartics2,
                ],
            };
        };
        var Angulartics2UirouterModule_1;
        Angulartics2UirouterModule = Angulartics2UirouterModule_1 = __decorate([
            core.NgModule({
                imports: [angulartics2.Angulartics2OnModule],
            })
        ], Angulartics2UirouterModule);
        return Angulartics2UirouterModule;
    }());

    exports.Angulartics2UirouterModule = Angulartics2UirouterModule;
    exports.UIRouterTracking = UIRouterTracking;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=angulartics2-uiroutermodule.umd.js.map
