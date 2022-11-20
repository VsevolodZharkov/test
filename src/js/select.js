const dropDown = document.querySelectorAll(".drop-down");

dropDown.forEach(function (dropDownWrapper) {
  const button = dropDownWrapper.querySelector(".drop-down__button");
  const dropDownList = dropDownWrapper.querySelector(".drop-down__list");
  const dropDownListItem = dropDownList.querySelectorAll(
    ".drop-down__list-item"
  );
  const input = dropDownWrapper.querySelector(".drop-down__input-hidden");
  const svg = dropDownWrapper.querySelector(".drop-down__svg");

  button.addEventListener("click", function (e) {
    e.preventDefault();
    dropDownList.classList.toggle("drop-down__list--visible");
    svg.classList.toggle("is-hidden");
    this.classList.add("drop-down__button--active");
  });

  dropDownListItem.forEach(function (listItem) {
    listItem.addEventListener("click", function (e) {
      e.stopPropagation();
      button.innerText = this.innerText;
      button.focus();
      input.value = this.dataset.value;
      dropDownList.classList.remove("drop-down__list--visible");
    });
  });

  document.addEventListener("click", function (e) {
    if (e.target !== button) {
      dropDownList.classList.remove("drop-down__list--visible");
      button.classList.remove("drop-down__button--active");
    }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key == "Escape" || e.key == "Tab") {
      dropDownList.classList.remove("drop-down__list--visible");
      button.classList.remove("drop-down__button--active");
    }
  });
});
