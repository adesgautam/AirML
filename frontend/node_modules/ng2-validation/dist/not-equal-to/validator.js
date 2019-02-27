"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notEqualTo = function (notEqualControl) {
    var subscribe = false;
    return function (control) {
        if (!subscribe) {
            subscribe = true;
            notEqualControl.valueChanges.subscribe(function () {
                control.updateValueAndValidity();
            });
        }
        var v = control.value;
        return notEqualControl.value !== v ? null : { notEqualTo: true };
    };
};
//# sourceMappingURL=validator.js.map