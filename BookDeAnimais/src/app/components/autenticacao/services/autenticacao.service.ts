import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { Usuario } from '../usuario/usuario';
import { EmailValidator } from '@angular/forms';
import { environment } from 'src/environments/environment';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  usuarioService: any;
  constructor(private httpClient: HttpClient) {}

  validarUsuario(usuario: String, senha: String): Observable<HttpResponse<any>> {
    let subject: Subject<any> = new Subject();
    this.httpClient.get(`${API}/users`).subscribe((res) => {
      let usuarios: Usuario[] = [];
      usuarios = res as Usuario[];
      for (let user of usuarios) {
        if (usuario === user.usuario && senha === user.senha) {
          subject.next(
            this.httpClient.post(`${API}/usuarioLogado`, {
              usuario: user.usuario,
              senha: user.senha,
              email: user.email,
              id: user.id,
            })
          );
          console.log('Logado com sucesso');
          return;
        }
      }
      subject.next('undefined');
      return;
    });
    return subject.asObservable();
  }
}
