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

const elementContainer = document.querySelector('.elements');



function likeElement(evt) {
  evt.target.classList.toggle('element__like-button_active');
}

function deleteElement(element) {
  element.remove();
}

function addElement(title, link) {
  const elementTemplate = document.querySelector('.element-template').content;
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

  elementImage.addEventListener('click', () => showPopupImage(elementImage, elementTitle));

  elementContainer.prepend(element);
}

elements.forEach(item => addElement(item.title, item.link));
