import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotLinksComponent } from './components/hot-links/hot-links.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[HotLinksComponent],
  declarations: [HotLinksComponent]
})
export class HotLinksModule { }
