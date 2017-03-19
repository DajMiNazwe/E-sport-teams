let teams = [];

class Team {
  constructor(name, nationality, rankingPosition) {
    this.name = name;
    this.nationality = nationality;
    this.rankingPosition = rankingPosition;
  }
}

function addTeam(team) {
  teams.push(new Team('PRIDE', 'PL', 30));
}

function getTeamsFromJSON() {
    let xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'https://api.myjson.com/bins/s5uk3', true);
    xobj.onreadystatechange = (data) => {
        if (xobj.readyState == 4 && xobj.status == "200") {
            teams = JSON.parse(xobj.response);
            teams = teams.teams;
        }
    };
    xobj.send(null);
}

function showAllTeamsTable() {
    document.body.innerHTML = '<table id="table"><tr><td>Name</td><td>Nationality</td><td>Ranking position</td><tr></table>';
    for (let i = 0; i < teams.length ; i++) {
      document.getElementById('table').innerHTML += '<tr id="td' + i + '"></tr>';
      document.getElementById('td'+ i ).innerHTML = '<td>' + teams[i].name + '</td><td>' + teams[i].nationality +  '</td><td>' + teams[i].rankingPosition +  '</td>';
    }
}

(function init() {
    getTeamsFromJSON();
    setTimeout(() => {
      showAllTeamsTable();
    }, 400);
    setTimeout(() => {
        console.log(teams);
        addTeam('Team Kinguin', 'PL', 16);
        showAllTeamsTable();
    }, 1500)
})();
