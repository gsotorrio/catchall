"use strict";

   
function test(c) {
  const regexp =  /^function\s+([\w\$]+)\s*\(/;
  let result = regexp.exec(c.toString());
  result = result ? result[1] : 'anonymous';
  console.log(result);
}
//Puedes probar esa función con:

function foo () {}

test(foo);    // imprime foo
test(x=>{});  // imprime anonymous
test(function() {}); // imprime anonymous


