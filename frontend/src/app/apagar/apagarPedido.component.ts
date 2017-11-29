import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../pedido/pedido.service';
import { Pedido } from '../pedido/pedido';


@Component({
  selector: 'app-apagarPedido',
  templateUrl: 'apagarPedido.component.html',
})
export class ApagarPedidoComponent implements OnInit {
  public pedidos: Pedido[] = [];
   public qtd_produto = '';
   public valor_total = '';
   public contato_id_contato = '';
   public usuario_id_usuario = '';


   constructor(private pedidoService: PedidoService) { }

   public ngOnInit() {
     this.carregaTodos();
   }

   sucess(){
     alert("Cadastro deletado");
   }



   public apagarPedido(id: number): void {
     this.pedidoService.removePedido(id)
       .subscribe(res => {
         console.log(res);
         this.carregaTodos();
       },
       err => {
         console.log(err);
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



  }
