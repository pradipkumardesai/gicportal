import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../../services/data.service';
import { AdminPoliciesModel } from '../../../../models/AdminPoliciesModel';

@Component({
  selector: 'wk-adminpoliciesdetails',
  templateUrl: './adminpoliciesdetails.component.html',
  styleUrls: ['./adminpoliciesdetails.component.scss']
})
export class AdminpoliciesdetailsComponent implements OnInit {
  guid: string;
  private sub: any;

  policyDetails: AdminPoliciesModel = new AdminPoliciesModel();

  private postRslt: string = '';
  private postBack: string = 'grey';
  private getRslt: string = '';
  private getBack: string = 'grey';
  constructor(private route: ActivatedRoute, private dataSvc: DataService) {
    this.route.params.subscribe(params => {
      this.guid = params['guid'];
    });
  }

  ngOnInit() {
    this.dataSvc.getAdminPolicyDetails(this.guid).subscribe(
      r => { this.policyDetails = r; this.getBack = 'success'; },
      e => { console.log(e); this.getBack = 'error'; }
    );
  }

}
