/*Ejercicio 1*/

let btnRojo = document.getElementById('btn-rojo');
let btnAzul = document.getElementById('btn-azul');
let btnVerde = document.getElementById('btn-verde');
let ejercicio1 = document.getElementById('ejercicio1');

btnRojo.addEventListener('click', function(){
    ejercicio1.style.backgroundColor = 'red';
});
btnAzul.addEventListener('click', function(){
    ejercicio1.style.backgroundColor = 'blue';
});
btnVerde.addEventListener('click', function(){
    ejercicio1.style.backgroundColor = 'green';
});

/*Ejercicio 2*/
let textArea = document.getElementById('textarea');
let caracteres = document.getElementById('caracteres');
let cantidadCaracteres = textArea.value.length;
textArea.addEventListener('keyup',() => {
    cantidadCaracteres = textArea.value.length;
    caracteres.innerText = cantidadCaracteres;
});

/*Ejercicio 3*/
var alumnos = [
    {
      nombre: 'Juan Gomez',
      nota: 7
    },
    {
      nombre: 'Pedro Rodriguez',
      nota: 4
    },
    {
      nombre: 'Roxana García',
      nota: 8
    },
    {
      nombre: 'Luciano Lopez',
      nota: 5
    },
    {
      nombre: 'Fernanda Gimenez',
      nota: 6
    },
    {
      nombre: 'Florencia Martinez',
      nota: 10
    },
    {
      nombre: 'Raul Sanchez',
      nota: 7
    },
    {
      nombre: 'Sandra Figueroa',
      nota: 8
    }  
];
const alumnosAprobados = alumnos.filter(alumnos => alumnos.nota > 6);
const rowAlumnosAprobados = document.getElementById('alumnosAprobados');
console.log(
    alumnosAprobados
);