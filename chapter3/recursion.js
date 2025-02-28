const number = -1;

const isEven = (x) => {
  if (x === 0) return true;
  else if (x === 1 || x < 0) return false;
  return isEven(x - 2);
};

console.log(isEven(number));
