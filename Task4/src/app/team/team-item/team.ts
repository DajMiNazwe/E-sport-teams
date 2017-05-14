import {Player} from '../../player/player';
export class Team {
  name: string;
  rankingPosition: number;
  nationality: string;
  players: Player[] = [];

  constructor(name, rankingPosition, nationality) {
    this.name = name;
    this.rankingPosition = rankingPosition;
    this.nationality = nationality;
  }

  addPlayer(player: Player) {
    this.players.push(player);
  }
}
