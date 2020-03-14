require('dotenv').config()
const express = require('express'),
    ctrl = require('./controller'),
    cors = require('cors'),
    {SERVER_PORT, CONNECTION_STRING} = process.env,
    massive = require('massive')

const app = express()

app.use(cors())
app.use(express.json())

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, console.log(`RUNNING ON ${SERVER_PORT}`))
    console.log(' DB CONNECTED')
})

app.get('/api/inventory', ctrl.getList)
app.get('/api/product/:id', ctrl.getProduct)
app.post('/api/product', ctrl.createProduct)
app.delete('/api/product/:id', ctrl.deleteProduct)
app.put('/api/product/:id', ctrl.editProduct)






