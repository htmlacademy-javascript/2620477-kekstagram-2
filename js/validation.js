import {
  MAX_UPLOAD_FORM_COMMENT_LENGTH,
  MAX_HASHTAGS,
  HASHTAG_REGEX,
  UploadFormErrorMessage
} from './data.js';
import { onDocumentKeydown } from './upload-form.js';

const form = document.querySelector('.img-upload__form');
const hashtagInput = form.querySelector('.text__hashtags');
const commentInput = form.querySelector('.text__description');

const normalizeHashtags = (value) => value.trim()
  .split(/\s+/)
  .filter(Boolean);

const validateHashtagFormat = (value) => {
  if (!value) {
    return true;
  }
  const hashtags = normalizeHashtags(value);

  return hashtags.every((hashtag) => HASHTAG_REGEX.test(hashtag));
};

const validateHashtagCount = (value) => {
  if (!value) {
    return true;
  }
  const hashtags = normalizeHashtags(value);

  return hashtags.length <= MAX_HASHTAGS;
};

const checkDuplicateHashtags = (value) => {
  if (!value) {
    return true;
  }
  const hashtags = normalizeHashtags(value);
  const lowerCaseHashtags = hashtags.map((tag) => tag.toLowerCase());
  const uniqueHashtags = new Set(lowerCaseHashtags);

  return uniqueHashtags.size === hashtags.length;
};

const validateComment = (value) => !value || value.length <= MAX_UPLOAD_FORM_COMMENT_LENGTH;

const initValidation = () => {
  const pristine = new Pristine(form, {
    classTo: 'img-upload__field-wrapper',
    errorClass: 'img-upload__field-wrapper--error',
    errorTextParent: 'img-upload__field-wrapper',
    errorTextClass: 'pristine-error',
  });

  pristine.addValidator(
    hashtagInput,
    validateHashtagFormat,
    UploadFormErrorMessage.INVALID_HASHTAG,
    1,
    true
  );

  pristine.addValidator(
    hashtagInput,
    validateHashtagCount,
    UploadFormErrorMessage.MAX_HASHTAGS,
    2,
    true
  );

  pristine.addValidator(
    hashtagInput,
    checkDuplicateHashtags,
    UploadFormErrorMessage.DUPLICATE_HASHTAG,
    3,
    true
  );

  pristine.addValidator(
    commentInput,
    validateComment,
    UploadFormErrorMessage.MAX_UPLOAD_FORM_COMMENT_LENGTH,
    1,
    true
  );

  [hashtagInput, commentInput].forEach((input) => {
    input.addEventListener('focus', () => {
      document.removeEventListener('keydown', onDocumentKeydown);
    });

    input.addEventListener('blur', () => {
      document.addEventListener('keydown', onDocumentKeydown);
    });
  });

  form.addEventListener('submit', (evt) => {
    if (!pristine.validate()) {
      evt.preventDefault();
    }
  });
};

export { initValidation };
