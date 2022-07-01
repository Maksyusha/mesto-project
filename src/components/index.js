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
  cardPopup,
  cardForm,
  popupList,
} from './utils.js';

import {renderElement} from './card.js';

import {
  setFormValue,
  openPopup,
  closePopup,
  submitProfilePopup,
  submitCardPopup
} from './modal.js';

import {enableValidation} from './validate.js';

import {selectors} from './utils.js';



enableValidation(selectors);

userName.textContent = 'Жак-Ив Кусто';
userAbout.textContent= 'Исследователь океана';

profileName.value = userName.textContent;
profileAbout.value = userAbout.textContent;

elements.forEach(item => renderElement(item.title, item.link));

buttonEdit.addEventListener('click', () => setFormValue(profilePopup));
buttonAdd.addEventListener('click', () => openPopup(cardPopup));

profileForm.addEventListener('submit', submitProfilePopup);

cardForm.addEventListener('submit', submitCardPopup);

popupList.forEach((popup) => {

  popup.addEventListener('mousedown', (evt) => {

    if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__container')) {
      closePopup(popup)
    }

    if (evt.target.classList.contains('popup__close-button')) {
      closePopup(popup)
    }
  });
});
