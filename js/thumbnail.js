const template = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');

export const renderThumbnails = (photoDescriptions) => {
  picturesContainer.querySelectorAll('.picture').forEach((element) => element.remove());

  const photoFragment = document.createDocumentFragment();

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

  picturesContainer.appendChild(photoFragment);
};
