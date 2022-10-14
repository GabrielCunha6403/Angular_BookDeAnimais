import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { Usuario } from './usuario';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarioSubject = new BehaviorSubject<Usuario>({});

  constructor(private tokenService: TokenService) {
    if(this.tokenService.possuiToken()){
      this.decodificarJWT();
    }
  }

  private decodificarJWT(): void{
    const token = this.tokenService.retornarToken();
    const usuario = jwt_decode(token) as Usuario;
    this.usuarioSubject.next(usuario);
  }

  retornaUsuario(): Observable<Usuario> {
    return this.usuarioSubject.asObservable();
  }

  salvaToken(token: string): void{
    this.tokenService.salvarToken(token);
    this.decodificarJWT();
  }

  logout(): void{
    this.tokenService.excluirToken();
    this.usuarioSubject.next({});
  }

  estaLogado(): boolean{
    return this.tokenService.possuiToken();
  }
}

