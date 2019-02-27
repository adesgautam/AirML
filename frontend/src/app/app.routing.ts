import {Routes} from '@angular/router';
import {AdminComponent} from './layout/admin/admin.component';
import {AuthComponent} from './layout/auth/auth.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }, {
        path: 'dashboard',
        loadChildren: './pages/dashboard/dashboard-default/dashboard-default.module#DashboardDefaultModule'
      }, {
        path: 'engine1',
        loadChildren: './pages/dashboard/engine1/engine1.module#Engine1Module'
      },
      {
        path: 'engine2',
        loadChildren: './pages/dashboard/engine2/engine2.module#Engine2Module'
      },
      {
        path: 'engine3',
        loadChildren: './pages/dashboard/engine3/engine3.module#Engine3Module'
      },
      {
        path: 'engine4',
        loadChildren: './pages/dashboard/engine4/engine4.module#Engine4Module'
      },
      {
        path: 'engine5',
        loadChildren: './pages/dashboard/engine5/engine5.module#Engine5Module'
      }, {
        path: 'basic',
        loadChildren: './pages/ui-elements/basic/basic.module#BasicModule'
      }, {
        path: 'bootstrap-table',
        loadChildren: './pages/ui-elements/tables/bootstrap-table/basic-bootstrap/basic-bootstrap.module#BasicBootstrapModule',
      }
    ]
  },{
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: './pages/authentication/authentication.module#AuthenticationModule'
      }
    ]
  }
];
