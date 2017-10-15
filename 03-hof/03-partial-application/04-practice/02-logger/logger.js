const { logger } = require('./tu-modulo');

const info = logger('INFO:')
/*
const earn = looger('WARN');
info('this is an info message')
// => 'INFO: this is an info message'
*/
const warn = logger('WARN:')
function callAPI(response, error){
	if(!error){
		earn("algo paso","estamos trabajando")
	}
	info('respuesta recibida')
	console.log(response)
}


callAPI('jaebgjeagbesg',null)
//warn('this is a warning message', 'with more info')
// => 'WARN: this is a warning message with more info'






/*

function callAPI(response, error){
	if(!error){
		earn("algo paso","estamos trabajando")
	}
	info('respuesta recibida')
	console.log(response)
}

*/