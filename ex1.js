/* 
Bài 1:
Viết một hàm chuyển đổi nhiệt độ từ thang Celsius chuyển sang thang đo fahrenhei.
vd output là: "60°C bằng 140 °F"
*/
// Sai công thức
/**
 * 
 * @param {int} celsius 
 * @returns The Fahrenheit degree transformed from Celsius
 */
function convertCelsiusToFahrenheit(celsius) {
   return (celsius * 9 / 5) + 32
}
let a = convertCelsiusToFahrenheit(19)
console.log(a);

let convertCToF = (celsius) => (celsius * 9 / 5) + 32
a = convertCToF(100)
console.log(a);
