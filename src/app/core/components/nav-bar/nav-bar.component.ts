import { Component, OnInit } from '@angular/core';

import { AuthenticationService }  from '../../../services/authentication.service';
import { DataService }  from '../../../services/data.service';
import { PostDataModel } from '../../../models/PostDataModel';

@Component({
  selector: 'wk-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  private authRslt: string = '';
  private authBack: string = 'grey';
  
  constructor( private authSvc: AuthenticationService) { }

  ngOnInit() {
    var result = this.authSvc.getUser().subscribe(
      r => {this.authRslt = JSON.parse(r); this.authBack = 'success';},
      e => {console.log(e); this.authBack = 'error';}
    );
   
  }

}
