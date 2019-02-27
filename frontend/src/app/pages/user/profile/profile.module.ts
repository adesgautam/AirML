import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {QuillEditorModule} from 'ngx-quill-editor';
import {HttpModule} from '@angular/http';
import {DataTableModule} from 'angular2-datatable';
import {AngularEchartsModule} from 'ngx-echarts';

export const profileRoutes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    data: {
      breadcrumb: 'User Profile',
      icon: 'icofont-justify-all bg-c-green',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(profileRoutes),
    SharedModule,
    FormsModule,
    QuillEditorModule,
    HttpModule,
    DataTableModule,
    AngularEchartsModule
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
