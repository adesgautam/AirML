"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sb_item_body_1 = require("./sb-item-body");
var squeezebox_1 = require("./squeezebox");
var SBItem = (function () {
    function SBItem(squeezebox) {
        this.collapsed = true;
        this.onToggled = new core_1.EventEmitter();
        this.squeezebox = squeezebox;
    }
    SBItem.prototype.ngAfterViewInit = function () {
        this.body.toggle(this.collapsed);
    };
    SBItem.prototype.toggle = function (collapsed) {
        this.squeezebox.didItemToggled(this);
        this.applyToggle(collapsed);
        this.onToggled.emit(collapsed);
    };
    SBItem.prototype.applyToggle = function (collapsed) {
        this.collapsed = collapsed;
        this.body.toggle(collapsed);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], SBItem.prototype, "collapsed", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], SBItem.prototype, "onToggled", void 0);
    __decorate([
        core_1.ContentChild(sb_item_body_1.SBItemBody),
        __metadata("design:type", sb_item_body_1.SBItemBody)
    ], SBItem.prototype, "body", void 0);
    SBItem = __decorate([
        core_1.Component({
            exportAs: 'sbItem',
            selector: 'sb-item',
            template: "\n        <div class=\"sb-item\" [ngClass]=\"{'is-collapsed': collapsed}\">\n            <ng-content></ng-content>\n        </div>\n    "
        }),
        __param(0, core_1.Inject(core_1.forwardRef(function () { return squeezebox_1.SqueezeBox; }))),
        __metadata("design:paramtypes", [squeezebox_1.SqueezeBox])
    ], SBItem);
    return SBItem;
}());
exports.SBItem = SBItem;
//# sourceMappingURL=sb-item.js.map