import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { DataService } from './services/data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './Login/Login.component';
import { RegisterComponent } from './Register/Register.component';
import { PollComponent } from './Poll/Poll.component';
import { DashboardComponent } from './Dashboard/Dashboard.component';
import { WelcomeComponent } from './Welcome/Welcome.component';

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      RegisterComponent,
      PollComponent,
      DashboardComponent,
      WelcomeComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule,
      InMemoryWebApiModule.forRoot(DataService)
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
