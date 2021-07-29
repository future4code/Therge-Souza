const operation = process.arvg[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

let result = "Resultado: "

switch(operation            ){
    case "add":
        result += num1 + num2;
        break;
    case "sub":
        result += num1 - num2;
        break;
    case "mult":
        result += num1 * num2;
        break;
    case "div":
        result += num1 / num2;
        break;
    default:
        result += "Tente novamente!"
        break;
}

console.log(result)