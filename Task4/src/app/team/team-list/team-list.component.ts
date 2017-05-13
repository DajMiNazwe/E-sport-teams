import {Component, Input} from '@angular/core';
import {Team} from '../team-item/team';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html'
})
export class TeamListComponent {

  @Input() teams: Team[];

  teamClicked(name: string) {
    console.log(`From Parent ${name}`);
  }
}
