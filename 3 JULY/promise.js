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