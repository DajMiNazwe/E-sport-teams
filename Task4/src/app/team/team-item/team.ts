import {Player} from '../../player/player';
export class Team {
  name: string;
  rankingPosition: number;
  nationality: string;
  players: Player[];

  constructor(name, rankingPosition, nationality, players?) {
    this.name = name;
    this.rankingPosition = rankingPosition;
    this.nationality = nationality;
    if (players) {
      this.players = players;
    }
  }
}
