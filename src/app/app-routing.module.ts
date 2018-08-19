import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NgxAuthComponent } from './@theme/components/auth/auth.component';
import { NgxAuthBlockComponent } from './@theme/components/auth/auth-block/auth-block.component';
import { NgxLoginComponent } from './@theme/components/auth/login/login.component';
import { NgxRegisterComponent } from './@theme/components/auth/register/register.component';
import { NgxLogoutComponent } from './@theme/components/auth/logout/logout.component';
import { NgxRequestPasswordComponent } from './@theme/components/auth/request-password/request-password.component';
import { NgxResetPasswordComponent } from './@theme/components/auth/reset-password/reset-password.component';


const routes: Routes = [
  { path: '', loadChildren: 'app/pages/pages.module#PagesModule' },
  {
    path: 'auth',
    component: NgxAuthComponent,
    children: [
      {
        path: '',
        component: NgxLoginComponent,
      },
      {
        path: 'login',
        component: NgxLoginComponent,
      },
      {
        path: 'register',
        component: NgxRegisterComponent,
      },
      {
        path: 'logout',
        component: NgxLogoutComponent,
      },
      {
        path: 'request-password',
        component: NgxRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NgxResetPasswordComponent,
      },
    ],
  },
  // { path: '', redirectTo: 'pages', pathMatch: 'full' },
  // { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
