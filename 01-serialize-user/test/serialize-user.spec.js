const serializeUser = require('../serialize-user')

test('Recivir un Json y devolver un String', 
	()=>{
	const actual = {userId:'xxx',name:'Grace Hopper',country:'us',date: new Date()}
	const expected = '{"userId":"xxx","name":"Grace H...","country":"us","date":'+JSON.stringify(new Date().toJSON())+'}'
	expect(serializeUser(actual)).toBe(expected);
})

test('No debería mutar el objeto que recibe como argumento', 
	()=>{
	const actual = {userId:'xxx',name:'Grace Hopper',country:'us',date: new Date()}
	expect(actual).toEqual({userId:'xxx',name:'Grace Hopper',country:'us',date: new Date()})
})