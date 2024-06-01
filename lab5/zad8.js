function usunDuplikaty(tablica) {
  let unikalne = [];
  tablica.forEach(function (element) {
    if (!unikalne.includes(element)) {
      unikalne.push(element);
    }
  });
  return unikalne;
}

const mojaTablica = [1, 2, 2, 3, 4, 4, 5];
console.log("Tablica bez duplikatow:", usunDuplikaty(mojaTablica));
