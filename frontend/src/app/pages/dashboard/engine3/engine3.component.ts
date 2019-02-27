import { Component, OnInit } from '@angular/core';

import '../../../../assets/charts/amchart/amcharts.js';
import '../../../../assets/charts/amchart/gauge.js';
import '../../../../assets/charts/amchart/pie.js';
import '../../../../assets/charts/amchart/serial.js';
import '../../../../assets/charts/amchart/light.js';
import '../../../../assets/charts/amchart/ammap.js';
import '../../../../assets/charts/amchart/worldLow.js';

declare const AmCharts: any;
declare const $: any;

@Component({
  selector: 'app-dashboard-default',
  templateUrl: './engine3.component.html',
  styleUrls: [
    './engine3.component.css'
  ]
})
export class Engine3Component implements OnInit {

  constructor() { }

  ngOnInit() {
    AmCharts.makeChart('s1-chart', {
      type: 'serial',
      marginTop: 0,
      hideCredits: true,
      marginRight: 80,
      dataProvider: [{cycle: 0, value: 518.67}, {cycle: 1, value: 518.67}, {cycle: 2, value: 518.67}, {cycle: 3, value: 518.67}, {cycle: 4, value: 518.67}, {cycle: 5, value: 518.67}, {cycle: 6, value: 518.67}, {cycle: 7, value: 518.67}, {cycle: 8, value: 518.67}, {cycle: 9, value: 518.67}, {cycle: 10, value: 518.67}, {cycle: 11, value: 518.67}, {cycle: 12, value: 518.67}, {cycle: 13, value: 518.67}, {cycle: 14, value: 518.67}, {cycle: 15, value: 518.67}, {cycle: 16, value: 518.67}, {cycle: 17, value: 518.67}, {cycle: 18, value: 518.67}, {cycle: 19, value: 518.67}, {cycle: 20, value: 518.67}, {cycle: 21, value: 518.67}, {cycle: 22, value: 518.67}, {cycle: 23, value: 518.67}, {cycle: 24, value: 518.67}, {cycle: 25, value: 518.67}, {cycle: 26, value: 518.67}, {cycle: 27, value: 518.67}, {cycle: 28, value: 518.67}, {cycle: 29, value: 518.67}, {cycle: 30, value: 518.67}, {cycle: 31, value: 518.67}, {cycle: 32, value: 518.67}, {cycle: 33, value: 518.67}, {cycle: 34, value: 518.67}, {cycle: 35, value: 518.67}, {cycle: 36, value: 518.67}, {cycle: 37, value: 518.67}, {cycle: 38, value: 518.67}, {cycle: 39, value: 518.67}, {cycle: 40, value: 518.67}, {cycle: 41, value: 518.67}, {cycle: 42, value: 518.67}, {cycle: 43, value: 518.67}, {cycle: 44, value: 518.67}, {cycle: 45, value: 518.67}, {cycle: 46, value: 518.67}, {cycle: 47, value: 518.67}, {cycle: 48, value: 518.67}, {cycle: 49, value: 518.67}, {cycle: 50, value: 518.67}, {cycle: 51, value: 518.67}, {cycle: 52, value: 518.67}, {cycle: 53, value: 518.67}, {cycle: 54, value: 518.67}, {cycle: 55, value: 518.67}, {cycle: 56, value: 518.67}, {cycle: 57, value: 518.67}, {cycle: 58, value: 518.67}, {cycle: 59, value: 518.67}, {cycle: 60, value: 518.67}, {cycle: 61, value: 518.67}, {cycle: 62, value: 518.67}, {cycle: 63, value: 518.67}, {cycle: 64, value: 518.67}, {cycle: 65, value: 518.67}, {cycle: 66, value: 518.67}, {cycle: 67, value: 518.67}, {cycle: 68, value: 518.67}, {cycle: 69, value: 518.67}, {cycle: 70, value: 518.67}, {cycle: 71, value: 518.67}, {cycle: 72, value: 518.67}, {cycle: 73, value: 518.67}, {cycle: 74, value: 518.67}, {cycle: 75, value: 518.67}, {cycle: 76, value: 518.67}, {cycle: 77, value: 518.67}, {cycle: 78, value: 518.67}, {cycle: 79, value: 518.67}, {cycle: 80, value: 518.67}, {cycle: 81, value: 518.67}, {cycle: 82, value: 518.67}, {cycle: 83, value: 518.67}, {cycle: 84, value: 518.67}, {cycle: 85, value: 518.67}, {cycle: 86, value: 518.67}, {cycle: 87, value: 518.67}, {cycle: 88, value: 518.67}, {cycle: 89, value: 518.67}, {cycle: 90, value: 518.67}, {cycle: 91, value: 518.67}, {cycle: 92, value: 518.67}, {cycle: 93, value: 518.67}, {cycle: 94, value: 518.67}, {cycle: 95, value: 518.67}, {cycle: 96, value: 518.67}, {cycle: 97, value: 518.67}, {cycle: 98, value: 518.67}, {cycle: 99, value: 518.67}, {cycle: 100, value: 518.67}, {cycle: 101, value: 518.67}, {cycle: 102, value: 518.67}, {cycle: 103, value: 518.67}, {cycle: 104, value: 518.67}, {cycle: 105, value: 518.67}, {cycle: 106, value: 518.67}, {cycle: 107, value: 518.67}, {cycle: 108, value: 518.67}, {cycle: 109, value: 518.67}, {cycle: 110, value: 518.67}, {cycle: 111, value: 518.67}, {cycle: 112, value: 518.67}, {cycle: 113, value: 518.67}, {cycle: 114, value: 518.67}, {cycle: 115, value: 518.67}, {cycle: 116, value: 518.67}, {cycle: 117, value: 518.67}, {cycle: 118, value: 518.67}, {cycle: 119, value: 518.67}, {cycle: 120, value: 518.67}, {cycle: 121, value: 518.67}, {cycle: 122, value: 518.67}, {cycle: 123, value: 518.67}, {cycle: 124, value: 518.67}, {cycle: 125, value: 518.67}, {cycle: 126, value: 518.67}, {cycle: 127, value: 518.67}, {cycle: 128, value: 518.67}, {cycle: 129, value: 518.67}, {cycle: 130, value: 518.67}, {cycle: 131, value: 518.67}, {cycle: 132, value: 518.67}, {cycle: 133, value: 518.67}, {cycle: 134, value: 518.67}, {cycle: 135, value: 518.67}, {cycle: 136, value: 518.67}, {cycle: 137, value: 518.67}, {cycle: 138, value: 518.67}, {cycle: 139, value: 518.67}, {cycle: 140, value: 518.67}, {cycle: 141, value: 518.67}, {cycle: 142, value: 518.67}, {cycle: 143, value: 518.67}, {cycle: 144, value: 518.67}, {cycle: 145, value: 518.67}, {cycle: 146, value: 518.67}, {cycle: 147, value: 518.67}, {cycle: 148, value: 518.67}, {cycle: 149, value: 518.67}, {cycle: 150, value: 518.67}, {cycle: 151, value: 518.67}, {cycle: 152, value: 518.67}, {cycle: 153, value: 518.67}, {cycle: 154, value: 518.67}, {cycle: 155, value: 518.67}, {cycle: 156, value: 518.67}, {cycle: 157, value: 518.67}, {cycle: 158, value: 518.67}, {cycle: 159, value: 518.67}, {cycle: 160, value: 518.67}, {cycle: 161, value: 518.67}, {cycle: 162, value: 518.67}, {cycle: 163, value: 518.67}, {cycle: 164, value: 518.67}, {cycle: 165, value: 518.67}, {cycle: 166, value: 518.67}, {cycle: 167, value: 518.67}, {cycle: 168, value: 518.67}, {cycle: 169, value: 518.67}, {cycle: 170, value: 518.67}, {cycle: 171, value: 518.67}, {cycle: 172, value: 518.67}, {cycle: 173, value: 518.67}, {cycle: 174, value: 518.67}, {cycle: 175, value: 518.67}, {cycle: 176, value: 518.67}, {cycle: 177, value: 518.67}, {cycle: 178, value: 518.67}, {cycle: 179, value: 518.67}, {cycle: 180, value: 518.67}, {cycle: 181, value: 518.67}, {cycle: 182, value: 518.67}, {cycle: 183, value: 518.67}, {cycle: 184, value: 518.67}, {cycle: 185, value: 518.67}, {cycle: 186, value: 518.67}, {cycle: 187, value: 518.67}, {cycle: 188, value: 518.67}, {cycle: 189, value: 518.67}, {cycle: 190, value: 518.67}, {cycle: 191, value: 518.67}, {cycle: 192, value: 518.67}, {cycle: 193, value: 518.67}, {cycle: 194, value: 518.67}, {cycle: 195, value: 518.67}, {cycle: 196, value: 518.67}, {cycle: 197, value: 518.67}, {cycle: 198, value: 518.67}, {cycle: 199, value: 518.67}, {cycle: 200, value: 518.67}, {cycle: 201, value: 518.67}, {cycle: 202, value: 518.67}, {cycle: 203, value: 518.67}, {cycle: 204, value: 518.67}, {cycle: 205, value: 518.67}, {cycle: 206, value: 518.67}, {cycle: 207, value: 518.67}, {cycle: 208, value: 518.67}, {cycle: 209, value: 518.67}, {cycle: 210, value: 518.67}, {cycle: 211, value: 518.67}, {cycle: 212, value: 518.67}, {cycle: 213, value: 518.67}, {cycle: 214, value: 518.67}, {cycle: 215, value: 518.67}, {cycle: 216, value: 518.67}, {cycle: 217, value: 518.67}, {cycle: 218, value: 518.67}, {cycle: 219, value: 518.67}, {cycle: 220, value: 518.67}, {cycle: 221, value: 518.67}, {cycle: 222, value: 518.67}, {cycle: 223, value: 518.67}, {cycle: 224, value: 518.67}, {cycle: 225, value: 518.67}, {cycle: 226, value: 518.67}, {cycle: 227, value: 518.67}, {cycle: 228, value: 518.67}, {cycle: 229, value: 518.67}, {cycle: 230, value: 518.67}, {cycle: 231, value: 518.67}, {cycle: 232, value: 518.67}, {cycle: 233, value: 518.67}, {cycle: 234, value: 518.67}, {cycle: 235, value: 518.67}, {cycle: 236, value: 518.67}, {cycle: 237, value: 518.67}, {cycle: 238, value: 518.67}, {cycle: 239, value: 518.67}, {cycle: 240, value: 518.67}, {cycle: 241, value: 518.67}, {cycle: 242, value: 518.67}, {cycle: 243, value: 518.67}, {cycle: 244, value: 518.67}, {cycle: 245, value: 518.67}, {cycle: 246, value: 518.67}, {cycle: 247, value: 518.67}, {cycle: 248, value: 518.67}, {cycle: 249, value: 518.67}, {cycle: 250, value: 518.67}, {cycle: 251, value: 518.67}, {cycle: 252, value: 518.67}, {cycle: 253, value: 518.67}, {cycle: 254, value: 518.67}, {cycle: 255, value: 518.67}, {cycle: 256, value: 518.67}, {cycle: 257, value: 518.67}, {cycle: 258, value: 518.67}, {cycle: 259, value: 518.67}, {cycle: 260, value: 518.67}, {cycle: 261, value: 518.67}, {cycle: 262, value: 518.67}, {cycle: 263, value: 518.67}, {cycle: 264, value: 518.67}, {cycle: 265, value: 518.67}, {cycle: 266, value: 518.67}, {cycle: 267, value: 518.67}, {cycle: 268, value: 518.67}, {cycle: 269, value: 518.67}, {cycle: 270, value: 518.67}, {cycle: 271, value: 518.67}, {cycle: 272, value: 518.67}, {cycle: 273, value: 518.67}, {cycle: 274, value: 518.67}, {cycle: 275, value: 518.67}, {cycle: 276, value: 518.67}, {cycle: 277, value: 518.67}, {cycle: 278, value: 518.67}, {cycle: 279, value: 518.67}, {cycle: 280, value: 518.67}, {cycle: 281, value: 518.67}, {cycle: 282, value: 518.67}, {cycle: 283, value: 518.67}, {cycle: 284, value: 518.67}, {cycle: 285, value: 518.67}, {cycle: 286, value: 518.67}, {cycle: 287, value: 518.67}, {cycle: 288, value: 518.67}, {cycle: 289, value: 518.67}, {cycle: 290, value: 518.67}, {cycle: 291, value: 518.67}, {cycle: 292, value: 518.67}, {cycle: 293, value: 518.67}, {cycle: 294, value: 518.67}, {cycle: 295, value: 518.67}, {cycle: 296, value: 518.67}, {cycle: 297, value: 518.67}, {cycle: 298, value: 518.67}, {cycle: 299, value: 518.67}, {cycle: 300, value: 518.67}, {cycle: 301, value: 518.67}, {cycle: 302, value: 518.67}, {cycle: 303, value: 518.67}, {cycle: 304, value: 518.67}, {cycle: 305, value: 518.67}],
      valueAxes: [{
        axisAlpha: 0,
        dashLength: 6,
        gridAlpha: 0.1,
        position: 'left'
      }],
      graphs: [{
        id: 'g1',
        bullet: 'round',
        bulletSize: 9,
        lineColor: '#4680ff',
        lineThickness: 2,
        negativeLineColor: '#4680ff',
        type: 'smoothedLine',
        valueField: 'value'
      }],
      chartCursor: {
        cursorAlpha: 0,
        valueLineEnabled: false,
        valueLineBalloonEnabled: true,
        valueLineAlpha: false,
        color: '#fff',
        cursorColor: '#FC6180',
        fullWidth: true
      },
      categoryField: 'cycle',
      categoryAxis: {
        gridAlpha: 0,
        axisAlpha: 0,
        fillAlpha: 1,
        fillColor: '#FAFAFA',
        minorGridAlpha: 0,
        minorGridEnabled: true
      },
      'export': {
        enabled: true
      }
    });

    AmCharts.makeChart('s2-chart', {
      type: 'serial',
      marginTop: 0,
      hideCredits: true,
      marginRight: 80,
      dataProvider: [{cycle: 0, value: 642.48}, {cycle: 1, value: 642.48}, {cycle: 2, value: 642.65}, {cycle: 3, value: 643.71}, {cycle: 4, value: 643.07}, {cycle: 5, value: 642.69}, {cycle: 6, value: 643.26}, {cycle: 7, value: 643.08}, {cycle: 8, value: 643.04}, {cycle: 9, value: 643.34}, {cycle: 10, value: 642.89}, {cycle: 11, value: 643.15}, {cycle: 12, value: 642.83}, {cycle: 13, value: 643.52}, {cycle: 14, value: 642.84}, {cycle: 15, value: 643.19}, {cycle: 16, value: 642.71}, {cycle: 17, value: 642.48}, {cycle: 18, value: 643.6}, {cycle: 19, value: 643.11}, {cycle: 20, value: 643.0}, {cycle: 21, value: 643.09}, {cycle: 22, value: 642.96}, {cycle: 23, value: 642.9}, {cycle: 24, value: 643.38}, {cycle: 25, value: 643.46}, {cycle: 26, value: 643.55}, {cycle: 27, value: 643.35}, {cycle: 28, value: 643.36}, {cycle: 29, value: 643.62}, {cycle: 30, value: 643.64}, {cycle: 31, value: 643.46}, {cycle: 32, value: 643.15}, {cycle: 33, value: 643.93}, {cycle: 34, value: 643.68}, {cycle: 35, value: 643.66}, {cycle: 36, value: 643.51}, {cycle: 37, value: 642.6}, {cycle: 38, value: 642.45}, {cycle: 39, value: 642.16}, {cycle: 40, value: 642.73}, {cycle: 41, value: 642.11}, {cycle: 42, value: 642.46}, {cycle: 43, value: 642.26}, {cycle: 44, value: 641.97}, {cycle: 45, value: 642.59}, {cycle: 46, value: 642.78}, {cycle: 47, value: 642.21}, {cycle: 48, value: 642.63}, {cycle: 49, value: 642.24}, {cycle: 50, value: 642.62}, {cycle: 51, value: 642.47}, {cycle: 52, value: 642.17}, {cycle: 53, value: 642.06}, {cycle: 54, value: 642.36}, {cycle: 55, value: 643.02}, {cycle: 56, value: 642.53}, {cycle: 57, value: 642.49}, {cycle: 58, value: 642.68}, {cycle: 59, value: 642.41}, {cycle: 60, value: 642.51}, {cycle: 61, value: 642.05}, {cycle: 62, value: 642.35}, {cycle: 63, value: 642.08}, {cycle: 64, value: 642.59}, {cycle: 65, value: 642.34}, {cycle: 66, value: 642.7}, {cycle: 67, value: 642.42}, {cycle: 68, value: 642.1}, {cycle: 69, value: 642.79}, {cycle: 70, value: 642.29}, {cycle: 71, value: 642.42}, {cycle: 72, value: 642.08}, {cycle: 73, value: 642.62}, {cycle: 74, value: 642.69}, {cycle: 75, value: 642.14}, {cycle: 76, value: 642.77}, {cycle: 77, value: 642.44}, {cycle: 78, value: 642.62}, {cycle: 79, value: 642.12}, {cycle: 80, value: 641.81}, {cycle: 81, value: 642.58}, {cycle: 82, value: 642.99}, {cycle: 83, value: 642.15}, {cycle: 84, value: 642.33}, {cycle: 85, value: 642.82}, {cycle: 86, value: 642.05}, {cycle: 87, value: 642.3}, {cycle: 88, value: 642.82}, {cycle: 89, value: 642.41}, {cycle: 90, value: 642.54}, {cycle: 91, value: 642.02}, {cycle: 92, value: 642.8}, {cycle: 93, value: 642.3}, {cycle: 94, value: 642.66}, {cycle: 95, value: 642.32}, {cycle: 96, value: 642.31}, {cycle: 97, value: 642.56}, {cycle: 98, value: 642.69}, {cycle: 99, value: 642.45}, {cycle: 100, value: 642.68}, {cycle: 101, value: 642.8}, {cycle: 102, value: 642.9}, {cycle: 103, value: 642.21}, {cycle: 104, value: 642.44}, {cycle: 105, value: 642.74}, {cycle: 106, value: 642.42}, {cycle: 107, value: 642.63}, {cycle: 108, value: 642.69}, {cycle: 109, value: 642.35}, {cycle: 110, value: 642.6}, {cycle: 111, value: 642.42}, {cycle: 112, value: 641.86}, {cycle: 113, value: 642.77}, {cycle: 114, value: 642.66}, {cycle: 115, value: 642.14}, {cycle: 116, value: 642.98}, {cycle: 117, value: 642.26}, {cycle: 118, value: 642.66}, {cycle: 119, value: 642.13}, {cycle: 120, value: 642.91}, {cycle: 121, value: 642.29}, {cycle: 122, value: 642.21}, {cycle: 123, value: 642.7}, {cycle: 124, value: 642.68}, {cycle: 125, value: 641.97}, {cycle: 126, value: 643.32}, {cycle: 127, value: 642.79}, {cycle: 128, value: 642.41}, {cycle: 129, value: 642.24}, {cycle: 130, value: 642.5}, {cycle: 131, value: 642.48}, {cycle: 132, value: 642.18}, {cycle: 133, value: 642.95}, {cycle: 134, value: 643.06}, {cycle: 135, value: 642.79}, {cycle: 136, value: 642.67}, {cycle: 137, value: 642.29}, {cycle: 138, value: 642.5}, {cycle: 139, value: 642.83}, {cycle: 140, value: 642.27}, {cycle: 141, value: 642.48}, {cycle: 142, value: 642.24}, {cycle: 143, value: 642.55}, {cycle: 144, value: 642.13}, {cycle: 145, value: 642.89}, {cycle: 146, value: 642.47}, {cycle: 147, value: 642.16}, {cycle: 148, value: 642.15}, {cycle: 149, value: 642.41}, {cycle: 150, value: 642.5}, {cycle: 151, value: 643.11}, {cycle: 152, value: 642.57}, {cycle: 153, value: 642.97}, {cycle: 154, value: 642.45}, {cycle: 155, value: 642.81}, {cycle: 156, value: 642.13}, {cycle: 157, value: 642.58}, {cycle: 158, value: 643.12}, {cycle: 159, value: 642.56}, {cycle: 160, value: 642.64}, {cycle: 161, value: 642.59}, {cycle: 162, value: 642.56}, {cycle: 163, value: 641.87}, {cycle: 164, value: 642.77}, {cycle: 165, value: 642.3}, {cycle: 166, value: 642.28}, {cycle: 167, value: 642.81}, {cycle: 168, value: 642.41}, {cycle: 169, value: 642.95}, {cycle: 170, value: 642.82}, {cycle: 171, value: 642.8}, {cycle: 172, value: 642.88}, {cycle: 173, value: 642.35}, {cycle: 174, value: 642.62}, {cycle: 175, value: 642.51}, {cycle: 176, value: 642.43}, {cycle: 177, value: 642.78}, {cycle: 178, value: 642.15}, {cycle: 179, value: 642.74}, {cycle: 180, value: 642.6}, {cycle: 181, value: 643.07}, {cycle: 182, value: 642.72}, {cycle: 183, value: 642.82}, {cycle: 184, value: 643.09}, {cycle: 185, value: 642.58}, {cycle: 186, value: 642.46}, {cycle: 187, value: 643.25}, {cycle: 188, value: 642.68}, {cycle: 189, value: 643.02}, {cycle: 190, value: 642.87}, {cycle: 191, value: 643.05}, {cycle: 192, value: 642.54}, {cycle: 193, value: 642.8}, {cycle: 194, value: 643.0}, {cycle: 195, value: 642.82}, {cycle: 196, value: 643.24}, {cycle: 197, value: 643.02}, {cycle: 198, value: 642.91}, {cycle: 199, value: 643.32}, {cycle: 200, value: 643.2}, {cycle: 201, value: 643.38}, {cycle: 202, value: 642.83}, {cycle: 203, value: 642.97}, {cycle: 204, value: 642.86}, {cycle: 205, value: 643.25}, {cycle: 206, value: 643.6}, {cycle: 207, value: 643.69}, {cycle: 208, value: 643.28}, {cycle: 209, value: 642.87}, {cycle: 210, value: 643.09}, {cycle: 211, value: 643.17}, {cycle: 212, value: 643.36}, {cycle: 213, value: 643.15}, {cycle: 214, value: 643.38}, {cycle: 215, value: 643.6}, {cycle: 216, value: 643.58}, {cycle: 217, value: 643.34}, {cycle: 218, value: 643.42}, {cycle: 219, value: 644.5}, {cycle: 220, value: 643.44}, {cycle: 221, value: 643.27}, {cycle: 222, value: 643.45}, {cycle: 223, value: 643.69}, {cycle: 224, value: 643.48}, {cycle: 225, value: 644.53}, {cycle: 226, value: 641.77}, {cycle: 227, value: 642.42}, {cycle: 228, value: 642.07}, {cycle: 229, value: 642.08}, {cycle: 230, value: 642.03}, {cycle: 231, value: 642.32}, {cycle: 232, value: 642.78}, {cycle: 233, value: 642.49}, {cycle: 234, value: 641.69}, {cycle: 235, value: 642.18}, {cycle: 236, value: 641.9}, {cycle: 237, value: 641.97}, {cycle: 238, value: 641.9}, {cycle: 239, value: 641.93}, {cycle: 240, value: 641.88}, {cycle: 241, value: 641.56}, {cycle: 242, value: 642.0}, {cycle: 243, value: 642.05}, {cycle: 244, value: 642.36}, {cycle: 245, value: 642.27}, {cycle: 246, value: 642.05}, {cycle: 247, value: 642.38}, {cycle: 248, value: 641.57}, {cycle: 249, value: 642.13}, {cycle: 250, value: 642.05}, {cycle: 251, value: 641.61}, {cycle: 252, value: 642.22}, {cycle: 253, value: 641.97}, {cycle: 254, value: 642.48}, {cycle: 255, value: 642.66}, {cycle: 256, value: 642.06}, {cycle: 257, value: 642.41}, {cycle: 258, value: 641.76}, {cycle: 259, value: 641.68}, {cycle: 260, value: 642.16}, {cycle: 261, value: 641.3}, {cycle: 262, value: 642.04}, {cycle: 263, value: 642.38}, {cycle: 264, value: 641.82}, {cycle: 265, value: 642.76}, {cycle: 266, value: 642.82}, {cycle: 267, value: 641.92}, {cycle: 268, value: 641.78}, {cycle: 269, value: 641.77}, {cycle: 270, value: 642.32}, {cycle: 271, value: 642.24}, {cycle: 272, value: 641.95}, {cycle: 273, value: 641.38}, {cycle: 274, value: 642.11}, {cycle: 275, value: 642.2}, {cycle: 276, value: 642.32}, {cycle: 277, value: 641.86}, {cycle: 278, value: 642.2}, {cycle: 279, value: 642.14}, {cycle: 280, value: 641.98}, {cycle: 281, value: 642.12}, {cycle: 282, value: 641.95}, {cycle: 283, value: 642.61}, {cycle: 284, value: 642.05}, {cycle: 285, value: 642.0}, {cycle: 286, value: 642.36}, {cycle: 287, value: 641.94}, {cycle: 288, value: 642.18}, {cycle: 289, value: 642.4}, {cycle: 290, value: 641.96}, {cycle: 291, value: 642.16}, {cycle: 292, value: 641.67}, {cycle: 293, value: 642.0}, {cycle: 294, value: 641.9}, {cycle: 295, value: 641.86}, {cycle: 296, value: 642.35}, {cycle: 297, value: 641.76}, {cycle: 298, value: 642.28}, {cycle: 299, value: 642.05}, {cycle: 300, value: 642.34}, {cycle: 301, value: 642.29}, {cycle: 302, value: 642.99}, {cycle: 303, value: 642.15}, {cycle: 304, value: 642.16}, {cycle: 305, value: 642.18}],
      valueAxes: [{
        axisAlpha: 0,
        dashLength: 6,
        gridAlpha: 0.1,
        position: 'left'
      }],
      graphs: [{
        id: 'g1',
        bullet: 'round',
        bulletSize: 9,
        lineColor: '#4680ff',
        lineThickness: 2,
        negativeLineColor: '#4680ff',
        type: 'smoothedLine',
        valueField: 'value'
      }],
      chartCursor: {
        cursorAlpha: 0,
        valueLineEnabled: false,
        valueLineBalloonEnabled: true,
        valueLineAlpha: false,
        color: '#fff',
        cursorColor: '#FC6180',
        fullWidth: true
      },
      categoryField: 'cycle',
      categoryAxis: {
        gridAlpha: 0,
        axisAlpha: 0,
        fillAlpha: 1,
        fillColor: '#FAFAFA',
        minorGridAlpha: 0,
        minorGridEnabled: true
      },
      'export': {
        enabled: true
      }
    });

    AmCharts.makeChart('s3-chart', {
      type: 'serial',
      marginTop: 0,
      hideCredits: true,
      marginRight: 80,
      dataProvider: [{cycle: 0, value: 1594.94}, {cycle: 1, value: 1593.19}, {cycle: 2, value: 1591.66}, {cycle: 3, value: 1589.2}, {cycle: 4, value: 1590.59}, {cycle: 5, value: 1589.28}, {cycle: 6, value: 1594.66}, {cycle: 7, value: 1591.34}, {cycle: 8, value: 1594.47}, {cycle: 9, value: 1599.53}, {cycle: 10, value: 1594.75}, {cycle: 11, value: 1599.04}, {cycle: 12, value: 1588.51}, {cycle: 13, value: 1597.3}, {cycle: 14, value: 1599.31}, {cycle: 15, value: 1593.16}, {cycle: 16, value: 1597.8}, {cycle: 17, value: 1595.61}, {cycle: 18, value: 1594.41}, {cycle: 19, value: 1594.78}, {cycle: 20, value: 1597.51}, {cycle: 21, value: 1601.99}, {cycle: 22, value: 1601.94}, {cycle: 23, value: 1598.82}, {cycle: 24, value: 1605.41}, {cycle: 25, value: 1593.72}, {cycle: 26, value: 1602.9}, {cycle: 27, value: 1606.1}, {cycle: 28, value: 1603.48}, {cycle: 29, value: 1597.73}, {cycle: 30, value: 1604.78}, {cycle: 31, value: 1602.86}, {cycle: 32, value: 1603.74}, {cycle: 33, value: 1595.61}, {cycle: 34, value: 1601.21}, {cycle: 35, value: 1606.5}, {cycle: 36, value: 1604.8}, {cycle: 37, value: 1585.4}, {cycle: 38, value: 1583.54}, {cycle: 39, value: 1586.59}, {cycle: 40, value: 1583.96}, {cycle: 41, value: 1590.62}, {cycle: 42, value: 1588.76}, {cycle: 43, value: 1586.91}, {cycle: 44, value: 1584.18}, {cycle: 45, value: 1584.78}, {cycle: 46, value: 1586.0}, {cycle: 47, value: 1588.75}, {cycle: 48, value: 1584.33}, {cycle: 49, value: 1587.74}, {cycle: 50, value: 1583.38}, {cycle: 51, value: 1592.08}, {cycle: 52, value: 1585.39}, {cycle: 53, value: 1587.82}, {cycle: 54, value: 1589.62}, {cycle: 55, value: 1589.9}, {cycle: 56, value: 1589.76}, {cycle: 57, value: 1593.11}, {cycle: 58, value: 1594.65}, {cycle: 59, value: 1592.74}, {cycle: 60, value: 1589.01}, {cycle: 61, value: 1592.65}, {cycle: 62, value: 1589.28}, {cycle: 63, value: 1582.09}, {cycle: 64, value: 1583.69}, {cycle: 65, value: 1585.53}, {cycle: 66, value: 1584.4}, {cycle: 67, value: 1580.87}, {cycle: 68, value: 1589.33}, {cycle: 69, value: 1590.98}, {cycle: 70, value: 1587.97}, {cycle: 71, value: 1587.89}, {cycle: 72, value: 1589.48}, {cycle: 73, value: 1582.75}, {cycle: 74, value: 1591.19}, {cycle: 75, value: 1581.05}, {cycle: 76, value: 1596.22}, {cycle: 77, value: 1588.31}, {cycle: 78, value: 1587.0}, {cycle: 79, value: 1589.99}, {cycle: 80, value: 1585.87}, {cycle: 81, value: 1587.46}, {cycle: 82, value: 1584.18}, {cycle: 83, value: 1591.57}, {cycle: 84, value: 1586.8}, {cycle: 85, value: 1590.52}, {cycle: 86, value: 1586.99}, {cycle: 87, value: 1584.29}, {cycle: 88, value: 1593.22}, {cycle: 89, value: 1586.77}, {cycle: 90, value: 1592.6}, {cycle: 91, value: 1587.01}, {cycle: 92, value: 1594.24}, {cycle: 93, value: 1585.96}, {cycle: 94, value: 1590.94}, {cycle: 95, value: 1600.12}, {cycle: 96, value: 1576.64}, {cycle: 97, value: 1587.51}, {cycle: 98, value: 1588.08}, {cycle: 99, value: 1587.6}, {cycle: 100, value: 1591.76}, {cycle: 101, value: 1590.85}, {cycle: 102, value: 1583.9}, {cycle: 103, value: 1592.37}, {cycle: 104, value: 1587.83}, {cycle: 105, value: 1588.44}, {cycle: 106, value: 1590.37}, {cycle: 107, value: 1585.71}, {cycle: 108, value: 1584.72}, {cycle: 109, value: 1588.43}, {cycle: 110, value: 1588.1}, {cycle: 111, value: 1593.17}, {cycle: 112, value: 1588.78}, {cycle: 113, value: 1588.91}, {cycle: 114, value: 1587.09}, {cycle: 115, value: 1592.26}, {cycle: 116, value: 1588.2}, {cycle: 117, value: 1582.27}, {cycle: 118, value: 1582.04}, {cycle: 119, value: 1588.16}, {cycle: 120, value: 1589.92}, {cycle: 121, value: 1579.9}, {cycle: 122, value: 1591.36}, {cycle: 123, value: 1587.37}, {cycle: 124, value: 1584.7}, {cycle: 125, value: 1578.65}, {cycle: 126, value: 1586.92}, {cycle: 127, value: 1589.6}, {cycle: 128, value: 1590.17}, {cycle: 129, value: 1588.28}, {cycle: 130, value: 1588.54}, {cycle: 131, value: 1586.25}, {cycle: 132, value: 1578.8}, {cycle: 133, value: 1586.68}, {cycle: 134, value: 1583.61}, {cycle: 135, value: 1592.78}, {cycle: 136, value: 1588.11}, {cycle: 137, value: 1590.1}, {cycle: 138, value: 1593.07}, {cycle: 139, value: 1596.05}, {cycle: 140, value: 1593.03}, {cycle: 141, value: 1587.15}, {cycle: 142, value: 1588.91}, {cycle: 143, value: 1585.56}, {cycle: 144, value: 1585.18}, {cycle: 145, value: 1586.34}, {cycle: 146, value: 1581.85}, {cycle: 147, value: 1584.52}, {cycle: 148, value: 1597.05}, {cycle: 149, value: 1592.69}, {cycle: 150, value: 1585.29}, {cycle: 151, value: 1584.82}, {cycle: 152, value: 1587.97}, {cycle: 153, value: 1588.0}, {cycle: 154, value: 1595.31}, {cycle: 155, value: 1587.57}, {cycle: 156, value: 1590.46}, {cycle: 157, value: 1598.61}, {cycle: 158, value: 1594.36}, {cycle: 159, value: 1586.4}, {cycle: 160, value: 1587.87}, {cycle: 161, value: 1580.17}, {cycle: 162, value: 1592.43}, {cycle: 163, value: 1591.59}, {cycle: 164, value: 1592.21}, {cycle: 165, value: 1589.44}, {cycle: 166, value: 1593.61}, {cycle: 167, value: 1593.8}, {cycle: 168, value: 1591.45}, {cycle: 169, value: 1592.11}, {cycle: 170, value: 1590.54}, {cycle: 171, value: 1586.98}, {cycle: 172, value: 1588.88}, {cycle: 173, value: 1585.35}, {cycle: 174, value: 1589.11}, {cycle: 175, value: 1590.51}, {cycle: 176, value: 1589.98}, {cycle: 177, value: 1586.02}, {cycle: 178, value: 1595.19}, {cycle: 179, value: 1586.75}, {cycle: 180, value: 1588.23}, {cycle: 181, value: 1594.62}, {cycle: 182, value: 1595.94}, {cycle: 183, value: 1590.96}, {cycle: 184, value: 1593.59}, {cycle: 185, value: 1595.24}, {cycle: 186, value: 1598.82}, {cycle: 187, value: 1594.25}, {cycle: 188, value: 1588.06}, {cycle: 189, value: 1589.96}, {cycle: 190, value: 1596.48}, {cycle: 191, value: 1591.94}, {cycle: 192, value: 1594.01}, {cycle: 193, value: 1597.71}, {cycle: 194, value: 1593.74}, {cycle: 195, value: 1590.08}, {cycle: 196, value: 1597.66}, {cycle: 197, value: 1590.53}, {cycle: 198, value: 1589.2}, {cycle: 199, value: 1596.69}, {cycle: 200, value: 1588.21}, {cycle: 201, value: 1598.42}, {cycle: 202, value: 1595.07}, {cycle: 203, value: 1596.98}, {cycle: 204, value: 1594.46}, {cycle: 205, value: 1592.7}, {cycle: 206, value: 1595.73}, {cycle: 207, value: 1594.79}, {cycle: 208, value: 1597.1}, {cycle: 209, value: 1598.3}, {cycle: 210, value: 1600.79}, {cycle: 211, value: 1598.28}, {cycle: 212, value: 1601.11}, {cycle: 213, value: 1603.1}, {cycle: 214, value: 1606.48}, {cycle: 215, value: 1604.11}, {cycle: 216, value: 1610.29}, {cycle: 217, value: 1597.16}, {cycle: 218, value: 1603.95}, {cycle: 219, value: 1602.97}, {cycle: 220, value: 1608.22}, {cycle: 221, value: 1607.57}, {cycle: 222, value: 1608.24}, {cycle: 223, value: 1603.04}, {cycle: 224, value: 1602.23}, {cycle: 225, value: 1612.11}, {cycle: 226, value: 1583.59}, {cycle: 227, value: 1589.69}, {cycle: 228, value: 1582.45}, {cycle: 229, value: 1586.84}, {cycle: 230, value: 1581.45}, {cycle: 231, value: 1586.1}, {cycle: 232, value: 1585.21}, {cycle: 233, value: 1585.88}, {cycle: 234, value: 1581.46}, {cycle: 235, value: 1583.92}, {cycle: 236, value: 1585.25}, {cycle: 237, value: 1583.89}, {cycle: 238, value: 1579.55}, {cycle: 239, value: 1578.03}, {cycle: 240, value: 1589.42}, {cycle: 241, value: 1578.43}, {cycle: 242, value: 1581.87}, {cycle: 243, value: 1584.71}, {cycle: 244, value: 1588.06}, {cycle: 245, value: 1582.85}, {cycle: 246, value: 1581.71}, {cycle: 247, value: 1581.33}, {cycle: 248, value: 1582.59}, {cycle: 249, value: 1592.43}, {cycle: 250, value: 1582.82}, {cycle: 251, value: 1578.77}, {cycle: 252, value: 1582.69}, {cycle: 253, value: 1575.77}, {cycle: 254, value: 1576.5}, {cycle: 255, value: 1574.8}, {cycle: 256, value: 1585.84}, {cycle: 257, value: 1582.76}, {cycle: 258, value: 1591.02}, {cycle: 259, value: 1581.62}, {cycle: 260, value: 1580.02}, {cycle: 261, value: 1586.91}, {cycle: 262, value: 1585.52}, {cycle: 263, value: 1584.21}, {cycle: 264, value: 1578.77}, {cycle: 265, value: 1583.56}, {cycle: 266, value: 1585.13}, {cycle: 267, value: 1589.59}, {cycle: 268, value: 1587.27}, {cycle: 269, value: 1583.83}, {cycle: 270, value: 1584.3}, {cycle: 271, value: 1586.87}, {cycle: 272, value: 1579.17}, {cycle: 273, value: 1576.29}, {cycle: 274, value: 1583.18}, {cycle: 275, value: 1586.48}, {cycle: 276, value: 1580.84}, {cycle: 277, value: 1585.97}, {cycle: 278, value: 1582.71}, {cycle: 279, value: 1577.1}, {cycle: 280, value: 1586.8}, {cycle: 281, value: 1581.49}, {cycle: 282, value: 1578.24}, {cycle: 283, value: 1581.9}, {cycle: 284, value: 1589.45}, {cycle: 285, value: 1582.34}, {cycle: 286, value: 1586.95}, {cycle: 287, value: 1581.42}, {cycle: 288, value: 1585.76}, {cycle: 289, value: 1586.2}, {cycle: 290, value: 1578.21}, {cycle: 291, value: 1582.39}, {cycle: 292, value: 1582.01}, {cycle: 293, value: 1579.94}, {cycle: 294, value: 1589.43}, {cycle: 295, value: 1583.3}, {cycle: 296, value: 1581.52}, {cycle: 297, value: 1580.74}, {cycle: 298, value: 1586.66}, {cycle: 299, value: 1576.18}, {cycle: 300, value: 1576.87}, {cycle: 301, value: 1585.43}, {cycle: 302, value: 1582.03}, {cycle: 303, value: 1593.61}, {cycle: 304, value: 1583.08}, {cycle: 305, value: 1582.73}],
      valueAxes: [{
        axisAlpha: 0,
        dashLength: 6,
        gridAlpha: 0.1,
        position: 'left'
      }],
      graphs: [{
        id: 'g1',
        bullet: 'round',
        bulletSize: 9,
        lineColor: '#4680ff',
        lineThickness: 2,
        negativeLineColor: '#4680ff',
        type: 'smoothedLine',
        valueField: 'value'
      }],
      chartCursor: {
        cursorAlpha: 0,
        valueLineEnabled: false,
        valueLineBalloonEnabled: true,
        valueLineAlpha: false,
        color: '#fff',
        cursorColor: '#FC6180',
        fullWidth: true
      },
      categoryField: 'cycle',
      categoryAxis: {
        gridAlpha: 0,
        axisAlpha: 0,
        fillAlpha: 1,
        fillColor: '#FAFAFA',
        minorGridAlpha: 0,
        minorGridEnabled: true
      },
      'export': {
        enabled: true
      }
    });

    AmCharts.makeChart('s4-chart', {
      type: 'serial',
      marginTop: 0,
      hideCredits: true,
      marginRight: 80,
      dataProvider: [{cycle: 0, value: 1402.45}, {cycle: 1, value: 1416.18}, {cycle: 2, value: 1403.51}, {cycle: 3, value: 1413.64}, {cycle: 4, value: 1411.55}, {cycle: 5, value: 1421.05}, {cycle: 6, value: 1414.51}, {cycle: 7, value: 1407.58}, {cycle: 8, value: 1420.87}, {cycle: 9, value: 1411.65}, {cycle: 10, value: 1416.95}, {cycle: 11, value: 1414.53}, {cycle: 12, value: 1413.92}, {cycle: 13, value: 1411.91}, {cycle: 14, value: 1414.01}, {cycle: 15, value: 1421.83}, {cycle: 16, value: 1415.2}, {cycle: 17, value: 1415.88}, {cycle: 18, value: 1416.4}, {cycle: 19, value: 1420.33}, {cycle: 20, value: 1422.22}, {cycle: 21, value: 1416.56}, {cycle: 22, value: 1416.31}, {cycle: 23, value: 1419.27}, {cycle: 24, value: 1415.96}, {cycle: 25, value: 1422.59}, {cycle: 26, value: 1424.39}, {cycle: 27, value: 1428.52}, {cycle: 28, value: 1419.33}, {cycle: 29, value: 1426.38}, {cycle: 30, value: 1417.29}, {cycle: 31, value: 1424.79}, {cycle: 32, value: 1424.17}, {cycle: 33, value: 1438.51}, {cycle: 34, value: 1423.5}, {cycle: 35, value: 1430.55}, {cycle: 36, value: 1428.23}, {cycle: 37, value: 1402.85}, {cycle: 38, value: 1410.36}, {cycle: 39, value: 1398.65}, {cycle: 40, value: 1400.32}, {cycle: 41, value: 1399.42}, {cycle: 42, value: 1407.78}, {cycle: 43, value: 1404.44}, {cycle: 44, value: 1406.22}, {cycle: 45, value: 1403.51}, {cycle: 46, value: 1400.12}, {cycle: 47, value: 1395.79}, {cycle: 48, value: 1403.67}, {cycle: 49, value: 1395.23}, {cycle: 50, value: 1407.62}, {cycle: 51, value: 1401.13}, {cycle: 52, value: 1409.84}, {cycle: 53, value: 1406.43}, {cycle: 54, value: 1403.75}, {cycle: 55, value: 1406.34}, {cycle: 56, value: 1401.19}, {cycle: 57, value: 1398.49}, {cycle: 58, value: 1405.05}, {cycle: 59, value: 1401.8}, {cycle: 60, value: 1400.24}, {cycle: 61, value: 1399.14}, {cycle: 62, value: 1399.54}, {cycle: 63, value: 1402.27}, {cycle: 64, value: 1400.85}, {cycle: 65, value: 1401.61}, {cycle: 66, value: 1403.21}, {cycle: 67, value: 1400.49}, {cycle: 68, value: 1406.42}, {cycle: 69, value: 1405.72}, {cycle: 70, value: 1396.73}, {cycle: 71, value: 1398.89}, {cycle: 72, value: 1406.77}, {cycle: 73, value: 1411.83}, {cycle: 74, value: 1400.63}, {cycle: 75, value: 1406.06}, {cycle: 76, value: 1407.38}, {cycle: 77, value: 1403.4}, {cycle: 78, value: 1401.08}, {cycle: 79, value: 1407.47}, {cycle: 80, value: 1403.08}, {cycle: 81, value: 1403.12}, {cycle: 82, value: 1415.57}, {cycle: 83, value: 1409.99}, {cycle: 84, value: 1405.17}, {cycle: 85, value: 1408.42}, {cycle: 86, value: 1403.54}, {cycle: 87, value: 1407.61}, {cycle: 88, value: 1407.67}, {cycle: 89, value: 1407.4}, {cycle: 90, value: 1405.04}, {cycle: 91, value: 1406.46}, {cycle: 92, value: 1403.34}, {cycle: 93, value: 1404.0}, {cycle: 94, value: 1405.24}, {cycle: 95, value: 1398.12}, {cycle: 96, value: 1404.66}, {cycle: 97, value: 1407.15}, {cycle: 98, value: 1407.72}, {cycle: 99, value: 1410.95}, {cycle: 100, value: 1403.8}, {cycle: 101, value: 1407.01}, {cycle: 102, value: 1402.56}, {cycle: 103, value: 1395.74}, {cycle: 104, value: 1408.43}, {cycle: 105, value: 1409.93}, {cycle: 106, value: 1403.68}, {cycle: 107, value: 1410.7}, {cycle: 108, value: 1408.21}, {cycle: 109, value: 1409.32}, {cycle: 110, value: 1407.74}, {cycle: 111, value: 1400.47}, {cycle: 112, value: 1405.44}, {cycle: 113, value: 1398.16}, {cycle: 114, value: 1408.49}, {cycle: 115, value: 1407.47}, {cycle: 116, value: 1405.22}, {cycle: 117, value: 1408.32}, {cycle: 118, value: 1404.73}, {cycle: 119, value: 1406.59}, {cycle: 120, value: 1403.9}, {cycle: 121, value: 1399.07}, {cycle: 122, value: 1407.58}, {cycle: 123, value: 1406.05}, {cycle: 124, value: 1398.74}, {cycle: 125, value: 1394.77}, {cycle: 126, value: 1408.45}, {cycle: 127, value: 1404.18}, {cycle: 128, value: 1403.99}, {cycle: 129, value: 1398.67}, {cycle: 130, value: 1406.69}, {cycle: 131, value: 1398.8}, {cycle: 132, value: 1406.96}, {cycle: 133, value: 1411.12}, {cycle: 134, value: 1403.34}, {cycle: 135, value: 1405.64}, {cycle: 136, value: 1406.26}, {cycle: 137, value: 1412.21}, {cycle: 138, value: 1400.79}, {cycle: 139, value: 1400.74}, {cycle: 140, value: 1403.56}, {cycle: 141, value: 1406.58}, {cycle: 142, value: 1402.75}, {cycle: 143, value: 1400.45}, {cycle: 144, value: 1412.75}, {cycle: 145, value: 1407.61}, {cycle: 146, value: 1401.8}, {cycle: 147, value: 1405.22}, {cycle: 148, value: 1400.11}, {cycle: 149, value: 1416.04}, {cycle: 150, value: 1404.61}, {cycle: 151, value: 1399.39}, {cycle: 152, value: 1409.77}, {cycle: 153, value: 1409.2}, {cycle: 154, value: 1404.31}, {cycle: 155, value: 1411.87}, {cycle: 156, value: 1405.88}, {cycle: 157, value: 1403.36}, {cycle: 158, value: 1405.56}, {cycle: 159, value: 1411.81}, {cycle: 160, value: 1400.87}, {cycle: 161, value: 1404.02}, {cycle: 162, value: 1405.07}, {cycle: 163, value: 1410.29}, {cycle: 164, value: 1417.91}, {cycle: 165, value: 1403.6}, {cycle: 166, value: 1406.21}, {cycle: 167, value: 1399.75}, {cycle: 168, value: 1409.15}, {cycle: 169, value: 1412.36}, {cycle: 170, value: 1413.59}, {cycle: 171, value: 1406.54}, {cycle: 172, value: 1410.65}, {cycle: 173, value: 1408.59}, {cycle: 174, value: 1403.15}, {cycle: 175, value: 1411.62}, {cycle: 176, value: 1410.55}, {cycle: 177, value: 1408.52}, {cycle: 178, value: 1409.14}, {cycle: 179, value: 1406.34}, {cycle: 180, value: 1411.01}, {cycle: 181, value: 1405.43}, {cycle: 182, value: 1417.08}, {cycle: 183, value: 1411.57}, {cycle: 184, value: 1418.28}, {cycle: 185, value: 1414.42}, {cycle: 186, value: 1407.68}, {cycle: 187, value: 1410.11}, {cycle: 188, value: 1415.81}, {cycle: 189, value: 1410.75}, {cycle: 190, value: 1407.58}, {cycle: 191, value: 1406.1}, {cycle: 192, value: 1414.19}, {cycle: 193, value: 1413.68}, {cycle: 194, value: 1420.79}, {cycle: 195, value: 1417.62}, {cycle: 196, value: 1412.93}, {cycle: 197, value: 1413.51}, {cycle: 198, value: 1419.09}, {cycle: 199, value: 1417.32}, {cycle: 200, value: 1411.81}, {cycle: 201, value: 1413.9}, {cycle: 202, value: 1410.18}, {cycle: 203, value: 1410.22}, {cycle: 204, value: 1416.01}, {cycle: 205, value: 1419.62}, {cycle: 206, value: 1412.94}, {cycle: 207, value: 1416.71}, {cycle: 208, value: 1417.89}, {cycle: 209, value: 1422.56}, {cycle: 210, value: 1423.58}, {cycle: 211, value: 1419.52}, {cycle: 212, value: 1427.72}, {cycle: 213, value: 1424.69}, {cycle: 214, value: 1431.78}, {cycle: 215, value: 1424.1}, {cycle: 216, value: 1425.23}, {cycle: 217, value: 1413.99}, {cycle: 218, value: 1429.48}, {cycle: 219, value: 1426.55}, {cycle: 220, value: 1426.27}, {cycle: 221, value: 1429.22}, {cycle: 222, value: 1427.17}, {cycle: 223, value: 1422.74}, {cycle: 224, value: 1434.12}, {cycle: 225, value: 1432.55}, {cycle: 226, value: 1395.26}, {cycle: 227, value: 1394.88}, {cycle: 228, value: 1396.29}, {cycle: 229, value: 1397.94}, {cycle: 230, value: 1394.28}, {cycle: 231, value: 1390.56}, {cycle: 232, value: 1399.1}, {cycle: 233, value: 1393.41}, {cycle: 234, value: 1394.2}, {cycle: 235, value: 1390.3}, {cycle: 236, value: 1393.09}, {cycle: 237, value: 1394.07}, {cycle: 238, value: 1402.31}, {cycle: 239, value: 1396.28}, {cycle: 240, value: 1394.11}, {cycle: 241, value: 1390.29}, {cycle: 242, value: 1400.59}, {cycle: 243, value: 1391.09}, {cycle: 244, value: 1397.43}, {cycle: 245, value: 1393.07}, {cycle: 246, value: 1397.41}, {cycle: 247, value: 1399.59}, {cycle: 248, value: 1399.12}, {cycle: 249, value: 1400.89}, {cycle: 250, value: 1397.33}, {cycle: 251, value: 1398.19}, {cycle: 252, value: 1394.22}, {cycle: 253, value: 1402.43}, {cycle: 254, value: 1392.82}, {cycle: 255, value: 1397.69}, {cycle: 256, value: 1402.33}, {cycle: 257, value: 1397.12}, {cycle: 258, value: 1402.42}, {cycle: 259, value: 1392.22}, {cycle: 260, value: 1395.31}, {cycle: 261, value: 1394.4}, {cycle: 262, value: 1394.71}, {cycle: 263, value: 1396.82}, {cycle: 264, value: 1396.39}, {cycle: 265, value: 1402.27}, {cycle: 266, value: 1399.13}, {cycle: 267, value: 1394.97}, {cycle: 268, value: 1394.26}, {cycle: 269, value: 1395.7}, {cycle: 270, value: 1399.71}, {cycle: 271, value: 1400.55}, {cycle: 272, value: 1397.44}, {cycle: 273, value: 1395.62}, {cycle: 274, value: 1394.48}, {cycle: 275, value: 1403.06}, {cycle: 276, value: 1393.67}, {cycle: 277, value: 1403.88}, {cycle: 278, value: 1393.24}, {cycle: 279, value: 1399.58}, {cycle: 280, value: 1394.57}, {cycle: 281, value: 1397.74}, {cycle: 282, value: 1394.93}, {cycle: 283, value: 1399.9}, {cycle: 284, value: 1400.43}, {cycle: 285, value: 1396.08}, {cycle: 286, value: 1396.92}, {cycle: 287, value: 1406.63}, {cycle: 288, value: 1392.17}, {cycle: 289, value: 1396.45}, {cycle: 290, value: 1389.19}, {cycle: 291, value: 1402.35}, {cycle: 292, value: 1396.82}, {cycle: 293, value: 1395.59}, {cycle: 294, value: 1390.32}, {cycle: 295, value: 1389.87}, {cycle: 296, value: 1401.7}, {cycle: 297, value: 1399.84}, {cycle: 298, value: 1396.49}, {cycle: 299, value: 1403.57}, {cycle: 300, value: 1395.05}, {cycle: 301, value: 1402.8}, {cycle: 302, value: 1400.14}, {cycle: 303, value: 1407.48}, {cycle: 304, value: 1401.35}, {cycle: 305, value: 1396.24}],
      valueAxes: [{
        axisAlpha: 0,
        dashLength: 6,
        gridAlpha: 0.1,
        position: 'left'
      }],
      graphs: [{
        id: 'g1',
        bullet: 'round',
        bulletSize: 9,
        lineColor: '#4680ff',
        lineThickness: 2,
        negativeLineColor: '#4680ff',
        type: 'smoothedLine',
        valueField: 'value'
      }],
      chartCursor: {
        cursorAlpha: 0,
        valueLineEnabled: false,
        valueLineBalloonEnabled: true,
        valueLineAlpha: false,
        color: '#fff',
        cursorColor: '#FC6180',
        fullWidth: true
      },
      categoryField: 'cycle',
      categoryAxis: {
        gridAlpha: 0,
        axisAlpha: 0,
        fillAlpha: 1,
        fillColor: '#FAFAFA',
        minorGridAlpha: 0,
        minorGridEnabled: true
      },
      'export': {
        enabled: true
      }
    });

    AmCharts.makeChart('s5-chart', {
      type: 'serial',
      marginTop: 0,
      hideCredits: true,
      marginRight: 80,
      dataProvider: [{cycle: 0, value: 14.62}, {cycle: 1, value: 14.62}, {cycle: 2, value: 14.62}, {cycle: 3, value: 14.62}, {cycle: 4, value: 14.62}, {cycle: 5, value: 14.62}, {cycle: 6, value: 14.62}, {cycle: 7, value: 14.62}, {cycle: 8, value: 14.62}, {cycle: 9, value: 14.62}, {cycle: 10, value: 14.62}, {cycle: 11, value: 14.62}, {cycle: 12, value: 14.62}, {cycle: 13, value: 14.62}, {cycle: 14, value: 14.62}, {cycle: 15, value: 14.62}, {cycle: 16, value: 14.62}, {cycle: 17, value: 14.62}, {cycle: 18, value: 14.62}, {cycle: 19, value: 14.62}, {cycle: 20, value: 14.62}, {cycle: 21, value: 14.62}, {cycle: 22, value: 14.62}, {cycle: 23, value: 14.62}, {cycle: 24, value: 14.62}, {cycle: 25, value: 14.62}, {cycle: 26, value: 14.62}, {cycle: 27, value: 14.62}, {cycle: 28, value: 14.62}, {cycle: 29, value: 14.62}, {cycle: 30, value: 14.62}, {cycle: 31, value: 14.62}, {cycle: 32, value: 14.62}, {cycle: 33, value: 14.62}, {cycle: 34, value: 14.62}, {cycle: 35, value: 14.62}, {cycle: 36, value: 14.62}, {cycle: 37, value: 14.62}, {cycle: 38, value: 14.62}, {cycle: 39, value: 14.62}, {cycle: 40, value: 14.62}, {cycle: 41, value: 14.62}, {cycle: 42, value: 14.62}, {cycle: 43, value: 14.62}, {cycle: 44, value: 14.62}, {cycle: 45, value: 14.62}, {cycle: 46, value: 14.62}, {cycle: 47, value: 14.62}, {cycle: 48, value: 14.62}, {cycle: 49, value: 14.62}, {cycle: 50, value: 14.62}, {cycle: 51, value: 14.62}, {cycle: 52, value: 14.62}, {cycle: 53, value: 14.62}, {cycle: 54, value: 14.62}, {cycle: 55, value: 14.62}, {cycle: 56, value: 14.62}, {cycle: 57, value: 14.62}, {cycle: 58, value: 14.62}, {cycle: 59, value: 14.62}, {cycle: 60, value: 14.62}, {cycle: 61, value: 14.62}, {cycle: 62, value: 14.62}, {cycle: 63, value: 14.62}, {cycle: 64, value: 14.62}, {cycle: 65, value: 14.62}, {cycle: 66, value: 14.62}, {cycle: 67, value: 14.62}, {cycle: 68, value: 14.62}, {cycle: 69, value: 14.62}, {cycle: 70, value: 14.62}, {cycle: 71, value: 14.62}, {cycle: 72, value: 14.62}, {cycle: 73, value: 14.62}, {cycle: 74, value: 14.62}, {cycle: 75, value: 14.62}, {cycle: 76, value: 14.62}, {cycle: 77, value: 14.62}, {cycle: 78, value: 14.62}, {cycle: 79, value: 14.62}, {cycle: 80, value: 14.62}, {cycle: 81, value: 14.62}, {cycle: 82, value: 14.62}, {cycle: 83, value: 14.62}, {cycle: 84, value: 14.62}, {cycle: 85, value: 14.62}, {cycle: 86, value: 14.62}, {cycle: 87, value: 14.62}, {cycle: 88, value: 14.62}, {cycle: 89, value: 14.62}, {cycle: 90, value: 14.62}, {cycle: 91, value: 14.62}, {cycle: 92, value: 14.62}, {cycle: 93, value: 14.62}, {cycle: 94, value: 14.62}, {cycle: 95, value: 14.62}, {cycle: 96, value: 14.62}, {cycle: 97, value: 14.62}, {cycle: 98, value: 14.62}, {cycle: 99, value: 14.62}, {cycle: 100, value: 14.62}, {cycle: 101, value: 14.62}, {cycle: 102, value: 14.62}, {cycle: 103, value: 14.62}, {cycle: 104, value: 14.62}, {cycle: 105, value: 14.62}, {cycle: 106, value: 14.62}, {cycle: 107, value: 14.62}, {cycle: 108, value: 14.62}, {cycle: 109, value: 14.62}, {cycle: 110, value: 14.62}, {cycle: 111, value: 14.62}, {cycle: 112, value: 14.62}, {cycle: 113, value: 14.62}, {cycle: 114, value: 14.62}, {cycle: 115, value: 14.62}, {cycle: 116, value: 14.62}, {cycle: 117, value: 14.62}, {cycle: 118, value: 14.62}, {cycle: 119, value: 14.62}, {cycle: 120, value: 14.62}, {cycle: 121, value: 14.62}, {cycle: 122, value: 14.62}, {cycle: 123, value: 14.62}, {cycle: 124, value: 14.62}, {cycle: 125, value: 14.62}, {cycle: 126, value: 14.62}, {cycle: 127, value: 14.62}, {cycle: 128, value: 14.62}, {cycle: 129, value: 14.62}, {cycle: 130, value: 14.62}, {cycle: 131, value: 14.62}, {cycle: 132, value: 14.62}, {cycle: 133, value: 14.62}, {cycle: 134, value: 14.62}, {cycle: 135, value: 14.62}, {cycle: 136, value: 14.62}, {cycle: 137, value: 14.62}, {cycle: 138, value: 14.62}, {cycle: 139, value: 14.62}, {cycle: 140, value: 14.62}, {cycle: 141, value: 14.62}, {cycle: 142, value: 14.62}, {cycle: 143, value: 14.62}, {cycle: 144, value: 14.62}, {cycle: 145, value: 14.62}, {cycle: 146, value: 14.62}, {cycle: 147, value: 14.62}, {cycle: 148, value: 14.62}, {cycle: 149, value: 14.62}, {cycle: 150, value: 14.62}, {cycle: 151, value: 14.62}, {cycle: 152, value: 14.62}, {cycle: 153, value: 14.62}, {cycle: 154, value: 14.62}, {cycle: 155, value: 14.62}, {cycle: 156, value: 14.62}, {cycle: 157, value: 14.62}, {cycle: 158, value: 14.62}, {cycle: 159, value: 14.62}, {cycle: 160, value: 14.62}, {cycle: 161, value: 14.62}, {cycle: 162, value: 14.62}, {cycle: 163, value: 14.62}, {cycle: 164, value: 14.62}, {cycle: 165, value: 14.62}, {cycle: 166, value: 14.62}, {cycle: 167, value: 14.62}, {cycle: 168, value: 14.62}, {cycle: 169, value: 14.62}, {cycle: 170, value: 14.62}, {cycle: 171, value: 14.62}, {cycle: 172, value: 14.62}, {cycle: 173, value: 14.62}, {cycle: 174, value: 14.62}, {cycle: 175, value: 14.62}, {cycle: 176, value: 14.62}, {cycle: 177, value: 14.62}, {cycle: 178, value: 14.62}, {cycle: 179, value: 14.62}, {cycle: 180, value: 14.62}, {cycle: 181, value: 14.62}, {cycle: 182, value: 14.62}, {cycle: 183, value: 14.62}, {cycle: 184, value: 14.62}, {cycle: 185, value: 14.62}, {cycle: 186, value: 14.62}, {cycle: 187, value: 14.62}, {cycle: 188, value: 14.62}, {cycle: 189, value: 14.62}, {cycle: 190, value: 14.62}, {cycle: 191, value: 14.62}, {cycle: 192, value: 14.62}, {cycle: 193, value: 14.62}, {cycle: 194, value: 14.62}, {cycle: 195, value: 14.62}, {cycle: 196, value: 14.62}, {cycle: 197, value: 14.62}, {cycle: 198, value: 14.62}, {cycle: 199, value: 14.62}, {cycle: 200, value: 14.62}, {cycle: 201, value: 14.62}, {cycle: 202, value: 14.62}, {cycle: 203, value: 14.62}, {cycle: 204, value: 14.62}, {cycle: 205, value: 14.62}, {cycle: 206, value: 14.62}, {cycle: 207, value: 14.62}, {cycle: 208, value: 14.62}, {cycle: 209, value: 14.62}, {cycle: 210, value: 14.62}, {cycle: 211, value: 14.62}, {cycle: 212, value: 14.62}, {cycle: 213, value: 14.62}, {cycle: 214, value: 14.62}, {cycle: 215, value: 14.62}, {cycle: 216, value: 14.62}, {cycle: 217, value: 14.62}, {cycle: 218, value: 14.62}, {cycle: 219, value: 14.62}, {cycle: 220, value: 14.62}, {cycle: 221, value: 14.62}, {cycle: 222, value: 14.62}, {cycle: 223, value: 14.62}, {cycle: 224, value: 14.62}, {cycle: 225, value: 14.62}, {cycle: 226, value: 14.62}, {cycle: 227, value: 14.62}, {cycle: 228, value: 14.62}, {cycle: 229, value: 14.62}, {cycle: 230, value: 14.62}, {cycle: 231, value: 14.62}, {cycle: 232, value: 14.62}, {cycle: 233, value: 14.62}, {cycle: 234, value: 14.62}, {cycle: 235, value: 14.62}, {cycle: 236, value: 14.62}, {cycle: 237, value: 14.62}, {cycle: 238, value: 14.62}, {cycle: 239, value: 14.62}, {cycle: 240, value: 14.62}, {cycle: 241, value: 14.62}, {cycle: 242, value: 14.62}, {cycle: 243, value: 14.62}, {cycle: 244, value: 14.62}, {cycle: 245, value: 14.62}, {cycle: 246, value: 14.62}, {cycle: 247, value: 14.62}, {cycle: 248, value: 14.62}, {cycle: 249, value: 14.62}, {cycle: 250, value: 14.62}, {cycle: 251, value: 14.62}, {cycle: 252, value: 14.62}, {cycle: 253, value: 14.62}, {cycle: 254, value: 14.62}, {cycle: 255, value: 14.62}, {cycle: 256, value: 14.62}, {cycle: 257, value: 14.62}, {cycle: 258, value: 14.62}, {cycle: 259, value: 14.62}, {cycle: 260, value: 14.62}, {cycle: 261, value: 14.62}, {cycle: 262, value: 14.62}, {cycle: 263, value: 14.62}, {cycle: 264, value: 14.62}, {cycle: 265, value: 14.62}, {cycle: 266, value: 14.62}, {cycle: 267, value: 14.62}, {cycle: 268, value: 14.62}, {cycle: 269, value: 14.62}, {cycle: 270, value: 14.62}, {cycle: 271, value: 14.62}, {cycle: 272, value: 14.62}, {cycle: 273, value: 14.62}, {cycle: 274, value: 14.62}, {cycle: 275, value: 14.62}, {cycle: 276, value: 14.62}, {cycle: 277, value: 14.62}, {cycle: 278, value: 14.62}, {cycle: 279, value: 14.62}, {cycle: 280, value: 14.62}, {cycle: 281, value: 14.62}, {cycle: 282, value: 14.62}, {cycle: 283, value: 14.62}, {cycle: 284, value: 14.62}, {cycle: 285, value: 14.62}, {cycle: 286, value: 14.62}, {cycle: 287, value: 14.62}, {cycle: 288, value: 14.62}, {cycle: 289, value: 14.62}, {cycle: 290, value: 14.62}, {cycle: 291, value: 14.62}, {cycle: 292, value: 14.62}, {cycle: 293, value: 14.62}, {cycle: 294, value: 14.62}, {cycle: 295, value: 14.62}, {cycle: 296, value: 14.62}, {cycle: 297, value: 14.62}, {cycle: 298, value: 14.62}, {cycle: 299, value: 14.62}, {cycle: 300, value: 14.62}, {cycle: 301, value: 14.62}, {cycle: 302, value: 14.62}, {cycle: 303, value: 14.62}, {cycle: 304, value: 14.62}, {cycle: 305, value: 14.62}],
      valueAxes: [{
        axisAlpha: 0,
        dashLength: 6,
        gridAlpha: 0.1,
        position: 'left'
      }],
      graphs: [{
        id: 'g1',
        bullet: 'round',
        bulletSize: 9,
        lineColor: '#4680ff',
        lineThickness: 2,
        negativeLineColor: '#4680ff',
        type: 'smoothedLine',
        valueField: 'value'
      }],
      chartCursor: {
        cursorAlpha: 0,
        valueLineEnabled: false,
        valueLineBalloonEnabled: true,
        valueLineAlpha: false,
        color: '#fff',
        cursorColor: '#FC6180',
        fullWidth: true
      },
      categoryField: 'cycle',
      categoryAxis: {
        gridAlpha: 0,
        axisAlpha: 0,
        fillAlpha: 1,
        fillColor: '#FAFAFA',
        minorGridAlpha: 0,
        minorGridEnabled: true
      },
      'export': {
        enabled: true
      }
    });
  }

  onTaskStatusChange(event) {
    const parentNode = (event.target.parentNode.parentNode);
    parentNode.classList.toggle('done-task');
  }

}

function getRandomData() {
  let data = [];
  const totalPoints = 300;
  if (data.length > 0) {
    data = data.slice(1);
  }

  while (data.length < totalPoints) {
    const prev = data.length > 0 ? data[data.length - 1] : 50;
    let y = prev + Math.random() * 10 - 5;
    if (y < 0) {
      y = 0;
    } else if (y > 100) {
      y = 100;
    }
    data.push(y);
  }

  const res = [];
  for (let i = 0; i < data.length; ++i) {
    res.push([i, data[i]]);
  }
  return res;
}
