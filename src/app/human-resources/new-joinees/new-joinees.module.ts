import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewJoineesComponent } from './components/new-joinees/new-joinees.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[NewJoineesComponent],
  declarations: [NewJoineesComponent]
})
export class NewJoineesModule { }
