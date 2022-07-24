export default class Popup {
  constructor(data, selectors) {
    this.popup = data.popup;
    this.buttonHide = data.buttonHide;
    this.selectorPopupActive = selectors.popupActive;

    this.hidePopup = this.hidePopup.bind(this);
    this.handleEscHide = this.handleEscHide.bind(this);
    this.handleOverlayHide = this.handleOverlayHide.bind(this);
  }

  handleOverlayHide(evt) {
    if (evt.target.classList.contains('popup_opened')) {
      this.hidePopup()
    }
  }

  handleEscHide(evt) {
    if (evt.key === 'Escape') {
      this.hidePopup();
    }
  }

  setEventListeners() {
    this.buttonHide.addEventListener('click', this.hidePopup);
    document.addEventListener('keydown', this.handleEscHide);
    document.addEventListener('mousedown', this.handleOverlayHide);
  }

  removeEventListeners() {
    this.buttonHide.removeEventListener('click', this.hidePopup);
    document.removeEventListener('keydown', this.handleEscHide);
    document.removeEventListener('mousedown', this.handleOverlayHide);
  }

  showPopup() {
    this.setEventListeners();
    this.popup.classList.add(this.selectorPopupActive);
  }

  hidePopup() {
    this.removeEventListeners();
    this.popup.classList.remove(this.selectorPopupActive);
  }
}
