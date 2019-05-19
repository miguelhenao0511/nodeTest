/*
	Se define un "objeto" estudiante con los atributos nombre, edad y notas, esta ultima esta compuesta
	por 3 atributos los cuales son: matematicas, ingles y programacion.
*/

let student = {
	name: 'Miguel',
	age: 25,
	notes: {
		math: 4,
		english: 4,
		programming: 5
	}
};

/*
	Se define la funcion para obtener el promedio de las notas del estudiante
*/
let getProm = (first_note, second_note, third_note) => (student.notes.math + student.notes.english + student.notes.programming)/3;


/*
	Se define la funcion para exportar los datos de este archivo
*/
module.exports = {
	student,
	getProm
}