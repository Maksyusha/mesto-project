import '../pages/index.css';



const selectors = {
  popupActive: 'popup_opened',
}

const avatarPopup = {
  popup: document.querySelector('.popup_type_avatar'),
  buttonHide: document.querySelector('.popup_type_avatar').querySelector('.popup__close-button'),
  buttonShow: document.querySelector('.profile__avatar-edit-button'),
}

const profilePopup = {
  popup: document.querySelector('.popup_type_profile'),
  buttonHide: document.querySelector('.popup_type_profile').querySelector('.popup__close-button'),
  buttonShow: document.querySelector('.profile__edit-button'),
}

const cardPopup = {
  popup: document.querySelector('.popup_type_card'),
  buttonHide: document.querySelector('.popup_type_card').querySelector('.popup__close-button'),
  buttonShow: document.querySelector('.profile__add-button'),
}

const popupFormList = [
  avatarPopup,
  profilePopup,
  cardPopup
]

class Popup {
  constructor(data, selectors) {
    this.popup = data.popup;
    this.buttonShow = data.buttonShow;
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
    document.addEventListener('click', this.handleOverlayHide);
  }

  removeEventListeners() {
    this.buttonHide.removeEventListener('click', this.hidePopup);
    document.removeEventListener('keydown', this.handleEscHide);
    document.removeEventListener('click', this.handleOverlayHide);
  }

  showPop() {
    this.setEventListeners();
    this.popup.classList.add(this.selectorPopupActive);
  }

  hidePopup() {
    this.removeEventListeners();
    this.popup.classList.remove(this.selectorPopupActive);
  }
}



popupFormList.forEach((item) => {
  const popup = new Popup(item, selectors);

  item.buttonShow.addEventListener('click', () => popup.showPop());
})

