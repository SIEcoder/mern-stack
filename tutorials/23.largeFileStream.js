const {createServer} = require('http')
const {createReadStream} = require('fs')

const server = createServer((req, res) => {
    const stream = createReadStream('./contents/bigFile.txt', 'utf8')
    stream.on('open', () => {
    stream.pipe(res)
    })
    stream.on('error', (error) => {
        res.end(error)
    })
})



const port = 5000
server.listen(port, () => {
    console.log(`Server listening on port ${port}....`)
})