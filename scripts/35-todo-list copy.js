// we are changing for loop with foreach here

const todolist=[
  {name:'dinner',
  dueDate:'2022-1-21'
},
{name:'work',
  dueDate:'2022-1-24'
}
]

//Generating html

function renderTodo(){
  let todolistHTML='';

  // we are using forEach loop instead

 todolist.forEach(function(todoObject,i){
    
    // const name=todoObject.name;
    // const dueDate=todoObject.dueDate;
    //shortcut deconstructing :
    const{name,dueDate}=todoObject;
    const html=
    `<div>${name}</div>
    <div> ${dueDate}</div>
    <button onclick="
    
      todolist.splice(${i},1);
      renderTodo();
      "class="delete-todo-button">Delete</button>`
    todolistHTML+=html;

 })
  document.querySelector('.js-todo-list').innerHTML=todolistHTML;
  } 
  

 renderTodo();


function addTodo(){
const inputElement=document.querySelector('.js-name-input');
const name=inputElement.value;

const dateElement=document.querySelector('.js-due-date-input');
const dueDate=dateElement.value;

todolist.push({
  // name: name,
  // dueDate: dueDate
  //shortcut
  name,
 dueDate});
console.log(todolist)

inputElement.value='';
dateElement.value='';
renderTodo();

}

// steps:
// 1. save the data 
// 2. generate html
// 3. make it interactive 


// Step 1:Get value from input.

// Step 2:Push into array (addTodo())

// Step 3:Clear input

// Step 4:Re-render the entire list again from the array
// - Taking the whole array (todo list)
// - Generating fresh HTML (using for loop)
// - put inside web page( using document.querySelector)

// That is called re-rendering.



//since each todo is a one complete unit make many array of objects . 