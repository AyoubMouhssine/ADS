function two_crystal_balls(array) {
  const jumpAmount = Math.floor(Math.sqrt(array.length));

  let i = jumpAmount;

  for (; i < array.length; i += jumpAmount) {
    if (array[i]) {
      break;
    }
  }

  i -= jumpAmount;

  for (let j = 0; j < jumpAmount && i < array.length; ++j, ++i) {
    if (array[i]) {
      return i;
    }
  }

  return -1;
}
