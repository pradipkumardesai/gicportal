import { Component, OnInit } from '@angular/core';
import { Policy } from '../../../../shared/models/policy.model';
import { PoliciesProcedureService } from '../../../../human-resources/policies-procedures/services/policies-procedure.service';
import { AdminPoliciesModel } from '../../../../models/AdminPoliciesModel';
import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'wk-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  
  policyList: Array<AdminPoliciesModel> = new Array<AdminPoliciesModel>();

  private postRslt: string = '';
  private postBack: string = 'grey';
  private getRslt: string = '';
  private getBack: string = 'grey';
  constructor(private dataSvc: DataService) {

  }

  ngOnInit() {
    var result = this.dataSvc.getAdminPolicies().subscribe(
      r => { this.policyList = r; this.getBack = 'success'; },
      e => { console.log(e); this.getBack = 'error'; }
    );
  }

}
