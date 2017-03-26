let teams = [];

class Team {
  constructor(name, nationality, rankingPosition) {
    this.name = name;
    this.nationality = nationality;
    this.rankingPosition = rankingPosition;
  }

  addTeam(team) {
    teams.push(team);
  }

  showAllTeamsTable() {
      document.body.innerHTML = '<table id="table"><tr><td>Name</td><td>Nationality</td><td>Ranking position</td><tr></table>';
      for (let i = 0; i < teams.length ; i++) {
        document.getElementById('table').innerHTML += '<tr id="td' + i + '"></tr>';
        document.getElementById('td'+ i ).innerHTML = '<td>' + teams[i].name + '</td><td>' + teams[i].nationality +  '</td><td>' + teams[i].rankingPosition +  '</td>';
      }
  }
}

function getTeamsFromJSON() {
    let xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', './json.json', true);
    xobj.onreadystatechange = (data) => {
        if (xobj.readyState == 4 && xobj.status == "200") {
            teams = JSON.parse(xobj.response);
            teams = teams.teams;
        }
    };
    xobj.send(null);
}

(function init() {
    let team = new Team('Kinguin', 'PL', 18);
    getTeamsFromJSON();
    setTimeout(() => {
      team.showAllTeamsTable();
    }, 400);
    setTimeout(() => {
        console.log(teams);
        team.addTeam(team);
        team.addTeam(new Team('PRIDE', 'PL', 30));
        team.showAllTeamsTable();
    }, 1500)
})();
