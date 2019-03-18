import { Component, OnInit } from '@angular/core';
import { ITPoliciesModel } from '../../models/ITPoliciesModel';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'wk-itpolicies-update',
  templateUrl: './itpolicies-update.component.html',
  styleUrls: ['./itpolicies-update.component.scss']
})
export class ItpoliciesUpdateComponent implements OnInit {

  guid: string;
  private sub: any;

  policy: ITPoliciesModel = new ITPoliciesModel();

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
      this.dataSvc.getITPolicyDetails(this.guid).subscribe(
        r => { this.policy = r; this.getBack = 'success'; },
        e => { console.log(e); this.getBack = 'error'; }
      );
    }
  }

  save() {
    this.dataSvc.saveITPolicyDetails(this.policy).subscribe(
      r => { this.postRslt = r; this.getBack = 'success'; },
      e => { console.log(e); this.getBack = 'error'; }
    );
  }

}
