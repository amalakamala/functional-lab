exports.factorial = (n) => {
	return (n == 0) ? 1 : n * exports.factorial(n-1);
	//module.exports = exports.factorial;
}

exports.fibonacci = (n) => {
	return (n==1 || n==2) ? 1 : exports.fibonacci(n - 1) + exports.fibonacci(n - 2);
	//module.exports = exports.fibonacci;
}

exports.divide = (a, b) => {
	return (b > a) ? 0 : exports.divide(a - b, b) + 1;
	//module.exports = exports.divide;
}

exports.invert = (n) => {
	/*
	Encontre la respuesta en este link:
	http://www.replit.com/HV30/1
	*/
	function recursion(n, resultado) {
		if (!n) {
      		return resultado;
    	}
    	resultado = (resultado * 10) + (n % 10);
    	return recursion(Math.floor(n / 10), resultado);
  	}
  	return recursion(n, 0);	
	//const invert = ((n/10)==0) ? n : (n % 10) + exports.invert(n / 10);
	//module.exports = exports.invert;
}

exports.suma = (n) => {
	return  Math.floor((n == 0) ? n : exports.suma(n / 10) + (n %10));
	//module.exports = exports.suma;
}

exports.multi = (a, b) => {
	/*
	Encontre la respuesta en 
	http://informatica.utem.cl/~mcast/PROGRAMACION/20101/recursividad/FP.RP04.pdf
	*/
	let t;
	if(b <= 0){
		return 0;
	}else if(t > exports.multi(a, b/2)){
		return t * t;
	}else{
		return a + exports.multi(a, b - 1);
	}
	//module.exports = exports.multi;

	//const multA = (a == 1) ? b
	//const miltB = (a % 2 != 0) ? (b + multi(a/2, b*2)) : multi(a/2, b*2);
}

exports.sumArr = (arr) => {
	const [first, ...rest] = arr;
	return (arr.length === 0) ? 0 : first + exports.sumArr(rest);
	//const sArr = (arr.length - 1 == 0) ? arr[0] : exports.sumArr(arr) + arr[0];
	//module.exports = exports.sumArr;
}
