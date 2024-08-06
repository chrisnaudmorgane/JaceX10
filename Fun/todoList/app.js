document.getElementById('add-list').addEventListener('click', function() {
    const addTask = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');
    const taskText = addTask.value.trim();

    if (taskText !== "") {
        const listItem = document.createElement('li');
        listItem.className = "flex justify-between items-center p-2 mb-2 bg-white bg-opacity-50 rounded-lg shadow";
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-task text-red-500"><i class='bx bx-trash'></i></button>
        `;
        taskList.appendChild(listItem);
        addTask.value = "";
    }
});

document.getElementById('task-list').addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-task') || e.target.parentElement.classList.contains('delete-task')) {
        const item = e.target.closest('li');
        item.remove();
    }
});
