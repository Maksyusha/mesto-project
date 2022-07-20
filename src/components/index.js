import '../pages/index.css';

import Popup from './Popup.js';
import PopupWithImage from './PopupWithImage.js';
import FormValidator from './FormValidator.js';
import {config, selectors, cardSelectors, popupFormList, imagePopup} from './utils.js';
import Api from './api.js';
import Card from './card';
import { Section } from './Section.js';



popupFormList.forEach((item) => {
  const popup = new Popup(item, selectors);

  item.buttonShow.addEventListener('click', () => popup.showPop());
})

const popupWithImage = new PopupWithImage(imagePopup, selectors);

const formList = Array.from(document.querySelectorAll(`.${selectors.form}`));

formList.forEach((formElement) => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });

  const formValidator = new FormValidator(selectors, formElement);

  formValidator.setEventListners();
})

const api = new Api(config);

console.log(api.getCardsData());







Promise.all([api.getCardsData(), api.getUserData()])
  .then(([cardsData, userData]) => {
    // renderProfile(userData);

    const userId = userData._id;

    const renderCards = new Section({
      renderer: (cardData) => {
        const card = new Card(cardData, cardSelectors, userId, api, popupWithImage)
        const element = card.createElement();
        renderCards.addElement(element);
      }
    }, cardsData, cardSelectors.container);

    renderCards.render();
  })
  .catch((err) => console.log(err));


