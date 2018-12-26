import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wk-module-header',
  templateUrl: './module-header.component.html',
  styleUrls: ['./module-header.component.scss']
})
export class ModuleHeaderComponent implements OnInit {

  @Input()
  headerText:string;
  
  constructor() { }

  ngOnInit() {
  }

}
