"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var google_chart_component_1 = require("./google-chart/google-chart.component");
var google_charts_loader_service_1 = require("./google-charts-loader.service");
var Ng2GoogleChartsModule = (function () {
    function Ng2GoogleChartsModule() {
    }
    return Ng2GoogleChartsModule;
}());
Ng2GoogleChartsModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [
                    google_chart_component_1.GoogleChartComponent
                ],
                providers: [
                    google_charts_loader_service_1.GoogleChartsLoaderService
                ],
                exports: [
                    google_chart_component_1.GoogleChartComponent
                ]
            },] },
];
/** @nocollapse */
Ng2GoogleChartsModule.ctorParameters = function () { return []; };
exports.Ng2GoogleChartsModule = Ng2GoogleChartsModule;
