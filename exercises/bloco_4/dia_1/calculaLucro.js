let valorInicial = 17.8;
let valorFinal = 28.3;

function lucroFinal(valorInicial, valorFinal){
	if (valorInicial <= 0 || valorFinal <= 0) {
		console.log('Informação inválida');
	}
	else {
		let imposto = 0.2;
		let valorCustoTotal = valorInicial + (valorInicial*imposto);
		let lucro = valorFinal - valorCustoTotal;
		let lucroFinal = 1000*lucro;
		console.log(valorCustoTotal);
		console.log(lucro);
		console.log('O lucro após a venda de 1000 unidades é de R$' +lucroFinal);
	}
}
lucroFinal(valorInicial, valorFinal);