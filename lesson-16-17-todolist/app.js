const input = document.querySelector("#todolist__input");
const addBtn = document.querySelector("#add");
const clearInput = document.querySelector("#clear__input");
const taksWrapper = document.querySelector("#tasks")

const tasks = [];

addBtn.addEventListener("click", (e) => {
    e.preventDefault()
    // const p = document.createElement("p")
    // p.innerHTML = input.value
    // console.log(p)
    // taksWrapper.append(p)

    const task = {
        taskTitle: input.value,
        taskStatus: null,
    };
    tasks.unshift(task)

    render();
    input.value = "";
})

clearInput.addEventListener("click", () => {
    input.value = "";
})


function render(e) {
    // e.preventDefault()
    tasks.map((i) => {
        // console.log(i.taskTitle)
       
    })
}
