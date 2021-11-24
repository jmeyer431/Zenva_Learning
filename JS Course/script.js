// 1 hour = 60 minutes
function hourToMinutes(hours){
    let result = hours * 60;
    console.log(result);
    return result;
}

let a = hourToMinutes(10);
let b = hourToMinutes(20);

let dayToHours = function(days) {
    return days * 24;
};

let c = dayToHours(1);
console.log(c);

// variable declaration
let balance = 100;
let stock = 50;
let price = 5;

function shop(quantity){
    if(stock >= quantity){
        balance += quantity * price;
        stock -= quantity;

        console.log('purchase completed', balance, stock)
    }
    else{
        console.log('not enough stock');
    }
}

shop(8);
shop(4);
shop(2);
shop(200);