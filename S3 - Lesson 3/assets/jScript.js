document.addEventListener("",() => {
    const newTaskBtn = document.querySelector("#newTaskBtn")
    const input = document.querySelector("newTask")

    newTaskBtn.addEventListener("click", ()=>{
        console.log("newTaskBtn")
    })

    newTask.addEventListener("keypress", (e)=>{
        if(e.key === "Enter"){
            newTask.value = ""
        }
    })

})

const TODOList{
    
}
