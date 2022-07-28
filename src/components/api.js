export default class Api {
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
    .then((res) => this.onResponse(res))
  }

  addCard(data) {
    return fetch(`${this.url}cards`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(data)
    })
    .then((res) => this.onResponse(res));
  }

  editUserData(data) {
    return fetch(`${this.url}users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify(data)
    })
    .then((res) => this.onResponse(res));
  }

  editUserAvatar(data) {
    return fetch(`${this.url}users/me/avatar`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify(data)
    })
    .then((res) => this.onResponse(res));
  }

  putLike(cardId){
    return fetch(`${this.url}cards/likes/${cardId}`, {
      method: 'PUT',
      headers: this.headers,
    })
    .then((res) => this.onResponse(res));
  }

  deleteLike(cardId){
    return fetch(`${this.url}cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: this.headers,
    })
    .then((res) => this.onResponse(res));
  }

  deleteCard(cardId){
    return fetch(`${this.url}cards/${cardId}`, {
      method: 'DELETE',
      headers: this.headers,
    })
    .then((res) => this.onResponse(res));
  }
}


