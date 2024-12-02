
document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("addButton");
    const taskInput = document.getElementById("taskInput");
    const timeInput = document.getElementById("timeInput");
    const taskList = document.getElementById("taskList");
    const themeToggle = document.getElementById("themeToggle");

    let isDarkTheme = false;

    // Add new task
    addButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        const taskTime = timeInput.value.trim();
        if (!taskText) {
            alert("Palun sisesta sündmuse nimi!");
            return;
        }

        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${taskText} <span class="time">${taskTime ? `(${taskTime})` : ''}</span></span>
            <button>Kustuta</button>
        `;

        const deleteButton = listItem.querySelector("button");
        deleteButton.addEventListener("click", function () {
            taskList.removeChild(listItem);
        });

        taskList.appendChild(listItem);
        taskInput.value = "";
        timeInput.value = "";
    });

    // Toggle theme
    themeToggle.addEventListener("click", function () {
        isDarkTheme = !isDarkTheme;
        if (isDarkTheme) {
            document.documentElement.style.setProperty('--bg-color', '#333');
            document.documentElement.style.setProperty('--text-color', '#f9f9f9');
            document.documentElement.style.setProperty('--container-bg', '#444');
            document.documentElement.style.setProperty('--task-bg', '#555');
            document.documentElement.style.setProperty('--time-color', '#ccc');
        } else {
            document.documentElement.style.setProperty('--bg-color', '#f9f9f9');
            document.documentElement.style.setProperty('--text-color', '#333');
            document.documentElement.style.setProperty('--container-bg', '#ffffff');
            document.documentElement.style.setProperty('--task-bg', '#f1f1f1');
            document.documentElement.style.setProperty('--time-color', '#777');
        }
    });
});
