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
  take,
  throwError,
} from 'rxjs';
import { UsuarioExistenteService } from '../usuario-existente.service';
import { minusculo } from './minusculo';
import { NovoUsuario } from './novo-usuario';
import { NovoUsuarioService } from './novo-usuario.service';

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
    if (!this.novoUsuarioForm.valid) {
      const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
      this.novoUsuarioService.cadastrarNovoUsuario(novoUsuario).subscribe(
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
