import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {TeamListComponent} from './team/team-list/team-list.component';
import {TeamItemComponent} from './team/team-item/team-item.component';
import {TeamFormComponent} from './team/team-form/team-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamListComponent,
    TeamItemComponent,
    TeamFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
