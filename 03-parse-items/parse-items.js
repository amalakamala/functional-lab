const parseItems = (items) => {
	const itemsA =  Object.assign([], items)  
	return itemsA.filter(function (e){if(parseInt(e) !== isNaN(e)){return parseInt(e)}}).map(e=>parseInt(e)).sort()
	/*
   	return itemsA.map(e=>
   		(Number.isInteger(parseInt(e)) === true) ? parseInt(e) : throw('input is not a valid number')
	).sort()	
	*/  		
};
//Number.isInteger(123) = true
/*
Es necesario poner que la función solo acepte argumentos de números
ya que si ingresa texto debera entregar un error, pero debe haber una opción más elegante
*/
module.exports = parseItems;


/*
const parseItems = (items) => {
	const itemsA =  Object.assign([], items)  
   	return itemsA.map(e=>parseInt(e)).sort()
};

module.exports = parseItems;
*/