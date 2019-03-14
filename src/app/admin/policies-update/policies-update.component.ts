import { Component, OnInit } from '@angular/core';
import { PolicyDetailsModel } from '../../models/PolicyDetailsModel';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'wk-policies-update',
  templateUrl: './policies-update.component.html',
  styleUrls: ['./policies-update.component.scss']
})
export class PoliciesUpdateComponent implements OnInit {

  policy: PolicyDetailsModel = new PolicyDetailsModel();

  private postRslt: string = '';
  private postBack: string = 'grey';
  private getRslt: string = '';
  private getBack: string = 'grey';
  constructor(private dataSvc: DataService) {

  }

  ngOnInit() {

  }
  
  save() {
    this.dataSvc.savePolicyDetails(this.policy).subscribe(
      r => { this.postRslt = r; this.getBack = 'success'; },
      e => { console.log(e); this.getBack = 'error'; }
    );
  }
}
