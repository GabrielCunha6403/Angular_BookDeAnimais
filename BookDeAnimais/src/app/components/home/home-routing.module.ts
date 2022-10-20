import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home.component';
import { ListaAnimaisComponent } from 'src/app/components/animais/lista-animais/lista-animais.component';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, children: [
      { path: '', component: LoginComponent },
      { path: 'novo-usuario', component: NovoUsuarioComponent },
    ],
  },
  { path: 'animais', component: ListaAnimaisComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
