import { Component, OnInit } from '@angular/core';

import {AchievementModel} from '../../../../models/AchievementModel';
import { DataService }  from '../../../../services/data.service';
import { JsonpInterceptor } from '@angular/common/http';

@Component({
  selector: 'wk-employee-achievements',
  templateUrl: './employee-achievements.component.html',
  styleUrls: ['./employee-achievements.component.scss']
})
export class EmployeeAchievementsComponent implements OnInit {

  achievementList:Array<AchievementModel>  = new Array<AchievementModel>();

  private postRslt: string = '';
  private postBack: string = 'grey';
  private getRslt: string = '';
  private getBack: string = 'grey';
  constructor(private dataSvc: DataService) { }

  ngOnInit() {
    this.dataSvc.getAllAchievement().subscribe(
      r => {this.achievementList = r; this.getBack = 'success';},
      e => {console.log(e); this.getBack = 'error';}
    );
  }

}
