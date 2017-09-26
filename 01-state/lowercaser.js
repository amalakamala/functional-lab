/*
Forma vieja:
function lowercaser(input){
	return input.toLowerCase()
}
*/
/*
	*Si la function posee 1 solo linea se puede poner en una linea
	* lowercase recibe input y lo transforma a lowercase.

	* Al poner toString() ya no es una function pura, se llama inmutabilidad
*/

const lowercaser = (input) => {
	if(typeof input !== 'string'){
		// throw corta la respuesta y genera un error
		throw ('input is not a valid string')
	}

	return input.toLowerCase()
}	

/*
	modul.exports = Agrega un metodo que agrega un scope.
*/

module.exports = lowercaser