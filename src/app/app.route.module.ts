import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";

export const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: HomeComponent }
];
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [],
  declarations: []
})
export class AppRouteModule {}
