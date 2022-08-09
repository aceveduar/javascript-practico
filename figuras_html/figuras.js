// **** Código del cuadrado ****
console.group("Cuadrados");

// Perimetro
function perimetroCuadrado(ladoCuadrado) {
    const perimetro = ladoCuadrado * 4;
    return (`El perimetro del cuadrado es: ${perimetro}cm`)
};

// Área
function areaCuadrado(ladoCuadrado) {
    const area = ladoCuadrado * ladoCuadrado;
    return (`El área del cuadrado es: ${area}cm^2`)
};

console.groupEnd();





// **** Código del triángulo ****
console.group("Triángulos");

// Perimetro
function perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo) {
    const perimetro = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
    return (`El perimetro del triángulo es: ${perimetro}cm`);
};

// Área
function areaTriangulo(baseTriangulo, alturaTriangulo) {
    const area = (baseTriangulo * alturaTriangulo) / 2;
    return (`El area del triángulo mide: ${area}cm^2`);
};

console.groupEnd();





// **** Código del círculo ****
console.group("Círculos");

// Diámetro
function diametroCirculo(radio) {
    const diametro = radio * 2;
    return (diametro)
};

const PI = Math.PI;
// Perimetro
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    const perimetro = diametro * PI;
    return (`El perimetro del círculo es: ${perimetro}cm`)
}

console.log(perimetroCirculo(5));

// Área
function areaCirculo(radioCirculo) {
    const area = (radioCirculo * radioCirculo) * PI;
    return (`El área del círculo es: ${area}cm^2`)
};

console.groupEnd();



// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() { 
    
}

function calcularPerimetroCuadrado() { 

}

// ff