import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';
import { Usuario } from '../usuario/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',

})
export class UsuarioComponent implements OnInit {

  public usuario: Usuario[] = [];
   public nome = '';
   public telefone = '';
   public endereco = '';
   public email = '';
   public tipoUser = '';
   public senha = '';


   constructor(private usuarioService: UsuarioService) { }

   public ngOnInit() {

   }
   sucess(){
     alert("Cadastro salvo");

   }


   public salvarUsuario(): void {
     console.log('oi');

     const usuario = new Usuario();
     usuario.nome = this.nome;
     usuario.telefone = this.telefone;
     usuario.endereco = this.endereco;
     usuario.email = this.email;
     usuario.tipoUser = this.tipoUser;
     usuario.senha = this.senha;


     this.usuarioService.addUsuario(usuario)
       .subscribe(res => {
         console.log(res);

       },
       err => {
         console.log(err);
       });

   }





  }
