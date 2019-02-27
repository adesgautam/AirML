"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var _1 = require("./");
var DIGITS_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return DigitsValidator; }),
    multi: true
};
var DigitsValidator = (function () {
    function DigitsValidator() {
    }
    DigitsValidator.prototype.validate = function (c) {
        return _1.digits(c);
    };
    return DigitsValidator;
}());
DigitsValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[digits][formControlName],[digits][formControl],[digits][ngModel]',
                providers: [DIGITS_VALIDATOR]
            },] },
];
/** @nocollapse */
DigitsValidator.ctorParameters = function () { return []; };
exports.DigitsValidator = DigitsValidator;
//# sourceMappingURL=directive.js.map