tasks = []

addTask = () => {
  const taskName = document.getElementById('todo-name').value;
  if (!!taskName) {
    const checkbox = document.createElement('input');
    checkbox.setAttribute('style', 'id: ')
    const label = document.createElement('label');
    label.setAttribute('for', taskName)
    li.innerText = taskName;
    document.getElementById('todo-list').appendChild(li);
    
    const date = new Date()
    const task = {
      text: taskName,
      timestamp: date.getTime()
    }
    tasks.push(task)
    console.log(tasks)
  }
}

