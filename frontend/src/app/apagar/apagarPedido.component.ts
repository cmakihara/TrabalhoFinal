import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../pedido/pedido.service';
import { Pedido } from '../pedido/pedido';
import { ItemPedidoService } from '../item-pedido/item-pedido.service';
import { ItemPedido } from '../item-pedido/item-pedido';
import { TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';


@Component({
  selector: 'app-apagarPedido',
  templateUrl: 'apagarPedido.component.html',
})
export class ApagarPedidoComponent implements OnInit {
  title = 'app';
  public modalRef: BsModalRef;

  public itempedidos: ItemPedido[] = [];
   public nome = '';
   public tipo = '';
   public valor = '';
   public quantidade = 0;
   public seila = '';
   public pedido_id_pedido:0;

  public pedidos: Pedido[] = [];
   public qtd_produto = '';
   public valor_total = '';
   public contato_id_contato = '';
   public usuario_id_usuario = '';


   constructor(private pedidoService: PedidoService,private itempedidoService: ItemPedidoService,private modalService: BsModalService) { }

   public ngOnInit() {
     this.carregaTodos();
   }

   sucess(){
     alert("Cadastro deletado");
   }
   public openModal(template: TemplateRef<any>) {
     this.modalRef = this.modalService.show(template);
   }



   public apagarPedido(id_pedido: number): void {
     this.pedidoService.removePedido(id_pedido)
       .subscribe(res => {
         console.log(res);
         this.carregaTodos();
       },
       err => {
        this.carregaTodos();
       });
   }

   public carregaTodos(): void {
     this.pedidoService.loadPedidos()
       .subscribe(res => {
         this.pedidos = res;
         console.log('foi');
       },
       err => {
         console.log(err);
       });
   }
   public carregaTodosItems(): void {
     this.itempedidoService.loadItemPedido()
       .subscribe(res => {
         this.itempedidos = res;
         console.log('itemPedido');
       },
       err => {
         console.log(err);
       });
   }
   public carregaTodosItemsPed(id_pedido:number): void {
     this.itempedidoService.loadUmItemPedido(id_pedido)
       .subscribe(res => {
         this.itempedidos = res;
         console.log('itemPedido');
       },
       err => {
         console.log(err);
       });
   }


  }
