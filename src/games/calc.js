import { engine } from '../index.js';
import randomInt from '../random.js';

const calculate = (number1, number2, oper) => {
  switch (oper) {
    case '+':
      return String(number1 + number2);
    case '-':
      return String(number1 - number2);
    default:
      return String(number1 * number2);
  }
};

const generateData = () => {
  const operators = ['+', '-', '*'];
  const num1 = randomInt(0, 20);
  const num2 = randomInt(0, 20);
  const operatorId = randomInt(0, 3);
  const correctAnswer = calculate(num1, num2, operators[operatorId]);
  const question = `${num1} ${operators[operatorId]} ${num2}`;
  return [question, correctAnswer];
};

const description = 'What is the result of the expression?';

const calcGame = () => {
  engine(generateData, description);
};
export default calcGame;
