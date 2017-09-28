const applyDiscount = require('../precio')

test('Debería retornar objetos con descuento indicado', 
	()=>{
		const actual = [{ price: 1 },{ price: 2 },{ price: 3 }];
		const discount = 0.3
		const expected = [{ price: 0.7 },{ price: 1.4},{ price: 2.0999999999999996}];	
		
		// expected y .toBe son metodos
		expect(applyDiscount(actual,discount)).toEqual(expected)	
	}
)

test('elPrecio deberia retornar un array', 
	()=>{
	const actual = [];
	const discount = Math.random() //Puede ser cualquier nº
	expect(Array.isArray(actual)).toEqual(Array.isArray(applyDiscount(actual,discount)))		
})

test('elPrecio deberia retornar array con mismo length', 
	()=>{
	const actual = [];
	const discount = Math.random() //Puede ser cualquier nº
	expect(actual.length).toEqual(applyDiscount(actual,discount).length)		
})

test('No debería mutar array de entrada ni debería mutar objetos', 
	()=>{
	const actual = [{ price: 1 },{ price: 2 },{ price: 3 }]
	const discount = 0.3
	expect(applyDiscount(actual,discount)).toEqual([{ price: 0.7 },{ price: 1.4},{ price: 2.0999999999999996}])
	expect(actual).toEqual([{ price: 1 },{ price: 2 },{ price: 3 }])		
})

