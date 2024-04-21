alert("Hello World");

a = 10;
b = 20;
c = 23.2;

dodawanie = a + b + c;
odejmowanie = a - b - c;
mnożenie = a * b * c;
dzielenie = a / b / c;

alert("Dodawanie : " + dodawanie);
alert("Odejmowanie : " + odejmowanie);
alert("Mnożenie : " + mnożenie);
alert("Dzielenie : " + dzielenie);

console.log("Dodawanie : " + dodawanie);
console.log("Odejmowanie : " + odejmowanie);
console.log("Mnożenie : " + mnożenie);
console.log("Dzielenie : " + dzielenie);

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("add").innerHTML = "Dodawnie" + dodawanie;
  document.getElementById("sub").innerHTML = "Odejmownie" + odejmowanie;
  document.getElementById("mul").innerHTML = "Mnożenie" + mnożenie;
  document.getElementById("divi").innerHTML = "Dzielenie" + dzielenie;
  for (let i = 0; i <= 100; i += 2) {
    console.log(i);
  }
  const imie = prompt("Jak Ci na imię? ");
  console.log("Witaj : " + imie);
  alert("Cześć " + imie);
  a = parseFloat(prompt("Podaj dlugość a"));
  b = parseFloat(prompt("Podaj dlugość b"));
  c = parseFloat(prompt("Podaj dlugość c"));
  if (a + b > c && a + c > b && b + c > a) {
    const pole2 = (a + b + c) / 2;
    console.log(pole2);
    alert("Pole trójkąta : " + pole2);
    const pole = Math.sqrt(pole2 * (pole2 - a) * (pole2 - b) * (pole2 - c));
    console.log("Pole trójkąta : " + pole);
  } else {
    console.log("Nie można skonstruować trójkąta!!!");
  }
  const first = parseFloat(prompt("Podaj pierwszą liczbę : "));
  const second = parseFloat(prompt("Podaj drugą liczbę : "));
  const wynik = first + second;
  alert("Wynik dodawania tych 2 liczb to : " + wynik);

  const numberOne = parseFloat(prompt("Podaj pierwszą liczbę : "));
  const numberTwo = parseFloat(prompt("Podaj drugą liczbę : "));
  const numberThree = parseFloat(prompt("Podaj trzecią liczbę : "));
  if (numberOne > numberTwo && numberOne > numberThree) {
    console.log("Liczba " + numberOne + "jest największa");
    document.getElementById("wynik").innerHTML =
      "Wynik porównania 3 liczb :" + numberOne;
  } else if (numberTwo > numberOne && numberTwo > numberThree) {
    console.log("Liczba " + numberTwo + "jest największa");
    document.getElementById("wynik").innerHTML =
      "Wynik porównania 3 liczb :" + numberTwo;
  } else if (numberThree > numberTwo && numberThree > numberOne) {
    console.log("Liczba " + numberThree + "jest największa");
    document.getElementById("wynik").innerHTML =
      "Wynik porównania 3 liczb :" + numberThree;
  }
});
