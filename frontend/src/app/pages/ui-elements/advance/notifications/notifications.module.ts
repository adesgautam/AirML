import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './notifications.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';
import {ToastyModule} from 'ng2-toasty';

export const notificationsRoutes: Routes = [
  {
    path: '',
    component: NotificationsComponent,
    data: {
      breadcrumb: 'Notifications',
      icon: 'icofont-listine-dots bg-c-pink',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(notificationsRoutes),
    SharedModule,
    ToastyModule.forRoot()
  ],
  declarations: [NotificationsComponent]
})
export class NotificationsModule { }
