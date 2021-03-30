let valorInicial = 367;
let valorFinal = 816;

function lucroFinal(valorInicial, valorFinal){
	if (valorInicial <= 0 || valorFinal <= 0) {
		console.log('Informação inválida');
	}
	else {
		let imposto = 0.2;
		let valorCustoTotal = valorInicial + (valorInicial*imposto);
		let lucro = valorFinal - valorCustoTotal;
		console.log(valorCustoTotal);
		console.log(lucro);
	}
}
lucroFinal(valorInicial, valorFinal);