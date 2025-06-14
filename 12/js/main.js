import { getData } from './api.js';
import { renderThumbnails } from './thumbnail.js';
import { initPhotoModal } from './photo-modal.js';
import { initUploadForm } from './upload-form.js';
import { initValidation } from './validation.js';
import { showDataErrorMessage } from './utils.js';

getData()
  .then((photos) => {
    renderThumbnails(photos);
    initPhotoModal(photos);
  })
  .catch(() => {
    showDataErrorMessage();
  });

initUploadForm();
initValidation();
