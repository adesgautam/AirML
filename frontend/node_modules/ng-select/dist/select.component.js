"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var select_component_css_1 = require("./select.component.css");
var select_component_html_1 = require("./select.component.html");
var option_list_1 = require("./option-list");
exports.SELECT_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return SelectComponent; }),
    multi: true
};
var SelectComponent = (function () {
    function SelectComponent(hostElement) {
        this.hostElement = hostElement;
        // Data input.
        this.options = [];
        // Functionality settings.
        this.allowClear = false;
        this.disabled = false;
        this.multiple = false;
        this.noFilter = 0;
        // Text settings.
        this.notFoundMsg = 'No results found';
        this.placeholder = '';
        this.filterPlaceholder = '';
        this.label = '';
        // Output events.
        this.opened = new core_1.EventEmitter();
        this.closed = new core_1.EventEmitter();
        this.selected = new core_1.EventEmitter();
        this.deselected = new core_1.EventEmitter();
        this.focus = new core_1.EventEmitter();
        this.blur = new core_1.EventEmitter();
        this.noOptionsFound = new core_1.EventEmitter();
        this._value = [];
        this.optionList = new option_list_1.OptionList([]);
        // View state variables.
        this.hasFocus = false;
        this.isOpen = false;
        this.isBelow = true;
        this.filterEnabled = true;
        this.filterInputWidth = 1;
        this.isDisabled = false;
        this.placeholderView = '';
        this.clearClicked = false;
        this.selectContainerClicked = false;
        this.optionListClicked = false;
        this.optionClicked = false;
        this.onChange = function (_) { };
        this.onTouched = function () { };
        /** Keys. **/
        this.KEYS = {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            ESC: 27,
            SPACE: 32,
            UP: 38,
            DOWN: 40
        };
    }
    /** Event handlers. **/
    SelectComponent.prototype.ngOnInit = function () {
        this.placeholderView = this.placeholder;
    };
    SelectComponent.prototype.ngOnChanges = function (changes) {
        this.handleInputChanges(changes);
    };
    SelectComponent.prototype.ngAfterViewInit = function () {
        this.updateState();
    };
    SelectComponent.prototype.onWindowBlur = function () {
        this._blur();
    };
    SelectComponent.prototype.onWindowClick = function () {
        if (!this.selectContainerClicked &&
            (!this.optionListClicked || (this.optionListClicked && this.optionClicked))) {
            this.closeDropdown(this.optionClicked);
            if (!this.optionClicked) {
                this._blur();
            }
        }
        this.clearClicked = false;
        this.selectContainerClicked = false;
        this.optionListClicked = false;
        this.optionClicked = false;
    };
    SelectComponent.prototype.onWindowResize = function () {
        this.updateWidth();
    };
    SelectComponent.prototype.onSelectContainerClick = function (event) {
        this.selectContainerClicked = true;
        if (!this.clearClicked) {
            this.toggleDropdown();
        }
    };
    SelectComponent.prototype.onSelectContainerFocus = function () {
        this._focus();
    };
    SelectComponent.prototype.onSelectContainerKeydown = function (event) {
        this.handleSelectContainerKeydown(event);
    };
    SelectComponent.prototype.onOptionsListClick = function () {
        this.optionListClicked = true;
    };
    SelectComponent.prototype.onDropdownOptionClicked = function (option) {
        this.optionClicked = true;
        this.multiple ? this.toggleSelectOption(option) : this.selectOption(option);
    };
    SelectComponent.prototype.onSingleFilterClick = function () {
        this.selectContainerClicked = true;
    };
    SelectComponent.prototype.onSingleFilterFocus = function () {
        this._focus();
    };
    SelectComponent.prototype.onFilterInput = function (term) {
        this.filter(term);
    };
    SelectComponent.prototype.onSingleFilterKeydown = function (event) {
        this.handleSingleFilterKeydown(event);
    };
    SelectComponent.prototype.onMultipleFilterKeydown = function (event) {
        this.handleMultipleFilterKeydown(event);
    };
    SelectComponent.prototype.onMultipleFilterFocus = function () {
        this._focus();
    };
    SelectComponent.prototype.onClearSelectionClick = function (event) {
        this.clearClicked = true;
        this.clearSelection();
        this.closeDropdown(true);
    };
    SelectComponent.prototype.onDeselectOptionClick = function (option) {
        this.clearClicked = true;
        this.deselectOption(option);
    };
    /** API. **/
    // TODO fix issues with global click/key handler that closes the dropdown.
    SelectComponent.prototype.open = function () {
        this.openDropdown();
    };
    SelectComponent.prototype.close = function () {
        this.closeDropdown(false);
    };
    SelectComponent.prototype.clear = function () {
        this.clearSelection();
    };
    SelectComponent.prototype.select = function (value) {
        this.writeValue(value);
    };
    /** ControlValueAccessor interface methods. **/
    SelectComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    SelectComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    SelectComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    SelectComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    /** Input change handling. **/
    SelectComponent.prototype.handleInputChanges = function (changes) {
        var optionsChanged = changes.hasOwnProperty('options');
        var noFilterChanged = changes.hasOwnProperty('noFilter');
        var placeholderChanged = changes.hasOwnProperty('placeholder');
        if (optionsChanged) {
            this.updateOptionList(changes.options.currentValue);
        }
        if (optionsChanged || noFilterChanged) {
            this.updateFilterEnabled();
        }
        if (placeholderChanged) {
            this.updateState();
        }
    };
    SelectComponent.prototype.updateOptionList = function (options) {
        this.optionList = new option_list_1.OptionList(options);
        this.optionList.value = this._value;
    };
    SelectComponent.prototype.updateFilterEnabled = function () {
        this.filterEnabled = this.optionList.options.length >= this.noFilter;
    };
    Object.defineProperty(SelectComponent.prototype, "value", {
        /** Value. **/
        get: function () {
            return this.multiple ? this._value : this._value[0];
        },
        set: function (v) {
            if (typeof v === 'undefined' || v === null || v === '') {
                v = [];
            }
            else if (typeof v === 'string') {
                v = [v];
            }
            else if (!Array.isArray(v)) {
                throw new TypeError('Value must be a string or an array.');
            }
            this.optionList.value = v;
            this._value = v;
            this.updateState();
        },
        enumerable: true,
        configurable: true
    });
    SelectComponent.prototype.valueChanged = function () {
        this._value = this.optionList.value;
        this.updateState();
        this.onChange(this.value);
    };
    SelectComponent.prototype.updateState = function () {
        this.placeholderView = this.optionList.hasSelected ? '' : this.placeholder;
        this.updateFilterWidth();
    };
    /** Select. **/
    SelectComponent.prototype.selectOption = function (option) {
        if (!option.selected && !option.disabled) {
            this.optionList.select(option, this.multiple);
            this.valueChanged();
            this.selected.emit(option.wrappedOption);
        }
    };
    SelectComponent.prototype.deselectOption = function (option) {
        var _this = this;
        if (option.selected) {
            this.optionList.deselect(option);
            this.valueChanged();
            this.deselected.emit(option.wrappedOption);
            setTimeout(function () {
                if (_this.multiple) {
                    _this.updatePosition();
                    _this.optionList.highlight();
                    if (_this.isOpen) {
                        _this.dropdown.moveHighlightedIntoView();
                    }
                }
            });
        }
    };
    SelectComponent.prototype.clearSelection = function () {
        var selection = this.optionList.selection;
        if (selection.length > 0) {
            this.optionList.clearSelection();
            this.valueChanged();
            if (selection.length === 1) {
                this.deselected.emit(selection[0].wrappedOption);
            }
            else {
                this.deselected.emit(selection.map(function (option) { return option.wrappedOption; }));
            }
        }
    };
    SelectComponent.prototype.toggleSelectOption = function (option) {
        option.selected ? this.deselectOption(option) : this.selectOption(option);
    };
    SelectComponent.prototype.selectHighlightedOption = function () {
        var option = this.optionList.highlightedOption;
        if (option !== null) {
            this.selectOption(option);
            this.closeDropdown(true);
        }
    };
    SelectComponent.prototype.deselectLast = function () {
        var sel = this.optionList.selection;
        if (sel.length > 0) {
            var option = sel[sel.length - 1];
            this.deselectOption(option);
            this.setMultipleFilterInput(option.label + ' ');
        }
    };
    /** Dropdown. **/
    SelectComponent.prototype.toggleDropdown = function () {
        if (!this.isDisabled) {
            this.isOpen ? this.closeDropdown(true) : this.openDropdown();
        }
    };
    SelectComponent.prototype.openDropdown = function () {
        if (!this.isOpen) {
            this.updateWidth();
            this.updatePosition();
            this.isOpen = true;
            if (this.multiple && this.filterEnabled) {
                this.filterInput.nativeElement.focus();
            }
            this.opened.emit(null);
        }
    };
    SelectComponent.prototype.closeDropdown = function (focus) {
        if (this.isOpen) {
            this.clearFilterInput();
            this.updateFilterWidth();
            this.isOpen = false;
            if (focus) {
                this._focusSelectContainer();
            }
            this.closed.emit(null);
        }
    };
    /** Filter. **/
    SelectComponent.prototype.filter = function (term) {
        var _this = this;
        if (this.multiple) {
            if (!this.isOpen) {
                this.openDropdown();
            }
            this.updateFilterWidth();
        }
        setTimeout(function () {
            var hasShown = _this.optionList.filter(term);
            if (!hasShown) {
                _this.noOptionsFound.emit(term);
            }
        });
    };
    SelectComponent.prototype.clearFilterInput = function () {
        if (this.multiple && this.filterEnabled) {
            this.filterInput.nativeElement.value = '';
        }
    };
    SelectComponent.prototype.setMultipleFilterInput = function (value) {
        if (this.filterEnabled) {
            this.filterInput.nativeElement.value = value;
        }
    };
    SelectComponent.prototype.handleSelectContainerKeydown = function (event) {
        var _this = this;
        var key = event.which;
        if (this.isOpen) {
            if (key === this.KEYS.ESC || (key === this.KEYS.UP && event.altKey)) {
                this.closeDropdown(true);
            }
            else if (key === this.KEYS.TAB) {
                this.closeDropdown(event.shiftKey);
                this._blur();
            }
            else if (key === this.KEYS.ENTER) {
                this.selectHighlightedOption();
            }
            else if (key === this.KEYS.UP) {
                this.optionList.highlightPreviousOption();
                this.dropdown.moveHighlightedIntoView();
                if (!this.filterEnabled) {
                    event.preventDefault();
                }
            }
            else if (key === this.KEYS.DOWN) {
                this.optionList.highlightNextOption();
                this.dropdown.moveHighlightedIntoView();
                if (!this.filterEnabled) {
                    event.preventDefault();
                }
            }
        }
        else {
            // DEPRICATED --> SPACE
            if (key === this.KEYS.ENTER || key === this.KEYS.SPACE ||
                (key === this.KEYS.DOWN && event.altKey)) {
                /* FIREFOX HACK:
                 *
                 * The setTimeout is added to prevent the enter keydown event
                 * to be triggered for the filter input field, which causes
                 * the dropdown to be closed again.
                 */
                setTimeout(function () { _this.openDropdown(); });
            }
            else if (key === this.KEYS.TAB) {
                this._blur();
            }
        }
    };
    SelectComponent.prototype.handleMultipleFilterKeydown = function (event) {
        var key = event.which;
        if (key === this.KEYS.BACKSPACE) {
            if (this.optionList.hasSelected && this.filterEnabled &&
                this.filterInput.nativeElement.value === '') {
                this.deselectLast();
            }
        }
    };
    SelectComponent.prototype.handleSingleFilterKeydown = function (event) {
        var key = event.which;
        if (key === this.KEYS.ESC || key === this.KEYS.TAB
            || key === this.KEYS.UP || key === this.KEYS.DOWN
            || key === this.KEYS.ENTER) {
            this.handleSelectContainerKeydown(event);
        }
    };
    /** View. **/
    SelectComponent.prototype._blur = function () {
        if (this.hasFocus) {
            this.hasFocus = false;
            this.onTouched();
            this.blur.emit(null);
        }
    };
    SelectComponent.prototype._focus = function () {
        if (!this.hasFocus) {
            this.hasFocus = true;
            this.focus.emit(null);
        }
    };
    SelectComponent.prototype._focusSelectContainer = function () {
        this.selectionSpan.nativeElement.focus();
    };
    SelectComponent.prototype.updateWidth = function () {
        this.width = this.selectionSpan.nativeElement.getBoundingClientRect().width;
    };
    SelectComponent.prototype.updatePosition = function () {
        var hostRect = this.hostElement.nativeElement.getBoundingClientRect();
        var spanRect = this.selectionSpan.nativeElement.getBoundingClientRect();
        this.left = spanRect.left - hostRect.left;
        this.top = (spanRect.top - hostRect.top) + spanRect.height;
    };
    SelectComponent.prototype.updateFilterWidth = function () {
        if (typeof this.filterInput !== 'undefined') {
            var value = this.filterInput.nativeElement.value;
            this.filterInputWidth = value.length === 0 ?
                1 + this.placeholderView.length * 10 : 1 + value.length * 10;
        }
    };
    return SelectComponent;
}());
SelectComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'ng-select',
                template: select_component_html_1.TEMPLATE,
                styles: [select_component_css_1.STYLE],
                providers: [exports.SELECT_VALUE_ACCESSOR],
                encapsulation: core_1.ViewEncapsulation.None
            },] },
];
/** @nocollapse */
SelectComponent.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
]; };
SelectComponent.propDecorators = {
    'options': [{ type: core_1.Input },],
    'allowClear': [{ type: core_1.Input },],
    'disabled': [{ type: core_1.Input },],
    'multiple': [{ type: core_1.Input },],
    'noFilter': [{ type: core_1.Input },],
    'highlightColor': [{ type: core_1.Input },],
    'highlightTextColor': [{ type: core_1.Input },],
    'notFoundMsg': [{ type: core_1.Input },],
    'placeholder': [{ type: core_1.Input },],
    'filterPlaceholder': [{ type: core_1.Input },],
    'label': [{ type: core_1.Input },],
    'opened': [{ type: core_1.Output },],
    'closed': [{ type: core_1.Output },],
    'selected': [{ type: core_1.Output },],
    'deselected': [{ type: core_1.Output },],
    'focus': [{ type: core_1.Output },],
    'blur': [{ type: core_1.Output },],
    'noOptionsFound': [{ type: core_1.Output },],
    'selectionSpan': [{ type: core_1.ViewChild, args: ['selection',] },],
    'dropdown': [{ type: core_1.ViewChild, args: ['dropdown',] },],
    'filterInput': [{ type: core_1.ViewChild, args: ['filterInput',] },],
    'optionTemplate': [{ type: core_1.ContentChild, args: ['optionTemplate',] },],
    'onWindowBlur': [{ type: core_1.HostListener, args: ['window:blur',] },],
    'onWindowClick': [{ type: core_1.HostListener, args: ['window:click',] },],
    'onWindowResize': [{ type: core_1.HostListener, args: ['window:resize',] },],
};
exports.SelectComponent = SelectComponent;
