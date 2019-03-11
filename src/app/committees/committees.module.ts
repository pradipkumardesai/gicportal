import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommitteeComponent } from './components/committee/committee.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CommitteedetailsComponent } from './components/committeedetails/committeedetails.component';

import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    CoreModule
  ],
  exports:[CommitteeComponent],
  declarations: [CommitteeComponent, CommitteedetailsComponent]
})
export class CommitteesModule { }
