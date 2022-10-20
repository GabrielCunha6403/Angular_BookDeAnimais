import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../autenticacao/usuario/usuario.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css'],
})
export class CabecalhoComponent implements OnInit {
  usuario = this.usuarioService.retornaUsuarioObservable();

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit(): void {}

  logout(): void {
    this.usuarioService.deleteKey('usuarioLogado');
    this.router.navigate(['']);
  }
}
