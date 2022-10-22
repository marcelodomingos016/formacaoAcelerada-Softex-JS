
const express = require('express')

const app = express()

const port = 3000

app.get('/', (request, response) => {
    console.log('Entrou aqui')
    response.send('Helo Word!')
})

app.listen(port, () => {
    console.log(`App online na porta ${port}`)

})