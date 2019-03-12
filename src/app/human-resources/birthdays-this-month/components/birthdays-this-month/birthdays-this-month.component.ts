import { Component, OnInit } from '@angular/core';
import { AchievementModel } from '../../../../models/AchievementModel';
import { DataService } from '../../../../services/data.service';
import { JsonpInterceptor } from '@angular/common/http';
import { EmployeeModel } from '../../../../models/EmployeeModel';


@Component({
  selector: 'wk-birthdays-this-month',
  templateUrl: './birthdays-this-month.component.html',
  styleUrls: ['./birthdays-this-month.component.scss']
})
export class BirthdaysThisMonthComponent implements OnInit {

  bdayList: Array<EmployeeModel> = new Array<EmployeeModel>();

  private postRslt: string = '';
  private postBack: string = 'grey';
  private getRslt: string = '';
  private getBack: string = 'grey';
  constructor(private dataSvc: DataService) { }

  ngOnInit() {
    this.dataSvc.getBdayThisMonth().subscribe(
      r => { this.bdayList = r; this.getBack = 'success'; },
      e => { console.log(e); this.getBack = 'error'; }
    );
  }

}
