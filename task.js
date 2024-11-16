const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const addTask = () => {
    if (inputBox.value === '') {
        alert("Kindly add a task");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        let editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.classList.add("edit-button");
        li.appendChild(editButton);

        let deleteButton = document.createElement("span");
        deleteButton.innerHTML = '\u00d7';
        li.appendChild(deleteButton);

        listContainer.appendChild(li);
    }

    inputBox.value = "";
    saveData();
};

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    } else if (e.target.classList.contains("edit-button")) {
        editTask(e.target.parentElement);
    }
}, false);

const editTask = (taskItem) => {
    const newTask = prompt("Edit your task:", taskItem.firstChild.textContent.trim());
    if (newTask === null || newTask.trim() === "") {
        alert("Task cannot be empty");
        return;
    }
    taskItem.firstChild.textContent = newTask;
    saveData();
};

const saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML);
};

const showData = () => {
    listContainer.innerHTML = localStorage.getItem("data") || "";

    const editButtons = document.querySelectorAll(".edit-button");
    editButtons.forEach(button => {
        button.addEventListener("click", function(e) {
            editTask(e.target.parentElement);
        });
    });
};

showData();