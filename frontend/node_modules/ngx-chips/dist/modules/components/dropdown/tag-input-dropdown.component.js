var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ContentChildren, forwardRef, HostListener, Injector, Input, QueryList, TemplateRef, ViewChild, } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';
import { Ng2Dropdown } from 'ng2-material-dropdown';
import { OptionsProvider } from '../../core';
import { TagInputComponent } from '../../components';
var defaults = forwardRef(function () { return OptionsProvider.defaults.dropdown; });
var TagInputDropdown = (function () {
    function TagInputDropdown(injector) {
        var _this = this;
        this.injector = injector;
        this.offset = new defaults().offset;
        this.focusFirstElement = new defaults().focusFirstElement;
        this.showDropdownIfEmpty = new defaults().showDropdownIfEmpty;
        this.minimumTextLength = new defaults().minimumTextLength;
        this.limitItemsTo = new defaults().limitItemsTo;
        this.displayBy = new defaults().displayBy;
        this.identifyBy = new defaults().identifyBy;
        this.matchingFn = new defaults().matchingFn;
        this.appendToBody = new defaults().appendToBody;
        this.keepOpen = new defaults().keepOpen;
        this.items = [];
        this.tagInput = this.injector.get(TagInputComponent);
        this._autocompleteItems = [];
        this.show = function () {
            var value = _this.getFormValue();
            if (_this.autocompleteObservable) {
                return _this.getItemsFromObservable(value);
            }
            if (!_this.showDropdownIfEmpty && !value) {
                return _this.dropdown.hide();
            }
            var position = _this.calculatePosition();
            var items = _this.getMatchingItems(value);
            var hasItems = items.length > 0;
            var isHidden = _this.isVisible === false;
            var showDropdownIfEmpty = _this.showDropdownIfEmpty && hasItems && !value;
            var hasMinimumText = value.trim().length >= _this.minimumTextLength;
            var assertions = [];
            var shouldShow = isHidden && ((hasItems && hasMinimumText) || showDropdownIfEmpty);
            var shouldHide = _this.isVisible && !hasItems;
            _this.setItems(items);
            if (shouldShow) {
                _this.dropdown.show(position);
            }
            else if (shouldHide) {
                _this.hide();
            }
        };
        this.requestAdding = function (item) {
            _this.tagInput.onAddingRequested(true, _this.createTagModel(item));
        };
        this.resetItems = function () {
            _this.items = [];
        };
        this.getItemsFromObservable = function (text) {
            _this.setLoadingState(true);
            var subscribeFn = function (data) {
                _this.setLoadingState(false)
                    .populateItems(data);
                _this.setItems(_this.getMatchingItems(text));
                if (_this.items.length) {
                    _this.dropdown.show(_this.calculatePosition());
                }
                else if (!_this.showDropdownIfEmpty && _this.isVisible) {
                    _this.dropdown.hide();
                }
            };
            _this.autocompleteObservable(text)
                .first()
                .subscribe(subscribeFn, function () { return _this.setLoadingState(false); });
        };
    }
    Object.defineProperty(TagInputDropdown.prototype, "autocompleteItems", {
        get: function () {
            var _this = this;
            var items = this._autocompleteItems;
            if (!items) {
                return [];
            }
            return items.map(function (item) {
                return typeof item === 'string' ? (_a = {},
                    _a[_this.displayBy] = item,
                    _a[_this.identifyBy] = item,
                    _a) : item;
                var _a;
            });
        },
        set: function (items) {
            this._autocompleteItems = items;
        },
        enumerable: true,
        configurable: true
    });
    TagInputDropdown.prototype.ngOnInit = function () {
        var _this = this;
        this.onItemClicked().subscribe(this.requestAdding);
        this.onHide().subscribe(this.resetItems);
        var DEBOUNCE_TIME = 200;
        this.tagInput
            .onTextChange
            .debounceTime(DEBOUNCE_TIME)
            .filter(function (value) {
            if (_this.keepOpen === false) {
                return value.length > 0;
            }
            return true;
        })
            .subscribe(this.show);
    };
    TagInputDropdown.prototype.updatePosition = function () {
        var position = this.tagInput.inputForm.getElementPosition();
        this.dropdown.menu.updatePosition(position);
    };
    Object.defineProperty(TagInputDropdown.prototype, "isVisible", {
        get: function () {
            return this.dropdown.menu.state.menuState.isVisible;
        },
        enumerable: true,
        configurable: true
    });
    TagInputDropdown.prototype.onHide = function () {
        return this.dropdown.onHide;
    };
    TagInputDropdown.prototype.onItemClicked = function () {
        return this.dropdown.onItemClicked;
    };
    Object.defineProperty(TagInputDropdown.prototype, "selectedItem", {
        get: function () {
            return this.dropdown.menu.state.dropdownState.selectedItem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TagInputDropdown.prototype, "state", {
        get: function () {
            return this.dropdown.menu.state;
        },
        enumerable: true,
        configurable: true
    });
    TagInputDropdown.prototype.hide = function () {
        this.resetItems();
        this.dropdown.hide();
    };
    TagInputDropdown.prototype.scrollListener = function () {
        if (!this.isVisible) {
            return;
        }
        this.updatePosition();
    };
    TagInputDropdown.prototype.onWindowBlur = function () {
        this.dropdown.hide();
    };
    TagInputDropdown.prototype.getFormValue = function () {
        return this.tagInput.formValue.trim();
    };
    TagInputDropdown.prototype.calculatePosition = function () {
        return this.tagInput.inputForm.getElementPosition();
    };
    TagInputDropdown.prototype.createTagModel = function (item) {
        var display = typeof item.value === 'string' ? item.value : item.value[this.displayBy];
        var value = typeof item.value === 'string' ? item.value : item.value[this.identifyBy];
        return __assign({}, item.value, (_a = {}, _a[this.tagInput.displayBy] = display, _a[this.tagInput.identifyBy] = value, _a));
        var _a;
    };
    TagInputDropdown.prototype.getMatchingItems = function (value) {
        var _this = this;
        if (!value && !this.showDropdownIfEmpty) {
            return [];
        }
        var dupesAllowed = this.tagInput.allowDupes;
        return this.autocompleteItems.filter(function (item) {
            var hasValue = dupesAllowed ? true : _this.tagInput.tags.some(function (tag) {
                var identifyBy = _this.tagInput.identifyBy;
                var model = typeof tag.model === 'string' ? tag.model : tag.model[identifyBy];
                return model === item[_this.identifyBy];
            });
            return _this.matchingFn(value, item) && hasValue === false;
        });
    };
    TagInputDropdown.prototype.setItems = function (items) {
        this.items = items.slice(0, this.limitItemsTo || items.length);
    };
    TagInputDropdown.prototype.populateItems = function (data) {
        var _this = this;
        this.autocompleteItems = data.map(function (item) {
            return typeof item === 'string' ? (_a = {},
                _a[_this.displayBy] = item,
                _a[_this.identifyBy] = item,
                _a) : item;
            var _a;
        });
        return this;
    };
    TagInputDropdown.prototype.setLoadingState = function (state) {
        this.tagInput.isLoading = state;
        return this;
    };
    return TagInputDropdown;
}());
__decorate([
    ViewChild(Ng2Dropdown),
    __metadata("design:type", Ng2Dropdown)
], TagInputDropdown.prototype, "dropdown", void 0);
__decorate([
    ContentChildren(TemplateRef),
    __metadata("design:type", QueryList)
], TagInputDropdown.prototype, "templates", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TagInputDropdown.prototype, "offset", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TagInputDropdown.prototype, "focusFirstElement", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TagInputDropdown.prototype, "showDropdownIfEmpty", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], TagInputDropdown.prototype, "autocompleteObservable", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TagInputDropdown.prototype, "minimumTextLength", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], TagInputDropdown.prototype, "limitItemsTo", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TagInputDropdown.prototype, "displayBy", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TagInputDropdown.prototype, "identifyBy", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], TagInputDropdown.prototype, "matchingFn", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TagInputDropdown.prototype, "appendToBody", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TagInputDropdown.prototype, "keepOpen", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], TagInputDropdown.prototype, "autocompleteItems", null);
__decorate([
    HostListener('window:scroll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TagInputDropdown.prototype, "scrollListener", null);
__decorate([
    HostListener('window:blur'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TagInputDropdown.prototype, "onWindowBlur", null);
TagInputDropdown = __decorate([
    Component({
        selector: 'tag-input-dropdown',
        templateUrl: './tag-input-dropdown.template.html'
    }),
    __metadata("design:paramtypes", [Injector])
], TagInputDropdown);
export { TagInputDropdown };
//# sourceMappingURL=tag-input-dropdown.component.js.map