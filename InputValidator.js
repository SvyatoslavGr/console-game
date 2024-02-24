module.exports = class InputValidator {
  static validateArguments(moves) {
    if (moves.length < 3) {
      throw new Error("Invalid number of moves. Please provide at least 3 moves.");
    }
    if (moves.length % 2 === 0) {
      throw new Error("Invalid number of moves. Please provide an odd number of moves.");
    }
    if (new Set(moves).size !== moves.length) {
      throw new Error("Moves must be unique. Please provide distinct moves.");
    }
  }
}