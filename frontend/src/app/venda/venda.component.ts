import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../agenda/agenda.service';
import { Agenda } from '../agenda/agenda';
import { ProdutoService } from '../produto/produto.service';
import { Produto } from '../produto/produto';
import { TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { PedidoService } from '../pedido/pedido.service';
import { Pedido } from '../pedido/pedido';
import { ItemPedidoService } from '../item-pedido/item-pedido.service';
import { ItemPedido } from '../item-pedido/item-pedido';


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

   public pedidos: Pedido[] = [];
    public qtd_produto = 0;
    public valor_total = 0;
    public contato = '';
    public usuario = '';

    public itempedidos: ItemPedido[] = [];

     public pedido_id_pedido:0;

   listaProduto:Produto[] =[];
   clienteId:string ="";
   agendaSelected: Agenda;
   contadorProduto=0;
   total = 0


   constructor(private agendaService: AgendaService ,private produtoService: ProdutoService , private modalService: BsModalService ,private pedidoService: PedidoService,private itempedidoService: ItemPedidoService) { }

   testar = 0;
   testar2 = 0;
   public ngOnInit() {
     this.carregaTodos();
     this.carregaTodosP();
     this.agendaSelected = new Agenda();
   }
   public openModal(template: TemplateRef<any>) {
     this.modalRef = this.modalService.show(template);
   }
   test(){
     this.testar =this.testar+1;
   }
   test2(){
     this.testar2 =this.testar+1;

   }
   ok(){

       alert("Venda registrada");



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
     let clienteId = id;
     this.agendaService.loadUmAgendas(id)
       .subscribe(res => {
         this.agendaSelected = res;
         console.log(id);

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
         console.log(res);
       },
       err => {
         console.log(err);
       });
   }

   public testPedido(produto): void {
     this.contadorProduto += 1;
     this.listaProduto.push(produto);
     this.total = 0
      for (let i = 0; i < this.listaProduto.length; i++) {
        this.total += parseInt(this.listaProduto[i].valor)
      }



   }
   public salvarPedido(): void {

     console.log('salvar pedido'+this.total);
     const pedido = new Pedido();
     pedido.qtd_produto = this.contadorProduto;
     pedido.valor_total = this.total;
     pedido.contato =this.agendaSelected.nome;
     pedido.usuario = 'vendedor';


     this.pedidoService.addPedido(pedido)
       .subscribe(res => {
         console.log(res);

       },
       err => {

       });
       this.salvarItempedido(this.carregaTodosPed());

   }
   public salvarItempedido(res): void{
     console.log(this.listaProduto[0].nome);
     console.log(res);

     for (let i = 0; i < this.listaProduto.length; i++) {
       const itempedido = new ItemPedido();
       itempedido.nome = this.listaProduto[i].nome;
       itempedido.tipo = this.listaProduto[i].tipo;
       itempedido.quantidade =1
       itempedido.valor =this.listaProduto[i].valor;
       itempedido.seila = this.listaProduto[i].seila;
       itempedido.pedido_id_pedido=2


       this.itempedidoService.addItemPedido(itempedido)
         .subscribe(res => {
           console.log(res);

         },
         err => {

         });
     }


   }
   public carregaTodosPed(): any {
     this.pedidoService.loadPedidos()
       .subscribe(res => {
         this.pedidos = res;
         console.log('foi');
         return res
       },
       err => {
         console.log('err');

       });
   }



  }
