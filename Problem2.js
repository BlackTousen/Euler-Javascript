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
  Fibonacci(40000000).reduce((total, num) =>
    num % 2 === 0 ? total + num : total
  )
);
