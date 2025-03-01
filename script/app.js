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
  $.ajax({
    type: "POST",
    url: "http://fsdiapi.azurewebsites.net/api/tasks/",
    data: JSON.stringify(taskToSave),
    contentType:"application/json",
    success: function (response) {
      console.log(response);
      
    },
    error: function (error) {
      console.log(error);
      
    }
  });
  //display the task
  displayTask(taskToSave);
    
}

function testRequest() {
  $.ajax({
    type: "GET",
    url: "http://fsdiapi.azurewebsites.net",
    success: function (response) {
      console.log(response);
      
    },
    error: function (error) {
      console.log(error);
      
    }
    
  })
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

function loadTask() {
  $.ajax({
    type: "GET",
    url: "http://fsdiapi.azurewebsites.net/api/tasks",
    success: function (response) {
      console.log(response);
      let data = JSON.parse(res);
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        let task = data[i];
        if (task.name=== "Cassius") {
          displayTask(task)
        }
      }
      
    },
    error: function (error) {
      console.log(error);
      
    }
    
  })
}

function init(){
  console.log("I am the init function");
  hello();
  $("#btnSave").click(saveTask);
}

window.onload = init;