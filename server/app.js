const express = require('express');
const cors = require('cors')

const todoRoute = require('./routes/todoRoute')

const app = express();
app.use(cors())
app.use(express.json())


app.use('/api/todos', todoRoute)

app.use('/', (request, response) => {
    response.json({message: "the server is up!!!"})
})


module.exports = app