import { Injectable, Inject, EventEmitter} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { category } from '../model/category.model';
import { environment } from '../../environments/environment';

@Injectable()
export class StudyPlanService {
  private categoryList: category[] = new Array<category>();
  private category: category = new category();
  private header; 
  private user:string;
  constructor(private http: HttpClient) {
    this.user = localStorage.getItem('currentUser');
    console.log(this.user);
    this.header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.user,
    });
  }

  //Metodo para obtener el listado de categorias de la base de datos
  getAllCategories(user:string): category[] {
    this.http.get<category[]>(`${environment.apiUrl}/category/`, { headers: this.header })
      .subscribe((data) => { console.log(data.values());
                        this.categoryList = data;
      });
    return this.categoryList;
  }
  
  getCategoryById(categoryId: string): Observable<category> {
    return this.http.get<category>(`${environment.apiUrl}/category/` + categoryId,
    { headers: this.header });
  }

  //getCourseById(courseId: string): Observable<Course>{
  //  return this.http.get<Course>(`${environment.apiUrl}/category/curso/` + courseId,
  //  { headers: this.header });
  //}

  //getEmphasisByStudyPlanCode(studyPlanCode: string): Observable<Emphasis[]> {
  //  return this.http.get<Emphasis[]>(`${environment.apiUrl}/plandeestudios/emphasis/` + studyPlanCode,
  //  { headers: this.header });
  //}

}