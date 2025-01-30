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
    // Retrieve and trim the value from the task input field
    const taskText = taskInput.value.trim();

    // Check if taskText is not empty
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create a new li element
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a new button element for removing the task
    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.className = 'remove-btn';

    // Assign an onclick event to the remove button
    removeButton.onclick = function() {
        taskList.removeChild(li);
    };

    // Append the remove button to the li element
    li.appendChild(removeButton);

    // Append the li to the taskList
    taskList.appendChild(li);

    // Clear the task input field
    taskInput.value;
}
});

