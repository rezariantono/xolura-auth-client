/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
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
        /** @type {?} */
        var jwtToken = localStorage.getItem(this.tokenName);
        if (jwtToken) {
            this.authAction = "Logout (" + (JSON.parse(atob(jwtToken.split('.')[1]))['acc_name']) + +")";
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
export { AuthComponent };
if (false) {
    /** @type {?} */
    AuthComponent.prototype.authAction;
    /**
     * @type {?}
     * @private
     */
    AuthComponent.prototype.tokenName;
    /** @type {?} */
    AuthComponent.prototype.class;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hdXRoLWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9saW5rcy9hdXRoL2F1dGguY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RDtJQVdFO1FBSFEsY0FBUyxHQUFXLHFCQUFxQixDQUFDO0lBSWxELENBQUM7Ozs7SUFFRCxnQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQTtJQUMzQixDQUFDOzs7O0lBRUQsaUNBQVM7OztJQUFUO1FBQ0UsSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUN4QyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7U0FDZDthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFBO1NBQ2I7UUFDRCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQTtJQUMzQixDQUFDOzs7OztJQUVPLDBDQUFrQjs7OztJQUExQjs7WUFFTSxRQUFRLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ25ELElBQUksUUFBUSxFQUFFO1lBQ1osSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUUsR0FBRyxDQUFDO1NBQy9GO2FBQU07WUFDTCxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQTtTQUMxQjtJQUNILENBQUM7Ozs7O0lBRU8sOEJBQU07Ozs7SUFBZDtRQUNFLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ3pDLENBQUM7Ozs7O0lBRU8sNkJBQUs7Ozs7SUFBYjtRQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsd0RBQXdELEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtJQUM5SSxDQUFDOztnQkEzQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixpRkFBb0M7O2lCQUVyQzs7Ozs7d0JBS0UsS0FBSzs7SUFvQ1Isb0JBQUM7Q0FBQSxBQTdDRCxJQTZDQztTQXhDWSxhQUFhOzs7SUFFeEIsbUNBQTBCOzs7OztJQUMxQixrQ0FBa0Q7O0lBQ2xELDhCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd4YWMtYXV0aCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hdXRoLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYXV0aC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQXV0aENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIGF1dGhBY3Rpb246IHN0cmluZztcbiAgcHJpdmF0ZSB0b2tlbk5hbWU6IHN0cmluZyA9IFwieG9sdXJhX2FjY2Vzc190b2tlblwiO1xuICBASW5wdXQoKSBjbGFzczogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5nZW5lcmF0ZUF1dGhBY3Rpb24oKVxuICB9XG5cbiAgYXV0aENsaWNrKCkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnRva2VuTmFtZSkpIHtcbiAgICAgIHRoaXMubG9nb3V0KClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sb2dpbigpXG4gICAgfVxuICAgIHRoaXMuZ2VuZXJhdGVBdXRoQWN0aW9uKClcbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdGVBdXRoQWN0aW9uKCkge1xuXG4gICAgbGV0IGp3dFRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy50b2tlbk5hbWUpO1xuICAgIGlmIChqd3RUb2tlbikge1xuICAgICAgdGhpcy5hdXRoQWN0aW9uID0gXCJMb2dvdXQgKFwiICsgKEpTT04ucGFyc2UoYXRvYihqd3RUb2tlbi5zcGxpdCgnLicpWzFdKSlbJ2FjY19uYW1lJ10pICsgKyBcIilcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hdXRoQWN0aW9uID0gXCJMb2dpblwiXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBsb2dvdXQoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy50b2tlbk5hbWUpXG4gIH1cblxuICBwcml2YXRlIGxvZ2luKCkge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gKHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyAnL3hvbHVyYS9hdXRoLWNsaWVudC92aWV3cy9hdXRoZW50aWNhdGlvbj9yZWRpcmVjdF91cmw9JyArIGVuY29kZVVSSSh3aW5kb3cubG9jYXRpb24uaHJlZikpXG4gIH1cblxufVxuIl19