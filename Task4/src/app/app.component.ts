import {Component, OnInit} from '@angular/core';
import {Team} from './team/team-item/team';
import {Player} from './player/player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  teams: Team[] = [];

  ngOnInit() {
    this.teams.push(new Team('Virtus.Pro', 6, 'Poland', [new Player('neo')]));
    this.teams.push(new Team('Astralis', 1, 'Denmark'));
    this.teams.push(new Team('Faze Clan', 2, 'Mixed'));

    console.log(this.teams);
  }
}
