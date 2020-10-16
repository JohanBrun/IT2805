tasks = []

addTask = () => {
  const taskName = document.getElementById('todo-name').value;
  if (!!taskName) {
    const li = document.createElement('li')

    // Generate checkbox
    const checkbox = document.createElement('input');
    const date = new Date();
    const id = date.getTime();
    checkbox.setAttribute('id', id);
    checkbox.setAttribute('type', 'checkbox')
    li.appendChild(checkbox);

    // Generate label
    const label = document.createElement('label');
    label.setAttribute('for', id);
    label.innerText = taskName;
    li.appendChild(label);

    // Add list element to DOM
    document.getElementById('todo-list').appendChild(li);
    
    // Store task
    const task = {
      text: taskName,
      timestamp: id,
    }
    tasks.push(task)
  }
}

updateOutput = () => {
  console.log(tasks)
  let checked = 0;
  tasks.forEach(task => {
    const taskElement = document.getElementById(task.timestamp)
    if (taskElement.checked) {
      checked++;
    }
  });
  const status = document.getElementById('status');
  status.innerText = checked + '/' + tasks.length + ' completed';
}

