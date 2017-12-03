import { Component, OnInit } from '@angular/core';
import { ItemPedidoService } from '../item-pedido/item-pedido.service';
import { ItemPedido } from '../item-pedido/item-pedido';
import { TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-item-pedido',
  templateUrl: './item-pedido.component.html',

})
export class ItemPedidoComponent implements OnInit {
  title = 'app';
  public modalRef: BsModalRef;

  public itempedidos: ItemPedido[] = [];
   public nome = '';
   public tipo = '';
   public valor = '';
   public quantidade = 0;
   public seila = '';
   public pedido_id_pedido:0;

   constructor(private itempedidoService: ItemPedidoService,private modalService: BsModalService ) { }

   public ngOnInit() {

   }
   public openModal(template: TemplateRef<any>) {
     this.modalRef = this.modalService.show(template);
   }
   sucess(){
     alert("Cadastro salvo");

   }


   public salvarItemPedido(): void {
     console.log('oi');

     const itempedido = new ItemPedido();
     itempedido.nome = this.nome;
     itempedido.tipo = this.tipo;
     itempedido.valor = this.valor;
     itempedido.quantidade = this.quantidade;
     itempedido.seila = this.seila;
     itempedido.pedido_id_pedido = this.pedido_id_pedido;

     this.itempedidoService.addItemPedido(itempedido)
       .subscribe(res => {
         console.log(res);

       },
       err => {
         console.log(err);
       });

   }
   public carregaTodos(): void {
     this.itempedidoService.loadItemPedido()
       .subscribe(res => {
         this.itempedidos = res;
         console.log('itemPedido');
       },
       err => {
         console.log(err);
       });
   }





  }
