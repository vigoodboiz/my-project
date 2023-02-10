const person = {
    name: "Vĩ",
    age: 19,
};
const person2 = {
    ...person, // copy object từ person sang person2
    address: "Thái Bình",
};
console.log(person2);

const products = [1, 2, 3, 4];
const newProducts = [-1, ...products, 5];
console.log(newProducts);