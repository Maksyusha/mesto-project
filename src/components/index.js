import '../pages/index.css';

import {
  elements,
  userName,
  userAbout,
  buttonEdit,
  buttonAdd,
  profilePopup,
  profileForm,
  profileName,
  profileAbout,
  profileButtonClose,
  cardPopup,
  cardForm,
  cardButtonClose,
  imagePopup,
  imageButtonClose,
  popupList,
} from './utils.js';

import {renderElement} from './card.js';

import {
  setFormValue,
  openPopup,
  closePopup,
  submitProfilePopup,
  submitCardPopup,
  handlerOverlayClose
} from './modal.js';

import {enableValidation} from './validate.js';



enableValidation();

userName.textContent = 'Жак-Ив Кусто';
userAbout.textContent= 'Исследователь океана';

profileName.value = userName.textContent;
profileAbout.value = userAbout.textContent;

elements.forEach(item => renderElement(item.title, item.link));

buttonEdit.addEventListener('click', () => setFormValue(profilePopup));
buttonAdd.addEventListener('click', () => openPopup(cardPopup));

profileButtonClose.addEventListener('click', () => closePopup(profilePopup));
profileForm.addEventListener('submit', submitProfilePopup);

cardButtonClose.addEventListener('click', () => closePopup(cardPopup));
cardForm.addEventListener('submit', submitCardPopup);

imageButtonClose.addEventListener('click', () => closePopup(imagePopup));

popupList.forEach(popup => {
  popup.addEventListener('click', (evt) => handlerOverlayClose(evt, popup));
});

