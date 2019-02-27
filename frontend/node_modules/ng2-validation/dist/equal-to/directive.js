"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var _1 = require("./");
var EQUAL_TO_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return EqualToValidator; }),
    multi: true
};
var EqualToValidator = (function () {
    function EqualToValidator() {
    }
    EqualToValidator.prototype.ngOnInit = function () {
        this.validator = _1.equalTo(this.equalTo);
    };
    EqualToValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    return EqualToValidator;
}());
EqualToValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[equalTo][formControlName],[equalTo][formControl],[equalTo][ngModel]',
                providers: [EQUAL_TO_VALIDATOR]
            },] },
];
/** @nocollapse */
EqualToValidator.ctorParameters = function () { return []; };
EqualToValidator.propDecorators = {
    'equalTo': [{ type: core_1.Input },],
};
exports.EqualToValidator = EqualToValidator;
//# sourceMappingURL=directive.js.map