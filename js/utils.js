const getRandomIntInInterval = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));

  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

const getUniqueNumber = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomIntInInterval(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomIntInInterval(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const getCommentElement = ({avatar, name, message}) => {
  const comment = document.createElement('li');
  comment.classList.add('social__comment');

  const avatarImg = document.createElement('img');
  avatarImg.classList.add('social__picture');
  avatarImg.src = avatar;
  avatarImg.alt = name;
  avatarImg.width = 35;
  avatarImg.heigh = 35;

  const userComment = document.createElement('p');
  userComment.classList.add('social__text');
  userComment.textContent = message;

  comment.append(avatarImg, userComment);

  return comment;
};

export {
  getRandomIntInInterval,
  getUniqueNumber,
  isEscapeKey,
  getCommentElement
};
