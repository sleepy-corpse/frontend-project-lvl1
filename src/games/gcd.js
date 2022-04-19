import { engine } from '../index.js';
import randomInt from '../random.js';

const findGcd = (n1, n2) => {
  if (!n2) {
    return n1;
  }
  return findGcd(n2, n1 % n2);
};

const generateData = () => {
  const num1 = randomInt(0, 50);
  const num2 = randomInt(0, 50);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(findGcd(num1, num2));
  return [question, correctAnswer];
};

const description = 'Find the greatest common divisor of given numbers.';

const gcdGame = () => {
  engine(generateData, description);
};
export default gcdGame;
