import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Produto } from './produto';

@Injectable()
export class ProdutoService {

  private produtosUrl = 'http://localhost:4200/api/produto';

  constructor(private http: Http) { }

  public addProduto(body: Object): Observable<Produto[]> {

    const bodyString = JSON.stringify(body);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.produtosUrl, body, options)
      .map((res: Response) => res.json());
  }

  public updateProduto(body: Object): Observable<Produto[]> {

    const bodyString = JSON.stringify(body);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.put(`${this.produtosUrl}/${body['id']}`, body, options)
      .map((res: Response) => res.json());

  }

  public removeProduto(id: number): Observable<Produto[]> {
    return this.http.delete(`${this.produtosUrl}/${id}`)
      .map((res: Response) => res.json());
  }

  public loadProduto(): Observable<Produto[]> {
    return this.http.get(`${this.produtosUrl}`)
      .map((res: Response) => res.json());
  }
  public loadUmProdutos(id: number): Observable<Produto[]> {
    return this.http.get(`${this.produtosUrl}/${id}`)
      .map((res: Response) => res.json());
  }

}
