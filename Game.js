const Hash = require('./Hash');
const Table = require('./Table');
const Tools = require('./Tools');
const readlineSync = require('readline-sync');

module.exports = class Game {
  constructor(moves) {
    this.moves = moves;
    this.results = ['Draw!', 'You won!', 'You lost!'];
  }

  showMenu() {
    console.log('Available moves:')

    this.moves.forEach((el, i) => {
      console.log(`${i + 1} - ${el}`);
    });

    console.log('? - Help');
    console.log('0 - Exit');
  }

  getPlayerMove() {
    this.showMenu();
    let playerInput = readlineSync.question("Enter your move: ");

    if (playerInput === '0') {
      console.log("Exiting the game...");
      process.exit(0);
    }
    
    if (this.moves[playerInput - 1] !== undefined) {
      this.playerMove = playerInput - 1;
      this.end();
    }

    if (playerInput === '?') {
      console.log(this.help.toString());
    } else {
      console.log('Please choose an option only from available ones');
    }

    this.getPlayerMove();
  }

  start() {
    this.computerMove = Math.floor(Math.random() * this.moves.length);
    this.secret = Hash.generateSecret();
    this.hmac = Hash.generateHmac(this.secret, this.computerMove);
    this.help = new Table(this.moves);
    console.log('HMAC: ' + this.hmac.digest('hex'));
    this.getPlayerMove();
  }

  end() {
    console.log('Your move: ' + this.moves[this.playerMove]);
    console.log('Computer move: ' + this.moves[this.computerMove]);
    console.log(this.results.at(Tools.calculateResult(this.moves, this.playerMove, this.computerMove)));
    console.log('HMAC key: ' + this.secret);
    process.exit(0);
  }
}
