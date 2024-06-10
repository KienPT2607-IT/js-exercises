/* Bài 5. Cho 1 chuỗi dài hơn 15 ký tự. Viết 1 function cắt chuỗi, lấy ra 10 ký tự đầu tiên và thêm vào dấu " …" ở cuối chuỗi.
Tham số truyền vào là 1 chuỗi dài hơn 15 ký tự.
Kết quả là chuỗi đó sau khi cắt đi còn 10 ký tự, cuối chuỗi có dấu " …" biểu thị là chuỗi bị cắt.
*/

function concatStringWithElipsis(originString) {
   let newString = originString.substring(0, 10) + "..."
   return newString
}

// let result = concatStringWithElipsis("012345678901234567890")
let result = concatStringWithElipsis("this is a very long string")
console.log(result);