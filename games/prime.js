import greeting from '../src/cli.js';
import { getAnswer } from '../src/index.js';

const isPrime = (num) => {
  if (num === 1 || num === 0) {
    return false;
  }
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const isPrimeGame = () => {
  const userName = greeting();
  let correctCount = 0;
  console.log('Answer "yes" if the number is prime, otherwise answer "no".');
  while (correctCount < 3) {
    const question = Math.floor(Math.random() * 20);
    const correctAnswer = (isPrime(question)) ? 'yes' : 'no';
    if (!getAnswer(question, correctAnswer, userName)) {
      return 0;
    }
    correctCount += 1;
  }
  console.log(`Congratulations, ${userName}!`);
  return 0;
};
export default isPrimeGame;
