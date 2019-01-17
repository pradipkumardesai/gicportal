import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { AppRouteModule } from './app.route.module';
import { RouterModule } from '@angular/router';
import { HumanResourcesModule } from './human-resources/human-resources.module';
import { CoreModule } from './core/core.module';
import { HelpDeskModule } from './help-desk/help-desk.module';
import { HotLinksModule } from './hot-links/hot-links.module';
import { CommitteesModule } from './committees/committees.module';
import { ProjectsModule } from './projects/projects.module';
import { EmployeeDirectoryModule } from './employee-directory/employee-directory.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ 
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    NgbModule.forRoot(),
    AppRouteModule,
    CoreModule,
    SharedModule,
    HomeModule,
    HumanResourcesModule,
    HelpDeskModule,
    HotLinksModule,
    CommitteesModule,
    ProjectsModule,
    EmployeeDirectoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
