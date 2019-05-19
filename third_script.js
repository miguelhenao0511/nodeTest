/*
	Se define una constante la cual va a almacenar el script importado, para esto se hace llamado a la funcion
	require() y se pasa como parametro el nombre del script, adicionalmente se debe agregar al inicio del
	nombre un ./ para indicar que es un script propio.

	Se aplica el concepto de destructuracion para simplificar la llamada a las funciones y variables importadas
*/
const {student, getProm} = require ('./second_script');

/*
	Se realizar un require nativo, el cual hace un llamado a los script ya implementados por node, para el
	ejemplo se va a utilizar los scripts para el manejo de archivos (fs)
*/
const fs = require ('fs');

/*
	Se puede tambien aplicar la destructuracion para objetos
	Para renombrar variables o funciones, luego de la definicion de estas se les añade un : y luego se le
	reasigna el nuevo nombre
*/
let {name, age : edad, notes: {math, english, programming}} = student;

console.log('El nombre del estudiante es: ' + name);
console.log('La edad del estudiante es: ' + edad);
console.log('El promedio del estudiante es: ' + getProm(math, english, programming));

let createFile = (student) => {
	text = 'El estudiante ' + name + '\n' +
			'ha obtenido un promedio de: ' + getProm(math, english, programming);
	fs.writeFile('Promedio.txt', text, (err) => {
		if (err) throw (err);
		console.log('Se ha creado el archivo');
	});
};

createFile(student);