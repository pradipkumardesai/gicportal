import { Component, OnInit, Input } from "@angular/core";
import { Policy } from "../../models/policy.model";

@Component({
  selector: "wk-policy-card",
  templateUrl: "./policy-card.component.html",
  styleUrls: ["./policy-card.component.scss"]
})
export class PolicyCardComponent implements OnInit {
  @Input()
  policy: Policy;

  constructor() {}

  ngOnInit() {}
}
