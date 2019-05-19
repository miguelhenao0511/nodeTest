/*
	Se define una variable para asignar valores a los argumentos que recibira el comando, se les
	asigna un valor por defecto y alias, para que un argumento sea obligatorio se le debe agregar
	el atributo demand: true
*/
const options = {
	math: {
		default: 0,
		alias: 'm'
	},
	english: {
		default: 0,
		alias: 'e'
	},
	programming: {
		demand: true,
		alias: 'p'
	}
};

/*
	Se hace el import de la libreria externa yargs, la cual permite ingresar comando por consolas.
	Se define un comando pasando como parametros: nombre del comando, descripcion del comando y 
	argumentos
*/
const argv = require ('yargs')
			.command('prom', 'Get prom', options)
			.argv

/*
	Para declarar una variable se utilizan -- , para llamar el alias se usa -
*/
console.log(argv.math);
console.log(argv);
console.log('El promedio es: ' + (argv.m+argv.e+argv.p)/3)