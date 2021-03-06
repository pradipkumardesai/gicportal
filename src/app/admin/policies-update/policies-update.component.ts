import { Component, OnInit } from '@angular/core';
import { PolicyDetailsModel } from '../../models/PolicyDetailsModel';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'wk-policies-update',
  templateUrl: './policies-update.component.html',
  styleUrls: ['./policies-update.component.scss']
})
export class PoliciesUpdateComponent implements OnInit {

  guid: string;
  private sub: any;

  policy: PolicyDetailsModel = new PolicyDetailsModel();

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
    if (this.guid != undefined) {       
      this.dataSvc.getPolicyDetails(this.guid).subscribe(
        r => { this.policy = r; this.getBack = 'success'; },
        e => { console.log(e); this.getBack = 'error'; }
      );
    }
  }

  save() {
    this.dataSvc.savePolicyDetails(this.policy).subscribe(
      r => { this.postRslt = r; this.getBack = 'success'; },
      e => { console.log(e); this.getBack = 'error'; }
    );
  }
}
