const getRandomIntInInterval = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));

  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

const getUniqueNumber = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomIntInInterval(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomIntInInterval(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

export {getRandomIntInInterval};
export {getUniqueNumber};
