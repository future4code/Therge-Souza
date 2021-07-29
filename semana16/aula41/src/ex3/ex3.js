const tarefas = [
    "caminhar",
    "jogar bola"
]
const tarefa = process.argv[2]

if(!tarefa){
    console.log("Adicione ao menos 1 parametro")
}else{
    tarefas.push(tarefa)
    console.log(`A tarefa ${tarefa} foi adicionada com sucesso`)
}



