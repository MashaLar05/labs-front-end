document.getElementById("loadUser").addEventListener("click", function () {
  const button = document.getElementById("loadUser");
  button.disabled = true;

  fetch("https://randomuser.me/api/?results=3")
    .then((response) => response.json())
    .then((data) => {
      const users = data.results;

      const usersInfo = document.querySelectorAll(".user-info");

      if (usersInfo.length >= users.length) {
        users.forEach((user, index) => {
          const picture = user.picture.large;
          const name = `${user.name.first} ${user.name.last}`;
          const cell = user.cell;
          const city = user.location.city;
          const country = user.location.country;

          const userInfoHtml = `
              <img src="${picture}" alt="Picture of ${name}">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Cell:</strong> ${cell}</p>
              <p><strong>City:</strong> ${city}</p>
              <p><strong>Country:</strong> ${country}</p>
            `;

          usersInfo[index].innerHTML = userInfoHtml;
          usersInfo[index].classList.add("show-info");
        });
      } else {
        console.error(
          "Недостаточно div элементов для отображения всех пользователей."
        );
      }
    })
    .catch((error) => {
      console.error("Помилка при отриманні даних:", error);
      document.querySelectorAll(".user-info").forEach((userInfo) => {
        userInfo.innerHTML =
          "<p>Не вдалося завантажити дані. Спробуйте ще раз.</p>";
      });
    })
    .finally(() => {
      button.disabled = false;
    });
});
