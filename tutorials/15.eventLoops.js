const {createServer} = require('http')

const server = createServer((req, res) => {
    console.log('Request received')
    res.end('Hello world!')
})

server.listen(5000, () => {
    console.log('Server listening on port 5000....')
})
console.log('This got run first')