//1. Tạo một object car với thuộc tính make=”Toyota”, model=”Corolla”, và year=2021. Sau đó in ra năm sản xuất của xe.

let car = {
    "make": "Toyota",
    "model": "Corolla",
    "year": 2021
}
console.log(`Năm sản xuất của xe là: ${car.year}`);

//2. Tạo một object person có thuộc tính name, address (là một object lồng với các thuộc tính street, city, country). In ra tên đường của người này.

let person = {
    "name": "Anne Nguyen",
    "address": {
        "street": "Street A",
        "city": "City B",
        "country": "Country C"
    }
}
console.log(`Tên đường của anh ${person.name} là: ${person.address.street}`);

//3. Tạo một object student và truy cập đến điểm môn toán (math) sử dụng ngoặc vuông. Biết object student bao gồm 2 thuộc tính: name và grades. Trong đó grades là một object với 2 thuộc tính kiểu number: math và english

let student = {
    "name": "Anne",
    "grades": {
        "math": 9,
        "english": 8
    }
}
console.log("Điểm môn toán của sinh viên là: " + student["grades"]["math"]);

//4. Tạo một object settings để quản lý cài đặt của ứng dụng với các thuộc tính như volume, brightness. Thay đổi volume và in ra object mới.

let settings={
    "volumn": 10,
    "brightness": 40
}
settings.volumn = 20;
console.log(`Object setting volumn mới là:` ,settings);

//5. Tạo một object bike và sau đó thêm thuộc tính color vào object đó

let bike = {
    "type": "Hiking",
}
bike.color = "Red";
console.log(bike);

//6. Tạo một object employee với các thuộc tính: name, age và xóa thuộc tính age khỏi object này

let employee = {
    "name": "Anne",
    "age": 29
}
delete employee.age;
console.log(employee);

// Một trường học có các lớp học và học sinh như sau:
// ○ classA: An, Bình, Châu
// ○ classB: Đào, Hương, Giang
// Hãy viết code để đáp ứng yêu cầu sau:
// - Khai báo tên biến: school
// - Tên class là tên thuộc tính, giá trị của các thuộc tính này là một mảng chứa
// tên các học sinh
// Vd:
// const school = { classA: ["Giang"]...}

const school = {
    classA : ["An", "Bình", "Châu"],
    classB : ["Đào", "Hương", "Giang"]
}
console.log(school);