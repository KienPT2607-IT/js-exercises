/* Bài 2:
Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép chuỗi đó lên 10 lần, ngăn cách nhau bởi ký tự "-".
Ví dụ cho chuỗi "123" thì kết quả sẽ là "123-123-123-123-123-123-123-123-123-123". 
*/

// Dùng các method có sẵn của JS. Tạo mảng sau đó join các elements thay vì loop rồi ghép chuỗi
function muliplyString(arg) {
   let result = ""
   for (let index = 0; index < 10; index++) {
      result += arg + "-"
   }
   result = result.substring(0, result.length - 1)
   return result
}

let a = muliplyString("qwerty")
console.log(a);
