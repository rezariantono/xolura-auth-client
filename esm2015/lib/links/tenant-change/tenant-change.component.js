/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class TenantChangeComponent {
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
if (false) {
    /** @type {?} */
    TenantChangeComponent.prototype.tenantChangeInsideText;
    /**
     * @type {?}
     * @private
     */
    TenantChangeComponent.prototype.tokenName;
    /** @type {?} */
    TenantChangeComponent.prototype.class;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50LWNoYW5nZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hdXRoLWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9saW5rcy90ZW5hbnQtY2hhbmdlL3RlbmFudC1jaGFuZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU96RCxNQUFNLE9BQU8scUJBQXFCO0lBTWhDO1FBSFEsY0FBUyxHQUFXLHFCQUFxQixDQUFDO0lBR2xDLENBQUM7Ozs7SUFFakIsUUFBUTtRQUNOLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFBO0lBQzNCLENBQUM7Ozs7SUFFRCxrQkFBa0I7O1lBRVosS0FBSyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUVoRCxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFOztnQkFFNUIsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztZQUVyRSxJQUFJLFVBQVUsRUFBRTtnQkFDZCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsVUFBVSxDQUFBO2FBQ3pDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxjQUFjLENBQUE7YUFDN0M7U0FFRjthQUFNO1lBRUwsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQTtTQUVuQztJQUVILENBQUM7Ozs7SUFFRCxpQkFBaUI7UUFDZixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLDhEQUE4RCxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLGdCQUFnQixHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7SUFDOU0sQ0FBQzs7O1lBekNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixxR0FBNkM7O2FBRTlDOzs7OztvQkFLRSxLQUFLOzs7O0lBRk4sdURBQXNDOzs7OztJQUN0QywwQ0FBa0Q7O0lBQ2xELHNDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd4YWMtdGVuYW50LWNoYW5nZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90ZW5hbnQtY2hhbmdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGVuYW50LWNoYW5nZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGVuYW50Q2hhbmdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgdGVuYW50Q2hhbmdlSW5zaWRlVGV4dDogc3RyaW5nO1xuICBwcml2YXRlIHRva2VuTmFtZTogc3RyaW5nID0gXCJ4b2x1cmFfYWNjZXNzX3Rva2VuXCI7XG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmdlbmVyYXRlSW5zaWRlVGV4dCgpXG4gIH1cblxuICBnZW5lcmF0ZUluc2lkZVRleHQoKSB7XG5cbiAgICBsZXQgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnRva2VuTmFtZSlcblxuICAgIGlmICh0b2tlbiAmJiB0b2tlbi5zcGxpdCgnLicpWzFdKSB7XG5cbiAgICAgIGxldCB0ZW5hbnROYW1lID0gSlNPTi5wYXJzZShhdG9iKHRva2VuLnNwbGl0KCcuJylbMV0pKVsndGVuYW50X25hbWUnXVxuXG4gICAgICBpZiAodGVuYW50TmFtZSkge1xuICAgICAgICB0aGlzLnRlbmFudENoYW5nZUluc2lkZVRleHQgPSB0ZW5hbnROYW1lXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRlbmFudENoYW5nZUluc2lkZVRleHQgPSAnUGlsaWggVGVuYW50J1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcblxuICAgICAgdGhpcy50ZW5hbnRDaGFuZ2VJbnNpZGVUZXh0ID0gbnVsbFxuXG4gICAgfVxuXG4gIH1cblxuICB0ZW5hbnRDaGFuZ2VDbGljaygpIHtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICh3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgJy94b2x1cmEvYXV0aC1jbGllbnQvdmlld3MvdGVuYW50LWNoYW5nZT94b2x1cmFfYWNjZXNzX3Rva2VuPScgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnRva2VuTmFtZSkgKyAnJnJlZGlyZWN0X3VybD0nICsgZW5jb2RlVVJJKHdpbmRvdy5sb2NhdGlvbi5ocmVmKSlcbiAgfVxuXG59XG4iXX0=