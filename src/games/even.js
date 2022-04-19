import { engine } from '../index.js';
import randomInt from '../random.js';

const isEven = (num) => num % 2 === 0;

const generateData = () => {
  const question = randomInt(0, 20);
  const correctAnswer = (isEven(question)) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenGame = () => {
  engine(generateData, description);
};
export default isEvenGame;
