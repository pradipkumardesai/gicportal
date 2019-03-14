import { Component, OnInit } from '@angular/core';
import { JobOpeningsModel } from '../../models/JobOpeningsModel';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'wk-openings-update',
  templateUrl: './openings-update.component.html',
  styleUrls: ['./openings-update.component.scss']
})
export class OpeningsUpdateComponent implements OnInit {

  job: JobOpeningsModel = new JobOpeningsModel();
  private postRslt: string = '';
  private postBack: string = 'grey';
  private getRslt: string = '';
  private getBack: string = 'grey';
  constructor(private dataSvc: DataService) {

  }

  ngOnInit() {
  }
  
  save() {
    this.dataSvc.saveJobOpening(this.job).subscribe(
      r => { this.postRslt = r; this.getBack = 'success'; },
      e => { console.log(e); this.getBack = 'error'; }
    );
  }
}
