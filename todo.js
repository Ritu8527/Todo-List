let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

window.onload = function () { //anonymous function to load tasks on page load
    tasks.forEach(task => renderTask(task));
};
// Add task
function addTask() {
    let input = document.getElementById("taskInput");
    let text = input.value.trim(); //trim to remove extra spaces and prevent adding empty tasks.

    if (text === "") {
        alert("⚠️ Please enter a valid task!");
        return;
    }
    let task = {
        id: Date.now(), // It returns current time in milliseconds since Jan 1, 1970, auto-generating a unique ID for each task.
        text: text,
        completed: false
    };

    tasks.push(task);
    saveTasks();
    renderTask(task); // Render the new task immediately without reloading the page.

    input.value = "";// Clear input field after adding a task.
}

// Enter key support
document.getElementById("taskInput").addEventListener("keydown", event => {
    if (event.key === "Enter") addTask();
});// event is used to capture the event object.

// Render task
function renderTask(task) {
    let li = document.createElement("li");

    let leftDiv = document.createElement("div");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;// Set checkbox state based on task completion status. if the task is marked as completed, the checkbox will be checked when rendered.

    let span = document.createElement("span");
    span.textContent = task.text; 

    if (task.completed) span.classList.add("completed");

    checkbox.addEventListener("change", () => { 
        task.completed = checkbox.checked;
        saveTasks();
        span.classList.toggle("completed"); //toggle means if the class is present, it will be removed; if it's not present, it will be added. This allows for dynamic updating of the task's appearance based on its completion status.
    });

    leftDiv.appendChild(checkbox); // Append the checkbox to the leftDiv, which will contain both the checkbox and the task text.
    leftDiv.appendChild(span);//

    let btnDiv = document.createElement("div");
    btnDiv.className = "task-buttons";

    // Edit button
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit";

    editBtn.addEventListener("click", function () {
        let newText = prompt("Edit your task:", task.text); // Prompt the user to enter new text for the task, pre-filling the prompt with the current task text for convenience.
        if (newText !== null && newText.trim() !== "") {
            task.text = newText;
            span.textContent = newText;
            saveTasks();
        }
    });

    // Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete";

    deleteBtn.addEventListener("click", function () {
        tasks = tasks.filter(t => t.id !== task.id);// Update the tasks array by filtering out the task that matches the ID of the task to be deleted. This effectively removes the task from the array. here t is a placeholder for each task in the tasks array, and the filter method creates a new array that includes only those tasks whose ID does not match the ID of the task being deleted.
        li.remove();
        saveTasks();
    });

    btnDiv.appendChild(editBtn);
    btnDiv.appendChild(deleteBtn);

    li.appendChild(leftDiv);
    li.appendChild(btnDiv);

    document.getElementById("taskList").prepend(li);
}

// Save to localStorage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}