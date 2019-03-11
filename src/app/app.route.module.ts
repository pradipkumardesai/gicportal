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
  { path: "it-support", component: ItSupportComponent },
  { path: "hot-links", component: HotLinksComponent },
  { path: "committees/:id", pathMatch:"full", redirectTo:"committees/food" },
  { path: "committees", component: CommitteeComponent },
  { path: "committees-details/:id", component: CommitteedetailsComponent },
  // { path: "committees/:id", component: CommitteeComponent },
  { path: "projects", pathMatch:"full", redirectTo:"projects/axcess" },
  { path: "projects/:id", component: ProjectComponent },
  { path: "emp-dir", component: EmployeeDirectoryComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "user-profile", component: UserprofileComponent },
  { path: "emp-achievements-details", component: EmployeeAchievementsDetailComponent }

];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [],
  declarations: []
})
export class AppRouteModule {}
