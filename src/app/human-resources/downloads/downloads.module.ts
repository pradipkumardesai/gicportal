import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadsComponent } from './components/downloads/downloads.component';
import { SharedModule } from '../../shared/shared.module';
import { DownloadsSectionComponent } from './components/downloads-section/downloads-section.component';
import { DownloadLinkComponent } from './components/download-link/download-link.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[DownloadsComponent],
  declarations: [DownloadsComponent, DownloadsSectionComponent, DownloadLinkComponent]
})
export class DownloadsModule { }
