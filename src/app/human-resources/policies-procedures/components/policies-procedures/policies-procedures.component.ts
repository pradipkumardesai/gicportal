import { Component, OnInit } from '@angular/core';
import { Tile } from '../../models/tile.model';
import { PoliciesProcedureService } from '../../services/policies-procedure.service';

@Component({
  selector: 'wk-policies-procedures',
  templateUrl: './policies-procedures.component.html',
  styleUrls: ['./policies-procedures.component.scss']
})
export class PoliciesProceduresComponent implements OnInit {

  policies: Array<Tile> = null;

  constructor(private hrpolicyService: PoliciesProcedureService) {}

  ngOnInit() {
    this.hrpolicyService.getPolicies().then(policies => {
      this.policies = policies;
    });
  }

}
