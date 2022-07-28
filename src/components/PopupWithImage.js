import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(data, selectors) {
    super(data, selectors)
    this._title = data.title;
    this._image = data.image;
    this._buttonHide = data.buttonHide;
  }

  renderData(title, url) {
    this._title.textContent = title;
    this._image.src = url;
    this._image.alt = title;
  }

  showPopup(title, url) {
    this.renderData(title, url);
    super.showPopup();
  }
}
