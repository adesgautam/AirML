import { Component, OnInit } from '@angular/core';

import '../../../../assets/charts/amchart/amcharts.js';
import '../../../../assets/charts/amchart/gauge.js';
import '../../../../assets/charts/amchart/pie.js';
import '../../../../assets/charts/amchart/serial.js';
import '../../../../assets/charts/amchart/light.js';
import '../../../../assets/charts/amchart/ammap.js';
import '../../../../assets/charts/amchart/worldLow.js';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

declare const AmCharts: any;
declare const $: any;

@Component({
  selector: 'app-dashboard-default',
  templateUrl: './dashboard-default.component.html',
  styleUrls: [
    './dashboard-default.component.css'
  ]
})
export class DashboardDefaultComponent implements OnInit {

  private headers = new Headers({
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': localStorage.getItem('token')
  });
  private options = new RequestOptions({
    headers: this.headers
  });

  // UI colors
  r_color = "#d22752";
  o_color = "#d67961";
  g_color = "#89db56";
  txt_color = "#eeeeee";
  main_text1 = "";
  main_text2 = "";
  main_text3 = "";

  // UI text
  cycle_thresh = 30;
  bin_text_working = "Working Fine";
  bin_text_notworking = "Possible Failure detected";
  multi_text_nofailure = "No possible failure";
  multi_text_15cycles = "Warning: Possible failure !";
  multi_text_30cycles = "Critical: Possible failure !";

  // Engine RULs
  e1_rul = ""; e2_rul = ""; e3_rul = ""; e4_rul = ""; e5_rul = ""; e6_rul = "";

  // RUL colors
  e1_rul_color = ""; e2_rul_color = ""; e3_rul_color = ""; e4_rul_color = ""; e5_rul_color = ""; e6_rul_color = "";

  // Engine bin values
  // e1_bin = ""; e2_bin = ""; e3_bin = ""; e4_bin = ""; e5_bin = "";

  // Engine bin text
  e1_bin_text = ""; e2_bin_text = ""; e3_bin_text = ""; e4_bin_text = ""; e5_bin_text = "";

  // Engine bin colors
  e1_bin_color = ""; e2_bin_color = ""; e3_bin_color = ""; e4_bin_color = ""; e5_bin_color = "";

  // Engine multi values
  // e1_multi = ""; e2_multi = ""; e3_multi = ""; e4_multi = ""; e5_multi = "";

  // Engine multi colors
  e1_multi_color = ""; e2_multi_color = ""; e3_multi_color = ""; e4_multi_color = ""; e5_multi_color = "";

  // Engine multi text
  e1_multi_text = ""; e2_multi_text = ""; e3_multi_text = ""; e4_multi_text = ""; e5_multi_text = "";

  // url = "http://localhost:8000/";
  url = "http://13.234.66.168:8000/";

  constructor(private http: Http) { }

  ngOnInit() {

    // const req = this.http.post(this.url, {'engine':'1'}, this.options).subscribe(data=>{
    //     this.e1_rul = JSON.parse(JSON.stringify(data.json()))['RUL'];
    //     console.log(this.e1_rul);
    // })
    const req_rul = this.http.get(this.url).subscribe(data=> {
      console.log(data);

      // Setting the RUL colors and data
      this.e1_rul = JSON.parse(JSON.stringify(data.json()))['engine_rul_2'];
      if(parseInt(this.e1_rul) < this.cycle_thresh){
        this.e1_rul_color = this.r_color;
        this.main_text1 = "Requires Maintenance";
      }
      else
        this.e1_rul_color = this.g_color;

      this.e2_rul = JSON.parse(JSON.stringify(data.json()))['engine_rul_3'];
      if(parseInt(this.e2_rul) < this.cycle_thresh){
        this.e2_rul_color = this.r_color;
        this.main_text1 = "Requires Maintenance";
      }
      else
        this.e2_rul_color = this.g_color;

      this.e3_rul = JSON.parse(JSON.stringify(data.json()))['engine_rul_4'];
      if(parseInt(this.e3_rul) < this.cycle_thresh){
        this.e3_rul_color = this.r_color;
        this.main_text2 = "Requires Maintenance";
      }
      else
        this.e3_rul_color = this.g_color;

      this.e4_rul = JSON.parse(JSON.stringify(data.json()))['engine_rul_31'];
      if(parseInt(this.e4_rul) < this.cycle_thresh){
        this.e4_rul_color = this.r_color;
        this.main_text2 = "Requires Maintenance";
      }
      else
        this.e4_rul_color = this.g_color;

      this.e5_rul = JSON.parse(JSON.stringify(data.json()))['engine_rul_31'];
      if(parseInt(this.e5_rul) < this.cycle_thresh){
        this.e5_rul_color = this.r_color;
        this.main_text3 = "Requires Maintenance";
      }
      else
        this.e5_rul_color = this.g_color;

      this.e6_rul = JSON.parse(JSON.stringify(data.json()))['engine_rul_4'];
      if(parseInt(this.e6_rul) < this.cycle_thresh){
        this.e6_rul_color = this.r_color;
        this.main_text3 = "Requires Maintenance";
      }
      else
        this.e6_rul_color = this.g_color;

      // this.e5_rul = JSON.parse(JSON.stringify(data.json()))['engine_rul_5'];
      // if(parseInt(this.e5_rul) < this.cycle_thresh)
      //   this.e5_rul_color = this.r_color;
      // else
      //   this.e5_rul_color = this.g_color;


      // Setting the binary class colors and data
      // var temp = JSON.parse(JSON.stringify(data.json()))['engine_fault_1'];
      // if(parseInt(temp) == 0){
      //   this.e1_bin_color = this.g_color;
      //   this.e1_bin_text = this.bin_text_working;
      // }
      // else{
      //   this.e1_bin_color = this.r_color;
      //   this.e1_bin_text = this.bin_text_notworking;
      // }

      // var temp = JSON.parse(JSON.stringify(data.json()))['engine_fault_2'];
      // if(parseInt(temp) == 0){
      //   this.e2_bin_color = this.g_color;
      //   this.e2_bin_text = this.bin_text_working;
      // }
      // else{
      //   this.e2_bin_color = this.r_color;
      //   this.e2_bin_text = this.bin_text_notworking;
      // }

      // var temp = JSON.parse(JSON.stringify(data.json()))['engine_fault_3'];
      // if(parseInt(temp) == 0){
      //   this.e3_bin_color = this.g_color;
      //   this.e3_bin_text = this.bin_text_working;
      // }
      // else{
      //   this.e3_bin_color = this.r_color;
      //   this.e3_bin_text = this.bin_text_notworking;
      // }

      // var temp = JSON.parse(JSON.stringify(data.json()))['engine_fault_4'];
      // if(parseInt(temp) == 0){
      //   this.e4_bin_color = this.g_color;
      //   this.e4_bin_text = this.bin_text_working;
      // }
      // else{
      //   this.e4_bin_color = this.r_color;
      //   this.e4_bin_text = this.bin_text_notworking;
      // }

      // var temp = JSON.parse(JSON.stringify(data.json()))['engine_fault_5'];
      // if(parseInt(temp) == 0){
      //   this.e5_bin_color = this.g_color;
      //   this.e5_bin_text = this.bin_text_working;
      // }
      // else{
      //   this.e5_bin_color = this.r_color;
      //   this.e5_bin_text = this.bin_text_notworking;
      // }


      // Setting the multi class colors and data
      // var temp = JSON.parse(JSON.stringify(data.json()))['engine_MultiClass_1'];
      // if(parseInt(temp) == 0){
      //   this.e1_multi_color = this.g_color;
      //   this.e1_multi_text = this.multi_text_nofailure;
      // }
      // else if(parseInt(temp) == 1){
      //   this.e1_multi_color = this.o_color;
      //   this.e1_multi_text = this.multi_text_15cycles;
      // }
      // else{
      //   this.e1_multi_color = this.r_color;
      //   this.e1_multi_text = this.multi_text_30cycles; 
      // }

      // var temp = JSON.parse(JSON.stringify(data.json()))['engine_MultiClass_2'];
      // if(parseInt(temp) == 0){
      //   this.e2_multi_color = this.g_color;
      //   this.e2_multi_text = this.multi_text_nofailure;
      // }
      // else if(parseInt(temp) == 1){
      //   this.e2_multi_color = this.o_color;
      //   this.e2_multi_text = this.multi_text_15cycles;
      // }
      // else{
      //   this.e2_multi_color = this.r_color;
      //   this.e2_multi_text = this.multi_text_30cycles; 
      // }

      // var temp = JSON.parse(JSON.stringify(data.json()))['engine_MultiClass_3'];
      // if(parseInt(temp) == 0){
      //   this.e3_multi_color = this.g_color;
      //   this.e3_multi_text = this.multi_text_nofailure;
      // }
      // else if(parseInt(temp) == 1){
      //   this.e3_multi_color = this.o_color;
      //   this.e3_multi_text = this.multi_text_15cycles;
      // }
      // else{
      //   this.e3_multi_color = this.r_color;
      //   this.e3_multi_text = this.multi_text_30cycles; 
      // }

      // var temp = JSON.parse(JSON.stringify(data.json()))['engine_MultiClass_4'];
      // if(parseInt(temp) == 0){
      //   this.e4_multi_color = this.g_color;
      //   this.e4_multi_text = this.multi_text_nofailure;
      // }
      // else if(parseInt(temp) == 1){
      //   this.e4_multi_color = this.o_color;
      //   this.e4_multi_text = this.multi_text_15cycles;
      // }
      // else{
      //   this.e4_multi_color = this.r_color;
      //   this.e4_multi_text = this.multi_text_30cycles; 
      // }

      // var temp = JSON.parse(JSON.stringify(data.json()))['engine_MultiClass_1'];
      // if(parseInt(temp) == 0){
      //   this.e5_multi_color = this.g_color;
      //   this.e5_multi_text = this.multi_text_nofailure;
      // }
      // else if(parseInt(temp) == 1){
      //   this.e5_multi_color = this.o_color;
      //   this.e5_multi_text = this.multi_text_15cycles;
      // }
      // else{
      //   this.e5_multi_color = this.r_color;
      //   this.e5_multi_text = this.multi_text_30cycles; 
      // }

    });

  }

  // 192.168.43.85:8000/

}