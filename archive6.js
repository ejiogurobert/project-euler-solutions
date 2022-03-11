function sumOfsquare() {
  let sumOfSquare = 0;
  let squareOfSum = 0;
  let sumOfNumbers = 0;

  for (let i = 1; i <= 100; i++) {
    sumOfSquare = sumOfSquare + i * i;
    sumOfNumbers = sumOfNumbers + i;

    if (i === 100) {
      squareOfSum = sumOfNumbers * sumOfNumbers;
    }
  }

  return squareOfSum - sumOfSquare;
}
