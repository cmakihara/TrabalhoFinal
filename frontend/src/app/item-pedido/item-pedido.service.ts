import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ItemPedido } from './item-pedido';

@Injectable()
export class ItemPedidoService {

  private itempedidosUrl = 'http://localhost:4200/api/itempedido';

  constructor(private http: Http) { }

  public addItemPedido(body: Object): Observable<ItemPedido[]> {

    const bodyString = JSON.stringify(body);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.itempedidosUrl, body, options)
      .map((res: Response) => res.json());
  }

  public updateItemPedido(body: Object): Observable<ItemPedido[]> {

    const bodyString = JSON.stringify(body);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.put(`${this.itempedidosUrl}/${body['id']}`, body, options)
      .map((res: Response) => res.json());

  }

  public removeItemPedido(id: number): Observable<ItemPedido[]> {
    return this.http.delete(`${this.itempedidosUrl}/${id}`)
      .map((res: Response) => res.json());
  }

  public loadItemPedido(): Observable<ItemPedido[]> {
    return this.http.get(`${this.itempedidosUrl}`)
      .map((res: Response) => res.json());
  }
  public loadUmItemPedido(id: number): Observable<ItemPedido[]> {
    return this.http.get(`${this.itempedidosUrl}/${id}`)
      .map((res: Response) => res.json());
  }

}
