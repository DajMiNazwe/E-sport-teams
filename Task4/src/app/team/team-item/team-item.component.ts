import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Team} from './team';

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

  teamSelected() {
    console.log(`Team: ${this.team.name} selected`);
    this.isSelected ? this.isSelected = false : this.isSelected = true;
    this.clickEmitter.emit(this.team.name);
  }
}
