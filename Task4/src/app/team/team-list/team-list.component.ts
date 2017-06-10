import {Component, Input} from '@angular/core';
import {Team} from '../team-item/team';
import {ApplicationService} from '../../application.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html'
})
export class TeamListComponent {

  @Input() teams: Team[];

  constructor(private service: ApplicationService) {
  }

  teamClicked(name: string) {
    console.log(`From Parent ${name}`);
  }
}
