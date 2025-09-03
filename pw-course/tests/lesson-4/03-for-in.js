const student = { "name": "Alex", "age": 10, "salary": 20 };

//  In tên và giá trị mỗi thuộc tính của student 
for (const key in student){
    console.log (`${key}: ${student[key]}`);
}

// Tính tổng các giá trị của thuộc tính trong student

// let total = 0;
// for (const key in student){
//     total += student[key];
// }
// console.log(`Tổng các giá trị của thuộc tính trong student là: ${total}`);

let valueArr = [];

for (let property in student) {
    if (typeof student[property] === "number") {
        valueArr.push(student[property]);
    }
}

let sum = valueArr.reduce((total, num) => total + num, 0);
console.log(`Tổng các giá trị số trong student là ${sum}`);