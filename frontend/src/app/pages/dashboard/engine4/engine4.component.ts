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
  templateUrl: './engine4.component.html',
  styleUrls: [
    './engine4.component.css'
  ]
})
export class Engine4Component implements OnInit {

  constructor() { }

  ngOnInit() {
    AmCharts.makeChart('s1-chart', {
      type: 'serial',
      marginTop: 0,
      hideCredits: true,
      marginRight: 80,
      dataProvider: [{cycle: 0, value: 518.67}, {cycle: 1, value: 518.67}, {cycle: 2, value: 518.67}, {cycle: 3, value: 518.67}, {cycle: 4, value: 518.67}, {cycle: 5, value: 518.67}, {cycle: 6, value: 518.67}, {cycle: 7, value: 518.67}, {cycle: 8, value: 518.67}, {cycle: 9, value: 518.67}, {cycle: 10, value: 518.67}, {cycle: 11, value: 518.67}, {cycle: 12, value: 518.67}, {cycle: 13, value: 518.67}, {cycle: 14, value: 518.67}, {cycle: 15, value: 518.67}, {cycle: 16, value: 518.67}, {cycle: 17, value: 518.67}, {cycle: 18, value: 518.67}, {cycle: 19, value: 518.67}, {cycle: 20, value: 518.67}, {cycle: 21, value: 518.67}, {cycle: 22, value: 518.67}, {cycle: 23, value: 518.67}, {cycle: 24, value: 518.67}, {cycle: 25, value: 518.67}, {cycle: 26, value: 518.67}, {cycle: 27, value: 518.67}, {cycle: 28, value: 518.67}, {cycle: 29, value: 518.67}, {cycle: 30, value: 518.67}, {cycle: 31, value: 518.67}, {cycle: 32, value: 518.67}, {cycle: 33, value: 518.67}, {cycle: 34, value: 518.67}, {cycle: 35, value: 518.67}, {cycle: 36, value: 518.67}, {cycle: 37, value: 518.67}, {cycle: 38, value: 518.67}, {cycle: 39, value: 518.67}, {cycle: 40, value: 518.67}, {cycle: 41, value: 518.67}, {cycle: 42, value: 518.67}, {cycle: 43, value: 518.67}, {cycle: 44, value: 518.67}, {cycle: 45, value: 518.67}, {cycle: 46, value: 518.67}, {cycle: 47, value: 518.67}, {cycle: 48, value: 518.67}, {cycle: 49, value: 518.67}, {cycle: 50, value: 518.67}, {cycle: 51, value: 518.67}, {cycle: 52, value: 518.67}, {cycle: 53, value: 518.67}, {cycle: 54, value: 518.67}, {cycle: 55, value: 518.67}, {cycle: 56, value: 518.67}, {cycle: 57, value: 518.67}, {cycle: 58, value: 518.67}, {cycle: 59, value: 518.67}, {cycle: 60, value: 518.67}, {cycle: 61, value: 518.67}, {cycle: 62, value: 518.67}, {cycle: 63, value: 518.67}, {cycle: 64, value: 518.67}, {cycle: 65, value: 518.67}, {cycle: 66, value: 518.67}, {cycle: 67, value: 518.67}, {cycle: 68, value: 518.67}, {cycle: 69, value: 518.67}, {cycle: 70, value: 518.67}, {cycle: 71, value: 518.67}, {cycle: 72, value: 518.67}, {cycle: 73, value: 518.67}, {cycle: 74, value: 518.67}, {cycle: 75, value: 518.67}, {cycle: 76, value: 518.67}, {cycle: 77, value: 518.67}, {cycle: 78, value: 518.67}, {cycle: 79, value: 518.67}, {cycle: 80, value: 518.67}, {cycle: 81, value: 518.67}, {cycle: 82, value: 518.67}, {cycle: 83, value: 518.67}, {cycle: 84, value: 518.67}, {cycle: 85, value: 518.67}, {cycle: 86, value: 518.67}, {cycle: 87, value: 518.67}, {cycle: 88, value: 518.67}, {cycle: 89, value: 518.67}, {cycle: 90, value: 518.67}, {cycle: 91, value: 518.67}, {cycle: 92, value: 518.67}, {cycle: 93, value: 518.67}, {cycle: 94, value: 518.67}, {cycle: 95, value: 518.67}, {cycle: 96, value: 518.67}, {cycle: 97, value: 518.67}, {cycle: 98, value: 518.67}, {cycle: 99, value: 518.67}, {cycle: 100, value: 518.67}, {cycle: 101, value: 518.67}, {cycle: 102, value: 518.67}, {cycle: 103, value: 518.67}, {cycle: 104, value: 518.67}, {cycle: 105, value: 518.67}, {cycle: 106, value: 518.67}, {cycle: 107, value: 518.67}, {cycle: 108, value: 518.67}, {cycle: 109, value: 518.67}, {cycle: 110, value: 518.67}, {cycle: 111, value: 518.67}, {cycle: 112, value: 518.67}, {cycle: 113, value: 518.67}, {cycle: 114, value: 518.67}, {cycle: 115, value: 518.67}, {cycle: 116, value: 518.67}, {cycle: 117, value: 518.67}, {cycle: 118, value: 518.67}, {cycle: 119, value: 518.67}, {cycle: 120, value: 518.67}, {cycle: 121, value: 518.67}, {cycle: 122, value: 518.67}, {cycle: 123, value: 518.67}, {cycle: 124, value: 518.67}, {cycle: 125, value: 518.67}, {cycle: 126, value: 518.67}, {cycle: 127, value: 518.67}, {cycle: 128, value: 518.67}, {cycle: 129, value: 518.67}, {cycle: 130, value: 518.67}, {cycle: 131, value: 518.67}, {cycle: 132, value: 518.67}, {cycle: 133, value: 518.67}, {cycle: 134, value: 518.67}, {cycle: 135, value: 518.67}, {cycle: 136, value: 518.67}, {cycle: 137, value: 518.67}, {cycle: 138, value: 518.67}, {cycle: 139, value: 518.67}, {cycle: 140, value: 518.67}, {cycle: 141, value: 518.67}, {cycle: 142, value: 518.67}, {cycle: 143, value: 518.67}, {cycle: 144, value: 518.67}, {cycle: 145, value: 518.67}, {cycle: 146, value: 518.67}, {cycle: 147, value: 518.67}, {cycle: 148, value: 518.67}, {cycle: 149, value: 518.67}, {cycle: 150, value: 518.67}, {cycle: 151, value: 518.67}, {cycle: 152, value: 518.67}, {cycle: 153, value: 518.67}, {cycle: 154, value: 518.67}, {cycle: 155, value: 518.67}, {cycle: 156, value: 518.67}, {cycle: 157, value: 518.67}, {cycle: 158, value: 518.67}, {cycle: 159, value: 518.67}, {cycle: 160, value: 518.67}, {cycle: 161, value: 518.67}, {cycle: 162, value: 518.67}, {cycle: 163, value: 518.67}, {cycle: 164, value: 518.67}, {cycle: 165, value: 518.67}, {cycle: 166, value: 518.67}, {cycle: 167, value: 518.67}, {cycle: 168, value: 518.67}, {cycle: 169, value: 518.67}, {cycle: 170, value: 518.67}, {cycle: 171, value: 518.67}, {cycle: 172, value: 518.67}, {cycle: 173, value: 518.67}, {cycle: 174, value: 518.67}, {cycle: 175, value: 518.67}, {cycle: 176, value: 518.67}, {cycle: 177, value: 518.67}, {cycle: 178, value: 518.67}, {cycle: 179, value: 518.67}, {cycle: 180, value: 518.67}, {cycle: 181, value: 518.67}, {cycle: 182, value: 518.67}, {cycle: 183, value: 518.67}, {cycle: 184, value: 518.67}, {cycle: 185, value: 518.67}, {cycle: 186, value: 518.67}, {cycle: 187, value: 518.67}, {cycle: 188, value: 518.67}, {cycle: 189, value: 518.67}, {cycle: 190, value: 518.67}, {cycle: 191, value: 518.67}, {cycle: 192, value: 518.67}, {cycle: 193, value: 518.67}, {cycle: 194, value: 518.67}, {cycle: 195, value: 518.67}, {cycle: 196, value: 518.67}, {cycle: 197, value: 518.67}, {cycle: 198, value: 518.67}, {cycle: 199, value: 518.67}, {cycle: 200, value: 518.67}, {cycle: 201, value: 518.67}, {cycle: 202, value: 518.67}, {cycle: 203, value: 518.67}, {cycle: 204, value: 518.67}, {cycle: 205, value: 518.67}, {cycle: 206, value: 518.67}, {cycle: 207, value: 518.67}, {cycle: 208, value: 518.67}, {cycle: 209, value: 518.67}, {cycle: 210, value: 518.67}, {cycle: 211, value: 518.67}, {cycle: 212, value: 518.67}, {cycle: 213, value: 518.67}, {cycle: 214, value: 518.67}, {cycle: 215, value: 518.67}, {cycle: 216, value: 518.67}, {cycle: 217, value: 518.67}, {cycle: 218, value: 518.67}, {cycle: 219, value: 518.67}, {cycle: 220, value: 518.67}, {cycle: 221, value: 518.67}, {cycle: 222, value: 518.67}, {cycle: 223, value: 518.67}, {cycle: 224, value: 518.67}, {cycle: 225, value: 518.67}, {cycle: 226, value: 518.67}, {cycle: 227, value: 518.67}, {cycle: 228, value: 518.67}, {cycle: 229, value: 518.67}, {cycle: 230, value: 518.67}, {cycle: 231, value: 518.67}, {cycle: 232, value: 518.67}, {cycle: 233, value: 518.67}, {cycle: 234, value: 518.67}, {cycle: 235, value: 518.67}, {cycle: 236, value: 518.67}, {cycle: 237, value: 518.67}, {cycle: 238, value: 518.67}, {cycle: 239, value: 518.67}, {cycle: 240, value: 518.67}, {cycle: 241, value: 518.67}, {cycle: 242, value: 518.67}, {cycle: 243, value: 518.67}, {cycle: 244, value: 518.67}, {cycle: 245, value: 518.67}, {cycle: 246, value: 518.67}, {cycle: 247, value: 518.67}, {cycle: 248, value: 518.67}, {cycle: 249, value: 518.67}, {cycle: 250, value: 518.67}, {cycle: 251, value: 518.67}, {cycle: 252, value: 518.67}, {cycle: 253, value: 518.67}, {cycle: 254, value: 518.67}, {cycle: 255, value: 518.67}, {cycle: 256, value: 518.67}, {cycle: 257, value: 518.67}, {cycle: 258, value: 518.67}, {cycle: 259, value: 518.67}, {cycle: 260, value: 518.67}, {cycle: 261, value: 518.67}, {cycle: 262, value: 518.67}, {cycle: 263, value: 518.67}, {cycle: 264, value: 518.67}, {cycle: 265, value: 518.67}, {cycle: 266, value: 518.67}, {cycle: 267, value: 518.67}, {cycle: 268, value: 518.67}, {cycle: 269, value: 518.67}, {cycle: 270, value: 518.67}, {cycle: 271, value: 518.67}, {cycle: 272, value: 518.67}, {cycle: 273, value: 518.67}],
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
      dataProvider: [{cycle: 0, value: 642.38}, {cycle: 1, value: 642.5}, {cycle: 2, value: 642.19}, {cycle: 3, value: 642.59}, {cycle: 4, value: 642.42}, {cycle: 5, value: 642.21}, {cycle: 6, value: 642.39}, {cycle: 7, value: 642.38}, {cycle: 8, value: 642.54}, {cycle: 9, value: 641.75}, {cycle: 10, value: 642.4}, {cycle: 11, value: 641.96}, {cycle: 12, value: 642.14}, {cycle: 13, value: 642.44}, {cycle: 14, value: 642.27}, {cycle: 15, value: 642.62}, {cycle: 16, value: 641.94}, {cycle: 17, value: 641.62}, {cycle: 18, value: 642.17}, {cycle: 19, value: 641.92}, {cycle: 20, value: 642.7}, {cycle: 21, value: 642.63}, {cycle: 22, value: 641.39}, {cycle: 23, value: 642.13}, {cycle: 24, value: 642.52}, {cycle: 25, value: 642.42}, {cycle: 26, value: 642.12}, {cycle: 27, value: 642.61}, {cycle: 28, value: 642.03}, {cycle: 29, value: 641.57}, {cycle: 30, value: 642.12}, {cycle: 31, value: 642.18}, {cycle: 32, value: 642.47}, {cycle: 33, value: 642.12}, {cycle: 34, value: 642.77}, {cycle: 35, value: 641.54}, {cycle: 36, value: 642.57}, {cycle: 37, value: 642.04}, {cycle: 38, value: 642.25}, {cycle: 39, value: 641.96}, {cycle: 40, value: 642.57}, {cycle: 41, value: 641.78}, {cycle: 42, value: 641.65}, {cycle: 43, value: 642.63}, {cycle: 44, value: 641.73}, {cycle: 45, value: 641.86}, {cycle: 46, value: 642.43}, {cycle: 47, value: 642.35}, {cycle: 48, value: 642.68}, {cycle: 49, value: 643.07}, {cycle: 50, value: 642.21}, {cycle: 51, value: 642.43}, {cycle: 52, value: 642.28}, {cycle: 53, value: 641.32}, {cycle: 54, value: 641.98}, {cycle: 55, value: 641.52}, {cycle: 56, value: 642.24}, {cycle: 57, value: 641.67}, {cycle: 58, value: 642.33}, {cycle: 59, value: 642.83}, {cycle: 60, value: 641.74}, {cycle: 61, value: 642.36}, {cycle: 62, value: 642.4}, {cycle: 63, value: 642.35}, {cycle: 64, value: 642.31}, {cycle: 65, value: 642.77}, {cycle: 66, value: 642.01}, {cycle: 67, value: 642.24}, {cycle: 68, value: 642.53}, {cycle: 69, value: 641.86}, {cycle: 70, value: 642.03}, {cycle: 71, value: 641.87}, {cycle: 72, value: 642.62}, {cycle: 73, value: 642.24}, {cycle: 74, value: 642.32}, {cycle: 75, value: 642.24}, {cycle: 76, value: 642.13}, {cycle: 77, value: 641.88}, {cycle: 78, value: 642.42}, {cycle: 79, value: 642.28}, {cycle: 80, value: 642.04}, {cycle: 81, value: 642.07}, {cycle: 82, value: 642.63}, {cycle: 83, value: 642.56}, {cycle: 84, value: 642.53}, {cycle: 85, value: 642.7}, {cycle: 86, value: 642.54}, {cycle: 87, value: 642.22}, {cycle: 88, value: 642.61}, {cycle: 89, value: 642.8}, {cycle: 90, value: 642.41}, {cycle: 91, value: 642.05}, {cycle: 92, value: 642.61}, {cycle: 93, value: 642.28}, {cycle: 94, value: 642.07}, {cycle: 95, value: 642.25}, {cycle: 96, value: 642.32}, {cycle: 97, value: 642.19}, {cycle: 98, value: 642.66}, {cycle: 99, value: 642.93}, {cycle: 100, value: 642.13}, {cycle: 101, value: 641.97}, {cycle: 102, value: 642.35}, {cycle: 103, value: 642.56}, {cycle: 104, value: 642.49}, {cycle: 105, value: 641.84}, {cycle: 106, value: 642.99}, {cycle: 107, value: 642.91}, {cycle: 108, value: 643.18}, {cycle: 109, value: 641.95}, {cycle: 110, value: 642.4}, {cycle: 111, value: 643.06}, {cycle: 112, value: 642.55}, {cycle: 113, value: 642.47}, {cycle: 114, value: 642.4}, {cycle: 115, value: 642.36}, {cycle: 116, value: 642.43}, {cycle: 117, value: 642.75}, {cycle: 118, value: 642.77}, {cycle: 119, value: 642.45}, {cycle: 120, value: 642.26}, {cycle: 121, value: 642.63}, {cycle: 122, value: 643.22}, {cycle: 123, value: 642.67}, {cycle: 124, value: 642.58}, {cycle: 125, value: 642.6}, {cycle: 126, value: 642.59}, {cycle: 127, value: 643.29}, {cycle: 128, value: 642.75}, {cycle: 129, value: 643.25}, {cycle: 130, value: 642.81}, {cycle: 131, value: 643.46}, {cycle: 132, value: 642.61}, {cycle: 133, value: 642.41}, {cycle: 134, value: 643.25}, {cycle: 135, value: 642.33}, {cycle: 136, value: 642.69}, {cycle: 137, value: 643.14}, {cycle: 138, value: 642.85}, {cycle: 139, value: 642.63}, {cycle: 140, value: 642.84}, {cycle: 141, value: 642.6}, {cycle: 142, value: 642.33}, {cycle: 143, value: 642.94}, {cycle: 144, value: 642.92}, {cycle: 145, value: 642.71}, {cycle: 146, value: 642.72}, {cycle: 147, value: 642.73}, {cycle: 148, value: 643.36}, {cycle: 149, value: 643.4}, {cycle: 150, value: 642.73}, {cycle: 151, value: 642.72}, {cycle: 152, value: 643.7}, {cycle: 153, value: 642.34}, {cycle: 154, value: 643.17}, {cycle: 155, value: 643.25}, {cycle: 156, value: 643.68}, {cycle: 157, value: 643.14}, {cycle: 158, value: 643.05}, {cycle: 159, value: 643.41}, {cycle: 160, value: 642.99}, {cycle: 161, value: 643.07}, {cycle: 162, value: 643.25}, {cycle: 163, value: 642.95}, {cycle: 164, value: 643.13}, {cycle: 165, value: 643.49}, {cycle: 166, value: 643.4}, {cycle: 167, value: 643.45}, {cycle: 168, value: 643.56}, {cycle: 169, value: 643.14}, {cycle: 170, value: 643.59}, {cycle: 171, value: 643.71}, {cycle: 172, value: 643.59}, {cycle: 173, value: 643.3}, {cycle: 174, value: 643.46}, {cycle: 175, value: 643.66}, {cycle: 176, value: 643.22}, {cycle: 177, value: 643.44}, {cycle: 178, value: 643.78}, {cycle: 179, value: 643.25}, {cycle: 180, value: 643.27}, {cycle: 181, value: 643.56}, {cycle: 182, value: 643.95}, {cycle: 183, value: 643.77}, {cycle: 184, value: 643.8}, {cycle: 185, value: 643.38}, {cycle: 186, value: 643.73}, {cycle: 187, value: 644.02}, {cycle: 188, value: 643.46}, {cycle: 189, value: 642.73}, {cycle: 190, value: 642.07}, {cycle: 191, value: 642.57}, {cycle: 192, value: 641.97}, {cycle: 193, value: 642.62}, {cycle: 194, value: 642.33}, {cycle: 195, value: 642.44}, {cycle: 196, value: 642.33}, {cycle: 197, value: 643.36}, {cycle: 198, value: 642.81}, {cycle: 199, value: 642.5}, {cycle: 200, value: 642.28}, {cycle: 201, value: 642.37}, {cycle: 202, value: 642.91}, {cycle: 203, value: 642.55}, {cycle: 204, value: 643.02}, {cycle: 205, value: 643.11}, {cycle: 206, value: 642.68}, {cycle: 207, value: 642.19}, {cycle: 208, value: 642.63}, {cycle: 209, value: 642.41}, {cycle: 210, value: 642.75}, {cycle: 211, value: 642.65}, {cycle: 212, value: 642.64}, {cycle: 213, value: 642.6}, {cycle: 214, value: 643.19}, {cycle: 215, value: 642.91}, {cycle: 216, value: 642.68}, {cycle: 217, value: 642.02}, {cycle: 218, value: 642.1}, {cycle: 219, value: 642.36}, {cycle: 220, value: 643.03}, {cycle: 221, value: 642.59}, {cycle: 222, value: 642.41}, {cycle: 223, value: 642.81}, {cycle: 224, value: 642.88}, {cycle: 225, value: 642.47}, {cycle: 226, value: 642.47}, {cycle: 227, value: 642.68}, {cycle: 228, value: 642.67}, {cycle: 229, value: 643.18}, {cycle: 230, value: 641.82}, {cycle: 231, value: 642.98}, {cycle: 232, value: 642.42}, {cycle: 233, value: 642.41}, {cycle: 234, value: 642.94}, {cycle: 235, value: 642.06}, {cycle: 236, value: 642.64}, {cycle: 237, value: 642.85}, {cycle: 238, value: 642.55}, {cycle: 239, value: 643.18}, {cycle: 240, value: 642.81}, {cycle: 241, value: 642.72}, {cycle: 242, value: 643.0}, {cycle: 243, value: 642.62}, {cycle: 244, value: 642.53}, {cycle: 245, value: 642.4}, {cycle: 246, value: 642.83}, {cycle: 247, value: 642.99}, {cycle: 248, value: 642.75}, {cycle: 249, value: 643.24}, {cycle: 250, value: 642.59}, {cycle: 251, value: 642.55}, {cycle: 252, value: 643.19}, {cycle: 253, value: 642.56}, {cycle: 254, value: 642.7}, {cycle: 255, value: 642.87}, {cycle: 256, value: 642.66}, {cycle: 257, value: 642.48}, {cycle: 258, value: 643.06}, {cycle: 259, value: 642.89}, {cycle: 260, value: 642.92}, {cycle: 261, value: 643.07}, {cycle: 262, value: 642.53}, {cycle: 263, value: 642.69}, {cycle: 264, value: 642.28}, {cycle: 265, value: 643.32}, {cycle: 266, value: 643.26}, {cycle: 267, value: 643.12}, {cycle: 268, value: 642.86}, {cycle: 269, value: 642.38}, {cycle: 270, value: 642.48}, {cycle: 271, value: 642.74}, {cycle: 272, value: 643.14}, {cycle: 273, value: 642.75}],
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
      dataProvider: [{cycle: 0, value: 1592.17}, {cycle: 1, value: 1584.27}, {cycle: 2, value: 1588.18}, {cycle: 3, value: 1587.38}, {cycle: 4, value: 1582.86}, {cycle: 5, value: 1585.24}, {cycle: 6, value: 1588.63}, {cycle: 7, value: 1588.61}, {cycle: 8, value: 1580.0}, {cycle: 9, value: 1587.26}, {cycle: 10, value: 1584.88}, {cycle: 11, value: 1584.87}, {cycle: 12, value: 1586.11}, {cycle: 13, value: 1589.66}, {cycle: 14, value: 1580.93}, {cycle: 15, value: 1580.17}, {cycle: 16, value: 1580.56}, {cycle: 17, value: 1581.93}, {cycle: 18, value: 1591.08}, {cycle: 19, value: 1585.75}, {cycle: 20, value: 1579.62}, {cycle: 21, value: 1579.47}, {cycle: 22, value: 1585.05}, {cycle: 23, value: 1588.35}, {cycle: 24, value: 1582.74}, {cycle: 25, value: 1585.81}, {cycle: 26, value: 1580.22}, {cycle: 27, value: 1592.57}, {cycle: 28, value: 1581.03}, {cycle: 29, value: 1580.4}, {cycle: 30, value: 1588.25}, {cycle: 31, value: 1578.36}, {cycle: 32, value: 1581.8}, {cycle: 33, value: 1586.53}, {cycle: 34, value: 1582.08}, {cycle: 35, value: 1578.3}, {cycle: 36, value: 1585.3}, {cycle: 37, value: 1589.99}, {cycle: 38, value: 1585.03}, {cycle: 39, value: 1587.16}, {cycle: 40, value: 1584.87}, {cycle: 41, value: 1580.36}, {cycle: 42, value: 1588.78}, {cycle: 43, value: 1589.31}, {cycle: 44, value: 1578.0}, {cycle: 45, value: 1582.79}, {cycle: 46, value: 1583.6}, {cycle: 47, value: 1589.76}, {cycle: 48, value: 1588.84}, {cycle: 49, value: 1586.07}, {cycle: 50, value: 1586.16}, {cycle: 51, value: 1591.74}, {cycle: 52, value: 1589.63}, {cycle: 53, value: 1585.83}, {cycle: 54, value: 1587.28}, {cycle: 55, value: 1578.2}, {cycle: 56, value: 1584.09}, {cycle: 57, value: 1583.46}, {cycle: 58, value: 1584.72}, {cycle: 59, value: 1585.38}, {cycle: 60, value: 1588.78}, {cycle: 61, value: 1585.52}, {cycle: 62, value: 1587.63}, {cycle: 63, value: 1580.32}, {cycle: 64, value: 1592.74}, {cycle: 65, value: 1593.16}, {cycle: 66, value: 1591.29}, {cycle: 67, value: 1583.74}, {cycle: 68, value: 1585.65}, {cycle: 69, value: 1583.1}, {cycle: 70, value: 1588.2}, {cycle: 71, value: 1583.85}, {cycle: 72, value: 1589.26}, {cycle: 73, value: 1581.11}, {cycle: 74, value: 1584.17}, {cycle: 75, value: 1590.06}, {cycle: 76, value: 1589.32}, {cycle: 77, value: 1592.3}, {cycle: 78, value: 1585.25}, {cycle: 79, value: 1589.77}, {cycle: 80, value: 1587.84}, {cycle: 81, value: 1586.84}, {cycle: 82, value: 1594.42}, {cycle: 83, value: 1591.76}, {cycle: 84, value: 1592.1}, {cycle: 85, value: 1587.64}, {cycle: 86, value: 1585.36}, {cycle: 87, value: 1584.33}, {cycle: 88, value: 1584.53}, {cycle: 89, value: 1590.51}, {cycle: 90, value: 1585.41}, {cycle: 91, value: 1581.11}, {cycle: 92, value: 1578.99}, {cycle: 93, value: 1585.0}, {cycle: 94, value: 1591.64}, {cycle: 95, value: 1587.02}, {cycle: 96, value: 1593.2}, {cycle: 97, value: 1584.35}, {cycle: 98, value: 1585.57}, {cycle: 99, value: 1589.16}, {cycle: 100, value: 1585.09}, {cycle: 101, value: 1587.0}, {cycle: 102, value: 1587.85}, {cycle: 103, value: 1590.2}, {cycle: 104, value: 1589.31}, {cycle: 105, value: 1589.4}, {cycle: 106, value: 1586.12}, {cycle: 107, value: 1587.14}, {cycle: 108, value: 1582.91}, {cycle: 109, value: 1592.58}, {cycle: 110, value: 1580.79}, {cycle: 111, value: 1589.78}, {cycle: 112, value: 1589.42}, {cycle: 113, value: 1592.41}, {cycle: 114, value: 1590.34}, {cycle: 115, value: 1596.19}, {cycle: 116, value: 1590.01}, {cycle: 117, value: 1591.13}, {cycle: 118, value: 1595.73}, {cycle: 119, value: 1585.8}, {cycle: 120, value: 1589.08}, {cycle: 121, value: 1592.03}, {cycle: 122, value: 1589.02}, {cycle: 123, value: 1595.31}, {cycle: 124, value: 1584.22}, {cycle: 125, value: 1589.26}, {cycle: 126, value: 1585.09}, {cycle: 127, value: 1598.96}, {cycle: 128, value: 1588.4}, {cycle: 129, value: 1601.16}, {cycle: 130, value: 1593.96}, {cycle: 131, value: 1588.53}, {cycle: 132, value: 1592.49}, {cycle: 133, value: 1590.22}, {cycle: 134, value: 1598.9}, {cycle: 135, value: 1597.02}, {cycle: 136, value: 1590.44}, {cycle: 137, value: 1593.78}, {cycle: 138, value: 1591.7}, {cycle: 139, value: 1591.54}, {cycle: 140, value: 1599.89}, {cycle: 141, value: 1593.52}, {cycle: 142, value: 1598.78}, {cycle: 143, value: 1594.2}, {cycle: 144, value: 1592.04}, {cycle: 145, value: 1595.56}, {cycle: 146, value: 1597.53}, {cycle: 147, value: 1595.91}, {cycle: 148, value: 1599.17}, {cycle: 149, value: 1595.61}, {cycle: 150, value: 1585.5}, {cycle: 151, value: 1599.3}, {cycle: 152, value: 1596.32}, {cycle: 153, value: 1603.24}, {cycle: 154, value: 1597.63}, {cycle: 155, value: 1593.6}, {cycle: 156, value: 1589.94}, {cycle: 157, value: 1595.09}, {cycle: 158, value: 1601.15}, {cycle: 159, value: 1587.88}, {cycle: 160, value: 1592.89}, {cycle: 161, value: 1603.83}, {cycle: 162, value: 1599.63}, {cycle: 163, value: 1591.37}, {cycle: 164, value: 1599.31}, {cycle: 165, value: 1600.21}, {cycle: 166, value: 1601.11}, {cycle: 167, value: 1594.09}, {cycle: 168, value: 1597.93}, {cycle: 169, value: 1596.58}, {cycle: 170, value: 1599.58}, {cycle: 171, value: 1598.85}, {cycle: 172, value: 1602.52}, {cycle: 173, value: 1591.58}, {cycle: 174, value: 1594.11}, {cycle: 175, value: 1602.29}, {cycle: 176, value: 1604.25}, {cycle: 177, value: 1596.35}, {cycle: 178, value: 1608.65}, {cycle: 179, value: 1607.39}, {cycle: 180, value: 1600.6}, {cycle: 181, value: 1601.82}, {cycle: 182, value: 1608.2}, {cycle: 183, value: 1606.55}, {cycle: 184, value: 1605.53}, {cycle: 185, value: 1609.33}, {cycle: 186, value: 1609.41}, {cycle: 187, value: 1608.65}, {cycle: 188, value: 1597.28}, {cycle: 189, value: 1584.4}, {cycle: 190, value: 1590.38}, {cycle: 191, value: 1588.18}, {cycle: 192, value: 1589.4}, {cycle: 193, value: 1595.13}, {cycle: 194, value: 1589.59}, {cycle: 195, value: 1586.65}, {cycle: 196, value: 1586.78}, {cycle: 197, value: 1585.15}, {cycle: 198, value: 1587.89}, {cycle: 199, value: 1586.81}, {cycle: 200, value: 1594.5}, {cycle: 201, value: 1589.99}, {cycle: 202, value: 1592.99}, {cycle: 203, value: 1584.5}, {cycle: 204, value: 1589.35}, {cycle: 205, value: 1588.67}, {cycle: 206, value: 1587.04}, {cycle: 207, value: 1588.21}, {cycle: 208, value: 1590.31}, {cycle: 209, value: 1587.62}, {cycle: 210, value: 1586.8}, {cycle: 211, value: 1592.61}, {cycle: 212, value: 1587.84}, {cycle: 213, value: 1588.2}, {cycle: 214, value: 1591.45}, {cycle: 215, value: 1587.33}, {cycle: 216, value: 1590.93}, {cycle: 217, value: 1587.92}, {cycle: 218, value: 1583.0}, {cycle: 219, value: 1591.59}, {cycle: 220, value: 1588.4}, {cycle: 221, value: 1590.24}, {cycle: 222, value: 1593.18}, {cycle: 223, value: 1581.62}, {cycle: 224, value: 1587.89}, {cycle: 225, value: 1591.16}, {cycle: 226, value: 1586.16}, {cycle: 227, value: 1588.69}, {cycle: 228, value: 1584.77}, {cycle: 229, value: 1586.37}, {cycle: 230, value: 1583.49}, {cycle: 231, value: 1587.55}, {cycle: 232, value: 1594.67}, {cycle: 233, value: 1588.48}, {cycle: 234, value: 1587.34}, {cycle: 235, value: 1587.53}, {cycle: 236, value: 1586.67}, {cycle: 237, value: 1592.36}, {cycle: 238, value: 1591.46}, {cycle: 239, value: 1587.6}, {cycle: 240, value: 1591.54}, {cycle: 241, value: 1587.56}, {cycle: 242, value: 1594.48}, {cycle: 243, value: 1593.8}, {cycle: 244, value: 1589.29}, {cycle: 245, value: 1592.85}, {cycle: 246, value: 1585.97}, {cycle: 247, value: 1588.01}, {cycle: 248, value: 1590.14}, {cycle: 249, value: 1595.27}, {cycle: 250, value: 1593.19}, {cycle: 251, value: 1597.51}, {cycle: 252, value: 1589.76}, {cycle: 253, value: 1591.75}, {cycle: 254, value: 1594.43}, {cycle: 255, value: 1588.19}, {cycle: 256, value: 1587.59}, {cycle: 257, value: 1592.19}, {cycle: 258, value: 1599.27}, {cycle: 259, value: 1594.41}, {cycle: 260, value: 1586.94}, {cycle: 261, value: 1590.53}, {cycle: 262, value: 1588.12}, {cycle: 263, value: 1583.72}, {cycle: 264, value: 1592.11}, {cycle: 265, value: 1587.84}, {cycle: 266, value: 1586.98}, {cycle: 267, value: 1593.19}, {cycle: 268, value: 1593.18}, {cycle: 269, value: 1595.09}, {cycle: 270, value: 1588.5}, {cycle: 271, value: 1593.02}, {cycle: 272, value: 1584.71}, {cycle: 273, value: 1600.84}],
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
      dataProvider: [{cycle: 0, value: 1400.48}, {cycle: 1, value: 1400.08}, {cycle: 2, value: 1395.2}, {cycle: 3, value: 1396.86}, {cycle: 4, value: 1403.16}, {cycle: 5, value: 1402.72}, {cycle: 6, value: 1399.65}, {cycle: 7, value: 1400.56}, {cycle: 8, value: 1399.09}, {cycle: 9, value: 1398.29}, {cycle: 10, value: 1397.86}, {cycle: 11, value: 1397.48}, {cycle: 12, value: 1407.84}, {cycle: 13, value: 1402.46}, {cycle: 14, value: 1394.89}, {cycle: 15, value: 1403.38}, {cycle: 16, value: 1403.69}, {cycle: 17, value: 1395.22}, {cycle: 18, value: 1391.43}, {cycle: 19, value: 1397.44}, {cycle: 20, value: 1397.41}, {cycle: 21, value: 1393.14}, {cycle: 22, value: 1397.75}, {cycle: 23, value: 1405.5}, {cycle: 24, value: 1399.72}, {cycle: 25, value: 1399.66}, {cycle: 26, value: 1403.27}, {cycle: 27, value: 1406.74}, {cycle: 28, value: 1391.38}, {cycle: 29, value: 1400.61}, {cycle: 30, value: 1399.03}, {cycle: 31, value: 1398.63}, {cycle: 32, value: 1397.04}, {cycle: 33, value: 1399.95}, {cycle: 34, value: 1402.61}, {cycle: 35, value: 1397.36}, {cycle: 36, value: 1406.58}, {cycle: 37, value: 1394.96}, {cycle: 38, value: 1391.47}, {cycle: 39, value: 1405.61}, {cycle: 40, value: 1402.45}, {cycle: 41, value: 1396.67}, {cycle: 42, value: 1401.27}, {cycle: 43, value: 1397.74}, {cycle: 44, value: 1406.98}, {cycle: 45, value: 1410.79}, {cycle: 46, value: 1408.51}, {cycle: 47, value: 1404.39}, {cycle: 48, value: 1397.11}, {cycle: 49, value: 1408.21}, {cycle: 50, value: 1397.93}, {cycle: 51, value: 1399.12}, {cycle: 52, value: 1404.86}, {cycle: 53, value: 1399.74}, {cycle: 54, value: 1402.53}, {cycle: 55, value: 1402.29}, {cycle: 56, value: 1401.1}, {cycle: 57, value: 1399.78}, {cycle: 58, value: 1401.56}, {cycle: 59, value: 1401.41}, {cycle: 60, value: 1399.09}, {cycle: 61, value: 1402.08}, {cycle: 62, value: 1397.69}, {cycle: 63, value: 1398.33}, {cycle: 64, value: 1402.0}, {cycle: 65, value: 1407.3}, {cycle: 66, value: 1400.0}, {cycle: 67, value: 1397.13}, {cycle: 68, value: 1401.78}, {cycle: 69, value: 1410.38}, {cycle: 70, value: 1406.3}, {cycle: 71, value: 1395.92}, {cycle: 72, value: 1406.59}, {cycle: 73, value: 1394.88}, {cycle: 74, value: 1399.99}, {cycle: 75, value: 1401.26}, {cycle: 76, value: 1404.11}, {cycle: 77, value: 1400.2}, {cycle: 78, value: 1410.83}, {cycle: 79, value: 1407.02}, {cycle: 80, value: 1408.28}, {cycle: 81, value: 1401.45}, {cycle: 82, value: 1403.54}, {cycle: 83, value: 1397.82}, {cycle: 84, value: 1405.58}, {cycle: 85, value: 1398.78}, {cycle: 86, value: 1398.88}, {cycle: 87, value: 1406.51}, {cycle: 88, value: 1404.83}, {cycle: 89, value: 1406.09}, {cycle: 90, value: 1405.3}, {cycle: 91, value: 1409.15}, {cycle: 92, value: 1399.72}, {cycle: 93, value: 1405.4}, {cycle: 94, value: 1407.55}, {cycle: 95, value: 1406.02}, {cycle: 96, value: 1404.8}, {cycle: 97, value: 1400.44}, {cycle: 98, value: 1404.91}, {cycle: 99, value: 1401.28}, {cycle: 100, value: 1406.41}, {cycle: 101, value: 1410.72}, {cycle: 102, value: 1414.51}, {cycle: 103, value: 1405.85}, {cycle: 104, value: 1409.3}, {cycle: 105, value: 1403.46}, {cycle: 106, value: 1401.97}, {cycle: 107, value: 1406.65}, {cycle: 108, value: 1411.05}, {cycle: 109, value: 1405.86}, {cycle: 110, value: 1401.97}, {cycle: 111, value: 1408.25}, {cycle: 112, value: 1414.49}, {cycle: 113, value: 1405.27}, {cycle: 114, value: 1421.88}, {cycle: 115, value: 1412.29}, {cycle: 116, value: 1403.3}, {cycle: 117, value: 1409.6}, {cycle: 118, value: 1399.32}, {cycle: 119, value: 1404.94}, {cycle: 120, value: 1407.48}, {cycle: 121, value: 1418.05}, {cycle: 122, value: 1406.81}, {cycle: 123, value: 1414.63}, {cycle: 124, value: 1402.8}, {cycle: 125, value: 1412.15}, {cycle: 126, value: 1418.64}, {cycle: 127, value: 1410.31}, {cycle: 128, value: 1407.83}, {cycle: 129, value: 1414.9}, {cycle: 130, value: 1410.44}, {cycle: 131, value: 1407.63}, {cycle: 132, value: 1411.76}, {cycle: 133, value: 1415.59}, {cycle: 134, value: 1414.35}, {cycle: 135, value: 1419.51}, {cycle: 136, value: 1411.58}, {cycle: 137, value: 1412.19}, {cycle: 138, value: 1410.72}, {cycle: 139, value: 1412.16}, {cycle: 140, value: 1411.56}, {cycle: 141, value: 1413.57}, {cycle: 142, value: 1414.61}, {cycle: 143, value: 1409.75}, {cycle: 144, value: 1420.41}, {cycle: 145, value: 1410.58}, {cycle: 146, value: 1409.96}, {cycle: 147, value: 1416.9}, {cycle: 148, value: 1410.49}, {cycle: 149, value: 1422.13}, {cycle: 150, value: 1418.89}, {cycle: 151, value: 1412.06}, {cycle: 152, value: 1410.89}, {cycle: 153, value: 1414.62}, {cycle: 154, value: 1414.36}, {cycle: 155, value: 1413.45}, {cycle: 156, value: 1416.89}, {cycle: 157, value: 1420.25}, {cycle: 158, value: 1418.73}, {cycle: 159, value: 1420.74}, {cycle: 160, value: 1428.4}, {cycle: 161, value: 1416.36}, {cycle: 162, value: 1418.14}, {cycle: 163, value: 1422.41}, {cycle: 164, value: 1421.8}, {cycle: 165, value: 1422.59}, {cycle: 166, value: 1416.75}, {cycle: 167, value: 1422.62}, {cycle: 168, value: 1423.94}, {cycle: 169, value: 1425.52}, {cycle: 170, value: 1423.26}, {cycle: 171, value: 1419.15}, {cycle: 172, value: 1423.22}, {cycle: 173, value: 1424.36}, {cycle: 174, value: 1428.03}, {cycle: 175, value: 1431.89}, {cycle: 176, value: 1424.27}, {cycle: 177, value: 1427.69}, {cycle: 178, value: 1420.14}, {cycle: 179, value: 1425.28}, {cycle: 180, value: 1421.13}, {cycle: 181, value: 1424.81}, {cycle: 182, value: 1421.15}, {cycle: 183, value: 1425.39}, {cycle: 184, value: 1424.57}, {cycle: 185, value: 1434.4}, {cycle: 186, value: 1430.25}, {cycle: 187, value: 1434.59}, {cycle: 188, value: 1430.74}, {cycle: 189, value: 1412.34}, {cycle: 190, value: 1401.1}, {cycle: 191, value: 1405.86}, {cycle: 192, value: 1401.21}, {cycle: 193, value: 1409.67}, {cycle: 194, value: 1408.46}, {cycle: 195, value: 1403.63}, {cycle: 196, value: 1404.99}, {cycle: 197, value: 1407.48}, {cycle: 198, value: 1414.99}, {cycle: 199, value: 1401.78}, {cycle: 200, value: 1404.65}, {cycle: 201, value: 1409.91}, {cycle: 202, value: 1406.48}, {cycle: 203, value: 1410.62}, {cycle: 204, value: 1411.03}, {cycle: 205, value: 1411.59}, {cycle: 206, value: 1410.2}, {cycle: 207, value: 1408.93}, {cycle: 208, value: 1405.84}, {cycle: 209, value: 1411.2}, {cycle: 210, value: 1412.36}, {cycle: 211, value: 1405.78}, {cycle: 212, value: 1408.88}, {cycle: 213, value: 1404.17}, {cycle: 214, value: 1409.38}, {cycle: 215, value: 1408.41}, {cycle: 216, value: 1407.17}, {cycle: 217, value: 1411.63}, {cycle: 218, value: 1409.32}, {cycle: 219, value: 1402.06}, {cycle: 220, value: 1407.94}, {cycle: 221, value: 1400.61}, {cycle: 222, value: 1412.46}, {cycle: 223, value: 1406.36}, {cycle: 224, value: 1410.89}, {cycle: 225, value: 1409.57}, {cycle: 226, value: 1407.91}, {cycle: 227, value: 1410.96}, {cycle: 228, value: 1414.82}, {cycle: 229, value: 1409.15}, {cycle: 230, value: 1409.75}, {cycle: 231, value: 1403.0}, {cycle: 232, value: 1406.01}, {cycle: 233, value: 1409.32}, {cycle: 234, value: 1403.16}, {cycle: 235, value: 1405.63}, {cycle: 236, value: 1405.29}, {cycle: 237, value: 1412.66}, {cycle: 238, value: 1401.18}, {cycle: 239, value: 1411.46}, {cycle: 240, value: 1407.97}, {cycle: 241, value: 1411.47}, {cycle: 242, value: 1408.17}, {cycle: 243, value: 1410.73}, {cycle: 244, value: 1411.17}, {cycle: 245, value: 1409.82}, {cycle: 246, value: 1414.39}, {cycle: 247, value: 1410.16}, {cycle: 248, value: 1406.9}, {cycle: 249, value: 1413.96}, {cycle: 250, value: 1404.16}, {cycle: 251, value: 1412.65}, {cycle: 252, value: 1407.19}, {cycle: 253, value: 1411.47}, {cycle: 254, value: 1408.8}, {cycle: 255, value: 1412.54}, {cycle: 256, value: 1413.13}, {cycle: 257, value: 1406.96}, {cycle: 258, value: 1409.21}, {cycle: 259, value: 1412.36}, {cycle: 260, value: 1415.8}, {cycle: 261, value: 1410.2}, {cycle: 262, value: 1409.58}, {cycle: 263, value: 1410.5}, {cycle: 264, value: 1412.11}, {cycle: 265, value: 1416.71}, {cycle: 266, value: 1411.31}, {cycle: 267, value: 1414.85}, {cycle: 268, value: 1409.06}, {cycle: 269, value: 1411.1}, {cycle: 270, value: 1410.57}, {cycle: 271, value: 1415.45}, {cycle: 272, value: 1409.65}, {cycle: 273, value: 1405.68}],
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
      dataProvider: [{cycle: 0, value: 14.62}, {cycle: 1, value: 14.62}, {cycle: 2, value: 14.62}, {cycle: 3, value: 14.62}, {cycle: 4, value: 14.62}, {cycle: 5, value: 14.62}, {cycle: 6, value: 14.62}, {cycle: 7, value: 14.62}, {cycle: 8, value: 14.62}, {cycle: 9, value: 14.62}, {cycle: 10, value: 14.62}, {cycle: 11, value: 14.62}, {cycle: 12, value: 14.62}, {cycle: 13, value: 14.62}, {cycle: 14, value: 14.62}, {cycle: 15, value: 14.62}, {cycle: 16, value: 14.62}, {cycle: 17, value: 14.62}, {cycle: 18, value: 14.62}, {cycle: 19, value: 14.62}, {cycle: 20, value: 14.62}, {cycle: 21, value: 14.62}, {cycle: 22, value: 14.62}, {cycle: 23, value: 14.62}, {cycle: 24, value: 14.62}, {cycle: 25, value: 14.62}, {cycle: 26, value: 14.62}, {cycle: 27, value: 14.62}, {cycle: 28, value: 14.62}, {cycle: 29, value: 14.62}, {cycle: 30, value: 14.62}, {cycle: 31, value: 14.62}, {cycle: 32, value: 14.62}, {cycle: 33, value: 14.62}, {cycle: 34, value: 14.62}, {cycle: 35, value: 14.62}, {cycle: 36, value: 14.62}, {cycle: 37, value: 14.62}, {cycle: 38, value: 14.62}, {cycle: 39, value: 14.62}, {cycle: 40, value: 14.62}, {cycle: 41, value: 14.62}, {cycle: 42, value: 14.62}, {cycle: 43, value: 14.62}, {cycle: 44, value: 14.62}, {cycle: 45, value: 14.62}, {cycle: 46, value: 14.62}, {cycle: 47, value: 14.62}, {cycle: 48, value: 14.62}, {cycle: 49, value: 14.62}, {cycle: 50, value: 14.62}, {cycle: 51, value: 14.62}, {cycle: 52, value: 14.62}, {cycle: 53, value: 14.62}, {cycle: 54, value: 14.62}, {cycle: 55, value: 14.62}, {cycle: 56, value: 14.62}, {cycle: 57, value: 14.62}, {cycle: 58, value: 14.62}, {cycle: 59, value: 14.62}, {cycle: 60, value: 14.62}, {cycle: 61, value: 14.62}, {cycle: 62, value: 14.62}, {cycle: 63, value: 14.62}, {cycle: 64, value: 14.62}, {cycle: 65, value: 14.62}, {cycle: 66, value: 14.62}, {cycle: 67, value: 14.62}, {cycle: 68, value: 14.62}, {cycle: 69, value: 14.62}, {cycle: 70, value: 14.62}, {cycle: 71, value: 14.62}, {cycle: 72, value: 14.62}, {cycle: 73, value: 14.62}, {cycle: 74, value: 14.62}, {cycle: 75, value: 14.62}, {cycle: 76, value: 14.62}, {cycle: 77, value: 14.62}, {cycle: 78, value: 14.62}, {cycle: 79, value: 14.62}, {cycle: 80, value: 14.62}, {cycle: 81, value: 14.62}, {cycle: 82, value: 14.62}, {cycle: 83, value: 14.62}, {cycle: 84, value: 14.62}, {cycle: 85, value: 14.62}, {cycle: 86, value: 14.62}, {cycle: 87, value: 14.62}, {cycle: 88, value: 14.62}, {cycle: 89, value: 14.62}, {cycle: 90, value: 14.62}, {cycle: 91, value: 14.62}, {cycle: 92, value: 14.62}, {cycle: 93, value: 14.62}, {cycle: 94, value: 14.62}, {cycle: 95, value: 14.62}, {cycle: 96, value: 14.62}, {cycle: 97, value: 14.62}, {cycle: 98, value: 14.62}, {cycle: 99, value: 14.62}, {cycle: 100, value: 14.62}, {cycle: 101, value: 14.62}, {cycle: 102, value: 14.62}, {cycle: 103, value: 14.62}, {cycle: 104, value: 14.62}, {cycle: 105, value: 14.62}, {cycle: 106, value: 14.62}, {cycle: 107, value: 14.62}, {cycle: 108, value: 14.62}, {cycle: 109, value: 14.62}, {cycle: 110, value: 14.62}, {cycle: 111, value: 14.62}, {cycle: 112, value: 14.62}, {cycle: 113, value: 14.62}, {cycle: 114, value: 14.62}, {cycle: 115, value: 14.62}, {cycle: 116, value: 14.62}, {cycle: 117, value: 14.62}, {cycle: 118, value: 14.62}, {cycle: 119, value: 14.62}, {cycle: 120, value: 14.62}, {cycle: 121, value: 14.62}, {cycle: 122, value: 14.62}, {cycle: 123, value: 14.62}, {cycle: 124, value: 14.62}, {cycle: 125, value: 14.62}, {cycle: 126, value: 14.62}, {cycle: 127, value: 14.62}, {cycle: 128, value: 14.62}, {cycle: 129, value: 14.62}, {cycle: 130, value: 14.62}, {cycle: 131, value: 14.62}, {cycle: 132, value: 14.62}, {cycle: 133, value: 14.62}, {cycle: 134, value: 14.62}, {cycle: 135, value: 14.62}, {cycle: 136, value: 14.62}, {cycle: 137, value: 14.62}, {cycle: 138, value: 14.62}, {cycle: 139, value: 14.62}, {cycle: 140, value: 14.62}, {cycle: 141, value: 14.62}, {cycle: 142, value: 14.62}, {cycle: 143, value: 14.62}, {cycle: 144, value: 14.62}, {cycle: 145, value: 14.62}, {cycle: 146, value: 14.62}, {cycle: 147, value: 14.62}, {cycle: 148, value: 14.62}, {cycle: 149, value: 14.62}, {cycle: 150, value: 14.62}, {cycle: 151, value: 14.62}, {cycle: 152, value: 14.62}, {cycle: 153, value: 14.62}, {cycle: 154, value: 14.62}, {cycle: 155, value: 14.62}, {cycle: 156, value: 14.62}, {cycle: 157, value: 14.62}, {cycle: 158, value: 14.62}, {cycle: 159, value: 14.62}, {cycle: 160, value: 14.62}, {cycle: 161, value: 14.62}, {cycle: 162, value: 14.62}, {cycle: 163, value: 14.62}, {cycle: 164, value: 14.62}, {cycle: 165, value: 14.62}, {cycle: 166, value: 14.62}, {cycle: 167, value: 14.62}, {cycle: 168, value: 14.62}, {cycle: 169, value: 14.62}, {cycle: 170, value: 14.62}, {cycle: 171, value: 14.62}, {cycle: 172, value: 14.62}, {cycle: 173, value: 14.62}, {cycle: 174, value: 14.62}, {cycle: 175, value: 14.62}, {cycle: 176, value: 14.62}, {cycle: 177, value: 14.62}, {cycle: 178, value: 14.62}, {cycle: 179, value: 14.62}, {cycle: 180, value: 14.62}, {cycle: 181, value: 14.62}, {cycle: 182, value: 14.62}, {cycle: 183, value: 14.62}, {cycle: 184, value: 14.62}, {cycle: 185, value: 14.62}, {cycle: 186, value: 14.62}, {cycle: 187, value: 14.62}, {cycle: 188, value: 14.62}, {cycle: 189, value: 14.62}, {cycle: 190, value: 14.62}, {cycle: 191, value: 14.62}, {cycle: 192, value: 14.62}, {cycle: 193, value: 14.62}, {cycle: 194, value: 14.62}, {cycle: 195, value: 14.62}, {cycle: 196, value: 14.62}, {cycle: 197, value: 14.62}, {cycle: 198, value: 14.62}, {cycle: 199, value: 14.62}, {cycle: 200, value: 14.62}, {cycle: 201, value: 14.62}, {cycle: 202, value: 14.62}, {cycle: 203, value: 14.62}, {cycle: 204, value: 14.62}, {cycle: 205, value: 14.62}, {cycle: 206, value: 14.62}, {cycle: 207, value: 14.62}, {cycle: 208, value: 14.62}, {cycle: 209, value: 14.62}, {cycle: 210, value: 14.62}, {cycle: 211, value: 14.62}, {cycle: 212, value: 14.62}, {cycle: 213, value: 14.62}, {cycle: 214, value: 14.62}, {cycle: 215, value: 14.62}, {cycle: 216, value: 14.62}, {cycle: 217, value: 14.62}, {cycle: 218, value: 14.62}, {cycle: 219, value: 14.62}, {cycle: 220, value: 14.62}, {cycle: 221, value: 14.62}, {cycle: 222, value: 14.62}, {cycle: 223, value: 14.62}, {cycle: 224, value: 14.62}, {cycle: 225, value: 14.62}, {cycle: 226, value: 14.62}, {cycle: 227, value: 14.62}, {cycle: 228, value: 14.62}, {cycle: 229, value: 14.62}, {cycle: 230, value: 14.62}, {cycle: 231, value: 14.62}, {cycle: 232, value: 14.62}, {cycle: 233, value: 14.62}, {cycle: 234, value: 14.62}, {cycle: 235, value: 14.62}, {cycle: 236, value: 14.62}, {cycle: 237, value: 14.62}, {cycle: 238, value: 14.62}, {cycle: 239, value: 14.62}, {cycle: 240, value: 14.62}, {cycle: 241, value: 14.62}, {cycle: 242, value: 14.62}, {cycle: 243, value: 14.62}, {cycle: 244, value: 14.62}, {cycle: 245, value: 14.62}, {cycle: 246, value: 14.62}, {cycle: 247, value: 14.62}, {cycle: 248, value: 14.62}, {cycle: 249, value: 14.62}, {cycle: 250, value: 14.62}, {cycle: 251, value: 14.62}, {cycle: 252, value: 14.62}, {cycle: 253, value: 14.62}, {cycle: 254, value: 14.62}, {cycle: 255, value: 14.62}, {cycle: 256, value: 14.62}, {cycle: 257, value: 14.62}, {cycle: 258, value: 14.62}, {cycle: 259, value: 14.62}, {cycle: 260, value: 14.62}, {cycle: 261, value: 14.62}, {cycle: 262, value: 14.62}, {cycle: 263, value: 14.62}, {cycle: 264, value: 14.62}, {cycle: 265, value: 14.62}, {cycle: 266, value: 14.62}, {cycle: 267, value: 14.62}, {cycle: 268, value: 14.62}, {cycle: 269, value: 14.62}, {cycle: 270, value: 14.62}, {cycle: 271, value: 14.62}, {cycle: 272, value: 14.62}, {cycle: 273, value: 14.62}],
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
