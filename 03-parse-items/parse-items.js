const parseItems = (items) => {
	const itemsA =  Object.assign([], items)  
   	return itemsA.map(e=>parseInt(e)).sort()
};
//Number.isInteger(123) = true
module.exports = parseItems;