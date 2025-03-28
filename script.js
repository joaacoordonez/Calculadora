
let num1 = 0;
let num2 = "";
let opera;
let operacionEnCurso = false;

let suma = 1;
let resta = 2;
let multiplicacion = 3;
let dividir = 4;
let porcentaje = 5;


function mostrarNumero(e) {
    if (operacionEnCurso) {
        operacionEnCurso = false;
    }
    document.getElementById("resultado").innerText += e.target.value;
    num2 += e.target.value;
}

function operar(valor) {
    if (!operacionEnCurso && num2 !== "") {
        num1 = parseFloat(num2)
        num2 = "";
        opera = valor;
        operacionEnCurso = true;
        let signo = "";
        switch (valor) {
            case 1: signo = "+"; break;
            case 2: signo = "-"; break;
            case 3: signo = "×"; break;
            case 4: signo = "÷"; break;
            case 5: signo = "%"; break;
        }
    document.getElementById("resultado").innerText += `${signo}`; 
    }
}

function operaciones() {
    if (num2 === "") return;
    num2 = parseFloat(num2);
    switch (opera) {
        case 1:
            num1 += num2;
            break;
        case 2:
            num1 -= num2;
            break;
        case 3:
            num1 *= num2;
            break;
        case 4:
            num1 /= num2;
            break;
        case 5:
            num1 = (num1 / 100) * num2;
            break;
        default:
            break;
    }
    let resultado = document.getElementById("resultado");
    resultado.innerText = num1;
    if (num1 >= 0) {
        resultado.style.color = "green";
    }
    else{
        resultado.style.color = "red";
    }
    num2 = num1.toString();
    operacionEnCurso = false;
}

const Borrar = () => {
    document.getElementById("resultado").innerText = "";
    num1 = 0;
    num2 = "";
    opera = null;
    operacionEnCurso = false;
    resultado.style.color = "white";
}
