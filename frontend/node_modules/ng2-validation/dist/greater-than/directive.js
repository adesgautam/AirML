"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var _1 = require("./");
var GREATER_THAN_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return GreaterThanValidator; }),
    multi: true
};
var GreaterThanValidator = (function () {
    function GreaterThanValidator() {
    }
    GreaterThanValidator.prototype.ngOnInit = function () {
        this.validator = _1.gt(this.gt);
    };
    GreaterThanValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'gt') {
                this.validator = _1.gt(changes[key].currentValue);
                if (this.onChange)
                    this.onChange();
            }
        }
    };
    GreaterThanValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    GreaterThanValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return GreaterThanValidator;
}());
GreaterThanValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[gt][formControlName],[gt][formControl],[gt][ngModel]',
                providers: [GREATER_THAN_VALIDATOR]
            },] },
];
/** @nocollapse */
GreaterThanValidator.ctorParameters = function () { return []; };
GreaterThanValidator.propDecorators = {
    'gt': [{ type: core_1.Input },],
};
exports.GreaterThanValidator = GreaterThanValidator;
//# sourceMappingURL=directive.js.map