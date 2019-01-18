//Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listeners
loadEventListeners();

//Load all event listeners
function loadEventListeners() {
  //add task event
  form.addEventListener('submit', addTask);
  //remove task event
  taskList.addEventListener('click', removeTask);
  //clear tasks event
  clearBtn.addEventListener('click', clearTask);
  //filter tasks event
  filter.addEventListener('keyup', filterTask);
}

// add Task
function addTask(e) {
  if (taskInput.value === '') {
    alert('Add a task');
  }

  //Create li element
  const li = document.createElement('li');
  //Add class 
  li.className = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  //Create new link element
  const link = document.createElement('a');
  //add class
  link.className = 'delete-item secondary-content';
  // add icon html
  link.innerHTML = '<i class= "fa fa-remove"</i>';
  //Append the link to li 
  li.appendChild(link);
  // append li to ul
  taskList.appendChild(li);
  //clear input
  taskInput.value = '';
  //prevent redirect
  e.preventDefault();

}

//Remove task
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

//clear Tasks
function clearTask() {
  // taskList.innerHTML = "";

  //faster
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

//filter tasks
function filterTask(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(
    function (task) {
      const item = task.firstChild.textContent;

      if (item.toLowerCase().indexOf(text) != -1) {
        task.style.display = 'block';
      } else {
        task.style.display = "none";
      }
    }
  );
}