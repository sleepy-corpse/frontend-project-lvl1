import { engine } from '../index.js';
import randomInt from '../random.js';

const calcGame = () => {
  const operators = ['+', '-', '*'];
  const question = [];
  const correctAnswer = [];
  const askThis = 'What is the result of the expression?';
  for (let i = 0; i < 3; i += 1) {
    const num1 = randomInt(0, 20);
    const num2 = randomInt(0, 20);
    const operatorId = randomInt(0, 3);
    switch (operatorId) {
      case 0:
        correctAnswer[i] = String(num1 + num2);
        break;
      case 1:
        correctAnswer[i] = String(num1 - num2);
        break;
      default:
        correctAnswer[i] = String(num1 * num2);
    }
    question[i] = `${num1} ${operators[operatorId]} ${num2}`;
  }
  engine(question, correctAnswer, askThis);
  return 0;
};
export default calcGame;
