const Tools = require('./Tools');
const AsciiTable = require('ascii-table');

module.exports = class Table extends AsciiTable {
  constructor(moves) {
    super();
    this.moves = moves;
    this.results = ['Draw', 'Win', 'Lose'];
    this.create();
  }

  create() {
    this.addRow('v PC\\User >', ...this.moves);
    for (let i = 0; i < this.moves.length; i++) {
      const row = [];
      for (let j = 0; j < this.moves.length; j++) {
        row.push(this.results.at(Tools.calculateResult(this.moves, j, i)));
      }
      this.addRow(`${this.moves[i]}`, ...row );
    }
  }
}