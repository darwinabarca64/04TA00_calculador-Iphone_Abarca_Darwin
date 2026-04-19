class Calculadora { //Define la estructura y el comportamiento//
    #input;
    constructor(idInput) {
        this.#input = document.getElementById(idInput); // Encapsulcación //
        this.limpiar();
    }
    // Métodos-Todo lo que hace la calculadora //
    limpiar() {
        this.#input.value = "";
    }
    agregar(valor) {
        if (valor === '.' && this.#input.value.includes('.')) return;
        this.#input.value += valor;
    }
    operacion(operador) {
        this.#input.value += operador;
    }
    calcular() {
        try {
            this.#input.value = eval(this.#input.value);
        } catch (error) {
            this.#input.value = "Error";
        }
    }
    cambiarSigno() {
        this.#input.value = parseFloat(this.#input.value) * -1;
    }
    porcentaje() {
        this.#input.value = parseFloat(this.#input.value) / 100;
    }
    alCuadrado() {
        this.#input.value = Math.pow(parseFloat(this.#input.value), 2);
    }
    alCubo() {
        this.#input.value = Math.pow(parseFloat(this.#input.value), 3);
    }
    raizCuadrada() {
        this.#input.value = Math.sqrt(parseFloat(this.#input.value));
    }
    insertarPi() {
        this.#input.value = Math.PI;
    }
}

// Creamos una instancia real del objeto usando 'new' //
const miCalc = new Calculadora('inputID');

function add(v) { miCalc.agregar(v); }
function cleanInput() { miCalc.limpiar(); }
function operacionFunction(op) { miCalc.operacion(op); }
function igual() { miCalc.calcular(); }
function inverso() { miCalc.cambiarSigno(); }
function porciento() { miCalc.porcentaje(); }
function cuadrado() { miCalc.alCuadrado(); }
function cubo() { miCalc.alCubo(); }
function raiz() { miCalc.raizCuadrada(); }
function pi() { miCalc.insertarPi(); }