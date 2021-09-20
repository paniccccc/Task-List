const form = document.querySelector('#task-form');
const tasklist = document.querySelector('.collect');
const clearbtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// load event listeners

loadEventListeners();

function loadEventListeners(){

    form.addEventListener('submit', addTask);
    form.addEventListener('click', removeTask);
}


function addTask(e){

    if(taskInput.value === ''){
        alert('Add a task !');
    }

    const li = document.createElement('li');

    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));

    const link = document.createElement('a');

    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fas fa-trash"></i>';

    li.appendChild(link);
    tasklist.appendChild(li);

    taskInput.value='';
    e.preventDefault();
}



function removeTask(e){

    
        console.log(e.target)
    
}