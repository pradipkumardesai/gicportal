import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'wk-committee',
  templateUrl: './committee.component.html',
  styleUrls: ['./committee.component.scss']
})
export class CommitteeComponent implements OnInit {

  committeeName:string;

  constructor(private route:ActivatedRoute) { 
    this.route.params.subscribe(params=>this.committeeName=params["id"]);
  }

  ngOnInit() {
  }

}
