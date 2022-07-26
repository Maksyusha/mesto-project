export default class UserInfo {
  constructor(userSelectors) {
    this._name = document.querySelector(userSelectors.name);
    this._about = document.querySelector(userSelectors.about);
    this._avatar = document.querySelector(userSelectors.avatar);
  }

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._about.textContent = data.about;
    this._avatar.src = data.avatar;
  }

  getUserData() {
    const userData = {
      name: this._name.textContent,
      about: this._about.textContent,
    };
    return userData;
  }
}
