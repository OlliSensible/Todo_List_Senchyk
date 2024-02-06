import { changeColor } from './change-color.js';

function addTask() {
    const taskName = document.querySelector('input[type="text"]').value;
    const description = document.querySelector('textarea').value;
    const prioritySelect = document.querySelector('select[name="task-priority"]');
    const taskPriority = prioritySelect.value;

    if (!taskName || !description || taskPriority === "Defaults") {
        alert('Please, fill in all the fields!');
        return;
    }

    const list = document.querySelector('.list');
    const item = document.createElement('li');
    item.classList.add('item');
    item.setAttribute('data-priority', taskPriority.toLowerCase());
    item.setAttribute('data-completed', 'false');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    checkbox.onchange = function() { 
        taskDone(this.parentElement); 
        this.parentElement.setAttribute('data-completed', this.checked ? 'true' : 'false');
    };

    const taskNameElement = document.createElement('strong');
    changeColor(prioritySelect); 
    taskNameElement.style.color = prioritySelect.style.color;
    taskNameElement.textContent = ' ' + taskName + ': ';

    const descriptionElement = document.createElement('span');
    descriptionElement.style.color = '#F0F4F8'; 
    descriptionElement.textContent = description;

    item.appendChild(checkbox);
    item.appendChild(taskNameElement);
    item.appendChild(descriptionElement);

    list.appendChild(item);

    document.querySelector('input[type="text"]').value = '';
    document.querySelector('textarea').value = '';
    prioritySelect.value = 'Defaults'; 

    changeColor(prioritySelect); 
}

function taskDone(item) {
    const isChecked = item.querySelector('input[type="checkbox"]').checked;
    item.style.textDecoration = isChecked ? 'line-through' : 'none'; 
    if (isChecked) {
        item.parentElement.appendChild(item); 
    }
}

document.getElementById('addTaskButton').addEventListener('click', addTask);