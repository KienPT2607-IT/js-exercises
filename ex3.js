/* Bài 3:
Sử dụng câu lệnh if để viết 1 hàm với 2 tham số bất kỳ, kiểm tra xem 2 tham số có phải là number không và tìm ra số lớn nhất trong 2 số đó. */

/**
 * 
 * @param {int} num1 
 * @param {int} num2 
 * @returns 
 */
function compareNumbers(num1, num2) {
   if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
      return null;
   }
   return (num1 > num2) ? num1 : num2
}

let result = compareNumbers("gg", 6)
console.log(result);