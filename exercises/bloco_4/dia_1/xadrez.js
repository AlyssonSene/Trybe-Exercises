let tipoDePeça = 'rainha'

switch (tipoDePeça) {
    case "peão":
        console.log('Se movimenta apenas para frente, uma casa por vez e ataca na diagonal');
        break;
    case "torre":
        console.log('Se movimenta e ataca em linha reta para frente e para trás, tanto na horizontal quanto na vertical');
        break;
    case "bispo":
        console.log('Se movimenta e ataca na diagonal para frente e para trás');
        break;
    case "cavalo":
        console.log('Se movimenta em L, podendo pular por cima de outras para atacar');
        break;
    case "rei":
        console.log('Se movimenta a ataca uma casa por vez para ambas as direções');
        break;
    case "rainha":
        console.log('Se movimenta e ataca em ambas as direções sem limites de casas');
        break;
        default:
            console.log('Peça inválida');
}