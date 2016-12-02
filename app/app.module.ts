import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule }  from '@angular/http';

//import { AppComponent }             from './app.component';
import { AppComponent }             from './app.component';
import { HeroListComponent }        from './toh/hero-list.component';
import { teamProjectListComponent }        from './TeamProject/teamProject-list.component';
import { BuildListComponent }        from './Builds/build-list.component';
import { DetailBuildListComponent }        from './DetailBuild/detailBuild-list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  declarations: [
    AppComponent,
    HeroListComponent,
    teamProjectListComponent,
    BuildListComponent,
    DetailBuildListComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }