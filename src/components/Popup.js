export default class Popup {
  constructor(data, selectors) {
    this._popup = data.popup;
    this._buttonHide = data.buttonHide;
    this._selectorPopupActive = selectors.popupActive;

    this.hidePopup = this.hidePopup.bind(this);
    this._handleEscHide = this._handleEscHide.bind(this);
    this._handleOverlayHide = this._handleOverlayHide.bind(this);
  }

  _handleOverlayHide(evt) {
    if (evt.target.classList.contains(this._selectorPopupActive)) {
      this.hidePopup();
    }
  }

  _handleEscHide(evt) {
    if (evt.key === "Escape") {
      this.hidePopup();
    }
  }

  setEventListeners() {
    this._buttonHide.addEventListener("click", this.hidePopup);
    document.addEventListener("keydown", this._handleEscHide);
    document.addEventListener("mousedown", this._handleOverlayHide);
  }

  removeEventListeners() {
    this._buttonHide.removeEventListener("click", this.hidePopup);
    document.removeEventListener("keydown", this._handleEscHide);
    document.removeEventListener("mousedown", this._handleOverlayHide);
  }

  showPopup() {
    this.setEventListeners();
    this._popup.classList.add(this._selectorPopupActive);
  }

  hidePopup() {
    this.removeEventListeners();
    this._popup.classList.remove(this._selectorPopupActive);
  }
}
