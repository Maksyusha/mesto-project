const elementsContainer = document.querySelector('.elements');
const elementTemplate = document.querySelector('.element-template').content;

const userName = document.querySelector('.profile__name');
const userAbout = document.querySelector('.profile__about');
const userAvatar = document.querySelector('.profile__avatar');

const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');

const avatarEditButton = document.querySelector('.profile__avatar-edit-button')
const avatarPopup = document.querySelector('.popup_type_avatar');
const avatarForm = avatarPopup.querySelector('.popup__form');
const avatarInput = avatarPopup.querySelector('.popup__item_el_avatar');
const avatarButtonSubmit = avatarPopup.querySelector('.popup__submit-button');

const profilePopup = document.querySelector('.popup_type_profile');
const profileForm = profilePopup.querySelector('.popup__form');
const profileName = profilePopup.querySelector('.popup__item_el_name');
const profileAbout = profilePopup.querySelector('.popup__item_el_about');
const profileButtonSubmit = profilePopup.querySelector('.popup__submit-button');

const cardPopup = document.querySelector('.popup_type_card');
const cardForm = cardPopup.querySelector('.popup__form');
const cardTitle = cardPopup.querySelector('.popup__item_el_title');
const cardLink = cardPopup.querySelector('.popup__item_el_link');
const cardButtonSubmit = cardPopup.querySelector('.popup__submit-button');

const imagePopup = document.querySelector('.popup_type_image');
const imagePicture = imagePopup.querySelector('.popup__image');
const imageFigcaption = imagePopup.querySelector('.popup__figcaption');

const popupList = Array.from(document.querySelectorAll('.popup'));

const selectors = {
  form: 'popup__form',
  submitButton: 'popup__submit-button',
  submitButtonInactive: 'popup__submit-button_inactive',
  input: 'popup__item',
  inputError: 'popup__item_type_error',
}




export {
  elementsContainer,
  elementTemplate,
  userName,
  userAbout,
  userAvatar,
  buttonEdit,
  buttonAdd,
  avatarEditButton,
  avatarPopup,
  avatarForm,
  avatarInput,
  avatarButtonSubmit,
  profilePopup,
  profileForm,
  profileName,
  profileAbout,
  profileButtonSubmit,
  cardPopup,
  cardForm,
  cardTitle,
  cardLink,
  cardButtonSubmit,
  imagePopup,
  imagePicture,
  imageFigcaption,
  popupList,
  selectors
};
