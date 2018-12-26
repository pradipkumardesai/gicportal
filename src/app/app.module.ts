import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { AppRouteModule } from './app.route.module';
import { RouterModule } from '@angular/router';
import { HumanResourcesModule } from './human-resources/human-resources.module';
import { CoreModule } from './core/core.module';


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
    HumanResourcesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
