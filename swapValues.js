function swapValues(args) {
    var temp = args[0];
    args[0] = args[1];	
    args[1] = temp;
}

var arr = [1,2];
swapValues(arr);
console.log(arr[0]);
console.log(arr[1]);
