import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wk-downloads-section',
  templateUrl: './downloads-section.component.html',
  styleUrls: ['./downloads-section.component.scss']
})
export class DownloadsSectionComponent implements OnInit {
  @Input()
  sectionName:string;
  @Input()
  sectionDescription:string;
  
  constructor() { }

  ngOnInit() {
  }

}
