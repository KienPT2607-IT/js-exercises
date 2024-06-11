/* Bài 5. Cho 1 chuỗi dài hơn 15 ký tự. Viết 1 function cắt chuỗi, lấy ra 10 ký tự đầu tiên và thêm vào dấu " …" ở cuối chuỗi.
Tham số truyền vào là 1 chuỗi dài hơn 15 ký tự.
Kết quả là chuỗi đó sau khi cắt đi còn 10 ký tự, cuối chuỗi có dấu " …" biểu thị là chuỗi bị cắt.
*/
// Nếu biến tạo ra không để làm gì thì return thẳng
let concatStringWithEllipsis = (originString) => originString.substring(0, 10) + "..."


// let result = concatStringWithEllipsis("012345678901234567890")
let result = concatStringWithEllipsis("this is a very long string")
console.log(result);
