/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
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
export { TenantChangeComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50LWNoYW5nZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hdXRoLWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9saW5rcy90ZW5hbnQtY2hhbmdlL3RlbmFudC1jaGFuZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RDtJQVdFO1FBSFEsY0FBUyxHQUFXLHFCQUFxQixDQUFDO0lBR2xDLENBQUM7Ozs7SUFFakIsd0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUE7SUFDM0IsQ0FBQzs7OztJQUVELGtEQUFrQjs7O0lBQWxCOztZQUVNLEtBQUssR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFFaEQsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTs7Z0JBRTVCLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUM7WUFFckUsSUFBSSxVQUFVLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLHNCQUFzQixHQUFHLFVBQVUsQ0FBQTthQUN6QztpQkFBTTtnQkFDTCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsY0FBYyxDQUFBO2FBQzdDO1NBRUY7YUFBTTtZQUVMLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUE7U0FFbkM7SUFFSCxDQUFDOzs7O0lBRUQsaURBQWlCOzs7SUFBakI7UUFDRSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLDhEQUE4RCxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLGdCQUFnQixHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7SUFDOU0sQ0FBQzs7Z0JBekNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixxR0FBNkM7O2lCQUU5Qzs7Ozs7d0JBS0UsS0FBSzs7SUFrQ1IsNEJBQUM7Q0FBQSxBQTNDRCxJQTJDQztTQXRDWSxxQkFBcUI7OztJQUVoQyx1REFBc0M7Ozs7O0lBQ3RDLDBDQUFrRDs7SUFDbEQsc0NBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3hhYy10ZW5hbnQtY2hhbmdlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RlbmFudC1jaGFuZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90ZW5hbnQtY2hhbmdlLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUZW5hbnRDaGFuZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyB0ZW5hbnRDaGFuZ2VJbnNpZGVUZXh0OiBzdHJpbmc7XG4gIHByaXZhdGUgdG9rZW5OYW1lOiBzdHJpbmcgPSBcInhvbHVyYV9hY2Nlc3NfdG9rZW5cIjtcbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZ2VuZXJhdGVJbnNpZGVUZXh0KClcbiAgfVxuXG4gIGdlbmVyYXRlSW5zaWRlVGV4dCgpIHtcblxuICAgIGxldCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMudG9rZW5OYW1lKVxuXG4gICAgaWYgKHRva2VuICYmIHRva2VuLnNwbGl0KCcuJylbMV0pIHtcblxuICAgICAgbGV0IHRlbmFudE5hbWUgPSBKU09OLnBhcnNlKGF0b2IodG9rZW4uc3BsaXQoJy4nKVsxXSkpWyd0ZW5hbnRfbmFtZSddXG5cbiAgICAgIGlmICh0ZW5hbnROYW1lKSB7XG4gICAgICAgIHRoaXMudGVuYW50Q2hhbmdlSW5zaWRlVGV4dCA9IHRlbmFudE5hbWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGVuYW50Q2hhbmdlSW5zaWRlVGV4dCA9ICdQaWxpaCBUZW5hbnQnXG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICB0aGlzLnRlbmFudENoYW5nZUluc2lkZVRleHQgPSBudWxsXG5cbiAgICB9XG5cbiAgfVxuXG4gIHRlbmFudENoYW5nZUNsaWNrKCkge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gKHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyAnL3hvbHVyYS9hdXRoLWNsaWVudC92aWV3cy90ZW5hbnQtY2hhbmdlP3hvbHVyYV9hY2Nlc3NfdG9rZW49JyArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMudG9rZW5OYW1lKSArICcmcmVkaXJlY3RfdXJsPScgKyBlbmNvZGVVUkkod2luZG93LmxvY2F0aW9uLmhyZWYpKVxuICB9XG5cbn1cbiJdfQ==