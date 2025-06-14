const COMMENTS_PER_PAGE = 5;
const MAX_HASHTAGS = 5;
const MAX_UPLOAD_FORM_COMMENT_LENGTH = 140;
const HASHTAG_REGEX = /^#[a-zа-яё0-9]{1,19}$/i;
const UploadFormErrorMessage = {
  INVALID_HASHTAG: 'Неправильный формат хэштега',
  DUPLICATE_HASHTAG: 'Хэштеги не должны повторяться',
  MAX_HASHTAGS: `Нельзя указать больше ${MAX_HASHTAGS} хэштегов`,
  MAX_UPLOAD_FORM_COMMENT_LENGTH: `Длина комментария не может быть больше ${MAX_UPLOAD_FORM_COMMENT_LENGTH} символов`,
};
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const SCALE_STEP = 25;

const EFFECTS = {
  none: { filter: 'none', unit: '', options: { min: 0, max: 100, start: 100 } },
  chrome: { filter: 'grayscale', unit: '', options: { min: 0, max: 1, start: 1, step: 0.1 } },
  sepia: { filter: 'sepia', unit: '', options: { min: 0, max: 1, start: 1, step: 0.1 } },
  marvin: { filter: 'invert', unit: '%', options: { min: 0, max: 100, start: 100, step: 1 } },
  phobos: { filter: 'blur', unit: 'px', options: { min: 0, max: 3, start: 3, step: 0.1 } },
  heat: { filter: 'brightness', unit: '', options: { min: 1, max: 3, start: 3, step: 0.1 } },
};

export {
  COMMENTS_PER_PAGE,
  MAX_UPLOAD_FORM_COMMENT_LENGTH,
  HASHTAG_REGEX,
  MAX_HASHTAGS,
  UploadFormErrorMessage,
  MIN_SCALE,
  MAX_SCALE,
  SCALE_STEP,
  EFFECTS
};

