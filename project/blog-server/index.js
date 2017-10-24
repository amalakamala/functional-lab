const data = require('./data.json')
// Dependencias de web service
const express = require('express')

const bodyParser = require('body-parser') //operar los request

const cors = require('cors') // le dice a nuestro web server k recibe llamadas de otras ip

//APP
const app = express()//funtion express

//cors permite llamadas de cualquier dominio
app.use(cors())
app.use(bodyParser.urlencoded({extended: true})) 
app.use(bodyParser.json()) //exclusivamente recibe json

const port = process.env.PORT || 8080
const router = express.Router()


//puerto
router.get('/posts', (req, res) => {
    // devolvemos todos los post
    res.json(data);
})


//entrega info del postk tiene ese id
router.get('/posts/:id', (req, res) => {
	// devolvemos solo un post filtrado
    /*
	req:{
		params:{
			id:{
	
			}
		}
	}
    */
    const { id } = req.params
    // data necesitamos sacar que  haga mach con la url
    console.log(typeof id)
    const post = data.filter((p) =>{
    	return p.id === parseInt(id, 10) //base decimales 
    })[0]

    //comprobamos si es que hay algún dato filtrado
    if(typeof post === 'undefined'){
    	res.status(404).json({})
    	return
    }

    res.json(post)
    //console.log(id)
})

app.use('/api', router)

app.listen(port)
console.log('Magic happens on port ' + port)


//curl http://localhost:8080/api/posts
