// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.
const SumOfMultiples = (limit, ...numbers) => {
  let sum = 0;
  numbers = RemoveMultiples(numbers).sort();
  numbers.map((num, index) => {
    sum += GetSum(limit, num);
    numbers
      .filter((i, idx) => {
        return idx < index;
      })
      .forEach((value) => (sum -= GetSum(limit, value * num)));
  });
  return sum;
};
const GetSum = (limit, num) => {
  const max = Math.floor((limit - 1) / num);
  return ((1 + max) / 2) * num * max;
};
const RemoveMultiples = (array) => {
  return array.filter((item, index) => {
    return (
      array.filter((item2, index2) => {
        return item % item2 === 0 && index !== index2;
      }).length === 0
    );
  });
};

console.log(SumOfMultiples(1000, 3, 5));
console.log(SumOfMultiples(1000, 3, 5, 15));
