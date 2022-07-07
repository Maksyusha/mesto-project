import {elementsContainer, elementTemplate} from './utils.js';

import {getUserData, removeCard, addLike, removeLike} from './api.js';

import {showImagePopup} from './modal.js';



const userId = await getUserData().then((userData) => userData._id).catch((err) => console.log(err));



function handleLikeElement(likeButton, cardData, counter) {
  if (likeButton.classList.contains('element__like-button_active')) {
    removeLike(cardData._id)
    .then((cardData) => {
      likeButton.classList.remove('element__like-button_active');
      counter.textContent = cardData.likes.length;
    })
    .catch((err) => console.log(err));
  } else {
    addLike(cardData._id)
    .then((cardData) => {
      likeButton.classList.add('element__like-button_active');
      counter.textContent = cardData.likes.length;
    })
    .catch((err) => console.log(err));
  }
}

function checkOwner(cardData, userId) {
  if (cardData.owner._id == userId) {
    return true;
  } else {
    return false
  };
}

function deleteElement(cardData, element) {
  removeCard(cardData._id)
  .catch((err) => console.log(err));

  element.remove();
}

function setElementListeners(element, cardData, userId, likeButton, counter, deleteButton, image) {
  likeButton.addEventListener('click', () => handleLikeElement(likeButton, cardData, counter));

  image.addEventListener('click', showImagePopup);

  if (checkOwner(cardData, userId)) {
    deleteButton.addEventListener('click', () => deleteElement(cardData, element))
  } else {
    deleteButton.remove();
  }
}

function checkUserLikes(cardData, userId, counter, likeButton) {
  const likes = cardData.likes

  if (likes.length !== 0) {
    counter.textContent = cardData.likes.length;

    if (likes.find((likes) => likes._id === userId)) {
      likeButton.classList.add('element__like-button_active');
    }
  }
}

function createElement(cardData) {
  const element = elementTemplate.querySelector('.element').cloneNode(true);
  const elementTitle = element.querySelector('.element__title');
  const elementImage = element.querySelector('.element__image');
  const elementLikeButton = element.querySelector('.element__like-button');
  const elementLikeCounter = element.querySelector('.element__like-count');
  const elementDeleteButton = element.querySelector('.element__delete-button');

  checkUserLikes(cardData, userId, elementLikeCounter, elementLikeButton);

  setElementListeners(element, cardData, userId, elementLikeButton, elementLikeCounter, elementDeleteButton, elementImage)

  elementTitle.textContent = cardData.name;
  elementImage.src = cardData.link;
  elementImage.alt = cardData.name;

  return element;
}

function renderElement(cardData) {
  elementsContainer.prepend(createElement(cardData));
}



export {renderElement};
