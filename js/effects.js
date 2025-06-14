import '../vendor/nouislider/nouislider.css';
import { EFFECTS } from './data';

const sliderContainer = document.querySelector('.img-upload__effect-level');
const sliderElement = document.querySelector('.effect-level__slider');
const effectValue = document.querySelector('.effect-level__value');
const imagePreview = document.querySelector('.img-upload__preview img');
const effectsList = document.querySelector('.effects__list');

let currentEffect = 'none';

const initSlider = () => {
  if (!sliderElement.noUiSlider) {
    noUiSlider.create(sliderElement, {
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
      connect: 'lower',
      format: {
        to: (value) => Number.isInteger(value) ? value : value.toFixed(1),
        from: (value) => parseFloat(value),
      },
    });
  }
  sliderContainer.classList.add('hidden');
};

const updateSlider = (effect) => {
  const {options} = EFFECTS[effect];

  sliderElement.noUiSlider.updateOptions({
    range: {
      min: options.min,
      max: options.max,
    },
    start: options.start,
    step: options.step,
  });
};

const applyEffect = (effect, value) => {
  if (effect === 'none') {
    imagePreview.style.filter = 'none';
    return;
  }

  const { filter, unit } = EFFECTS[effect];
  imagePreview.style.filter = `${filter}(${value}${unit})`;
};

const onSliderUpdate = () => {
  const value = sliderElement.noUiSlider.get();
  applyEffect(currentEffect, value);
  effectValue.value = value;
};

const onEffectChange = (evt) => {
  if (!evt.target.matches('input[type="radio"]')) {
    return;
  }

  currentEffect = evt.target.value;

  if (currentEffect === 'none') {
    sliderContainer.classList.add('hidden');
    applyEffect('none');
  } else {
    sliderContainer.classList.remove('hidden');
    updateSlider(currentEffect);
  }
};

const resetEffects = () => {
  currentEffect = 'none';
  applyEffect('none');
  document.querySelector('#effect-none').checked = true;
  sliderContainer.classList.add('hidden');
};

const initEffects = () => {
  initSlider();
  effectsList.addEventListener('change', onEffectChange);
  sliderElement.noUiSlider.on('update', onSliderUpdate);
  resetEffects();
};

export { initEffects, resetEffects };
