const config = {
  url: 'https://nomoreparties.co/v1/plus-cohort-13/',
  headers: {
    authorization: '2dd7389d-c9b9-45d3-bbd5-6f3fcf495c19',
    'Content-type': 'application/json'
  }
}

const onResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(res.status);
}

const getUserData = () => {
  return fetch(config.url + 'users/me', {
    method: 'GET',
    headers: config.headers
  })
  .then((res) => onResponse(res))
}

const getCardsData = () => {
  return fetch(config.url + 'cards', {
    method: 'GET',
    headers: config.headers
  })
  .then((res) => onResponse(res))
}

const addCard = (data) => {
  return fetch(config.url + 'cards', {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify(data)
  })
  .then((res) => onResponse(res))
}

const editUserData = (data) => {
  return fetch(config.url + 'users/me', {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify(data)
  })
  .then((res) => onResponse(res))
}

const editUserAvatar = (data) => {
  return fetch(config.url + 'users/me/avatar', {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify(data)
  })
  .then((res) => onResponse(res))
}

const addLike = (cardId) => {
  return fetch(config.url + 'cards/likes/' + cardId, {
    method: 'PUT',
    headers: config.headers,
  })
  .then((res) => onResponse(res))
}

const removeLike = (cardId) => {
  return fetch(config.url + 'cards/likes/' + cardId, {
    method: 'DELETE',
    headers: config.headers,
  })
  .then((res) => onResponse(res))
}

const removeCard = (cardId) => {
  return fetch(config.url + '/cards/' + cardId, {
    method: 'DELETE',
    headers: config.headers,
  })
  .then((res) => onResponse(res))
}



export {
  getUserData,
  getCardsData,
  addCard,
  editUserData,
  editUserAvatar,
  addLike,
  removeLike,
  removeCard
}
