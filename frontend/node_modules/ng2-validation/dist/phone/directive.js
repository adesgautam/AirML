"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var _1 = require("./");
var PHONE_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return PhoneValidator; }),
    multi: true
};
var PhoneValidator = (function () {
    function PhoneValidator() {
    }
    PhoneValidator.prototype.ngOnInit = function () {
        this.validator = _1.phone(this.phone);
    };
    PhoneValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'phone') {
                this.validator = _1.phone(changes[key].currentValue);
                if (this.onChange)
                    this.onChange();
            }
        }
    };
    PhoneValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    PhoneValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return PhoneValidator;
}());
PhoneValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[phone][formControlName],[phone][formControl],[phone][ngModel]',
                providers: [PHONE_VALIDATOR]
            },] },
];
/** @nocollapse */
PhoneValidator.ctorParameters = function () { return []; };
PhoneValidator.propDecorators = {
    'phone': [{ type: core_1.Input },],
};
exports.PhoneValidator = PhoneValidator;
//# sourceMappingURL=directive.js.map