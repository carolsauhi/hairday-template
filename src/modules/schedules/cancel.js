const periods = document.querySelectorAll(".period")

// Gera evento de click para cada lista (manhã, tarde e noite)
periods.forEach((period)=>{
  // Captura o evento de clique na lista
  period.addEventListener("click", (event) =>{
    if(event.target.classList.contains("cancel-icon")){
      //Obtém a li pay do elemento clicado
    const item = event.target.closest("li")
    const {id} = item.dataset
    console.log(id)

    if(id){
      const isConfirm = confirm("Tem certeza que deseja cancelar esse agendamento?")

      if(isConfirm){
        console.log("Confirmado o cancelamento")
      }
    }
    }
  })
})