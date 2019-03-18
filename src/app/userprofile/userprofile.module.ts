import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserprofileComponent } from "./userprofile.component";
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UserprofileComponent],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule    
  ]
})
export class UserprofileModule { }
