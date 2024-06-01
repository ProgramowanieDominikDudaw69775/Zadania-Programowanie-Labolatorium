const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function odwrocCiag(ciag) {
  return ciag.split("").reverse().join("");
}

function pobierzCiag() {
  return new Promise((resolve) => {
    rl.question("Wprowadź ciąg znaków do odwrócenia: ", (input) => {
      resolve(input);
    });
  });
}

async function main() {
  const ciag = await pobierzCiag();
  const odwroconyCiag = odwrocCiag(ciag);
  console.log("Odwrocony ciąg:", odwroconyCiag);
  rl.close();
}

main();
