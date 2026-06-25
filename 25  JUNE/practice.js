// function scope() {
//     var num3 = 10;
//     // console.log(num3);
// // console.log(num);
// // console.log(num2);
// // console.log(num3);
// }
// console.log(num3);
// scope();

// function outer() {
//     let num = 0;
//     function inner() {
//         count++;
//         console.log(count);
//    }
//     return inner;
// }
// const counter = outer();
// counter();
// counter();

// function CreatBankAccount(initialBalance) {
//     int balance = initialBalance;
//     return {
//         Deposit (amount) {
//             balance+=amount;
//             console.log("Deposited INR $(amount)")
//         };
//         withdraw (amount) {
//             if (amount>balance) {
//             console.log("Insufficient balance");
//             return;
//             }
//             balance-=amount;
//             console.log("Withdrawn INR $(amount)");
//         };
//         getBalance() {
//             return balance;
//         }
//     }
// }

console.log('start');
setTimeout(() => {
    console.log('Hello');
}, 1000)
console.log('end');
