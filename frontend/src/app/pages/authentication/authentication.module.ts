import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {WithBgImageComponent} from './login/with-bg-image/with-bg-image.component';
import {WithSocialComponent} from './registration/with-social/with-social.component';

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: WithBgImageComponent,
        data: {
          breadcrumb: 'Login'
        }
      },
      {
        path: 'registration',
        component: WithSocialComponent,
        data: {
          breadcrumb: 'Registration'
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthenticationRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [WithBgImageComponent, WithSocialComponent]
})
export class AuthenticationModule { }
