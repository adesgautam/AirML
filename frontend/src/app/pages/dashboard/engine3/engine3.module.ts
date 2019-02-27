import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Engine3Component } from './engine3.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import {ChartModule} from 'angular2-chartjs';

export const Engine3Routes: Routes = [
  {
    path: '',
    component: Engine3Component,
    data: {
      breadcrumb: 'Default',
      icon: 'icofont-home bg-c-blue',
      status: false
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(Engine3Routes),
    SharedModule,
    ChartModule
  ],
  declarations: [Engine3Component]
})
export class Engine3Module {}
