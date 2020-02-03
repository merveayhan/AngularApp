import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CaseService {
    http: any;

  constructor(private httpClient: HttpClient) { }
  httpData;

  public getDatas() {
    this.http.get("https://jsonplaceholder.typicode.com/todos")
    .pipe(map((response:any) => response.json()))
    .subscribe(data => this.httpData = data);
     
  }

}



