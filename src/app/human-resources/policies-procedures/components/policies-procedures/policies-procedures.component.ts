import { Component, OnInit } from '@angular/core';
import { PoliciesProcedureService } from '../../services/policies-procedure.service';
import { Policy } from '../../../../shared/models/policy.model';
import { PolicyModel } from '../../../../models/PolicyModel';
import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'wk-policies-procedures',
  templateUrl: './policies-procedures.component.html',
  styleUrls: ['./policies-procedures.component.scss']
})
export class PoliciesProceduresComponent implements OnInit {

  policyList:Array<PolicyModel>  = new Array<PolicyModel>();

  private postRslt: string = '';
  private postBack: string = 'grey';
  private getRslt: string = '';
  private getBack: string = 'grey';
  constructor(private dataSvc: DataService) { }

  ngOnInit() {
    var result = this.dataSvc.getAllPolicies().subscribe(
      r => {this.policyList = r; this.getBack = 'success';},
      e => {console.log(e); this.getBack = 'error';}
    );
  }

}
