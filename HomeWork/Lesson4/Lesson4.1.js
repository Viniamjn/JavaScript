// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function area(a,b){
    return (a*b)
}

console.log(area(5,6))

console.log('--------------------------------------------------------------------------')
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function areaOfaCircle(r){
    return(3.14*r**2)
}

console.log(areaOfaCircle(5))
console.log('--------------------------------------------------------------------------')
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function areaCylinder(h,r) {
    return(2*3.14*r**2+2*3.14*r*h)
}

console.log(areaCylinder(2,4))
console.log('--------------------------------------------------------------------------')
// - створити функцію яка приймає масив та виводить кожен його елемент
let arrNum=[1,2,3,4,5,6,7];
function funNumber(arr){
    for (const num of arr ) {
        console.log(num)
    }
}

funNumber(arrNum);

console.log('--------------------------------------------------------------------------')
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
function paragraph(text) {
    return(
        document.write(`<p>${text}</p>`)
    );

}
paragraph("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque!")
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
function listWrite(li) {
    return(
        document.write(`<ul>
        <li>${li}</li>
        <li>${li}</li>
        <li>${li}</li>
        </ul>`)
    )
}
listWrite("Lorem ipsum dolor sit amet, consectetur.")
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
function ulList (text, num) {
    document.write(`<ul>`);
    for (let i = 0; i < num; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`);
}
ulList('hello',3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
let primitiveArray = [42, 'Hello', true, 3.14, 'JavaScript', false];
function arrList(){
    document.write(`<ul>`);
    for (const element in primitiveArray) {
        document.write(`<li>${primitiveArray[element]}</li>`)
    }
    document.write(`</ul>`);
}
arrList();

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let people = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Alice', age: 30 },
    { id: 3, name: 'Bob', age: 22 }
];

function peopleList(arr) {
    for (const user of arr) {
        document.write(`<div>id: ${user.id}, name: ${user.name}, age: ${user.age}</div>`);
    }
}
peopleList(people);

// - створити функцію яка повертає найменьше число з масиву
let arrMin=[12,34,5,6,32,54,56,687,32];
function minNumber(){
    let min=arrMin[0];
    for (let i=1; i<arrMin.length; i++) {
        let number=arrMin[i];
        if(number<min){
            min=number
        }
    }
    return min;
}

console.log(minNumber());
console.log('--------------------------------------------------------------------------')
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let arrNumbers=[12,32,43,52,43,65,76,32,336,21,0];
function sumArr(sum) {
    return sum.reduce((accumulator, number) => {
        return accumulator + number;
    }, 0);
}
console.log(sumArr(arrNumbers));
console.log('--------------------------------------------------------------------------')
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let arrSwap=[12,13,14,15,16];
function swap(arr, index1,index2){
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

swap(arrSwap, 0, 1);
console.log(arrSwap);
console.log('--------------------------------------------------------------------------')
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
function exchange(sumUAH,currencyValues){
    let exchangeRate=[
        {currency:'USD',value:41.06},
        {currency:'EUR',value:45.50}
    ];
    for (const item of exchangeRate) {
    if(currencyValues===item.currency){
        console.log((sumUAH / item.value).toFixed(2),'$');
    }
    }
}
exchange(10000,'USD');
