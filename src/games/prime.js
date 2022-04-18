import { engine } from '../index.js';
import randomInt from '../random.js';

const isPrime = (num) => {
  if (num === 1 || num === 0) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const isPrimeGame = () => {
  const question = [];
  const correctAnswer = [];
  const askThis = 'Answer "yes" if the number is prime, otherwise answer "no".';
  for (let i = 0; i < 3; i += 1) {
    question[i] = randomInt(0, 20);
    correctAnswer[i] = (isPrime(question[i])) ? 'yes' : 'no';
  }
  engine(question, correctAnswer, askThis);
  return 0;
};
export default isPrimeGame;
