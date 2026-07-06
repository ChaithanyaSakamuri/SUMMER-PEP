// console.log("1");
// console.log("2");

// setTimeout(() => {
//   console.log("3");
// }, 1000);

// setTimeout(() => {
//   console.log("4");
// }, 3000);

// Promise.resolve().then(() => {
//   console.log("8");
// });

// console.log("5");

// setTimeout(() => {
//   console.log("6");
// }, 2000);

// Promise.resolve().then(() => {
//   console.log("7");
// });

// console.log("9");

function getProducts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Product loaded");
        }, 1000);
    });
}

function getOffers() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Offer request failed");
        }, 2000);
    });
}

function getCategories() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Categories request failed");
        }, 1500);
    });
}

Promise.allSettled([
    getProducts(),
    getOffers(),
    getCategories()
])
.then((data) => {
    console.log("Resolved:", data);
})
.catch((err) => {
    console.log("Error:", err);
});