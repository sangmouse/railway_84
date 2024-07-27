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


const arr = [1,2,3,4]
const arr_2 = [5,6,7,8]


// [1,2,3,4,5,6,7,8]

const arr_3 = arr.concat(arr_2)
/**
 * 1. khi báo 1 mảng rỗng
 * 2. tách các phần tử trong arr và arr_2 ra vào ném nó vào cái mảng rỗng kia
 * 
 */
console.log([...arr, ...arr_2]);

console.log(arr_3);

function logger(a,b,c, ...rest){
    console.log(a,b,c, rest);
}


logger(1,2,3,4,5,6,7,8,9,10)


// template string

const number = 12;
const email = 'daotuananh@gmail.com'
// => daotuananh12@gmail.com

const result = `daotuananh${number}@gmail.com`
console.log(result);


/**
 * - viết function nhận vào số lượng params tùy ý và in ra tổng của tất cả các params có kiểu dữ liệu là number
 * log(1,2,3 "dao tuan anh", "2") => 1 + 2 + 3 = 6
 */


function sum(...rest){
    let total = 1
    for(let number of rest){
        if(typeof number === 'number') total *= number
    }

    console.log(total);
}

sum(1,2,3,4, 'string')

/**
 * viết 1 function nhận vào bất kỳ số lượng params nào, bình phương các giá trị params lên sau đó tính tổng của chúng
 */

//regular function:  function functionName(params){ body function }
// arrow function: const functionName = (params) => { body function }

const sumSquare = (...rest) => {
    let total = 0

    for(let number of rest){
        if(typeof number === 'number') total += number*number
    }

    console.log(total);
}


sumSquare(1,2,3,4,5, "string")
/**
 * 
 * Khai báo date có dạng như sau:
    var date: number[] = [2020,12,08];
   Hãy lấy ra year, month, day của date và in ra
 */

   /**
    * Khai báo fullname có dạng như sau
const person = {
firstName: "nguyen",
lastName: "a",
age: 20
};
Hãy lấy ra firstName, lastName, age của persn và in ra
    */

   let date = [2020, 12, 8];

   let [year, month, day] = date

   console.log(year, month, day);

const person = {
    firstName: "nguyen",
    lastName: "Tuan",
    age_2: 23
}

const {firstName, lastName, age_2} = person
console.log(firstName, lastName, age_2);

const userInfo = `My name is dao tuan anh, age is ${12}`
console.log(userInfo);

const numberA = [2,4,6,8]
const numberB = [1,3,5,7]

const numberB_clone = [...numberB]

const number_all = [...numberA, ...numberB]

const total = (a,b) => a + b 

const result_total = total(3,4)
console.log(result_total);


const default_value = (a, b = 5) => {
    return a + b
    // 3 + undefined = NaN
}

const final_result = default_value(3, 10)
console.log(final_result);


const multiply = (a,b = 1) => {
    return a * b
}

console.log(multiply(4, 2))

/**
 * 1. spread operator
 * 2. arrow function
 * 3. regular function
 * 4. default value params
 * 5. short arrow function
 */