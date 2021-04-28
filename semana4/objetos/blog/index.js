function criarPost() {
    const titulo = document.getElementById('titulo-post').value
    const autor = document.getElementById('autor-post').value
    const conteudo = document.getElementById('conteudo-post').value
    const container = document.getElementById('container-de-posts')
    const preenchimentoPost = {
        titulo: titulo,
        autor: autor,
        conteudo: conteudo
    }


    container.innerHTML += `<h3>${preenchimentoPost.titulo}</h3>`
    container.innerHTML += `<p>${preenchimentoPost.autor}</p>`
    container.innerHTML += `<p>${preenchimentoPost.conteudo}</p>`


    const arrayPost = []
    arrayPost.push(preenchimentoPost)



    console.log(arrayPost)



    titulo.value = ""
    autor.value = ""
    conteudo.value = ""


}