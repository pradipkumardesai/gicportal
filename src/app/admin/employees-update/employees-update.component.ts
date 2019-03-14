import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../../models/EmployeeModel';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'wk-employees-update',
  templateUrl: './employees-update.component.html',
  styleUrls: ['./employees-update.component.scss']
})
export class EmployeesUpdateComponent implements OnInit {

  paramModel: EmployeeModel = new EmployeeModel();

  private postRslt: string = '';
  private postBack: string = 'grey';
  private getRslt: string = '';
  private getBack: string = 'grey';
  constructor(private dataSvc: DataService) {

  }

  ngOnInit() {

  }
  
  save() {
    this.dataSvc.saveEmployeeData(this.paramModel).subscribe(
      r => { this.postRslt = r; this.getBack = 'success'; },
      e => { console.log(e); this.getBack = 'error'; }
    );
  }
}
