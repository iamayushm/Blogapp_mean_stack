import { Injectable } from '@angular/core';
import { WebService } from './web.service';

import {HttpClient} from "@angular/common/http"


@Injectable({
  providedIn: 'root'
})
export class ListviewService {


readonly url = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }


  getLists() {
    return this.http.get(this.url);
  }
  post(data: any) {
    return this.http.post(this.url, data);
  }
  put(_id: string, data: any) {
    return this.http.put(this.url + `${_id}`, data);
  }
  delete(_id: string) {
    return this.http.delete(this.url + `${_id}`);
  }
  getList(_id: string) {
    return this.http.get(this.url + `${_id}`);
  }


}




