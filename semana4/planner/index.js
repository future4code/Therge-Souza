// criar a função ao botão de criar tarefas
let contador = 1

function criarTarefa() {

    //Seleciona os inputs pela ID
    const adicionarTarefa = document.getElementById('tarefa').value
    const adicionarNoDia = document.getElementById('dias-semana').value



    if (adicionarTarefa !== "") {
        //Adiciona os valores dos inputs no campo selecionado, utilizando o value
        const adicionarPlanner = document.getElementById(`${adicionarNoDia}`)
        adicionarPlanner.innerHTML += `<p id=${contador}}> ${contador} - ${adicionarTarefa}</p>`
        contador += 1
    }

}