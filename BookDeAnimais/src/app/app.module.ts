import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './components/home/home.module';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { AnimalComponent } from './components/animais/animal/animal.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, CabecalhoComponent, AnimalComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HomeModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
