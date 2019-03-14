import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../services/data.service';
import { PolicyDetailsModel } from '../../../../models/PolicyDetailsModel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'wk-policydetails',
  templateUrl: './policydetails.component.html',
  styleUrls: ['./policydetails.component.scss']
})
export class PolicydetailsComponent implements OnInit {
  guid: string;
  private sub: any;

  policyDetails:PolicyDetailsModel  = new PolicyDetailsModel();

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
    var result = this.dataSvc.getPolicyDetails(this.guid).subscribe(
      r => {this.policyDetails = r; this.getBack = 'success';},
      e => {console.log(e); this.getBack = 'error';}
    );
  }

}
