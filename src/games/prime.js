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

const generate = () => {
  const question = randomInt(0, 20);
  const correctAnswer = (isPrime(question)) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const isPrimeGame = () => {
  const askThis = 'Answer "yes" if the number is prime, otherwise answer "no".';
  engine(generate, askThis);
  return 0;
};
export default isPrimeGame;
