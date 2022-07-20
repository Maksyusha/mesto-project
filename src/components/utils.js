const config = {
  url: 'https://nomoreparties.co/v1/plus-cohort-13/',
  headers: {
    authorization: '2dd7389d-c9b9-45d3-bbd5-6f3fcf495c19',
    'Content-type': 'application/json'
  }
}

const selectors = {
  form: 'popup__form',
  submitButton: 'popup__submit-button',
  submitButtonInactive: 'popup__submit-button_inactive',
  input: 'popup__item',
  inputError: 'popup__item_type_error',
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



export {
  config,
  selectors,
  popupFormList
}
