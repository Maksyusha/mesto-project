import '../pages/index.css';

import {
  buttonEdit,
  buttonAdd,
  avatarEditButton,
  avatarPopup,
  avatarForm,
  profilePopup,
  profileForm,
  cardPopup,
  cardForm,
  popupList,
  selectors
} from './utils.js';

import {renderElement} from './card.js';

import {
  openPopup,
  closePopup,
  submitAvatarProfile,
  submitProfilePopup,
  submitCardPopup,
} from './modal.js';

import {enableValidation} from './validate.js';

import {renderProfile} from './profile.js';

import {getUserData, getCardsData} from './api.js';



enableValidation(selectors);



avatarEditButton.addEventListener('click', () => openPopup(avatarPopup))
buttonEdit.addEventListener('click', () => openPopup(profilePopup));
buttonAdd.addEventListener('click', () => openPopup(cardPopup));

avatarForm.addEventListener('submit', submitAvatarProfile);
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



Promise.all([getCardsData(), getUserData()])
  .then(([cardsData, userData]) => {
    renderProfile(userData);

    let userId = userData._id;

    cardsData.forEach((cardData) => renderElement(cardData, userId));
  })
  .catch((err) => console.log(err));
