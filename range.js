function range(start, end, step) {
  let arr = [];
  for (start; start <= end; start += step) {
    arr.push(start);
  }
  return arr;
}
