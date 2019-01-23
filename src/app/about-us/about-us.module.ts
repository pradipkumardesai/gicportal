import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
import { OrgChartCardComponent } from './components/org-chart-card/org-chart-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AboutUsComponent, OrgChartCardComponent],
  exports:[AboutUsComponent]
})
export class AboutUsModule { }
