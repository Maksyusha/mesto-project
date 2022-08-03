import "../pages/index.css";

import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import FormValidator from "./FormValidator.js";
import UserInfo from "./UserInfo.js";
import {
  config,
  selectors,
  cardSelectors,
  userSelectors,
  avatarPopup,
  profilePopup,
  cardPopup,
  imagePopup,
} from "./utils.js";
import Api from "./Api.js";
import Card from "./Сard.js";
import Section from "./Section.js";



const api = new Api(config);

const popupWithImage = new PopupWithImage(imagePopup, selectors);

const userInfo = new UserInfo(userSelectors);

let userId;

let section;



function createCard(cardData, userId) {
  const card = new Card(cardSelectors, cardData, userId, popupWithImage, {
    handleLike: () => {
      if (card.checkLike()) {
        api
          .deleteLike(card.getId())
          .then((data) => card.dislikeElement(data))
          .catch((err) => console.log(err));
      } else {
        api
          .putLike(card.getId())
          .then((data) => card.likeElement(data))
          .catch((err) => console.log(err));
      }
    },
    handleDelete: () => {
      api
        .deleteCard(card.getId())
        .then(card.deleteElement())
        .catch((err) => console.log(err));
    }
  });

  const element = card.createElement();

  return element;
}



const formList = Array.from(document.querySelectorAll(`.${selectors.form}`));

formList.forEach((formElement) => {
  formElement.addEventListener("submit", (evt) => {
    evt.preventDefault();
  });

  const formValidator = new FormValidator(formElement, selectors);

  formValidator.enableValidation();
});



const popupWithAvatar = new PopupWithForm(avatarPopup, selectors, (data) => {
  popupWithCard.renderLoading(true);

  api
    .editUserAvatar(data)
    .then((data) => {
      userInfo.setUserInfo(data);
      popupWithAvatar.hidePopup();
    })
    .catch((err) => console.log(err))
    .finally(popupWithCard.renderLoading(false));
});

avatarPopup.buttonShow.addEventListener("click", () => {
  popupWithAvatar.showPopup();
});



const popupWithProfile = new PopupWithForm(profilePopup, selectors, (data) => {
  popupWithCard.renderLoading(true);

  api
    .editUserData(data)
    .then((data) => {
      userInfo.setUserInfo(data);
      popupWithProfile.hidePopup();
    })
    .catch((err) => console.log(err))
    .finally(() => popupWithCard.renderLoading(false));
});

profilePopup.buttonShow.addEventListener("click", () => {
  popupWithProfile.setInputValues(userInfo.getUserData());
  popupWithProfile.showPopup();
});



const popupWithCard = new PopupWithForm(cardPopup, selectors, (data) => {
  popupWithCard.renderLoading(true);

  api
    .addCard(data)
    .then((data) => {
      section.addItem(createCard(data, userId));
      popupWithCard.hidePopup();
    })
    .catch((err) => console.log(err))
    .finally(popupWithCard.renderLoading(false));
});

cardPopup.buttonShow.addEventListener("click", () => {
  popupWithCard.showPopup();
});



Promise.all([api.getCardsData(), api.getUserData()])
  .then(([cardsData, userData]) => {
    userInfo.setUserInfo(userData);

    userId = userData._id;

    section = new Section(
      {
        renderer: (cardData) => {
          section.addItem(createCard(cardData, userId));
        },
        data: cardsData,
      },
      cardSelectors.container
    );

    section.render();
  })
  .catch((err) => console.log(err));
