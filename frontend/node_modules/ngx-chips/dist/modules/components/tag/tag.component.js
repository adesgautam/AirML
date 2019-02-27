var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, TemplateRef, ElementRef, HostListener, HostBinding, ViewChild, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { TagRipple } from '../tag';
var KeyboardEvent = global.KeyboardEvent;
var MouseEvent = global.MouseEvent;
var navigator = typeof window !== 'undefined' ? window.navigator : {
    userAgent: 'Chrome',
    vendor: 'Google Inc'
};
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
var TagComponent = (function () {
    function TagComponent(element, renderer, cdRef) {
        this.element = element;
        this.renderer = renderer;
        this.cdRef = cdRef;
        this.disabled = false;
        this.onSelect = new EventEmitter();
        this.onRemove = new EventEmitter();
        this.onBlur = new EventEmitter();
        this.onKeyDown = new EventEmitter();
        this.onTagEdited = new EventEmitter();
        this.editing = false;
        this.rippleState = 'none';
    }
    Object.defineProperty(TagComponent.prototype, "readonly", {
        get: function () {
            return typeof this.model !== 'string' && this.model.readonly === true;
        },
        enumerable: true,
        configurable: true
    });
    ;
    TagComponent.prototype.select = function ($event) {
        if (this.readonly || this.disabled) {
            return;
        }
        if ($event) {
            $event.stopPropagation();
        }
        this.focus();
        this.onSelect.emit(this.model);
    };
    TagComponent.prototype.remove = function ($event) {
        $event.stopPropagation();
        this.onRemove.emit(this);
    };
    TagComponent.prototype.focus = function () {
        this.element.nativeElement.focus();
    };
    TagComponent.prototype.move = function () {
        this.moving = true;
    };
    TagComponent.prototype.keydown = function (event) {
        if (this.editing) {
            event.keyCode === 13 ? this.disableEditMode(event) : undefined;
            return;
        }
        this.onKeyDown.emit({ event: event, model: this.model });
    };
    TagComponent.prototype.blink = function () {
        var classList = this.element.nativeElement.classList;
        classList.add('blink');
        setTimeout(function () { return classList.remove('blink'); }, 50);
    };
    TagComponent.prototype.toggleEditMode = function () {
        if (this.editable) {
            this.editing ? undefined : this.activateEditMode();
        }
    };
    TagComponent.prototype.onBlurred = function (event) {
        if (!this.editable) {
            return;
        }
        var value = event.target.innerText;
        var result = typeof this.model === 'string' ? value : (_a = {}, _a[this.identifyBy] = value, _a[this.displayBy] = value, _a);
        this.disableEditMode();
        this.onBlur.emit(result);
        var _a;
    };
    TagComponent.prototype.getDisplayValue = function (item) {
        return typeof item === 'string' ? item : item[this.displayBy];
    };
    Object.defineProperty(TagComponent.prototype, "isRippleVisible", {
        get: function () {
            return !this.readonly &&
                !this.editing &&
                isChrome &&
                this.hasRipple;
        },
        enumerable: true,
        configurable: true
    });
    TagComponent.prototype.getContentEditableText = function () {
        var input = this.getContentEditable();
        return input ? input.innerText.trim() : '';
    };
    TagComponent.prototype.setContentEditableText = function (model) {
        var input = this.getContentEditable();
        var value = this.getDisplayValue(model);
        input.innerText = value;
    };
    TagComponent.prototype.activateEditMode = function () {
        var classList = this.element.nativeElement.classList;
        classList.add('tag--editing');
        this.editing = true;
    };
    TagComponent.prototype.disableEditMode = function ($event) {
        var classList = this.element.nativeElement.classList;
        var input = this.getContentEditableText();
        this.editing = false;
        classList.remove('tag--editing');
        if (!input) {
            this.setContentEditableText(this.model);
            return;
        }
        this.storeNewValue(input);
        this.cdRef.detectChanges();
        if ($event) {
            $event.preventDefault();
        }
    };
    TagComponent.prototype.storeNewValue = function (input) {
        var _this = this;
        var exists = function (model) {
            return typeof model === 'string' ?
                model === input :
                model[_this.displayBy] === input;
        };
        if (exists(this.model) === false) {
            var model = typeof this.model === 'string' ? input : (_a = {}, _a[this.identifyBy] = input, _a[this.displayBy] = input, _a);
            this.model = model;
            this.onTagEdited.emit(model);
        }
        var _a;
    };
    TagComponent.prototype.getContentEditable = function () {
        return this.element.nativeElement.querySelector('[contenteditable]');
    };
    TagComponent.prototype.isDeleteIconVisible = function () {
        return !this.readonly &&
            !this.disabled &&
            this.removable &&
            !this.editing;
    };
    return TagComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Object)
], TagComponent.prototype, "model", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], TagComponent.prototype, "removable", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], TagComponent.prototype, "editable", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], TagComponent.prototype, "template", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TagComponent.prototype, "displayBy", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TagComponent.prototype, "identifyBy", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], TagComponent.prototype, "index", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], TagComponent.prototype, "hasRipple", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TagComponent.prototype, "disabled", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], TagComponent.prototype, "onSelect", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], TagComponent.prototype, "onRemove", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], TagComponent.prototype, "onBlur", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], TagComponent.prototype, "onKeyDown", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], TagComponent.prototype, "onTagEdited", void 0);
__decorate([
    HostBinding('class.moving'),
    __metadata("design:type", Boolean)
], TagComponent.prototype, "moving", void 0);
__decorate([
    ViewChild(TagRipple),
    __metadata("design:type", TagRipple)
], TagComponent.prototype, "ripple", void 0);
__decorate([
    HostListener('keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TagComponent.prototype, "keydown", null);
TagComponent = __decorate([
    Component({
        selector: 'tag',
        templateUrl: './tag.template.html',
        styleUrls: ['./tag-component.style.scss']
    }),
    __metadata("design:paramtypes", [ElementRef,
        Renderer2,
        ChangeDetectorRef])
], TagComponent);
export { TagComponent };
//# sourceMappingURL=tag.component.js.map