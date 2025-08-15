// calculadora.js
export function sumar(a, b) {
    return a + b;
}

export function multiplicar(a, b) {
    return a * b;
}

export function dividir(a, b) {
    if (b === 0) {
        return "Error: No se puede dividir entre cero.";
    }
    return a / b;
}
