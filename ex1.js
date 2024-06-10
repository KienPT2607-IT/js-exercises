/* 
Bài 1:
Viết một hàm chuyển đổi nhiệt độ từ thang Celsius chuyển sang thang đo fahrenhei.
vd output là: "60°C bằng 140 °F"
*/
// Sai công thức
function convertCelsiusToFahrenhei(celsius) {
   return celsius + 33.8
}
let a = convertCelsiusToFahrenhei(19)
console.log(a);

let convertCToF = (celsius) => celsius + 33.8
a = convertCToF(100)
console.log(a);
