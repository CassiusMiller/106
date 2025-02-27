console.log("Hello from JS");

function hello(){
  console.log("Hello there");
  
}
function saveTask() {
  console.log(`Save task...`);
  
}

function init(){
  console.log("I am the init function");
  hello();
  $("#btnSave").click(saveTask);
}

window.onload = init;