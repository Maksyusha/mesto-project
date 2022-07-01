import {elementsContainer, elementTemplate} from './utils.js';

import {showImagePopup} from './modal.js';



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

  elementImage.addEventListener('click', () => showImagePopup(link, title));

  return element;
}

function renderElement(title, link) {
  elementsContainer.prepend(createElement(title, link));
}



export {renderElement};
