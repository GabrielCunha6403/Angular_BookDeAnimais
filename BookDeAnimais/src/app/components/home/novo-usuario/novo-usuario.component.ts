import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  interval,
  mergeMap,
  Observable,
  OperatorFunction,
  pipe,
  retry,
  retryWhen,
  take,
  throwError,
} from 'rxjs';
import { UsuarioExistenteService } from '../usuario-existente.service';
import { minusculo } from './minusculo';
import { NovoUsuario } from './novo-usuario';
import { NovoUsuarioService } from './novo-usuario.service';

/*const isServerError = (err: HttpErrorResponse) => err.status >= 500;
function repetidorDeSubscribes() {
  let contadorDeSubscribes = 5;
  pipe(retryWhen(errors => {
      return errors.pipe(
        mergeMap((err) => {
          if (isServerError(err) && contadorDeSubscribes > 0) {
            contadorDeSubscribes--;
            return interval(2000).pipe(take(1));
          }
          return throwError(err);
        })
      );
    })
  );
};*/

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
})
export class NovoUsuarioComponent implements OnInit {
  novoUsuarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private novoUsuarioService: NovoUsuarioService,
    private usuarioExistente: UsuarioExistenteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      usuario: [
        '',
        [Validators.required, Validators.minLength(4), minusculo],
        [this.usuarioExistente.usuarioJaExiste()],
      ],
      confirmPassword: [''],
      password: [''],
    });
  }

  cadastrarUsuario(): void {
    if (this.novoUsuarioForm.valid) {
      const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
      this.novoUsuarioService.cadastrarNovoUsuario(novoUsuario)./*pipe(repetidorDeSubscribes()).*/subscribe(
        () => {
          this.router.navigate(['']);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
