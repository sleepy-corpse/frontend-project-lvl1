import { countCorrectAnswers, getAnswer } from '../src/index.js';

const findGcd = (n1, n2) => {
  const min = Math.min(n1, n2);
  let gcd = Math.max(n1, n2); //  Если одно из чисел равно 0
  for (let i = 1; i <= min; i += 1) {
    if ((n1 % i === 0) && (n2 % i === 0)) {
      gcd = i;
    }
  }
  return gcd;
};

const gcdGame = (userName) => {
  let correctCount = 0;
  console.log('Find the greatest common divisor of given numbers.');
  while (correctCount < 3) {
    const num1 = Math.floor(Math.random() * 50);
    const num2 = Math.floor(Math.random() * 50);
    const question = `${num1} ${num2}`;
    const correctAnswer = String(findGcd(num1, num2));
    const isCorrect = getAnswer(question, correctAnswer, userName);
    correctCount += countCorrectAnswers(isCorrect, correctCount);
  }
  console.log(`Congratulations, ${userName}!`);
};
export default gcdGame;
