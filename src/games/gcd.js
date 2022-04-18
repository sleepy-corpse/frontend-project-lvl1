import { engine } from '../index.js';
import randomInt from '../random.js';

const findGcd = (n1, n2) => {
  const min = Math.min(n1, n2);
  let gcd = Math.max(n1, n2); //  Если одно из чисел равно 0
  for (let i = 1; i <= min; i += 1) {
    if ((n1 % i === 0) && (n2 % i === 0)) {
      gcd = i;
    }
  }
  return gcd;
};

const gcdGame = () => {
  const question = [];
  const correctAnswer = [];
  const askThis = 'Find the greatest common divisor of given numbers.';
  for (let i = 0; i < 3; i += 1) {
    const num1 = randomInt(0, 50);
    const num2 = randomInt(0, 50);
    question[i] = `${num1} ${num2}`;
    correctAnswer[i] = String(findGcd(num1, num2));
  }
  engine(question, correctAnswer, askThis);
  return 0;
};
export default gcdGame;
