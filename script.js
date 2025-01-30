document.addEventListener("DOMContentLoaded", () => {
   // Seleziona gli elementi DOM
const addButton = document.getElementById("add-task-btn");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

// Funzione per aggiungere un'attività
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        removeBtn.onclick = function() {
            taskList.removeChild(li);
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);
        taskInput.value = "";
    } else {
        alert("Per favore, inserisci un'attività.");
    }
}

// Aggiungi un listener di eventi a addButton
addButton.addEventListener("click", addTask);

// Aggiungi un listener di eventi a taskInput per l'evento 'keypress'
taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

});




