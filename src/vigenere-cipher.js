const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {

  constructor(direct = true) {
    this.direct = direct;
  }

  _process(text, key, encrypt) {
    if (!text || !key) throw new Error('Incorrect arguments!');
    
    text = text.toUpperCase();
    key = key.toUpperCase();
    let result = '';
    let j = 0;

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (/[A-Z]/.test(char)) {
        const shift = key[j % key.length].charCodeAt(0) - 65;
        const code = char.charCodeAt(0) - 65;
        const newCode = encrypt ? 
          (code + shift) % 26 : 
          (code - shift + 26) % 26;
        result += String.fromCharCode(newCode + 65);
        j++;
      } else {
        result += char;
      }
    }

    return this.direct ? result : [...result].reverse().join('');
  }

  encrypt(text, key) {
    return this._process(text, key, true);
  }

  decrypt(text, key) {
    return this._process(text, key, false);
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
