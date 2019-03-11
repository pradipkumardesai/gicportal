import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserprofileComponent } from "./userprofile.component";
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [UserprofileComponent],
  imports: [
    CommonModule,
    CoreModule    
  ]
})
export class UserprofileModule { }
