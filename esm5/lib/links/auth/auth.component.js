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
            this.authAction = "Logout (" + (JSON.parse(atob(jwtToken.split('.')[1]))['acc_name']) + ")";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hdXRoLWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9saW5rcy9hdXRoL2F1dGguY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RDtJQVdFO1FBSFEsY0FBUyxHQUFXLHFCQUFxQixDQUFDO0lBSWxELENBQUM7Ozs7SUFFRCxnQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQTtJQUMzQixDQUFDOzs7O0lBRUQsaUNBQVM7OztJQUFUO1FBQ0UsSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUN4QyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7U0FDZDthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFBO1NBQ2I7UUFDRCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQTtJQUMzQixDQUFDOzs7OztJQUVPLDBDQUFrQjs7OztJQUExQjs7WUFFTSxRQUFRLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ25ELElBQUksUUFBUSxFQUFFO1lBQ1osSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztTQUM3RjthQUFNO1lBQ0wsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUE7U0FDMUI7SUFDSCxDQUFDOzs7OztJQUVPLDhCQUFNOzs7O0lBQWQ7UUFDRSxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUN6QyxDQUFDOzs7OztJQUVPLDZCQUFLOzs7O0lBQWI7UUFDRSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLHdEQUF3RCxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7SUFDOUksQ0FBQzs7Z0JBM0NGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsaUZBQW9DOztpQkFFckM7Ozs7O3dCQUtFLEtBQUs7O0lBb0NSLG9CQUFDO0NBQUEsQUE3Q0QsSUE2Q0M7U0F4Q1ksYUFBYTs7O0lBRXhCLG1DQUEwQjs7Ozs7SUFDMUIsa0NBQWtEOztJQUNsRCw4QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAneGFjLWF1dGgnLFxuICB0ZW1wbGF0ZVVybDogJy4vYXV0aC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2F1dGguY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBhdXRoQWN0aW9uOiBzdHJpbmc7XG4gIHByaXZhdGUgdG9rZW5OYW1lOiBzdHJpbmcgPSBcInhvbHVyYV9hY2Nlc3NfdG9rZW5cIjtcbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZ2VuZXJhdGVBdXRoQWN0aW9uKClcbiAgfVxuXG4gIGF1dGhDbGljaygpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy50b2tlbk5hbWUpKSB7XG4gICAgICB0aGlzLmxvZ291dCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9naW4oKVxuICAgIH1cbiAgICB0aGlzLmdlbmVyYXRlQXV0aEFjdGlvbigpXG4gIH1cblxuICBwcml2YXRlIGdlbmVyYXRlQXV0aEFjdGlvbigpIHtcblxuICAgIGxldCBqd3RUb2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMudG9rZW5OYW1lKTtcbiAgICBpZiAoand0VG9rZW4pIHtcbiAgICAgIHRoaXMuYXV0aEFjdGlvbiA9IFwiTG9nb3V0IChcIiArIChKU09OLnBhcnNlKGF0b2Ioand0VG9rZW4uc3BsaXQoJy4nKVsxXSkpWydhY2NfbmFtZSddKSArIFwiKVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmF1dGhBY3Rpb24gPSBcIkxvZ2luXCJcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGxvZ291dCgpIHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLnRva2VuTmFtZSlcbiAgfVxuXG4gIHByaXZhdGUgbG9naW4oKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAod2luZG93LmxvY2F0aW9uLm9yaWdpbiArICcveG9sdXJhL2F1dGgtY2xpZW50L3ZpZXdzL2F1dGhlbnRpY2F0aW9uP3JlZGlyZWN0X3VybD0nICsgZW5jb2RlVVJJKHdpbmRvdy5sb2NhdGlvbi5ocmVmKSlcbiAgfVxuXG59XG4iXX0=