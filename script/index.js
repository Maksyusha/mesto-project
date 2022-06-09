const elementsContainer = document.querySelector('.elements');
const elementTemplate = document.querySelector('.element-template').content;



function likeElement(evt) {
  evt.target.classList.toggle('element__like-button_active');
}

function deleteElement(element) {
  element.remove();
}

function createElement(title, link) {
  const element = elementTemplate.querySelector('.element').cloneNode(true);
  const elementTitle = element.querySelector('.element__title');
  const elementImage = element.querySelector('.element__image');
  const elementLikeButton = element.querySelector('.element__like-button');
  const elementDeleteButton = element.querySelector('.element__delete-button');

  elementTitle.textContent = title;
  elementImage.src = link;
  elementImage.alt = title;

  elementLikeButton.addEventListener('click', likeElement);

  elementDeleteButton.addEventListener('click', () => deleteElement(element));

  elementImage.addEventListener('click', () => showImagePopup(elementImage, elementTitle));

  return element;
}

function renderElement(title, link) {
  elementsContainer.prepend(createElement(title, link));
}

elements.forEach(item => renderElement(item.title, item.link));



const userName = document.querySelector('.profile__name');
const userAbout = document.querySelector('.profile__about');

userName.textContent = 'Жак-Ив Кусто';
userAbout.textContent= 'Исследователь океана';



const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');

buttonEdit.addEventListener('click', () => openPopup(profilePopup));
buttonAdd.addEventListener('click', () => openPopup(cardPopup));



const profilePopup = document.querySelector('.popup_type_profile');
const profileName = profilePopup.querySelector('.popup__item_el_name');
const profileAbout = profilePopup.querySelector('.popup__item_el_about');
const profileButtonClose = profilePopup.querySelector('.popup__close-button');
const profileButtonSubmit = profilePopup.querySelector('.popup__submit-button');

profileButtonClose.addEventListener('click', () => closePopup(profilePopup, profileName, profileAbout));
profileButtonSubmit.addEventListener('click', submitProfilePopup)



const cardPopup = document.querySelector('.popup_type_card');
const cardTitle = cardPopup.querySelector('.popup__item_el_title');
const cardLink = cardPopup.querySelector('.popup__item_el_link');
const cardButtonClose = cardPopup.querySelector('.popup__close-button');
const cardButtonSubmit = cardPopup.querySelector('.popup__submit-button');

cardButtonClose.addEventListener('click', () => closePopup(cardPopup, cardTitle, cardLink));
cardButtonSubmit.addEventListener('click', submitCardPopup)



const imagePopup = document.querySelector('.popup_type_image');
const imagePicture = imagePopup.querySelector('.popup__image');
const imageFigcaption = imagePopup.querySelector('.popup__figcaption');
const imagebuttonClose = imagePopup.querySelector('.popup__close-button');

imagebuttonClose.addEventListener('click', () => closePopup(imagePopup));



function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function unsavePopup(name, about) {
  name.value = '';
  about.value = '';
}

function closePopup(popup, name, about) {
  popup.classList.remove('popup_opened');

  unsavePopup(name, about);
}

function submitProfilePopup(evt) {
  evt.preventDefault();

  userName.textContent = profileName.value;
  userAbout.textContent = profileAbout.value;

  closePopup(profilePopup, profileName, profileAbout);
}

function submitCardPopup(evt) {
  evt.preventDefault();

  renderElement(cardTitle.value, cardLink.value);

  closePopup(cardPopup, cardTitle, cardLink);
}

function showImagePopup(image, title) {
  imagePicture.src = image.src;
  imagePicture.alt = title.textContent;
  imageFigcaption.textContent = title.textContent;

  openPopup(imagePopup);
}
