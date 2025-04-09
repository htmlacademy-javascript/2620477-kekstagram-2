const isLengthCorrect = (str, strLength) => str.length >= strLength;

function checkPalindrome (str) {
  const normalizedStr = str.replaceAll(' ', '').toLowerCase();
  let left = 0;
  let right = normalizedStr.length - 1;
  while (left < right) {
    if (normalizedStr[left] !== normalizedStr[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

function pickNumbersFromStr(strOrNumber) {
  const str = String(strOrNumber);
  const digits = str.match(/\d/g);

  if (!digits) {
    return NaN;
  }

  return Number(digits.join(''));
}

isLengthCorrect('keks', 5);
checkPalindrome('lexa');
pickNumbersFromStr(2025);
