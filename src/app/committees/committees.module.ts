import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommitteeComponent } from './components/committee/committee.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports:[CommitteeComponent],
  declarations: [CommitteeComponent]
})
export class CommitteesModule { }
