module.exports = class Tools {
  static calculateResult(moves, compMove, playerMove) {
    const n = moves.length;
    const p = Math.floor(n / 2);
    return Math.sign((compMove - playerMove + p + n) % n - p);
  }
}