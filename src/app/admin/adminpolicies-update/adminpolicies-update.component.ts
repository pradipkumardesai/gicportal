import { Component, OnInit } from '@angular/core';
import { AdminPoliciesModel } from '../../models/AdminPoliciesModel';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'wk-adminpolicies-update',
  templateUrl: './adminpolicies-update.component.html',
  styleUrls: ['./adminpolicies-update.component.scss']
})
export class AdminpoliciesUpdateComponent implements OnInit {

  guid: string;
  private sub: any;

  policy: AdminPoliciesModel = new AdminPoliciesModel();

  private postRslt: string = '';
  private postBack: string = 'grey';
  private getRslt: string = '';
  private getBack: string = 'grey';
  constructor(private route: ActivatedRoute, private dataSvc: DataService) {
    this.sub = this.route.params.subscribe(params => {
      this.guid = params['guid'];
    });
  }

  ngOnInit() {
    if (this.guid != '') {       
      this.dataSvc.getAdminPolicyDetails(this.guid).subscribe(
        r => { this.policy = r; this.getBack = 'success'; },
        e => { console.log(e); this.getBack = 'error'; }
      );
    }
  }

  save() {
    this.dataSvc.saveAdminPolicyDetails(this.policy).subscribe(
      r => { this.postRslt = r; this.getBack = 'success'; },
      e => { console.log(e); this.getBack = 'error'; }
    );
  }
}
