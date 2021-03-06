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
import { PolicyModel } from '../models/PolicyModel';
import { PolicyDetailsModel } from '../models/PolicyDetailsModel';
import { JobOpeningsModel } from '../models/JobOpeningsModel';
import { ITPoliciesModel } from '../models/ITPoliciesModel';
import { AdminPoliciesModel } from '../models/AdminPoliciesModel';

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
  getProfilebyGuid(guid: string): Observable<EmployeeModel> {
    let serviceUrl: string = `${environment.serviceBaseUrl}/data/get/`+ guid;
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
    let serviceUrl: string = `${environment.serviceBaseUrl}/job/get`;
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

  getAllPolicies(): Observable<Array<PolicyModel>> {
    let serviceUrl: string = `${environment.serviceBaseUrl}/policy/get/`;
    return this.http.get(serviceUrl, { responseType: 'json' })
      .map((rslt: Array<PolicyModel>) => {
        return rslt;
      });
  }

  getPolicyDetails(guid: string): Observable<PolicyDetailsModel> {
    let serviceUrl: string = `${environment.serviceBaseUrl}/policy/getdetails/` + guid;
    return this.http.get(serviceUrl, { responseType: 'json' })
      .map((rslt: PolicyDetailsModel) => {
        return rslt;
      });
  }

  savePolicyDetails(policy: PolicyDetailsModel): Observable<string> {
    let serviceUrl: string = `${environment.serviceBaseUrl}/policy/save/`;
    return this.http.post(serviceUrl, policy, { responseType: 'text' })
      .map((rslt: string) => {
        return rslt;
      });
  }

  getITPolicies(): Observable<Array<ITPoliciesModel>> {
    let serviceUrl: string = `${environment.serviceBaseUrl}/policy/getitpolicies/`;
    return this.http.get(serviceUrl, { responseType: 'json' })
      .map((rslt: Array<ITPoliciesModel>) => {
        return rslt;
      });
  }
  getITPolicyDetails(guid: string): Observable<ITPoliciesModel> {
    let serviceUrl: string = `${environment.serviceBaseUrl}/policy/getitpoliciesdetails/` + guid;
    return this.http.get(serviceUrl, { responseType: 'json' })
      .map((rslt: ITPoliciesModel) => {
        return rslt;
      });
  }
  saveITPolicyDetails(policy: ITPoliciesModel): Observable<string> {
    let serviceUrl: string = `${environment.serviceBaseUrl}/policy/saveitpolicies/`;
    return this.http.post(serviceUrl, policy, { responseType: 'text' })
      .map((rslt: string) => {
        return rslt;
      });
  }


  getAdminPolicies(): Observable<Array<AdminPoliciesModel>> {
    let serviceUrl: string = `${environment.serviceBaseUrl}/policy/getadminpolicies/`;
    return this.http.get(serviceUrl, { responseType: 'json' })
      .map((rslt: Array<AdminPoliciesModel>) => {
        return rslt;
      });
  }

  getAdminPolicyDetails(guid: string): Observable<AdminPoliciesModel> {
    let serviceUrl: string = `${environment.serviceBaseUrl}/policy/getadminpoliciesdetails/` + guid;
    return this.http.get(serviceUrl, { responseType: 'json' })
      .map((rslt: AdminPoliciesModel) => {
        return rslt;
      });
  }
  saveAdminPolicyDetails(policy: AdminPoliciesModel): Observable<string> {
    let serviceUrl: string = `${environment.serviceBaseUrl}/policy/saveadminpolicies/`;
    return this.http.post(serviceUrl, policy, { responseType: 'text' })
      .map((rslt: string) => {
        return rslt;
      });
  }

  saveJobOpening(jobModel: JobOpeningsModel): Observable<string> {
    let serviceUrl: string = `${environment.serviceBaseUrl}/job/save/`;
    return this.http.post(serviceUrl, jobModel, { responseType: 'text' })
      .map((rslt: string) => {
        return rslt;
      });
  }
  saveAchievement(paramModel: AchievementModel): Observable<string> {
    let serviceUrl: string = `${environment.serviceBaseUrl}/achievement/save/`;
    return this.http.post(serviceUrl, paramModel, { responseType: 'text' })
      .map((rslt: string) => {
        return rslt;
      });
  }
  
  saveEmployeeData(paramModel: EmployeeModel): Observable<string> {
    let serviceUrl: string = `${environment.serviceBaseUrl}/user/save/`;
    return this.http.post(serviceUrl, paramModel, { responseType: 'text' })
      .map((rslt: string) => {
        return rslt;
      });
  }
}
