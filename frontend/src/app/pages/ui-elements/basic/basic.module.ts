import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './basic.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from "../../../shared/shared.module";

export const BasicRoutes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Basic Components',
      status: false
    },
    children: [
      {
        path: 'button',
        loadChildren: './button/button.module#ButtonModule'
      }, {
        path: 'typography',
        loadChildren: './typography/typography.module#TypographyModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(BasicRoutes),
    SharedModule
  ],
  declarations: [BasicComponent]
})
export class BasicModule { }
