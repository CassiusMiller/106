console.log("Hello from JS");

function hello(){
  console.log("Hello there");
  
}

function init(){
  console.log("I am the init function");
  hello();
  
}

window.onload = init;