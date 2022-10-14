import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  usuarioService: any;
  constructor(private httpClient: HttpClient) {}

  validarUsuario(
    usuario: String,
    senha: String
  ): Observable<HttpResponse<any>> {
    return this.httpClient
      .post(
        'http://localhost:3000/user/login',
        {
          userName: usuario,
          password: senha,
        },
        {
          observe: 'response',
        }
      )
      .pipe(
        tap((res) => {
          const authToken = res.headers.get('x-access-token') ?? '';
          this.usuarioService.salvarToken(authToken);
        })
      );
  }
}
