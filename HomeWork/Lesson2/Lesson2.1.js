//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
arrNum=[11,33,44,55,56,89,54,46,67,76];
for (const arrayElement of arrNum) {
    console.log(arrayElement)
}
console.log('---------------------------------------------------------------------')
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
library=[
    book1={
    title:" To Kill a Mockingbird",
    pageCount: 281,
    genre: "Fiction / Classic"

},
book2={
    title:"1984",
    pageCount: 328,
    genre: "Dystopian / Science Fiction"

},
book3={
    title:"Sapiens: A Brief History of Humankind",
    pageCount: 443,
    genre: "Non-Fiction / History"

}
]
for (const book of library) {
    console.log(book)
}
console.log('---------------------------------------------------------------------')
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
arrbooks=[
    bookGreat = {
    title: "The Great Gatsby",
    pageCount: 180,
    genre: "Fiction / Classic",
    authors: [
        {
            name: "F. Scott Fitzgerald",
            age: 44
        }
    ]
},

bookGood = {
    title: "Good Omens",
    pageCount: 432,
    genre: "Fantasy / Comedy",
    authors: [
        {
            name: "Neil Gaiman",
            age: 63
        },
        {
            name: "Terry Pratchett",
            age: 66
        }
    ]
},

bookFast = {
    title: "Thinking, Fast and Slow",
    pageCount: 499,
    genre: "Non-Fiction / Psychology",
    authors: [
        {
            name: "Daniel Kahneman",
            age: 89
        }
    ]
}
]
for (const book of arrbooks) {
    console.log(book)

}
console.log('---------------------------------------------------------------------')
//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
const users = [
    {name: "John Doe", username: "johndoe", password: "password123"},
    {name: "Jane Smith", username: "janesmith", password: "qwerty456"},
    {name: "Alice Johnson", username: "alicej", password: "alice789"},
    {name: "Bob Brown", username: "bobbrown", password: "bobsecure"},
    {name: "Charlie Green", username: "charlieg", password: "green567"},
    {name: "Diana White", username: "dianaw", password: "white321"},
    {name: "Eve Black", username: "eveblack", password: "evepassword"},
    {name: "Frank Harris", username: "frankh", password: "frankpass"},
    {name: "Grace Lee", username: "gracelee", password: "grace987"},
    {name: "Hank Miller", username: "hankm", password: "miller654"}
];
for (const user of users) {
    console.log(user.password)
}
console.log('---------------------------------------------------------------------')
//- описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
tempofWeek=[
    monday={morning:'15°C', afternoon:'20°C', evening:'17°C'},
    tuesday={morning:'16°C', afternoon:'21°C', evening:'15°C'},
    wednesday={morning:'17°C', afternoon:'25°C', evening:'20°C'},
    thursday={morning:'19°C', afternoon:'33°C', evening:'22°C'},
    friday={morning:'15°C', afternoon:'19°C', evening:'12°C'},
    saturday={morning:'18°C', afternoon:'27°C', evening:'20°C'},
    sunday={morning:'12°C', afternoon:'24°C', evening:'16°C'}
]
console.log(tempofWeek)
console.log('---------------------------------------------------------------------')
//- Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x=1;
if (x!==0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}
x=0;
if (x!==0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}
x=-3;
if (x!==0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}
console.log('---------------------------------------------------------------------')
//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time=59;
if (time>=0 && time<=15){
    console.log('Перша чверть')

} else if (time>15 && time<=30){
    console.log('Друга чверть')

} else if (time>30 && time<=45){
    console.log('Третя чверть')

}else if(time>45 && time<=59){
    console.log('Четверта чверть')
}
console.log('---------------------------------------------------------------------')
//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
function dayMonth (day) {
    if (day >= 1 && day <= 10) {
        return "Перша декада";
    } else if (day >= 11 && day <= 20) {
        return "Друга декада";
    } else if (day >= 21 && day <= 31) {
        return "Третя декада";
    } else {
        return "Введіть число від 1 до 31";
    }
}

// Приклад використання:
const day = 15;
console.log(dayMonth(day)); // Виведе: "Друга декада"
console.log('---------------------------------------------------------------------')
//- Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let dayWeek =7;
switch (dayWeek){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Введіть цифру від 1 до 7')
}
console.log('---------------------------------------------------------------------')
//- Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
// Запитуємо у користувача число
let firstNumber = +prompt("Введіть перше число:");
let secondNumber = +prompt("Введіть друге число:");
if(firstNumber>secondNumber){
    console.log('Перше число максимальне')
}else if(firstNumber<secondNumber){
    console.log('Друге число максимальне')
}else if(firstNumber===secondNumber){
    console.log('Вони рівні')
}
console.log('---------------------------------------------------------------------')
//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код який, буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення
// (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
let xDef = 2;

if (xDef) {
    console.log(typeof xDef);

}else if(!xDef){
    console.log(xDef = "default");
}
console.log('---------------------------------------------------------------------')
//- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for(let i =0;i<coursesAndDurationArray.length;i++){
    if(coursesAndDurationArray[i].monthDuration>5){
        console.log('Супер')
    }
}