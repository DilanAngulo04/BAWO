import { Injectable, Inject, EventEmitter} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Product } from '../model/product.model';

@Injectable()
export class ProductService {

  private url = 'http://localhost:8086/bawo/api/product';

  constructor(private http: HttpClient) {
  }

  getAllProducts(): Observable<Product[]> {
    const url:string = this.url + "/view/allProducts";
    return this.http.get<Product[]>(url);
    console.log(url);
  }

  getProductById(productId: string): Observable<Product> {
    return this.http.get<Product>(this.url + productId);
  }


}