import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from 'src/app/components/pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [HomeComponent, LoginComponent],
  imports: [CommonModule, HomeRoutingModule, FormsModule],
  exports: [HomeComponent, LoginComponent],
})
export class HomeModule {}
