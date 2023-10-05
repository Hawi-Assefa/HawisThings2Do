// Get references to HTML elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Add event listener to the "Add Task" button
addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        // Create a new list item
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${taskText}
            <button>Delete</button>
        `;

        // Add the new task to the list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';

        // Add event listener to the "Delete" button
        const deleteButton = listItem.querySelector('button');
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });
    }
});
