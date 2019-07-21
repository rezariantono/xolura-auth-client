/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class AuthComponent {
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
        if (localStorage.getItem(this.tokenName)) {
            this.authAction = "Logout";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hdXRoLWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9saW5rcy9hdXRoL2F1dGguY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU96RCxNQUFNLE9BQU8sYUFBYTtJQU14QjtRQUhRLGNBQVMsR0FBVyxxQkFBcUIsQ0FBQztJQUlsRCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFBO0lBQzNCLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1AsSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUN4QyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7U0FDZDthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFBO1NBQ2I7UUFDRCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQTtJQUMzQixDQUFDOzs7OztJQUVPLGtCQUFrQjtRQUV4QixJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFBO1NBQzNCO2FBQU07WUFDTCxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQTtTQUMxQjtJQUNILENBQUM7Ozs7O0lBRU8sTUFBTTtRQUNaLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ3pDLENBQUM7Ozs7O0lBRU8sS0FBSztRQUNYLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsd0RBQXdELEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtJQUM5SSxDQUFDOzs7WUExQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixpRkFBb0M7O2FBRXJDOzs7OztvQkFLRSxLQUFLOzs7O0lBRk4sbUNBQTBCOzs7OztJQUMxQixrQ0FBa0Q7O0lBQ2xELDhCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd4YWMtYXV0aCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hdXRoLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYXV0aC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQXV0aENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIGF1dGhBY3Rpb246IHN0cmluZztcbiAgcHJpdmF0ZSB0b2tlbk5hbWU6IHN0cmluZyA9IFwieG9sdXJhX2FjY2Vzc190b2tlblwiO1xuICBASW5wdXQoKSBjbGFzczogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5nZW5lcmF0ZUF1dGhBY3Rpb24oKVxuICB9XG5cbiAgYXV0aENsaWNrKCkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnRva2VuTmFtZSkpIHtcbiAgICAgIHRoaXMubG9nb3V0KClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sb2dpbigpXG4gICAgfVxuICAgIHRoaXMuZ2VuZXJhdGVBdXRoQWN0aW9uKClcbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdGVBdXRoQWN0aW9uKCkge1xuXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMudG9rZW5OYW1lKSkge1xuICAgICAgdGhpcy5hdXRoQWN0aW9uID0gXCJMb2dvdXRcIlxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmF1dGhBY3Rpb24gPSBcIkxvZ2luXCJcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGxvZ291dCgpIHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLnRva2VuTmFtZSlcbiAgfVxuXG4gIHByaXZhdGUgbG9naW4oKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAod2luZG93LmxvY2F0aW9uLm9yaWdpbiArICcveG9sdXJhL2F1dGgtY2xpZW50L3ZpZXdzL2F1dGhlbnRpY2F0aW9uP3JlZGlyZWN0X3VybD0nICsgZW5jb2RlVVJJKHdpbmRvdy5sb2NhdGlvbi5ocmVmKSlcbiAgfVxuXG59XG4iXX0=