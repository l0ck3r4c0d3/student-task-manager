let tasks = [
    {
        id: 1,
        title: "Math Homework",
        status: "Todo",
        deadline: "2026-06-15",
        priority: "High"
    },
    {
        id: 2,
        title: "Software Engineering Report",
        status: "In Progress",
        deadline: "2026-06-20",
        priority: "Medium"
    }
];

let nextId = 3;

class MarkTaskCompletedCommand {
    execute(taskList, taskId) {
        const taskExists = taskList.some(task => task.id === taskId);

        if (!taskExists) {
            return {
                success: false,
                message: "Task not found.",
                tasks: taskList
            };
        }

        const updatedTasks = taskList.map(task => {
            if (task.id === taskId) {
                return {
                    ...task,
                    status: "Done"
                };
            }

            return task;
        });

        return {
            success: true,
            message: "Task marked as completed.",
            tasks: updatedTasks
        };
    }
}

function addTask() {
    const titleInput = document.getElementById("titleInput");
    const deadlineInput = document.getElementById("deadlineInput");
    const priorityInput = document.getElementById("priorityInput");

    const title = titleInput.value.trim();
    const deadline = deadlineInput.value;
    const priority = priorityInput.value;

    if (title === "") {
        showMessage("Task title is required.", false);
        return;
    }

    const newTask = {
        id: nextId,
        title: title,
        status: "Todo",
        deadline: deadline || "No deadline",
        priority: priority
    };

    tasks = [...tasks, newTask];
    nextId++;

    titleInput.value = "";
    deadlineInput.value = "";
    priorityInput.value = "Low";

    showMessage("Task added successfully.", true);
    renderTasks();
}

function markTaskCompleted(taskId) {
    const command = new MarkTaskCompletedCommand();
    const result = command.execute(tasks, taskId);

    tasks = result.tasks;
    showMessage(result.message, result.success);
    renderTasks();
}

function deleteTask(taskId) {
    const exists = tasks.some(task => task.id === taskId);

    if (!exists) {
        showMessage("Task not found.", false);
        return;
    }

    tasks = tasks.filter(task => task.id !== taskId);
    showMessage("Task deleted successfully.", true);
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    if (tasks.length === 0) {
        taskList.innerHTML = "<p>No tasks available.</p>";
        return;
    }

    tasks.forEach(task => {
        const taskElement = document.createElement("div");
        taskElement.className = "task";

        const statusClass = task.status === "Done" ? "status-done" : "";

        taskElement.innerHTML = `
            <div class="task-title">${task.title}</div>
            <div class="task-meta">Status: <span class="${statusClass}">${task.status}</span></div>
            <div class="task-meta">Deadline: ${task.deadline}</div>
            <div class="task-meta">Priority: ${task.priority}</div>
            <button class="primary-btn" onclick="markTaskCompleted(${task.id})">Mark Completed</button>
            <button class="danger-btn" onclick="deleteTask(${task.id})">Delete</button>
        `;

        taskList.appendChild(taskElement);
    });
}

function showMessage(text, success) {
    const message = document.getElementById("message");
    message.textContent = text;
    message.className = success ? "message success" : "message error";
}

document.getElementById("addTaskBtn").addEventListener("click", addTask);

renderTasks();
