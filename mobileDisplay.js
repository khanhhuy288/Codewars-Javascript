const map = ['1234567890*#','adgjmptw','behknqux','cfilorvy','sz'];

function mobileKeyboard(str){
  return [...str].reduce((s,c)=>s+map.findIndex(l=>l.includes(c)),str.length);
}

function mobileKeyboard2(str){
  var values = str.replace(/[\d\*#]/g, '1').replace(/[adgjmptw]/g, '2').replace(/[behknqux]/g, '3').replace(/[cfilorvy]/g, '4').replace(/[sz]/g, '5');
  return [...values].reduce((sum, v) => sum + parseInt(v), 0);
}

console.time('Function #1'); 
mobileKeyboard("longwordwhichdontreallymakessense");
console.timeEnd('Function #1');

console.time('Function #2'); 
mobileKeyboard2("longwordwhichdontreallymakessense");
console.timeEnd('Function #2');

// Function 2 is faster