import { Component, Input, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthComponent {
    constructor() {
        this.tokenName = "xolura_access_token";
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.generateAuthAction();
    }
    /**
     * @return {?}
     */
    authClick() {
        if (localStorage.getItem(this.tokenName)) {
            this.logout();
        }
        else {
            this.login();
        }
        this.generateAuthAction();
    }
    /**
     * @private
     * @return {?}
     */
    generateAuthAction() {
        /** @type {?} */
        let jwtToken = localStorage.getItem(this.tokenName);
        if (jwtToken) {
            this.authAction = "Logout (" + (JSON.parse(atob(jwtToken.split('.')[1]))['acc_name']) + ")";
        }
        else {
            this.authAction = "Login";
        }
    }
    /**
     * @private
     * @return {?}
     */
    logout() {
        localStorage.removeItem(this.tokenName);
    }
    /**
     * @private
     * @return {?}
     */
    login() {
        window.location.href = (window.location.origin + '/xolura/auth-client/views/authentication?redirect_url=' + encodeURI(window.location.href));
    }
}
AuthComponent.decorators = [
    { type: Component, args: [{
                selector: 'xac-auth',
                template: "<a (click)=\"authClick()\" class=\"{{ class }}\">{{ authAction }}</a>",
                styles: [""]
            }] }
];
/** @nocollapse */
AuthComponent.ctorParameters = () => [];
AuthComponent.propDecorators = {
    class: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TenantChangeComponent {
    constructor() {
        this.tokenName = "xolura_access_token";
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.generateInsideText();
    }
    /**
     * @return {?}
     */
    generateInsideText() {
        /** @type {?} */
        let token = localStorage.getItem(this.tokenName);
        if (token && token.split('.')[1]) {
            /** @type {?} */
            let tenantName = JSON.parse(atob(token.split('.')[1]))['tenant_name'];
            if (tenantName) {
                this.tenantChangeInsideText = tenantName;
            }
            else {
                this.tenantChangeInsideText = 'Pilih Tenant';
            }
        }
        else {
            this.tenantChangeInsideText = null;
        }
    }
    /**
     * @return {?}
     */
    tenantChangeClick() {
        window.location.href = (window.location.origin + '/xolura/auth-client/views/tenant-change?xolura_access_token=' + localStorage.getItem(this.tokenName) + '&redirect_url=' + encodeURI(window.location.href));
    }
}
TenantChangeComponent.decorators = [
    { type: Component, args: [{
                selector: 'xac-tenant-change',
                template: "<a (click)=\"tenantChangeClick()\" class=\"{{ class }}\">{{ tenantChangeInsideText }}</a>",
                styles: [""]
            }] }
];
/** @nocollapse */
TenantChangeComponent.ctorParameters = () => [];
TenantChangeComponent.propDecorators = {
    class: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthClientModule {
}
AuthClientModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [
                    AuthComponent,
                    TenantChangeComponent
                ],
                providers: [],
                exports: [
                    AuthComponent,
                    TenantChangeComponent
                ]
            },] }
];

export { AuthClientModule, AuthComponent as ɵa, TenantChangeComponent as ɵb };
//# sourceMappingURL=auth-client.js.map
