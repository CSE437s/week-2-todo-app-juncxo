function addTask() {
   var taskInput = document.getElementById('taskInput');
   var taskList = document.getElementById('taskList');

   if (taskInput.value.trim() == "") {
    alert('Please select a task');
    return;
   }
   var li = document.createElement('li');
   var span = document.createElement('span');
   span.appendChild(document.createTextNode(taskInput.value));
   li.appendChild(span);

   var deleteBtn = document.createElement('button');
   deleteBtn.appendChild(document.createTextNode("X"));
   deleteBtn.setAttribute('class', 'close');
   deleteBtn.onclick = function () {
    taskList.removeChild(li);
   }
   li.appendChild(deleteBtn);


   taskList.appendChild(li);
   taskInput.value = "";

}