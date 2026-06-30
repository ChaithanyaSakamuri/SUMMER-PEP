const child = document.querySelector("#child");
const parent = document.querySelector("#parent");
const grandparent = document.querySelector("#grandparent"); 
const body = document.querySelector("body");

child.addEventListener("click", (e) => {
    console.log('Child. Event capturing');
}, true)

child.addEventListener("click", (e) => {
    console.log('Child. Event bubbling');
})

grandParent.addEventListener("click", (e) => {
    console.log('Grandparent. Event capturing');
}, true)

grandParent.addEventListener("click", (e) => {
    console.log('Grandparent. Event bubbling');
})

parent.addEventListener("click", (e) => {
    console.log('Parent. Event capturing');
}, true)

parent.addEventListener("click", (e) => {
    console.log('Parent. Event bubbling');
})