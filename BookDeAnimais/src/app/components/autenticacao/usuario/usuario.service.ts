import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
import { TokenService } from '../token.service';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private usuarioSubject = new BehaviorSubject<Usuario>({});

  constructor(private tokenService: TokenService) {
    /*if(this.tokenService.possuiToken()){
      this.decodificarJWT();
    }*/
  }

  /*private decodificarJWT(): void{
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
    this.usuarioSubject.unsubscribe()
  }

  estaLogado(): boolean{
    return this.tokenService.possuiToken();
  }*/

  adicionarToken(key: string, valor: object): void {
    const valorASerAdicionado = JSON.stringify(valor);
    this.usuarioSubject.next(valor);
    localStorage.setItem(key, valorASerAdicionado);
  }

  getLocalStorageByKey(key: string): Object {
    return JSON.parse(localStorage.getItem(key) ?? '');
  }

  retornaUsuarioObservable(): Observable<any> {
    return this.usuarioSubject.asObservable();
  }

  deleteKey(key: string): void {
    this.usuarioSubject.next({});
    localStorage.removeItem(key);
  }

  estaLogado(key: string): boolean {
    return !!this.getLocalStorageByKey(key);
  }
}

