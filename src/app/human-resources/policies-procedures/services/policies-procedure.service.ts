import { Injectable } from '@angular/core';
import { Tile } from '../models/tile.model';

@Injectable()
export class PoliciesProcedureService {

  constructor() {}

  public getPolicies(): Promise<Array<Tile>> {
    let policies: Promise<Array<Tile>> = new Promise<Array<Tile>>(
      (resolve, reject) => {
        let lst = new Array<Tile>();
        lst.push(
          new Tile(
            "EmployeeWise",
            "EmployeeWise Summery",
            "EmployeeWise description"
          )
        );
        lst.push(
          new Tile(
            "Telephone usage",
            "Telephone usage Tile Summery",
            "Telephone usage Tile description"
          )
        );
        lst.push(
          new Tile(
            "General policies",
            "General policies Summery",
            "General policies description"
          )
        );
        lst.push(
          new Tile(
            "Work from home",
            "Work from home Summery",
            "Work from home description"
          )
        );
        lst.push(
          new Tile(
            "EmployeeWise",
            "EmployeeWise Summery",
            "EmployeeWise description"
          )
        );
        lst.push(
          new Tile(
            "Telephone usage",
            "Telephone usage Tile Summery",
            "Telephone usage Tile description"
          )
        );
        lst.push(
          new Tile(
            "General policies",
            "General policies Summery",
            "General policies description"
          )
        );
        lst.push(
          new Tile(
            "Work from home",
            "Work from home Summery",
            "Work from home description"
          )
        );
        lst.push(
          new Tile(
            "EmployeeWise",
            "EmployeeWise Summery",
            "EmployeeWise description"
          )
        );
        lst.push(
          new Tile(
            "Telephone usage",
            "Telephone usage Tile Summery",
            "Telephone usage Tile description"
          )
        );
        lst.push(
          new Tile(
            "General policies",
            "General policies Summery",
            "General policies description"
          )
        );
        lst.push(
          new Tile(
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
