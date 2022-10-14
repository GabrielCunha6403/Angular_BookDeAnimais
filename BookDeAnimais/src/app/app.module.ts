import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './components/home/home.module';
import { LoginComponent } from './components/home/login/login.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';

@NgModule({
  declarations: [AppComponent, CabecalhoComponent],
  imports: [BrowserModule, HomeModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
