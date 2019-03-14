import { Component, OnInit } from '@angular/core';
import { AchievementModel } from '../../models/AchievementModel';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'wk-achievements-update',
  templateUrl: './achievements-update.component.html',
  styleUrls: ['./achievements-update.component.scss']
})
export class AchievementsUpdateComponent implements OnInit {

  paramModel: AchievementModel = new AchievementModel();

  private postRslt: string = '';
  private postBack: string = 'grey';
  private getRslt: string = '';
  private getBack: string = 'grey';
  constructor(private dataSvc: DataService) {

  }

  ngOnInit() {

  }
  
  save() {
    this.dataSvc.saveAchievement(this.paramModel).subscribe(
      r => { this.postRslt = r; this.getBack = 'success'; },
      e => { console.log(e); this.getBack = 'error'; }
    );
  }
}
