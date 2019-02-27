"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var _1 = require("./");
var LESS_THAN_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return LessThanValidator; }),
    multi: true
};
var LessThanValidator = (function () {
    function LessThanValidator() {
    }
    LessThanValidator.prototype.ngOnInit = function () {
        this.validator = _1.lt(this.lt);
    };
    LessThanValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'lt') {
                this.validator = _1.lt(changes[key].currentValue);
                if (this.onChange)
                    this.onChange();
            }
        }
    };
    LessThanValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    LessThanValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return LessThanValidator;
}());
LessThanValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[lt][formControlName],[lt][formControl],[lt][ngModel]',
                providers: [LESS_THAN_VALIDATOR]
            },] },
];
/** @nocollapse */
LessThanValidator.ctorParameters = function () { return []; };
LessThanValidator.propDecorators = {
    'lt': [{ type: core_1.Input },],
};
exports.LessThanValidator = LessThanValidator;
//# sourceMappingURL=directive.js.map