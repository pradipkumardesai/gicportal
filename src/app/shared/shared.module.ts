import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[NavBarComponent],
  declarations: [NavBarComponent]
})
export class SharedModule { }
