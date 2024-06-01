const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let tablica = [1, 2, 3, 4, 5, 6];

function pobierzLiczbe(promptText) {
  return new Promise((resolve) => {
    rl.question(promptText, (input) => {
      let liczba = parseInt(input);
      while (isNaN(liczba)) {
        rl.question("Podano nieprawidłową wartość. " + promptText, (input) => {
          liczba = parseInt(input);
          if (!isNaN(liczba)) {
            resolve(liczba);
          }
        });
      }
      if (!isNaN(liczba)) {
        resolve(liczba);
      }
    });
  });
}

async function main() {
  console.log("Początkowa tablica:", tablica);
  let nowaLiczba = await pobierzLiczbe(
    "Podaj liczbę całkowitą do wstawienia: "
  );

  let indeks = await pobierzLiczbe(
    `Podaj indeks (0-${tablica.length}) do wstawienia liczby: `
  );
  while (indeks < 0 || indeks > tablica.length) {
    indeks = await pobierzLiczbe(
      `Podano nieprawidłowy indeks. Podaj indeks (0-${tablica.length}): `
    );
  }
  tablica.splice(indeks, 0, nowaLiczba);
  console.log("Nowa tablica:", tablica);

  rl.close();
}

main();
