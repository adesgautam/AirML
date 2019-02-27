import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Engine1Component } from './engine1.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import {ChartModule} from 'angular2-chartjs';

export const Engine1Routes: Routes = [
  {
    path: '',
    component: Engine1Component,
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
    RouterModule.forChild(Engine1Routes),
    SharedModule,
    ChartModule
  ],
  declarations: [Engine1Component]
})
export class Engine1Module { }
