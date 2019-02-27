import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Engine2Component } from './engine2.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import {ChartModule} from 'angular2-chartjs';

export const Engine2Routes: Routes = [
  {
    path: '',
    component: Engine2Component,
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
    RouterModule.forChild(Engine2Routes),
    SharedModule,
    ChartModule
  ],
  declarations: [Engine2Component]
})
export class Engine2Module {}
