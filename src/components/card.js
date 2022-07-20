import Api from "./api";

export default class Card {
  constructor (data, selectors, userId, api, popupWithImage) {
    this._title = data.name;
    this._url = data.link;
    this._countLike = data.likes;
    this._cardId = data._id;
    this._ownerId = data.owner._id;
    this._userId = userId;
    this._api = api;
    this._popupWithImage = popupWithImage;
    this._popup = popupWithImage;

    this._templateSelector = selectors.template;
    this._elementSelector = selectors.element;
    this._titleSelector = selectors.title;
    this._imageSelector = selectors.image;
    this._likeButtonSelector = selectors.likeButton;
    this._likeButtonActiveSelector = selectors.likeButtonActive;
    this._likeCountSelector = selectors.likeCount;
    this._deleteButtonSelector = selectors.deleteButton;
  }

  createElement() {
    const template = document.querySelector(this._templateSelector).content;
    const element = template.querySelector(this._elementSelector).cloneNode(true);
    const elementTitle = element.querySelector(this._titleSelector);
    const elementImage = element.querySelector(this._imageSelector);
    const elementLikeButton = element.querySelector(this._likeButtonSelector);
    const elementLikeCounter = element.querySelector(this._likeCountSelector);
    const elementDeleteButton = element.querySelector(this._deleteButtonSelector);

    elementTitle.textContent = this._title;
    elementImage.setAttribute('src', this._url);
    elementImage.setAttribute('alt', this._title);
    elementLikeCounter.textContent = this._countLike.length;

    if (this._checkCardOwner()) {
      elementDeleteButton.remove();
    }

    if (this._wasLike()) {
      elementLikeButton.classList.add(this._likeButtonActiveSelector);
    }

    this._setEventListener(element, elementLikeButton, elementLikeCounter, elementDeleteButton, elementImage);
    return element;
  }

  _wasLike() {
    return this._countLike.some((item) => {
      if (item._id === this._userId) {
        return true;
      }
    })
  }

  _checkLike(likeButton, likeCounter) {
    if (likeButton.classList.contains(this._likeButtonActiveSelector)) {
      this._api.deleteLike(this._cardId).then((cardData) => {
        likeButton.classList.remove(this._likeButtonActiveSelector);
        likeCounter.textContent = cardData.likes.length;
      })
      .catch((err) => console.log(err));
    } else {
      this._api.putLike(this._cardId)
      .then((cardData) => {
        likeButton.classList.add(this._likeButtonActiveSelector);
        likeCounter.textContent = cardData.likes.length;
      })
      .catch((err) => console.log(err));
    }
  }

  _checkCardOwner() {
    if (this._ownerId !== this._userId) {
      return true;
    }
  }

  _deleteElement(element) {
    this._api.deleteCard(this._cardId)
    .then(element.remove())
    .catch((err) => console.log(err));
  }



  _setEventListener(element, likeButton, likeCounter, deleteButton, image) {
    likeButton.addEventListener('click', () => this._checkLike(likeButton, likeCounter));
    deleteButton.addEventListener('click', () => this._deleteElement(element));
    image.addEventListener('click', () => this._popup.render(this._title, this._url));
  }

}
