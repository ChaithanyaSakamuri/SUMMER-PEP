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

// function getUser() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("User Loaded");
//         }, 1000);
//     });
// }

// function getProducts() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Products Loaded");
//         }, 2000);
//     });
// }

// function getOrderDetail() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Order Details Loaded");
//         }, 3000);
//     });
// }

// async function loadData() {
//     console.log("Hello World");

//     const user = await getUser();
//     console.log(user);

//     const products = await getProducts();
//     console.log(products);

//     const order = await getOrderDetail();
//     console.log(order);
// }

// loadData();

// console.log("Hello");

function login() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("1. Logging in...");
            console.log("2. Login successful");
            resolve();
        }, 1000);
    });
}

function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("3. Getting user...");
            console.log("4. User is Loaded");
            resolve();
        }, 1000);
    });
}

function getOrders() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("5. Getting orders...");
            console.log("6. Orders data is Loaded");
            resolve();
        }, 1000);
    });
}

function getOrderDetails() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("7. Getting order details...");
            console.log("8. Order details are Loaded");
            resolve();
        }, 1000);
    });
}

async function loadData() {
    await login();
    await getUser();
    await getOrders();
    await getOrderDetails();
}

loadData();