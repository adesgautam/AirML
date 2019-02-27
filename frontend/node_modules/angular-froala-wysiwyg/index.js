import { NgModule } from '@angular/core';
import { FroalaEditorModule } from './editor';
import { FroalaViewModule } from './view';
export { FroalaEditorDirective, FroalaEditorModule } from './editor';
export { FroalaViewDirective, FroalaViewModule } from './view';
var MODULES = [
    FroalaEditorModule,
    FroalaViewModule
];
var FERootModule = (function () {
    function FERootModule() {
    }
    FERootModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        FroalaEditorModule.forRoot(),
                        FroalaViewModule.forRoot()
                    ],
                    exports: MODULES
                },] },
    ];
    /** @nocollapse */
    FERootModule.ctorParameters = function () { return []; };
    return FERootModule;
}());
export { FERootModule };
//# sourceMappingURL=index.js.map