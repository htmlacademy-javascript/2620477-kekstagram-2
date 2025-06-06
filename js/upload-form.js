import {isEscapeKey} from './utils.js';
import { initScale } from './scale.js';
import { initEffects, resetEffects } from './effects.js';

const uploadInput = document.querySelector('.img-upload__input');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadCancel = document.querySelector('.img-upload__cancel');
const form = document.querySelector('.img-upload__form');
const body = document.querySelector('body');

let scaleModule = null;

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUploadForm();
  }
};

const openUploadForm = () => {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  scaleModule = initScale();
  initEffects();

  document.addEventListener('keydown', onDocumentKeydown);
  uploadCancel.addEventListener('click', closeUploadForm);
};

function closeUploadForm () {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');

  resetEffects();

  scaleModule.resetScale();
  scaleModule.destroy();
  scaleModule = null;

  form.reset();
  uploadInput.value = '';

  document.removeEventListener('keydown', onDocumentKeydown);
  uploadCancel.removeEventListener('click', closeUploadForm);
}

const onFileInputChange = (evt) => {
  const file = evt.target.files[0];

  if (!file || !file.type.match('image.*')) {
    return;
  }

  openUploadForm();
};

const initUploadForm = () => {
  uploadInput.addEventListener('change', onFileInputChange);
};

export { initUploadForm, onDocumentKeydown, closeUploadForm };
