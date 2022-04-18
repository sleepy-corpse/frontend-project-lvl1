import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  console.log('May I have your name?');
  const name1 = readlineSync.question('Your answer: ');
  console.log(`Hello, ${name1}!`);
  return name1;
};

export const engine = (generateData, ask) => {
  const userName = greeting();
  console.log(ask);
  for (let i = 0; i < 3; i += 1) {
    const gameData = generateData();
    console.log(`Question: ${gameData[0]}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === gameData[1]) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${gameData[1]}'.`);
      console.log(`Let's try again, ${userName}!`);
      return 0;
    }
  }
  console.log(`Congratulations, ${userName}!`);
  return 0;
};
