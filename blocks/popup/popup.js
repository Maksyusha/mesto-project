const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

profileName.textContent = 'Жак-Ив Кусто';
profileAbout.textContent= 'Исследователь океана';

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popupForm = document.querySelector('.popup_type_form');
const popupHeading = popupForm.querySelector('.popup__heading');
const inputName = document.querySelector('.popup__item_el_name');
const inputAbout = document.querySelector('.popup__item_el_about');
const closeButton = popupForm.querySelector('.popup__close-button');
const submitButton = popupForm.querySelector('.popup__submit-button');



function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function unsavePopup() {
  inputName.value = '';
  inputAbout.value = '';
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');

  unsavePopup();
}

function setPopupPlaceholders(evtName) {
  switch (evtName) {
    case 'edit-button':
      popupHeading.textContent = 'Редактировать профиль';

      inputName.placeholder = profileName.textContent;
      inputAbout.placeholder = profileAbout.textContent;
      break;

    case 'add-button':
      popupHeading.textContent = 'Новое место';

      inputName.placeholder = 'Название';
      inputAbout.placeholder = 'Ссылка на картинку';
      break;
  }
}

function submitPopup(evt) {
  evt.preventDefault();

  switch (evtName) {
    case 'edit-button':
      profileName.textContent = inputName.value;
      profileAbout.textContent = inputAbout.value;
      break;

    case 'add-button':
      addElement(inputName.value, inputAbout.value);
      break;
  }

  closePopup(popupForm);
}

function showPopup(evt) {
  evtName = evt.target.name;

  setPopupPlaceholders(evtName);

  closeButton.addEventListener('click', () => closePopup(popupForm));

  submitButton.addEventListener('click', submitPopup);

  openPopup(popupForm);
}



editButton.addEventListener('click', showPopup);
addButton.addEventListener('click', showPopup);



const popupImage = document.querySelector('.popup_type_image');
const popupPicture = document.querySelector('.popup__image');
const popupFigcaption = document.querySelector('.popup__figcaption');
const imageCloseButton = popupImage.querySelector('.popup__close-button');



function showPopupImage(image, title) {
  popupPicture.src = image.src;
  popupFigcaption.textContent = title.textContent;

  imageCloseButton.addEventListener('click', () => closePopup(popupImage));

  openPopup(popupImage);
}
