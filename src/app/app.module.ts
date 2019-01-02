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
    CommitteesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
