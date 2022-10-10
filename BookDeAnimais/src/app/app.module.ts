import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './components/pages/home/home.module';
import { LoginComponent } from './components/pages/home/login/login.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HomeModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
