import { Component, OnInit } from '@angular/core';
import { Policy } from '../../../../shared/models/policy.model';
import { PoliciesProcedureService } from '../../../../human-resources/policies-procedures/services/policies-procedure.service';

@Component({
  selector: 'wk-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  policies: Array<Policy> = null;

  constructor(private policyService: PoliciesProcedureService) {}

  ngOnInit() {
    this.policyService.getPolicies().then(policies => {
      this.policies = policies;
    });
  }

}
