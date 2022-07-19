import '../pages/index.css';
import Popup from './Popup.js';
import FormValidator from './FormValidator.js';
import {config, selectors, popupFormList} from './utils.js';



popupFormList.forEach((item) => {
  const popup = new Popup(item, selectors);

  item.buttonShow.addEventListener('click', () => popup.showPop());
})



const formList = Array.from(document.querySelectorAll(`.${selectors.form}`));

formList.forEach((formElement) => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });

  const formValidator = new FormValidator(selectors, formElement);

  formValidator.setEventListners();
})



class Api {
  constructor(options) {
    this.url = options.url;
    this.headers = options.headers;
  }

  onResponse(res) {
    return res.ok ? res.json() : Promise.reject(res.status);
  }

  getUserData() {
    return fetch(`${this.url}users/me`, {
      method: 'GET',
      headers: this.headers
    })
    .then((res) => this.onResponse(res))
  }

  getCardsData() {
    return fetch(`${this.url}cards`, {
      method: 'GET',
      headers: this.headers
    })
    .then((res) => onResponse(res))
  }
}

const api = new Api(config)

console.log(api.getUserData());
console.log(api.getCardsData());
