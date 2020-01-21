import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule}from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TopNavComponent } from './layout/nav/top-nav/top-nav.component';
import { FooterComponent } from './layout/footer/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {Error404Component}from './shared/error404/error404.component';
import {AuthGuard} from './shared/helpers/canActivateAuthGuard';
import {Helpers} from './shared/helpers/helpers';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import {TokenService} from './services/token.service';
import {AppConfig} from './config/config';


@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    FooterComponent,
    DashboardComponent,
    Error404Component,
    LoginComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatInputModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatCardModule,
    AppRoutingModule
  ],
  providers: [TokenService,AuthGuard,Helpers,AppConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
