import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

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
import { AboutUsModule } from './about-us/about-us.module';
import { UserprofileModule } from "./userprofile/userprofile.module";

import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationService }  from './services/authentication.service';
import { DataService }  from './services/data.service';
import { WinAuthInterceptor }  from './interceptors/winauth-interceptor';

@NgModule({
  declarations: [ 
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRouteModule,
    CoreModule,
    SharedModule,
    HomeModule,
    HumanResourcesModule,
    HelpDeskModule,
    HotLinksModule,
    CommitteesModule,
    ProjectsModule,
    EmployeeDirectoryModule,
    AboutUsModule,
    HttpClientModule,
    FormsModule,
    UserprofileModule      
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: WinAuthInterceptor,
      multi: true
    },
    AuthenticationService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
