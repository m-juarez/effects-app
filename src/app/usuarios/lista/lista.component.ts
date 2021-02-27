import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(private usuariosService: UsuarioService) { }

  ngOnInit(): void {

    this.usuariosService.getUsers()
        .subscribe( users => {
          console.log(users)
          this.usuarios = users;
        })

  }

}
