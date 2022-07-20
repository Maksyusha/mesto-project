import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(data, selector) {
    super(data, selector)
    this._title = data.title;
    this._image = data.image;
    this._buttonHide = data.buttonHide;
  }

  renderData(title, url) {
    console.log('1');
    this._title = title;
    this._image = url;
    this._image.setAttribute('alt', title);
  }

//   showPopup() {
//     this.renderData(title, url)
//     super.showPopup();
//   }
}
