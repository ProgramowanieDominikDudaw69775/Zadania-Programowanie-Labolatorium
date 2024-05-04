async function odliczajFor(liczba) {
  console.log("Sylwestrowe odliczanie 1:");
  for (let i = liczba; i > 0; i--) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(i);
  }
  console.log("Łiiii mamy nowy rok!");
}

async function odliczajWhile(liczba) {
  console.log("Sylwestrowe odliczanie 2:");
  let i = liczba;
  while (i > 0) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(i);
    i--;
  }
  console.log("Łiiii mamy nowy rok!");
}

odliczajFor(10);
odliczajWhile(10);

//zadanie2

function silnia(n, result) {
  if (n > 1) {
    return silnia(n - 1, result * n);
  } else {
    return result;
  }
}

const n = 5;
const sil = silnia(5, 1);
console.log("Silnia z liczby " + n + " wynosi : " + sil);

//zadanie3

const age = prompt("Podaj swój wiek : ");
if (age >= 18) {
  alert("Jesteś pełnoletni! Witamy na naszej stronie dla pełnoletnich");
} else {
  location.href = "stronaDlaDzieci.html";
}

//reszta zadań w index.html

//zadanie5 w pliku index.html dodane jako pokazanie jakiegoś fenka :)
