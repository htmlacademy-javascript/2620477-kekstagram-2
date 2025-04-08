function compareLenght (str, strLength) {
  return str.length >= strLength;
}

function checkPalindrome (str) {
  const normalizedStr = str.replaceAll(' ', '').toLowerCase();
  let left = 0;
  let right = normalizedStr.length - 1;
  while (left < right) {
    if (normalizedStr.charAt(left) !== normalizedStr.charAt(right)) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

function pickNumbersFromStr (strOrNumber) {
  const str = String(strOrNumber);
  const digits = [];
  for (const char of str) {
    if (!isNaN(char) && char.trim() !== '') {
      digits.push(char);
    }
  }

  return digits.length > 0 ? Number(digits.join('')) : NaN;
}

console.log(compareLenght('check', 5));
console.log(compareLenght('check', 7));
console.log(compareLenght('check', 3));
console.log(compareLenght('', 0));
console.log('--------------------------');
console.log(checkPalindrome('ДовОд'));
console.log(checkPalindrome('Кекс'));
console.log(checkPalindrome(''));
console.log(checkPalindrome('Лёша на полке клопа нашёл '));
console.log('--------------------------');
console.log(pickNumbersFromStr('2023 год'));
console.log(pickNumbersFromStr('ECMAScript 2022'));
console.log(pickNumbersFromStr('1 кефир, 0.5 батона'));
console.log(pickNumbersFromStr('агент 007'));
console.log(pickNumbersFromStr('а я томат'));
console.log(pickNumbersFromStr(2023));
console.log(pickNumbersFromStr(-1));
console.log(pickNumbersFromStr(1.5));
console.log(pickNumbersFromStr(0));
console.log(pickNumbersFromStr(''));
