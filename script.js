const taskForm = document.getElementById('taskForm');
     const clearAllBtn = document.getElementById('clearAllBtn');
     const taskInput = document.getElementById('taskInput');
     const taskList = document.getElementById('taskList');

     taskForm.addEventListener('submit', (event) => {
          event.preventDefault(); 
          const task = taskInput.value.trim(); 
          if (task !== '') {
               addTask(task); 
               taskInput.value = ''; 
          } else {
               alert('Please enter a task!'); 
          }
     });

     function addTask(task) {
          const li = document.createElement('li');
          li.textContent = task;
          const checkBtn = document.createElement('button');
    checkBtn.textContent = 'Check';
    checkBtn.classList.add('checkBtn');
    checkBtn.addEventListener('click', () => {
        li.classList.toggle('completed'); 
    });

          const deleteBtn = document.createElement('button');
          deleteBtn.textContent = 'Delete';
          deleteBtn.classList.add('deleteBtn');
          deleteBtn.addEventListener('click', () => {
               taskList.removeChild(li); 
          });

          li.appendChild(deleteBtn);
          taskList.appendChild(li);
           li.appendChild(checkBtn);
     }

     clearAllBtn.addEventListener('click', () => {
          taskList.innerHTML = ''; 
     });