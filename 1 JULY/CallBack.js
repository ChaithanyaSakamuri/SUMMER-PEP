// function one() {
//     console.log("one");
// }

// function two(fn) {
//     console.log("two");
//     fn();
//     console.log("after callback");
// }
// // one();
// two(one);

// function great(name) {
//     console.log(`Hello, ${name}`);
// }
// function callGreat(callback) {
//     callback();
// }
// callGreat(() => {
//     great("John");
// });

setTimeout(() => {
    console.log("Hello World");
}, 3000);