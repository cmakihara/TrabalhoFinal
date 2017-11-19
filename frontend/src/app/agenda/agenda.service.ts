import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Agenda } from './agenda';

@Injectable()
export class AgendaService {

  private agendasUrl = 'http://localhost:4200/api/agenda';

  constructor(private http: Http) { }

  public addAgenda(body: Object): Observable<Agenda[]> {

    const bodyString = JSON.stringify(body);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.agendasUrl, body, options)
      .map((res: Response) => res.json());
  }

  public updateAgenda(body: Object): Observable<Agenda[]> {

    const bodyString = JSON.stringify(body);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.put(`${this.agendasUrl}/${body['id']}`, body, options)
      .map((res: Response) => res.json());

  }

  public removeAgenda(id: number): Observable<Agenda[]> {
    return this.http.delete(`${this.agendasUrl}/${id}`)
      .map((res: Response) => res.json());
  }

  public loadAgendas(): Observable<Agenda[]> {
    return this.http.get(`${this.agendasUrl}`)
      .map((res: Response) => res.json());
  }
  public loadUmAgendas(id: number): Observable<Agenda[]> {
    return this.http.get(`${this.agendasUrl}/${id}`)
      .map((res: Response) => res.json());
  }

}
