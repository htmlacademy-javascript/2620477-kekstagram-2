import {isEscapeKey, getCommentElement} from './utils.js';
import {getPhotoDescriptions} from './thumbnail.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const body = document.querySelector('body');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePhotoModal();
  }
};

const renderComments = (comments) => {
  const socialComments = bigPicture.querySelector('.social__comments');
  const shownComments = bigPicture.querySelector('.social__comment-shown-count');
  const commentsCount = bigPicture.querySelector('.social__comment-total-count');
  const socialCommentCount = bigPicture.querySelector('.social__comment-count');
  const commentsLoader = bigPicture.querySelector('.comments-loader');
  const maxComments = comments.length;

  socialComments.innerHTML = '';
  const fragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    fragment.append(getCommentElement(comment));
  });

  socialComments.append(fragment);

  shownComments.textContent = maxComments;
  commentsCount.textContent = maxComments;

  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
};

const openPhotoModal = (photo) => {
  const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
  const socialCaption = bigPicture.querySelector('.social__caption');
  const likesCount = bigPicture.querySelector('.likes-count');

  bigPictureImg.src = photo.url;
  bigPictureImg.alt = photo.description;
  socialCaption.textContent = photo.description;
  likesCount.textContent = photo.likes;

  renderComments(photo.comments);

  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
};

function closePhotoModal() {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
}

const onThumbnailClick = (evt) => {
  const thumbnail = evt.target.closest('.picture');

  if (!thumbnail) {
    return;
  }

  evt.preventDefault();

  const thumbnailPhotoId = thumbnail.dataset.photoId;
  const photoData = getPhotoDescriptions().find((photo) => photo.id === Number(thumbnailPhotoId));

  if (photoData) {
    openPhotoModal(photoData);
  }
};

const initPhotoModal = () => {
  document.querySelector('.pictures')
    .addEventListener('click', onThumbnailClick);
  bigPictureCancel.addEventListener('click', closePhotoModal);
};

export {initPhotoModal};
