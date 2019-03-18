import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './components/admin/admin.component';
import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from '../../core/core.module';
import { RouterModule } from '@angular/router';
import { AdminpoliciesdetailsComponent } from './components/adminpoliciesdetails/adminpoliciesdetails.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    RouterModule
  ],
  exports:[AdminComponent],
  declarations: [AdminComponent, AdminpoliciesdetailsComponent]
})
export class AdminModule { }
