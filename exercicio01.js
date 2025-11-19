// Exercício 1: Verificação de login
// Escreva um programa que solicita ao usuário um nome de usuário e uma senha. Verifique se o
// nome de usuário é "admin" e a senha é "senha123". Exiba uma mensagem indicando se o login
// foi bem-sucedido ou não.

let login = prompt("Digite seu Nome: ")

switch (login) {
    case "admin":
        console.log("Login bem sucedido")
        break;



    default:
        console.log("Login Incorreto")
        break;


}
let senha = prompt("Insira sua senha: ")

switch (senha) {
    case "senha123":
        console.log("Senha correta")
        break;

    default:
        console.log("Senha Incorreta")
        break;
}