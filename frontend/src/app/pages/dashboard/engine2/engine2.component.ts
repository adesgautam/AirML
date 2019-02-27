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
  templateUrl: './engine2.component.html',
  styleUrls: [
    './engine2.component.css'
  ]
})
export class Engine2Component implements OnInit {

  constructor() { }

  ngOnInit() {
    AmCharts.makeChart('s1-chart', {
      type: 'serial',
      marginTop: 0,
      hideCredits: true,
      marginRight: 80,
      dataProvider: [{cycle: 0, value: 518.67}, {cycle: 1, value: 518.67}, {cycle: 2, value: 518.67}, {cycle: 3, value: 518.67}, {cycle: 4, value: 518.67}, {cycle: 5, value: 518.67}, {cycle: 6, value: 518.67}, {cycle: 7, value: 518.67}, {cycle: 8, value: 518.67}, {cycle: 9, value: 518.67}, {cycle: 10, value: 518.67}, {cycle: 11, value: 518.67}, {cycle: 12, value: 518.67}, {cycle: 13, value: 518.67}, {cycle: 14, value: 518.67}, {cycle: 15, value: 518.67}, {cycle: 16, value: 518.67}, {cycle: 17, value: 518.67}, {cycle: 18, value: 518.67}, {cycle: 19, value: 518.67}, {cycle: 20, value: 518.67}, {cycle: 21, value: 518.67}, {cycle: 22, value: 518.67}, {cycle: 23, value: 518.67}, {cycle: 24, value: 518.67}, {cycle: 25, value: 518.67}, {cycle: 26, value: 518.67}, {cycle: 27, value: 518.67}, {cycle: 28, value: 518.67}, {cycle: 29, value: 518.67}, {cycle: 30, value: 518.67}, {cycle: 31, value: 518.67}, {cycle: 32, value: 518.67}, {cycle: 33, value: 518.67}, {cycle: 34, value: 518.67}, {cycle: 35, value: 518.67}, {cycle: 36, value: 518.67}, {cycle: 37, value: 518.67}, {cycle: 38, value: 518.67}, {cycle: 39, value: 518.67}, {cycle: 40, value: 518.67}, {cycle: 41, value: 518.67}, {cycle: 42, value: 518.67}, {cycle: 43, value: 518.67}, {cycle: 44, value: 518.67}, {cycle: 45, value: 518.67}, {cycle: 46, value: 518.67}, {cycle: 47, value: 518.67}, {cycle: 48, value: 518.67}, {cycle: 49, value: 518.67}, {cycle: 50, value: 518.67}, {cycle: 51, value: 518.67}, {cycle: 52, value: 518.67}, {cycle: 53, value: 518.67}, {cycle: 54, value: 518.67}, {cycle: 55, value: 518.67}, {cycle: 56, value: 518.67}, {cycle: 57, value: 518.67}, {cycle: 58, value: 518.67}, {cycle: 59, value: 518.67}, {cycle: 60, value: 518.67}, {cycle: 61, value: 518.67}, {cycle: 62, value: 518.67}, {cycle: 63, value: 518.67}, {cycle: 64, value: 518.67}, {cycle: 65, value: 518.67}, {cycle: 66, value: 518.67}, {cycle: 67, value: 518.67}, {cycle: 68, value: 518.67}, {cycle: 69, value: 518.67}, {cycle: 70, value: 518.67}, {cycle: 71, value: 518.67}, {cycle: 72, value: 518.67}, {cycle: 73, value: 518.67}, {cycle: 74, value: 518.67}, {cycle: 75, value: 518.67}, {cycle: 76, value: 518.67}, {cycle: 77, value: 518.67}, {cycle: 78, value: 518.67}, {cycle: 79, value: 518.67}, {cycle: 80, value: 518.67}, {cycle: 81, value: 518.67}, {cycle: 82, value: 518.67}, {cycle: 83, value: 518.67}, {cycle: 84, value: 518.67}, {cycle: 85, value: 518.67}, {cycle: 86, value: 518.67}, {cycle: 87, value: 518.67}, {cycle: 88, value: 518.67}, {cycle: 89, value: 518.67}, {cycle: 90, value: 518.67}, {cycle: 91, value: 518.67}, {cycle: 92, value: 518.67}, {cycle: 93, value: 518.67}, {cycle: 94, value: 518.67}, {cycle: 95, value: 518.67}, {cycle: 96, value: 518.67}, {cycle: 97, value: 518.67}, {cycle: 98, value: 518.67}, {cycle: 99, value: 518.67}, {cycle: 100, value: 518.67}, {cycle: 101, value: 518.67}, {cycle: 102, value: 518.67}, {cycle: 103, value: 518.67}, {cycle: 104, value: 518.67}, {cycle: 105, value: 518.67}, {cycle: 106, value: 518.67}, {cycle: 107, value: 518.67}, {cycle: 108, value: 518.67}, {cycle: 109, value: 518.67}, {cycle: 110, value: 518.67}, {cycle: 111, value: 518.67}, {cycle: 112, value: 518.67}, {cycle: 113, value: 518.67}, {cycle: 114, value: 518.67}, {cycle: 115, value: 518.67}, {cycle: 116, value: 518.67}, {cycle: 117, value: 518.67}, {cycle: 118, value: 518.67}, {cycle: 119, value: 518.67}, {cycle: 120, value: 518.67}, {cycle: 121, value: 518.67}, {cycle: 122, value: 518.67}, {cycle: 123, value: 518.67}, {cycle: 124, value: 518.67}, {cycle: 125, value: 518.67}, {cycle: 126, value: 518.67}, {cycle: 127, value: 518.67}, {cycle: 128, value: 518.67}, {cycle: 129, value: 518.67}, {cycle: 130, value: 518.67}, {cycle: 131, value: 518.67}, {cycle: 132, value: 518.67}, {cycle: 133, value: 518.67}, {cycle: 134, value: 518.67}, {cycle: 135, value: 518.67}, {cycle: 136, value: 518.67}, {cycle: 137, value: 518.67}, {cycle: 138, value: 518.67}, {cycle: 139, value: 518.67}, {cycle: 140, value: 518.67}, {cycle: 141, value: 518.67}, {cycle: 142, value: 518.67}, {cycle: 143, value: 518.67}, {cycle: 144, value: 518.67}, {cycle: 145, value: 518.67}, {cycle: 146, value: 518.67}, {cycle: 147, value: 518.67}, {cycle: 148, value: 518.67}, {cycle: 149, value: 518.67}, {cycle: 150, value: 518.67}, {cycle: 151, value: 518.67}, {cycle: 152, value: 518.67}, {cycle: 153, value: 518.67}, {cycle: 154, value: 518.67}, {cycle: 155, value: 518.67}, {cycle: 156, value: 518.67}, {cycle: 157, value: 518.67}, {cycle: 158, value: 518.67}, {cycle: 159, value: 518.67}, {cycle: 160, value: 518.67}, {cycle: 161, value: 518.67}, {cycle: 162, value: 518.67}, {cycle: 163, value: 518.67}, {cycle: 164, value: 518.67}, {cycle: 165, value: 518.67}, {cycle: 166, value: 518.67}, {cycle: 167, value: 518.67}, {cycle: 168, value: 518.67}, {cycle: 169, value: 518.67}, {cycle: 170, value: 518.67}, {cycle: 171, value: 518.67}, {cycle: 172, value: 518.67}, {cycle: 173, value: 518.67}, {cycle: 174, value: 518.67}, {cycle: 175, value: 518.67}, {cycle: 176, value: 518.67}, {cycle: 177, value: 518.67}, {cycle: 178, value: 518.67}, {cycle: 179, value: 518.67}, {cycle: 180, value: 518.67}, {cycle: 181, value: 518.67}, {cycle: 182, value: 518.67}, {cycle: 183, value: 518.67}, {cycle: 184, value: 518.67}, {cycle: 185, value: 518.67}, {cycle: 186, value: 518.67}, {cycle: 187, value: 518.67}, {cycle: 188, value: 518.67}, {cycle: 189, value: 518.67}, {cycle: 190, value: 518.67}, {cycle: 191, value: 518.67}, {cycle: 192, value: 518.67}, {cycle: 193, value: 518.67}, {cycle: 194, value: 518.67}, {cycle: 195, value: 518.67}, {cycle: 196, value: 518.67}, {cycle: 197, value: 518.67}, {cycle: 198, value: 518.67}, {cycle: 199, value: 518.67}, {cycle: 200, value: 518.67}, {cycle: 201, value: 518.67}, {cycle: 202, value: 518.67}, {cycle: 203, value: 518.67}, {cycle: 204, value: 518.67}, {cycle: 205, value: 518.67}, {cycle: 206, value: 518.67}, {cycle: 207, value: 518.67}, {cycle: 208, value: 518.67}, {cycle: 209, value: 518.67}, {cycle: 210, value: 518.67}, {cycle: 211, value: 518.67}, {cycle: 212, value: 518.67}, {cycle: 213, value: 518.67}, {cycle: 214, value: 518.67}, {cycle: 215, value: 518.67}, {cycle: 216, value: 518.67}, {cycle: 217, value: 518.67}, {cycle: 218, value: 518.67}, {cycle: 219, value: 518.67}, {cycle: 220, value: 518.67}, {cycle: 221, value: 518.67}, {cycle: 222, value: 518.67}, {cycle: 223, value: 518.67}, {cycle: 224, value: 518.67}, {cycle: 225, value: 518.67}, {cycle: 226, value: 518.67}, {cycle: 227, value: 518.67}, {cycle: 228, value: 518.67}, {cycle: 229, value: 518.67}, {cycle: 230, value: 518.67}, {cycle: 231, value: 518.67}, {cycle: 232, value: 518.67}, {cycle: 233, value: 518.67}, {cycle: 234, value: 518.67}, {cycle: 235, value: 518.67}, {cycle: 236, value: 518.67}, {cycle: 237, value: 518.67}, {cycle: 238, value: 518.67}, {cycle: 239, value: 518.67}, {cycle: 240, value: 518.67}, {cycle: 241, value: 518.67}, {cycle: 242, value: 518.67}, {cycle: 243, value: 518.67}, {cycle: 244, value: 518.67}, {cycle: 245, value: 518.67}, {cycle: 246, value: 518.67}, {cycle: 247, value: 518.67}, {cycle: 248, value: 518.67}, {cycle: 249, value: 518.67}, {cycle: 250, value: 518.67}, {cycle: 251, value: 518.67}, {cycle: 252, value: 518.67}, {cycle: 253, value: 518.67}, {cycle: 254, value: 518.67}, {cycle: 255, value: 518.67}, {cycle: 256, value: 518.67}, {cycle: 257, value: 518.67}, {cycle: 258, value: 518.67}, {cycle: 259, value: 518.67}, {cycle: 260, value: 518.67}, {cycle: 261, value: 518.67}, {cycle: 262, value: 518.67}, {cycle: 263, value: 518.67}, {cycle: 264, value: 518.67}, {cycle: 265, value: 518.67}, {cycle: 266, value: 518.67}, {cycle: 267, value: 518.67}, {cycle: 268, value: 518.67}, {cycle: 269, value: 518.67}, {cycle: 270, value: 518.67}, {cycle: 271, value: 518.67}, {cycle: 272, value: 518.67}, {cycle: 273, value: 518.67}, {cycle: 274, value: 518.67}, {cycle: 275, value: 518.67}, {cycle: 276, value: 518.67}, {cycle: 277, value: 518.67}, {cycle: 278, value: 518.67}, {cycle: 279, value: 518.67}, {cycle: 280, value: 518.67}, {cycle: 281, value: 518.67}, {cycle: 282, value: 518.67}, {cycle: 283, value: 518.67}, {cycle: 284, value: 518.67}, {cycle: 285, value: 518.67}, {cycle: 286, value: 518.67}, {cycle: 287, value: 518.67}, {cycle: 288, value: 518.67}, {cycle: 289, value: 518.67}, {cycle: 290, value: 518.67}, {cycle: 291, value: 518.67}, {cycle: 292, value: 518.67}, {cycle: 293, value: 518.67}, {cycle: 294, value: 518.67}, {cycle: 295, value: 518.67}, {cycle: 296, value: 518.67}, {cycle: 297, value: 518.67}],
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
      dataProvider: [{cycle: 0, value: 641.96}, {cycle: 1, value: 642.01}, {cycle: 2, value: 642.84}, {cycle: 3, value: 642.76}, {cycle: 4, value: 642.02}, {cycle: 5, value: 642.06}, {cycle: 6, value: 642.46}, {cycle: 7, value: 642.34}, {cycle: 8, value: 642.63}, {cycle: 9, value: 642.29}, {cycle: 10, value: 642.07}, {cycle: 11, value: 641.91}, {cycle: 12, value: 642.31}, {cycle: 13, value: 642.02}, {cycle: 14, value: 642.01}, {cycle: 15, value: 642.52}, {cycle: 16, value: 642.27}, {cycle: 17, value: 642.65}, {cycle: 18, value: 642.03}, {cycle: 19, value: 642.62}, {cycle: 20, value: 642.54}, {cycle: 21, value: 642.38}, {cycle: 22, value: 641.96}, {cycle: 23, value: 642.34}, {cycle: 24, value: 642.17}, {cycle: 25, value: 642.15}, {cycle: 26, value: 642.04}, {cycle: 27, value: 641.99}, {cycle: 28, value: 641.81}, {cycle: 29, value: 642.53}, {cycle: 30, value: 642.08}, {cycle: 31, value: 641.71}, {cycle: 32, value: 642.88}, {cycle: 33, value: 642.82}, {cycle: 34, value: 642.17}, {cycle: 35, value: 641.79}, {cycle: 36, value: 642.25}, {cycle: 37, value: 642.55}, {cycle: 38, value: 642.26}, {cycle: 39, value: 642.14}, {cycle: 40, value: 642.21}, {cycle: 41, value: 642.07}, {cycle: 42, value: 642.66}, {cycle: 43, value: 642.34}, {cycle: 44, value: 642.46}, {cycle: 45, value: 642.32}, {cycle: 46, value: 642.35}, {cycle: 47, value: 642.43}, {cycle: 48, value: 642.33}, {cycle: 49, value: 642.5}, {cycle: 50, value: 642.01}, {cycle: 51, value: 642.39}, {cycle: 52, value: 642.6}, {cycle: 53, value: 642.43}, {cycle: 54, value: 642.66}, {cycle: 55, value: 642.8}, {cycle: 56, value: 642.69}, {cycle: 57, value: 642.64}, {cycle: 58, value: 642.81}, {cycle: 59, value: 642.48}, {cycle: 60, value: 642.23}, {cycle: 61, value: 642.18}, {cycle: 62, value: 642.13}, {cycle: 63, value: 643.1}, {cycle: 64, value: 643.24}, {cycle: 65, value: 642.64}, {cycle: 66, value: 642.55}, {cycle: 67, value: 643.21}, {cycle: 68, value: 642.44}, {cycle: 69, value: 642.74}, {cycle: 70, value: 642.31}, {cycle: 71, value: 642.56}, {cycle: 72, value: 641.95}, {cycle: 73, value: 642.46}, {cycle: 74, value: 642.65}, {cycle: 75, value: 642.51}, {cycle: 76, value: 642.73}, {cycle: 77, value: 642.6}, {cycle: 78, value: 642.27}, {cycle: 79, value: 642.88}, {cycle: 80, value: 642.8}, {cycle: 81, value: 642.54}, {cycle: 82, value: 642.39}, {cycle: 83, value: 642.39}, {cycle: 84, value: 642.97}, {cycle: 85, value: 642.46}, {cycle: 86, value: 643.3}, {cycle: 87, value: 642.91}, {cycle: 88, value: 642.88}, {cycle: 89, value: 642.87}, {cycle: 90, value: 643.09}, {cycle: 91, value: 643.16}, {cycle: 92, value: 643.06}, {cycle: 93, value: 642.86}, {cycle: 94, value: 642.68}, {cycle: 95, value: 643.23}, {cycle: 96, value: 642.8}, {cycle: 97, value: 642.67}, {cycle: 98, value: 642.32}, {cycle: 99, value: 642.68}, {cycle: 100, value: 642.99}, {cycle: 101, value: 642.98}, {cycle: 102, value: 642.96}, {cycle: 103, value: 643.49}, {cycle: 104, value: 642.63}, {cycle: 105, value: 643.01}, {cycle: 106, value: 643.14}, {cycle: 107, value: 643.13}, {cycle: 108, value: 642.73}, {cycle: 109, value: 642.61}, {cycle: 110, value: 643.14}, {cycle: 111, value: 643.77}, {cycle: 112, value: 643.04}, {cycle: 113, value: 642.88}, {cycle: 114, value: 642.7}, {cycle: 115, value: 642.85}, {cycle: 116, value: 642.88}, {cycle: 117, value: 643.06}, {cycle: 118, value: 643.79}, {cycle: 119, value: 643.15}, {cycle: 120, value: 642.47}, {cycle: 121, value: 642.83}, {cycle: 122, value: 643.01}, {cycle: 123, value: 643.31}, {cycle: 124, value: 643.48}, {cycle: 125, value: 642.92}, {cycle: 126, value: 643.06}, {cycle: 127, value: 642.93}, {cycle: 128, value: 642.78}, {cycle: 129, value: 642.94}, {cycle: 130, value: 643.69}, {cycle: 131, value: 643.05}, {cycle: 132, value: 643.16}, {cycle: 133, value: 643.47}, {cycle: 134, value: 643.03}, {cycle: 135, value: 643.14}, {cycle: 136, value: 642.96}, {cycle: 137, value: 643.1}, {cycle: 138, value: 643.11}, {cycle: 139, value: 643.12}, {cycle: 140, value: 643.87}, {cycle: 141, value: 643.27}, {cycle: 142, value: 643.71}, {cycle: 143, value: 643.18}, {cycle: 144, value: 643.67}, {cycle: 145, value: 643.82}, {cycle: 146, value: 643.91}, {cycle: 147, value: 643.44}, {cycle: 148, value: 643.64}, {cycle: 149, value: 643.63}, {cycle: 150, value: 643.6}, {cycle: 151, value: 643.94}, {cycle: 152, value: 643.78}, {cycle: 153, value: 643.91}, {cycle: 154, value: 643.67}, {cycle: 155, value: 643.44}, {cycle: 156, value: 643.85}, {cycle: 157, value: 642.04}, {cycle: 158, value: 642.66}, {cycle: 159, value: 642.07}, {cycle: 160, value: 642.5}, {cycle: 161, value: 641.97}, {cycle: 162, value: 642.65}, {cycle: 163, value: 642.62}, {cycle: 164, value: 642.23}, {cycle: 165, value: 642.6}, {cycle: 166, value: 642.72}, {cycle: 167, value: 641.94}, {cycle: 168, value: 642.61}, {cycle: 169, value: 642.63}, {cycle: 170, value: 642.16}, {cycle: 171, value: 641.83}, {cycle: 172, value: 642.65}, {cycle: 173, value: 642.78}, {cycle: 174, value: 642.26}, {cycle: 175, value: 642.05}, {cycle: 176, value: 642.25}, {cycle: 177, value: 642.18}, {cycle: 178, value: 642.34}, {cycle: 179, value: 642.07}, {cycle: 180, value: 642.24}, {cycle: 181, value: 642.24}, {cycle: 182, value: 641.61}, {cycle: 183, value: 642.36}, {cycle: 184, value: 641.48}, {cycle: 185, value: 642.01}, {cycle: 186, value: 642.21}, {cycle: 187, value: 642.33}, {cycle: 188, value: 642.55}, {cycle: 189, value: 641.82}, {cycle: 190, value: 642.83}, {cycle: 191, value: 642.08}, {cycle: 192, value: 642.06}, {cycle: 193, value: 641.68}, {cycle: 194, value: 641.72}, {cycle: 195, value: 641.94}, {cycle: 196, value: 641.97}, {cycle: 197, value: 642.79}, {cycle: 198, value: 642.61}, {cycle: 199, value: 642.58}, {cycle: 200, value: 642.21}, {cycle: 201, value: 642.15}, {cycle: 202, value: 642.42}, {cycle: 203, value: 642.26}, {cycle: 204, value: 642.01}, {cycle: 205, value: 642.16}, {cycle: 206, value: 642.51}, {cycle: 207, value: 642.39}, {cycle: 208, value: 642.29}, {cycle: 209, value: 642.02}, {cycle: 210, value: 642.03}, {cycle: 211, value: 642.41}, {cycle: 212, value: 642.73}, {cycle: 213, value: 642.56}, {cycle: 214, value: 642.52}, {cycle: 215, value: 642.31}, {cycle: 216, value: 641.8}, {cycle: 217, value: 642.5}, {cycle: 218, value: 642.18}, {cycle: 219, value: 642.1}, {cycle: 220, value: 642.53}, {cycle: 221, value: 641.69}, {cycle: 222, value: 642.25}, {cycle: 223, value: 642.0}, {cycle: 224, value: 642.94}, {cycle: 225, value: 642.05}, {cycle: 226, value: 642.54}, {cycle: 227, value: 642.9}, {cycle: 228, value: 642.25}, {cycle: 229, value: 642.42}, {cycle: 230, value: 642.75}, {cycle: 231, value: 642.25}, {cycle: 232, value: 642.52}, {cycle: 233, value: 642.98}, {cycle: 234, value: 642.43}, {cycle: 235, value: 642.31}, {cycle: 236, value: 641.74}, {cycle: 237, value: 642.55}, {cycle: 238, value: 642.24}, {cycle: 239, value: 642.27}, {cycle: 240, value: 642.18}, {cycle: 241, value: 641.95}, {cycle: 242, value: 642.69}, {cycle: 243, value: 642.32}, {cycle: 244, value: 642.27}, {cycle: 245, value: 642.33}, {cycle: 246, value: 642.36}, {cycle: 247, value: 641.99}, {cycle: 248, value: 642.29}, {cycle: 249, value: 642.1}, {cycle: 250, value: 642.58}, {cycle: 251, value: 642.37}, {cycle: 252, value: 642.89}, {cycle: 253, value: 642.94}, {cycle: 254, value: 642.4}, {cycle: 255, value: 642.67}, {cycle: 256, value: 642.29}, {cycle: 257, value: 642.24}, {cycle: 258, value: 642.63}, {cycle: 259, value: 642.28}, {cycle: 260, value: 642.46}, {cycle: 261, value: 641.85}, {cycle: 262, value: 642.51}, {cycle: 263, value: 642.36}, {cycle: 264, value: 642.98}, {cycle: 265, value: 642.48}, {cycle: 266, value: 642.92}, {cycle: 267, value: 642.25}, {cycle: 268, value: 642.65}, {cycle: 269, value: 642.5}, {cycle: 270, value: 642.46}, {cycle: 271, value: 642.22}, {cycle: 272, value: 642.62}, {cycle: 273, value: 642.76}, {cycle: 274, value: 642.26}, {cycle: 275, value: 642.0}, {cycle: 276, value: 642.6}, {cycle: 277, value: 642.27}, {cycle: 278, value: 642.72}, {cycle: 279, value: 642.49}, {cycle: 280, value: 642.0}, {cycle: 281, value: 642.82}, {cycle: 282, value: 642.76}, {cycle: 283, value: 642.67}, {cycle: 284, value: 642.22}, {cycle: 285, value: 643.1}, {cycle: 286, value: 642.57}, {cycle: 287, value: 642.5}, {cycle: 288, value: 642.35}, {cycle: 289, value: 642.62}, {cycle: 290, value: 642.45}, {cycle: 291, value: 642.52}, {cycle: 292, value: 642.6}, {cycle: 293, value: 642.75}, {cycle: 294, value: 642.3}, {cycle: 295, value: 643.08}, {cycle: 296, value: 642.87}, {cycle: 297, value: 643.08}],
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
      dataProvider: [{cycle: 0, value: 1587.61}, {cycle: 1, value: 1586.66}, {cycle: 2, value: 1581.22}, {cycle: 3, value: 1586.44}, {cycle: 4, value: 1580.12}, {cycle: 5, value: 1582.91}, {cycle: 6, value: 1585.36}, {cycle: 7, value: 1585.19}, {cycle: 8, value: 1590.88}, {cycle: 9, value: 1593.7}, {cycle: 10, value: 1585.09}, {cycle: 11, value: 1586.41}, {cycle: 12, value: 1588.88}, {cycle: 13, value: 1584.35}, {cycle: 14, value: 1582.72}, {cycle: 15, value: 1590.06}, {cycle: 16, value: 1588.78}, {cycle: 17, value: 1584.5}, {cycle: 18, value: 1587.88}, {cycle: 19, value: 1585.43}, {cycle: 20, value: 1590.21}, {cycle: 21, value: 1583.49}, {cycle: 22, value: 1594.33}, {cycle: 23, value: 1591.3}, {cycle: 24, value: 1580.93}, {cycle: 25, value: 1578.73}, {cycle: 26, value: 1588.7}, {cycle: 27, value: 1586.95}, {cycle: 28, value: 1593.89}, {cycle: 29, value: 1585.65}, {cycle: 30, value: 1586.65}, {cycle: 31, value: 1588.83}, {cycle: 32, value: 1589.56}, {cycle: 33, value: 1588.23}, {cycle: 34, value: 1588.55}, {cycle: 35, value: 1589.09}, {cycle: 36, value: 1588.74}, {cycle: 37, value: 1593.95}, {cycle: 38, value: 1581.85}, {cycle: 39, value: 1577.26}, {cycle: 40, value: 1587.94}, {cycle: 41, value: 1589.42}, {cycle: 42, value: 1589.0}, {cycle: 43, value: 1588.01}, {cycle: 44, value: 1584.58}, {cycle: 45, value: 1585.73}, {cycle: 46, value: 1586.88}, {cycle: 47, value: 1590.29}, {cycle: 48, value: 1584.55}, {cycle: 49, value: 1593.51}, {cycle: 50, value: 1585.87}, {cycle: 51, value: 1586.42}, {cycle: 52, value: 1584.95}, {cycle: 53, value: 1585.66}, {cycle: 54, value: 1581.09}, {cycle: 55, value: 1582.46}, {cycle: 56, value: 1588.88}, {cycle: 57, value: 1582.97}, {cycle: 58, value: 1583.54}, {cycle: 59, value: 1592.5}, {cycle: 60, value: 1584.59}, {cycle: 61, value: 1589.95}, {cycle: 62, value: 1588.28}, {cycle: 63, value: 1592.38}, {cycle: 64, value: 1591.55}, {cycle: 65, value: 1591.39}, {cycle: 66, value: 1588.64}, {cycle: 67, value: 1596.17}, {cycle: 68, value: 1587.17}, {cycle: 69, value: 1589.73}, {cycle: 70, value: 1595.57}, {cycle: 71, value: 1589.47}, {cycle: 72, value: 1593.02}, {cycle: 73, value: 1591.84}, {cycle: 74, value: 1586.59}, {cycle: 75, value: 1588.18}, {cycle: 76, value: 1591.04}, {cycle: 77, value: 1590.29}, {cycle: 78, value: 1590.92}, {cycle: 79, value: 1583.56}, {cycle: 80, value: 1584.65}, {cycle: 81, value: 1586.71}, {cycle: 82, value: 1594.64}, {cycle: 83, value: 1588.17}, {cycle: 84, value: 1591.44}, {cycle: 85, value: 1583.46}, {cycle: 86, value: 1585.11}, {cycle: 87, value: 1592.69}, {cycle: 88, value: 1592.52}, {cycle: 89, value: 1600.76}, {cycle: 90, value: 1586.57}, {cycle: 91, value: 1590.78}, {cycle: 92, value: 1596.47}, {cycle: 93, value: 1592.47}, {cycle: 94, value: 1590.59}, {cycle: 95, value: 1601.02}, {cycle: 96, value: 1587.46}, {cycle: 97, value: 1592.83}, {cycle: 98, value: 1593.83}, {cycle: 99, value: 1593.67}, {cycle: 100, value: 1593.78}, {cycle: 101, value: 1590.33}, {cycle: 102, value: 1599.65}, {cycle: 103, value: 1588.68}, {cycle: 104, value: 1594.54}, {cycle: 105, value: 1598.16}, {cycle: 106, value: 1593.05}, {cycle: 107, value: 1599.64}, {cycle: 108, value: 1598.37}, {cycle: 109, value: 1599.71}, {cycle: 110, value: 1598.65}, {cycle: 111, value: 1593.7}, {cycle: 112, value: 1593.98}, {cycle: 113, value: 1595.99}, {cycle: 114, value: 1590.93}, {cycle: 115, value: 1589.74}, {cycle: 116, value: 1601.2}, {cycle: 117, value: 1599.41}, {cycle: 118, value: 1599.77}, {cycle: 119, value: 1598.28}, {cycle: 120, value: 1598.68}, {cycle: 121, value: 1596.89}, {cycle: 122, value: 1596.43}, {cycle: 123, value: 1593.88}, {cycle: 124, value: 1598.25}, {cycle: 125, value: 1598.83}, {cycle: 126, value: 1593.17}, {cycle: 127, value: 1599.77}, {cycle: 128, value: 1597.65}, {cycle: 129, value: 1593.51}, {cycle: 130, value: 1594.0}, {cycle: 131, value: 1588.3}, {cycle: 132, value: 1592.32}, {cycle: 133, value: 1610.1}, {cycle: 134, value: 1593.48}, {cycle: 135, value: 1591.54}, {cycle: 136, value: 1602.23}, {cycle: 137, value: 1602.53}, {cycle: 138, value: 1594.52}, {cycle: 139, value: 1604.32}, {cycle: 140, value: 1607.43}, {cycle: 141, value: 1600.02}, {cycle: 142, value: 1598.88}, {cycle: 143, value: 1598.98}, {cycle: 144, value: 1595.3}, {cycle: 145, value: 1605.46}, {cycle: 146, value: 1601.47}, {cycle: 147, value: 1597.61}, {cycle: 148, value: 1594.8}, {cycle: 149, value: 1594.21}, {cycle: 150, value: 1598.25}, {cycle: 151, value: 1598.56}, {cycle: 152, value: 1602.03}, {cycle: 153, value: 1601.35}, {cycle: 154, value: 1596.84}, {cycle: 155, value: 1603.63}, {cycle: 156, value: 1608.5}, {cycle: 157, value: 1584.2}, {cycle: 158, value: 1587.04}, {cycle: 159, value: 1580.75}, {cycle: 160, value: 1580.12}, {cycle: 161, value: 1581.48}, {cycle: 162, value: 1581.26}, {cycle: 163, value: 1583.68}, {cycle: 164, value: 1581.6}, {cycle: 165, value: 1581.04}, {cycle: 166, value: 1582.2}, {cycle: 167, value: 1591.43}, {cycle: 168, value: 1583.92}, {cycle: 169, value: 1583.25}, {cycle: 170, value: 1591.03}, {cycle: 171, value: 1585.29}, {cycle: 172, value: 1589.05}, {cycle: 173, value: 1588.94}, {cycle: 174, value: 1584.36}, {cycle: 175, value: 1580.67}, {cycle: 176, value: 1580.73}, {cycle: 177, value: 1586.78}, {cycle: 178, value: 1589.55}, {cycle: 179, value: 1585.2}, {cycle: 180, value: 1585.08}, {cycle: 181, value: 1579.4}, {cycle: 182, value: 1586.92}, {cycle: 183, value: 1581.83}, {cycle: 184, value: 1590.59}, {cycle: 185, value: 1584.71}, {cycle: 186, value: 1584.95}, {cycle: 187, value: 1588.68}, {cycle: 188, value: 1583.7}, {cycle: 189, value: 1583.55}, {cycle: 190, value: 1584.17}, {cycle: 191, value: 1584.57}, {cycle: 192, value: 1580.96}, {cycle: 193, value: 1582.96}, {cycle: 194, value: 1577.99}, {cycle: 195, value: 1580.42}, {cycle: 196, value: 1579.38}, {cycle: 197, value: 1586.38}, {cycle: 198, value: 1586.25}, {cycle: 199, value: 1587.9}, {cycle: 200, value: 1586.83}, {cycle: 201, value: 1582.99}, {cycle: 202, value: 1590.25}, {cycle: 203, value: 1587.55}, {cycle: 204, value: 1587.21}, {cycle: 205, value: 1583.53}, {cycle: 206, value: 1586.16}, {cycle: 207, value: 1592.16}, {cycle: 208, value: 1582.66}, {cycle: 209, value: 1588.04}, {cycle: 210, value: 1585.66}, {cycle: 211, value: 1594.2}, {cycle: 212, value: 1586.08}, {cycle: 213, value: 1581.97}, {cycle: 214, value: 1581.31}, {cycle: 215, value: 1587.46}, {cycle: 216, value: 1586.82}, {cycle: 217, value: 1585.5}, {cycle: 218, value: 1591.5}, {cycle: 219, value: 1583.42}, {cycle: 220, value: 1590.04}, {cycle: 221, value: 1586.21}, {cycle: 222, value: 1577.22}, {cycle: 223, value: 1584.55}, {cycle: 224, value: 1587.27}, {cycle: 225, value: 1581.93}, {cycle: 226, value: 1587.02}, {cycle: 227, value: 1579.41}, {cycle: 228, value: 1590.21}, {cycle: 229, value: 1585.01}, {cycle: 230, value: 1589.64}, {cycle: 231, value: 1592.23}, {cycle: 232, value: 1589.35}, {cycle: 233, value: 1584.13}, {cycle: 234, value: 1579.52}, {cycle: 235, value: 1582.4}, {cycle: 236, value: 1580.95}, {cycle: 237, value: 1581.73}, {cycle: 238, value: 1583.69}, {cycle: 239, value: 1591.3}, {cycle: 240, value: 1593.32}, {cycle: 241, value: 1587.14}, {cycle: 242, value: 1586.09}, {cycle: 243, value: 1588.25}, {cycle: 244, value: 1585.9}, {cycle: 245, value: 1582.29}, {cycle: 246, value: 1597.84}, {cycle: 247, value: 1582.81}, {cycle: 248, value: 1590.07}, {cycle: 249, value: 1593.66}, {cycle: 250, value: 1588.9}, {cycle: 251, value: 1585.69}, {cycle: 252, value: 1582.86}, {cycle: 253, value: 1587.51}, {cycle: 254, value: 1586.19}, {cycle: 255, value: 1589.42}, {cycle: 256, value: 1579.98}, {cycle: 257, value: 1587.77}, {cycle: 258, value: 1579.35}, {cycle: 259, value: 1585.62}, {cycle: 260, value: 1586.74}, {cycle: 261, value: 1591.89}, {cycle: 262, value: 1586.44}, {cycle: 263, value: 1586.96}, {cycle: 264, value: 1583.29}, {cycle: 265, value: 1588.21}, {cycle: 266, value: 1592.41}, {cycle: 267, value: 1583.83}, {cycle: 268, value: 1584.14}, {cycle: 269, value: 1590.74}, {cycle: 270, value: 1588.4}, {cycle: 271, value: 1588.97}, {cycle: 272, value: 1591.56}, {cycle: 273, value: 1587.74}, {cycle: 274, value: 1590.05}, {cycle: 275, value: 1588.1}, {cycle: 276, value: 1585.58}, {cycle: 277, value: 1585.86}, {cycle: 278, value: 1586.83}, {cycle: 279, value: 1594.72}, {cycle: 280, value: 1588.41}, {cycle: 281, value: 1580.5}, {cycle: 282, value: 1583.13}, {cycle: 283, value: 1593.61}, {cycle: 284, value: 1592.24}, {cycle: 285, value: 1597.5}, {cycle: 286, value: 1584.08}, {cycle: 287, value: 1589.91}, {cycle: 288, value: 1592.88}, {cycle: 289, value: 1589.14}, {cycle: 290, value: 1586.99}, {cycle: 291, value: 1588.65}, {cycle: 292, value: 1592.25}, {cycle: 293, value: 1589.57}, {cycle: 294, value: 1599.56}, {cycle: 295, value: 1594.87}, {cycle: 296, value: 1589.67}, {cycle: 297, value: 1584.87}],
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
      dataProvider: [{cycle: 0, value: 1394.26}, {cycle: 1, value: 1398.78}, {cycle: 2, value: 1393.87}, {cycle: 3, value: 1406.2}, {cycle: 4, value: 1404.56}, {cycle: 5, value: 1402.67}, {cycle: 6, value: 1406.79}, {cycle: 7, value: 1398.95}, {cycle: 8, value: 1400.87}, {cycle: 9, value: 1403.14}, {cycle: 10, value: 1403.25}, {cycle: 11, value: 1401.27}, {cycle: 12, value: 1400.49}, {cycle: 13, value: 1401.21}, {cycle: 14, value: 1403.53}, {cycle: 15, value: 1405.09}, {cycle: 16, value: 1394.58}, {cycle: 17, value: 1398.3}, {cycle: 18, value: 1404.41}, {cycle: 19, value: 1393.74}, {cycle: 20, value: 1398.31}, {cycle: 21, value: 1400.9}, {cycle: 22, value: 1397.52}, {cycle: 23, value: 1413.28}, {cycle: 24, value: 1397.45}, {cycle: 25, value: 1399.13}, {cycle: 26, value: 1400.63}, {cycle: 27, value: 1404.68}, {cycle: 28, value: 1399.71}, {cycle: 29, value: 1409.72}, {cycle: 30, value: 1396.32}, {cycle: 31, value: 1401.23}, {cycle: 32, value: 1396.2}, {cycle: 33, value: 1405.5}, {cycle: 34, value: 1402.96}, {cycle: 35, value: 1394.26}, {cycle: 36, value: 1395.35}, {cycle: 37, value: 1404.01}, {cycle: 38, value: 1406.06}, {cycle: 39, value: 1405.93}, {cycle: 40, value: 1410.34}, {cycle: 41, value: 1398.26}, {cycle: 42, value: 1403.22}, {cycle: 43, value: 1403.24}, {cycle: 44, value: 1398.37}, {cycle: 45, value: 1405.47}, {cycle: 46, value: 1400.31}, {cycle: 47, value: 1404.39}, {cycle: 48, value: 1399.3}, {cycle: 49, value: 1402.27}, {cycle: 50, value: 1399.24}, {cycle: 51, value: 1406.61}, {cycle: 52, value: 1406.15}, {cycle: 53, value: 1408.13}, {cycle: 54, value: 1407.11}, {cycle: 55, value: 1404.35}, {cycle: 56, value: 1407.54}, {cycle: 57, value: 1402.72}, {cycle: 58, value: 1403.09}, {cycle: 59, value: 1405.73}, {cycle: 60, value: 1407.64}, {cycle: 61, value: 1404.07}, {cycle: 62, value: 1399.59}, {cycle: 63, value: 1404.64}, {cycle: 64, value: 1410.18}, {cycle: 65, value: 1408.59}, {cycle: 66, value: 1403.29}, {cycle: 67, value: 1402.91}, {cycle: 68, value: 1409.39}, {cycle: 69, value: 1406.28}, {cycle: 70, value: 1400.92}, {cycle: 71, value: 1408.72}, {cycle: 72, value: 1410.33}, {cycle: 73, value: 1404.01}, {cycle: 74, value: 1409.11}, {cycle: 75, value: 1411.14}, {cycle: 76, value: 1402.94}, {cycle: 77, value: 1407.93}, {cycle: 78, value: 1409.2}, {cycle: 79, value: 1396.99}, {cycle: 80, value: 1409.23}, {cycle: 81, value: 1406.43}, {cycle: 82, value: 1407.38}, {cycle: 83, value: 1402.21}, {cycle: 84, value: 1411.63}, {cycle: 85, value: 1408.68}, {cycle: 86, value: 1407.97}, {cycle: 87, value: 1412.7}, {cycle: 88, value: 1412.91}, {cycle: 89, value: 1406.68}, {cycle: 90, value: 1408.21}, {cycle: 91, value: 1411.66}, {cycle: 92, value: 1406.28}, {cycle: 93, value: 1414.63}, {cycle: 94, value: 1409.87}, {cycle: 95, value: 1408.9}, {cycle: 96, value: 1410.4}, {cycle: 97, value: 1406.88}, {cycle: 98, value: 1407.69}, {cycle: 99, value: 1412.71}, {cycle: 100, value: 1404.68}, {cycle: 101, value: 1411.66}, {cycle: 102, value: 1413.34}, {cycle: 103, value: 1412.07}, {cycle: 104, value: 1406.42}, {cycle: 105, value: 1410.66}, {cycle: 106, value: 1419.76}, {cycle: 107, value: 1413.73}, {cycle: 108, value: 1417.49}, {cycle: 109, value: 1406.54}, {cycle: 110, value: 1418.33}, {cycle: 111, value: 1408.71}, {cycle: 112, value: 1411.41}, {cycle: 113, value: 1413.04}, {cycle: 114, value: 1418.05}, {cycle: 115, value: 1420.2}, {cycle: 116, value: 1413.56}, {cycle: 117, value: 1417.22}, {cycle: 118, value: 1419.19}, {cycle: 119, value: 1415.35}, {cycle: 120, value: 1418.61}, {cycle: 121, value: 1422.69}, {cycle: 122, value: 1416.12}, {cycle: 123, value: 1423.55}, {cycle: 124, value: 1412.73}, {cycle: 125, value: 1421.46}, {cycle: 126, value: 1426.94}, {cycle: 127, value: 1421.07}, {cycle: 128, value: 1416.63}, {cycle: 129, value: 1419.41}, {cycle: 130, value: 1419.92}, {cycle: 131, value: 1418.2}, {cycle: 132, value: 1422.82}, {cycle: 133, value: 1424.48}, {cycle: 134, value: 1420.27}, {cycle: 135, value: 1422.54}, {cycle: 136, value: 1422.12}, {cycle: 137, value: 1419.61}, {cycle: 138, value: 1419.23}, {cycle: 139, value: 1424.27}, {cycle: 140, value: 1425.06}, {cycle: 141, value: 1426.7}, {cycle: 142, value: 1418.55}, {cycle: 143, value: 1427.83}, {cycle: 144, value: 1421.8}, {cycle: 145, value: 1429.66}, {cycle: 146, value: 1424.78}, {cycle: 147, value: 1423.67}, {cycle: 148, value: 1426.95}, {cycle: 149, value: 1422.89}, {cycle: 150, value: 1424.36}, {cycle: 151, value: 1426.87}, {cycle: 152, value: 1429.67}, {cycle: 153, value: 1430.04}, {cycle: 154, value: 1431.17}, {cycle: 155, value: 1429.57}, {cycle: 156, value: 1430.84}, {cycle: 157, value: 1398.13}, {cycle: 158, value: 1398.62}, {cycle: 159, value: 1401.1}, {cycle: 160, value: 1395.76}, {cycle: 161, value: 1394.05}, {cycle: 162, value: 1397.98}, {cycle: 163, value: 1405.76}, {cycle: 164, value: 1401.86}, {cycle: 165, value: 1398.3}, {cycle: 166, value: 1400.07}, {cycle: 167, value: 1400.59}, {cycle: 168, value: 1404.93}, {cycle: 169, value: 1403.52}, {cycle: 170, value: 1396.35}, {cycle: 171, value: 1398.77}, {cycle: 172, value: 1392.15}, {cycle: 173, value: 1395.76}, {cycle: 174, value: 1402.3}, {cycle: 175, value: 1402.82}, {cycle: 176, value: 1394.57}, {cycle: 177, value: 1398.83}, {cycle: 178, value: 1405.28}, {cycle: 179, value: 1395.59}, {cycle: 180, value: 1395.73}, {cycle: 181, value: 1390.93}, {cycle: 182, value: 1401.63}, {cycle: 183, value: 1400.85}, {cycle: 184, value: 1400.68}, {cycle: 185, value: 1396.05}, {cycle: 186, value: 1398.1}, {cycle: 187, value: 1393.95}, {cycle: 188, value: 1400.58}, {cycle: 189, value: 1403.93}, {cycle: 190, value: 1397.47}, {cycle: 191, value: 1396.92}, {cycle: 192, value: 1399.12}, {cycle: 193, value: 1396.65}, {cycle: 194, value: 1401.83}, {cycle: 195, value: 1400.8}, {cycle: 196, value: 1403.24}, {cycle: 197, value: 1394.92}, {cycle: 198, value: 1404.49}, {cycle: 199, value: 1401.51}, {cycle: 200, value: 1395.48}, {cycle: 201, value: 1398.33}, {cycle: 202, value: 1401.55}, {cycle: 203, value: 1395.3}, {cycle: 204, value: 1392.94}, {cycle: 205, value: 1396.11}, {cycle: 206, value: 1402.64}, {cycle: 207, value: 1401.05}, {cycle: 208, value: 1404.99}, {cycle: 209, value: 1399.78}, {cycle: 210, value: 1407.04}, {cycle: 211, value: 1399.08}, {cycle: 212, value: 1403.97}, {cycle: 213, value: 1398.55}, {cycle: 214, value: 1403.99}, {cycle: 215, value: 1397.56}, {cycle: 216, value: 1405.66}, {cycle: 217, value: 1392.35}, {cycle: 218, value: 1403.57}, {cycle: 219, value: 1398.98}, {cycle: 220, value: 1404.68}, {cycle: 221, value: 1400.69}, {cycle: 222, value: 1397.9}, {cycle: 223, value: 1403.87}, {cycle: 224, value: 1400.37}, {cycle: 225, value: 1404.2}, {cycle: 226, value: 1397.09}, {cycle: 227, value: 1401.19}, {cycle: 228, value: 1389.86}, {cycle: 229, value: 1400.06}, {cycle: 230, value: 1405.76}, {cycle: 231, value: 1406.98}, {cycle: 232, value: 1405.34}, {cycle: 233, value: 1405.99}, {cycle: 234, value: 1400.53}, {cycle: 235, value: 1403.49}, {cycle: 236, value: 1405.37}, {cycle: 237, value: 1402.65}, {cycle: 238, value: 1400.4}, {cycle: 239, value: 1398.73}, {cycle: 240, value: 1400.62}, {cycle: 241, value: 1414.11}, {cycle: 242, value: 1401.01}, {cycle: 243, value: 1402.17}, {cycle: 244, value: 1400.09}, {cycle: 245, value: 1404.14}, {cycle: 246, value: 1406.26}, {cycle: 247, value: 1399.5}, {cycle: 248, value: 1400.27}, {cycle: 249, value: 1409.21}, {cycle: 250, value: 1401.08}, {cycle: 251, value: 1406.13}, {cycle: 252, value: 1400.62}, {cycle: 253, value: 1408.05}, {cycle: 254, value: 1403.62}, {cycle: 255, value: 1398.72}, {cycle: 256, value: 1404.16}, {cycle: 257, value: 1405.55}, {cycle: 258, value: 1408.84}, {cycle: 259, value: 1395.4}, {cycle: 260, value: 1403.37}, {cycle: 261, value: 1397.73}, {cycle: 262, value: 1405.62}, {cycle: 263, value: 1410.67}, {cycle: 264, value: 1405.94}, {cycle: 265, value: 1402.77}, {cycle: 266, value: 1403.14}, {cycle: 267, value: 1401.73}, {cycle: 268, value: 1400.61}, {cycle: 269, value: 1408.52}, {cycle: 270, value: 1407.81}, {cycle: 271, value: 1400.56}, {cycle: 272, value: 1407.84}, {cycle: 273, value: 1402.28}, {cycle: 274, value: 1408.53}, {cycle: 275, value: 1398.22}, {cycle: 276, value: 1408.79}, {cycle: 277, value: 1413.79}, {cycle: 278, value: 1406.06}, {cycle: 279, value: 1408.04}, {cycle: 280, value: 1405.29}, {cycle: 281, value: 1405.04}, {cycle: 282, value: 1409.96}, {cycle: 283, value: 1395.95}, {cycle: 284, value: 1409.32}, {cycle: 285, value: 1405.91}, {cycle: 286, value: 1410.11}, {cycle: 287, value: 1406.13}, {cycle: 288, value: 1408.51}, {cycle: 289, value: 1409.48}, {cycle: 290, value: 1406.61}, {cycle: 291, value: 1407.5}, {cycle: 292, value: 1405.41}, {cycle: 293, value: 1409.77}, {cycle: 294, value: 1407.3}, {cycle: 295, value: 1415.14}, {cycle: 296, value: 1414.46}, {cycle: 297, value: 1412.02}],
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
      dataProvider: [{cycle: 0, value: 14.62}, {cycle: 1, value: 14.62}, {cycle: 2, value: 14.62}, {cycle: 3, value: 14.62}, {cycle: 4, value: 14.62}, {cycle: 5, value: 14.62}, {cycle: 6, value: 14.62}, {cycle: 7, value: 14.62}, {cycle: 8, value: 14.62}, {cycle: 9, value: 14.62}, {cycle: 10, value: 14.62}, {cycle: 11, value: 14.62}, {cycle: 12, value: 14.62}, {cycle: 13, value: 14.62}, {cycle: 14, value: 14.62}, {cycle: 15, value: 14.62}, {cycle: 16, value: 14.62}, {cycle: 17, value: 14.62}, {cycle: 18, value: 14.62}, {cycle: 19, value: 14.62}, {cycle: 20, value: 14.62}, {cycle: 21, value: 14.62}, {cycle: 22, value: 14.62}, {cycle: 23, value: 14.62}, {cycle: 24, value: 14.62}, {cycle: 25, value: 14.62}, {cycle: 26, value: 14.62}, {cycle: 27, value: 14.62}, {cycle: 28, value: 14.62}, {cycle: 29, value: 14.62}, {cycle: 30, value: 14.62}, {cycle: 31, value: 14.62}, {cycle: 32, value: 14.62}, {cycle: 33, value: 14.62}, {cycle: 34, value: 14.62}, {cycle: 35, value: 14.62}, {cycle: 36, value: 14.62}, {cycle: 37, value: 14.62}, {cycle: 38, value: 14.62}, {cycle: 39, value: 14.62}, {cycle: 40, value: 14.62}, {cycle: 41, value: 14.62}, {cycle: 42, value: 14.62}, {cycle: 43, value: 14.62}, {cycle: 44, value: 14.62}, {cycle: 45, value: 14.62}, {cycle: 46, value: 14.62}, {cycle: 47, value: 14.62}, {cycle: 48, value: 14.62}, {cycle: 49, value: 14.62}, {cycle: 50, value: 14.62}, {cycle: 51, value: 14.62}, {cycle: 52, value: 14.62}, {cycle: 53, value: 14.62}, {cycle: 54, value: 14.62}, {cycle: 55, value: 14.62}, {cycle: 56, value: 14.62}, {cycle: 57, value: 14.62}, {cycle: 58, value: 14.62}, {cycle: 59, value: 14.62}, {cycle: 60, value: 14.62}, {cycle: 61, value: 14.62}, {cycle: 62, value: 14.62}, {cycle: 63, value: 14.62}, {cycle: 64, value: 14.62}, {cycle: 65, value: 14.62}, {cycle: 66, value: 14.62}, {cycle: 67, value: 14.62}, {cycle: 68, value: 14.62}, {cycle: 69, value: 14.62}, {cycle: 70, value: 14.62}, {cycle: 71, value: 14.62}, {cycle: 72, value: 14.62}, {cycle: 73, value: 14.62}, {cycle: 74, value: 14.62}, {cycle: 75, value: 14.62}, {cycle: 76, value: 14.62}, {cycle: 77, value: 14.62}, {cycle: 78, value: 14.62}, {cycle: 79, value: 14.62}, {cycle: 80, value: 14.62}, {cycle: 81, value: 14.62}, {cycle: 82, value: 14.62}, {cycle: 83, value: 14.62}, {cycle: 84, value: 14.62}, {cycle: 85, value: 14.62}, {cycle: 86, value: 14.62}, {cycle: 87, value: 14.62}, {cycle: 88, value: 14.62}, {cycle: 89, value: 14.62}, {cycle: 90, value: 14.62}, {cycle: 91, value: 14.62}, {cycle: 92, value: 14.62}, {cycle: 93, value: 14.62}, {cycle: 94, value: 14.62}, {cycle: 95, value: 14.62}, {cycle: 96, value: 14.62}, {cycle: 97, value: 14.62}, {cycle: 98, value: 14.62}, {cycle: 99, value: 14.62}, {cycle: 100, value: 14.62}, {cycle: 101, value: 14.62}, {cycle: 102, value: 14.62}, {cycle: 103, value: 14.62}, {cycle: 104, value: 14.62}, {cycle: 105, value: 14.62}, {cycle: 106, value: 14.62}, {cycle: 107, value: 14.62}, {cycle: 108, value: 14.62}, {cycle: 109, value: 14.62}, {cycle: 110, value: 14.62}, {cycle: 111, value: 14.62}, {cycle: 112, value: 14.62}, {cycle: 113, value: 14.62}, {cycle: 114, value: 14.62}, {cycle: 115, value: 14.62}, {cycle: 116, value: 14.62}, {cycle: 117, value: 14.62}, {cycle: 118, value: 14.62}, {cycle: 119, value: 14.62}, {cycle: 120, value: 14.62}, {cycle: 121, value: 14.62}, {cycle: 122, value: 14.62}, {cycle: 123, value: 14.62}, {cycle: 124, value: 14.62}, {cycle: 125, value: 14.62}, {cycle: 126, value: 14.62}, {cycle: 127, value: 14.62}, {cycle: 128, value: 14.62}, {cycle: 129, value: 14.62}, {cycle: 130, value: 14.62}, {cycle: 131, value: 14.62}, {cycle: 132, value: 14.62}, {cycle: 133, value: 14.62}, {cycle: 134, value: 14.62}, {cycle: 135, value: 14.62}, {cycle: 136, value: 14.62}, {cycle: 137, value: 14.62}, {cycle: 138, value: 14.62}, {cycle: 139, value: 14.62}, {cycle: 140, value: 14.62}, {cycle: 141, value: 14.62}, {cycle: 142, value: 14.62}, {cycle: 143, value: 14.62}, {cycle: 144, value: 14.62}, {cycle: 145, value: 14.62}, {cycle: 146, value: 14.62}, {cycle: 147, value: 14.62}, {cycle: 148, value: 14.62}, {cycle: 149, value: 14.62}, {cycle: 150, value: 14.62}, {cycle: 151, value: 14.62}, {cycle: 152, value: 14.62}, {cycle: 153, value: 14.62}, {cycle: 154, value: 14.62}, {cycle: 155, value: 14.62}, {cycle: 156, value: 14.62}, {cycle: 157, value: 14.62}, {cycle: 158, value: 14.62}, {cycle: 159, value: 14.62}, {cycle: 160, value: 14.62}, {cycle: 161, value: 14.62}, {cycle: 162, value: 14.62}, {cycle: 163, value: 14.62}, {cycle: 164, value: 14.62}, {cycle: 165, value: 14.62}, {cycle: 166, value: 14.62}, {cycle: 167, value: 14.62}, {cycle: 168, value: 14.62}, {cycle: 169, value: 14.62}, {cycle: 170, value: 14.62}, {cycle: 171, value: 14.62}, {cycle: 172, value: 14.62}, {cycle: 173, value: 14.62}, {cycle: 174, value: 14.62}, {cycle: 175, value: 14.62}, {cycle: 176, value: 14.62}, {cycle: 177, value: 14.62}, {cycle: 178, value: 14.62}, {cycle: 179, value: 14.62}, {cycle: 180, value: 14.62}, {cycle: 181, value: 14.62}, {cycle: 182, value: 14.62}, {cycle: 183, value: 14.62}, {cycle: 184, value: 14.62}, {cycle: 185, value: 14.62}, {cycle: 186, value: 14.62}, {cycle: 187, value: 14.62}, {cycle: 188, value: 14.62}, {cycle: 189, value: 14.62}, {cycle: 190, value: 14.62}, {cycle: 191, value: 14.62}, {cycle: 192, value: 14.62}, {cycle: 193, value: 14.62}, {cycle: 194, value: 14.62}, {cycle: 195, value: 14.62}, {cycle: 196, value: 14.62}, {cycle: 197, value: 14.62}, {cycle: 198, value: 14.62}, {cycle: 199, value: 14.62}, {cycle: 200, value: 14.62}, {cycle: 201, value: 14.62}, {cycle: 202, value: 14.62}, {cycle: 203, value: 14.62}, {cycle: 204, value: 14.62}, {cycle: 205, value: 14.62}, {cycle: 206, value: 14.62}, {cycle: 207, value: 14.62}, {cycle: 208, value: 14.62}, {cycle: 209, value: 14.62}, {cycle: 210, value: 14.62}, {cycle: 211, value: 14.62}, {cycle: 212, value: 14.62}, {cycle: 213, value: 14.62}, {cycle: 214, value: 14.62}, {cycle: 215, value: 14.62}, {cycle: 216, value: 14.62}, {cycle: 217, value: 14.62}, {cycle: 218, value: 14.62}, {cycle: 219, value: 14.62}, {cycle: 220, value: 14.62}, {cycle: 221, value: 14.62}, {cycle: 222, value: 14.62}, {cycle: 223, value: 14.62}, {cycle: 224, value: 14.62}, {cycle: 225, value: 14.62}, {cycle: 226, value: 14.62}, {cycle: 227, value: 14.62}, {cycle: 228, value: 14.62}, {cycle: 229, value: 14.62}, {cycle: 230, value: 14.62}, {cycle: 231, value: 14.62}, {cycle: 232, value: 14.62}, {cycle: 233, value: 14.62}, {cycle: 234, value: 14.62}, {cycle: 235, value: 14.62}, {cycle: 236, value: 14.62}, {cycle: 237, value: 14.62}, {cycle: 238, value: 14.62}, {cycle: 239, value: 14.62}, {cycle: 240, value: 14.62}, {cycle: 241, value: 14.62}, {cycle: 242, value: 14.62}, {cycle: 243, value: 14.62}, {cycle: 244, value: 14.62}, {cycle: 245, value: 14.62}, {cycle: 246, value: 14.62}, {cycle: 247, value: 14.62}, {cycle: 248, value: 14.62}, {cycle: 249, value: 14.62}, {cycle: 250, value: 14.62}, {cycle: 251, value: 14.62}, {cycle: 252, value: 14.62}, {cycle: 253, value: 14.62}, {cycle: 254, value: 14.62}, {cycle: 255, value: 14.62}, {cycle: 256, value: 14.62}, {cycle: 257, value: 14.62}, {cycle: 258, value: 14.62}, {cycle: 259, value: 14.62}, {cycle: 260, value: 14.62}, {cycle: 261, value: 14.62}, {cycle: 262, value: 14.62}, {cycle: 263, value: 14.62}, {cycle: 264, value: 14.62}, {cycle: 265, value: 14.62}, {cycle: 266, value: 14.62}, {cycle: 267, value: 14.62}, {cycle: 268, value: 14.62}, {cycle: 269, value: 14.62}, {cycle: 270, value: 14.62}, {cycle: 271, value: 14.62}, {cycle: 272, value: 14.62}, {cycle: 273, value: 14.62}, {cycle: 274, value: 14.62}, {cycle: 275, value: 14.62}, {cycle: 276, value: 14.62}, {cycle: 277, value: 14.62}, {cycle: 278, value: 14.62}, {cycle: 279, value: 14.62}, {cycle: 280, value: 14.62}, {cycle: 281, value: 14.62}, {cycle: 282, value: 14.62}, {cycle: 283, value: 14.62}, {cycle: 284, value: 14.62}, {cycle: 285, value: 14.62}, {cycle: 286, value: 14.62}, {cycle: 287, value: 14.62}, {cycle: 288, value: 14.62}, {cycle: 289, value: 14.62}, {cycle: 290, value: 14.62}, {cycle: 291, value: 14.62}, {cycle: 292, value: 14.62}, {cycle: 293, value: 14.62}, {cycle: 294, value: 14.62}, {cycle: 295, value: 14.62}, {cycle: 296, value: 14.62}, {cycle: 297, value: 14.62}],
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
