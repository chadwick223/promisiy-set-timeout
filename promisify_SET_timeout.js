const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function delay(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}


rl.question('Enter the delay in seconds: ', (input) => {

  const delayTime = Number(input) * 1000;


  delay(delayTime).then(() => {
    console.log("Hello after the specified delay");
    rl.close(); 
  });
});
