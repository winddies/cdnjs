(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('angulartics2')) :
    typeof define === 'function' && define.amd ? define('angulartics2/gtm', ['exports', '@angular/core', 'angulartics2'], factory) :
    (global = global || self, factory((global.angulartics2 = global.angulartics2 || {}, global.angulartics2.gtm = {}), global.ng.core, global.angulartics2));
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

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    var GoogleTagManagerDefaults = /** @class */ (function () {
        function GoogleTagManagerDefaults() {
            this.userId = null;
        }
        return GoogleTagManagerDefaults;
    }());
    var Angulartics2GoogleTagManager = /** @class */ (function () {
        function Angulartics2GoogleTagManager(angulartics2) {
            var _this = this;
            this.angulartics2 = angulartics2;
            // The dataLayer needs to be initialized
            if (typeof dataLayer !== 'undefined' && dataLayer) {
                dataLayer = window.dataLayer = window.dataLayer || [];
            }
            var defaults = new GoogleTagManagerDefaults();
            // Set the default settings for this module
            this.angulartics2.settings.gtm = __assign({}, defaults, this.angulartics2.settings.gtm);
            this.angulartics2.setUsername
                .subscribe(function (x) { return _this.setUsername(x); });
        }
        Angulartics2GoogleTagManager.prototype.startTracking = function () {
            var _this = this;
            this.angulartics2.pageTrack
                .pipe(this.angulartics2.filterDeveloperMode())
                .subscribe(function (x) { return _this.pageTrack(x.path); });
            this.angulartics2.eventTrack
                .pipe(this.angulartics2.filterDeveloperMode())
                .subscribe(function (x) { return _this.eventTrack(x.action, x.properties); });
            this.angulartics2.exceptionTrack
                .pipe(this.angulartics2.filterDeveloperMode())
                .subscribe(function (x) { return _this.exceptionTrack(x); });
        };
        Angulartics2GoogleTagManager.prototype.pageTrack = function (path) {
            this.pushLayer({
                event: 'Page View',
                'content-name': path,
                userId: this.angulartics2.settings.gtm.userId
            });
        };
        /**
         * Send Data Layer
         *
         * @layer data layer object
         */
        Angulartics2GoogleTagManager.prototype.pushLayer = function (layer) {
            if (typeof dataLayer !== 'undefined' && dataLayer) {
                dataLayer.push(layer);
            }
        };
        /**
         * Send interactions to the dataLayer, i.e. for event tracking in Google Analytics
         *
         * @param action associated with the event
         */
        Angulartics2GoogleTagManager.prototype.eventTrack = function (action, properties) {
            // TODO: make interface
            //  @param {string} properties.category
            //  @param {string} [properties.label]
            //  @param {number} [properties.value]
            //  @param {boolean} [properties.noninteraction]
            // Set a default GTM category
            properties = properties || {};
            this.pushLayer(__assign({ event: properties.event || 'interaction', target: properties.category || 'Event', action: action, label: properties.label, value: properties.value, interactionType: properties.noninteraction, userId: this.angulartics2.settings.gtm.userId }, properties.gtmCustom));
        };
        /**
         * Exception Track Event in GTM
         *
         */
        Angulartics2GoogleTagManager.prototype.exceptionTrack = function (properties) {
            // TODO: make interface
            //  @param {Object} properties
            //  @param {string} properties.appId
            //  @param {string} properties.appName
            //  @param {string} properties.appVersion
            //  @param {string} [properties.description]
            //  @param {boolean} [properties.fatal]
            if (!properties || !properties.appId || !properties.appName || !properties.appVersion) {
                console.error('Must be setted appId, appName and appVersion.');
                return;
            }
            if (properties.fatal === undefined) {
                console.log('No "fatal" provided, sending with fatal=true');
                properties.exFatal = true;
            }
            properties.exDescription = properties.event ? properties.event.stack : properties.description;
            this.eventTrack("Exception thrown for " + properties.appName + " <" + properties.appId + "@" + properties.appVersion + ">", {
                category: 'Exception',
                label: properties.exDescription,
            });
        };
        /**
         * Set userId for use with Universal Analytics User ID feature
         *
         * @param userId used to identify user cross-device in Google Analytics
         */
        Angulartics2GoogleTagManager.prototype.setUsername = function (userId) {
            this.angulartics2.settings.gtm.userId = userId;
        };
        Angulartics2GoogleTagManager.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function Angulartics2GoogleTagManager_Factory() { return new Angulartics2GoogleTagManager(core.ɵɵinject(angulartics2.Angulartics2)); }, token: Angulartics2GoogleTagManager, providedIn: "root" });
        Angulartics2GoogleTagManager = __decorate([
            core.Injectable({ providedIn: 'root' }),
            __metadata("design:paramtypes", [angulartics2.Angulartics2])
        ], Angulartics2GoogleTagManager);
        return Angulartics2GoogleTagManager;
    }());

    exports.Angulartics2GoogleTagManager = Angulartics2GoogleTagManager;
    exports.GoogleTagManagerDefaults = GoogleTagManagerDefaults;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=angulartics2-gtm.umd.js.map
