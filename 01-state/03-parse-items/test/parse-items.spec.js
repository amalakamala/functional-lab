const parseItems = require('../parse-items')

test('No debería mutar array de entrada ni debería mutar objetos', 
	()=>{
	const actual = [ '6', '3', '5', '2', '4' ]
	expect(parseItems(actual)).toEqual([ 2, 3, 4, 5, 6 ])
	expect(actual).toEqual([ '6', '3', '5', '2', '4' ])
	}
)

test('debería retornar un arreglo de números', () => {
    parseItems(['6', '3', '5', '2', '4']).forEach(i => expect(Number.isInteger(i)).toBeTruthy())
});

test('debería retornar un arreglo ordenado', () => {
    expect(parseItems(['6', '3', '5', '2', '4'])).toEqual([2, 3, 4, 5, 6])
});

test('test numbers',
	() => {
		const actual = [ 'a', 'b', '5', '3', '4' ]
		expect(parseItems(actual)).toEqual([ 3, 4, 5])
	}
)


/*
test('test numbers',
	() => {
		const actual = [ 'a', 'b', 'c', 'd', 'e' ]
		expect(() => {
			parseItems(actual)
		}).toThrow()
	}
)
*/
