import getAnswer from './index.js';

const isEvenGame = (userName) => {
  let correctCount = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (correctCount < 3) {
    const question = Math.floor(Math.random() * 20);
    const correctAnswer = (question % 2 === 0) ? 'yes' : 'no';
    if (getAnswer(question, correctAnswer, userName)) {
      correctCount += 1;
    } else {
      correctCount = 0;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default isEvenGame;
