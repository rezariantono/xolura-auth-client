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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hdXRoLWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9saW5rcy9hdXRoL2F1dGguY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RDtJQVdFO1FBSFEsY0FBUyxHQUFXLHFCQUFxQixDQUFDO0lBSWxELENBQUM7Ozs7SUFFRCxnQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQTtJQUMzQixDQUFDOzs7O0lBRUQsaUNBQVM7OztJQUFUO1FBQ0UsSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUN4QyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7U0FDZDthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFBO1NBQ2I7UUFDRCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQTtJQUMzQixDQUFDOzs7OztJQUVPLDBDQUFrQjs7OztJQUExQjtRQUVFLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDeEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUE7U0FDM0I7YUFBTTtZQUNMLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFBO1NBQzFCO0lBQ0gsQ0FBQzs7Ozs7SUFFTyw4QkFBTTs7OztJQUFkO1FBQ0UsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDekMsQ0FBQzs7Ozs7SUFFTyw2QkFBSzs7OztJQUFiO1FBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyx3REFBd0QsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO0lBQzlJLENBQUM7O2dCQTFDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLGlGQUFvQzs7aUJBRXJDOzs7Ozt3QkFLRSxLQUFLOztJQW1DUixvQkFBQztDQUFBLEFBNUNELElBNENDO1NBdkNZLGFBQWE7OztJQUV4QixtQ0FBMEI7Ozs7O0lBQzFCLGtDQUFrRDs7SUFDbEQsOEJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3hhYy1hdXRoJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2F1dGguY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hdXRoLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBdXRoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgYXV0aEFjdGlvbjogc3RyaW5nO1xuICBwcml2YXRlIHRva2VuTmFtZTogc3RyaW5nID0gXCJ4b2x1cmFfYWNjZXNzX3Rva2VuXCI7XG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmdlbmVyYXRlQXV0aEFjdGlvbigpXG4gIH1cblxuICBhdXRoQ2xpY2soKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMudG9rZW5OYW1lKSkge1xuICAgICAgdGhpcy5sb2dvdXQoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvZ2luKClcbiAgICB9XG4gICAgdGhpcy5nZW5lcmF0ZUF1dGhBY3Rpb24oKVxuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZUF1dGhBY3Rpb24oKSB7XG5cbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy50b2tlbk5hbWUpKSB7XG4gICAgICB0aGlzLmF1dGhBY3Rpb24gPSBcIkxvZ291dFwiXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXV0aEFjdGlvbiA9IFwiTG9naW5cIlxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbG9nb3V0KCkge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMudG9rZW5OYW1lKVxuICB9XG5cbiAgcHJpdmF0ZSBsb2dpbigpIHtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICh3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgJy94b2x1cmEvYXV0aC1jbGllbnQvdmlld3MvYXV0aGVudGljYXRpb24/cmVkaXJlY3RfdXJsPScgKyBlbmNvZGVVUkkod2luZG93LmxvY2F0aW9uLmhyZWYpKVxuICB9XG5cbn1cbiJdfQ==