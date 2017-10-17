function lala(){
	fetch('https://www.google.com', function(err,res){
		if(err){
			console.log(err)
			return
		}

		console.log(res)
	})
}
lala();

//fetch no funciona en backend, pero si request

const request = requiere('request')

function lala(){
	return new Promise ((resolve,reject) => { //Constructor de nueva promesa
		request('https://www.google.com', function(err,res){

			if(err){
				console.log(err)
				return
			}

			console.log(res)
		})	
	}) 
}



execLoading(true)
lala()
.then((response) => {
	console.log(response)
	execLoading(false)
	return response
})
.catch(err => {
	console.log(err)
})
