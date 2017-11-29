import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Pedido } from './pedido';

@Injectable()
export class PedidoService {

  private pedidosUrl = 'http://localhost:4200/api/pedido';

  constructor(private http: Http) { }

  public addPedido(body: Object): Observable<Pedido[]> {

    const bodyString = JSON.stringify(body);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.pedidosUrl, body, options)
      .map((res: Response) => res.json());
  }

  public updatePedido(body: Object): Observable<Pedido[]> {

    const bodyString = JSON.stringify(body);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.put(`${this.pedidosUrl}/${body['id']}`, body, options)
      .map((res: Response) => res.json());

  }

  public removePedido(id: number): Observable<Pedido[]> {
    return this.http.delete(`${this.pedidosUrl}/${id}`)
      .map((res: Response) => res.json());
  }

  public loadPedidos(): Observable<Pedido[]> {
    return this.http.get(`${this.pedidosUrl}`)
      .map((res: Response) => res.json());
  }
  public loadUmPedidos(id: number): Observable<Pedido[]> {
    return this.http.get(`${this.pedidosUrl}/${id}`)
      .map((res: Response) => res.json());
  }

}
