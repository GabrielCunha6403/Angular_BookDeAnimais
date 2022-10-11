import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NovoUsuario } from './novo-usuario';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(private httpClient: HttpClient) { }

  cadastrarNovoUsuario(novoUsuario: NovoUsuario): Observable<any> {
    return this.httpClient.post('http://localhost:3000/user/singup', novoUsuario);
  }
}
