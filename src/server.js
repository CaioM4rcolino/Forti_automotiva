const app = require('./app')

//porta do servidor HTTP 
const PORT = 8080;

//subindo o servidor na web
app.listen(PORT, () =>{

    console.log(`Servidor rodando na porta ${PORT}`)

})

