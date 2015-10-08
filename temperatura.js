"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
//añade estructura de programacion, mas errores vamos!
function calcular() {
  var result;
  var original = document.getElementById("original");
  var temp = original.value;
  // alert(temp);
  // Empiece por - +, pude o no puede
  //Siguiente digito si o si
  //
  var regexp = /([-+]?\d+(?:\.\d*)?)\s*([fFcC])/;

  var x = temp.match(regexp);

  if (x) {
    var num = x[1];
    var type = x[2];
    num = parseFloat(num);
    if (type == 'c' || type == 'C') {
      result = (num * 9/5)+32;
      //-------toFixed()------------
      // Convert a number into a string, keeping only two decimals:
      // var num = 5.56789;
      // var n = num.toFixed(2);
      //
      // The result of n will be:
      // 5.57
      result = result.toFixed(1)+" Farenheit";
    }
    else {
      result = (num - 32)*5/9;
      result = result.toFixed(1)+" Celsius";
    }
    converted.innerHTML = result;
  }
  else {
    converted.innerHTML = "¡ERROR! Intente con valores correctos [-,+] [Número] [Medida] e.g: '-4.2C' ";
  }
}
