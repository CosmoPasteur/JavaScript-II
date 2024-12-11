document.addEventListener(() => {
    const newTaskBtn = document.querySelector("#newTaskBtn")
    const input = document.querySelector("newTask")

    newTaskBtn.addEventListener("click", ()=> {
        console.log("newTaskBtn")
    })

    input.addEventListener("keypress", ()=> {
        console.log("newTask")
    })

})
