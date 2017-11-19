import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto/produto.service';
import { Produto } from '../produto/produto';

@Component({
  selector: 'app-produto',
  templateUrl: 'produto.component.html',
})
export class ProdutoComponent implements OnInit {
  public produtos: Produto[] = [];
   public nome = '';
   public tipo = '';
   public valor = '';
   public quantidade = '';
   public seila = '';

   constructor(private produtoService: ProdutoService) { }

   public ngOnInit() {

   }
   sucess(){
     alert("Cadastro salvo");

   }


   public salvarProduto(): void {
     console.log('oi');

     const produto = new Produto();
     produto.nome = this.nome;
     produto.tipo = this.tipo;
     produto.valor = this.valor;
     produto.quantidade = this.quantidade;
     produto.seila = this.seila;

     this.produtoService.addProduto(produto)
       .subscribe(res => {
         console.log(res);

       },
       err => {
         console.log(err);
       });

   }





  }
