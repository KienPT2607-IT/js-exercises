/* Bài 4:
Viết 1 hàm dùng để tính giai thừa của 1 số. Kiểm tra tham số đầu vào phải là 1 số nguyên >= 0, sau đó tính giai thừa và in ra kết quả */

function calculateFactorial(num) {
  if (!Number.isInteger(num) || num < 0) {
    return null;
  }

  if (num == 0) return 1;
  let result = 1;

  // for (; num > 1; num--) {
  //   result *= num;
  // }
  result = calculateFactorrialRescursive(num)
  return result;
}

function calculateFactorrialRescursive(num) {
  if (num == 1) return 1;
  if (num == 0) return 1;
  return num * calculateFactorrialRescursive(num - 1);
}

let a = calculateFactorial(5);
console.log(a);
