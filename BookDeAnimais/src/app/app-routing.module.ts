import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/home/login/login.component';

const routes: Routes = [{ path: '**', pathMatch: 'full', redirectTo: 'home' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
