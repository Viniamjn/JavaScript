
const area = (a, b) => a * b;

console.log(area(5, 6));

console.log('--------------------------------------------------------------------------');


const areaOfaCircle = r => 3.14 * r ** 2;

console.log(areaOfaCircle(5));

console.log('--------------------------------------------------------------------------');

const areaCylinder = (h, r) => 2 * 3.14 * r ** 2 + 2 * 3.14 * r * h;

console.log(areaCylinder(2, 4));

console.log('--------------------------------------------------------------------------');

const funNumber = arr => {
    for (const num of arr) {
        console.log(num);
    }
};

let arrNum = [1, 2, 3, 4, 5, 6, 7];
funNumber(arrNum);

console.log('--------------------------------------------------------------------------');

const paragraph = text => document.write(`<p>${text}</p>`);

paragraph("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque!");

const listWrite = li => document.write(`<ul>
    <li>${li}</li>
    <li>${li}</li>
    <li>${li}</li>
</ul>`);

listWrite("Lorem ipsum dolor sit amet, consectetur.");

const ulList = (text, num) => {
    document.write(`<ul>`);
    for (let i = 0; i < num; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
};

ulList('hello', 3);

const arrList = () => {
    document.write(`<ul>`);
    for (const element of primitiveArray) {
        document.write(`<li>${element}</li>`);
    }
    document.write(`</ul>`);
};

let primitiveArray = [42, 'Hello', true, 3.14, 'JavaScript', false];
arrList();

const peopleList = arr => {
    for (const user of arr) {
        document.write(`<div>id: ${user.id}, name: ${user.name}, age: ${user.age}</div>`);
    }
};

let people = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Alice', age: 30 },
    { id: 3, name: 'Bob', age: 22 }
];
peopleList(people);

const minNumber = () => {
    let min = arrMin[0];
    for (let i = 1; i < arrMin.length; i++) {
        let number = arrMin[i];
        if (number < min) {
            min = number;
        }
    }
    return min;
};

let arrMin = [12, 34, 5, 6, 32, 54, 56, 687, 32];
console.log(minNumber());

console.log('--------------------------------------------------------------------------');

const sumArr = sum => sum.reduce((accumulator, number) => accumulator + number, 0);

let arrNumbers = [12, 32, 43, 52, 43, 65, 76, 32, 336, 21, 0];
console.log(sumArr(arrNumbers));

console.log('--------------------------------------------------------------------------');


const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
};

let arrSwap = [12, 13, 14, 15, 16];
swap(arrSwap, 0, 1);
console.log(arrSwap);

console.log('--------------------------------------------------------------------------');


const exchange = (sumUAH, currencyValues) => {
    const exchangeRate = [
        { currency: 'USD', value: 41.06 },
        { currency: 'EUR', value: 45.50 }
    ];
    for (const item of exchangeRate) {
        if (currencyValues === item.currency) {
            console.log((sumUAH / item.value).toFixed(2), '$');
        }
    }
};

exchange(10000, 'USD');