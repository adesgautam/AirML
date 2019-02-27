"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var option_1 = require("./option");
var diacritics_1 = require("./diacritics");
var OptionList = (function () {
    function OptionList(options) {
        /* Consider using these for performance improvement. */
        // private _selection: Array<Option>;
        // private _filtered: Array<Option>;
        // private _value: Array<string>;
        this._highlightedOption = null;
        if (typeof options === 'undefined' || options === null) {
            options = [];
        }
        this._options = options.map(function (option) {
            var o = new option_1.Option(option);
            if (option.disabled) {
                o.disabled = true;
            }
            return o;
        });
        this._hasShown = this._options.length > 0;
        this.highlight();
    }
    Object.defineProperty(OptionList.prototype, "hasShown", {
        get: function () {
            return this._hasShown;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OptionList.prototype, "hasSelected", {
        get: function () {
            return this._hasSelected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OptionList.prototype, "options", {
        /** Options. **/
        get: function () {
            return this._options;
        },
        enumerable: true,
        configurable: true
    });
    OptionList.prototype.getOptionsByValue = function (value) {
        return this.options.filter(function (option) {
            return option.value === value;
        });
    };
    Object.defineProperty(OptionList.prototype, "value", {
        /** Value. **/
        get: function () {
            return this.selection.map(function (option) { return option.value; });
        },
        set: function (v) {
            v = typeof v === 'undefined' || v === null ? [] : v;
            this.options.forEach(function (option) {
                option.selected = v.indexOf(option.value) > -1;
            });
            this.updateHasSelected();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OptionList.prototype, "selection", {
        /** Selection. **/
        get: function () {
            return this.options.filter(function (option) { return option.selected; });
        },
        enumerable: true,
        configurable: true
    });
    OptionList.prototype.select = function (option, multiple) {
        if (!multiple) {
            this.clearSelection();
        }
        option.selected = true;
        this.updateHasSelected();
    };
    OptionList.prototype.deselect = function (option) {
        option.selected = false;
        this.updateHasSelected();
    };
    OptionList.prototype.clearSelection = function () {
        this.options.forEach(function (option) {
            option.selected = false;
        });
        this._hasSelected = false;
    };
    OptionList.prototype.updateHasSelected = function () {
        this._hasSelected = this.options.some(function (option) { return option.selected; });
    };
    Object.defineProperty(OptionList.prototype, "filtered", {
        /** Filter. **/
        get: function () {
            return this.options.filter(function (option) { return option.shown; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OptionList.prototype, "filteredEnabled", {
        get: function () {
            return this.options.filter(function (option) { return option.shown && !option.disabled; });
        },
        enumerable: true,
        configurable: true
    });
    OptionList.prototype.filter = function (term) {
        var anyShown = false;
        if (term.trim() === '') {
            this.resetFilter();
            anyShown = this.options.length > 0;
        }
        else {
            this.options.forEach(function (option) {
                var l = diacritics_1.Diacritics.strip(option.label).toUpperCase();
                var t = diacritics_1.Diacritics.strip(term).toUpperCase();
                option.shown = l.indexOf(t) > -1;
                if (option.shown) {
                    anyShown = true;
                }
            });
        }
        this.highlight();
        this._hasShown = anyShown;
        return anyShown;
    };
    OptionList.prototype.resetFilter = function () {
        this.options.forEach(function (option) {
            option.shown = true;
        });
    };
    Object.defineProperty(OptionList.prototype, "highlightedOption", {
        /** Highlight. **/
        get: function () {
            return this._highlightedOption;
        },
        enumerable: true,
        configurable: true
    });
    OptionList.prototype.highlight = function () {
        var option = this.hasShownSelected() ?
            this.getFirstShownSelected() : this.getFirstShown();
        this.highlightOption(option);
    };
    OptionList.prototype.highlightOption = function (option) {
        this.clearHighlightedOption();
        if (option !== null) {
            option.highlighted = true;
            this._highlightedOption = option;
        }
    };
    OptionList.prototype.highlightNextOption = function () {
        var shownEnabledOptions = this.filteredEnabled;
        var index = this.getHighlightedIndexFromList(shownEnabledOptions);
        if (index > -1 && index < shownEnabledOptions.length - 1) {
            this.highlightOption(shownEnabledOptions[index + 1]);
        }
    };
    OptionList.prototype.highlightPreviousOption = function () {
        var shownEnabledOptions = this.filteredEnabled;
        var index = this.getHighlightedIndexFromList(shownEnabledOptions);
        if (index > 0) {
            this.highlightOption(shownEnabledOptions[index - 1]);
        }
    };
    OptionList.prototype.clearHighlightedOption = function () {
        if (this.highlightedOption !== null) {
            this.highlightedOption.highlighted = false;
            this._highlightedOption = null;
        }
    };
    OptionList.prototype.getHighlightedIndexFromList = function (options) {
        for (var i = 0; i < options.length; i++) {
            if (options[i].highlighted) {
                return i;
            }
        }
        return -1;
    };
    OptionList.prototype.getHighlightedIndex = function () {
        return this.getHighlightedIndexFromList(this.filtered);
    };
    /** Util. **/
    OptionList.prototype.hasShownSelected = function () {
        return this.options.some(function (option) {
            return option.shown && option.selected;
        });
    };
    OptionList.prototype.getFirstShown = function () {
        for (var _i = 0, _a = this.options; _i < _a.length; _i++) {
            var option = _a[_i];
            if (option.shown) {
                return option;
            }
        }
        return null;
    };
    OptionList.prototype.getFirstShownSelected = function () {
        for (var _i = 0, _a = this.options; _i < _a.length; _i++) {
            var option = _a[_i];
            if (option.shown && option.selected) {
                return option;
            }
        }
        return null;
    };
    // v0 and v1 are assumed not to be undefined or null.
    OptionList.equalValues = function (v0, v1) {
        if (v0.length !== v1.length) {
            return false;
        }
        var a = v0.slice().sort();
        var b = v1.slice().sort();
        return a.every(function (v, i) {
            return v === b[i];
        });
    };
    return OptionList;
}());
exports.OptionList = OptionList;
