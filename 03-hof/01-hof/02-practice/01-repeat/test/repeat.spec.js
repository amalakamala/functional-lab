const repeat = require('../repeat')
//describe = encapsula los test que son propios de repeat
describe('repeat()', () => {
	test('Si repeat recibe num = 3, la duncion deberia ejecutar 3 veces',()=>{
		//contador de iteraciones
		let iter = 0

		const num = 3
		const iter_num = 3 //número de iteraciones

		const fn = () => {
			iter = iter + 1
		}
		repeat(fn, num)
		expect(iter).toBe(iter_num)
	})
})


// boilerplate es como un template que tiene lo básico para usar algo más completo