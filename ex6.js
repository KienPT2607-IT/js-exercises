/* Bài 6. Viết 1 function có tác dụng biến 1 chuỗi thành chỉ viết hoa từ đầu tiên.
Tham số truyền vào là 1 chuỗi.
Kết quả là 1 chuỗi mới chỉ viết hoa từ đầu tiên. Ví dụ "morSofware" sẽ được convert thành "Morsofware". */
function CapitalizeAWord(word) {
   let newWord = word[0].toUpperCase()
   for (let i = 1; i < word.length; i++) {
      if (word[i] != word[i].toUpperCase()) {
         newWord += word[i]
      } else {
         newWord += word[i].toLowerCase()
      }
   }
   return newWord
}

console.log(CapitalizeAWord("morSofware"));
console.log(CapitalizeAWord("tHisISaWorD"));