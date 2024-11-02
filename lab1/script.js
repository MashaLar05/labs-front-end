let clickCount = 0;

function ChangeColor(element) {
  const firstElement = document.getElementById("date-of-birth");
  const secondElement = document.querySelector(".education");

  if (element === firstElement) {
    firstElement.classList.add("first-element-active");
  }

  if (clickCount % 2 === 1) {
    secondElement.classList.add("second-element-active");
  }

  clickCount++;

  if (clickCount > 2) {
    if (clickCount % 2 === 1) {
      firstElement.classList.remove("first-element-active");
      firstElement.classList.add("second-element-active");

      secondElement.classList.remove("second-element-active");
      secondElement.classList.add("first-element-active");
    } else {
      firstElement.classList.remove("second-element-active");
      firstElement.classList.add("first-element-active");

      secondElement.classList.remove("first-element-active");
      secondElement.classList.add("second-element-active");
    }
  }
}

const image = document.getElementById("bukovel-image");

const addButton = document.getElementById("add-button");
const increaseButton = document.getElementById("increase-button");
const decreaseButton = document.getElementById("decrease-button");
const deleteButton = document.getElementById("delete-button");

increaseButton.disabled = true;
decreaseButton.disabled = true;
deleteButton.disabled = true;

function AddImage() {
  image.classList.remove("image-hidden");
  addButton.disabled = true;
  deleteButton.disabled = false;
  increaseButton.disabled = false;
  decreaseButton.disabled = false;
}

function IncreaseImage(button) {
  image.style.width = image.offsetWidth * 1.1 + "px";
  image.style.height = image.offsetHeight * 1.1 + "px";
}

function DecreaseImage(button) {
  image.style.width = image.offsetWidth * 0.9 + "px";
  image.style.height = image.offsetHeight * 0.9 + "px";
}

function DeleteImage() {
  image.classList.add("image-hidden");
  addButton.disabled = false;
  increaseButton.disabled = true;
  decreaseButton.disabled = true;
  deleteButton.disabled = true;
}
