import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  usuarioService: any;
  constructor(private httpClient: HttpClient) {}

  validarUsuario (usuario: String,senha: String): Observable<HttpResponse<any>> {
    let subject: Subject<any> = new Subject();
    this.httpClient.get('http://localhost:3000/user').subscribe((res) => {
      let usuarios: Usuario[] = [];
      usuarios = res as Usuario[];
      for(let user of usuarios){
        if (usuario === user.name && senha === user.password) {
          this.httpClient.post('http://localhost:3000/user',{
            email: 
          })
        }
      }
    });
    return subject;
  }
}
