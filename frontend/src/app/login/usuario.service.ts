import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Usuario } from './usuario';

@Injectable()
export class UsuarioService {

  private usuariosUrl = 'http://localhost:4200/api/usuario';

  constructor(private http: Http) { }

  public addUsuario(body: Object): Observable<Usuario[]> {

    const bodyString = JSON.stringify(body);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.usuariosUrl, body, options)
      .map((res: Response) => res.json());
  }

  public updateUsuario(body: Object): Observable<Usuario[]> {

    const bodyString = JSON.stringify(body);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.put(`${this.usuariosUrl}/${body['id']}`, body, options)
      .map((res: Response) => res.json());

  }

  public removeUsuario(id: number): Observable<Usuario[]> {
    return this.http.delete(`${this.usuariosUrl}/${id}`)
      .map((res: Response) => res.json());
  }

  public loadUsuarios(): Observable<Usuario[]> {
    return this.http.get(`${this.usuariosUrl}`)
      .map((res: Response) => res.json());
  }

}
