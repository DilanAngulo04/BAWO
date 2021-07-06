import { Injectable, Inject, EventEmitter} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Image } from '../model/image.model';

@Injectable()
export class ImageService {

  private url = 'http://localhost:8086/bawo/api/image/';

  constructor(private http: HttpClient) {
  }

  getAllImages(): Observable<Image[]> {
    const url:string = this.url + "view/AllImages";
    return this.http.get<Image[]>(url);
  }

  getImageById(imageId: string): Observable<Image> {
    return this.http.get<Image>(this.url + "/image/findById/" + imageId);
  }

}