import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../../autenticacao/services/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario: string = '';
  senha: string = '';

  toggle: boolean = true;

  @Output() enviarToggle = new EventEmitter<boolean>();

  constructor(
    private servicoDeAutenticacao: AutenticacaoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.toggle);
  }

  enviarToggleLogin() {
    this.toggle = !this.toggle;
    console.log(this.toggle);
    this.enviarToggle.emit(this.toggle);
  }

  login(): void {
    console.log(this.usuario);
    console.log(this.senha);
    this.servicoDeAutenticacao
      .validarUsuario(this.usuario, this.senha)
      .subscribe(
        (req) => {
          console.log(req);
          this.router.navigate(['animais']);
        },
        (error) => {
          alert('Usuário ou senha inválido');
          console.log(error);
        }
      );
  }
}
