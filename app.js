const team= {
  _players:[
    {
    firstName: "Micheal",
    lastName: "Jordan",
    age:40
  },
  {
    firstName: "Scottie",
    lastName: "Pippen",
    age:33
  },
  {
    firstName: "Dennis",
    lastName: "Rodman",
    age:22
  }],
  _games:[
    {opponent:'Jazz', 
    teamPoints: 88,
    opponentPoints:65
    },
    {
      opponent: 'Pistons',
      teamPoints: 76,
      opponentPoints: 22
      },
      {
        opponent:'Celtics',
        teamPoints: 55,
        opponentPoints:56
      }
  ],
  get players() {
    return this._players
  },
  get games() {
    return this._games
  },
  addPlayer(firstName, lastName, age) {
    let nuub={
      firstName: firstName,
      lastName: lastName,
      age: age
    }
    this.players.push(nuub)
  },
  addGame(opponent, yourpts, oppopoints){
    let game={
      opponent: opponent,
      teamPoints: yourpts,
      opponentPoints: oppopoints
    }
    this.games.push(game)
  }
}

/* testing for code validation
team.addPlayer('Steph', 'Curry', 28)
team.addPlayer('Lisa', 'Leslie', 44)
team.addPlayer('Bugs', 'Bunny', 76)
*/

team.addGame("Heat", 99,1)
team.addGame("Lakers", 45,45)
team.addGame("Suns", 109, 99)
console.log(team.games)