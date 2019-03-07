import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

import {IPostDataModel} from '../models/PostDataModel';

@Injectable(
  //{  providedIn: 'root'}
  )
export class DataService {
         
  constructor(
    private http: HttpClient
  ) { }

  saveEmployee(data: IPostDataModel): Observable<string> {
    let serviceUrl: string = `${environment.serviceBaseUrl}/data/save`;
    return this.http.post(serviceUrl, data, {responseType: 'text'})
      .map((rslt: string) => {
        return rslt;
      });
  }

  getEmployeeLookupData(): Observable<string> {
    let serviceUrl: string = `${environment.serviceBaseUrl}/data/GetEmployeeLookupData`;
    return this.http.get(serviceUrl, {responseType: 'json'})
      .map((rslt: string) =>{
        return rslt;
      });
  }
  getAllEmployees(): Observable<string> {
    let serviceUrl: string = `${environment.serviceBaseUrl}/data/GetAllEmployee`;
    return this.http.get(serviceUrl, {responseType: 'json'})
      .map((rslt: string) =>{
        return rslt;
      });
  }

  getOpenPositions(): Observable<string> {
    let serviceUrl: string = `${environment.serviceBaseUrl}/data/GetJobOpening`;
    return this.http.get(serviceUrl, {responseType: 'json'})
      .map((rslt: string) =>{
        return rslt;
      });
  }

}
