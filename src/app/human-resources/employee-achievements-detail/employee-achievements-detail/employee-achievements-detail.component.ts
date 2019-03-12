import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { AchievementModel } from '../../../models/AchievementModel';

@Component({
  selector: 'wk-employee-achievements-detail',
  templateUrl: './employee-achievements-detail.component.html',
  styleUrls: ['./employee-achievements-detail.component.scss']
})
export class EmployeeAchievementsDetailComponent implements OnInit {
  guid: string;
  private sub: any;

  achievement: AchievementModel =new AchievementModel ();
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
    var result = this.dataSvc.getAchievement(this.guid).subscribe(
      r => { this.achievement = r; this.getBack = 'success'; },
      e => { console.log(e); this.getBack = 'error'; }
    );
  }

}
