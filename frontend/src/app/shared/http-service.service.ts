import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) {

  }

  getArticle() {
    return this.http.get(`http://localhost:1337/api/categories/`)
  }
  deleteArticle(id:number) {
    return this.http.delete(`http://localhost:1337/api/categories/${id}/`)
  }
}
