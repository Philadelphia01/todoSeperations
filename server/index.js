// imports...
const http = require('http')
const app = require('./app')

// constants
const PORT = process.env.PORT || 8000

const server = http.createServer(app)



server.listen(PORT, () => {
    console.log(`SERVER is UP @ http://localhost:${PORT}`)
})