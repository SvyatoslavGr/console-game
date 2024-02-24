const Game = require('./Game');
const InputValidator = require('./InputValidator');

try {
  const args = process.argv.slice(2);
  InputValidator.validateArguments(args);
  const game = new Game(args);
  game.start();
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
