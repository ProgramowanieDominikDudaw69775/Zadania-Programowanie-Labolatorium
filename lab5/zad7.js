function sumaDwochNajwiekszych(tablica) {
  if (tablica.length < 2) {
    return "Tablica musi zawierać przynajmniej dwie liczby";
  }
  tablica.sort((a, b) => b - a);
  return tablica[0] + tablica[1];
}

const mojaTablica = [10, 5, 7, 3, 9];
console.log(
  "Suma dwóch największych liczb:",
  sumaDwochNajwiekszych(mojaTablica)
);
