import { ERROR_TIMEOUT_DELAY } from './data.js';

const isEscapeKey = (evt) => evt.key === 'Escape';

const getCommentElement = ({avatar, name, message}) => {
  const comment = document.createElement('li');
  comment.classList.add('social__comment');

  const avatarImg = document.createElement('img');
  avatarImg.classList.add('social__picture');
  avatarImg.src = avatar;
  avatarImg.alt = name;
  avatarImg.width = 35;
  avatarImg.height = 35;

  const userComment = document.createElement('p');
  userComment.classList.add('social__text');
  userComment.textContent = message;

  comment.append(avatarImg, userComment);

  return comment;
};

const isTextField = (element) => (element.tagName === 'INPUT' && element.type === 'text')
  || element.tagName === 'TEXTAREA';

const showDataErrorMessage = () => {
  const template = document.querySelector('#data-error')
    .content.querySelector('.data-error');
  const message = template.cloneNode(true);
  document.body.appendChild(message);

  setTimeout(() => {
    message.remove();
  }, ERROR_TIMEOUT_DELAY);
};

const debounce = (callback, timeoutDelay) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const getRandomPhotos = (photos, count) => {
  const shuffled = [...photos].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, photos.length));
};

export {
  isEscapeKey,
  getCommentElement,
  isTextField,
  showDataErrorMessage,
  debounce,
  getRandomPhotos
};
