var salario = 5500;
var salarioComDesconto = 0;
var salarioFinal = 0;
var descontoIR = 0;

function INSS (salario){
    if (salario <= 1556.94) {
        descontoINSS = salario * 0.08;
        salarioComDesconto = salario - descontoINSS;
    }
    else if (salario >= 1556.95 && salario <= 2594.92){
        descontoINSS = salario * 0.09;
        salarioComDesconto = salario - descontoINSS;
    }
    else if (salario >= 2594.93 && salario <= 5189.82){
        descontoINSS = salario * 0.11;
        salarioComDesconto = salario - descontoINSS;
    }
    else if (salario >= 5189.83){
        descontoINSS = 570.88;
        salarioComDesconto = salario - descontoINSS;
    }
    return (salarioComDesconto);
}
function impostoDeRenda (salarioComDesconto) {
    if (salarioComDesconto <= 1903.98){
        console.log('Isento de imposto de renda');
        salarioFinal = salarioComDesconto;
    }
    else if (salarioComDesconto >= 1903.99 && salarioComDesconto <= 2826.65) {
        descontoIR = (0.075 * salarioComDesconto) - 142.8;
        salarioFinal = salarioComDesconto - descontoIR;
    }
    else if (salarioComDesconto >= 2826.66 && salarioComDesconto <= 3751.05) {
        descontoIR = (0.15 * salarioComDesconto) - 354.8;
        salarioFinal = salarioComDesconto - descontoIR;
    }
    else if (salarioComDesconto >= 3751.06 && salarioComDesconto <= 4664.68) {
        descontoIR = (0.225 * salarioComDesconto) - 636.13;
        salarioFinal = salarioComDesconto - descontoIR;
    }
    else if (salarioComDesconto > 4664.68) {
        descontoIR = (0.275 * salarioComDesconto) - 869.36;
        salarioFinal = salarioComDesconto - descontoIR;
    }
    return (salarioFinal);
}
INSS(salario);
impostoDeRenda(salarioComDesconto);
console.log('Seu importo de renda é de R$'+descontoIR);
console.log('Seu desconto do INSS é de R$'+descontoINSS);
console.log('Seu salário final é de R$'+salarioFinal);

