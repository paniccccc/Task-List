const form = document.querySelector('#task-form');
const tasklist = document.querySelector('.collection');
const clearbtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// load event listeners

loadEventListeners();

function loadEventListeners(){

    form.addEventListener('submit', addTask);
    document.addEventListener('click', removeTask);
    clearbtn.addEventListener('click', clearTasks);
    filter.addEventListener('keyup', filterTasks);
    document.addEventListener('DOMContentLoaded',getTasks);
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
    link.innerHTML = '<i class="bi bi-trash-fill"></i>';
    li.appendChild(link);
    tasklist.appendChild(li);

    storeTask(taskInput.value);

    taskInput.value='';
    e.preventDefault();
}


function removeTask(e) {
    if(e.target.parentElement.classList.contains("delete-item")){
        if(confirm('Are you sure ?')){
           e.target.parentElement.parentElement.remove();

           removeTaskLS(e.target.parentElement.parentElement);
        }
    }
}

function removeTaskLS(taskItem){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }

    else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    

    tasks.forEach(function(tasks){
        if(taskItem.textContent === task){
            tasks.splice(index,1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify('tasks'));
    
}

function storeTask(task){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }

    else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }

    else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    
    tasks.forEach(function(task){
    
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(task));

    const link = document.createElement('a');

    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="bi bi-trash-fill"></i>';
    li.appendChild(link);
    tasklist.appendChild(li);
         
    })

}

function clearTasks(){
     tasklist.innerHTML='';

     clearTasksLS();
}

function clearTasksLS(){
    localStorage.clear();
}

function filterTasks(e){
    const text=e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item=task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display='block';
        }

        else{
            task.style.display='none';
        }
    });
}

