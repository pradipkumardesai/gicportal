import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

import { IPostDataModel } from '../models/PostDataModel';
import { AchievementModel } from '../models/AchievementModel';
import { EmployeeModel } from '../models/EmployeeModel';
import { LookupDataModel } from '../models/LookupDataModel';
import { CommiteeModel } from '../models/CommiteeModel';

@Injectable(
  //{  providedIn: 'root'}
)
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  saveEmployee(data: IPostDataModel): Observable<string> {
    let serviceUrl: string = `${environment.serviceBaseUrl}/data/save`;
    return this.http.post(serviceUrl, data, { responseType: 'text' })
      .map((rslt: string) => {
        return rslt;
      });
  }

  getEmployeeLookupData(): Observable<LookupDataModel> {
    let serviceUrl: string = `${environment.serviceBaseUrl}/data/GetLookupData`;
    return this.http.get(serviceUrl, { responseType: 'json' })
      .map((rslt: LookupDataModel) => {
        return rslt;
      });
  }
  getMyProfile(): Observable<EmployeeModel> {
    let serviceUrl: string = `${environment.serviceBaseUrl}/data/GetMyProfile`;
    return this.http.get(serviceUrl, { responseType: 'json' })
      .map((rslt: EmployeeModel) => {
        return rslt;
      });
  }

  getNewJoinees(): Observable<Array<EmployeeModel>> {
    let serviceUrl: string = `${environment.serviceBaseUrl}/data/GetNewJoiness`;
    return this.http.get(serviceUrl, { responseType: 'json' })
      .map((rslt: Array<EmployeeModel>) => {
        return rslt;
      });
  }

  getBdayThisMonth(): Observable<Array<EmployeeModel>> {
    let serviceUrl: string = `${environment.serviceBaseUrl}/data/GetBirthdaysThisMonth`;
    return this.http.get(serviceUrl, { responseType: 'json' })
      .map((rslt: Array<EmployeeModel>) => {
        return rslt;
      });
  }


  getAllEmployees(): Observable<string> {
    let serviceUrl: string = `${environment.serviceBaseUrl}/data/GetAllEmployee`;
    return this.http.get(serviceUrl, { responseType: 'json' })
      .map((rslt: string) => {
        return rslt;
      });
  }

  getOpenPositions(): Observable<string> {
    let serviceUrl: string = `${environment.serviceBaseUrl}/data/GetJobOpening`;
    return this.http.get(serviceUrl, { responseType: 'json' })
      .map((rslt: string) => {
        return rslt;
      });
  }






  getAllAchievement(): Observable<Array<AchievementModel>> {
    let serviceUrl: string = `${environment.serviceBaseUrl}/achievement/get`;
    return this.http.get(serviceUrl, { responseType: 'json' })
      .map((rslt: Array<AchievementModel>) => {
        return rslt;
      });
  }

  getAchievement(guid: string): Observable<AchievementModel> {
    let serviceUrl: string = `${environment.serviceBaseUrl}/achievement/getachievement/` + guid;
    return this.http.get(serviceUrl, { responseType: 'json' })
      .map((rslt: AchievementModel) => {
        return rslt;
      });
  }

  getCommiteeByName(name: string): Observable<CommiteeModel> {
    let serviceUrl: string = `${environment.serviceBaseUrl}/commitees/GetCommiteeByName/` + name;
    return this.http.get(serviceUrl, { responseType: 'json' })
      .map((rslt: CommiteeModel) => {
        return rslt;
      });
  }
  

}
