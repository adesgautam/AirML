"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var helpers_1 = require("./helpers");
var color_picker_service_1 = require("./color-picker.service");
var color_picker_component_1 = require("./color-picker.component");
var color_picker_directive_1 = require("./color-picker.directive");
var ColorPickerModule = (function () {
    function ColorPickerModule() {
    }
    ColorPickerModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    providers: [color_picker_service_1.ColorPickerService],
                    declarations: [color_picker_component_1.ColorPickerComponent, color_picker_directive_1.ColorPickerDirective, helpers_1.TextDirective, helpers_1.SliderDirective],
                    exports: [color_picker_directive_1.ColorPickerDirective],
                    entryComponents: [color_picker_component_1.ColorPickerComponent]
                },] },
    ];
    /** @nocollapse */
    ColorPickerModule.ctorParameters = function () { return []; };
    return ColorPickerModule;
}());
exports.ColorPickerModule = ColorPickerModule;
//# sourceMappingURL=color-picker.module.js.map