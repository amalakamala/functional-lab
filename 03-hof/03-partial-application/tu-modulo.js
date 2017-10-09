const log = (...args) => args.join(' ');

const logger = (namespace) => {
	let message = namespace
	return log
}

module.exports = {
	log,
	logger,
}

/*
exports.log = (...args) => this.namespace + ' ' + args.join(' ');

exports.logger = (namespace) => exports.log.bind(null,{
	namespace: namespace
});


exports.log = (...args) => args.join(' ');

exports.logger = (namespace) => exports.log.bind(null,namespace);


*/

//