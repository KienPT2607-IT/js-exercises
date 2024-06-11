/* Bài 8. Một trang web cho phép người dùng tạo tài khoản. Hãy viết hàm kiểm tra tính hợp lệ của thông tin người dùng nhập vào. Nếu hợp lệ trả về "Pass", nếu không hợp lệ trả về "Fail".
Giả sử tham số đầu vào là 1 object có dạng như sau:
{
   username: "username",
   password: "secret",
   confirm: "secret"
}
Hãy kiểm tra username phải khác rỗng và không được vượt quá 20 ký tự, password phải có độ dài từ 6 đến 32 ký tự, confirm phải giống password. */
// Cách này ngắn nhưng với những hàm validate nên trả ra kiểu dữ liệu boolean.

/**
 * 
 * @param {*} newAccount 
 * @returns true if account met the validation conditions otherwise false 
 */
function isAccountValid(newAccount) {
   if (!newAccount.username || newAccount.username.length > 20)
      return false
   if (newAccount.password.length < 6 || newAccount.password.length > 32)
      return false
   if (newAccount.password !== newAccount.confirm)
      return false
   return true;
}

console.log(isAccountValid({
   "username": "",
   "password": "12345678",
   "confirm": "12345678",
}));
