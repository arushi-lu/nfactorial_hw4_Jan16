//Task 1

function checkAge(age){
    return (age>=18)? true : confirm("Родители разрешили?!");
}

//checkAge(15);
//console.log(checkAge(18));
//console.log(checkAge(25));


//Task 2

function pow(x, n){
    let res = 1;
    while(n != 0){
        res = res * x;
        n--;
    }
    return res;
}

//console.log(pow(1,100));


//Task 3
function yes(){
    alert("Вы согласились!");
}
function no(){
    alert("Вы не согласились!")
}

let ask = (question) => (confirm(question))? yes() : no();

//ask("Вы согласны?");

//Task 4

let arr = [5, 2, 1, -10, 8];

arr.sort();
arr.reverse();

//console.log(arr);

//Task 5

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = [];
names = users.map(user => user.name);

//alert( names ); // Вася, Петя, Маша

//Task 6
let vasya1 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya1 = { name: "Петя", surname: "Иванов", id: 2 };
let masha1 = { name: "Маша", surname: "Петрова", id: 3 };

let users1 = [ vasya1, petya1, masha1 ];

let fullname_array = users1.map(user => ({
    fullname: `${user.name} ${user.surname}`,
    id: user.id
    }));

console.log(fullname_array[0].fullname);

//Task 7

function getAverageAge(users){
    let ages = users.map(user => user.age);
    let sum = 0;
    for (let i = 0; i < ages.length; i++){
        sum += ages[i];
    }
    sum = sum/ages.length;
    return Math.round(sum);
}
let ages = users.map(user => user.age);


//alert( getAverageAge(users) ); // (25 + 30 + 29) / 3 = 28

