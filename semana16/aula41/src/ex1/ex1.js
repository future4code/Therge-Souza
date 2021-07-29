//Para acessar os parametros na linha de comando para o node utilizamos scripts personalizados
const nome = process.argv[2]   
const idade = Number(process.argv[3])

const resultado = `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7}`

console.log(resultado)