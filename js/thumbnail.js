import {createArrPhotoDescription} from './data.js';

export const renderThumbnails = () => {
  const template = document.querySelector('#picture').content.querySelector('.picture');
  const pictures = document.querySelector('.pictures');
  const photoDescriptions = createArrPhotoDescription();
  const photoFragment = document.createDocumentFragment();

  photoDescriptions.forEach(({url, description, likes, comments}) => {
    const photoElement = template.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__img').alt = description;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent = comments.length;
    photoFragment.appendChild(photoElement);
  });

  pictures.appendChild(photoFragment);
};
