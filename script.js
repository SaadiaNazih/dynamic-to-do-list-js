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
                removeFromLocalStorage(taskText);
            };

            li.appendChild(removeBtn);
            taskList.appendChild(li);
            saveToLocalStorage(taskText);
            taskInput.value = "";
        } else {
            alert("Per favore, inserisci un'attività.");
        }
    }

    // Funzione per salvare le attività nel Local Storage
    function saveToLocalStorage(task) {
        let tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Funzione per rimuovere le attività dal Local Storage
    function removeFromLocalStorage(task) {
        let tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
        tasks = tasks.filter(t => t !== task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Funzione per caricare le attività dal Local Storage
    function loadTasks() {
        let tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
        tasks.forEach(task => {
            const li = document.createElement("li");
            li.textContent = task;

            const removeBtn = document.createElement("button");
            removeBtn.textContent = "Remove";
            removeBtn.className = "remove-btn";

            removeBtn.onclick = function() {
                taskList.removeChild(li);
                removeFromLocalStorage(task);
            };

            li.appendChild(removeBtn);
            taskList.appendChild(li);
        });
    }

    // Carica le attività dal Local Storage all'avvio della pagina
    loadTasks();

    // Aggiungi un listener di eventi a addButton
    addButton.addEventListener("click", addTask);

    // Aggiungi un listener di eventi a taskInput per l'evento 'keypress'
    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});




