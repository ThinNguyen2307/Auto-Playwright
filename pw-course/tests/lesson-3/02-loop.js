//1. Tính tổng từ 1 đến 100.
let sum = 0;
for (i=1; i<= 100; i++){
    sum +=i;
}
console.log(`sum từ 1 đến 100 = ${sum}`)

//2. In bảng cửu chương từ 2 đến 9.
let result = 0;
for (let i = 2; i<=9; i++){
    console.log(`Bảng cửu chương ${i}:`);
    for (let j = 1; j<=10; j++){
        result = i*j;
        console.log(`${i}*${j} = ${result}`);
    }
    console.log("--------------");
}

//3. Tạo một mảng chứa các số lẻ từ 1 đến 99.

let oddNumbers = [];
for (let i = 1; i<=99; i++){
    if (i%2 !== 0){
        oddNumbers.push(i);
    }
}
    console.log(oddNumbers);

//4. In ra 10 email dựa trên tên người dùng và số thứ tự (ví dụ: user1@example.com, user2@example.com, ..., user10@example.com).

for (let i = 1; i<=10; i++){
    console.log(`anneka2307+${i}@gmail.com`);
}

//5. Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và in ra tổng doanh thu. Biết cấu trúc object của mảng doanh thu như sau: {“month”: 2, “total”: 100}
let profit = [
    { month: 1, total: 100 },
    { month: 2, total: 200 },
    { month: 3, total: 300 },
    { month: 4, total: 400 },
    { month: 5, total: 500 },
    { month: 6, total: 600 },
    { month: 7, total: 700 },
    { month: 8, total: 800 },
    { month: 9, total: 900 },
    { month: 10, total: 1000 },
    { month: 11, total: 0 },
    { month: 12, total: 2000 },
];

let totalProfit = 0;

for (let i = 0; i < profit.length; i++) {
    totalProfit = totalProfit + profit[i].total;
}

console.log(totalProfit);
