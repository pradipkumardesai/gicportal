import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ModuleHeaderComponent } from "./components/module-header/module-header.component";
import { PolicyCardComponent } from "./components/policy-card/policy-card.component";

@NgModule({
  imports: [CommonModule],
  exports: [ModuleHeaderComponent, PolicyCardComponent],
  declarations: [ModuleHeaderComponent, PolicyCardComponent]
})
export class SharedModule {}
