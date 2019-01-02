import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../shared/models/employee.model';

@Component({
  selector: 'wk-employee-directory',
  templateUrl: './employee-directory.component.html',
  styleUrls: ['./employee-directory.component.scss']
})
export class EmployeeDirectoryComponent implements OnInit {

  emloyeeList:Array<Employee>= new Array<Employee>();

  constructor() { 
    this.emloyeeList.push(new Employee("Pradipkumar Desai","assets/images/pradip.jpg","W-1-211","2755","pradipkumar.desai@wolterskluwer.com","Axcess"));
    this.emloyeeList.push(new Employee("Pradipkumar Desai","assets/images/pradip.jpg","W-1-211","2755","pradipkumar.desai@wolterskluwer.com","Axcess"));
  }

  ngOnInit() {
  }

}
