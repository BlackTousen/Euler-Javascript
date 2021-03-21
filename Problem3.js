//The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

const Prime = (num) => {
  if (num === 0) {
    return 0;
  }
  let largest = 0;
  let value = num;
  let i = 2;
  while (Math.pow(i, 2) < value) {
    if (value % i === 0) {
      largest = i;
      value = value / i;
    } else {
      i++;
    }
  }
  if (value > largest) {
    largest = value;
  }
  return largest;
};

console.log("600851475143", Prime(600851475143));
