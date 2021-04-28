//Contador para adicionar DIV's
let contador = 1
    // criar a função ao botão de criar tarefas
function criarTarefa() {

    //Seleciona os inputs pela ID
    const adicionarTarefa = document.getElementById('tarefa').value
    const adicionarNoDia = document.getElementById('dias-semana').value

    //Adiciona os valores dos inputs no campo selecionado, utilizando o value
    if (adicionarTarefa !== "") {
        const adicionarPlanner = document.getElementById(`${adicionarNoDia}`)
        adicionarPlanner.innerHTML += `<p class="riscado" id=${contador}}> ${contador} - ${adicionarTarefa}</p>`
        contador += 1
    } else {
        alert("O campo de tarefas está em branco")
    }
}

const riscarCampos = document.getElementsByTagName(this)

function textoRiscado(riscarCampos) {

    riscarCampos.addEventListener('click', function riscando() {
        riscarCampos.classList.add('riscado')
    })


}