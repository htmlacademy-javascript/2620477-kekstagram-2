import {getRandomIntInInterval, getUniqueNumber} from './utils.js';

const DESC_MIN = 1;
const DESC_MAX = 25;
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const COMMENTS_MIN = 0;
const COMMENTS_MAX = 30;
const AVATAR_MIN = 1;
const AVATAR_MAX = 6;

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

const createArrPhotoDescription = () => {
  const photoDescArr = Array.from({length : DESC_MAX}, createPhotoDescription);
  return photoDescArr;
};

export {createArrPhotoDescription};
