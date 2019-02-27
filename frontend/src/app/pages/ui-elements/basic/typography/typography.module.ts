import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypographyComponent } from './typography.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';

export const TypographyRoutes: Routes = [
  {
    path: '',
    component: TypographyComponent,
    data: {
      breadcrumb: 'Typography',
      icon: 'icofont-layout bg-c-blue',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TypographyRoutes),
    SharedModule
  ],
  declarations: [TypographyComponent]
})
export class TypographyModule { }
