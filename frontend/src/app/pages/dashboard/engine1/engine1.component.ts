import { Component, OnInit } from '@angular/core';

import '../../../../assets/charts/amchart/amcharts.js';
import '../../../../assets/charts/amchart/gauge.js';
import '../../../../assets/charts/amchart/pie.js';
import '../../../../assets/charts/amchart/serial.js';
import '../../../../assets/charts/amchart/light.js';
import '../../../../assets/charts/amchart/ammap.js';
import '../../../../assets/charts/amchart/worldLow.js';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

declare const AmCharts: any;
declare const $: any;

@Component({
  selector: 'app-engine1',
  templateUrl: './engine1.component.html',
  styleUrls: [
    './engine1.component.css'
  ]
})
export class Engine1Component implements OnInit {

  constructor(private http: Http) { }

  // s1url = 'assets/data/engine-data/engine1/engine1-s1.json';
  // s2url = 'assets/data/engine-data/engine1/engine1-s2.json';
  // s3url = 'assets/data/engine-data/engine1/engine1-s3.json';
  // s1: any;
  // s2: any;
  // s3: any;
  // s4: any;
  // s5: any;

  ngOnInit() {

    // this.readData(this.s1url).subscribe(data => { this.s1 = data });
    // this.readData(this.s2url).subscribe(data => { this.s2 = data });
    // this.readData(this.s3url).subscribe(data => { this.s3 = data });
    // this.readData(this.s4url).subscribe(data => { this.s4 = data });
    // this.readData(this.s5url).subscribe(data => { this.s5 = data });
   
    
    AmCharts.makeChart('s1-chart', {
      type: 'serial',
      marginTop: 0,
      hideCredits: true,
      marginRight: 80,
      dataProvider: [{cycle: '0', value: 518.67}, {cycle: '1', value: 518.67}, {cycle: '2', value: 518.67}, {cycle: 3, value: 518.67}, {cycle: 4, value: 518.67}, {cycle: 5, value: 518.67}, {cycle: 6, value: 518.67}, {cycle: 7, value: 518.67}, {cycle: 8, value: 518.67}, {cycle: 9, value: 518.67}, {cycle: 10, value: 518.67}, {cycle: 11, value: 518.67}, {cycle: 12, value: 518.67}, {cycle: 13, value: 518.67}, {cycle: 14, value: 518.67}, {cycle: 15, value: 518.67}, {cycle: 16, value: 518.67}, {cycle: 17, value: 518.67}, {cycle: 18, value: 518.67}, {cycle: 19, value: 518.67}, {cycle: 20, value: 518.67}, {cycle: 21, value: 518.67}, {cycle: 22, value: 518.67}, {cycle: 23, value: 518.67}, {cycle: 24, value: 518.67}, {cycle: 25, value: 518.67}, {cycle: 26, value: 518.67}, {cycle: 27, value: 518.67}, {cycle: 28, value: 518.67}, {cycle: 29, value: 518.67}, {cycle: 30, value: 518.67}, {cycle: 31, value: 518.67}, {cycle: 32, value: 518.67}, {cycle: 33, value: 518.67}, {cycle: 34, value: 518.67}, {cycle: 35, value: 518.67}, {cycle: 36, value: 518.67}, {cycle: 37, value: 518.67}, {cycle: 38, value: 518.67}, {cycle: 39, value: 518.67}, {cycle: 40, value: 518.67}, {cycle: 41, value: 518.67}, {cycle: 42, value: 518.67}, {cycle: 43, value: 518.67}, {cycle: 44, value: 518.67}, {cycle: 45, value: 518.67}, {cycle: 46, value: 518.67}, {cycle: 47, value: 518.67}, {cycle: 48, value: 518.67}, {cycle: 49, value: 518.67}, {cycle: 50, value: 518.67}, {cycle: 51, value: 518.67}, {cycle: 52, value: 518.67}, {cycle: 53, value: 518.67}, {cycle: 54, value: 518.67}, {cycle: 55, value: 518.67}, {cycle: 56, value: 518.67}, {cycle: 57, value: 518.67}, {cycle: 58, value: 518.67}, {cycle: 59, value: 518.67}, {cycle: 60, value: 518.67}, {cycle: 61, value: 518.67}, {cycle: 62, value: 518.67}, {cycle: 63, value: 518.67}, {cycle: 64, value: 518.67}, {cycle: 65, value: 518.67}, {cycle: 66, value: 518.67}, {cycle: 67, value: 518.67}, {cycle: 68, value: 518.67}, {cycle: 69, value: 518.67}, {cycle: 70, value: 518.67}, {cycle: 71, value: 518.67}, {cycle: 72, value: 518.67}, {cycle: 73, value: 518.67}, {cycle: 74, value: 518.67}, {cycle: 75, value: 518.67}, {cycle: 76, value: 518.67}, {cycle: 77, value: 518.67}, {cycle: 78, value: 518.67}, {cycle: 79, value: 518.67}, {cycle: 80, value: 518.67}, {cycle: 81, value: 518.67}, {cycle: 82, value: 518.67}, {cycle: 83, value: 518.67}, {cycle: 84, value: 518.67}, {cycle: 85, value: 518.67}, {cycle: 86, value: 518.67}, {cycle: 87, value: 518.67}, {cycle: 88, value: 518.67}, {cycle: 89, value: 518.67}, {cycle: 90, value: 518.67}, {cycle: 91, value: 518.67}, {cycle: 92, value: 518.67}, {cycle: 93, value: 518.67}, {cycle: 94, value: 518.67}, {cycle: 95, value: 518.67}, {cycle: 96, value: 518.67}, {cycle: 97, value: 518.67}, {cycle: 98, value: 518.67}, {cycle: 99, value: 518.67}, {cycle: 100, value: 518.67}, {cycle: 101, value: 518.67}, {cycle: 102, value: 518.67}, {cycle: 103, value: 518.67}, {cycle: 104, value: 518.67}, {cycle: 105, value: 518.67}, {cycle: 106, value: 518.67}, {cycle: 107, value: 518.67}, {cycle: 108, value: 518.67}, {cycle: 109, value: 518.67}, {cycle: 110, value: 518.67}, {cycle: 111, value: 518.67}, {cycle: 112, value: 518.67}, {cycle: 113, value: 518.67}, {cycle: 114, value: 518.67}, {cycle: 115, value: 518.67}, {cycle: 116, value: 518.67}, {cycle: 117, value: 518.67}, {cycle: 118, value: 518.67}, {cycle: 119, value: 518.67}, {cycle: 120, value: 518.67}, {cycle: 121, value: 518.67}, {cycle: 122, value: 518.67}, {cycle: 123, value: 518.67}, {cycle: 124, value: 518.67}, {cycle: 125, value: 518.67}, {cycle: 126, value: 518.67}, {cycle: 127, value: 518.67}, {cycle: 128, value: 518.67}, {cycle: 129, value: 518.67}, {cycle: 130, value: 518.67}, {cycle: 131, value: 518.67}, {cycle: 132, value: 518.67}, {cycle: 133, value: 518.67}, {cycle: 134, value: 518.67}, {cycle: 135, value: 518.67}, {cycle: 136, value: 518.67}, {cycle: 137, value: 518.67}, {cycle: 138, value: 518.67}, {cycle: 139, value: 518.67}, {cycle: 140, value: 518.67}, {cycle: 141, value: 518.67}, {cycle: 142, value: 518.67}, {cycle: 143, value: 518.67}, {cycle: 144, value: 518.67}, {cycle: 145, value: 518.67}, {cycle: 146, value: 518.67}, {cycle: 147, value: 518.67}, {cycle: 148, value: 518.67}, {cycle: 149, value: 518.67}, {cycle: 150, value: 518.67}, {cycle: 151, value: 518.67}, {cycle: 152, value: 518.67}, {cycle: 153, value: 518.67}, {cycle: 154, value: 518.67}, {cycle: 155, value: 518.67}, {cycle: 156, value: 518.67}, {cycle: 157, value: 518.67}, {cycle: 158, value: 518.67}, {cycle: 159, value: 518.67}, {cycle: 160, value: 518.67}, {cycle: 161, value: 518.67}, {cycle: 162, value: 518.67}, {cycle: 163, value: 518.67}, {cycle: 164, value: 518.67}, {cycle: 165, value: 518.67}, {cycle: 166, value: 518.67}, {cycle: 167, value: 518.67}, {cycle: 168, value: 518.67}, {cycle: 169, value: 518.67}, {cycle: 170, value: 518.67}, {cycle: 171, value: 518.67}, {cycle: 172, value: 518.67}, {cycle: 173, value: 518.67}, {cycle: 174, value: 518.67}, {cycle: 175, value: 518.67}, {cycle: 176, value: 518.67}, {cycle: 177, value: 518.67}, {cycle: 178, value: 518.67}, {cycle: 179, value: 518.67}, {cycle: 180, value: 518.67}, {cycle: 181, value: 518.67}, {cycle: 182, value: 518.67}, {cycle: 183, value: 518.67}, {cycle: 184, value: 518.67}, {cycle: 185, value: 518.67}, {cycle: 186, value: 518.67}, {cycle: 187, value: 518.67}, {cycle: 188, value: 518.67}, {cycle: 189, value: 518.67}, {cycle: 190, value: 518.67}, {cycle: 191, value: 518.67}, {cycle: 192, value: 518.67}, {cycle: 193, value: 518.67}, {cycle: 194, value: 518.67}, {cycle: 195, value: 518.67}, {cycle: 196, value: 518.67}, {cycle: 197, value: 518.67}, {cycle: 198, value: 518.67}, {cycle: 199, value: 518.67}, {cycle: 200, value: 518.67}, {cycle: 201, value: 518.67}, {cycle: 202, value: 518.67}, {cycle: 203, value: 518.67}, {cycle: 204, value: 518.67}, {cycle: 205, value: 518.67}, {cycle: 206, value: 518.67}, {cycle: 207, value: 518.67}, {cycle: 208, value: 518.67}, {cycle: 209, value: 518.67}, {cycle: 210, value: 518.67}, {cycle: 211, value: 518.67}, {cycle: 212, value: 518.67}, {cycle: 213, value: 518.67}, {cycle: 214, value: 518.67}, {cycle: 215, value: 518.67}, {cycle: 216, value: 518.67}, {cycle: 217, value: 518.67}, {cycle: 218, value: 518.67}, {cycle: 219, value: 518.67}, {cycle: 220, value: 518.67}, {cycle: 221, value: 518.67}, {cycle: 222, value: 518.67}, {cycle: 223, value: 518.67}, {cycle: 224, value: 518.67}, {cycle: 225, value: 518.67}, {cycle: 226, value: 518.67}, {cycle: 227, value: 518.67}, {cycle: 228, value: 518.67}, {cycle: 229, value: 518.67}, {cycle: 230, value: 518.67}, {cycle: 231, value: 518.67}, {cycle: 232, value: 518.67}, {cycle: 233, value: 518.67}, {cycle: 234, value: 518.67}, {cycle: 235, value: 518.67}, {cycle: 236, value: 518.67}, {cycle: 237, value: 518.67}, {cycle: 238, value: 518.67}, {cycle: 239, value: 518.67}, {cycle: 240, value: 518.67}, {cycle: 241, value: 518.67}, {cycle: 242, value: 518.67}, {cycle: 243, value: 518.67}, {cycle: 244, value: 518.67}, {cycle: 245, value: 518.67}, {cycle: 246, value: 518.67}, {cycle: 247, value: 518.67}, {cycle: 248, value: 518.67}, {cycle: 249, value: 518.67}, {cycle: 250, value: 518.67}, {cycle: 251, value: 518.67}, {cycle: 252, value: 518.67}, {cycle: 253, value: 518.67}, {cycle: 254, value: 518.67}, {cycle: 255, value: 518.67}, {cycle: 256, value: 518.67}, {cycle: 257, value: 518.67}, {cycle: 258, value: 518.67}, {cycle: 259, value: 518.67}, {cycle: 260, value: 518.67}, {cycle: 261, value: 518.67}, {cycle: 262, value: 518.67}, {cycle: 263, value: 518.67}, {cycle: 264, value: 518.67}, {cycle: 265, value: 518.67}, {cycle: 266, value: 518.67}, {cycle: 267, value: 518.67}, {cycle: 268, value: 518.67}, {cycle: 269, value: 518.67}, {cycle: 270, value: 518.67}, {cycle: 271, value: 518.67}, {cycle: 272, value: 518.67}, {cycle: 273, value: 518.67}, {cycle: 274, value: 518.67}, {cycle: 275, value: 518.67}, {cycle: 276, value: 518.67}, {cycle: 277, value: 518.67}, {cycle: 278, value: 518.67}, {cycle: 279, value: 518.67}, {cycle: 280, value: 518.67}, {cycle: 281, value: 518.67}, {cycle: 282, value: 518.67}, {cycle: 283, value: 518.67}, {cycle: 284, value: 518.67}, {cycle: 285, value: 518.67}, {cycle: 286, value: 518.67}, {cycle: 287, value: 518.67}, {cycle: 288, value: 518.67}, {cycle: 289, value: 518.67}, {cycle: 290, value: 518.67}, {cycle: 291, value: 518.67}, {cycle: 292, value: 518.67}, {cycle: 293, value: 518.67}, {cycle: 294, value: 518.67}, {cycle: 295, value: 518.67}, {cycle: 296, value: 518.67}, {cycle: 297, value: 518.67}, {cycle: 298, value: 518.67}, {cycle: 299, value: 518.67}, {cycle: 300, value: 518.67}, {cycle: 301, value: 518.67}, {cycle: 302, value: 518.67}, {cycle: 303, value: 518.67}, {cycle: 304, value: 518.67}, {cycle: 305, value: 518.67}, {cycle: 306, value: 518.67}, {cycle: 307, value: 518.67}, {cycle: 308, value: 518.67}, {cycle: 309, value: 518.67}, {cycle: 310, value: 518.67}, {cycle: 311, value: 518.67}, {cycle: 312, value: 518.67}, {cycle: 313, value: 518.67}, {cycle: 314, value: 518.67}, {cycle: 315, value: 518.67}, {cycle: 316, value: 518.67}, {cycle: 317, value: 518.67}, {cycle: 318, value: 518.67}, {cycle: 319, value: 518.67}, {cycle: 320, value: 518.67}],
      // dataProvider: [{cycle: '0',value: 445.0},{cycle: '1',value: 435.0},{cycle: '2',value: 448.0},{cycle: '3',value: 495.0}],
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
      dataProvider: [{cycle: 0, value: 641.82}, {cycle: 1, value: 642.15}, {cycle: 2, value: 642.35}, {cycle: 3, value: 642.35}, {cycle: 4, value: 642.37}, {cycle: 5, value: 642.1}, {cycle: 6, value: 642.48}, {cycle: 7, value: 642.56}, {cycle: 8, value: 642.12}, {cycle: 9, value: 641.71}, {cycle: 10, value: 642.28}, {cycle: 11, value: 642.06}, {cycle: 12, value: 643.07}, {cycle: 13, value: 642.35}, {cycle: 14, value: 642.43}, {cycle: 15, value: 642.13}, {cycle: 16, value: 642.58}, {cycle: 17, value: 642.62}, {cycle: 18, value: 641.79}, {cycle: 19, value: 643.04}, {cycle: 20, value: 642.37}, {cycle: 21, value: 642.77}, {cycle: 22, value: 642.14}, {cycle: 23, value: 642.38}, {cycle: 24, value: 642.77}, {cycle: 25, value: 642.16}, {cycle: 26, value: 642.44}, {cycle: 27, value: 642.35}, {cycle: 28, value: 641.91}, {cycle: 29, value: 642.2}, {cycle: 30, value: 642.02}, {cycle: 31, value: 642.33}, {cycle: 32, value: 642.71}, {cycle: 33, value: 642.54}, {cycle: 34, value: 642.44}, {cycle: 35, value: 642.54}, {cycle: 36, value: 641.99}, {cycle: 37, value: 641.93}, {cycle: 38, value: 642.01}, {cycle: 39, value: 642.24}, {cycle: 40, value: 642.4}, {cycle: 41, value: 642.12}, {cycle: 42, value: 642.24}, {cycle: 43, value: 641.93}, {cycle: 44, value: 642.53}, {cycle: 45, value: 642.43}, {cycle: 46, value: 642.21}, {cycle: 47, value: 641.89}, {cycle: 48, value: 642.23}, {cycle: 49, value: 642.77}, {cycle: 50, value: 642.81}, {cycle: 51, value: 642.76}, {cycle: 52, value: 642.61}, {cycle: 53, value: 642.42}, {cycle: 54, value: 642.41}, {cycle: 55, value: 642.49}, {cycle: 56, value: 642.13}, {cycle: 57, value: 641.9}, {cycle: 58, value: 642.33}, {cycle: 59, value: 642.34}, {cycle: 60, value: 642.1}, {cycle: 61, value: 642.17}, {cycle: 62, value: 642.6}, {cycle: 63, value: 642.23}, {cycle: 64, value: 642.28}, {cycle: 65, value: 642.5}, {cycle: 66, value: 642.33}, {cycle: 67, value: 642.51}, {cycle: 68, value: 642.44}, {cycle: 69, value: 642.22}, {cycle: 70, value: 642.21}, {cycle: 71, value: 642.41}, {cycle: 72, value: 642.29}, {cycle: 73, value: 642.96}, {cycle: 74, value: 641.96}, {cycle: 75, value: 642.21}, {cycle: 76, value: 642.55}, {cycle: 77, value: 641.99}, {cycle: 78, value: 642.12}, {cycle: 79, value: 641.94}, {cycle: 80, value: 642.73}, {cycle: 81, value: 642.04}, {cycle: 82, value: 642.66}, {cycle: 83, value: 642.64}, {cycle: 84, value: 642.28}, {cycle: 85, value: 641.84}, {cycle: 86, value: 642.33}, {cycle: 87, value: 641.96}, {cycle: 88, value: 642.24}, {cycle: 89, value: 642.67}, {cycle: 90, value: 641.98}, {cycle: 91, value: 642.89}, {cycle: 92, value: 642.85}, {cycle: 93, value: 642.45}, {cycle: 94, value: 642.86}, {cycle: 95, value: 642.19}, {cycle: 96, value: 642.07}, {cycle: 97, value: 642.0}, {cycle: 98, value: 642.46}, {cycle: 99, value: 642.22}, {cycle: 100, value: 642.75}, {cycle: 101, value: 642.85}, {cycle: 102, value: 642.21}, {cycle: 103, value: 642.29}, {cycle: 104, value: 642.01}, {cycle: 105, value: 642.68}, {cycle: 106, value: 642.53}, {cycle: 107, value: 643.49}, {cycle: 108, value: 642.49}, {cycle: 109, value: 642.55}, {cycle: 110, value: 642.67}, {cycle: 111, value: 642.66}, {cycle: 112, value: 642.68}, {cycle: 113, value: 642.31}, {cycle: 114, value: 642.66}, {cycle: 115, value: 642.64}, {cycle: 116, value: 642.38}, {cycle: 117, value: 642.34}, {cycle: 118, value: 642.67}, {cycle: 119, value: 642.81}, {cycle: 120, value: 642.63}, {cycle: 121, value: 643.3}, {cycle: 122, value: 643.39}, {cycle: 123, value: 642.48}, {cycle: 124, value: 642.96}, {cycle: 125, value: 642.49}, {cycle: 126, value: 642.99}, {cycle: 127, value: 642.47}, {cycle: 128, value: 642.41}, {cycle: 129, value: 642.7}, {cycle: 130, value: 643.01}, {cycle: 131, value: 643.19}, {cycle: 132, value: 642.45}, {cycle: 133, value: 642.85}, {cycle: 134, value: 642.45}, {cycle: 135, value: 642.84}, {cycle: 136, value: 642.43}, {cycle: 137, value: 642.79}, {cycle: 138, value: 643.11}, {cycle: 139, value: 643.05}, {cycle: 140, value: 642.39}, {cycle: 141, value: 642.51}, {cycle: 142, value: 642.77}, {cycle: 143, value: 643.09}, {cycle: 144, value: 642.95}, {cycle: 145, value: 642.72}, {cycle: 146, value: 642.25}, {cycle: 147, value: 643.02}, {cycle: 148, value: 642.9}, {cycle: 149, value: 643.06}, {cycle: 150, value: 642.82}, {cycle: 151, value: 642.67}, {cycle: 152, value: 642.99}, {cycle: 153, value: 642.81}, {cycle: 154, value: 642.83}, {cycle: 155, value: 643.04}, {cycle: 156, value: 642.2}, {cycle: 157, value: 642.88}, {cycle: 158, value: 642.89}, {cycle: 159, value: 643.45}, {cycle: 160, value: 643.0}, {cycle: 161, value: 643.15}, {cycle: 162, value: 642.85}, {cycle: 163, value: 643.17}, {cycle: 164, value: 642.76}, {cycle: 165, value: 643.34}, {cycle: 166, value: 643.02}, {cycle: 167, value: 642.68}, {cycle: 168, value: 643.2}, {cycle: 169, value: 642.92}, {cycle: 170, value: 643.26}, {cycle: 171, value: 643.33}, {cycle: 172, value: 642.97}, {cycle: 173, value: 642.64}, {cycle: 174, value: 643.61}, {cycle: 175, value: 642.86}, {cycle: 176, value: 643.79}, {cycle: 177, value: 643.38}, {cycle: 178, value: 642.86}, {cycle: 179, value: 643.58}, {cycle: 180, value: 643.44}, {cycle: 181, value: 644.21}, {cycle: 182, value: 643.24}, {cycle: 183, value: 644.07}, {cycle: 184, value: 643.8}, {cycle: 185, value: 643.51}, {cycle: 186, value: 643.32}, {cycle: 187, value: 643.75}, {cycle: 188, value: 644.18}, {cycle: 189, value: 643.64}, {cycle: 190, value: 643.34}, {cycle: 191, value: 643.54}, {cycle: 192, value: 641.89}, {cycle: 193, value: 641.82}, {cycle: 194, value: 641.55}, {cycle: 195, value: 641.68}, {cycle: 196, value: 641.73}, {cycle: 197, value: 641.3}, {cycle: 198, value: 642.03}, {cycle: 199, value: 642.55}, {cycle: 200, value: 641.98}, {cycle: 201, value: 641.99}, {cycle: 202, value: 642.26}, {cycle: 203, value: 641.64}, {cycle: 204, value: 641.78}, {cycle: 205, value: 641.66}, {cycle: 206, value: 642.21}, {cycle: 207, value: 641.81}, {cycle: 208, value: 642.43}, {cycle: 209, value: 641.95}, {cycle: 210, value: 641.75}, {cycle: 211, value: 642.34}, {cycle: 212, value: 642.05}, {cycle: 213, value: 642.16}, {cycle: 214, value: 642.37}, {cycle: 215, value: 641.99}, {cycle: 216, value: 641.81}, {cycle: 217, value: 641.87}, {cycle: 218, value: 642.12}, {cycle: 219, value: 642.04}, {cycle: 220, value: 642.08}, {cycle: 221, value: 641.78}, {cycle: 222, value: 641.97}, {cycle: 223, value: 641.58}, {cycle: 224, value: 641.79}, {cycle: 225, value: 642.12}, {cycle: 226, value: 641.37}, {cycle: 227, value: 641.27}, {cycle: 228, value: 642.1}, {cycle: 229, value: 642.22}, {cycle: 230, value: 642.0}, {cycle: 231, value: 642.02}, {cycle: 232, value: 642.41}, {cycle: 233, value: 642.27}, {cycle: 234, value: 642.02}, {cycle: 235, value: 642.01}, {cycle: 236, value: 642.05}, {cycle: 237, value: 642.15}, {cycle: 238, value: 642.4}, {cycle: 239, value: 642.09}, {cycle: 240, value: 642.85}, {cycle: 241, value: 642.02}, {cycle: 242, value: 642.03}, {cycle: 243, value: 641.52}, {cycle: 244, value: 642.0}, {cycle: 245, value: 641.58}, {cycle: 246, value: 642.33}, {cycle: 247, value: 641.84}, {cycle: 248, value: 642.5}, {cycle: 249, value: 642.3}, {cycle: 250, value: 642.48}, {cycle: 251, value: 642.09}, {cycle: 252, value: 642.41}, {cycle: 253, value: 641.81}, {cycle: 254, value: 641.91}, {cycle: 255, value: 641.66}, {cycle: 256, value: 641.7}, {cycle: 257, value: 642.26}, {cycle: 258, value: 642.17}, {cycle: 259, value: 642.5}, {cycle: 260, value: 642.73}, {cycle: 261, value: 641.76}, {cycle: 262, value: 642.39}, {cycle: 263, value: 642.48}, {cycle: 264, value: 641.73}, {cycle: 265, value: 642.39}, {cycle: 266, value: 641.64}, {cycle: 267, value: 642.01}, {cycle: 268, value: 641.97}, {cycle: 269, value: 642.44}, {cycle: 270, value: 641.62}, {cycle: 271, value: 641.37}, {cycle: 272, value: 641.72}, {cycle: 273, value: 641.86}, {cycle: 274, value: 641.73}, {cycle: 275, value: 642.41}, {cycle: 276, value: 641.73}, {cycle: 277, value: 641.85}, {cycle: 278, value: 642.36}, {cycle: 279, value: 642.23}, {cycle: 280, value: 641.95}, {cycle: 281, value: 642.06}, {cycle: 282, value: 642.09}, {cycle: 283, value: 642.36}, {cycle: 284, value: 642.21}, {cycle: 285, value: 642.1}, {cycle: 286, value: 642.56}, {cycle: 287, value: 642.42}, {cycle: 288, value: 642.04}, {cycle: 289, value: 641.73}, {cycle: 290, value: 642.04}, {cycle: 291, value: 642.04}, {cycle: 292, value: 641.96}, {cycle: 293, value: 642.44}, {cycle: 294, value: 642.05}, {cycle: 295, value: 642.41}, {cycle: 296, value: 641.94}, {cycle: 297, value: 641.87}, {cycle: 298, value: 642.52}, {cycle: 299, value: 642.24}, {cycle: 300, value: 642.12}, {cycle: 301, value: 642.29}, {cycle: 302, value: 642.24}, {cycle: 303, value: 642.49}, {cycle: 304, value: 641.95}, {cycle: 305, value: 642.13}, {cycle: 306, value: 642.16}, {cycle: 307, value: 642.38}, {cycle: 308, value: 641.97}, {cycle: 309, value: 641.95}, {cycle: 310, value: 642.67}, {cycle: 311, value: 642.01}, {cycle: 312, value: 642.04}, {cycle: 313, value: 642.08}, {cycle: 314, value: 642.11}, {cycle: 315, value: 642.37}, {cycle: 316, value: 642.71}, {cycle: 317, value: 642.07}, {cycle: 318, value: 642.26}, {cycle: 319, value: 641.54}, {cycle: 320, value: 641.66}],
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
      dataProvider: [{cycle: 0, value: 1589.7}, {cycle: 1, value: 1591.82}, {cycle: 2, value: 1587.99}, {cycle: 3, value: 1582.79}, {cycle: 4, value: 1582.85}, {cycle: 5, value: 1584.47}, {cycle: 6, value: 1592.32}, {cycle: 7, value: 1582.96}, {cycle: 8, value: 1590.98}, {cycle: 9, value: 1591.24}, {cycle: 10, value: 1581.75}, {cycle: 11, value: 1583.41}, {cycle: 12, value: 1582.19}, {cycle: 13, value: 1592.95}, {cycle: 14, value: 1583.82}, {cycle: 15, value: 1587.98}, {cycle: 16, value: 1584.96}, {cycle: 17, value: 1591.04}, {cycle: 18, value: 1587.56}, {cycle: 19, value: 1581.11}, {cycle: 20, value: 1586.07}, {cycle: 21, value: 1592.93}, {cycle: 22, value: 1588.19}, {cycle: 23, value: 1590.83}, {cycle: 24, value: 1594.1}, {cycle: 25, value: 1589.08}, {cycle: 26, value: 1590.47}, {cycle: 27, value: 1582.84}, {cycle: 28, value: 1584.83}, {cycle: 29, value: 1593.52}, {cycle: 30, value: 1584.18}, {cycle: 31, value: 1591.38}, {cycle: 32, value: 1588.4}, {cycle: 33, value: 1581.47}, {cycle: 34, value: 1590.0}, {cycle: 35, value: 1581.72}, {cycle: 36, value: 1579.11}, {cycle: 37, value: 1589.6}, {cycle: 38, value: 1583.21}, {cycle: 39, value: 1582.08}, {cycle: 40, value: 1591.31}, {cycle: 41, value: 1584.66}, {cycle: 42, value: 1591.52}, {cycle: 43, value: 1586.94}, {cycle: 44, value: 1582.42}, {cycle: 45, value: 1588.29}, {cycle: 46, value: 1580.32}, {cycle: 47, value: 1588.51}, {cycle: 48, value: 1584.35}, {cycle: 49, value: 1588.49}, {cycle: 50, value: 1585.54}, {cycle: 51, value: 1583.77}, {cycle: 52, value: 1579.82}, {cycle: 53, value: 1592.59}, {cycle: 54, value: 1584.95}, {cycle: 55, value: 1586.33}, {cycle: 56, value: 1583.67}, {cycle: 57, value: 1590.46}, {cycle: 58, value: 1596.72}, {cycle: 59, value: 1582.75}, {cycle: 60, value: 1583.55}, {cycle: 61, value: 1581.59}, {cycle: 62, value: 1592.14}, {cycle: 63, value: 1584.51}, {cycle: 64, value: 1584.72}, {cycle: 65, value: 1588.5}, {cycle: 66, value: 1590.22}, {cycle: 67, value: 1582.06}, {cycle: 68, value: 1590.7}, {cycle: 69, value: 1584.02}, {cycle: 70, value: 1580.41}, {cycle: 71, value: 1579.25}, {cycle: 72, value: 1592.04}, {cycle: 73, value: 1584.65}, {cycle: 74, value: 1582.32}, {cycle: 75, value: 1589.21}, {cycle: 76, value: 1586.3}, {cycle: 77, value: 1580.76}, {cycle: 78, value: 1582.46}, {cycle: 79, value: 1591.96}, {cycle: 80, value: 1584.82}, {cycle: 81, value: 1589.07}, {cycle: 82, value: 1588.05}, {cycle: 83, value: 1585.52}, {cycle: 84, value: 1590.12}, {cycle: 85, value: 1588.8}, {cycle: 86, value: 1586.69}, {cycle: 87, value: 1581.29}, {cycle: 88, value: 1584.73}, {cycle: 89, value: 1584.38}, {cycle: 90, value: 1584.84}, {cycle: 91, value: 1590.03}, {cycle: 92, value: 1593.74}, {cycle: 93, value: 1583.27}, {cycle: 94, value: 1577.6}, {cycle: 95, value: 1584.07}, {cycle: 96, value: 1595.77}, {cycle: 97, value: 1591.11}, {cycle: 98, value: 1592.73}, {cycle: 99, value: 1589.63}, {cycle: 100, value: 1584.18}, {cycle: 101, value: 1589.11}, {cycle: 102, value: 1581.27}, {cycle: 103, value: 1590.63}, {cycle: 104, value: 1588.28}, {cycle: 105, value: 1589.05}, {cycle: 106, value: 1595.13}, {cycle: 107, value: 1585.91}, {cycle: 108, value: 1586.45}, {cycle: 109, value: 1590.01}, {cycle: 110, value: 1584.38}, {cycle: 111, value: 1586.46}, {cycle: 112, value: 1590.85}, {cycle: 113, value: 1588.42}, {cycle: 114, value: 1594.84}, {cycle: 115, value: 1580.31}, {cycle: 116, value: 1589.77}, {cycle: 117, value: 1585.67}, {cycle: 118, value: 1596.8}, {cycle: 119, value: 1593.78}, {cycle: 120, value: 1593.56}, {cycle: 121, value: 1593.68}, {cycle: 122, value: 1586.66}, {cycle: 123, value: 1587.14}, {cycle: 124, value: 1585.47}, {cycle: 125, value: 1582.64}, {cycle: 126, value: 1586.9}, {cycle: 127, value: 1593.87}, {cycle: 128, value: 1591.33}, {cycle: 129, value: 1585.9}, {cycle: 130, value: 1585.78}, {cycle: 131, value: 1596.06}, {cycle: 132, value: 1592.64}, {cycle: 133, value: 1583.62}, {cycle: 134, value: 1585.55}, {cycle: 135, value: 1584.72}, {cycle: 136, value: 1594.69}, {cycle: 137, value: 1589.82}, {cycle: 138, value: 1592.28}, {cycle: 139, value: 1590.89}, {cycle: 140, value: 1590.02}, {cycle: 141, value: 1595.29}, {cycle: 142, value: 1593.1}, {cycle: 143, value: 1591.89}, {cycle: 144, value: 1594.92}, {cycle: 145, value: 1586.75}, {cycle: 146, value: 1594.85}, {cycle: 147, value: 1590.03}, {cycle: 148, value: 1592.78}, {cycle: 149, value: 1589.01}, {cycle: 150, value: 1592.39}, {cycle: 151, value: 1598.6}, {cycle: 152, value: 1589.17}, {cycle: 153, value: 1597.03}, {cycle: 154, value: 1590.4}, {cycle: 155, value: 1585.61}, {cycle: 156, value: 1598.04}, {cycle: 157, value: 1596.82}, {cycle: 158, value: 1589.54}, {cycle: 159, value: 1590.65}, {cycle: 160, value: 1594.2}, {cycle: 161, value: 1592.22}, {cycle: 162, value: 1600.54}, {cycle: 163, value: 1598.96}, {cycle: 164, value: 1597.03}, {cycle: 165, value: 1596.72}, {cycle: 166, value: 1593.83}, {cycle: 167, value: 1591.19}, {cycle: 168, value: 1590.16}, {cycle: 169, value: 1592.71}, {cycle: 170, value: 1592.06}, {cycle: 171, value: 1591.71}, {cycle: 172, value: 1590.69}, {cycle: 173, value: 1599.81}, {cycle: 174, value: 1603.29}, {cycle: 175, value: 1592.27}, {cycle: 176, value: 1602.02}, {cycle: 177, value: 1605.33}, {cycle: 178, value: 1592.56}, {cycle: 179, value: 1599.87}, {cycle: 180, value: 1596.71}, {cycle: 181, value: 1602.08}, {cycle: 182, value: 1597.23}, {cycle: 183, value: 1605.44}, {cycle: 184, value: 1603.46}, {cycle: 185, value: 1595.16}, {cycle: 186, value: 1592.1}, {cycle: 187, value: 1602.38}, {cycle: 188, value: 1596.17}, {cycle: 189, value: 1599.22}, {cycle: 190, value: 1602.36}, {cycle: 191, value: 1601.41}, {cycle: 192, value: 1583.84}, {cycle: 193, value: 1587.05}, {cycle: 194, value: 1588.32}, {cycle: 195, value: 1584.15}, {cycle: 196, value: 1579.03}, {cycle: 197, value: 1577.5}, {cycle: 198, value: 1587.49}, {cycle: 199, value: 1590.41}, {cycle: 200, value: 1581.99}, {cycle: 201, value: 1586.37}, {cycle: 202, value: 1589.21}, {cycle: 203, value: 1579.99}, {cycle: 204, value: 1586.77}, {cycle: 205, value: 1584.04}, {cycle: 206, value: 1579.84}, {cycle: 207, value: 1581.99}, {cycle: 208, value: 1583.58}, {cycle: 209, value: 1588.43}, {cycle: 210, value: 1576.84}, {cycle: 211, value: 1582.94}, {cycle: 212, value: 1579.51}, {cycle: 213, value: 1580.18}, {cycle: 214, value: 1580.89}, {cycle: 215, value: 1580.97}, {cycle: 216, value: 1585.38}, {cycle: 217, value: 1575.38}, {cycle: 218, value: 1585.44}, {cycle: 219, value: 1581.6}, {cycle: 220, value: 1583.78}, {cycle: 221, value: 1590.32}, {cycle: 222, value: 1579.86}, {cycle: 223, value: 1584.52}, {cycle: 224, value: 1585.17}, {cycle: 225, value: 1584.08}, {cycle: 226, value: 1575.73}, {cycle: 227, value: 1581.56}, {cycle: 228, value: 1585.63}, {cycle: 229, value: 1585.15}, {cycle: 230, value: 1585.69}, {cycle: 231, value: 1582.69}, {cycle: 232, value: 1578.97}, {cycle: 233, value: 1579.21}, {cycle: 234, value: 1580.59}, {cycle: 235, value: 1584.33}, {cycle: 236, value: 1586.41}, {cycle: 237, value: 1575.45}, {cycle: 238, value: 1583.85}, {cycle: 239, value: 1586.71}, {cycle: 240, value: 1583.86}, {cycle: 241, value: 1577.86}, {cycle: 242, value: 1585.34}, {cycle: 243, value: 1588.48}, {cycle: 244, value: 1584.9}, {cycle: 245, value: 1583.46}, {cycle: 246, value: 1585.59}, {cycle: 247, value: 1587.04}, {cycle: 248, value: 1584.13}, {cycle: 249, value: 1582.93}, {cycle: 250, value: 1584.24}, {cycle: 251, value: 1584.57}, {cycle: 252, value: 1585.45}, {cycle: 253, value: 1577.87}, {cycle: 254, value: 1575.83}, {cycle: 255, value: 1581.65}, {cycle: 256, value: 1582.59}, {cycle: 257, value: 1584.6}, {cycle: 258, value: 1587.63}, {cycle: 259, value: 1577.16}, {cycle: 260, value: 1586.47}, {cycle: 261, value: 1593.24}, {cycle: 262, value: 1586.68}, {cycle: 263, value: 1583.11}, {cycle: 264, value: 1586.57}, {cycle: 265, value: 1584.04}, {cycle: 266, value: 1578.27}, {cycle: 267, value: 1586.91}, {cycle: 268, value: 1588.54}, {cycle: 269, value: 1587.2}, {cycle: 270, value: 1585.59}, {cycle: 271, value: 1588.33}, {cycle: 272, value: 1578.31}, {cycle: 273, value: 1587.24}, {cycle: 274, value: 1585.18}, {cycle: 275, value: 1586.46}, {cycle: 276, value: 1588.31}, {cycle: 277, value: 1579.31}, {cycle: 278, value: 1582.64}, {cycle: 279, value: 1587.88}, {cycle: 280, value: 1584.62}, {cycle: 281, value: 1580.77}, {cycle: 282, value: 1583.57}, {cycle: 283, value: 1584.87}, {cycle: 284, value: 1591.68}, {cycle: 285, value: 1585.62}, {cycle: 286, value: 1579.26}, {cycle: 287, value: 1576.94}, {cycle: 288, value: 1586.12}, {cycle: 289, value: 1587.84}, {cycle: 290, value: 1585.48}, {cycle: 291, value: 1586.01}, {cycle: 292, value: 1582.66}, {cycle: 293, value: 1590.24}, {cycle: 294, value: 1587.75}, {cycle: 295, value: 1582.04}, {cycle: 296, value: 1585.65}, {cycle: 297, value: 1584.61}, {cycle: 298, value: 1581.7}, {cycle: 299, value: 1578.45}, {cycle: 300, value: 1590.41}, {cycle: 301, value: 1583.3}, {cycle: 302, value: 1576.85}, {cycle: 303, value: 1588.35}, {cycle: 304, value: 1584.21}, {cycle: 305, value: 1576.56}, {cycle: 306, value: 1583.27}, {cycle: 307, value: 1577.87}, {cycle: 308, value: 1583.84}, {cycle: 309, value: 1580.49}, {cycle: 310, value: 1585.06}, {cycle: 311, value: 1589.61}, {cycle: 312, value: 1580.19}, {cycle: 313, value: 1585.52}, {cycle: 314, value: 1588.59}, {cycle: 315, value: 1583.12}, {cycle: 316, value: 1586.32}, {cycle: 317, value: 1587.45}, {cycle: 318, value: 1586.65}, {cycle: 319, value: 1592.2}, {cycle: 320, value: 1590.59}],
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
      dataProvider: [{cycle: 0, value: 1400.6}, {cycle: 1, value: 1403.14}, {cycle: 2, value: 1404.2}, {cycle: 3, value: 1401.87}, {cycle: 4, value: 1406.22}, {cycle: 5, value: 1398.37}, {cycle: 6, value: 1397.77}, {cycle: 7, value: 1400.97}, {cycle: 8, value: 1394.8}, {cycle: 9, value: 1400.46}, {cycle: 10, value: 1400.64}, {cycle: 11, value: 1400.15}, {cycle: 12, value: 1400.83}, {cycle: 13, value: 1399.16}, {cycle: 14, value: 1402.13}, {cycle: 15, value: 1404.5}, {cycle: 16, value: 1399.95}, {cycle: 17, value: 1396.12}, {cycle: 18, value: 1400.35}, {cycle: 19, value: 1405.23}, {cycle: 20, value: 1398.13}, {cycle: 21, value: 1400.57}, {cycle: 22, value: 1394.75}, {cycle: 23, value: 1398.81}, {cycle: 24, value: 1399.39}, {cycle: 25, value: 1396.07}, {cycle: 26, value: 1401.84}, {cycle: 27, value: 1399.13}, {cycle: 28, value: 1400.99}, {cycle: 29, value: 1396.08}, {cycle: 30, value: 1396.9}, {cycle: 31, value: 1400.36}, {cycle: 32, value: 1402.43}, {cycle: 33, value: 1400.48}, {cycle: 34, value: 1403.0}, {cycle: 35, value: 1405.54}, {cycle: 36, value: 1398.9}, {cycle: 37, value: 1399.5}, {cycle: 38, value: 1400.69}, {cycle: 39, value: 1401.77}, {cycle: 40, value: 1403.21}, {cycle: 41, value: 1401.38}, {cycle: 42, value: 1406.05}, {cycle: 43, value: 1401.2}, {cycle: 44, value: 1399.16}, {cycle: 45, value: 1401.27}, {cycle: 46, value: 1402.89}, {cycle: 47, value: 1399.16}, {cycle: 48, value: 1397.76}, {cycle: 49, value: 1403.62}, {cycle: 50, value: 1400.42}, {cycle: 51, value: 1395.57}, {cycle: 52, value: 1402.26}, {cycle: 53, value: 1401.2}, {cycle: 54, value: 1401.58}, {cycle: 55, value: 1400.76}, {cycle: 56, value: 1402.79}, {cycle: 57, value: 1397.99}, {cycle: 58, value: 1403.51}, {cycle: 59, value: 1403.07}, {cycle: 60, value: 1405.52}, {cycle: 61, value: 1399.54}, {cycle: 62, value: 1395.38}, {cycle: 63, value: 1400.11}, {cycle: 64, value: 1403.24}, {cycle: 65, value: 1399.52}, {cycle: 66, value: 1403.02}, {cycle: 67, value: 1404.42}, {cycle: 68, value: 1401.24}, {cycle: 69, value: 1402.78}, {cycle: 70, value: 1403.09}, {cycle: 71, value: 1406.81}, {cycle: 72, value: 1397.93}, {cycle: 73, value: 1401.48}, {cycle: 74, value: 1394.82}, {cycle: 75, value: 1398.94}, {cycle: 76, value: 1400.97}, {cycle: 77, value: 1404.1}, {cycle: 78, value: 1403.93}, {cycle: 79, value: 1393.58}, {cycle: 80, value: 1402.04}, {cycle: 81, value: 1399.17}, {cycle: 82, value: 1406.38}, {cycle: 83, value: 1406.6}, {cycle: 84, value: 1405.96}, {cycle: 85, value: 1403.56}, {cycle: 86, value: 1413.1}, {cycle: 87, value: 1406.09}, {cycle: 88, value: 1402.22}, {cycle: 89, value: 1412.93}, {cycle: 90, value: 1404.76}, {cycle: 91, value: 1400.77}, {cycle: 92, value: 1408.48}, {cycle: 93, value: 1404.94}, {cycle: 94, value: 1410.1}, {cycle: 95, value: 1395.16}, {cycle: 96, value: 1407.81}, {cycle: 97, value: 1404.56}, {cycle: 98, value: 1406.13}, {cycle: 99, value: 1411.35}, {cycle: 100, value: 1403.41}, {cycle: 101, value: 1403.42}, {cycle: 102, value: 1403.21}, {cycle: 103, value: 1406.25}, {cycle: 104, value: 1403.22}, {cycle: 105, value: 1404.45}, {cycle: 106, value: 1407.73}, {cycle: 107, value: 1399.47}, {cycle: 108, value: 1409.1}, {cycle: 109, value: 1401.27}, {cycle: 110, value: 1408.11}, {cycle: 111, value: 1401.84}, {cycle: 112, value: 1406.59}, {cycle: 113, value: 1402.97}, {cycle: 114, value: 1406.6}, {cycle: 115, value: 1401.99}, {cycle: 116, value: 1409.35}, {cycle: 117, value: 1409.34}, {cycle: 118, value: 1404.46}, {cycle: 119, value: 1407.68}, {cycle: 120, value: 1411.9}, {cycle: 121, value: 1413.97}, {cycle: 122, value: 1403.04}, {cycle: 123, value: 1402.28}, {cycle: 124, value: 1406.42}, {cycle: 125, value: 1418.5}, {cycle: 126, value: 1399.49}, {cycle: 127, value: 1407.06}, {cycle: 128, value: 1408.42}, {cycle: 129, value: 1412.25}, {cycle: 130, value: 1413.25}, {cycle: 131, value: 1405.76}, {cycle: 132, value: 1410.11}, {cycle: 133, value: 1402.67}, {cycle: 134, value: 1406.83}, {cycle: 135, value: 1404.39}, {cycle: 136, value: 1405.15}, {cycle: 137, value: 1413.34}, {cycle: 138, value: 1412.6}, {cycle: 139, value: 1408.36}, {cycle: 140, value: 1415.25}, {cycle: 141, value: 1413.42}, {cycle: 142, value: 1404.21}, {cycle: 143, value: 1405.76}, {cycle: 144, value: 1409.63}, {cycle: 145, value: 1408.82}, {cycle: 146, value: 1409.96}, {cycle: 147, value: 1411.89}, {cycle: 148, value: 1410.7}, {cycle: 149, value: 1409.22}, {cycle: 150, value: 1411.94}, {cycle: 151, value: 1420.83}, {cycle: 152, value: 1414.56}, {cycle: 153, value: 1416.07}, {cycle: 154, value: 1414.89}, {cycle: 155, value: 1421.23}, {cycle: 156, value: 1412.47}, {cycle: 157, value: 1410.09}, {cycle: 158, value: 1420.37}, {cycle: 159, value: 1418.08}, {cycle: 160, value: 1417.31}, {cycle: 161, value: 1423.48}, {cycle: 162, value: 1421.09}, {cycle: 163, value: 1416.76}, {cycle: 164, value: 1408.09}, {cycle: 165, value: 1422.37}, {cycle: 166, value: 1414.72}, {cycle: 167, value: 1415.7}, {cycle: 168, value: 1418.05}, {cycle: 169, value: 1417.41}, {cycle: 170, value: 1414.99}, {cycle: 171, value: 1413.73}, {cycle: 172, value: 1425.27}, {cycle: 173, value: 1422.58}, {cycle: 174, value: 1422.52}, {cycle: 175, value: 1422.73}, {cycle: 176, value: 1423.99}, {cycle: 177, value: 1424.65}, {cycle: 178, value: 1429.45}, {cycle: 179, value: 1417.14}, {cycle: 180, value: 1420.64}, {cycle: 181, value: 1426.62}, {cycle: 182, value: 1419.03}, {cycle: 183, value: 1432.52}, {cycle: 184, value: 1424.4}, {cycle: 185, value: 1426.3}, {cycle: 186, value: 1427.27}, {cycle: 187, value: 1422.78}, {cycle: 188, value: 1428.01}, {cycle: 189, value: 1425.95}, {cycle: 190, value: 1425.77}, {cycle: 191, value: 1427.2}, {cycle: 192, value: 1391.28}, {cycle: 193, value: 1393.13}, {cycle: 194, value: 1398.96}, {cycle: 195, value: 1396.08}, {cycle: 196, value: 1402.52}, {cycle: 197, value: 1396.76}, {cycle: 198, value: 1400.65}, {cycle: 199, value: 1395.39}, {cycle: 200, value: 1395.01}, {cycle: 201, value: 1394.86}, {cycle: 202, value: 1401.29}, {cycle: 203, value: 1401.9}, {cycle: 204, value: 1401.53}, {cycle: 205, value: 1395.46}, {cycle: 206, value: 1402.11}, {cycle: 207, value: 1393.46}, {cycle: 208, value: 1390.27}, {cycle: 209, value: 1400.25}, {cycle: 210, value: 1401.77}, {cycle: 211, value: 1394.38}, {cycle: 212, value: 1392.28}, {cycle: 213, value: 1397.67}, {cycle: 214, value: 1387.5}, {cycle: 215, value: 1398.67}, {cycle: 216, value: 1396.62}, {cycle: 217, value: 1392.3}, {cycle: 218, value: 1402.31}, {cycle: 219, value: 1397.45}, {cycle: 220, value: 1398.08}, {cycle: 221, value: 1395.07}, {cycle: 222, value: 1390.94}, {cycle: 223, value: 1391.11}, {cycle: 224, value: 1396.15}, {cycle: 225, value: 1394.24}, {cycle: 226, value: 1392.55}, {cycle: 227, value: 1397.13}, {cycle: 228, value: 1396.29}, {cycle: 229, value: 1397.75}, {cycle: 230, value: 1391.49}, {cycle: 231, value: 1398.38}, {cycle: 232, value: 1398.74}, {cycle: 233, value: 1392.13}, {cycle: 234, value: 1391.6}, {cycle: 235, value: 1398.69}, {cycle: 236, value: 1397.6}, {cycle: 237, value: 1392.6}, {cycle: 238, value: 1396.46}, {cycle: 239, value: 1397.95}, {cycle: 240, value: 1396.5}, {cycle: 241, value: 1399.78}, {cycle: 242, value: 1393.06}, {cycle: 243, value: 1401.66}, {cycle: 244, value: 1397.09}, {cycle: 245, value: 1405.33}, {cycle: 246, value: 1387.16}, {cycle: 247, value: 1388.97}, {cycle: 248, value: 1389.62}, {cycle: 249, value: 1389.91}, {cycle: 250, value: 1397.95}, {cycle: 251, value: 1396.84}, {cycle: 252, value: 1399.71}, {cycle: 253, value: 1401.66}, {cycle: 254, value: 1395.05}, {cycle: 255, value: 1401.46}, {cycle: 256, value: 1395.4}, {cycle: 257, value: 1394.01}, {cycle: 258, value: 1395.44}, {cycle: 259, value: 1399.27}, {cycle: 260, value: 1399.73}, {cycle: 261, value: 1397.3}, {cycle: 262, value: 1403.09}, {cycle: 263, value: 1393.85}, {cycle: 264, value: 1400.98}, {cycle: 265, value: 1396.13}, {cycle: 266, value: 1390.64}, {cycle: 267, value: 1399.66}, {cycle: 268, value: 1395.38}, {cycle: 269, value: 1394.24}, {cycle: 270, value: 1398.51}, {cycle: 271, value: 1394.0}, {cycle: 272, value: 1390.12}, {cycle: 273, value: 1402.78}, {cycle: 274, value: 1398.81}, {cycle: 275, value: 1402.26}, {cycle: 276, value: 1398.33}, {cycle: 277, value: 1399.12}, {cycle: 278, value: 1399.51}, {cycle: 279, value: 1398.17}, {cycle: 280, value: 1394.07}, {cycle: 281, value: 1405.34}, {cycle: 282, value: 1399.47}, {cycle: 283, value: 1399.17}, {cycle: 284, value: 1392.48}, {cycle: 285, value: 1395.39}, {cycle: 286, value: 1402.79}, {cycle: 287, value: 1399.59}, {cycle: 288, value: 1400.5}, {cycle: 289, value: 1401.08}, {cycle: 290, value: 1400.97}, {cycle: 291, value: 1402.72}, {cycle: 292, value: 1397.81}, {cycle: 293, value: 1407.05}, {cycle: 294, value: 1392.16}, {cycle: 295, value: 1397.31}, {cycle: 296, value: 1397.45}, {cycle: 297, value: 1402.62}, {cycle: 298, value: 1402.93}, {cycle: 299, value: 1396.25}, {cycle: 300, value: 1392.9}, {cycle: 301, value: 1398.47}, {cycle: 302, value: 1393.76}, {cycle: 303, value: 1397.2}, {cycle: 304, value: 1404.74}, {cycle: 305, value: 1397.05}, {cycle: 306, value: 1401.33}, {cycle: 307, value: 1398.39}, {cycle: 308, value: 1395.4}, {cycle: 309, value: 1400.99}, {cycle: 310, value: 1401.87}, {cycle: 311, value: 1394.39}, {cycle: 312, value: 1391.52}, {cycle: 313, value: 1405.27}, {cycle: 314, value: 1403.23}, {cycle: 315, value: 1399.26}, {cycle: 316, value: 1397.94}, {cycle: 317, value: 1403.41}, {cycle: 318, value: 1400.81}, {cycle: 319, value: 1397.34}, {cycle: 320, value: 1400.25}],
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
      dataProvider: [{cycle: 0, value: 14.62}, {cycle: 1, value: 14.62}, {cycle: 2, value: 14.62}, {cycle: 3, value: 14.62}, {cycle: 4, value: 14.62}, {cycle: 5, value: 14.62}, {cycle: 6, value: 14.62}, {cycle: 7, value: 14.62}, {cycle: 8, value: 14.62}, {cycle: 9, value: 14.62}, {cycle: 10, value: 14.62}, {cycle: 11, value: 14.62}, {cycle: 12, value: 14.62}, {cycle: 13, value: 14.62}, {cycle: 14, value: 14.62}, {cycle: 15, value: 14.62}, {cycle: 16, value: 14.62}, {cycle: 17, value: 14.62}, {cycle: 18, value: 14.62}, {cycle: 19, value: 14.62}, {cycle: 20, value: 14.62}, {cycle: 21, value: 14.62}, {cycle: 22, value: 14.62}, {cycle: 23, value: 14.62}, {cycle: 24, value: 14.62}, {cycle: 25, value: 14.62}, {cycle: 26, value: 14.62}, {cycle: 27, value: 14.62}, {cycle: 28, value: 14.62}, {cycle: 29, value: 14.62}, {cycle: 30, value: 14.62}, {cycle: 31, value: 14.62}, {cycle: 32, value: 14.62}, {cycle: 33, value: 14.62}, {cycle: 34, value: 14.62}, {cycle: 35, value: 14.62}, {cycle: 36, value: 14.62}, {cycle: 37, value: 14.62}, {cycle: 38, value: 14.62}, {cycle: 39, value: 14.62}, {cycle: 40, value: 14.62}, {cycle: 41, value: 14.62}, {cycle: 42, value: 14.62}, {cycle: 43, value: 14.62}, {cycle: 44, value: 14.62}, {cycle: 45, value: 14.62}, {cycle: 46, value: 14.62}, {cycle: 47, value: 14.62}, {cycle: 48, value: 14.62}, {cycle: 49, value: 14.62}, {cycle: 50, value: 14.62}, {cycle: 51, value: 14.62}, {cycle: 52, value: 14.62}, {cycle: 53, value: 14.62}, {cycle: 54, value: 14.62}, {cycle: 55, value: 14.62}, {cycle: 56, value: 14.62}, {cycle: 57, value: 14.62}, {cycle: 58, value: 14.62}, {cycle: 59, value: 14.62}, {cycle: 60, value: 14.62}, {cycle: 61, value: 14.62}, {cycle: 62, value: 14.62}, {cycle: 63, value: 14.62}, {cycle: 64, value: 14.62}, {cycle: 65, value: 14.62}, {cycle: 66, value: 14.62}, {cycle: 67, value: 14.62}, {cycle: 68, value: 14.62}, {cycle: 69, value: 14.62}, {cycle: 70, value: 14.62}, {cycle: 71, value: 14.62}, {cycle: 72, value: 14.62}, {cycle: 73, value: 14.62}, {cycle: 74, value: 14.62}, {cycle: 75, value: 14.62}, {cycle: 76, value: 14.62}, {cycle: 77, value: 14.62}, {cycle: 78, value: 14.62}, {cycle: 79, value: 14.62}, {cycle: 80, value: 14.62}, {cycle: 81, value: 14.62}, {cycle: 82, value: 14.62}, {cycle: 83, value: 14.62}, {cycle: 84, value: 14.62}, {cycle: 85, value: 14.62}, {cycle: 86, value: 14.62}, {cycle: 87, value: 14.62}, {cycle: 88, value: 14.62}, {cycle: 89, value: 14.62}, {cycle: 90, value: 14.62}, {cycle: 91, value: 14.62}, {cycle: 92, value: 14.62}, {cycle: 93, value: 14.62}, {cycle: 94, value: 14.62}, {cycle: 95, value: 14.62}, {cycle: 96, value: 14.62}, {cycle: 97, value: 14.62}, {cycle: 98, value: 14.62}, {cycle: 99, value: 14.62}, {cycle: 100, value: 14.62}, {cycle: 101, value: 14.62}, {cycle: 102, value: 14.62}, {cycle: 103, value: 14.62}, {cycle: 104, value: 14.62}, {cycle: 105, value: 14.62}, {cycle: 106, value: 14.62}, {cycle: 107, value: 14.62}, {cycle: 108, value: 14.62}, {cycle: 109, value: 14.62}, {cycle: 110, value: 14.62}, {cycle: 111, value: 14.62}, {cycle: 112, value: 14.62}, {cycle: 113, value: 14.62}, {cycle: 114, value: 14.62}, {cycle: 115, value: 14.62}, {cycle: 116, value: 14.62}, {cycle: 117, value: 14.62}, {cycle: 118, value: 14.62}, {cycle: 119, value: 14.62}, {cycle: 120, value: 14.62}, {cycle: 121, value: 14.62}, {cycle: 122, value: 14.62}, {cycle: 123, value: 14.62}, {cycle: 124, value: 14.62}, {cycle: 125, value: 14.62}, {cycle: 126, value: 14.62}, {cycle: 127, value: 14.62}, {cycle: 128, value: 14.62}, {cycle: 129, value: 14.62}, {cycle: 130, value: 14.62}, {cycle: 131, value: 14.62}, {cycle: 132, value: 14.62}, {cycle: 133, value: 14.62}, {cycle: 134, value: 14.62}, {cycle: 135, value: 14.62}, {cycle: 136, value: 14.62}, {cycle: 137, value: 14.62}, {cycle: 138, value: 14.62}, {cycle: 139, value: 14.62}, {cycle: 140, value: 14.62}, {cycle: 141, value: 14.62}, {cycle: 142, value: 14.62}, {cycle: 143, value: 14.62}, {cycle: 144, value: 14.62}, {cycle: 145, value: 14.62}, {cycle: 146, value: 14.62}, {cycle: 147, value: 14.62}, {cycle: 148, value: 14.62}, {cycle: 149, value: 14.62}, {cycle: 150, value: 14.62}, {cycle: 151, value: 14.62}, {cycle: 152, value: 14.62}, {cycle: 153, value: 14.62}, {cycle: 154, value: 14.62}, {cycle: 155, value: 14.62}, {cycle: 156, value: 14.62}, {cycle: 157, value: 14.62}, {cycle: 158, value: 14.62}, {cycle: 159, value: 14.62}, {cycle: 160, value: 14.62}, {cycle: 161, value: 14.62}, {cycle: 162, value: 14.62}, {cycle: 163, value: 14.62}, {cycle: 164, value: 14.62}, {cycle: 165, value: 14.62}, {cycle: 166, value: 14.62}, {cycle: 167, value: 14.62}, {cycle: 168, value: 14.62}, {cycle: 169, value: 14.62}, {cycle: 170, value: 14.62}, {cycle: 171, value: 14.62}, {cycle: 172, value: 14.62}, {cycle: 173, value: 14.62}, {cycle: 174, value: 14.62}, {cycle: 175, value: 14.62}, {cycle: 176, value: 14.62}, {cycle: 177, value: 14.62}, {cycle: 178, value: 14.62}, {cycle: 179, value: 14.62}, {cycle: 180, value: 14.62}, {cycle: 181, value: 14.62}, {cycle: 182, value: 14.62}, {cycle: 183, value: 14.62}, {cycle: 184, value: 14.62}, {cycle: 185, value: 14.62}, {cycle: 186, value: 14.62}, {cycle: 187, value: 14.62}, {cycle: 188, value: 14.62}, {cycle: 189, value: 14.62}, {cycle: 190, value: 14.62}, {cycle: 191, value: 14.62}, {cycle: 192, value: 14.62}, {cycle: 193, value: 14.62}, {cycle: 194, value: 14.62}, {cycle: 195, value: 14.62}, {cycle: 196, value: 14.62}, {cycle: 197, value: 14.62}, {cycle: 198, value: 14.62}, {cycle: 199, value: 14.62}, {cycle: 200, value: 14.62}, {cycle: 201, value: 14.62}, {cycle: 202, value: 14.62}, {cycle: 203, value: 14.62}, {cycle: 204, value: 14.62}, {cycle: 205, value: 14.62}, {cycle: 206, value: 14.62}, {cycle: 207, value: 14.62}, {cycle: 208, value: 14.62}, {cycle: 209, value: 14.62}, {cycle: 210, value: 14.62}, {cycle: 211, value: 14.62}, {cycle: 212, value: 14.62}, {cycle: 213, value: 14.62}, {cycle: 214, value: 14.62}, {cycle: 215, value: 14.62}, {cycle: 216, value: 14.62}, {cycle: 217, value: 14.62}, {cycle: 218, value: 14.62}, {cycle: 219, value: 14.62}, {cycle: 220, value: 14.62}, {cycle: 221, value: 14.62}, {cycle: 222, value: 14.62}, {cycle: 223, value: 14.62}, {cycle: 224, value: 14.62}, {cycle: 225, value: 14.62}, {cycle: 226, value: 14.62}, {cycle: 227, value: 14.62}, {cycle: 228, value: 14.62}, {cycle: 229, value: 14.62}, {cycle: 230, value: 14.62}, {cycle: 231, value: 14.62}, {cycle: 232, value: 14.62}, {cycle: 233, value: 14.62}, {cycle: 234, value: 14.62}, {cycle: 235, value: 14.62}, {cycle: 236, value: 14.62}, {cycle: 237, value: 14.62}, {cycle: 238, value: 14.62}, {cycle: 239, value: 14.62}, {cycle: 240, value: 14.62}, {cycle: 241, value: 14.62}, {cycle: 242, value: 14.62}, {cycle: 243, value: 14.62}, {cycle: 244, value: 14.62}, {cycle: 245, value: 14.62}, {cycle: 246, value: 14.62}, {cycle: 247, value: 14.62}, {cycle: 248, value: 14.62}, {cycle: 249, value: 14.62}, {cycle: 250, value: 14.62}, {cycle: 251, value: 14.62}, {cycle: 252, value: 14.62}, {cycle: 253, value: 14.62}, {cycle: 254, value: 14.62}, {cycle: 255, value: 14.62}, {cycle: 256, value: 14.62}, {cycle: 257, value: 14.62}, {cycle: 258, value: 14.62}, {cycle: 259, value: 14.62}, {cycle: 260, value: 14.62}, {cycle: 261, value: 14.62}, {cycle: 262, value: 14.62}, {cycle: 263, value: 14.62}, {cycle: 264, value: 14.62}, {cycle: 265, value: 14.62}, {cycle: 266, value: 14.62}, {cycle: 267, value: 14.62}, {cycle: 268, value: 14.62}, {cycle: 269, value: 14.62}, {cycle: 270, value: 14.62}, {cycle: 271, value: 14.62}, {cycle: 272, value: 14.62}, {cycle: 273, value: 14.62}, {cycle: 274, value: 14.62}, {cycle: 275, value: 14.62}, {cycle: 276, value: 14.62}, {cycle: 277, value: 14.62}, {cycle: 278, value: 14.62}, {cycle: 279, value: 14.62}, {cycle: 280, value: 14.62}, {cycle: 281, value: 14.62}, {cycle: 282, value: 14.62}, {cycle: 283, value: 14.62}, {cycle: 284, value: 14.62}, {cycle: 285, value: 14.62}, {cycle: 286, value: 14.62}, {cycle: 287, value: 14.62}, {cycle: 288, value: 14.62}, {cycle: 289, value: 14.62}, {cycle: 290, value: 14.62}, {cycle: 291, value: 14.62}, {cycle: 292, value: 14.62}, {cycle: 293, value: 14.62}, {cycle: 294, value: 14.62}, {cycle: 295, value: 14.62}, {cycle: 296, value: 14.62}, {cycle: 297, value: 14.62}, {cycle: 298, value: 14.62}, {cycle: 299, value: 14.62}, {cycle: 300, value: 14.62}, {cycle: 301, value: 14.62}, {cycle: 302, value: 14.62}, {cycle: 303, value: 14.62}, {cycle: 304, value: 14.62}, {cycle: 305, value: 14.62}, {cycle: 306, value: 14.62}, {cycle: 307, value: 14.62}, {cycle: 308, value: 14.62}, {cycle: 309, value: 14.62}, {cycle: 310, value: 14.62}, {cycle: 311, value: 14.62}, {cycle: 312, value: 14.62}, {cycle: 313, value: 14.62}, {cycle: 314, value: 14.62}, {cycle: 315, value: 14.62}, {cycle: 316, value: 14.62}, {cycle: 317, value: 14.62}, {cycle: 318, value: 14.62}, {cycle: 319, value: 14.62}, {cycle: 320, value: 14.62}],
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

  readData(url) {
    return this.http.get(url).map(data => data["_body"]);
  }

}












