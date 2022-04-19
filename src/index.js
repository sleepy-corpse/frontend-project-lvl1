import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  console.log('May I have your name?');
  const name1 = readlineSync.question('Your answer: ');
  console.log(`Hello, ${name1}!`);
  return name1;
};

let roundsCount = 0;

export const engine = (generateData, ask) => {
  const userName = greeting();
  console.log(ask);
  while (roundsCount < 3) {
    const [question, correctAnswer] = generateData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    roundsCount += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};
