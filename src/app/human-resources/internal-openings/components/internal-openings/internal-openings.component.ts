import { Component, OnInit } from '@angular/core';
import { OpenPosition } from '../../models/position.model';

@Component({
  selector: 'wk-internal-openings',
  templateUrl: './internal-openings.component.html',
  styleUrls: ['./internal-openings.component.scss']
})
export class InternalOpeningsComponent implements OnInit {

  openPositions: Array<OpenPosition> = new Array<OpenPosition>();
  constructor() {
    this.openPositions.push(new OpenPosition("WK/TAA/362/2017","Sr. Software Developer","C#, RESTful Web API, SQL, OOPS, Web application background (HTML/ CSS, JavaScript, Angular JS / Bootstrap), TSQL.","5-7 Years",null));
    this.openPositions.push(new OpenPosition("WK/TAA/362/2017","Sr. Software Developer","C#, RESTful Web API, SQL, OOPS, Web application background (HTML/ CSS, JavaScript, Angular JS / Bootstrap), TSQL.","5-7 Years",null));
    this.openPositions.push(new OpenPosition("WK/TAA/362/2017","Sr. Software Developer","C#, RESTful Web API, SQL, OOPS, Web application background (HTML/ CSS, JavaScript, Angular JS / Bootstrap), TSQL.","5-7 Years",null));
    this.openPositions.push(new OpenPosition("WK/TAA/362/2017","Sr. Software Developer","C#, RESTful Web API, SQL, OOPS, Web application background (HTML/ CSS, JavaScript, Angular JS / Bootstrap), TSQL.","5-7 Years",null));
  }

  ngOnInit() {
  }

}
