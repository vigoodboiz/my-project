// ...x tạo ra 1 mảng mớimới
function total(...x) {
    let result = 0;
    for (let i = 0; i < x.length; i++) {
        result += x[i];
    }
    console.log("Result", result);
}
total(1, 2, 3, 4, 5, 6, 7, 8,); // chuyển đổi giá trị về mảng