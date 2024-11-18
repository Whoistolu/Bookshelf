const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const addTask = () => {
    if (inputBox.value === '') {
        alert("Kindly add a task")
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }

    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

const saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML);
}

const showData = () => {
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();

const editTask = () => {

    const newTask = prompt("Edit your task:", li.innerHTML.textContent);
    if (newTask === null || newTask.trim() === "") {
        alert("Task cannot be empty")
    }

    li.firstChild.textContent = newTask;
}