import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../shared/models/employee.model';
import { NgForm } from '@angular/forms';

import { DataService }  from '../../../services/data.service';
import { PostDataModel } from '../../../models/PostDataModel';

@Component({
  selector: 'wk-employee-directory',
  templateUrl: './employee-directory.component.html',
  styleUrls: ['./employee-directory.component.scss']
})
export class EmployeeDirectoryComponent implements OnInit {

  emloyeeList:Array<Employee>= new Array<Employee>();
  empId : number ;
  userName = '';
  email: string;
  designation: string;
  deskNo: string;
  password: string;
  private postRslt: string = '';
  private postBack: string = 'grey';
  private getRslt: string = '';
  private getBack: string = 'grey';

  constructor( private dataSvc: DataService) {
   // this.emloyeeList.push(new Employee("Pradipkumar Desai","assets/images/pradip.jpg","W-1-211","2755","pradipkumar.desai@wolterskluwer.com","Axcess"));
   // this.emloyeeList.push(new Employee("Pradipkumar Desai","assets/images/pradip.jpg","W-1-211","2755","pradipkumar.desai@wolterskluwer.com","Axcess"));
  }
  
  
  ngOnInit() {
    var result = this.dataSvc.getAllEmployees() .subscribe(
      r => {this.getRslt = r; this.getBack = 'success';},
      e => {console.log(e); this.getBack = 'error';}
    );

  }

}
