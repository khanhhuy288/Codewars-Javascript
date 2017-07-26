function gps(s, x) {
    return x.length > 2 ? Math.max(...x.map((_, i) => x[i+1] - x[i]).slice(0, -1).map(a => Math.floor((3600 * a) / s))) : 0;
}

console.log(gps(15, [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]));	// 60.0