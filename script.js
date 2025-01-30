document.addEventListener("DOMContentLoaded", () => {
    // Select the "Add Task" button and store it in a constant named addButton
const addButton = document.getElementById('add-task-btn');

// Select the input field where users enter tasks and store it in a constant named taskInput
const taskInput = document.getElementById('task-input');

// Select the unordered list that will display the tasks and store it in a constant named taskList
const taskList = document.getElementById('task-list');


    addTaskBtn.addEventListener("click", () => {
        const taskText = addButton.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            addButton.value = "";
        }
    });

    taskList.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {
            e.target.parentElement.remove();
        }
    });

    // Define the addTask function
    function addTask() {
        // Recupera il valore dell'input dell'attività
        const taskText = taskInput.value.trim();
    
        // Controlla se taskText non è vuoto
        if (taskText !== "") {
            // Crea un nuovo elemento li
            const li = document.createElement("li");
            li.textContent = taskText;
    
            // Crea un nuovo elemento pulsante per rimuovere l'attività
            const removeBtn = document.createElement("button");
            removeBtn.textContent = "Remove";
            removeBtn.className = "remove-btn";
    
            // Assegna un evento onclick al pulsante remove
            removeBtn.onclick = function() {
                taskList.removeChild(li);
            };
    
            // Aggiungi il pulsante di rimozione all'elemento li
            li.appendChild(removeBtn);
    
            // Aggiungi li a taskList
            taskList.appendChild(li);
    
            // Cancella il campo di input dell'attività
            taskInput.value = "";
        } else {
            alert("Per favore, inserisci un'attività.");
        }
    }
    
});

