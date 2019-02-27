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
  templateUrl: './engine5.component.html',
  styleUrls: [
    './engine5.component.css'
  ]
})
export class Engine5Component implements OnInit {

  constructor() { }

  ngOnInit() {
    AmCharts.makeChart('s1-chart', {
      type: 'serial',
      marginTop: 0,
      hideCredits: true,
      marginRight: 80,
      dataProvider: [{cycle: 0, value: 518.67}, {cycle: 1, value: 518.67}, {cycle: 2, value: 518.67}, {cycle: 3, value: 518.67}, {cycle: 4, value: 518.67}, {cycle: 5, value: 518.67}, {cycle: 6, value: 518.67}, {cycle: 7, value: 518.67}, {cycle: 8, value: 518.67}, {cycle: 9, value: 518.67}, {cycle: 10, value: 518.67}, {cycle: 11, value: 518.67}, {cycle: 12, value: 518.67}, {cycle: 13, value: 518.67}, {cycle: 14, value: 518.67}, {cycle: 15, value: 518.67}, {cycle: 16, value: 518.67}, {cycle: 17, value: 518.67}, {cycle: 18, value: 518.67}, {cycle: 19, value: 518.67}, {cycle: 20, value: 518.67}, {cycle: 21, value: 518.67}, {cycle: 22, value: 518.67}, {cycle: 23, value: 518.67}, {cycle: 24, value: 518.67}, {cycle: 25, value: 518.67}, {cycle: 26, value: 518.67}, {cycle: 27, value: 518.67}, {cycle: 28, value: 518.67}, {cycle: 29, value: 518.67}, {cycle: 30, value: 518.67}, {cycle: 31, value: 518.67}, {cycle: 32, value: 518.67}, {cycle: 33, value: 518.67}, {cycle: 34, value: 518.67}, {cycle: 35, value: 518.67}, {cycle: 36, value: 518.67}, {cycle: 37, value: 518.67}, {cycle: 38, value: 518.67}, {cycle: 39, value: 518.67}, {cycle: 40, value: 518.67}, {cycle: 41, value: 518.67}, {cycle: 42, value: 518.67}, {cycle: 43, value: 518.67}, {cycle: 44, value: 518.67}, {cycle: 45, value: 518.67}, {cycle: 46, value: 518.67}, {cycle: 47, value: 518.67}, {cycle: 48, value: 518.67}, {cycle: 49, value: 518.67}, {cycle: 50, value: 518.67}, {cycle: 51, value: 518.67}, {cycle: 52, value: 518.67}, {cycle: 53, value: 518.67}, {cycle: 54, value: 518.67}, {cycle: 55, value: 518.67}, {cycle: 56, value: 518.67}, {cycle: 57, value: 518.67}, {cycle: 58, value: 518.67}, {cycle: 59, value: 518.67}, {cycle: 60, value: 518.67}, {cycle: 61, value: 518.67}, {cycle: 62, value: 518.67}, {cycle: 63, value: 518.67}, {cycle: 64, value: 518.67}, {cycle: 65, value: 518.67}, {cycle: 66, value: 518.67}, {cycle: 67, value: 518.67}, {cycle: 68, value: 518.67}, {cycle: 69, value: 518.67}, {cycle: 70, value: 518.67}, {cycle: 71, value: 518.67}, {cycle: 72, value: 518.67}, {cycle: 73, value: 518.67}, {cycle: 74, value: 518.67}, {cycle: 75, value: 518.67}, {cycle: 76, value: 518.67}, {cycle: 77, value: 518.67}, {cycle: 78, value: 518.67}, {cycle: 79, value: 518.67}, {cycle: 80, value: 518.67}, {cycle: 81, value: 518.67}, {cycle: 82, value: 518.67}, {cycle: 83, value: 518.67}, {cycle: 84, value: 518.67}, {cycle: 85, value: 518.67}, {cycle: 86, value: 518.67}, {cycle: 87, value: 518.67}, {cycle: 88, value: 518.67}, {cycle: 89, value: 518.67}, {cycle: 90, value: 518.67}, {cycle: 91, value: 518.67}, {cycle: 92, value: 518.67}, {cycle: 93, value: 518.67}, {cycle: 94, value: 518.67}, {cycle: 95, value: 518.67}, {cycle: 96, value: 518.67}, {cycle: 97, value: 518.67}, {cycle: 98, value: 518.67}, {cycle: 99, value: 518.67}, {cycle: 100, value: 518.67}, {cycle: 101, value: 518.67}, {cycle: 102, value: 518.67}, {cycle: 103, value: 518.67}, {cycle: 104, value: 518.67}, {cycle: 105, value: 518.67}, {cycle: 106, value: 518.67}, {cycle: 107, value: 518.67}, {cycle: 108, value: 518.67}, {cycle: 109, value: 518.67}, {cycle: 110, value: 518.67}, {cycle: 111, value: 518.67}, {cycle: 112, value: 518.67}, {cycle: 113, value: 518.67}, {cycle: 114, value: 518.67}, {cycle: 115, value: 518.67}, {cycle: 116, value: 518.67}, {cycle: 117, value: 518.67}, {cycle: 118, value: 518.67}, {cycle: 119, value: 518.67}, {cycle: 120, value: 518.67}, {cycle: 121, value: 518.67}, {cycle: 122, value: 518.67}, {cycle: 123, value: 518.67}, {cycle: 124, value: 518.67}, {cycle: 125, value: 518.67}, {cycle: 126, value: 518.67}, {cycle: 127, value: 518.67}, {cycle: 128, value: 518.67}, {cycle: 129, value: 518.67}, {cycle: 130, value: 518.67}, {cycle: 131, value: 518.67}, {cycle: 132, value: 518.67}, {cycle: 133, value: 518.67}, {cycle: 134, value: 518.67}, {cycle: 135, value: 518.67}, {cycle: 136, value: 518.67}, {cycle: 137, value: 518.67}, {cycle: 138, value: 518.67}, {cycle: 139, value: 518.67}, {cycle: 140, value: 518.67}, {cycle: 141, value: 518.67}, {cycle: 142, value: 518.67}, {cycle: 143, value: 518.67}, {cycle: 144, value: 518.67}, {cycle: 145, value: 518.67}, {cycle: 146, value: 518.67}, {cycle: 147, value: 518.67}, {cycle: 148, value: 518.67}, {cycle: 149, value: 518.67}, {cycle: 150, value: 518.67}, {cycle: 151, value: 518.67}, {cycle: 152, value: 518.67}, {cycle: 153, value: 518.67}, {cycle: 154, value: 518.67}, {cycle: 155, value: 518.67}, {cycle: 156, value: 518.67}, {cycle: 157, value: 518.67}, {cycle: 158, value: 518.67}, {cycle: 159, value: 518.67}, {cycle: 160, value: 518.67}, {cycle: 161, value: 518.67}, {cycle: 162, value: 518.67}, {cycle: 163, value: 518.67}, {cycle: 164, value: 518.67}, {cycle: 165, value: 518.67}, {cycle: 166, value: 518.67}, {cycle: 167, value: 518.67}, {cycle: 168, value: 518.67}, {cycle: 169, value: 518.67}, {cycle: 170, value: 518.67}, {cycle: 171, value: 518.67}, {cycle: 172, value: 518.67}, {cycle: 173, value: 518.67}, {cycle: 174, value: 518.67}, {cycle: 175, value: 518.67}, {cycle: 176, value: 518.67}, {cycle: 177, value: 518.67}, {cycle: 178, value: 518.67}, {cycle: 179, value: 518.67}, {cycle: 180, value: 518.67}, {cycle: 181, value: 518.67}, {cycle: 182, value: 518.67}, {cycle: 183, value: 518.67}, {cycle: 184, value: 518.67}, {cycle: 185, value: 518.67}, {cycle: 186, value: 518.67}, {cycle: 187, value: 518.67}, {cycle: 188, value: 518.67}, {cycle: 189, value: 518.67}, {cycle: 190, value: 518.67}, {cycle: 191, value: 518.67}],
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
      dataProvider: [{cycle: 0, value: 642.6}, {cycle: 1, value: 642.92}, {cycle: 2, value: 643.03}, {cycle: 3, value: 642.61}, {cycle: 4, value: 643.24}, {cycle: 5, value: 642.8}, {cycle: 6, value: 642.76}, {cycle: 7, value: 642.65}, {cycle: 8, value: 643.05}, {cycle: 9, value: 642.87}, {cycle: 10, value: 642.89}, {cycle: 11, value: 642.82}, {cycle: 12, value: 643.16}, {cycle: 13, value: 642.73}, {cycle: 14, value: 642.49}, {cycle: 15, value: 642.84}, {cycle: 16, value: 642.46}, {cycle: 17, value: 642.87}, {cycle: 18, value: 641.96}, {cycle: 19, value: 643.18}, {cycle: 20, value: 642.85}, {cycle: 21, value: 643.17}, {cycle: 22, value: 642.92}, {cycle: 23, value: 642.61}, {cycle: 24, value: 642.8}, {cycle: 25, value: 642.52}, {cycle: 26, value: 643.26}, {cycle: 27, value: 643.31}, {cycle: 28, value: 643.01}, {cycle: 29, value: 642.85}, {cycle: 30, value: 643.36}, {cycle: 31, value: 642.68}, {cycle: 32, value: 643.15}, {cycle: 33, value: 642.88}, {cycle: 34, value: 642.64}, {cycle: 35, value: 642.8}, {cycle: 36, value: 642.93}, {cycle: 37, value: 642.77}, {cycle: 38, value: 643.0}, {cycle: 39, value: 643.38}, {cycle: 40, value: 643.4}, {cycle: 41, value: 642.91}, {cycle: 42, value: 643.04}, {cycle: 43, value: 642.85}, {cycle: 44, value: 643.31}, {cycle: 45, value: 642.87}, {cycle: 46, value: 642.92}, {cycle: 47, value: 643.28}, {cycle: 48, value: 643.1}, {cycle: 49, value: 643.32}, {cycle: 50, value: 643.11}, {cycle: 51, value: 643.02}, {cycle: 52, value: 643.28}, {cycle: 53, value: 643.86}, {cycle: 54, value: 642.88}, {cycle: 55, value: 642.64}, {cycle: 56, value: 643.22}, {cycle: 57, value: 643.15}, {cycle: 58, value: 643.09}, {cycle: 59, value: 642.69}, {cycle: 60, value: 642.99}, {cycle: 61, value: 642.95}, {cycle: 62, value: 643.28}, {cycle: 63, value: 643.0}, {cycle: 64, value: 643.16}, {cycle: 65, value: 643.34}, {cycle: 66, value: 643.05}, {cycle: 67, value: 643.4}, {cycle: 68, value: 642.67}, {cycle: 69, value: 643.45}, {cycle: 70, value: 642.35}, {cycle: 71, value: 643.66}, {cycle: 72, value: 642.93}, {cycle: 73, value: 643.61}, {cycle: 74, value: 643.77}, {cycle: 75, value: 643.25}, {cycle: 76, value: 643.29}, {cycle: 77, value: 643.45}, {cycle: 78, value: 644.03}, {cycle: 79, value: 644.05}, {cycle: 80, value: 643.48}, {cycle: 81, value: 642.87}, {cycle: 82, value: 644.12}, {cycle: 83, value: 643.91}, {cycle: 84, value: 643.82}, {cycle: 85, value: 643.18}, {cycle: 86, value: 643.45}, {cycle: 87, value: 643.21}, {cycle: 88, value: 643.84}, {cycle: 89, value: 643.71}, {cycle: 90, value: 643.5}, {cycle: 91, value: 643.78}, {cycle: 92, value: 643.58}, {cycle: 93, value: 643.76}, {cycle: 94, value: 643.44}, {cycle: 95, value: 644.0}, {cycle: 96, value: 644.01}, {cycle: 97, value: 643.52}, {cycle: 98, value: 643.78}, {cycle: 99, value: 644.01}, {cycle: 100, value: 643.76}, {cycle: 101, value: 643.47}, {cycle: 102, value: 642.38}, {cycle: 103, value: 642.57}, {cycle: 104, value: 642.25}, {cycle: 105, value: 642.31}, {cycle: 106, value: 642.25}, {cycle: 107, value: 642.49}, {cycle: 108, value: 642.45}, {cycle: 109, value: 642.41}, {cycle: 110, value: 642.22}, {cycle: 111, value: 642.29}, {cycle: 112, value: 642.74}, {cycle: 113, value: 642.08}, {cycle: 114, value: 642.47}, {cycle: 115, value: 641.76}, {cycle: 116, value: 642.29}, {cycle: 117, value: 642.3}, {cycle: 118, value: 642.08}, {cycle: 119, value: 642.47}, {cycle: 120, value: 642.01}, {cycle: 121, value: 641.99}, {cycle: 122, value: 641.77}, {cycle: 123, value: 641.44}, {cycle: 124, value: 641.76}, {cycle: 125, value: 642.44}, {cycle: 126, value: 641.79}, {cycle: 127, value: 641.87}, {cycle: 128, value: 642.68}, {cycle: 129, value: 642.68}, {cycle: 130, value: 641.9}, {cycle: 131, value: 642.18}, {cycle: 132, value: 641.99}, {cycle: 133, value: 642.15}, {cycle: 134, value: 642.19}, {cycle: 135, value: 642.09}, {cycle: 136, value: 642.67}, {cycle: 137, value: 642.54}, {cycle: 138, value: 642.4}, {cycle: 139, value: 642.41}, {cycle: 140, value: 642.39}, {cycle: 141, value: 642.14}, {cycle: 142, value: 642.39}, {cycle: 143, value: 642.7}, {cycle: 144, value: 642.32}, {cycle: 145, value: 642.64}, {cycle: 146, value: 642.25}, {cycle: 147, value: 642.37}, {cycle: 148, value: 641.94}, {cycle: 149, value: 641.94}, {cycle: 150, value: 642.43}, {cycle: 151, value: 642.41}, {cycle: 152, value: 642.17}, {cycle: 153, value: 641.91}, {cycle: 154, value: 642.38}, {cycle: 155, value: 641.8}, {cycle: 156, value: 642.19}, {cycle: 157, value: 642.53}, {cycle: 158, value: 643.02}, {cycle: 159, value: 642.09}, {cycle: 160, value: 642.29}, {cycle: 161, value: 642.19}, {cycle: 162, value: 642.08}, {cycle: 163, value: 642.15}, {cycle: 164, value: 642.36}, {cycle: 165, value: 642.54}, {cycle: 166, value: 642.31}, {cycle: 167, value: 642.54}, {cycle: 168, value: 642.61}, {cycle: 169, value: 641.8}, {cycle: 170, value: 642.22}, {cycle: 171, value: 642.09}, {cycle: 172, value: 641.53}, {cycle: 173, value: 641.78}, {cycle: 174, value: 642.12}, {cycle: 175, value: 642.1}, {cycle: 176, value: 642.29}, {cycle: 177, value: 642.11}, {cycle: 178, value: 642.36}, {cycle: 179, value: 642.14}, {cycle: 180, value: 642.48}, {cycle: 181, value: 642.07}, {cycle: 182, value: 641.57}, {cycle: 183, value: 642.13}, {cycle: 184, value: 641.94}, {cycle: 185, value: 642.9}, {cycle: 186, value: 642.75}, {cycle: 187, value: 641.85}, {cycle: 188, value: 642.23}, {cycle: 189, value: 642.9}, {cycle: 190, value: 642.34}, {cycle: 191, value: 641.88}],
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
      dataProvider: [{cycle: 0, value: 1588.86}, {cycle: 1, value: 1590.45}, {cycle: 2, value: 1596.52}, {cycle: 3, value: 1593.37}, {cycle: 4, value: 1585.21}, {cycle: 5, value: 1591.9}, {cycle: 6, value: 1597.36}, {cycle: 7, value: 1587.86}, {cycle: 8, value: 1594.11}, {cycle: 9, value: 1593.96}, {cycle: 10, value: 1590.23}, {cycle: 11, value: 1597.14}, {cycle: 12, value: 1597.69}, {cycle: 13, value: 1592.11}, {cycle: 14, value: 1594.92}, {cycle: 15, value: 1596.24}, {cycle: 16, value: 1588.07}, {cycle: 17, value: 1590.41}, {cycle: 18, value: 1587.32}, {cycle: 19, value: 1592.66}, {cycle: 20, value: 1590.97}, {cycle: 21, value: 1589.04}, {cycle: 22, value: 1590.02}, {cycle: 23, value: 1587.91}, {cycle: 24, value: 1593.61}, {cycle: 25, value: 1599.51}, {cycle: 26, value: 1596.12}, {cycle: 27, value: 1590.48}, {cycle: 28, value: 1598.31}, {cycle: 29, value: 1594.33}, {cycle: 30, value: 1593.99}, {cycle: 31, value: 1593.66}, {cycle: 32, value: 1598.18}, {cycle: 33, value: 1591.39}, {cycle: 34, value: 1588.74}, {cycle: 35, value: 1600.48}, {cycle: 36, value: 1591.88}, {cycle: 37, value: 1587.78}, {cycle: 38, value: 1595.44}, {cycle: 39, value: 1601.09}, {cycle: 40, value: 1589.95}, {cycle: 41, value: 1598.04}, {cycle: 42, value: 1586.2}, {cycle: 43, value: 1593.74}, {cycle: 44, value: 1594.83}, {cycle: 45, value: 1590.0}, {cycle: 46, value: 1592.53}, {cycle: 47, value: 1596.67}, {cycle: 48, value: 1591.43}, {cycle: 49, value: 1586.81}, {cycle: 50, value: 1588.99}, {cycle: 51, value: 1590.59}, {cycle: 52, value: 1591.23}, {cycle: 53, value: 1590.28}, {cycle: 54, value: 1593.21}, {cycle: 55, value: 1596.49}, {cycle: 56, value: 1592.7}, {cycle: 57, value: 1595.07}, {cycle: 58, value: 1595.65}, {cycle: 59, value: 1596.92}, {cycle: 60, value: 1595.61}, {cycle: 61, value: 1604.49}, {cycle: 62, value: 1599.29}, {cycle: 63, value: 1599.67}, {cycle: 64, value: 1592.0}, {cycle: 65, value: 1600.51}, {cycle: 66, value: 1590.37}, {cycle: 67, value: 1600.39}, {cycle: 68, value: 1589.15}, {cycle: 69, value: 1595.36}, {cycle: 70, value: 1590.18}, {cycle: 71, value: 1596.43}, {cycle: 72, value: 1592.5}, {cycle: 73, value: 1603.1}, {cycle: 74, value: 1593.28}, {cycle: 75, value: 1592.09}, {cycle: 76, value: 1602.42}, {cycle: 77, value: 1605.92}, {cycle: 78, value: 1603.61}, {cycle: 79, value: 1602.62}, {cycle: 80, value: 1599.22}, {cycle: 81, value: 1590.83}, {cycle: 82, value: 1597.11}, {cycle: 83, value: 1599.73}, {cycle: 84, value: 1601.73}, {cycle: 85, value: 1593.7}, {cycle: 86, value: 1597.11}, {cycle: 87, value: 1602.11}, {cycle: 88, value: 1602.72}, {cycle: 89, value: 1604.31}, {cycle: 90, value: 1590.96}, {cycle: 91, value: 1603.27}, {cycle: 92, value: 1607.63}, {cycle: 93, value: 1598.73}, {cycle: 94, value: 1603.07}, {cycle: 95, value: 1596.51}, {cycle: 96, value: 1597.82}, {cycle: 97, value: 1598.05}, {cycle: 98, value: 1603.37}, {cycle: 99, value: 1603.59}, {cycle: 100, value: 1602.69}, {cycle: 101, value: 1600.63}, {cycle: 102, value: 1589.49}, {cycle: 103, value: 1583.11}, {cycle: 104, value: 1589.44}, {cycle: 105, value: 1585.59}, {cycle: 106, value: 1587.23}, {cycle: 107, value: 1586.12}, {cycle: 108, value: 1588.36}, {cycle: 109, value: 1586.97}, {cycle: 110, value: 1582.13}, {cycle: 111, value: 1588.96}, {cycle: 112, value: 1585.25}, {cycle: 113, value: 1590.55}, {cycle: 114, value: 1584.88}, {cycle: 115, value: 1579.88}, {cycle: 116, value: 1582.42}, {cycle: 117, value: 1588.69}, {cycle: 118, value: 1588.75}, {cycle: 119, value: 1583.49}, {cycle: 120, value: 1586.11}, {cycle: 121, value: 1585.03}, {cycle: 122, value: 1589.77}, {cycle: 123, value: 1578.03}, {cycle: 124, value: 1586.41}, {cycle: 125, value: 1583.32}, {cycle: 126, value: 1578.13}, {cycle: 127, value: 1585.88}, {cycle: 128, value: 1585.5}, {cycle: 129, value: 1586.11}, {cycle: 130, value: 1589.95}, {cycle: 131, value: 1585.13}, {cycle: 132, value: 1589.16}, {cycle: 133, value: 1589.46}, {cycle: 134, value: 1585.17}, {cycle: 135, value: 1583.36}, {cycle: 136, value: 1591.02}, {cycle: 137, value: 1581.96}, {cycle: 138, value: 1584.97}, {cycle: 139, value: 1590.3}, {cycle: 140, value: 1582.33}, {cycle: 141, value: 1587.0}, {cycle: 142, value: 1590.4}, {cycle: 143, value: 1580.26}, {cycle: 144, value: 1582.93}, {cycle: 145, value: 1587.5}, {cycle: 146, value: 1587.23}, {cycle: 147, value: 1586.17}, {cycle: 148, value: 1587.72}, {cycle: 149, value: 1585.35}, {cycle: 150, value: 1586.42}, {cycle: 151, value: 1590.47}, {cycle: 152, value: 1580.05}, {cycle: 153, value: 1585.51}, {cycle: 154, value: 1582.33}, {cycle: 155, value: 1590.77}, {cycle: 156, value: 1585.93}, {cycle: 157, value: 1584.43}, {cycle: 158, value: 1585.71}, {cycle: 159, value: 1587.14}, {cycle: 160, value: 1585.96}, {cycle: 161, value: 1581.21}, {cycle: 162, value: 1586.13}, {cycle: 163, value: 1585.67}, {cycle: 164, value: 1578.24}, {cycle: 165, value: 1589.13}, {cycle: 166, value: 1578.07}, {cycle: 167, value: 1586.72}, {cycle: 168, value: 1582.7}, {cycle: 169, value: 1586.66}, {cycle: 170, value: 1593.46}, {cycle: 171, value: 1583.19}, {cycle: 172, value: 1584.6}, {cycle: 173, value: 1582.54}, {cycle: 174, value: 1588.4}, {cycle: 175, value: 1587.52}, {cycle: 176, value: 1582.94}, {cycle: 177, value: 1585.7}, {cycle: 178, value: 1588.83}, {cycle: 179, value: 1583.3}, {cycle: 180, value: 1588.28}, {cycle: 181, value: 1585.35}, {cycle: 182, value: 1585.23}, {cycle: 183, value: 1588.93}, {cycle: 184, value: 1588.35}, {cycle: 185, value: 1586.44}, {cycle: 186, value: 1583.4}, {cycle: 187, value: 1590.03}, {cycle: 188, value: 1578.42}, {cycle: 189, value: 1593.15}, {cycle: 190, value: 1593.84}, {cycle: 191, value: 1580.81}],
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
      dataProvider: [{cycle: 0, value: 1409.65}, {cycle: 1, value: 1404.54}, {cycle: 2, value: 1417.55}, {cycle: 3, value: 1413.78}, {cycle: 4, value: 1406.95}, {cycle: 5, value: 1407.76}, {cycle: 6, value: 1414.44}, {cycle: 7, value: 1409.07}, {cycle: 8, value: 1412.55}, {cycle: 9, value: 1415.55}, {cycle: 10, value: 1408.62}, {cycle: 11, value: 1416.6}, {cycle: 12, value: 1412.9}, {cycle: 13, value: 1406.43}, {cycle: 14, value: 1419.53}, {cycle: 15, value: 1412.98}, {cycle: 16, value: 1414.95}, {cycle: 17, value: 1415.34}, {cycle: 18, value: 1411.0}, {cycle: 19, value: 1405.57}, {cycle: 20, value: 1409.77}, {cycle: 21, value: 1410.71}, {cycle: 22, value: 1411.74}, {cycle: 23, value: 1409.73}, {cycle: 24, value: 1415.82}, {cycle: 25, value: 1415.13}, {cycle: 26, value: 1415.38}, {cycle: 27, value: 1411.76}, {cycle: 28, value: 1408.65}, {cycle: 29, value: 1413.04}, {cycle: 30, value: 1411.06}, {cycle: 31, value: 1420.65}, {cycle: 32, value: 1417.57}, {cycle: 33, value: 1411.38}, {cycle: 34, value: 1411.89}, {cycle: 35, value: 1415.47}, {cycle: 36, value: 1411.83}, {cycle: 37, value: 1412.33}, {cycle: 38, value: 1410.66}, {cycle: 39, value: 1413.47}, {cycle: 40, value: 1413.29}, {cycle: 41, value: 1412.09}, {cycle: 42, value: 1410.4}, {cycle: 43, value: 1421.59}, {cycle: 44, value: 1420.65}, {cycle: 45, value: 1406.78}, {cycle: 46, value: 1415.54}, {cycle: 47, value: 1419.29}, {cycle: 48, value: 1417.4}, {cycle: 49, value: 1413.17}, {cycle: 50, value: 1411.43}, {cycle: 51, value: 1416.62}, {cycle: 52, value: 1418.23}, {cycle: 53, value: 1414.25}, {cycle: 54, value: 1418.38}, {cycle: 55, value: 1422.25}, {cycle: 56, value: 1415.86}, {cycle: 57, value: 1415.58}, {cycle: 58, value: 1415.82}, {cycle: 59, value: 1417.09}, {cycle: 60, value: 1416.96}, {cycle: 61, value: 1418.66}, {cycle: 62, value: 1421.19}, {cycle: 63, value: 1420.07}, {cycle: 64, value: 1423.27}, {cycle: 65, value: 1424.84}, {cycle: 66, value: 1420.74}, {cycle: 67, value: 1419.33}, {cycle: 68, value: 1419.23}, {cycle: 69, value: 1417.31}, {cycle: 70, value: 1419.84}, {cycle: 71, value: 1422.25}, {cycle: 72, value: 1417.03}, {cycle: 73, value: 1423.05}, {cycle: 74, value: 1422.93}, {cycle: 75, value: 1420.87}, {cycle: 76, value: 1423.01}, {cycle: 77, value: 1423.29}, {cycle: 78, value: 1423.5}, {cycle: 79, value: 1422.7}, {cycle: 80, value: 1425.97}, {cycle: 81, value: 1425.2}, {cycle: 82, value: 1426.68}, {cycle: 83, value: 1425.87}, {cycle: 84, value: 1423.31}, {cycle: 85, value: 1432.3}, {cycle: 86, value: 1423.89}, {cycle: 87, value: 1426.34}, {cycle: 88, value: 1427.35}, {cycle: 89, value: 1423.22}, {cycle: 90, value: 1421.52}, {cycle: 91, value: 1424.84}, {cycle: 92, value: 1424.83}, {cycle: 93, value: 1426.72}, {cycle: 94, value: 1430.56}, {cycle: 95, value: 1423.81}, {cycle: 96, value: 1430.47}, {cycle: 97, value: 1432.22}, {cycle: 98, value: 1434.09}, {cycle: 99, value: 1430.37}, {cycle: 100, value: 1423.45}, {cycle: 101, value: 1434.92}, {cycle: 102, value: 1395.48}, {cycle: 103, value: 1395.97}, {cycle: 104, value: 1397.74}, {cycle: 105, value: 1397.85}, {cycle: 106, value: 1402.54}, {cycle: 107, value: 1403.1}, {cycle: 108, value: 1391.19}, {cycle: 109, value: 1401.42}, {cycle: 110, value: 1401.77}, {cycle: 111, value: 1393.25}, {cycle: 112, value: 1393.96}, {cycle: 113, value: 1397.36}, {cycle: 114, value: 1392.15}, {cycle: 115, value: 1390.48}, {cycle: 116, value: 1398.41}, {cycle: 117, value: 1405.02}, {cycle: 118, value: 1397.63}, {cycle: 119, value: 1394.65}, {cycle: 120, value: 1397.51}, {cycle: 121, value: 1395.92}, {cycle: 122, value: 1404.33}, {cycle: 123, value: 1394.58}, {cycle: 124, value: 1398.09}, {cycle: 125, value: 1398.75}, {cycle: 126, value: 1397.07}, {cycle: 127, value: 1401.19}, {cycle: 128, value: 1397.39}, {cycle: 129, value: 1405.38}, {cycle: 130, value: 1396.71}, {cycle: 131, value: 1396.49}, {cycle: 132, value: 1402.76}, {cycle: 133, value: 1397.4}, {cycle: 134, value: 1399.12}, {cycle: 135, value: 1402.93}, {cycle: 136, value: 1409.12}, {cycle: 137, value: 1393.49}, {cycle: 138, value: 1400.55}, {cycle: 139, value: 1393.57}, {cycle: 140, value: 1403.52}, {cycle: 141, value: 1393.32}, {cycle: 142, value: 1406.12}, {cycle: 143, value: 1398.14}, {cycle: 144, value: 1397.5}, {cycle: 145, value: 1398.15}, {cycle: 146, value: 1399.97}, {cycle: 147, value: 1405.02}, {cycle: 148, value: 1401.47}, {cycle: 149, value: 1398.81}, {cycle: 150, value: 1396.88}, {cycle: 151, value: 1400.31}, {cycle: 152, value: 1397.42}, {cycle: 153, value: 1402.13}, {cycle: 154, value: 1395.45}, {cycle: 155, value: 1400.98}, {cycle: 156, value: 1399.74}, {cycle: 157, value: 1395.08}, {cycle: 158, value: 1398.43}, {cycle: 159, value: 1400.97}, {cycle: 160, value: 1397.92}, {cycle: 161, value: 1396.21}, {cycle: 162, value: 1402.82}, {cycle: 163, value: 1390.39}, {cycle: 164, value: 1400.55}, {cycle: 165, value: 1399.36}, {cycle: 166, value: 1396.6}, {cycle: 167, value: 1399.23}, {cycle: 168, value: 1402.68}, {cycle: 169, value: 1395.57}, {cycle: 170, value: 1403.5}, {cycle: 171, value: 1399.04}, {cycle: 172, value: 1398.9}, {cycle: 173, value: 1406.47}, {cycle: 174, value: 1401.72}, {cycle: 175, value: 1407.77}, {cycle: 176, value: 1402.11}, {cycle: 177, value: 1407.16}, {cycle: 178, value: 1400.6}, {cycle: 179, value: 1399.64}, {cycle: 180, value: 1404.99}, {cycle: 181, value: 1402.29}, {cycle: 182, value: 1408.11}, {cycle: 183, value: 1398.88}, {cycle: 184, value: 1406.01}, {cycle: 185, value: 1400.85}, {cycle: 186, value: 1402.17}, {cycle: 187, value: 1397.76}, {cycle: 188, value: 1404.01}, {cycle: 189, value: 1402.65}, {cycle: 190, value: 1397.17}, {cycle: 191, value: 1402.41}],
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
      dataProvider: [{cycle: 0, value: 14.62}, {cycle: 1, value: 14.62}, {cycle: 2, value: 14.62}, {cycle: 3, value: 14.62}, {cycle: 4, value: 14.62}, {cycle: 5, value: 14.62}, {cycle: 6, value: 14.62}, {cycle: 7, value: 14.62}, {cycle: 8, value: 14.62}, {cycle: 9, value: 14.62}, {cycle: 10, value: 14.62}, {cycle: 11, value: 14.62}, {cycle: 12, value: 14.62}, {cycle: 13, value: 14.62}, {cycle: 14, value: 14.62}, {cycle: 15, value: 14.62}, {cycle: 16, value: 14.62}, {cycle: 17, value: 14.62}, {cycle: 18, value: 14.62}, {cycle: 19, value: 14.62}, {cycle: 20, value: 14.62}, {cycle: 21, value: 14.62}, {cycle: 22, value: 14.62}, {cycle: 23, value: 14.62}, {cycle: 24, value: 14.62}, {cycle: 25, value: 14.62}, {cycle: 26, value: 14.62}, {cycle: 27, value: 14.62}, {cycle: 28, value: 14.62}, {cycle: 29, value: 14.62}, {cycle: 30, value: 14.62}, {cycle: 31, value: 14.62}, {cycle: 32, value: 14.62}, {cycle: 33, value: 14.62}, {cycle: 34, value: 14.62}, {cycle: 35, value: 14.62}, {cycle: 36, value: 14.62}, {cycle: 37, value: 14.62}, {cycle: 38, value: 14.62}, {cycle: 39, value: 14.62}, {cycle: 40, value: 14.62}, {cycle: 41, value: 14.62}, {cycle: 42, value: 14.62}, {cycle: 43, value: 14.62}, {cycle: 44, value: 14.62}, {cycle: 45, value: 14.62}, {cycle: 46, value: 14.62}, {cycle: 47, value: 14.62}, {cycle: 48, value: 14.62}, {cycle: 49, value: 14.62}, {cycle: 50, value: 14.62}, {cycle: 51, value: 14.62}, {cycle: 52, value: 14.62}, {cycle: 53, value: 14.62}, {cycle: 54, value: 14.62}, {cycle: 55, value: 14.62}, {cycle: 56, value: 14.62}, {cycle: 57, value: 14.62}, {cycle: 58, value: 14.62}, {cycle: 59, value: 14.62}, {cycle: 60, value: 14.62}, {cycle: 61, value: 14.62}, {cycle: 62, value: 14.62}, {cycle: 63, value: 14.62}, {cycle: 64, value: 14.62}, {cycle: 65, value: 14.62}, {cycle: 66, value: 14.62}, {cycle: 67, value: 14.62}, {cycle: 68, value: 14.62}, {cycle: 69, value: 14.62}, {cycle: 70, value: 14.62}, {cycle: 71, value: 14.62}, {cycle: 72, value: 14.62}, {cycle: 73, value: 14.62}, {cycle: 74, value: 14.62}, {cycle: 75, value: 14.62}, {cycle: 76, value: 14.62}, {cycle: 77, value: 14.62}, {cycle: 78, value: 14.62}, {cycle: 79, value: 14.62}, {cycle: 80, value: 14.62}, {cycle: 81, value: 14.62}, {cycle: 82, value: 14.62}, {cycle: 83, value: 14.62}, {cycle: 84, value: 14.62}, {cycle: 85, value: 14.62}, {cycle: 86, value: 14.62}, {cycle: 87, value: 14.62}, {cycle: 88, value: 14.62}, {cycle: 89, value: 14.62}, {cycle: 90, value: 14.62}, {cycle: 91, value: 14.62}, {cycle: 92, value: 14.62}, {cycle: 93, value: 14.62}, {cycle: 94, value: 14.62}, {cycle: 95, value: 14.62}, {cycle: 96, value: 14.62}, {cycle: 97, value: 14.62}, {cycle: 98, value: 14.62}, {cycle: 99, value: 14.62}, {cycle: 100, value: 14.62}, {cycle: 101, value: 14.62}, {cycle: 102, value: 14.62}, {cycle: 103, value: 14.62}, {cycle: 104, value: 14.62}, {cycle: 105, value: 14.62}, {cycle: 106, value: 14.62}, {cycle: 107, value: 14.62}, {cycle: 108, value: 14.62}, {cycle: 109, value: 14.62}, {cycle: 110, value: 14.62}, {cycle: 111, value: 14.62}, {cycle: 112, value: 14.62}, {cycle: 113, value: 14.62}, {cycle: 114, value: 14.62}, {cycle: 115, value: 14.62}, {cycle: 116, value: 14.62}, {cycle: 117, value: 14.62}, {cycle: 118, value: 14.62}, {cycle: 119, value: 14.62}, {cycle: 120, value: 14.62}, {cycle: 121, value: 14.62}, {cycle: 122, value: 14.62}, {cycle: 123, value: 14.62}, {cycle: 124, value: 14.62}, {cycle: 125, value: 14.62}, {cycle: 126, value: 14.62}, {cycle: 127, value: 14.62}, {cycle: 128, value: 14.62}, {cycle: 129, value: 14.62}, {cycle: 130, value: 14.62}, {cycle: 131, value: 14.62}, {cycle: 132, value: 14.62}, {cycle: 133, value: 14.62}, {cycle: 134, value: 14.62}, {cycle: 135, value: 14.62}, {cycle: 136, value: 14.62}, {cycle: 137, value: 14.62}, {cycle: 138, value: 14.62}, {cycle: 139, value: 14.62}, {cycle: 140, value: 14.62}, {cycle: 141, value: 14.62}, {cycle: 142, value: 14.62}, {cycle: 143, value: 14.62}, {cycle: 144, value: 14.62}, {cycle: 145, value: 14.62}, {cycle: 146, value: 14.62}, {cycle: 147, value: 14.62}, {cycle: 148, value: 14.62}, {cycle: 149, value: 14.62}, {cycle: 150, value: 14.62}, {cycle: 151, value: 14.62}, {cycle: 152, value: 14.62}, {cycle: 153, value: 14.62}, {cycle: 154, value: 14.62}, {cycle: 155, value: 14.62}, {cycle: 156, value: 14.62}, {cycle: 157, value: 14.62}, {cycle: 158, value: 14.62}, {cycle: 159, value: 14.62}, {cycle: 160, value: 14.62}, {cycle: 161, value: 14.62}, {cycle: 162, value: 14.62}, {cycle: 163, value: 14.62}, {cycle: 164, value: 14.62}, {cycle: 165, value: 14.62}, {cycle: 166, value: 14.62}, {cycle: 167, value: 14.62}, {cycle: 168, value: 14.62}, {cycle: 169, value: 14.62}, {cycle: 170, value: 14.62}, {cycle: 171, value: 14.62}, {cycle: 172, value: 14.62}, {cycle: 173, value: 14.62}, {cycle: 174, value: 14.62}, {cycle: 175, value: 14.62}, {cycle: 176, value: 14.62}, {cycle: 177, value: 14.62}, {cycle: 178, value: 14.62}, {cycle: 179, value: 14.62}, {cycle: 180, value: 14.62}, {cycle: 181, value: 14.62}, {cycle: 182, value: 14.62}, {cycle: 183, value: 14.62}, {cycle: 184, value: 14.62}, {cycle: 185, value: 14.62}, {cycle: 186, value: 14.62}, {cycle: 187, value: 14.62}, {cycle: 188, value: 14.62}, {cycle: 189, value: 14.62}, {cycle: 190, value: 14.62}, {cycle: 191, value: 14.62}],
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
