import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Login/Login.component';
import { RegisterComponent } from './Register/Register.component';
import { PollComponent } from './Poll/Poll.component';
import { DashboardComponent } from './Dashboard/Dashboard.component';

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      RegisterComponent,
      PollComponent,
      DashboardComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
