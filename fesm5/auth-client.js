import { Component, Input, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AuthComponent = /** @class */ (function () {
    function AuthComponent() {
        this.tokenName = "xolura_access_token";
    }
    /**
     * @return {?}
     */
    AuthComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.generateAuthAction();
    };
    /**
     * @return {?}
     */
    AuthComponent.prototype.authClick = /**
     * @return {?}
     */
    function () {
        if (localStorage.getItem(this.tokenName)) {
            this.logout();
        }
        else {
            this.login();
        }
        this.generateAuthAction();
    };
    /**
     * @private
     * @return {?}
     */
    AuthComponent.prototype.generateAuthAction = /**
     * @private
     * @return {?}
     */
    function () {
        if (localStorage.getItem(this.tokenName)) {
            this.authAction = "Logout";
        }
        else {
            this.authAction = "Login";
        }
    };
    /**
     * @private
     * @return {?}
     */
    AuthComponent.prototype.logout = /**
     * @private
     * @return {?}
     */
    function () {
        localStorage.removeItem(this.tokenName);
    };
    /**
     * @private
     * @return {?}
     */
    AuthComponent.prototype.login = /**
     * @private
     * @return {?}
     */
    function () {
        window.location.href = (window.location.origin + '/xolura/auth-client/views/authentication?redirect_url=' + encodeURI(window.location.href));
    };
    AuthComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xac-auth',
                    template: "<a (click)=\"authClick()\" class=\"{{ class }}\">{{ authAction }}</a>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    AuthComponent.ctorParameters = function () { return []; };
    AuthComponent.propDecorators = {
        class: [{ type: Input }]
    };
    return AuthComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TenantChangeComponent = /** @class */ (function () {
    function TenantChangeComponent() {
        this.tokenName = "xolura_access_token";
    }
    /**
     * @return {?}
     */
    TenantChangeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.generateInsideText();
    };
    /**
     * @return {?}
     */
    TenantChangeComponent.prototype.generateInsideText = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var token = localStorage.getItem(this.tokenName);
        if (token && token.split('.')[1]) {
            /** @type {?} */
            var tenantName = JSON.parse(atob(token.split('.')[1]))['tenant_name'];
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
    };
    /**
     * @return {?}
     */
    TenantChangeComponent.prototype.tenantChangeClick = /**
     * @return {?}
     */
    function () {
        window.location.href = (window.location.origin + '/xolura/auth-client/views/tenant-change?xolura_access_token=' + localStorage.getItem(this.tokenName) + '&redirect_url=' + encodeURI(window.location.href));
    };
    TenantChangeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xac-tenant-change',
                    template: "<a (click)=\"tenantChangeClick()\" class=\"{{ class }}\">{{ tenantChangeInsideText }}</a>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    TenantChangeComponent.ctorParameters = function () { return []; };
    TenantChangeComponent.propDecorators = {
        class: [{ type: Input }]
    };
    return TenantChangeComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AuthClientModule = /** @class */ (function () {
    function AuthClientModule() {
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
    return AuthClientModule;
}());

export { AuthClientModule, AuthComponent as ɵa, TenantChangeComponent as ɵb };
//# sourceMappingURL=auth-client.js.map
