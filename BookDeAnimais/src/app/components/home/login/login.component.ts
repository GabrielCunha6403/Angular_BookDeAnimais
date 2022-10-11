import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/components/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario: string = '';
  senha: string = '';

  constructor(private servicoDeAutenticacao: AutenticacaoService, private router: Router) {}

  ngOnInit(): void {}

  login(): void {
    this.servicoDeAutenticacao.validarUsuario(this.usuario, this.senha).subscribe(() => {
      this.router.navigate(['animais'])
    }, (error) => {
      alert("Usuário ou senha inválido");
      console.log(error)
    });
  }
}
