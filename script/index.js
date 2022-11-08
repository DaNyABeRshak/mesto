//Обьявление переменных
let editButton = document.querySelector(".profile__edit-button");
let popupElem = document.querySelector(".popup");
let nameInput = document.querySelector(".popup__input_type_name");
let jobInput = document.querySelector(".popup__input_type_job");
let nameProfile = document.querySelector(".profile__author");
let StatusProfile = document.querySelector(".profile__author-status");
let formElem = document.querySelector(".popup_type_edit-profile");

//Функция для открытия попапа
let onOpen = function (popup) {
  popup.classList.add("popup__is-opened");
  nameInput.value = nameProfile.textContent; //
  jobInput.value = StatusProfile.textContent; //
};
let onClose = function (popup) {
  popup.classList.remove("popup__is-opened");
};
//Добавления слушателя событий для открытия попапа после нажатия на кнопку
editButton.addEventListener("click", function () {
  onOpen(popupElem);
});
popupElem.addEventListener("click", function (event) {
  let isOpen = event.target.classList.contains("popup__is-opened"); //
  let isClose = event.target.classList.contains("popup__close-button");
  if (isClose || isOpen) {
    onClose(popupElem);
  }
});

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  StatusProfile.textContent = jobInput.value;
  onClose(popupElem);
}
formElem.addEventListener("submit", formSubmitHandler);
