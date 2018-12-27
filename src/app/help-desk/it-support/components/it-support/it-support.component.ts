import { Component, OnInit } from '@angular/core';
import { Policy } from '../../../../shared/models/policy.model';
import { PoliciesProcedureService } from '../../../../human-resources/policies-procedures/services/policies-procedure.service';

@Component({
  selector: 'wk-it-support',
  templateUrl: './it-support.component.html',
  styleUrls: ['./it-support.component.scss']
})
export class ItSupportComponent implements OnInit {

  policies: Array<Policy> = null;

  constructor(private policyService: PoliciesProcedureService) {}

  ngOnInit() {
    this.policyService.getPolicies().then(policies => {
      this.policies = policies;
    });
  }

}
