//aplicación y currying
function sumAndMult (arr){
	const sum = arr.reduce((acc,elem) => acc + elem, 0 ) // 0 valor con que se inicializa
	console.log(sum)
	return (factor) => {
		const mul = sum *factor 
		return  (div) =>{
			return mul / div
		}
	}
}

const sumArr = sumAndMult([1,2,3,4,5,6])(2)(2) //currying encapsula procesos - no comparte memoria con otras funciones
console.log(sumArr

// node partial.js -> nombre archivo para correr en la consola de js
