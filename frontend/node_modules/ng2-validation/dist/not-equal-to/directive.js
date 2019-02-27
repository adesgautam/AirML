"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var _1 = require("./");
var NOT_EQUAL_TO_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return NotEqualToValidator; }),
    multi: true
};
var NotEqualToValidator = (function () {
    function NotEqualToValidator() {
    }
    NotEqualToValidator.prototype.ngOnInit = function () {
        this.validator = _1.notEqualTo(this.notEqualTo);
    };
    NotEqualToValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    return NotEqualToValidator;
}());
NotEqualToValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[notEqualTo][formControlName],[notEqualTo][formControl],[notEqualTo][ngModel]',
                providers: [NOT_EQUAL_TO_VALIDATOR]
            },] },
];
/** @nocollapse */
NotEqualToValidator.ctorParameters = function () { return []; };
NotEqualToValidator.propDecorators = {
    'notEqualTo': [{ type: core_1.Input },],
};
exports.NotEqualToValidator = NotEqualToValidator;
//# sourceMappingURL=directive.js.map