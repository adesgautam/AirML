import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';

export const ButtonRoutes: Routes = [
  {
    path: '',
    component: ButtonComponent,
    data: {
      breadcrumb: 'Button',
      icon: 'icofont-layout bg-c-blue',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ButtonRoutes),
    SharedModule
  ],
  declarations: [ButtonComponent]
})
export class ButtonModule { }
