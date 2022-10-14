import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs';
import { NovoUsuarioService } from './novo-usuario/novo-usuario.service';

@Injectable({
  providedIn: 'root',
})
export class UsuarioExistenteService {
  constructor(private novoUsuarioService: NovoUsuarioService) {}

  usuarioJaExiste() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((nomeDoUsuario) =>
          this.novoUsuarioService.verificarSeUsuarioExiste(nomeDoUsuario)
        ),
        map((existe) => (existe ? { usuarioExiste: true } : null)),
        first()
      );
    };
  }
}
