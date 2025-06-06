import {MIN_SCALE, MAX_SCALE, SCALE_STEP} from './data.js';

const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview');

let currentListeners = null;

export const initScale = () => {
  let currentScale = MAX_SCALE;

  const updateScale = () => {
    scaleValue.value = `${currentScale}%`;
    imgUploadPreview.style.transform = `scale(${currentScale / 100})`;
  };

  const onSmallerClick = () => {
    currentScale = Math.max(MIN_SCALE, currentScale - SCALE_STEP);
    updateScale();
  };

  const onBiggerClick = () => {
    currentScale = Math.min(MAX_SCALE, currentScale + SCALE_STEP);
    updateScale();
  };

  if (currentListeners) {
    scaleSmaller.removeEventListener('click', currentListeners.onSmallerClick);
    scaleBigger.removeEventListener('click', currentListeners.onBiggerClick);
  }

  scaleSmaller.addEventListener('click', onSmallerClick);
  scaleBigger.addEventListener('click', onBiggerClick);

  currentListeners = { onSmallerClick, onBiggerClick };

  const resetScale = () => {
    currentScale = MAX_SCALE;
    updateScale();
  };

  return {
    resetScale,
    destroy: () => {
      scaleSmaller.removeEventListener('click', onSmallerClick);
      scaleBigger.removeEventListener('click', onBiggerClick);
      currentListeners = null;
    }
  };
};
