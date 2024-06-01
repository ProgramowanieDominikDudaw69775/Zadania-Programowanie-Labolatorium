let tablicaLiczb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const suma = tablicaLiczb.reduce(function (akumulator, obecny) {
  return akumulator + obecny;
}, 0);
console.log("a. Suma wartosci:", suma);

const liczbyParzyste = tablicaLiczb.filter(function (liczba) {
  return liczba % 2 === 0;
});
console.log("b. Liczby parzyste:", liczbyParzyste);

const pomnozoneWartosci = tablicaLiczb.map(function (liczba) {
  return liczba * 3;
});
console.log("c. Pomnozone wartosci:", pomnozoneWartosci);

const numerAlbumu = 123456;
tablicaLiczb.push(numerAlbumu);
const indexNumeruAlbumu = tablicaLiczb.indexOf(numerAlbumu);
console.log("d. Index numeru albumu:", indexNumeruAlbumu);

const srednia =
  tablicaLiczb.reduce(function (akumulator, obecny) {
    return akumulator + obecny;
  }, 0) / tablicaLiczb.length;
console.log("e. Srednia arytmetyczna:", srednia);

const najwiekszaLiczba = Math.max(...tablicaLiczb);
console.log("f. Najwieksza liczba:", najwiekszaLiczba);

const wartoscDoZliczenia = 5;
const iloscWystapien = tablicaLiczb.filter(function (liczba) {
  return liczba === wartoscDoZliczenia;
}).length;
console.log(
  "g. Ilosc wystapien liczby " + wartoscDoZliczenia + ":",
  iloscWystapien
);
