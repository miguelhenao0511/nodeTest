/*	
	Definicion de una funcion de manera tradicional
*/
function prom1(first_note, second_note, third_note){
	let prom = (first_note + second_note + third_note)/3;
	console.log(prom);
}

/* 	
	Definicion de una funcion utilizando la sintaxis flecha (forma en la que se debe definir 
	las funciones en node).
	para probar el asincronismo de node, se hace una espera en la respuesta de la funcion
	de 2 segundos.
*/
let prom2 = (first_note, second_note, third_note) => {
	setTimeout(function() {
		let prom = (first_note + second_note + third_note)/3;
			console.log(prom);		
	}, 2000);
}

/*
	Definicion de una funcion utilizando la sintaxis flecha (forma en la que se debe definir 
	las funciones en node).
	cuando la funcion solo contiene una linea de codigo se pueden omitir los corchetes
*/
let prom3 = (first_note, second_note, third_note) => console.log((first_note + second_note + third_note)/3);


/*
	Definir la funcion con el argumento callback para tener un control del asincronismo cuando esta sea
	llamada.
*/
let prom4 = (first_note, second_note, third_note, callback) => {
	setTimeout(function() {
		let prom = (first_note + second_note + third_note)/3;
		callback (prom);	
	}, 1000);
}

prom1(5,4,5);
prom2(5,1,5);
prom3(5,3,5);

/*
	cuando se hace un llamado a una funcion que contiene el argumento de callback se debe crear una
	funcion generica para ejecutar la accion del resultado.
*/
prom4(5,5,5, function(result){
	console.log('callback function ' + result);
});

/*
	Para instalar nodemon de manera global (recomendada) se debe ingresar por consola el siguiente
	comando: npm install -g nodemon
	Con esta herramienta podemos cargar los archivos .js por consola y tener una ejecucion de los cambios 
	en tiempo real, ya que el programa detecta los cambios automaticamente y cada vez que reconozca
	alguno, ejecutara de nuevo el script.
*/