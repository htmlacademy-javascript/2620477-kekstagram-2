import {isEscapeKey, getCommentElement} from './utils.js';
import {COMMENTS_PER_PAGE} from './data.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const body = document.querySelector('body');
const socialComments = bigPicture.querySelector('.social__comments');
const shownCommentsCount = bigPicture.querySelector('.social__comment-shown-count');
const commentsTotalCount = bigPicture.querySelector('.social__comment-total-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const picturesContainer = document.querySelector('.pictures');

let currentComments = [];
let shownComments = 0;
let photoDescriptions = [];

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePhotoModal();
  }
};

const renderComments = () => {
  const commentsToShow = Math.min(shownComments + COMMENTS_PER_PAGE, currentComments.length);

  for (let i = shownComments; i < commentsToShow; i++) {
    socialComments.appendChild(getCommentElement(currentComments[i]));
  }

  shownComments = commentsToShow;
  shownCommentsCount.textContent = shownComments;
  commentsTotalCount.textContent = currentComments.length;

  commentsLoader.classList.toggle('hidden', shownComments >= currentComments.length);
};

const loadMoreComments = () => {
  renderComments();
};

const openPhotoModal = (photo) => {
  const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
  const socialCaption = bigPicture.querySelector('.social__caption');
  const likesCount = bigPicture.querySelector('.likes-count');

  bigPictureImg.src = photo.url;
  bigPictureImg.alt = photo.description;
  socialCaption.textContent = photo.description;
  likesCount.textContent = photo.likes;

  currentComments = photo.comments;
  shownComments = 0;
  socialComments.textContent = '';
  commentsLoader.classList.remove('hidden');

  renderComments();

  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
  commentsLoader.addEventListener('click', loadMoreComments);
};

function closePhotoModal() {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');

  currentComments = [];
  shownComments = 0;

  document.removeEventListener('keydown', onDocumentKeydown);
  commentsLoader.removeEventListener('click', loadMoreComments);
}

const onThumbnailClick = (evt) => {
  const thumbnail = evt.target.closest('.picture');

  if (!thumbnail) {
    return;
  }

  evt.preventDefault();

  const thumbnailPhotoId = thumbnail.dataset.photoId;
  const photoData = photoDescriptions.find((photo) => photo.id === Number(thumbnailPhotoId));

  if (photoData) {
    openPhotoModal(photoData);
  }
};

const initPhotoModal = (photos) => {
  photoDescriptions = photos;
  picturesContainer.addEventListener('click', onThumbnailClick);
  bigPictureCancel.addEventListener('click', closePhotoModal);
};

export {initPhotoModal};
