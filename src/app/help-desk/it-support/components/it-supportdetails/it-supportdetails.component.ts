import { Component, OnInit } from '@angular/core';
import { ITPoliciesModel } from '../../../../models/ITPoliciesModel';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'wk-it-supportdetails',
  templateUrl: './it-supportdetails.component.html',
  styleUrls: ['./it-supportdetails.component.scss']
})
export class ItSupportdetailsComponent implements OnInit {
  
  guid: string;
  private sub: any;

  policyDetails: ITPoliciesModel = new ITPoliciesModel();

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
    this.dataSvc.getITPolicyDetails(this.guid).subscribe(
      r => { this.policyDetails = r; this.getBack = 'success'; },
      e => { console.log(e); this.getBack = 'error'; }
    );
  }

}
