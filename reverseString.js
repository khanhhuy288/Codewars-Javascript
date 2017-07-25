function reverse(array) {
  return array.length > 1 ? reverse(array.slice(1)).concat(array[0]) : array;
}

console.log(reverse("hello world")); 				// "dlrow olleh" (N = 11)
console.log(reverse("abcd")); 						// "dcba" (N = 4)
console.log(reverse("12345") );						// "54321" (N = 5)
console.log(reverse([1,2, 7]));