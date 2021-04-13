import { Injectable, Inject, EventEmitter} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { category } from '../model/category.model';

@Injectable()
export class CategoryService {

  private url = 'http://localhost:8086/bawo/api/category/';

  constructor(private http: HttpClient) {
  }

  getAllCompanies(): Observable<category[]> {
    const url:string = this.url + "view/AllCategories";
    return this.http.get<category[]>(url);
    console.log(url);
  }

}