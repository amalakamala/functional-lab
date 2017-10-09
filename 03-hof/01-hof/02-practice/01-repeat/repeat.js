function repeat(operation, num) { //declara la función
	for (let i= 0; i < num; i++){
		operation() //Usa la función
	}
}

function repeat2(fn, num){
	if( num === 0){
		return //retorno void denominacion de un retorno vacio - retorna nulo o undefinesm
	}
	fn()
	return repeat2(fn, num -1)
}

// No borres la línea de abajo
module.exports = repeat;

// npm install jest --save-dev



// operador-ternario
/*
condicion ? true : falso (en una sola linea)
let truty = true
truty === true ? 'es verdader' : 'es falso'
(truty === true  && false === true)? 'es verdader' : 'es falso'
*/



/*

[1,2,3,4,5,6].reduce()= ((anterior, elmactual, idx) => {
	return anterior + elmactual
}, 0)

Resutado : 21
*/