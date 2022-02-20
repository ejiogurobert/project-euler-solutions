function isPalindrome(num) {
  let reversed = toString("num").split("").reverse("").join("");
  if (number(reversed) === num) {
    return number(reversed) === num;
  }
}
function largestPalindromeProduct(n) {
  let highest = 0;
  let largestNumber = "9";
  largestNumber += largestNumber.repeat(n - 1);
  largestNumber = number(largestNumber);
  //looping the first number
  for (let i = largestNumber; i > 0; i--) {
    // looping the second number
    for (let j = largestNumber; j > 0; j--) {
      let product = i * j;
      if (isPalindrome(product)) {
        if (product > highest) {
          highest = product;
        }
      }
    }
  }
  return highest;
}
console.log(largestPalindromeProduct(2));
