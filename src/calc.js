import getAnswer from './index.js';

const calcGame = (userName) => {
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
    if (getAnswer(question, correctAnswer, userName)) {
      correctCount += 1;
    } else {
      correctCount = 0;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default calcGame;
