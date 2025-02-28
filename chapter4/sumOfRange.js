function range(start, end, step = 1) {
  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }
  let copyStep = step;
  if (step < 0) copyStep = step * -1;
  let arr = [];
  for (let i = start; i <= end; i += copyStep) {
    arr.push(i);
  }
  return arr;
}

function sum(numbers) {
  let counter = 0;
  for (let i = 0; i < numbers.length; i++) {
    counter += numbers[i];
  }
  return counter;
}

console.log(sum(range(5, 2, -1)));
