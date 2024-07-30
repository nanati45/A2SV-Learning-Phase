const taskInput = document.getElementById('task-input') as HTMLInputElement;
const addTaskButton = document.getElementById('add-task')as HTMLButtonElement;
const listTask = document.getElementById('task-list') as HTMLUListElement;

//set the date
function displayDate(): void {
    let date : Date = new Date()
    let dateString  = date.toString().split(" ")
    document.querySelector('.date')!.innerHTML = dateString[1] + " " + dateString[2] + ", " + dateString[3] ;
}
window.onload = function (): void{
    displayDate() 
}

let tasks: string[] = [];

function addTask(): void {
    const taskText: string = taskInput.value.trim();
    if (taskText) {
        tasks.push(taskText);
        updateTask();
        taskInput.value = '';
    }
}


function updateTask() : void {
    listTask.innerHTML = '';

    tasks.forEach((task : string, index : number) => {
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

function deleteTask(index : number) {
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

