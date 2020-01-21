import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {Error404Component} from './shared/error404/error404.component';
import { LoginComponent } from './components/login/login.component';
import {UserComponent} from './components/user/user.component';
import { AuthGuard } from './shared/helpers/canActivateAuthGuard';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full',canActivate: [AuthGuard]},
  {path: '', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'user', component: UserComponent ,canActivate: [AuthGuard] },
  {path: '404', component: Error404Component},
  {path: '**', redirectTo: '404' }

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes ,{ useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

 }
