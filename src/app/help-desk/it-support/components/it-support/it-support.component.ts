import { Component, OnInit } from '@angular/core';
import { Policy } from '../../../../shared/models/policy.model';
import { PoliciesProcedureService } from '../../../../human-resources/policies-procedures/services/policies-procedure.service';
import { ITPoliciesModel } from '../../../../models/ITPoliciesModel';
import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'wk-it-support',
  templateUrl: './it-support.component.html',
  styleUrls: ['./it-support.component.scss']
})
export class ItSupportComponent implements OnInit {

  policyList: Array<ITPoliciesModel> = new Array<ITPoliciesModel>();

  private postRslt: string = '';
  private postBack: string = 'grey';
  private getRslt: string = '';
  private getBack: string = 'grey';
  constructor(private dataSvc: DataService) {

  }

  ngOnInit() {
    var result = this.dataSvc.getITPolicies().subscribe(
      r => { this.policyList = r; this.getBack = 'success'; },
      e => { console.log(e); this.getBack = 'error'; }
    );
  }

}
