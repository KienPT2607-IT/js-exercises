/* Bài 2:
Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép chuỗi đó lên 10 lần, ngăn cách nhau bởi ký tự "-".
Ví dụ cho chuỗi "123" thì kết quả sẽ là "123-123-123-123-123-123-123-123-123-123". 
*/

// Dùng các method có sẵn của JS. Tạo mảng sau đó join các elements thay vì loop rồi ghép chuỗi
/**
 * @param {string} s - The input string
 * @param {int} times - The times that string will be multiplied
 */
function multiplyString(s, times) {
   let arr = Array(times)
   arr.fill(s)
   return arr.join("-")
}

let a = multiplyString("qwerty", 10)
console.log(a);
