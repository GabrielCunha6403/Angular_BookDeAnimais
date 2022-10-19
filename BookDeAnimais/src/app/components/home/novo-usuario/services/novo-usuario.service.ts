import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NovoUsuario } from '../novo-usuario';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class NovoUsuarioService {
  constructor(private httpClient: HttpClient) {}

  cadastrarNovoUsuario(novoUsuario: NovoUsuario): Observable<any> {
    return this.httpClient.post(`${API}/users/`, novoUsuario);
  }

  verificarSeUsuarioExiste(nomeDoUsuario: string) {
    return this.httpClient.get(`${API}/users/${nomeDoUsuario}/`);
  }
}
