import {Component, OnInit} from '@angular/core';
import {Team} from './team/team-item/team';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  teams: Team[] = [];

  ngOnInit() {
    this.teams.push(new Team('Virtus.Pro'));
    this.teams.push(new Team('Astralis'));
    this.teams.push(new Team('Faze Clan'));

    console.log(this.teams);
  }
}
