"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var libphonenumber_js_1 = require("libphonenumber-js");
var lang_1 = require("../util/lang");
exports.phone = function (country) {
    return function (control) {
        if (lang_1.isPresent(forms_1.Validators.required(control)))
            return null;
        var v = control.value;
        return libphonenumber_js_1.isValidNumber({ phone: v, country: country }) ? null : { phone: true };
    };
};
//# sourceMappingURL=validator.js.map