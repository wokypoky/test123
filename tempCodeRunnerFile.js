
let a = {
    bc: 200,
    bd: 400,
};

let b = {
    bc:100,
};

b.__proto__ = a;
console.log(b.bd);