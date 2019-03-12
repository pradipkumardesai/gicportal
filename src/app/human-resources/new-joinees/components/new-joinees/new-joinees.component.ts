import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../services/data.service';
import { EmployeeModel } from '../../../../models/EmployeeModel';

@Component({
  selector: 'wk-new-joinees',
  templateUrl: './new-joinees.component.html',
  styleUrls: ['./new-joinees.component.scss']
})
export class NewJoineesComponent implements OnInit {

  newJoineeList: Array<EmployeeModel> = new Array<EmployeeModel>();

  private postRslt: string = '';
  private postBack: string = 'grey';
  private getRslt: string = '';
  private getBack: string = 'grey';
  constructor(private dataSvc: DataService) { }

  ngOnInit() {
    this.dataSvc.getBdayThisMonth().subscribe(
      r => { this.newJoineeList = r; this.getBack = 'success'; },
      e => { console.log(e); this.getBack = 'error'; }
    );
  }
}
