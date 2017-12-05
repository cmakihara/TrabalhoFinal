import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../pedido/pedido.service';
import { Pedido } from '../pedido/pedido'

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {


    public pedidos: Pedido[] = [];
     public qtd_produto = 0;
     public valor_total = 0;
     public contato ='';
     public usuario = '';


   constructor(private pedidoService: PedidoService) { }

   public ngOnInit() {

   }
   sucess(){
     alert("Cadastro salvo");

   }



   public salvarPedido(): void {
     console.log('oi');

     const pedido = new Pedido();
     pedido.qtd_produto = this.qtd_produto;
     pedido.valor_total = this.valor_total;
     pedido.contato = this.contato;
     pedido.usuario = this.usuario;



     this.pedidoService.addPedido(pedido)
       .subscribe(res => {
         console.log(res);

       },
       err => {
         console.log(err);
       });

   }





  }
