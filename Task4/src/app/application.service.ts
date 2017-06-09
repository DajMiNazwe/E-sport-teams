import {Injectable} from '@angular/core';
import {Team} from './team/team-item/team';
import {Observable, Subject} from 'rxjs';

@Injectable()
export class ApplicationService {

  private emitChangeSource = new Subject<any>();

  changeEmitted$ = this.emitChangeSource.asObservable();

  constructor() {
  }

  add(team: Team): void {
    teams.push(team);
    this.refreshList();
  }

  list(): Observable<Team[]> {
    return Observable.of(teams);
  }

  edit(currentName: string, team: Team): void {
    const index = this.getIndex(currentName);
    teams[index] = team;
    this.refreshList();
  }

  delete(name: string): void {
    teams.splice(this.getIndex(name), 1);
    this.refreshList();
  }

  find(name: string): Team {
    return teams[this.getIndex(name)];
  }

  private refreshList() {
    this.emitChangeSource.next();
  }

  private getIndex(name: string): number {
    return teams.map((x) => {
      return x.name;
    }).indexOf(name);
  }
}

const teams = [new Team('Virtus.Pro', 10, 'PL'), new Team('Astralis', 1, 'DE'), new Team('SK Gaming', 2, 'BR')];

