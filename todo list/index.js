let ip_task = document.getElementById("ip_task")
let tasks_list = document.getElementById("tasks_list")
let tasks = Array()

function addTask(){
    let task_text = ip_task.value
    if(task_text !="" && !tasks.includes(task_text)){
        saveTask( task_text)
        addElementInScreen(task_text)
    }
}

function saveTask(task){
    tasks.push(task)
    // Save in localStorage
}

function addElementInScreen(task){
    // Criando os elementos HTML
    let divElement = document.createElement("div")
    let checkboxElement = document.createElement("input")
    let labelElement = document.createElement("label")
    
    // Configurando os elementos
    checkboxElement.setAttribute("type", "checkbox")
    checkboxElement.classList.add("form-check-input")
    labelElement.textContent = task
    labelElement.classList.add("form-check-label")
    checkboxElement.style = "margin-right:5px"
    // Adicionar os elementos HTML ao DOM
    divElement.appendChild(checkboxElement)
    divElement.appendChild(labelElement)
    tasks_list.appendChild(divElement)
}