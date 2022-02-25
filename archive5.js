let evenRange = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

// function isEvenlyMultiple(num) {
//   for (let i = 0; i <= evenRange.length; i++) {
//     if (num % evenRange[i] === 0) {
//       return true;
//     }
//   }
// }

function smallestMultiple(n) {
  // Get the smallest common multiple by common division method
  for (let i = 0; i <= evenRange.length; i++) {
    let prime = 2;
    let number = evenRange[i];
    if (number % prime === 0) {
      let lowest;
      number /= prime;
    } else {
      prime++;
    }
  }
  // prime = prime * prime;
  // lowest = prime;
  // console.log(lowest);
}
smallestMultiple();
function smallestMult(n) {
  // Boolean that checks the divisibility status
  let isDivisible = false;
  let currentMultiple;
  const array = generateArray(n);
  // checks all the value from n to one and reassigns divisibility if all can divide a  multiple of n

  let i = 2;

  while (isDivisible === false) {
    currentMultiple = n * i;

    const newArray = array.filter((item) => currentMultiple % item === 0);

    if (newArray.length === array.length) {
      isDivisible = true;
    }

    i++;
  }

  return currentMultiple;
}

function generateArray(n) {
  const array = [];

  for (let i = 1; i <= n; i++) {
    array.push(i);
  }

  return array;
}

let curr = smallestMult(20);
console.log(curr);
