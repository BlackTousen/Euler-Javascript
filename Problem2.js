const Fibonacci = (limit) => {
  const array = [0, 1];
  let nextValue = array[array.length - 1] + array[array.length - 2];
  while (nextValue < limit) {
    array.push(nextValue);
    nextValue = array[array.length - 1] + array[array.length - 2];
  }
  return array;
};

console.log(
  Fibonacci(4000000).reduce((total, num) =>
    num % 2 === 0 ? total + num : total
  )
);

function calculateAmount(prices) {
  // Write your code here
  let total = 0;
  let prev = 0;
  for (const x of prices) {
    if (prices[0] === x) {
      total += x;
      prev = x;
    } else {
      let temp = x - prev;
      if (temp < 1) {
        total += 0;
        prev = x;
      } else {
        total += temp;
        prev = temp;
      }
      console.log(total);
    }
  }
  return total;
}
