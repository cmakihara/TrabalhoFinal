import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';
import { Usuario } from '../usuario/usuario';


@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
})
export class LoginComponent implements OnInit {
  public usuarios: Usuario[] = [];
   public nome = '';
   public telefone = '';
   public endereco = '';
   public email = '';
   public tipoUser = '';
   public senha = '';

  
  constructor(private usuarioService: UsuarioService) {  }

  public ngOnInit() {
    this.carregaTodos();

  }

  sucess(){
    alert("Cadastro deletado");
  }



  public carregaTodos(): void {
    this.usuarioService.loadUsuarios()
      .subscribe(res => {
        this.usuarios = res;


      },
      err => {
        console.log(err);
      });
  }



  }
