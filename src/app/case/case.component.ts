import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { CaseService } from '../case/case.service';
import { map } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';
import 'rxjs/add/operator/map'
import * as _ from 'lodash';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css'],
  providers: [CaseService]
})
export class CaseComponent implements OnInit {
  httpData;
 
  constructor(private httpClient: HttpClient,private caseService: CaseService) {
 
  }

  ngOnInit() {
    this.caseService.getDatas()
    _.subscribe((data) => this.displaydata(data));
  }

 
    displaydata(data) {
    data = _.filter(data.structuredData.lastMonth, function(f) {
        return f.completed == "true";

    });


    this.httpData = data;
}
  
 
}
