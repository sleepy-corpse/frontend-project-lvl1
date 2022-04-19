import { engine } from '../index.js';
import randomInt from '../random.js';

const findGcd = (number1, number2) => {
  if (!number2) {
    return number1;
  }
  return findGcd(number2, number1 % number2);
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
