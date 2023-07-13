
const express = require ('express')
const app = express()
const bodyParser = require('bodyParser')
const port = 3000 //porta padrão

app.use(bodyParser.urlencoded ({extended: true }));
app.use(bodyParser.json());

const router = express.router();
router.get('/', (req, res) => res.json({message: 'funcionando!'}));

//GET / aplicardesconto
router.get('/aplicardesconto/:valor/:desconto', (req,res) =>{
     const valor = parseInt(req.params.valor)
     const desconto = parseInt(req.params.desconto)
     res.json({valordescontado: (valor - desconto)})
})

app.use('/', router)

if (require.main === module){
    //inicia o servidor
    app.listen(port)
    console.log ('API funcionando!')
}

module.exports = app