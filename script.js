const inputBox = document.querySelector('.input-box')
const taskContainer = document.querySelector('.task-container')
// function to get input from user and add task 
function addtask(){
    if(inputBox.value ===''){
        alert("You did not add a task!")
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        taskContainer.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = 'x';
        li.appendChild(span)
    }
    inputBox.value =''; 
    saveData();
}

taskContainer.addEventListener('click', (e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('done');
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
    saveData()
})

function saveData(){
    localStorage.setItem('data',taskContainer.innerHTML)
}
function showTask(){
    taskContainer.innerHTML = localStorage.getItem('data')
}
showTask()
