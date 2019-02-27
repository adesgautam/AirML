"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var WizardStepComponent = (function () {
    function WizardStepComponent() {
        this.hidden = false;
        this.isValid = true;
        this.showNext = true;
        this.showPrev = true;
        this.onNext = new core_1.EventEmitter();
        this.onPrev = new core_1.EventEmitter();
        this.onComplete = new core_1.EventEmitter();
        this._isActive = false;
        this.isDisabled = true;
    }
    Object.defineProperty(WizardStepComponent.prototype, "isActive", {
        get: function () {
            return this._isActive;
        },
        set: function (isActive) {
            this._isActive = isActive;
            this.isDisabled = false;
        },
        enumerable: true,
        configurable: true
    });
    return WizardStepComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WizardStepComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WizardStepComponent.prototype, "hidden", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WizardStepComponent.prototype, "isValid", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WizardStepComponent.prototype, "showNext", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WizardStepComponent.prototype, "showPrev", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], WizardStepComponent.prototype, "onNext", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], WizardStepComponent.prototype, "onPrev", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], WizardStepComponent.prototype, "onComplete", void 0);
__decorate([
    core_1.Input('isActive'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], WizardStepComponent.prototype, "isActive", null);
WizardStepComponent = __decorate([
    core_1.Component({
        selector: 'wizard-step',
        template: "\n    <div [hidden]=\"!isActive\">\n      <ng-content></ng-content>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], WizardStepComponent);
exports.WizardStepComponent = WizardStepComponent;
//# sourceMappingURL=wizard-step.component.js.map