import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { CommiteeModel } from '../../../models/CommiteeModel';

@Component({
  selector: 'wk-committeedetails',
  templateUrl: './committeedetails.component.html',
  styleUrls: ['./committeedetails.component.scss']
})
export class CommitteedetailsComponent implements OnInit {
  name: string;
  private sub: any;

  commitee: CommiteeModel = new CommiteeModel();  
  private postRslt: string = '';
  private postBack: string = 'grey';
  private getRslt: string = '';
  private getBack: string = 'grey';

  constructor(private route: ActivatedRoute, private dataSvc: DataService) {
    this.route.params.subscribe(params => {
      this.name = params['name'];
    });
  }

  ngOnInit() {
    var result = this.dataSvc.getCommiteeByName(this.name).subscribe(
      r => { this.commitee = r; this.getBack = 'success'; },
      e => { console.log(e); this.getBack = 'error'; }
    );
  }

}

