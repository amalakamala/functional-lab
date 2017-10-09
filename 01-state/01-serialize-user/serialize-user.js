const serializeUser = user => {
    const userA =  Object.assign({}, user)   
	userA.name = (userA.name.length > 10) ? `${userA.name.slice(0, 7)}...` : userA.name;
	userA.date = userA.date.toJSON();
	return JSON.stringify(userA);
};

module.exports = serializeUser;