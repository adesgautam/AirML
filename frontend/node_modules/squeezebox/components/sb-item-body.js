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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SBItemBody = (function () {
    function SBItemBody(renderer) {
        this.renderer = renderer;
    }
    SBItemBody.prototype.ngAfterViewInit = function () {
        var _this = this;
        var el = this.bodyEl.nativeElement;
        el.addEventListener('transitionend', function (e) {
            // check transition ended, so can use regular height if not expanded
            if (el.offsetHeight !== 0) {
                _this.setHeight('auto');
            }
        }, false);
    };
    SBItemBody.prototype.toggle = function (collapsed) {
        var _this = this;
        var height = '0';
        var el = this.bodyEl.nativeElement;
        this.setHeight('auto');
        height = el.offsetHeight + 'px';
        if (!collapsed) {
            this.setHeight('0');
        }
        else {
            this.setHeight(height);
            height = '0';
        }
        setTimeout(function () { return _this.setHeight(height); }, 50);
    };
    SBItemBody.prototype.setHeight = function (height) {
        var el = this.bodyEl.nativeElement;
        this.renderer.setElementStyle(el, 'height', height);
    };
    __decorate([
        core_1.ViewChild('body'),
        __metadata("design:type", core_1.ElementRef)
    ], SBItemBody.prototype, "bodyEl", void 0);
    SBItemBody = __decorate([
        core_1.Component({
            exportAs: 'sbItemBody',
            selector: 'sb-item-body',
            template: "\n        <div #body class=\"sb-item-body\" style=\"height: 0;\">\n            <div class=\"inner\"><ng-content></ng-content></div>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [core_1.Renderer])
    ], SBItemBody);
    return SBItemBody;
}());
exports.SBItemBody = SBItemBody;
//# sourceMappingURL=sb-item-body.js.map