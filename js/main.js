const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

let operando1 = null;
let operando2 = null;
let operador = null;
let resultadoMostrado = false;

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botoncito = boton.textContent;

        if (boton.id === "c") {
            pantalla.textContent = "0";
            operando1 = null;
            operando2 = null;
            operador = null;
            return;
        }

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "sintax_error") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if (["+", "-", "*", "/"].includes(botoncito)) {
            operador = botoncito;
            operando1 = parseFloat(pantalla.textContent);
            resultadoMostrado = true;
            return;
        }

        if (boton.id === "igual") {
            if (operando1 !== null && operador && !isNaN(parseFloat(pantalla.textContent))) {
                operando2 = parseFloat(pantalla.textContent);
                let resultado;

                switch (operador) {
                    case "+":
                        resultado = operando1 + operando2;
                        break;
                    case "-":
                        resultado = operando1 - operando2;
                        break;
                    case "*":
                        resultado = operando1 * operando2;
                        break;
                    case "/":
                        resultado = operando1 / operando2;
                        break;
                }

                pantalla.textContent = resultado;
                operando1 = resultado;
                operando2 = null;
                operador = null;
                resultadoMostrado = true;
            } else {
                pantalla.textContent = "sintax_error";
            }
            return;
        }

        if (pantalla.textContent === "0" || resultadoMostrado) {
            pantalla.textContent = botoncito;
            resultadoMostrado = false;
        } else {
            pantalla.textContent += botoncito;
        }
    });
}); 
