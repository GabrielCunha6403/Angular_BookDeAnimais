import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioExistenteService } from '../usuario-existente.service';
import { minusculo } from '../../../util/minusculo';
import { NovoUsuario } from './novo-usuario';
import { NovoUsuarioService } from './services/novo-usuario.service';
import strongPassword from 'src/app/util/strongPassword';
import { confirmPassword } from 'src/app/util/confirmPassword';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
})
export class NovoUsuarioComponent implements OnInit {
  novoUsuarioForm!: FormGroup;

  toggle: boolean = false;

  @Output() enviarToggle = new EventEmitter<boolean>();

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
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20),
          minusculo,
        ],
        [this.usuarioExistente.usuarioJaExiste()],
      ],
      confirmPassword: ['', [confirmPassword]],
      password: ['', [strongPassword]],
    });
  }

  enviarToggleLogin() {
    this.toggle = !this.toggle;
    this.enviarToggle.emit(this.toggle);
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
