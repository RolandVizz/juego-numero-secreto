
function funcion1(k, m){
    console.log(k / Math.sqrt(m));
    return;
}
console.log('resultado');
function funcion2(n){
    let base = n;
    let resultado = 0;
    while(base >= 1){
        console.log(resultado);
        if(resultado == 0){
            base * (base - 1)
            base--;
        }else{
            base * resultado
        }
        //resultado += resultado == 0 ? base * (base - 1) : base * resultado;
        base --;
    }
    console.log(resultado);
    return ;
}

function funcion3(numero){
    return numero * 2;
}

function funcion4(valor1, valor2, valor3){
    return (valor1 + valor2 + valor3) / 3;
}

function funcion5(valor1, valor2){
    console.log(`${valor1 > valor2 ? valor1 : valor2}`);
}

function funcion6(valor){
    return valor * valor;
}

function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 1);
    }
  }
  // Ejemplo de uso
  let numero = 5;
  let resultado = calcularFactorial(numero);
  console.log(`El factorial de ${numero} es ${resultado}`);