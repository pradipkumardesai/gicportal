import { Injectable } from '@angular/core';
import { Policy } from '../../../shared/models/policy.model';

@Injectable()
export class PoliciesProcedureService {

  constructor() {}

  public getPolicies(): Promise<Array<Policy>> {
    let policies: Promise<Array<Policy>> = new Promise<Array<Policy>>(
      (resolve, reject) => {
        let lst = new Array<Policy>();
        lst.push(
          new Policy(
            "EmployeeWise",
            "EmployeeWise Summery",
            "EmployeeWise description"
          )
        );
        lst.push(
          new Policy(
            "Telephone usage",
            "Telephone usage Policy Summery",
            "Telephone usage Policy description"
          )
        );
        lst.push(
          new Policy(
            "General policies",
            "General policies Summery",
            "General policies description"
          )
        );
        lst.push(
          new Policy(
            "Work from home",
            "Work from home Summery",
            "Work from home description"
          )
        );
        lst.push(
          new Policy(
            "EmployeeWise",
            "EmployeeWise Summery",
            "EmployeeWise description"
          )
        );
        lst.push(
          new Policy(
            "Telephone usage",
            "Telephone usage Policy Summery",
            "Telephone usage Policy description"
          )
        );
        lst.push(
          new Policy(
            "General policies",
            "General policies Summery",
            "General policies description"
          )
        );
        lst.push(
          new Policy(
            "Work from home",
            "Work from home Summery",
            "Work from home description"
          )
        );
        lst.push(
          new Policy(
            "EmployeeWise",
            "EmployeeWise Summery",
            "EmployeeWise description"
          )
        );
        lst.push(
          new Policy(
            "Telephone usage",
            "Telephone usage Policy Summery",
            "Telephone usage Policy description"
          )
        );
        lst.push(
          new Policy(
            "General policies",
            "General policies Summery",
            "General policies description"
          )
        );
        lst.push(
          new Policy(
            "Work from home",
            "Work from home Summery",
            "Work from home description"
          )
        );
        resolve(lst);
      }
    );
    return policies;
  }

}
