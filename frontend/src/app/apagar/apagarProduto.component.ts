import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto/produto.service';
import { Produto } from '../produto/produto';


@Component({
  selector: 'app-apagarProduto',
  templateUrl: 'apagarProduto.component.html',
})
export class ApagarProdutoComponent implements OnInit {
  public produtos: Produto[] = [];
   public nome = '';
   public telefone = '';
   public endereco = '';
   public email = '';
   public celular = '';

   constructor(private produtoService: ProdutoService) { }

   public ngOnInit() {
     this.carregaTodos();
   }

   sucess(){
     alert("Cadastro deletado");
   }



   public apagarProduto(id_produto: number): void {
     this.produtoService.removeProduto(id_produto)
       .subscribe(res => {
         console.log(res);
         this.carregaTodos();
       },
       err => {
         this.carregaTodos();
       });
   }

   public carregaTodos(): void {
     this.produtoService.loadProduto()
       .subscribe(res => {
         this.produtos = res;
         console.log('foi');
       },
       err => {
         console.log(err);
       });
   }



  }
