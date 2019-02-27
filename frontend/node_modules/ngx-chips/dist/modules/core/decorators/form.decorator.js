var Form = (function () {
    function Form() {
    }
    Form.prototype.hasFormErrors = function () {
        return this.form && this.form.hasErrors();
    };
    Form.prototype.isInputFocused = function () {
        return this.form && this.form.isInputFocused();
    };
    Object.defineProperty(Form.prototype, "formValue", {
        get: function () {
            var form = this.form.value;
            return form ? form.value : '';
        },
        enumerable: true,
        configurable: true
    });
    return Form;
}());
export { Form };
//# sourceMappingURL=form.decorator.js.map