const isPrime = (num) => {
  let isPrime = true;

  if (num <= 1) {
    isPrime = false;
    return;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
};

const isFactor = (currentNumber, mainNumber) => {
  let isFactor = false;
  if (mainNumber % currentNumber === 0) {
    isFactor = true;
  }
  return isFactor;
};

function largestprimefactor(mainNumber) {
  let primefactors = [];

  for (let currentNumber = 0; currentNumber < mainNumber; currentNumber++) {
    if (isFactor(currentNumber, mainNumber) && isPrime(currentNumber)) {
      primefactors.push(currentNumber);
    }
  }

  const element = Math.max(...primefactors);
  console.log(element);
  return element;
}

largestprimefactor(600851475143);
