import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Team} from './team';
import {ApplicationService} from '../../application.service';

@Component({
  selector: 'app-team-item',
  templateUrl: './team-item.component.html'
})
export class TeamItemComponent {

  @Input()
  team: Team;

  @Output()
  clickEmitter: EventEmitter<string> = new EventEmitter();

  isSelected = false;

  constructor(private service: ApplicationService) {
  }

  teamSelected() {
    this.isSelected ? this.isSelected = false : this.isSelected = true;
    this.clickEmitter.emit(this.team.name);
  }

  delete() {
    this.service.delete(this.team.name);
  }
}
