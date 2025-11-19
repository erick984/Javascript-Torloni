// Exercício 2: Verificação de dia da semana
// Escreva um programa que solicita ao usuário um número de 1 a 7 representando um dia da
// semana e exibe o nome correspondente a esse dia. Considere que 1 representa segunda-feira,
// 2 representa terça-feira e assim por diante.

let numero = parseInt(prompt("Digite um número de 1 a 7:"));

let dias = [
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
    "Domingo"
];

if (numero >= 1 && numero <= 7) {
    alert(dias[numero - 1]);
} else {
    alert("Número inválido! Digite um número de 1 a 7.");
}