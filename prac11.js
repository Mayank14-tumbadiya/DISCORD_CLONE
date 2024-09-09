// Select elements
const inputField = document.getElementById("todo-input");
const addButton = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// Add task function
function addTask() {
    const taskText = inputField.value.trim();

    if (taskText !== "") {
        const listItem = document.createElement("li");
        listItem.textContent = taskText;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            todoList.removeChild(listItem);
        };

        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);

        inputField.value = "";
    }
}


addButton.addEventListener("click", addTask);


inputField.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});
