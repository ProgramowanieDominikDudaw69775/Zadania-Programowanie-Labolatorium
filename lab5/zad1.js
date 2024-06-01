const readline = require("readline");

// Tworzenie interfejsu do czytania danych wejściowych od użytkownika
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Tworzymy pustą tablicę na 10 liczb całkowitych
let tablica = [];

// Funkcja do pobrania liczby całkowitej od użytkownika
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

// Asynchroniczna funkcja do zarządzania całą logiką programu
async function main() {
  for (let i = 0; i < 10; i++) {
    let liczba = await pobierzLiczbe(`Podaj liczbę całkowitą ${i + 1}: `);
    tablica.push(liczba);
  }

  // Wyświetlenie wartości w tablicy
  console.log("Wprowadzone liczby to:");
  tablica.forEach((liczba) => console.log(liczba));

  // Pobranie liczby do wyszukania w tablicy
  let szukanaLiczba = await pobierzLiczbe(
    "Podaj liczbę całkowitą do wyszukania: "
  );

  // Przeszukanie tablicy i zliczenie, ile razy liczba została znaleziona
  let licznik = tablica.filter((liczba) => liczba === szukanaLiczba).length;

  // Wyświetlenie wyniku
  console.log(
    `Liczba ${szukanaLiczba} została znaleziona ${licznik} razy w tablicy.`
  );

  rl.close();
}

// Uruchomienie głównej funkcji
main();
