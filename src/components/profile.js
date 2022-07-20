import {setFormValue} from './modal.js';

import {userName, userAbout, userAvatar} from './utils.js';



function renderProfile(userData) {
  userName.textContent = userData.name;
  userAbout.textContent = userData.about;
  userAvatar.src = userData.avatar;

  setFormValue(userData);
}



export {renderProfile};
