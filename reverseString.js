function reverse(str) {
	return str.length < 2 ? str : reverse(str.slice(1)).concat(str[0]);
}

console.log(reverse("hello world")); 				// "dlrow olleh" (N = 11)
console.log(reverse("abcd")); 						// "dcba" (N = 4)
console.log(reverse("12345") );						// "54321" (N = 5)
