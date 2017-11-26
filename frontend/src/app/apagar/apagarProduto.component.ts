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



   public apagarProduto(id: number): void {
     this.produtoService.removeProduto(id)
       .subscribe(res => {
         console.log(res);
         this.carregaTodos();
       },
       err => {
         console.log(err);
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
