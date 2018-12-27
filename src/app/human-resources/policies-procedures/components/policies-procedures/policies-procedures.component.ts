import { Component, OnInit } from '@angular/core';
import { PoliciesProcedureService } from '../../services/policies-procedure.service';
import { Policy } from '../../../../shared/models/policy.model';

@Component({
  selector: 'wk-policies-procedures',
  templateUrl: './policies-procedures.component.html',
  styleUrls: ['./policies-procedures.component.scss']
})
export class PoliciesProceduresComponent implements OnInit {

  policies: Array<Policy> = null;

  constructor(private hrpolicyService: PoliciesProcedureService) {}

  ngOnInit() {
    this.hrpolicyService.getPolicies().then(policies => {
      this.policies = policies;
    });
  }

}
