import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicBootstrapComponent } from './basic-bootstrap.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../../shared/shared.module';

export const basicRoutes: Routes = [
  {
    path: '',
    component: BasicBootstrapComponent,
    data: {
      breadcrumb: 'Basic Table',
      icon: 'icofont-table bg-c-blue',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(basicRoutes),
    SharedModule
  ],
  declarations: [BasicBootstrapComponent]
})
export class BasicBootstrapModule { }
