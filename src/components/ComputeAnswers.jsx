import CryptoJS from 'crypto-js';
import ConsoleHelper from '../util/consoleHelper';

export default function ComputeAnswers(ansDict, expected) {
  let ansStr = ""

  for (let i = 1; i <= 15; i++) {
    if (ansDict[i]) {
      ansStr = ansStr + ansDict[i];
    }
  }

  ConsoleHelper(`got: ${CryptoJS.SHA256(ansStr).toString(CryptoJS.enc.Hex)}\nexpected: ${expected}`)

  return expected === CryptoJS.SHA256(ansStr).toString(CryptoJS.enc.Hex);
}
