const numbers = [1, 2, 3];
const str = "Playwright";
const student = { "name": "Alex", "age": 10, "salary": 20 };
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];

//1.1 In lần lượt từng phần tử của numbers.

numbers.forEach((num) => {
    console.log(num);
})

//Tính tổng, tìm giá trị lớn nhất và nhỏ nhất của numbers

let sum = 0;
let max = numbers[0];
let min = numbers[0];

numbers.forEach((num) => {
    sum += num;
    if (num > max) {
        max = num;
    }
    if (num < min) {
        min = num;
    }
})
console.log(`sum = ${sum}`);
console.log(`max =  ${max}`);
console.log(`min = ${min}`);

// Tạo mảng mới từ numbers, mỗi phần tử nhân đôi

const double = [];
numbers.forEach((num) => {
    double.push(num * 2);
})
console.log(double);