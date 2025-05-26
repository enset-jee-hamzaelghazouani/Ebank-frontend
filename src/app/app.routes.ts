import { Routes } from '@angular/router';
import { BaseComponent } from './layout/base/base.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { authGuard, outGuard } from './core/guard/auth.guard';
import { HomeComponent } from './dashboard/home/home.component';
import { DashbordComponent } from './layout/dashbord/dashbord.component';
import { CustomerComponent } from './dashboard/customer/customer.component';
import { AccountComponent } from './dashboard/account/account.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashbordComponent,
    canActivateChild: [authGuard],
    children: [
      { path: '', component: HomeComponent },
      { path: 'account', component: AccountComponent },
      {path:'customer', component: CustomerComponent}
    ],
  },
  { path: 'auth', component: BaseComponent, canActivate: [outGuard], children:[
      {path: 'login', component: LoginComponent },
      {path: 'register', component: RegisterComponent }
  ] },
  {path: 'register', canActivate: [outGuard], component: RegisterComponent},
  {path:"**", redirectTo: 'auth/login', pathMatch: 'full' }
];
