export default class Card {
  constructor(selectors, api, popupWithImage) {
    this._api = api;
    this._popupWithImage = popupWithImage;

    this._templateSelector = selectors.template;
    this._elementSelector = selectors.element;
    this._titleSelector = selectors.title;
    this._imageSelector = selectors.image;
    this._likeButtonSelector = selectors.likeButton;
    this._likeButtonActiveSelector = selectors.likeButtonActive;
    this._likeCountSelector = selectors.likeCount;
    this._deleteButtonSelector = selectors.deleteButton;
  }

  createElement(cardData, userId) {
    const template = document.querySelector(this._templateSelector).content;
    const element = template
      .querySelector(this._elementSelector)
      .cloneNode(true);
    const elementTitle = element.querySelector(this._titleSelector);
    const elementImage = element.querySelector(this._imageSelector);
    const elementLikeButton = element.querySelector(this._likeButtonSelector);
    const elementLikeCounter = element.querySelector(this._likeCountSelector);
    const elementDeleteButton = element.querySelector(
      this._deleteButtonSelector
    );

    elementTitle.textContent = cardData.name;
    elementImage.setAttribute("src", cardData.link);
    elementImage.setAttribute("alt", cardData.name);
    elementLikeCounter.textContent = cardData.likes.length;

    if (this._checkCardOwner(cardData, userId)) {
      elementDeleteButton.remove();
    }

    if (this._wasLike(cardData, userId)) {
      elementLikeButton.classList.add(this._likeButtonActiveSelector);
    }

    this._setEventListener(
      cardData,
      element,
      elementLikeButton,
      elementLikeCounter,
      elementDeleteButton,
      elementImage
    );
    return element;
  }

  _wasLike(cardData, userId) {
    return cardData.likes.some((item) => {
      if (item._id === userId) {
        return true;
      }
    });
  }

  _checkLike(cardData, likeButton, likeCounter) {
    if (likeButton.classList.contains(this._likeButtonActiveSelector)) {
      this._api
        .deleteLike(cardData._id)
        .then((data) => {
          likeButton.classList.remove(this._likeButtonActiveSelector);
          likeCounter.textContent = data.likes.length;
        })
        .catch((err) => console.log(err));
    } else {
      this._api
        .putLike(cardData._id)
        .then((data) => {
          likeButton.classList.add(this._likeButtonActiveSelector);
          likeCounter.textContent = data.likes.length;
        })
        .catch((err) => console.log(err));
    }
  }

  _checkCardOwner(cardData, userId) {
    if (cardData.owner._id !== userId) {
      return true;
    }
  }

  _deleteElement(element, cardData) {
    this._api
      .deleteCard(cardData._id)
      .then(element.remove())
      .catch((err) => console.log(err));
  }

  _setEventListener(
    cardData,
    element,
    likeButton,
    likeCounter,
    deleteButton,
    image
  ) {
    likeButton.addEventListener("click", () =>
      this._checkLike(cardData, likeButton, likeCounter)
    );
    deleteButton.addEventListener("click", () =>
      this._deleteElement(element, cardData)
    );
    image.addEventListener("click", () =>
      this._popupWithImage.showPopup(cardData.name, cardData.link)
    );
  }
}
