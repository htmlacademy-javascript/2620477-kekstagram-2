import {getPhotoDescription} from './data.js';

let photoDescriptions = [];

export const renderThumbnails = () => {
  const template = document.querySelector('#picture')
    .content
    .querySelector('.picture');
  const pictures = document.querySelector('.pictures');
  const photoFragment = document.createDocumentFragment();

  photoDescriptions = getPhotoDescription();

  photoDescriptions.forEach(({id, url, description, likes, comments}) => {
    const photoElement = template.cloneNode(true);
    const photoImgElement = photoElement.querySelector('.picture__img');
    const photoLikesElement = photoElement.querySelector('.picture__likes');
    const photoCommentsElement = photoElement.querySelector('.picture__comments');

    photoElement.dataset.photoId = id;
    photoImgElement.src = url;
    photoImgElement.alt = description;
    photoLikesElement.textContent = likes;
    photoCommentsElement.textContent = comments.length;

    photoFragment.appendChild(photoElement);
  });

  pictures.appendChild(photoFragment);
};

export const getPhotoDescriptions = () => photoDescriptions;
