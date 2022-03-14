calculadora();

function calculadora(){
    let resultado;
    let numero1 = Number(prompt("Ingresa el primer numero: ", "0"));


    if(isNaN(numero1)){
        alert("No ingresaste un numero");
        calculadora();
        return;
        
    }
    let operador = prompt("¿Qué operación quieres realizar?\nSuma \ +\nResta \ -\nMultiplicacion \ *\nDivision \ /", "+");
    operador = operador.toLowerCase();
    

    if((operador !== 'suma') && (operador !== 'resta') && (operador !== 'multiplicacion') && (operador !== 'division')
     && (operador !== '+') && (operador !== '-') && (operador !== '*') && (operador !== '/')){
        alert("No ingresaste un operador valido");
        calculadora();
        return;
    }
    
    let numero2 = Number(prompt("Ingresa el segundo numero: ", "0"));
    
    if(isNaN(numero2)){
        alert("No ingresaste un numero");
        calculadora();
        return;
    }

    switch(operador){
        case 'suma':
        case '+':
            console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`);
            alert(`${numero1} + ${numero2} = ${numero1 + numero2}`);
            document.getElementById("resultado").innerHTML =  `${numero1} + ${numero2} = ${numero1 + numero2}`;
            break;
        case 'resta':
        case '-':
            console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`);
            alert(`${numero1} - ${numero2} = ${numero1 - numero2}`);
            document.getElementById("resultado").innerHTML = `${numero1} - ${numero2} = ${numero1 - numero2}`;
            break;
        case 'multiplicacion':
        case '*':
            console.log(`${numero1} * ${numero2} = ${numero1 * numero2}`);
            alert(`${numero1} * ${numero2} = ${numero1 * numero2}`);
            document.getElementById("resultado").innerHTML = `${numero1} * ${numero2} = ${numero1 * numero2}`;
            break;
        case 'division':
        case '/':
            console.log(`${numero1} / ${numero2} = ${numero1 / numero2}`);
            alert(`${numero1} / ${numero2} = ${numero1 / numero2}`);
            document.getElementById("resultado").innerHTML = `${numero1} / ${numero2} = ${numero1 / numero2}`;
            break;
        default:
            alert("Operador invalido, intenta otra vez.");
            calculadora();
            return;


    }
}

