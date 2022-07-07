import {
  avatarPopup,
  avatarInput,
  avatarButtonSubmit,
  profilePopup,
  profileName,
  profileAbout,
  cardPopup,
  cardTitle,
  cardLink,
  cardButtonSubmit,
  imagePopup,
  imagePicture,
  imageFigcaption,
  profileButtonSubmit
} from './utils.js';

import {renderElement} from './card.js';

import {renderProfile} from './profile.js'

import {addCard, editUserData, editUserAvatar} from './api.js';

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

function setFormValue(userData) {
  profileName.value = userData.name;
  profileAbout.value = userData.about;
}

function renderLoading(isLoading, button) {
  if (isLoading) {
    button.textContent = 'Сохранение...';
  } else {
    button.textContent = 'Сохраненить';
  }
}

function submitAvatarProfile(evt) {
  renderLoading(true, avatarButtonSubmit)

  editUserAvatar({avatar: avatarInput.value})
  .then((userData) => renderProfile(userData))
  .catch((err) => console.log(err))
  .finally(() => renderLoading(false, avatarButtonSubmit));

  evt.target.reset()

  closePopup(avatarPopup);
}

function submitProfilePopup() {
  renderLoading(true, profileButtonSubmit)

  editUserData({name: profileName.value, about: profileAbout.value})
  .then((userData) => renderProfile(userData))
  .catch((err) => console.log(err))
  .finally(() => renderLoading(false, profileButtonSubmit));

  closePopup(profilePopup);
}

function submitCardPopup(evt) {
  renderLoading(true, cardButtonSubmit)

  addCard({name: cardTitle.value, link: cardLink.value})
  .then((cardData) => renderElement(cardData))
  .catch((err) => console.log(err))
  .finally(() => renderLoading(false, cardButtonSubmit));

  closePopup(cardPopup);

  evt.target.reset();

  cardButtonSubmit.setAttribute('disabled', true);
  cardButtonSubmit.classList.add('popup__submit-button_inactive');
}

function showImagePopup(evt) {
  imagePicture.src = evt.target.closest('.element').querySelector('.element__image').src;

  const title = evt.target.closest('.element').querySelector('.element__title').textContent;

  imagePicture.alt = title;
  imageFigcaption.textContent = title;

  openPopup(imagePopup);
}



export {
  showImagePopup,
  setFormValue,
  openPopup,
  closePopup,
  submitAvatarProfile,
  submitProfilePopup,
  submitCardPopup
};
