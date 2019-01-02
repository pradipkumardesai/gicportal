import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'wk-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projectName:string;

  constructor(private route:ActivatedRoute) {
    route.params.subscribe(params=>this.projectName=params["id"])
   }

  ngOnInit() {
  }

}
