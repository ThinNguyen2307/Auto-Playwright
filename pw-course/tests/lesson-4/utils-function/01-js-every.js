const scores = [50, 85, 90, 78]; 
const ages = [18, 21, 16, 25]; 
const words = ["ape", "banana", "cherry", "date"]; 
const numbers = [1, 2, 3, 4]; 
const expenses = [50, 100, 150]; 

//1.1 Kiểm tra tất cả giá trị trong scores có > 70 không.
const allABove70 = scores.every(scores => scores > 70);
console.log(`Tất cả giá trị trong scores có > 70 không: ${allABove70}`);

// 1.2 Kiểm tra tất cả giá trị trong ages có > 15 không. 
const allAbove15 = ages.every(ages => ages > 15);
console.log(`Tất cả giá trị trong ages có > 15 không: ${allAbove15}`);

//1.3 Kiểm tra tất cả từ trong words có độ dài > 3 không. 

const allWordsAbove3 = words.every(words => words.length >= 3);
console.log(`Tất cả từ trong words có độ dài > 3 không: ${allWordsAbove3}`);