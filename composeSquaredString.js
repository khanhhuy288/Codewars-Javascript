function compose(s1, s2) {
    var s1Arr = s1.split('\n');
    var s2Arr = s2.split('\n');
    var res = [s1Arr[0].slice(0, 1) + s2Arr.slice(-1)]; 
    for (var i = 1; i < s1Arr.length; i++) {
    	res.push(s1Arr[i].slice(0, i + 1) + (s2Arr[s1Arr.length - i - 1].slice(0, -i)));
    }
    return res.join('\n');
}

console.log(compose("abcd\nefgh\nijkl\nmnop", "qrst\nuvwx\nyz12\n3456"));	// "a3456 \n efyz1 \n ijkuv \n mnopq"