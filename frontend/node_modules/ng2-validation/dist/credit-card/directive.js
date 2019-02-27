"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var _1 = require("./");
var CREDIT_CARD_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return CreditCardValidator; }),
    multi: true
};
var CreditCardValidator = (function () {
    function CreditCardValidator() {
    }
    CreditCardValidator.prototype.validate = function (c) {
        return _1.creditCard(c);
    };
    return CreditCardValidator;
}());
CreditCardValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[creditCard][formControlName],[creditCard][formControl],[creditCard][ngModel]',
                providers: [CREDIT_CARD_VALIDATOR]
            },] },
];
/** @nocollapse */
CreditCardValidator.ctorParameters = function () { return []; };
exports.CreditCardValidator = CreditCardValidator;
//# sourceMappingURL=directive.js.map