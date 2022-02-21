function isEvenlyMultiple(num) {
  let range = [2, 4, 6, 7, 8, 9, 10];
  for (let i = 0; i <= range.length; i++) {
    if (num % range[i] === 0) {
      return true;
    }
  }
}

function smallestMultiple(multiples) {}
