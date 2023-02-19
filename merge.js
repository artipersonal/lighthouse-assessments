function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let newarr = [];
  while ((i < arr1.length) && (j < arr2.length)) {
    if (arr1[i] < arr2[j]) {
      newarr.push(arr1[i]);
      i++;
    }
    else {
      newarr.push(arr2[j]);
      j++;
    }
  }
  if (i < arr1.length) {
    newarr = newarr.concat(arr1.slice(i, arr1.length));
  }
  else if (j < arr2.length) {
    newarr = newarr.concat(arr2.slice(j, arr2.length));
  }
  return newarr;
}