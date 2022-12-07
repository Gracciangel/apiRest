const express  = require('express') ; 
const app  = express();  
app.use(express.json()) ; 
app.use(express.urlencoded({extended : true})) ; 
const {Router} = express
app.use(express.static('html')) //===> aqui especificamos que todo lo que este alojado en esta carpeta será servido como documento estático, es decir pueden ser imagenes, html inclusive archivos js del lado del front 

//array
const products  = []; 


//objects

const fender = {title: 'fender telecaster', price: 2300 , thumbnail: 'photo Fender'}
const gibson = {title: 'Gibson 335', price: 3500 , thumbnail: 'photo'}
const amplifier = {title: 'Amplifier marshall plexi', price: 2500 , thumbnail: 'photo'}
const pedal = {title: 'Blue Sky Reverb', price: 1500, thumbnail:'photo pedal'}

const asignId = () =>{
    let count =1
products.forEach(e => {
    e.id=count
    count++
})
}
// express 

const saveProducts = Router()
const deletProd = Router()


app.listen(8080 , ()=> {
    console.log('i´m here')
})

app.get('/api', (req, res) => {
    res.send('welcome to the api of products of music')
})

app.get('/products', (req, res) => {
    res.end(JSON.stringify(products, null ,2))
})

app.use('/products', saveProducts) ;

saveProducts.post('/save', (req, res) =>{
        products.push(req.body) ;
        res.json({
            products
        })

})

deletProd.delete('/products/:id', (req, res) => {
    const id = req.params.id  ;
    products.splice(id, 1)
    res.json({products})
})