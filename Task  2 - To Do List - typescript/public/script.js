"use strict";
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const listTask = document.getElementById('task-list');
//set the date
function displayDate() {
    let date = new Date();
    let dateString = date.toString().split(" ");
    document.querySelector('.date').innerHTML = dateString[1] + " " + dateString[2] + ", " + dateString[3];
}
window.onload = function () {
    displayDate();
};
let tasks = [];
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText) {
        tasks.push(taskText);
        updateTask();
        taskInput.value = '';
    }
}
function updateTask() {
    listTask.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');
        const taskText = document.createElement('span');
        taskText.textContent = task;
        taskText.contentEditable = "true";
        taskText.classList.add('task-text');
        const buttons = document.createElement('span');
        buttons.classList.add('buttons');
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-button');
        editButton.addEventListener('click', () => {
            const newTaskText = prompt('Enter the new task:');
            if (newTaskText && newTaskText.trim() !== '') {
                tasks[index] = newTaskText.trim();
                updateTask();
            }
        });
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => {
            deleteTask(index);
        });
        taskItem.appendChild(taskText);
        buttons.appendChild(editButton);
        buttons.appendChild(deleteButton);
        taskItem.appendChild(buttons);
        listTask.appendChild(taskItem);
    });
}
function deleteTask(index) {
    tasks.splice(index, 1);
    updateTask();
}
//Event listeners
addTaskButton.addEventListener('click', addTask);
taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
