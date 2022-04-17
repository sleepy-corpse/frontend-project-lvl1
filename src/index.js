import readlineSync from 'readline-sync';

export const countCorrectAnswers = (answ, num) => {
  if (answ) {
    return 1;
  }
  return -num;
};

export const getAnswer = (quest, corrAnswer, user) => {
  console.log(`Question: ${quest}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === corrAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${corrAnswer}'.`);
  console.log(`Let's try again, ${user}!`);
  return false;
};
