import { getRandomPhotos, debounce } from './utils.js';
import { renderThumbnails } from './thumbnail.js';
import { DEBOUNCE_TIMEOUT_DELAY } from './data.js';

let allPhotos = [];

export const applyFilter = (filterType) => {
  let filteredPhotos;
  switch (filterType) {
    case 'default':
      filteredPhotos = allPhotos;
      break;
    case 'random':
      filteredPhotos = getRandomPhotos(allPhotos, 10);
      break;
    case 'discussed':
      filteredPhotos = [...allPhotos].sort((a, b) => b.comments.length - a.comments.length);
      break;
    default:
      filteredPhotos = allPhotos;
  }
  renderThumbnails(filteredPhotos);
};

const debouncedApplyFilter = debounce(applyFilter, DEBOUNCE_TIMEOUT_DELAY);

export const initFilters = (photos) => {
  allPhotos = photos;
  const imgFilters = document.querySelector('.img-filters');
  imgFilters.classList.remove('img-filters--inactive');

  imgFilters.addEventListener('click', (evt) => {
    const button = evt.target.closest('.img-filters__button');
    if (button) {
      imgFilters.querySelectorAll('.img-filters__button').forEach((btn) => {
        btn.classList.remove('img-filters__button--active');
      });
      button.classList.add('img-filters__button--active');

      const filterType = button.id.replace('filter-', '');
      debouncedApplyFilter(filterType);
    }
  });
};
