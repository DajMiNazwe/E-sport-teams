import {Component, OnInit} from '@angular/core';
import {Team} from './team/team-item/team';
import {ApplicationService} from './application.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  teams: Team[] = [];

  constructor(private service: ApplicationService) {
    service.changeEmitted$.subscribe(() => {
      this.service.list().subscribe((teams) => {
        this.teams = teams;
      });
    });
  }

  ngOnInit() {
    this.service.list().subscribe((teams) => {
      this.teams = teams;
    });
  }
}
