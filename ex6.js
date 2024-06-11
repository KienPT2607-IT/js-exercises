/* Bài 6. Viết 1 function có tác dụng biến 1 chuỗi thành chỉ viết hoa từ đầu tiên.
Tham số truyền vào là 1 chuỗi.
Kết quả là 1 chuỗi mới chỉ viết hoa từ đầu tiên. Ví dụ "morSofware" sẽ được convert thành "Morsofware". */

// Lấy ký tự đầu tiên (index 0) trong chuỗi ghép với chuỗi sau khi đã cắt ký tự đầu tiên
/**
 * 
 * @param {string} word 
 * @returns 
 */
function CapitalizeAWord(word) {
   let restOfWord = (word.substring(1)).toLowerCase()
   return word[0].toUpperCase() + restOfWord
}

console.log(CapitalizeAWord("morSoftware"));
console.log(CapitalizeAWord("tHisISaWorD"));
