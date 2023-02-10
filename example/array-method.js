
const products = ["Products A", "Products B", "Products C"];
// for
for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
}
// for in
for (let item in products) {
    console.log(products[item]);
}
// for of
for (let item of products) {
    console.log(item);
}
// for each
products.forEach((item) => console.log(`${item}`));
//map -> Tạo ra 1 mảng mới và có thể thay đổi giá trị
const app = document.querySelector("#app");
app.innerHTML = products.map((item) => {
    return `<div>${item}</div>`;
});
const newMapProducts = products.map((item) => {
    return `${item}`;
});
console.log(newMapProducts);
//filter -> Tạo ra 1 mảng, lọc ra các phần tử thỏa mãn điều kiện
const newFilterProducts = products.filter((item) => {
    return item != "Products C";
});
console.log(newFilterProducts);

//reduce
const numbers = [
    { id: 1, name: "Products A", price: 200 },
    { id: 2, name: "Products B", price: 400 },
    { id: 3, name: "Products C", price: 500 },
];
const total = numbers.reduce((accumulator, nextValue) => accumulator + nextValue.price, 0);
console.log(total);

//find => Tìm phần tử trong mảng => trả về 1 phần tử thỏa mãn điều kiện
const products2 = [
    { id: 1, name: "Products A", price: 200 },
    { id: 2, name: "Products B", price: 400 },
    { id: 3, name: "Products C", price: 500 },
];
const findProducts = products2.find((item) => item.id == 1);
console.log(findProducts);
