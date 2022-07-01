function handlerEscClose(evt) {
  if (evt.key === 'Escape') {
    popupList.forEach(popup => closePopup(popup));
  }
}

document.addEventListener('keyup', handlerEscClose(popup));
