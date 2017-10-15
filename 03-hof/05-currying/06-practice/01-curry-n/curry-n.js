const curryN = fn => n => fn.length <= 1 ? fn(n) : curryN(fn.bind(null, n));

module.exports = curryN


/*
function curryN(fn, n) {
  return function (n){
	return fn(n)
  }
}

module.exports = curryN

*/