"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var squeezebox_1 = require("./components/squeezebox");
var sb_item_1 = require("./components/sb-item");
var sb_item_head_1 = require("./components/sb-item-head");
var sb_item_body_1 = require("./components/sb-item-body");
exports.SQUEEZEBOX_COMPONENTS = [squeezebox_1.SqueezeBox, sb_item_1.SBItem, sb_item_head_1.SBItemHead, sb_item_body_1.SBItemBody];
var SqueezeBoxModule = (function () {
    function SqueezeBoxModule() {
    }
    SqueezeBoxModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [exports.SQUEEZEBOX_COMPONENTS],
            exports: [exports.SQUEEZEBOX_COMPONENTS]
        })
    ], SqueezeBoxModule);
    return SqueezeBoxModule;
}());
exports.SqueezeBoxModule = SqueezeBoxModule;
__export(require("./components/sb-item"));
__export(require("./components/sb-item-head"));
__export(require("./components/sb-item-body"));
__export(require("./components/squeezebox"));
//# sourceMappingURL=index.js.map