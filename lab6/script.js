// Funkcja obsługująca zmianę kraju
function handleCountryChange(countryElement) {
  const selectedCountry = countryElement.value;
  const regionContainer = document.getElementById("regionContainer");
  const regionField = document.getElementById("regionField");
  const regionError = document.getElementById("regionError");
  regionField.innerHTML = "";

  if (selectedCountry === "poland") {
    const regions = [
      "Dolnośląskie",
      "Kujawsko-Pomorskie",
      "Lubelskie",
      "Lubuskie",
      "Łódzkie",
      "Małopolskie",
      "Mazowieckie",
      "Opolskie",
      "Podkarpackie",
      "Podlaskie",
      "Pomorskie",
      "Śląskie",
      "Świętokrzyskie",
      "Warmińsko-Mazurskie",
      "Wielkopolskie",
      "Zachodniopomorskie",
    ];
    const regionSelect = document.createElement("select");
    regionSelect.setAttribute("id", "region");
    regionSelect.setAttribute("name", "region");
    regionSelect.required = true;
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Wybierz województwo";
    regionSelect.appendChild(defaultOption);
    regions.forEach((region) => {
      const option = document.createElement("option");
      option.value = region.toLowerCase().replace(/\s/g, "-");
      option.textContent = region;
      regionSelect.appendChild(option);
    });
    regionField.appendChild(regionSelect);
    regionContainer.style.display = "block";
  } else {
    regionContainer.style.display = "none";
  }
}

// Funkcja obsługująca zmianę adresu korespondencyjnego
function handleCorrespondenceAddress() {
  const sameAsResidential = document.getElementById("sameAsResidential");
  const correspondenceAddressContainer = document.getElementById(
    "correspondenceAddressContainer"
  );
  if (sameAsResidential.checked) {
    correspondenceAddressContainer.style.display = "none";
  } else {
    correspondenceAddressContainer.style.display = "block";
  }
}

// Obsługa walidacji formularza
document.getElementById("myForm").addEventListener("submit", function (event) {
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const phone = document.getElementById("phone");
  const dob = document.getElementById("dob");
  const gender = document.querySelector('input[name="gender"]:checked');
  const country = document.getElementById("country");
  const address = document.getElementById("address");
  const region = document.getElementById("region");
  const correspondenceAddress = document.getElementById(
    "correspondenceAddress"
  );

  let isValid = true;

  isValid = hasValue(firstName, "Pole Imię jest wymagane.") && isValid;
  isValid = hasValue(lastName, "Pole Nazwisko jest wymagane.") && isValid;
  isValid = validateEmail(email, "Podaj poprawny adres email.") && isValid;
  isValid =
    checkLength(password, 6, 20, "Hasło musi mieć od 6 do 20 znaków.") &&
    isValid;
  isValid =
    checkConfirmPassword(
      confirmPassword,
      password,
      "Hasła nie pasują do siebie."
    ) && isValid;
  isValid = hasValue(phone, "Pole Telefon jest wymagane.") && isValid;
  isValid = validateDateOfBirth(dob, "Musisz być pełnoletni(a).") && isValid;

  if (!gender) {
    document.getElementById("genderError").textContent = "Wybierz płeć.";
    isValid = false;
  } else {
    document.getElementById("genderError").textContent = "";
  }

  if (country.value === "poland") {
    isValid = hasValue(region, "Wybierz województwo.") && isValid;
  }

  isValid =
    hasValue(address, "Pole Adres zamieszkania jest wymagane.") && isValid;

  if (!document.getElementById("sameAsResidential").checked) {
    isValid =
      hasValue(
        correspondenceAddress,
        "Pole Adres korespondencyjny jest wymagane."
      ) && isValid;
  }

  if (!isValid) {
    event.preventDefault();
  }
});

// Funkcja pomocnicza sprawdzająca czy pole ma wartość
function hasValue(field, errorMessage) {
  if (!field.value.trim()) {
    field.nextElementSibling.textContent = errorMessage;
    return false;
  } else {
    field.nextElementSibling.textContent = "";
    return true;
  }
}

// Funkcja pomocnicza sprawdzająca długość pola
function checkLength(field, min, max, errorMessage) {
  if (field.value.length < min || field.value.length > max) {
    field.nextElementSibling.textContent = errorMessage;
    return false;
  } else {
    field.nextElementSibling.textContent = "";
    return true;
  }
}

// Funkcja pomocnicza sprawdzająca zgodność hasła
function checkConfirmPassword(confirmPassword, password, errorMessage) {
  if (confirmPassword.value !== password.value) {
    confirmPassword.nextElementSibling.textContent = errorMessage;
    return false;
  } else {
    confirmPassword.nextElementSibling.textContent = "";
    return true;
  }
}

// Funkcja pomocnicza sprawdzająca poprawność adresu email
function validateEmail(email, errorMessage) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!pattern.test(email.value)) {
    email.nextElementSibling.textContent = errorMessage;
    return false;
  } else {
    email.nextElementSibling.textContent = "";
    return true;
  }
}

// Funkcja pomocnicza sprawdzająca poprawność daty urodzenia
function validateDateOfBirth(dob, errorMessage) {
  const today = new Date();
  const dobDate = new Date(dob.value);
  const age = today.getFullYear() - dobDate.getFullYear();
  const month = today.getMonth() - dobDate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < dobDate.getDate())) {
    age--;
  }
  if (age < 18) {
    dob.nextElementSibling.textContent = errorMessage;
    return false;
  } else {
    dob.nextElementSibling.textContent = "";
    return true;
  }
}
