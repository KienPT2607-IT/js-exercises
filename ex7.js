/* Bài 7. Cho 1 mảng các số bất kỳ. Tạo ra 1 mảng mới chỉ chứa các số lẻ lấy ra từ mảng trên và sắp xếp theo thứ tự giảm dần. */

let arr = [45, 83, 12, 57, 29, 61, 78, 3, 90, 42, 24, 67, 85, 30, 11, 4, 56, 93, 18, 7, 3, 3]
let newArr = []

for (let index = 0; index < arr.length; index++) {
   if (arr[index] % 2 == 1) newArr.push(arr[index])
}

// Insertion sort
for (let i = 0; i < newArr.length - 1; i++) {
   for (let j = i + 1; j >= 0; j--) {
      if (newArr[j] > newArr[j - 1]) {
         let temp = newArr[j]
         newArr[j] = newArr[j - 1]
         newArr[j - 1] = temp
      }
   }
}

console.log(newArr);