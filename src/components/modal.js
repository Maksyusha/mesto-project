import {
  userName,
  userAbout,
  profilePopup,
  profileName,
  profileAbout,
  cardForm,
  cardPopup,
  cardTitle,
  cardLink,
  imagePopup,
  imagePicture,
  imageFigcaption
} from './utils.js';

import {renderElement} from './card.js';

function handlerEscClose(evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
}

function openPopup(popup) {
  popup.classList.add('popup_opened');

  document.addEventListener('keyup', handlerEscClose);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');

  document.removeEventListener('keyup', handlerEscClose);
}


function setFormValue(popup) {
  profileName.textContent = userName.textContent;
  profileAbout.textContent = userAbout.textContent;

  openPopup(popup);
}

function resetForm(form) {
  form.reset();
}

function submitProfilePopup(evt) {
  evt.preventDefault();

  userName.textContent = profileName.value;
  userAbout.textContent = profileAbout.value;

  closePopup(profilePopup);
}

function submitCardPopup(evt) {
  renderElement(cardTitle.value, cardLink.value);

  closePopup(cardPopup);

  resetForm(cardForm);

  evt.preventDefault();
}

function showImagePopup(link, title) {
  imagePicture.src = link;
  imagePicture.alt = title;
  imageFigcaption.textContent = title;

  openPopup(imagePopup);
}

function handlerOverlayClose(evt, popup) {
  if ((evt.target.classList.contains('popup_type_overlay')) || evt.target.classList.contains('popup__container')) {
    closePopup(popup);
  }
}



export {
  showImagePopup,
  setFormValue,
  openPopup,
  closePopup,
  submitProfilePopup,
  submitCardPopup,
  handlerOverlayClose
};
