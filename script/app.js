console.log("Hello from JS");

function hello(){
  console.log("Hello there");
  
}
function saveTask() {
  console.log(`Save task...`);
  // get value
  const title = $("#txtTitle").val();
  const desription = $("#txtDescription").val();
  const color = $("#selColor").val();
  const date = $("#selDate").val();
  const status = $("#selStaus").val();
  const budget = $("#numBudget").val();
  console.log(title, desription, color, date, status, budget);
  
  //build an object
  let taskToSave = new Task(title, desription, color, date, status, budget);
  console.log(taskToSave);
  
  //save to server

  //display the task
  displayTask(taskToSave);
    
}

function displayTask(task) {
  let syntax = `
    <div class = "task" style="border-color:${task.color}">
    <div class= "info">
    <h3>${task.title}<h3>
    <p>${task.desc}<p>
    </div>
    <label class="status">${task.status}</label>
    <div class="dateBudget">
    <label>${task.startdate}</label>
    <label>${task.budget}</label>
    </div>
    </div>`;
    $(".pendingTask").append(syntax);
}

function init(){
  console.log("I am the init function");
  hello();
  $("#btnSave").click(saveTask);
}

window.onload = init;