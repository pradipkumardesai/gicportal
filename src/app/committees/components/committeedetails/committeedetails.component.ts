import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'wk-committeedetails',
  templateUrl: './committeedetails.component.html',
  styleUrls: ['./committeedetails.component.scss']
})
export class CommitteedetailsComponent implements OnInit {
  id: string;
  private sub: any;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];

    });
  }
}

