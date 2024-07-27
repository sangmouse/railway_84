/*
    các kiểu dữ liệu trong js:
        + kiểu dữ liệu nguyên thủy: string, number, boolean
        + Kiểu dữ liệu: array, object

    cách khai báo biến: let, const, var

    var, let: cho phep gán lại gtri sau khi đã khai báo, 
    var, let: khai báo nhưng ko gán value ban đầu => undefined
    const: ko cho phép gán lại gtri sau đi đã khởi tạo ban đầu
    const: bắt buọc phải gán 1 gtri ban đầu khi khai báo
    var: ko có block scope
    let, const : có block scope

*/


// var username = "đào tuấn anh"
// username = "đào tuấn anh 2"
// console.log(username, typeof username);
// // string

// var city; // undefined
// city = "hà nội"
// console.log(city);
// let city_2;  // undefined
// console.log(city_2);

// var isHidden = true
// console.log(isHidden, typeof isHidden);
// // boolean

// var age = 12;
// console.log(age, typeof age);
// number

// string username, number age, Long, Double

// let username_2 = "chu bá tuấn"
// username_2 = "chu bá tuấn 2"
// console.log(username_2, typeof username_2);

// let isHidden_2 = false
// console.log(isHidden_2, typeof isHidden_2);

// var, let, const

// const username_3 = "chu bá tuấn"
// username_3 = "trịnh duy phương"
// console.log(username_3);

// ax + m = 0

// global scope (window), block scope, function scope

// {
//     const password = 'password'
//     console.log(password);
// }

// // console.log(password);

// console.log(this);


// function logger () {
//     var userName = "tuấn anh"
//     console.log(userName);
// }

// console.log(userName);

// bt1
/*
    user : username, age, address, gender, class
    1. nhập thông tin user vào popup
    2. in thông tin người dùng
*/

let username, age, address, gender, classroom;

// 1.
// username = window.prompt("Your username: ");
// age = window.prompt('Your age: ')
// address = window.prompt('Your address: ')
// gender = window.prompt('Your gender: ')
// classroom = window.prompt('Your classroom: ')


// 2.
document.getElementById('username').innerHTML = username
document.getElementById('age').innerHTML = age
document.getElementById('address').innerHTML = address
document.getElementById('gender').innerHTML = gender
document.getElementById('classroom').innerHTML = classroom

/*
    BT2: 
    1. tạo UI = HTML, tạo 2 ô input để cho người dùng nhập
    giá trị. Tạo button cho phép người dùng click để tính tổng
    2. khi click button: lấy giá trị trong 2 ô input rồi + lại
    vs nhau
    3. hiển thị kết quả lên giao diện
*/


document.getElementById('btnSum').onclick = function() {
    // get value inputs
    let numberA = document.getElementById('numberA').value;
    let numberB = document.getElementById('numberB').value;

    const sum = Number(numberA) + Number(numberB)
    
    document.getElementById("result").innerHTML = sum
}
