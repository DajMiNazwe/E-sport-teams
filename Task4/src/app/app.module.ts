import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {TeamListComponent} from './team/team-list/team-list.component';
import {TeamItemComponent} from './team/team-item/team-item.component';
import {TeamFormComponent} from './team/team-form/team-form.component';
import {AlertModule} from 'ngx-bootstrap';
import {RouterModule, Routes} from '@angular/router';
import {ApplicationService} from './application.service';

const appRoutes: Routes = [
  {path: 'add', component: TeamFormComponent},
  {path: 'edit/:name', component: TeamFormComponent}
];

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
    HttpModule,
    ReactiveFormsModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ApplicationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
