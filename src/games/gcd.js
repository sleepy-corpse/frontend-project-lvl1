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

const generate = () => {
  const num1 = randomInt(0, 50);
  const num2 = randomInt(0, 50);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(findGcd(num1, num2));
  return [question, correctAnswer];
};

const gcdGame = () => {
  const askThis = 'Find the greatest common divisor of given numbers.';
  engine(generate, askThis);
  return 0;
};
export default gcdGame;
