const input = document.querySelector("#todolist__input");
const addBtn = document.querySelector("#add");
const deleteAllBtn = document.querySelector("#del-all")
const clearInput = document.querySelector("#clear__input");
const taksWrapper = document.querySelector("#tasks")
const TASKS = JSON.parse(localStorage.getItem("storedTasks")) || [];

function saveTasksToLocalStorage() {
    localStorage.setItem("storedTasks", JSON.stringify(TASKS));
}



addBtn.addEventListener("click", (e) => {
    e.preventDefault()
    if (input.value.trim().length > 0) {
        let date = new Date()
        const task = {
            taskTitle: input.value,
            taskStatus: false,
            taskCreatedHour: addZero(String(date.getHours())),
            taskCreatedMinutes: addZero(String(date.getMinutes())),
        };
        TASKS.unshift(task)
        input.value = "";
        // localStorage.setItem("storeedTasks", JSON.stringify(task))
        // localStorage.setItem("storedTasks", JSON.stringify(TASKS))
        saveTasksToLocalStorage()
        render();
    }
})


render()

function render() {
    taksWrapper.innerHTML = "";  // so that we dont have dublicates
    TASKS.map((i, index) => {
        const div = document.createElement("div")
        div.classList.add("task");
        div.setAttribute("data-order-number", index)
        // <p class="${i.taskStatus ? 'text-decoration:line-through' : 'text-decoration: none'}">${i.taskTitle}</p>

        div.innerHTML = `
            <p class="task-title" style="${i.taskStatus ? 'text-decoration: line-through; background-color: #01b501; color: #fff; padding: 10px; border-radius: 4px;' : ""} ">${i.taskTitle}</p>
    
            <div class="task-actions">
                <button class="task-action__btn complete">Complete</button>
                <button class="task-action__btn edit">Edit</button>
                <button class="task-action__btn time">${i.taskCreatedHour} : ${i.taskCreatedMinutes}</button>
                <button class="task-action__btn del">Delete</button>
            </div>
            `
        taksWrapper.append(div)
    })

}


taksWrapper.addEventListener("click", (e) => {
    // console.log(e);
    let taskIndex = +e.target.parentElement.parentElement.dataset.orderNumber;
    if (e.target.classList.contains("complete")) {
        TASKS[taskIndex].taskStatus = !TASKS[taskIndex].taskStatus;
        render() // dont fully understand, but i think it' for updating html to add line through
        console.log(TASKS[taskIndex])
    }
    else if (e.target.classList.contains("del")) {
        e.target.parentElement.parentElement.classList.add("deleted")
        setTimeout(() => {
            TASKS.splice(taskIndex, 1)
            render()
        }, 300)
    }
    else if (e.target.classList.contains("edit")) {
        e.target.parentElement.previousElementSibling.setAttribute("contenteditable", true)
        e.target.parentElement.previousElementSibling.style.border = "2px solid blue"
        e.target.innerHTML = 'Done'
        e.target.classList.remove("edit")
        e.target.classList.add("done")
    }
    else if (e.target.classList.contains("done")) {
        e.target.parentElement.previousElementSibling.setAttribute("contenteditable", false)
        e.target.innerHTML = 'Edit'
        e.target.classList.add("edit")
        e.target.classList.remove("done")

        if (e.target.parentElement.previousElementSibling.textContent != TASKS[taskIndex].taskTitle) {
            TASKS[taskIndex].taskTitle = e.target.parentElement.previousElementSibling.textContent;
        }
        saveTasksToLocalStorage()
        render()
    }
})

deleteAllBtn.addEventListener("click", () => {
    localStorage.clear()
    while (TASKS[0]) {
        TASKS.splice(0, 1)
    }
    render()
})

clearInput.addEventListener("click", () => {
    input.value = "";
})

function addZero(text) {
    return text.padStart(2, "0")
}
// addZero("5")

