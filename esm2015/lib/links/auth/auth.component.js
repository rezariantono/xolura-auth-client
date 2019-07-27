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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hdXRoLWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9saW5rcy9hdXRoL2F1dGguY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU96RCxNQUFNLE9BQU8sYUFBYTtJQU14QjtRQUhRLGNBQVMsR0FBVyxxQkFBcUIsQ0FBQztJQUlsRCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFBO0lBQzNCLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1AsSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUN4QyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7U0FDZDthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFBO1NBQ2I7UUFDRCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQTtJQUMzQixDQUFDOzs7OztJQUVPLGtCQUFrQjs7WUFFcEIsUUFBUSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNuRCxJQUFJLFFBQVEsRUFBRTtZQUNaLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7U0FDN0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFBO1NBQzFCO0lBQ0gsQ0FBQzs7Ozs7SUFFTyxNQUFNO1FBQ1osWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDekMsQ0FBQzs7Ozs7SUFFTyxLQUFLO1FBQ1gsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyx3REFBd0QsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO0lBQzlJLENBQUM7OztZQTNDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLGlGQUFvQzs7YUFFckM7Ozs7O29CQUtFLEtBQUs7Ozs7SUFGTixtQ0FBMEI7Ozs7O0lBQzFCLGtDQUFrRDs7SUFDbEQsOEJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3hhYy1hdXRoJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2F1dGguY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hdXRoLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBdXRoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgYXV0aEFjdGlvbjogc3RyaW5nO1xuICBwcml2YXRlIHRva2VuTmFtZTogc3RyaW5nID0gXCJ4b2x1cmFfYWNjZXNzX3Rva2VuXCI7XG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmdlbmVyYXRlQXV0aEFjdGlvbigpXG4gIH1cblxuICBhdXRoQ2xpY2soKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMudG9rZW5OYW1lKSkge1xuICAgICAgdGhpcy5sb2dvdXQoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvZ2luKClcbiAgICB9XG4gICAgdGhpcy5nZW5lcmF0ZUF1dGhBY3Rpb24oKVxuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZUF1dGhBY3Rpb24oKSB7XG5cbiAgICBsZXQgand0VG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnRva2VuTmFtZSk7XG4gICAgaWYgKGp3dFRva2VuKSB7XG4gICAgICB0aGlzLmF1dGhBY3Rpb24gPSBcIkxvZ291dCAoXCIgKyAoSlNPTi5wYXJzZShhdG9iKGp3dFRva2VuLnNwbGl0KCcuJylbMV0pKVsnYWNjX25hbWUnXSkgKyBcIilcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hdXRoQWN0aW9uID0gXCJMb2dpblwiXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBsb2dvdXQoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy50b2tlbk5hbWUpXG4gIH1cblxuICBwcml2YXRlIGxvZ2luKCkge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gKHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyAnL3hvbHVyYS9hdXRoLWNsaWVudC92aWV3cy9hdXRoZW50aWNhdGlvbj9yZWRpcmVjdF91cmw9JyArIGVuY29kZVVSSSh3aW5kb3cubG9jYXRpb24uaHJlZikpXG4gIH1cblxufVxuIl19