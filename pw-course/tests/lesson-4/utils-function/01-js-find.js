const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

// 3.1 Tìm giá trị đầu tiên trong scores > 80. 
let firstAbove80 = scores.find(score => score > 80);
console.log(`Giá trị đầu tiên trong scores > 80 là: ${firstAbove80}`);

// 3.2 Tìm giá trị đầu tiên trong ages > 20. 
let firstAbove20 = ages.find(age => age > 20);
console.log(`Giá trị đầu tiên trong ages > 20 là: ${firstAbove20}`);

// 3.3 Tìm từ đầu tiên trong words có độ dài > 5. 
let firstLongerThan5 = words.find(word => word.length > 5);
console.log(`Từ đầu tiên trong words có độ dài > 5 là: ${firstLongerThan5}`);