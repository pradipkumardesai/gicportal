import { Component, OnInit } from '@angular/core';
import { OpenPosition } from '../../models/position.model';
import { DataService }  from '../../../../services/data.service';

@Component({
  selector: 'wk-internal-openings',
  templateUrl: './internal-openings.component.html',
  styleUrls: ['./internal-openings.component.scss']
})
export class InternalOpeningsComponent implements OnInit {
  private postRslt: string = '';
  private postBack: string = 'grey';
  private openPositions: string = '';
  private getBack: string = 'grey';
  constructor(private dataSvc: DataService) {
  }

  ngOnInit() {
    var result = this.dataSvc.getOpenPositions() .subscribe(
      r => {this.openPositions = r; this.getBack = 'success';},
      e => {console.log(e); this.getBack = 'error';}
    );

  }

}
