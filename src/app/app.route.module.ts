import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PoliciesProceduresComponent } from "./human-resources/policies-procedures/components/policies-procedures/policies-procedures.component";
import { EmployeeAchievementsComponent } from "./human-resources/employee-achievements/components/employee-achievements/employee-achievements.component";
import { InternalOpeningsComponent } from "./human-resources/internal-openings/components/internal-openings/internal-openings.component";
import { NewJoineesComponent } from "./human-resources/new-joinees/components/new-joinees/new-joinees.component";
import { BirthdaysThisMonthComponent } from "./human-resources/birthdays-this-month/components/birthdays-this-month/birthdays-this-month.component";
import { DownloadsComponent } from "./human-resources/downloads/components/downloads/downloads.component";
import { AdminComponent } from "./help-desk/admin/components/admin/admin.component";
import { ItSupportComponent } from "./help-desk/it-support/components/it-support/it-support.component";
import { HotLinksComponent } from "./hot-links/components/hot-links/hot-links.component";
import { CommitteeComponent } from "./committees/components/committee/committee.component";
import { CommitteedetailsComponent } from "./committees/components/committeedetails/committeedetails.component";
import { ProjectComponent } from "./projects/components/project/project.component";
import { EmployeeDirectoryComponent } from "./employee-directory/components/employee-directory/employee-directory.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { UserprofileComponent } from "./userprofile/userprofile.component";
import { EmployeeAchievementsDetailComponent } from "./human-resources/employee-achievements-detail/employee-achievements-detail/employee-achievements-detail.component";
import { PolicydetailsComponent } from "./human-resources/policies-procedures/components/policydetails/policydetails.component";
import { PoliciesUpdateComponent } from "./admin/policies-update/policies-update.component";
import { AchievementsUpdateComponent } from "./admin/achievements-update/achievements-update.component";
import { OpeningsUpdateComponent } from "./admin/openings-update/openings-update.component";
import { CommiteesUpdateComponent } from "./admin/commitees-update/commitees-update.component";
import { EmployeesUpdateComponent } from "./admin/employees-update/employees-update.component";
import { AdminpoliciesdetailsComponent } from "./help-desk/admin/components/adminpoliciesdetails/adminpoliciesdetails.component";
import { ItSupportdetailsComponent } from "./help-desk/it-support/components/it-supportdetails/it-supportdetails.component";
import { AdminpoliciesUpdateComponent } from "./admin/adminpolicies-update/adminpolicies-update.component";
import { ItpoliciesUpdateComponent } from "./admin/itpolicies-update/itpolicies-update.component";

export const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: HomeComponent },
  { path: "policies", component: PoliciesProceduresComponent },
  { path: "emp-achievements", component: EmployeeAchievementsComponent },
  { path: "internal-openings", component: InternalOpeningsComponent },
  { path: "new-joinees", component: NewJoineesComponent },
  { path: "birthdays-this-month", component: BirthdaysThisMonthComponent },
  { path: "downloads", component: DownloadsComponent },
  { path: "admin", component: AdminComponent },
  { path: "adminpoliciesdetails/:guid", component: AdminpoliciesdetailsComponent },
  { path: "it-support", component: ItSupportComponent },
  { path: "it-supportdetails/:guid", component: ItSupportdetailsComponent },
  { path: "hot-links", component: HotLinksComponent },
  { path: "committees/:id", pathMatch: "full", redirectTo: "committees/food" },
  { path: "committees", component: CommitteeComponent },
  { path: "committees-details/:name", component: CommitteedetailsComponent },
  // { path: "committees/:id", component: CommitteeComponent },
  { path: "projects", pathMatch: "full", redirectTo: "projects/axcess" },
  { path: "projects/:id", component: ProjectComponent },
  { path: "emp-dir", component: EmployeeDirectoryComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "user-profile", component: UserprofileComponent },
  { path: "emp-achievements-details/:guid", component: EmployeeAchievementsDetailComponent },
  { path: "policies-details/:guid", component: PolicydetailsComponent },
  //Update routes
  { path: "policies-update", component: PoliciesUpdateComponent },
  { path: "policies-update/:guid", component: PoliciesUpdateComponent },
  { path: "achievements-update", component: AchievementsUpdateComponent },
  { path: "achievements-update/:guid", component: AchievementsUpdateComponent },
  { path: "openings-update", component: OpeningsUpdateComponent },
  { path: "openings-update/:guid", component: OpeningsUpdateComponent },
  { path: "commitees-update", component: CommiteesUpdateComponent },
  { path: "commitees-update/:guid", component: CommiteesUpdateComponent },
  { path: "employees-update", component: EmployeesUpdateComponent },
  { path: "employees-update/:guid", component: EmployeesUpdateComponent },
  
  { path: "adminpolicies-update", component: AdminpoliciesUpdateComponent },
  { path: "adminpolicies-update/:guid", component: AdminpoliciesUpdateComponent },
  { path: "itpolicies-update", component: ItpoliciesUpdateComponent },
  { path: "itpolicies-update/:guid", component: ItpoliciesUpdateComponent },
  
  { path: "employees-update/:guid", component: EmployeesUpdateComponent },
  
  { path: "emp-achievements-details/:guid", component: EmployeeAchievementsDetailComponent }

];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [],
  declarations: []
})
export class AppRouteModule { }
