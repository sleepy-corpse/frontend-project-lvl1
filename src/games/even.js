import { engine } from '../index.js';
import randomInt from '../random.js';

const isEvenGame = () => {
  const question = [];
  const correctAnswer = [];
  const askThis = 'Answer "yes" if the number is even, otherwise answer "no".';
  for (let i = 0; i < 3; i += 1) {
    question[i] = randomInt(0, 20);
    correctAnswer[i] = (question[i] % 2 === 0) ? 'yes' : 'no';
  }
  engine(question, correctAnswer, askThis);
  return 0;
};
export default isEvenGame;
