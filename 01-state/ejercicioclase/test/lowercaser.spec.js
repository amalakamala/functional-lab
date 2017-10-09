const lowercaser = require('../lowercaser')

test('lowercaser deberia retornar un string en lowercase', 
	()=>{
		const actual = 'LOREM IPSUM'
		const expected = 'lorem ipsum'	
		
		// expected y .toBe son metodos
		expect(lowercaser(actual)).toBe(expected)	
	}
)

test(
	'test numbers',
	() => {
		const actual = 1
		expect(() => {
			lowercaser(actual)			
		}).toThrow() // metodo encapsula en una function anonima.. captura cualquier tipo de excepción 
	}
)