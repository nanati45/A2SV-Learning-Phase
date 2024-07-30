interface TodoItem {
    text: string;
    completed: boolean;
  }



let taskInput: HTMLInputElement;
let addTaskButton: HTMLButtonElement;
let listTask: HTMLUListElement;

window.onload = function(): void {
  taskInput = document.getElementById('task-input') as HTMLInputElement;
  addTaskButton = document.getElementById('add-task') as HTMLButtonElement;
  listTask = document.getElementById('task-list') as HTMLUListElement;

  addTaskButton.addEventListener('click', addTask);

  taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  displayDate();
};

let tasks: TodoItem[] = [];

function addTask(): void {
  const taskText: string = taskInput.value.trim() || "";
  if (taskText) {
    const newTask: TodoItem = {
      text: taskText,
      completed: false,
    };
    tasks.push(newTask);
    updateTask();
    taskInput.value = '';
  }
}

function updateTask(): void {
  listTask.innerHTML = '';

  tasks.forEach((task: TodoItem, index: number) => {
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');

    const taskText = document.createElement('span');
    taskText.textContent = task.text;
    taskText.contentEditable = 'true';
    taskText.classList.add('task-text');

    const buttons = document.createElement('span');
    buttons.classList.add('buttons');

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit-button');
    editButton.addEventListener('click', () => {
      const newTaskText = prompt('Enter the new task:');
      if (newTaskText && newTaskText.trim() !== '') {
        tasks[index].text = newTaskText.trim();
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

function deleteTask(index: number) {
  tasks.splice(index, 1);
  updateTask();
}


function displayDate() {
    let dateToday : Date = new Date()
    let date = dateToday.toString().split(" ")
    document.querySelector('.date')!.innerHTML = date[1] + " " + date[2] + ", " + date[3] ;
    }
