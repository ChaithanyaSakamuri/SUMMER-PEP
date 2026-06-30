const form = document.querySelector("form");
const titleInput = document.getElementById("title");
const descInput = document.getElementById("desc");
const todoList = document.getElementById("todo-list");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const title = titleInput.value.trim();
    const desc = descInput.value.trim();

    if (title === "" || desc === "") {
        alert("Please fill in all fields.");
        return;
    }
    const li = document.createElement("li");
    li.className = "todo-item";
    li.innerHTML = `
        <h3>${title}</h3>
        <p>${desc}</p>
        <div class="actions">
            <button class="complete-btn">Complete</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;
    li.querySelector(".complete-btn").addEventListener("click", function () {
        li.classList.toggle("completed");
    });
    li.querySelector(".delete-btn").addEventListener("click", function () {
        li.remove();
    });
    todoList.appendChild(li);
    titleInput.value = "";
    descInput.value = "";
});