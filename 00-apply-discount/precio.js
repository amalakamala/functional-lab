'use strict';
//const discount = .2;

// Broken: returns new array but mutates same object references.
const applyDiscount = (cart,discount) => {
  //const newA = newA1.map(e=>e); //crea un nuevo array  .slice(0,cart.length) 
  const newA = cart.map(e => Object.assign({}, e))

  if (!newA.length){
    return [];
  }
  
  const current =  newA.shift();
  current.price *= (1 - discount);
  return [current].concat(applyDiscount(newA,discount)); //no llama a cart si no al newA, más precio
  };

module.exports = applyDiscount;