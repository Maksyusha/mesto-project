import '../pages/index.css';

import Popup from './Popup.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import FormValidator from './FormValidator.js';
import UserInfo from './UserInfo.js';
import {
  config,
  selectors,
  cardSelectors,
  userSelectors,
  avatarPopup,
  profilePopup,
  cardPopup,
  popupFormList,
  imagePopup}
from './utils.js';
import Api from './Api.js';
import Card from './Сard.js';
import { Section } from './Section.js';



// popupFormList.forEach((item) => {
//   const popup = new Popup(item, selectors);

//   item.buttonShow.addEventListener('click', () => popup.showPopup());
// })

const formList = Array.from(document.querySelectorAll(`.${selectors.form}`));

formList.forEach((formElement) => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });

  const formValidator = new FormValidator(selectors, formElement);

  formValidator.setEventListners();
})

const api = new Api(config);

const popupWithImage = new PopupWithImage(imagePopup, selectors);

const userInfo = new UserInfo(userSelectors);




Promise.all([api.getCardsData(), api.getUserData()])
  .then(([cardsData, userData]) => {
    userInfo.setUserInfo(userData);

    console.log(cardsData, userData);

    const userId = userData._id;

    const renderCards = new Section({
      renderer: (cardData) => {
        const card = new Card(cardData, cardSelectors, userId, api, popupWithImage)
        const element = card.createElement();
        renderCards.addItem(element);
      },
      data: cardsData
    }, cardSelectors.container);

    renderCards.render();
  })
  .catch((err) => console.log(err));




  const popupWithAvatar = new PopupWithForm(avatarPopup, selectors, (data) => {
    api.editUserAvatar(data)
    .then((data) => {
      userInfo.setUserInfo(data);
    })
    .catch((err) => console.log(err))
  })

  avatarPopup.buttonShow.addEventListener('click', () => {
    popupWithAvatar.showPopup();
  })



const popupWithProfile = new PopupWithForm(profilePopup, selectors, (data) => {
  api.editUserData(data)
  .then((data) => {
    userInfo.setUserInfo(data);
  })
  .catch((err) => console.log(err))
})

profilePopup.buttonShow.addEventListener('click', () => {
  popupWithProfile.setInputValues(userInfo.getUserData());
  popupWithProfile.showPopup();
})



const popupWithCard = new PopupWithForm(cardPopup, selectors, (data) => {
  api.addCard(data)
  .then((data) => {
    // userInfo.setUserInfo(data);
  })
  .catch((err) => console.log(err))
})

cardPopup.buttonShow.addEventListener('click', () => {
  popupWithCard.showPopup();
})
