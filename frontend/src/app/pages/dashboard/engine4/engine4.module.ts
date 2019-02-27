import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Engine4Component } from './engine4.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import {ChartModule} from 'angular2-chartjs';

export const Engine4Routes: Routes = [
  {
    path: '',
    component: Engine4Component,
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
    RouterModule.forChild(Engine4Routes),
    SharedModule,
    ChartModule
  ],
  declarations: [Engine4Component]
})
export class Engine4Module { }
