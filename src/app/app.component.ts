import { Component } from '@angular/core';

import { AuthenticationService }  from './services/authentication.service';
import { DataService }  from './services/data.service';
import { PostDataModel } from './models/PostDataModel';

@Component({
  selector: 'wk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wk';

  private authRslt: string = '';
  private authBack: string = 'grey';
  private postRslt: string = '';
  private postBack: string = 'grey';

  constructor(
    private authSvc: AuthenticationService,
    private dataSvc: DataService
  ){
   
  }

  testAuthentication(): void {
    this.authSvc.getUser()
    .subscribe(
      r => {
        this.authRslt = r;
        
        this.authBack = 'success';},
      e => {console.log(e); this.authBack = 'error';}
    );
  }

 
}
