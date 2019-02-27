"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var base64_1 = require("./base64");
var credit_card_1 = require("./credit-card");
var date_1 = require("./date");
var date_ios_1 = require("./date-ios");
var digits_1 = require("./digits");
var email_1 = require("./email");
var equal_1 = require("./equal");
var equal_to_1 = require("./equal-to");
var greater_than_1 = require("./greater-than");
var greater_than_equal_1 = require("./greater-than-equal");
var json_1 = require("./json");
var less_than_1 = require("./less-than");
var less_than_equal_1 = require("./less-than-equal");
var max_1 = require("./max");
var max_date_1 = require("./max-date");
var min_1 = require("./min");
var min_date_1 = require("./min-date");
var not_equal_1 = require("./not-equal");
var not_equal_to_1 = require("./not-equal-to");
var number_1 = require("./number");
var phone_1 = require("./phone");
var range_1 = require("./range");
var range_length_1 = require("./range-length");
var url_1 = require("./url");
var uuid_1 = require("./uuid");
exports.CustomValidators = {
    base64: base64_1.base64,
    creditCard: credit_card_1.creditCard,
    date: date_1.date,
    dateISO: date_ios_1.dateISO,
    digits: digits_1.digits,
    email: email_1.email,
    equal: equal_1.equal,
    equalTo: equal_to_1.equalTo,
    gt: greater_than_1.gt,
    gte: greater_than_equal_1.gte,
    json: json_1.json,
    lt: less_than_1.lt,
    lte: less_than_equal_1.lte,
    max: max_1.max,
    maxDate: max_date_1.maxDate,
    min: min_1.min,
    minDate: min_date_1.minDate,
    notEqual: not_equal_1.notEqual,
    notEqualTo: not_equal_to_1.notEqualTo,
    number: number_1.number,
    phone: phone_1.phone,
    range: range_1.range,
    rangeLength: range_length_1.rangeLength,
    url: url_1.url,
    uuid: uuid_1.uuid
};
var CUSTOM_FORM_DIRECTIVES = [
    base64_1.Base64Validator,
    credit_card_1.CreditCardValidator,
    date_1.DateValidator,
    date_ios_1.DateISOValidator,
    digits_1.DigitsValidator,
    email_1.EmailValidator,
    equal_1.EqualValidator,
    equal_to_1.EqualToValidator,
    greater_than_1.GreaterThanValidator,
    greater_than_equal_1.GreaterThanEqualValidator,
    json_1.JSONValidator,
    less_than_1.LessThanValidator,
    less_than_equal_1.LessThanEqualValidator,
    max_1.MaxValidator,
    max_date_1.MaxDateValidator,
    min_1.MinValidator,
    min_date_1.MinDateValidator,
    not_equal_1.NotEqualValidator,
    not_equal_to_1.NotEqualToValidator,
    number_1.NumberValidator,
    phone_1.PhoneValidator,
    range_1.RangeValidator,
    range_length_1.RangeLengthValidator,
    url_1.UrlValidator,
    uuid_1.UUIDValidator
];
var CustomFormsModule = (function () {
    function CustomFormsModule() {
    }
    return CustomFormsModule;
}());
CustomFormsModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [CUSTOM_FORM_DIRECTIVES],
                exports: [CUSTOM_FORM_DIRECTIVES]
            },] },
];
/** @nocollapse */
CustomFormsModule.ctorParameters = function () { return []; };
exports.CustomFormsModule = CustomFormsModule;
//# sourceMappingURL=index.js.map