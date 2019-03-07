import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { DataService }  from '../services/data.service';

import { PostDataModel } from '../models/PostDataModel';

@Component({
  selector: 'wk-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {
  empId : number ;
  name = '';
  emailId: string;
  supervisorId: string;
  designation: string;
  team: string;
  summary: string;
  dob: Date;
  deskNo: string;
  ext: string;
  joiningdate: Date;
  about: string;
  photo: string;
 
  constructor( private dataSvc: DataService) { }

  ngOnInit() {
  }
  private postRslt: string = '';
  private postBack: string = 'grey';
  private getRslt: string = '';
  private getBack: string = 'grey';

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
       var model =new PostDataModel( this.empId, this.name, this.emailId,this.supervisorId,this.designation,this.team,  
        this.summary,this.dob,this.joiningdate,this.deskNo,this.ext,  this.about,  this.photo);

        this.dataSvc.saveEmployee(model)
          .subscribe(
            r => {this.postRslt = r; this.postBack = 'success';},
            e => {console.log(e); this.postBack = 'error';}
          );
      }
  }



}
