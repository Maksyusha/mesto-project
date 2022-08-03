export default class Card {
  constructor(selectors, data, userId, popupWithImage, {handleLike, handleDelete}) {
    this._popupWithImage = popupWithImage;
    this._data = data;
    this._userId = userId;
    this._handleLike = handleLike;
    this._handleDelete = handleDelete;

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
    this._template = document.querySelector(this._templateSelector).content;
    this._element = this._template.querySelector(this._elementSelector).cloneNode(true);
    this._elementTitle = this._element.querySelector(this._titleSelector);
    this._elementImage = this._element.querySelector(this._imageSelector);
    this._elementLikeButton = this._element.querySelector(this._likeButtonSelector);
    this._elementLikeCounter = this._element.querySelector(this._likeCountSelector);
    this._elementDeleteButton = this._element.querySelector(this._deleteButtonSelector);

    this._elementTitle.textContent = this._data.name;
    this._elementImage.setAttribute("src", this._data.link);
    this._elementImage.setAttribute("alt", this._data.name);
    this._elementLikeCounter.textContent = this._data.likes.length;

    if (this._checkCardOwner()) {
      this._elementDeleteButton.remove();
    }

    if (this._wasLike()) {
      this._elementLikeButton.classList.add(this._likeButtonActiveSelector);
    }

    this._setEventListener();

    return this._element;
  }

  getId() {
    return this._data._id;
  }

  checkLike() {
    if (this._elementLikeButton.classList.contains(this._likeButtonActiveSelector)) {
      return true;
    } else {
      return false;
    }
  }

  deleteElement() {
    this._element.remove();
    this._element = null;
  }

  likeElement(data) {
    this._elementLikeButton.classList.add(this._likeButtonActiveSelector);
    this._elementLikeCounter.textContent = data.likes.length;
  }

  dislikeElement(data) {
    this._elementLikeButton.classList.remove(this._likeButtonActiveSelector);
    this._elementLikeCounter.textContent = data.likes.length;
  }

  _wasLike() {
    return this._data.likes.some((item) => {
      if (item._id === this._userId) {
        return true;
      }
    });
  }

  _checkCardOwner() {
    if (this._data.owner._id !== this._userId) {
      return true;
    }
  }

  _setEventListener(
  ) {
    this._elementLikeButton.addEventListener("click", () =>
      // this._checkLike()
      this._handleLike()
    );
    this._elementDeleteButton.addEventListener("click", () =>
      this._handleDelete()
    );
    this._elementImage.addEventListener("click", () =>
      this._popupWithImage.showPopup(this._data.name, this._data.link)
    );
  }
}
