// Import stylesheets
import './style.css';

// Write Javascript code!

// const hello = function(name){
//   var greeting = 'Hello!';
//   console.log(`${greeting} ${name}`);
// }

//hello(john) === (the hello function)(john)

(function(name) {
  var greeting = 'Hello';
  console.log(`${greeting} ${name}`);
})('john!');

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Immediately invoked function expression</h1>`;
