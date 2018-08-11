function mapEmUp (input, mappers) {
  return [1, 2, 3].map();
}

function (i) { return i>2; }

function (i) { return i; }

console.log(mapEmUp([1, 2, 3], [
                    [ function (i) { return i>2; },
                    function (i) { return i; }],
                    [ function (i) { return i<2; },
                    function () { return 0; }]
                  ]));	// [0, -1, 3]