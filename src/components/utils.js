const elements = [
  {
    title: 'Лас-Вегас',
    link: 'https://images.unsplash.com/photo-1653161652427-135caab0dae1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
  },
  {
    title: 'Антарктика',
    link: 'https://images.unsplash.com/photo-1650359369952-bf80eb7bae5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1013&q=80',
  },
  {
    title: 'Эдинбург',
    link: 'https://images.unsplash.com/photo-1653315381156-70055ca1df1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  },
  {
    title: 'Гиза',
    link: 'https://images.unsplash.com/photo-1640005438758-861043e64aa5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80',
  },
  {
    title: 'Тегеран',
    link: 'https://images.unsplash.com/photo-1652806724545-669233b0b1f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  },
  {
    title: 'Мачу-Пикчу',
    link: 'https://images.unsplash.com/photo-1651389331411-bb49cbb9f331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  },
];

const elementsContainer = document.querySelector('.elements');
const elementTemplate = document.querySelector('.element-template').content;

const userName = document.querySelector('.profile__name');
const userAbout = document.querySelector('.profile__about');

const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');

const profilePopup = document.querySelector('.popup_type_profile');
const profileForm = profilePopup.querySelector('.popup__form');
const profileName = profilePopup.querySelector('.popup__item_el_name');
const profileAbout = profilePopup.querySelector('.popup__item_el_about');

const profileButtonClose = profilePopup.querySelector('.popup__close-button');
const profileButtonSubmit = profilePopup.querySelector('.popup__submit-button');

const cardPopup = document.querySelector('.popup_type_card');
const cardForm = cardPopup.querySelector('.popup__form');
const cardTitle = cardPopup.querySelector('.popup__item_el_title');
const cardLink = cardPopup.querySelector('.popup__item_el_link');
const cardButtonClose = cardPopup.querySelector('.popup__close-button');
const cardButtonSubmit = cardPopup.querySelector('.popup__submit-button');

const imagePopup = document.querySelector('.popup_type_image');
const imagePicture = imagePopup.querySelector('.popup__image');
const imageFigcaption = imagePopup.querySelector('.popup__figcaption');
const imageButtonClose = imagePopup.querySelector('.popup__close-button');

const popupList = Array.from(document.querySelectorAll('.popup'));



export {
  elements,
  elementsContainer,
  elementTemplate,
  userName,
  userAbout,
  buttonEdit,
  buttonAdd,
  profilePopup,
  profileForm,
  profileName,
  profileAbout,
  profileButtonClose,
  profileButtonSubmit,
  cardPopup,
  cardForm,
  cardTitle,
  cardLink,
  cardButtonClose,
  cardButtonSubmit,
  imagePopup,
  imagePicture,
  imageFigcaption,
  imageButtonClose,
  popupList,
};
