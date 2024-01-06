function binary_search(array, needle) {
  let high = array.length;
  let low = 0;

  do {
    let m = Math.floor(low + (high - low) / 2);
    const v = array[m];

    if (needle === v) {
      return true;
    } else if (needle > v) {
      low = m + 1;
    } else {
      high = m;
    }
  } while (low < high);

  return false;
}

// log (n)
