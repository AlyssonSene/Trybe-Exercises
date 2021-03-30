var salario = 2000;
var salarioComDesconto = 0;

function INSS (salario){
    var descontoINSS = 0;
    if (salario <= 1556.94) {
        descontoINSS = salario - (salario*0.8);
    }
    else if (salario >= 1556.95 && salario <= 2594.92){
        descontoINSS = salario - (salario*0.9)
    }
    else if (salario >= 2594.93 && salario <= 5189.82){
        descontoINSS = salario - (salario*0.11)
    }
    else if (salario >= 5189.83){
        descontoINSS = salario - 570.88;
    }
    
    return salarioComDesconto = descontoINSS;
    
} 

function impostoDeRenda(salarioComDesconto) {
    var descontoIR = 0;
    if (salarioComDesconto <= 1903.98){
        console.log('Isento de imposto de renda');
    }
}
INSS (salario);
impostoDeRenda (salarioComDesconto);


