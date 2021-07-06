import { Injectable, Inject, EventEmitter} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { company } from '../model/company.model';

@Injectable()
export class CompanyService {

  private url = 'http://localhost:8086/bawo/api/company/';

  constructor(private http: HttpClient) {
  }

  getAllCompanies(): Observable<company[]> {
    const url:string = this.url + "view/AllCompanies";
    return this.http.get<company[]>(url);
    console.log(url);
  }

 
  getCompanyInfo(): Observable<company> {
    const url:string = this.url + "view/AllCompanies";
    return this.http.get<company>(url);
  }

}