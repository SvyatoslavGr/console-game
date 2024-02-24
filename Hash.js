const { randomBytes, createHmac } = require('node:crypto');

module.exports = class Hash {

  static generateSecret() {
    return randomBytes(32).toString('hex');
  }

  static generateHmac(secret, message) {
    return createHmac('sha3-256', secret).update(message.toString());
  }
}