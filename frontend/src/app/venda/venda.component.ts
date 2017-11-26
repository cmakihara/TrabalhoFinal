import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../agenda/agenda.service';
import { Agenda } from '../agenda/agenda';
import { ProdutoService } from '../produto/produto.service';
import { Produto } from '../produto/produto';
import { TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';


@Component({
  selector: 'app-venda',
  templateUrl: 'venda.component.html',
})
export class VendaComponent implements OnInit {
  title = 'app';
  public modalRef: BsModalRef;



  public agendas: Agenda[] = [];
   public nome = '';
   public telefone = '';
   public endereco = '';
   public email = '';
   public celular = '';

   public produtos:Produto[] =[];
   public tipo = '';
   public valor = '';
   public quantidade = '';
   public seila = '';





   constructor(private agendaService: AgendaService ,private produtoService: ProdutoService , private modalService: BsModalService ) { }

   testar: boolean = false;
   testar2: boolean = false;
   public ngOnInit() {
     this.carregaTodos();
     this.carregaTodosP();
   }
   public openModal(template: TemplateRef<any>) {
     this.modalRef = this.modalService.show(template);
   }
   test(){
     this.testar =!this.testar;
   }
   test2(){
     this.testar2 =!this.testar2;

   }


   public carregaTodos(): void {
     this.agendaService.loadAgendas()
       .subscribe(res => {
         this.agendas = res;
         console.log('foi');
       },
       err => {
         console.log(err);
       });
   }
   public carregaUm(id: number): void {
     this.agendaService.loadUmAgendas(id)
       .subscribe(res => {
         this.agendas = res;
         console.log('foiUm');
       },
       err => {
         console.log(err);
       });
   }
   public carregaTodosP(): void {
     this.produtoService.loadProduto()
       .subscribe(res => {
         this.produtos = res;
         console.log('foi');
       },
       err => {
         console.log(err);
       });
   }

   public carregaUmProduto(id: number): void {
     this.produtoService.loadUmProdutos(id)
       .subscribe(res => {
         this.produtos = res;
         console.log('foiUm');
       },
       err => {
         console.log(err);
       });
   }



  }
