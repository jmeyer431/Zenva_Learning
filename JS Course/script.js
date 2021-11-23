let item = 'window';

if(item != 'engine'){
    console.log('not engine!');
}

let score = 5;

if(score >= 60){
    console.log('pass');
}
else if(score < 10){
    console.log('meet the teacher');
}
else{
    console.log('not pass');
}

let isEngine = item == 'engine';
console.log(isEngine);

if(isEngine){

}

let balance = 100;
let itemPrice = 101;

// 1. check balance
if (balance >= itemPrice){
    balance -= itemPrice;
    console.log('item purchased');
    console.log(balance);
}
else{
    console.log('not enough balance');
}