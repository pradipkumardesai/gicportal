import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../../../shared/models/employee.model';

@Component({
  selector: 'wk-directory-card',
  templateUrl: './directory-card.component.html',
  styleUrls: ['./directory-card.component.scss']
})
export class DirectoryCardComponent implements OnInit {

  @Input()
  employee:Employee;
  
  constructor() { }

  ngOnInit() {
  }

}
