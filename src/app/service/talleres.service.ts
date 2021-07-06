import { Injectable, Inject, EventEmitter} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Talleres } from '../model/talleres.model';

@Injectable()
export class TalleresService {

  private url = 'http://localhost:8086/bawo/api/talleres';

  constructor(private http: HttpClient) {
  }

  getAllTalleres(): Observable<Talleres[]> {
    const url:string = this.url + "/view/allTalleres";
    return this.http.get<Talleres[]>(url);
    console.log(url);
  }

 

}