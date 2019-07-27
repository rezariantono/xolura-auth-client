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
        /** @type {?} */
        let jwtToken = localStorage.getItem(this.tokenName);
        if (jwtToken) {
            this.authAction = "Logout (" + (JSON.parse(atob(jwtToken.split('.')[1]))['acc_name']) + +")";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hdXRoLWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9saW5rcy9hdXRoL2F1dGguY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU96RCxNQUFNLE9BQU8sYUFBYTtJQU14QjtRQUhRLGNBQVMsR0FBVyxxQkFBcUIsQ0FBQztJQUlsRCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFBO0lBQzNCLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1AsSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUN4QyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7U0FDZDthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFBO1NBQ2I7UUFDRCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQTtJQUMzQixDQUFDOzs7OztJQUVPLGtCQUFrQjs7WUFFcEIsUUFBUSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNuRCxJQUFJLFFBQVEsRUFBRTtZQUNaLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFFLEdBQUcsQ0FBQztTQUMvRjthQUFNO1lBQ0wsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUE7U0FDMUI7SUFDSCxDQUFDOzs7OztJQUVPLE1BQU07UUFDWixZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUN6QyxDQUFDOzs7OztJQUVPLEtBQUs7UUFDWCxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLHdEQUF3RCxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7SUFDOUksQ0FBQzs7O1lBM0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsaUZBQW9DOzthQUVyQzs7Ozs7b0JBS0UsS0FBSzs7OztJQUZOLG1DQUEwQjs7Ozs7SUFDMUIsa0NBQWtEOztJQUNsRCw4QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAneGFjLWF1dGgnLFxuICB0ZW1wbGF0ZVVybDogJy4vYXV0aC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2F1dGguY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBhdXRoQWN0aW9uOiBzdHJpbmc7XG4gIHByaXZhdGUgdG9rZW5OYW1lOiBzdHJpbmcgPSBcInhvbHVyYV9hY2Nlc3NfdG9rZW5cIjtcbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZ2VuZXJhdGVBdXRoQWN0aW9uKClcbiAgfVxuXG4gIGF1dGhDbGljaygpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy50b2tlbk5hbWUpKSB7XG4gICAgICB0aGlzLmxvZ291dCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9naW4oKVxuICAgIH1cbiAgICB0aGlzLmdlbmVyYXRlQXV0aEFjdGlvbigpXG4gIH1cblxuICBwcml2YXRlIGdlbmVyYXRlQXV0aEFjdGlvbigpIHtcblxuICAgIGxldCBqd3RUb2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMudG9rZW5OYW1lKTtcbiAgICBpZiAoand0VG9rZW4pIHtcbiAgICAgIHRoaXMuYXV0aEFjdGlvbiA9IFwiTG9nb3V0IChcIiArIChKU09OLnBhcnNlKGF0b2Ioand0VG9rZW4uc3BsaXQoJy4nKVsxXSkpWydhY2NfbmFtZSddKSArICsgXCIpXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXV0aEFjdGlvbiA9IFwiTG9naW5cIlxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbG9nb3V0KCkge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMudG9rZW5OYW1lKVxuICB9XG5cbiAgcHJpdmF0ZSBsb2dpbigpIHtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICh3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgJy94b2x1cmEvYXV0aC1jbGllbnQvdmlld3MvYXV0aGVudGljYXRpb24/cmVkaXJlY3RfdXJsPScgKyBlbmNvZGVVUkkod2luZG93LmxvY2F0aW9uLmhyZWYpKVxuICB9XG5cbn1cbiJdfQ==