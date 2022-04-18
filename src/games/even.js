import { engine } from '../index.js';
import randomInt from '../random.js';

const generate = () => {
  const question = randomInt(0, 20);
  const correctAnswer = (question % 2 === 0) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const isEvenGame = () => {
  const askThis = 'Answer "yes" if the number is even, otherwise answer "no".';
  engine(generate, askThis);
  return 0;
};
export default isEvenGame;
