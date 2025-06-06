import {getRandomIntInInterval, getUniqueNumber} from './utils.js';

const DESC_MIN = 1;
const DESC_MAX = 25;
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const COMMENTS_MIN = 0;
const COMMENTS_MAX = 30;
const AVATAR_MIN = 1;
const AVATAR_MAX = 6;
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

const PHOTO_DESCRIPTION = [
  'On vacation',
  'Hii',
  'Hello',
  'Beach',
  'Forest',
  'Restaurant',
  'High noon',
  'Evening',
  'Event',
  'Cat',
  'Dog',
  'Like a man',
  'Natural',
  'Nature',
  'Mood',
  'Alphabet',
  'Shots',
  'Drink',
  'Freak out',
  'Moon',
  'Sun',
  'Sunset',
  'Flowers',
  '007',
  'Absolute cinema',
];

const NAMES = [
  'Ivan',
  'Kirill',
  'Oleg',
  'Olga',
  'Anna',
  'Dima',
  'Tolyan',
  'Fedya',
  'Elena',
  'Mariya',
  'Oksana',
  'Robert',
  'Amir',
  'Rodya',
  'Pasha',
  'Tanya',
  'Vladimir',
  'Ilnar',
  'Ilya',
  'Andrei',
  'Alena',
  'Kristina',
  'Sasha',
  'Vadim',
  'Semen',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const EFFECTS = {
  none: { filter: 'none', unit: '', options: { min: 0, max: 100, start: 100 } },
  chrome: { filter: 'grayscale', unit: '', options: { min: 0, max: 1, start: 1, step: 0.1 } },
  sepia: { filter: 'sepia', unit: '', options: { min: 0, max: 1, start: 1, step: 0.1 } },
  marvin: { filter: 'invert', unit: '%', options: { min: 0, max: 100, start: 100, step: 1 } },
  phobos: { filter: 'blur', unit: 'px', options: { min: 0, max: 3, start: 3, step: 0.1 } },
  heat: { filter: 'brightness', unit: '', options: { min: 1, max: 3, start: 3, step: 0.1 } },
};

const createMessage = () => {
  const getIndex = getUniqueNumber(0, MESSAGES.length - 1);
  const sentences = Array.from({length: getRandomIntInInterval(1, 2)}, () => MESSAGES[getIndex()]);
  return sentences.join('\n');
};

const getPostIdGenerator = getUniqueNumber(DESC_MIN, DESC_MAX);
const getUrlId = getUniqueNumber(DESC_MIN, DESC_MAX);

const createPostId = () => getPostIdGenerator();
const createUrlStr = () => `photos/${getUrlId()}.jpg`;

const generateCommentId = getUniqueNumber(1, Number.MAX_SAFE_INTEGER);

const createComment = () => ({
  id : generateCommentId(),
  avatar : `img/avatar-${getRandomIntInInterval(AVATAR_MIN, AVATAR_MAX)}.svg`,
  message : createMessage(),
  name : NAMES[getRandomIntInInterval(0, NAMES.length - 1)],
});

const createComments = () => {
  const arrItemsCount = getRandomIntInInterval(COMMENTS_MIN, COMMENTS_MAX);
  const arr = Array.from({length: arrItemsCount}, createComment);

  return arr;
};

const createPhotoDescription = () => ({
  id : createPostId(),
  url : createUrlStr(),
  description : PHOTO_DESCRIPTION[getRandomIntInInterval(0, PHOTO_DESCRIPTION.length - 1)],
  likes : getRandomIntInInterval(LIKES_MIN, LIKES_MAX),
  comments : createComments(),
});

const getPhotoDescription = () => {
  const photoDescArr = Array.from({length : DESC_MAX}, createPhotoDescription);
  return photoDescArr;
};

export {getPhotoDescription,
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

