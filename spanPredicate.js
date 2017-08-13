function span(arr, predicate) {
  for (var i = 0; i < arr.length; i++)
    if (!predicate(arr[i])) break;
  
  return [arr.slice(0, i), arr.slice(i)];
}