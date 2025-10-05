const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

// 4.1 Từ scores, tạo mảng mới: tăng 10% nếu < 90, giảm 5% nếu ≥ 90. 
let updatedScores = scores.map(score => {
    if (score < 90) {
        return score * 1.1;
    }
    return score * 0.95;
});
console.log(`Mảng mới sau khi cập nhật điểm: `, updatedScores);

/*
4.2 Từ numbers = [1, 2, 3], chuyển thành mảng chuỗi.
*/

let newStr = numbers.map(num => num.toString())

console.log(newStr);


/*
4.3 Từ numbers = [1, 2, 3], nhân đôi mỗi giá trị. 
*/
let square = numbers.map(num => num * 2);

console.log(square);

