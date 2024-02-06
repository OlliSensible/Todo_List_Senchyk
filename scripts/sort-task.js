document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('select[name="filter"]').addEventListener('change', function() {
        sortTasks(this.value);
    });
});

function sortTasks(filter) {
    let tasks = document.querySelectorAll('.list .item');
    tasks = Array.from(tasks);

    const selectedPriority = filter; 

    tasks.sort((a, b) => {
        const priorityA = a.dataset.priority;
        const priorityB = b.dataset.priority;

        if (priorityA === selectedPriority && priorityB !== selectedPriority) {
            return -1;
        } else if (priorityA !== selectedPriority && priorityB === selectedPriority) {
            return 1;
        }
    });

    const list = document.querySelector('.list');
    list.innerHTML = '';
    tasks.forEach(task => list.appendChild(task));
}