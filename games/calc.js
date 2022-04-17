import greeting from '../src/cli.js';
import { getAnswer } from '../src/index.js';

const calcGame = () => {
  const userName = greeting();
  let correctCount = 0;
  let correctAnswer;
  const operators = ['+', '-', '*'];
  console.log('What is the result of the expression?');
  while (correctCount < 3) {
    const num1 = Math.floor(Math.random() * 20);
    const num2 = Math.floor(Math.random() * 20);
    const operatorId = Math.floor(Math.random() * 3);
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
    if (!getAnswer(question, correctAnswer, userName)) {
      return 0;
    }
    correctCount += 1;
  }
  console.log(`Congratulations, ${userName}!`);
  return 0;
};
export default calcGame;
