// function getProducts() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Product loaded");
//         }, 1000);
//     });
// }

// function getOffers() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("Offer request failed");
//         }, 2000);
//     });
// }

// function getCategories() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("Categories request failed");
//         }, 1500);
//     });
// }

// Promise.allSettled([
//     getProducts(),
//     getOffers(),
//     getCategories()
// ])
// .then((data) => {
//     console.log("Resolved:", data);
// })
// .catch((err) => {
//     console.log("Error:", err);
// });

function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("User Loaded");
        }, 1000);
    });
}

function getProducts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Products Loaded");
        }, 2000);
    });
}

function getOrderDetail() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Order Details Loaded");
        }, 3000);
    });
}

async function loadData() {
    console.log("Hello World");

    const user = await getUser();
    console.log(user);

    const products = await getProducts();
    console.log(products);

    const order = await getOrderDetail();
    console.log(order);
}

loadData();

console.log("Hello");