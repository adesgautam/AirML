import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Engine5Component } from './engine5.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import {ChartModule} from 'angular2-chartjs';

export const Engine5Routes: Routes = [
  {
    path: '',
    component: Engine5Component,
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
    RouterModule.forChild(Engine5Routes),
    SharedModule,
    ChartModule
  ],
  declarations: [Engine5Component]
})
export class Engine5Module { }
