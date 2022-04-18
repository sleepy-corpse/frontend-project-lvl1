import { engine } from '../index.js';
import randomInt from '../random.js';

const generate = () => {
  let correctAnswer;
  const operators = ['+', '-', '*'];
  const num1 = randomInt(0, 20);
  const num2 = randomInt(0, 20);
  const operatorId = randomInt(0, 3);
  switch (operatorId) {
    case 0:
      correctAnswer = String(num1 + num2);
      break;
    case 1:
      correctAnswer = String(num1 - num2);
      break;
    default:
      correctAnswer = String(num1 * num2);
  }
  const question = `${num1} ${operators[operatorId]} ${num2}`;
  return [question, correctAnswer];
};

const calcGame = () => {
  const askThis = 'What is the result of the expression?';
  engine(generate, askThis);
  return 0;
};
export default calcGame;
