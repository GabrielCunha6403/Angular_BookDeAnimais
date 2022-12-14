import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from '../../autenticacao/token.service';
import { Animais } from '../animal';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  constructor(private httpClient: HttpClient, private tokenService: TokenService) {}

  listaDoUsuario(nomeDoUsuario: string): Observable<Animais> {
    const token = this.tokenService.retornarToken();
    const headers = new HttpHeaders().append('x-access-token', token);
    return this.httpClient.get<Animais>(`${API}/${nomeDoUsuario}/photos`, {
      headers
    });
  }
}
