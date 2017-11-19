import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../agenda/agenda.service';
import { Agenda } from '../agenda/agenda';

@Component({
  selector: 'app-add',
  templateUrl: 'add.component.html',
})
export class AddComponent implements OnInit {
  public agendas: Agenda[] = [];
   public nome = '';
   public telefone = '';
   public endereco = '';
   public email = '';
   public celular = '';

   constructor(private agendaService: AgendaService) { }

   public ngOnInit() {

   }
   sucess(){
     alert("Cadastro salvo");

   }


   public salvarAgenda(): void {
     console.log('oi');

     const agenda = new Agenda();
     agenda.nome = this.nome;
     agenda.telefone = this.telefone;
     agenda.endereco = this.endereco;
     agenda.email = this.email;
     agenda.celular = this.celular;

     this.agendaService.addAgenda(agenda)
       .subscribe(res => {
         console.log(res);

       },
       err => {
         console.log(err);
       });

   }





  }
