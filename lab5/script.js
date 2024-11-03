function ValidateData() {
  const name = document.getElementById("name");
  const variant = document.getElementById("variant");
  const group = document.getElementById("group");
  const phone = document.getElementById("phone");
  const id_card = document.getElementById("id-card");

  const resultForm = document.getElementById("resultForm");
  const overlay = document.getElementById("overlay");

  name.classList.remove("error");
  variant.classList.remove("error");
  group.classList.remove("error");
  phone.classList.remove("error");
  id_card.classList.remove("error");

  const nameRegex = /^[А-ЯІЇЄҐ][а-яіїєґ]+\s[А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/; // Ларіна М.М.
  const variantRegex = /^[1-9]$/;
  const groupRegex = /^[А-ЯІЇЄҐ][А-ЯІЇЄҐ]-\d{2}$/; // ІС-22
  const phoneRegex = /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/; // (096)-243-78-57
  const idCardRegex = /^[A-Z][A-Z]+\s\№\d{6}$/; // ID №123456

  let isValid = true;
  if (!nameRegex.test(name.value)) {
    name.classList.add("error");
    isValid = false;
  }
  if (!variantRegex.test(variant.value)) {
    variant.classList.add("error");
    isValid = false;
  }
  if (!groupRegex.test(group.value)) {
    group.classList.add("error");
    isValid = false;
  }
  if (!phoneRegex.test(phone.value)) {
    phone.classList.add("error");
    isValid = false;
  }
  if (!idCardRegex.test(id_card.value)) {
    id_card.classList.add("error");
    isValid = false;
  }

  if (isValid) {
    const result = `
        Name: ${name.value}
        Variant: ${variant.value}
        Group: ${group.value}
        Phone: ${phone.value}
        ID Card: ${id_card.value}
    `;

    resultForm.classList.remove("hidden");
    overlay.classList.remove("hidden");

    const resultOutput = document.getElementById("resultOutput");
    resultOutput.value = result;
  } else {
    alert("Please correct the highlighted fields.");
  }
}

overlay.addEventListener("click", function () {
  resultForm.classList.add("hidden");
  overlay.classList.add("hidden");
});

current_cell = document.getElementById("cell-variant");
palette = document.getElementById("colorPicker");

let isClick = false;

current_cell.addEventListener("mouseenter", function () {
  isClick = false;
  let red, blue, green;
  const min = 0;
  const max = 255;

  red = Math.floor(Math.random() * (max - min + 1)) + min;
  blue = Math.floor(Math.random() * (max - min + 1)) + min;
  green = Math.floor(Math.random() * (max - min + 1)) + min;

  current_cell.style.background = `rgb(${red}, ${blue}, ${green})`;
});

current_cell.addEventListener("mouseleave", function () {
  if (!isClick) {
    const row = current_cell.parentNode;
    row.querySelectorAll(".cell").forEach((cell) => {
      cell.style.backgroundColor = `rgb(255, 255, 255)`;
    });
  }
});

current_cell.addEventListener("click", function () {
  current_cell.style.backgroundColor = palette.value;
  isClick = true;
});

current_cell.addEventListener("dblclick", function () {
  const row = current_cell.parentNode;
  row.querySelectorAll(".cell").forEach((cell) => {
    cell.style.backgroundColor = palette.value;
  });
});
