let tasks=['sleeping','writing','eating'];

let input=document.querySelector('.input-box');
let button=document.querySelector('.add-button');
let list=document.querySelector('.task-list');

function displayTasks(){
    list.innerHTML='';
    for(let i=0;i<tasks.length;i++){
        let li=document.createElement("li");
        li.textContent=tasks[i];
        list.appendChild(li);
    }
}

displayTasks();

button.addEventListener("click",function(){
    let task=input.value;

    if(task!==""){
        tasks.push(task);
        input.value="";
        displayTasks();
    }
});



