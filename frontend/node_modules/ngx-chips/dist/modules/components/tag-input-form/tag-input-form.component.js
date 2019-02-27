var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
var TagInputForm = (function () {
    function TagInputForm() {
        this.onSubmit = new EventEmitter();
        this.onBlur = new EventEmitter();
        this.onFocus = new EventEmitter();
        this.onKeyup = new EventEmitter();
        this.onKeydown = new EventEmitter();
        this.validators = [];
        this.asyncValidators = [];
        this.tabindex = '';
        this.disabled = false;
        this.inputTextChange = new EventEmitter();
        this.inputTextValue = '';
    }
    Object.defineProperty(TagInputForm.prototype, "inputText", {
        get: function () {
            return this.inputTextValue;
        },
        set: function (text) {
            this.inputTextValue = text;
            this.inputTextChange.emit(text);
        },
        enumerable: true,
        configurable: true
    });
    TagInputForm.prototype.ngOnInit = function () {
        this.form = new FormGroup({
            item: new FormControl('', this.validators, this.asyncValidators)
        });
    };
    Object.defineProperty(TagInputForm.prototype, "value", {
        get: function () {
            return this.form.get('item');
        },
        enumerable: true,
        configurable: true
    });
    TagInputForm.prototype.isInputFocused = function () {
        return document.activeElement === this.input.nativeElement;
    };
    TagInputForm.prototype.getErrorMessages = function (messages) {
        var value = this.value;
        return value ? Object.keys(messages)
            .filter(function (err) { return value.hasError(err); })
            .map(function (err) { return messages[err]; }) : [];
    };
    TagInputForm.prototype.hasErrors = function () {
        return this.form.dirty &&
            this.form.value.item &&
            this.form.invalid;
    };
    TagInputForm.prototype.focus = function () {
        this.input.nativeElement.focus();
    };
    TagInputForm.prototype.blur = function () {
        this.input.nativeElement.blur();
    };
    TagInputForm.prototype.getElementPosition = function () {
        return this.input.nativeElement.getBoundingClientRect();
    };
    TagInputForm.prototype.destroy = function () {
        var input = this.input.nativeElement;
        input.parentElement.removeChild(input);
    };
    TagInputForm.prototype.onKeyDown = function ($event) {
        return this.onKeydown.emit($event);
    };
    TagInputForm.prototype.submit = function ($event) {
        this.onSubmit.emit($event);
    };
    return TagInputForm;
}());
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], TagInputForm.prototype, "onSubmit", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], TagInputForm.prototype, "onBlur", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], TagInputForm.prototype, "onFocus", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], TagInputForm.prototype, "onKeyup", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], TagInputForm.prototype, "onKeydown", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TagInputForm.prototype, "placeholder", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], TagInputForm.prototype, "validators", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], TagInputForm.prototype, "asyncValidators", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TagInputForm.prototype, "inputId", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TagInputForm.prototype, "inputClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], TagInputForm.prototype, "inputText", null);
__decorate([
    Input(),
    __metadata("design:type", String)
], TagInputForm.prototype, "tabindex", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], TagInputForm.prototype, "disabled", void 0);
__decorate([
    ViewChild('input'),
    __metadata("design:type", Object)
], TagInputForm.prototype, "input", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], TagInputForm.prototype, "inputTextChange", void 0);
TagInputForm = __decorate([
    Component({
        selector: 'tag-input-form',
        styleUrls: ['./tag-input-form.style.scss'],
        templateUrl: './tag-input-form.template.html'
    })
], TagInputForm);
export { TagInputForm };
//# sourceMappingURL=tag-input-form.component.js.map