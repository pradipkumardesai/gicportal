import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../../models/EmployeeModel';
import { DataService } from '../../services/data.service';
import { LookupDataModel } from '../../models/LookupDataModel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'wk-employees-update',
  templateUrl: './employees-update.component.html',
  styleUrls: ['./employees-update.component.scss']
})
export class EmployeesUpdateComponent implements OnInit {

  guid: string;
  private sub: any;

  paramModel: EmployeeModel = new EmployeeModel();
  lookUpData: LookupDataModel =  new LookupDataModel();

  private postRslt: string = '';
  private postBack: string = 'grey';
  private getRslt: string = '';
  private getBack: string = 'grey';
  constructor(private route: ActivatedRoute,private dataSvc: DataService) {
    this.sub = this.route.params.subscribe(params => {
      this.guid = params['guid'];
    });
    this.dataSvc.getEmployeeLookupData().subscribe(
      r => { this.lookUpData = r; this.getBack = 'success'; },
      e => { console.log(e); this.getBack = 'error'; }
    );
  }

  ngOnInit() {
    this.dataSvc.getProfilebyGuid(this.guid).subscribe(
      r => { this.paramModel = r; this.getBack = 'success'; },
      e => { console.log(e); this.getBack = 'error'; }
    );
  }
  
  save() {
    this.dataSvc.saveEmployeeData(this.paramModel).subscribe(
      r => { this.paramModel= new EmployeeModel();; this.getBack = 'success'; },
      e => { console.log(e); this.getBack = 'error'; }
    );
  }
}
