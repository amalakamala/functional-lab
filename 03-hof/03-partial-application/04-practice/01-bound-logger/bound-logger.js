const log = (namespace) => (...args) => namespace + ' ' + args.join(' ');

const logger = (namespace) => {
	let message = namespace
	return log(message)
}

module.exports = logger;


/*

const log = (namespace,...args) => *** +": "+ namespace + ' ' + args.join(' ');

const logger = (namespace) => {
	let message = namespace
	return log
}

module.exports = logger;

*/