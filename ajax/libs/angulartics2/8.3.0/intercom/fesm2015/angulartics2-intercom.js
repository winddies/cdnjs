import { __decorate, __metadata } from 'tslib';
import { ɵɵdefineInjectable, ɵɵinject, Injectable } from '@angular/core';
import { Angulartics2 } from 'angulartics2';

let Angulartics2Intercom = class Angulartics2Intercom {
    constructor(angulartics2) {
        this.angulartics2 = angulartics2;
        this.angulartics2.setUserProperties
            .subscribe((x) => this.setUserProperties(x));
        this.angulartics2.setUserPropertiesOnce
            .subscribe((x) => this.setUserProperties(x));
    }
    startTracking() {
        this.angulartics2.pageTrack
            .pipe(this.angulartics2.filterDeveloperMode())
            .subscribe((x) => this.pageTrack(x.path));
        this.angulartics2.eventTrack
            .pipe(this.angulartics2.filterDeveloperMode())
            .subscribe((x) => this.eventTrack(x.action, x.properties));
    }
    pageTrack(path) {
        try {
            this.eventTrack('Pageview', {
                url: path
            });
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    eventTrack(action, properties) {
        try {
            Intercom('trackEvent', action, properties);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    setUserProperties(properties) {
        try {
            if (properties.userId && !properties.user_id) {
                properties.user_id = properties.userId;
            }
            Intercom('boot', properties);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
};
Angulartics2Intercom.ngInjectableDef = ɵɵdefineInjectable({ factory: function Angulartics2Intercom_Factory() { return new Angulartics2Intercom(ɵɵinject(Angulartics2)); }, token: Angulartics2Intercom, providedIn: "root" });
Angulartics2Intercom = __decorate([
    Injectable({ providedIn: 'root' }),
    __metadata("design:paramtypes", [Angulartics2])
], Angulartics2Intercom);

export { Angulartics2Intercom };
//# sourceMappingURL=angulartics2-intercom.js.map
